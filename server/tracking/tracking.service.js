const db = require('_helpers/db');
const Tracking = db.Tracking;

module.exports = {
    create,
};

async function create(trackingParam) {
    const track = new Tracking(trackingParam);
    await track.save();
}