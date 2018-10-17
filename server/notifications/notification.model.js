const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    message: { type: String },
    created: { type: Date, default: Date.now },
    read: { type: Boolean, required: true, default: false }
});

schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('Notification', schema);