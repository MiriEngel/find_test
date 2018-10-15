const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    addImei
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.hash)) {
        // const { hash, ...userWithoutHash } = user.toObject();
        const userWithoutHash = Object.assign({}, user.toObject(), { hash: undefined });
        const token = jwt.sign({ sub: user.id }, config.secret);
        //return { ...userWithoutHash, token };
        return Object.assign({}, userWithoutHash, { token });
    }
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(userParam) {
    // validate
    if (await User.findOne({ email: userParam.email })) {
        throw 'email "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        throw 'email "' + userParam.email + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function addImei(id, imei) {
    try {
        const user = await User.findById(id);
        // validate
        if (!user) throw 'User not found';
        if (user.imei.indexOf(imei) == -1) {
            user.imei.push(imei)
            await user.save();
        }
        return user;
    } catch (err) {
        console.log(err);
    }
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}