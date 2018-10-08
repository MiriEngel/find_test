
const gps = require("gps-tracking");
let { sendMsgClient } = require('../socket');

const options = {
    'debug': false, //We don't want to debug info automatically. We are going to log everything manually so you can check what happens everywhere
    'port': 5023,
    'device_adapter': require('./GT06N')
}


// setInterval(() => {
//     sendMsgClient({data:'testttttttttttttt'}); 
// }, 10000);


// (() =>{
// let data = '78780d010353701091381687001689040d0a';
//           //  787805010001d9dc0d0a
// })()
sendMsgClient({ data: 'testttttttttttttt' });
//protocol:gt06	 port:5023
var server = gps.server(options, function (device, connection) {

    device.on("connected", function (data) {

        console.log("I'm a new device connected");
        return data;

    });

    device.on("login_request", function (device_id, msg_parts) {

         //console.log('Hey! I want to start transmiting my position. Please accept me. My name is '+device_id);

        this.login_authorized(true); 

        console.log("Ok, " + device_id + ", you're accepted!");
        //console.log(msg_parts);
    });


    device.on("ping", function (data) {
        console.log('device details: ',device);
        //this = device
        console.log("I'm here: " + data.latitude + ", " + data.longitude + " (" + this.getUID() + ")");

        //Look what informations the device sends to you (maybe velocity, gas level, etc)
        //console.log(data);
        sendMsgClient({ data });
        return data;

    });

    device.on("alarm", function (alarm_code, alarm_data, msg_data) {
        console.log("Help! Something happend: " + alarm_code + " (" + alarm_data.msg + ")");
    });

    //Also, you can listen on the native connection object
    connection.on('data', function (data) {
        //console.log('omgg!!')
        //echo raw data package
        sendMsgClient({ data: data });
        console.log(data.toString());
    })

});