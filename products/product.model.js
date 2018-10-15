const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    details: { type: String },
    name: { type: String, required: true },
    created: { type: Date, default: Date.now },
    imei: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Product', schema);