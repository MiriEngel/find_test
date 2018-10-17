const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Product = db.Product;
const User = db.User;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};


async function getAll(userId) {
    return await Product.find({userId}).select();
}

async function getById(id) {
    return await Product.findById(id).select();
}

async function create(userId,productParam) {
    try {
        const product = new Product(productParam);
        product.userId = userId;
        // save user
        await product.save();
        await addImei(userId,productParam.imei)
    } catch (err) {
        console.log(err)
    }
}

async function update(id, productParam) {
    const product = await Product.findById(id);

    // validate
    if (!product) throw 'Product not found';
   
    // copy userParam properties to user
    Object.assign(product, productParam);

    await product.save();
}

// async function addImei(id, imei) {
//     try {
//         const user = await User.findById(id);
//         // validate
//         if (!user) throw 'User not found';
//         if (user.imei.indexOf(imei) == -1) {
//             user.imei.push(imei)
//             await user.save();
//         }
//         return user;
//     } catch (err) {
//         console.log(err);
//     }
// }

async function _delete(id) {
    await Product.findByIdAndRemove(id);
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
    } catch (err) {
        console.log(err);
    }
}