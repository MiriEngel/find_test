const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Notification = db.Notification;

module.exports = {
    getAll
};

async function getAll(userId) {
    return await Notification.find({userId}).sort({created: -1}).limit(10).select();
}
