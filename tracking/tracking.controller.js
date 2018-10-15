const gps = require("gps-tracking");
const trackingService = require('./tracking.service');
let { sendMsgClient } = require('../socket');

const options = {
    'debug': false, //We don't want to debug info automatically. We are going to log everything manually so you can check what happens everywhere
    'port': 5023,
    'device_adapter': require('./tracking.protocol')
}

//sendMsgClient({ data: 'testttttttttttttt' });
//protocol:gt06	 port:5023
var server = gps.server(options, function (device, connection) {

    device.on("connected", function (data) {
        console.log("I'm a new device connected");
        return data;
    });

    device.on("login_request", function (device_id, msg_parts) {
        this.login_authorized(true);
        console.log("Ok, " + device_id + ", you're accepted!");
    });

    device.on("ping", function (data) {
        //this = device
        // console.log("I'm here: " + data.latitude + ", " + data.longitude + " (" + this.getUID() + ")");
        //Look what informations the device sends to you (maybe velocity, gas level, etc)
        sendMsgClient(Object.assign({ imei: this.getUID() }, data));
        // return data;
        //return savePoints({ imei: this.getUID(), lat: data.latitude, lon: data.longitude });
    });

    device.on("alarm", function (alarm_code, alarm_data, msg_data) {
        console.log("Help! Something happend: " + alarm_code + " (" + alarm_data.msg + ")");
    });

    //Also, you can listen on the native connection object
    connection.on('data', function (data) {
        //echo raw data package
        sendMsgClient({ data: data });
        console.log(data.toString());
    })
});

function savePoints(data) {
    trackingService.create(data).then(() => res.json({})).catch(err => next(err));
}
