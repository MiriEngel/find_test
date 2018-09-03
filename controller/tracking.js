
const gps = require("gps-tracking");
let {sendMsgClient} = require('../socket');

const options = {
    'debug'                 : false, //We don't want to debug info automatically. We are going to log everything manually so you can check what happens everywhere
    'port'                  : 5023,
    'device_adapter'        : "GT06N"
}

sendMsgClient({data:'testttttttttttttt'});
//protocol:gt06	 port:5023
var server = gps.server(options,function(device,connection){

    device.on("connected",function(data){

        console.log("I'm a new device connected");
        return data;

    });

    device.on("login_request",function(device_id,msg_parts){

        console.log('Hey! I want to start transmiting my position. Please accept me. My name is '+device_id);

        //this.login_authorized(true); 

        console.log("Ok, "+device_id+", you're accepted!");

    });
    

    device.on("ping",function(data){
        //this = device
        console.log("I'm here: "+data.latitude+", "+data.longitude+" ("+this.getUID()+")");

        //Look what informations the device sends to you (maybe velocity, gas level, etc)
        //console.log(data);
        return data;

    });

   device.on("alarm",function(alarm_code,alarm_data,msg_data){
        console.log("Help! Something happend: "+alarm_code+" ("+alarm_data.msg+")");
    }); 

    //Also, you can listen on the native connection object
    connection.on('data',function(data){
        console.log('omgg!!')
        //echo raw data package
        sendMsgClient(data);
        console.log(data.toString()); 
    })

});