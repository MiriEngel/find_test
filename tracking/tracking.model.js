const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    imei: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    user_id: { type: String },
    lat: { type: String, required: true },
    lon: { type: String, required: true },
 
});

schema.set('toJSON', { virtuals: true });
//schema.index({ lastPoints: '2dsphere' })
module.exports = mongoose.model('Tracking', schema);