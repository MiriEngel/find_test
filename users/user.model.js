const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    imei:{ type: String, required: true },
   // lastPoints: { type: [Number], index: '2dsphere'}
});

schema.set('toJSON', { virtuals: true });
//schema.index({ lastPoints: '2dsphere' })
module.exports = mongoose.model('User', schema);