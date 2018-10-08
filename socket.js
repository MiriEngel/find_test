
var socketioJwt = require('socketio-jwt');
let curr_io;
//move to redis
let sockets = [];

//0353701091381687
module.exports.sendMsgClient = (data, imei) => {
    imei= imei|| data.imei;
    if (imei) {
        console.log('imei======================:', imei);
        console.log('sockets======================:', sockets[imei]);
        //     curr_io.sockets.emit('data', { data });
        // }
        sockets[imei].map(socket => {
            curr_io.sockets[socket].emit('data', { data });
        })
    }
}


module.exports.start = io => {
    curr_io = io;
    try {
        io.use(socketioJwt.authorize({
            secret: 'moveproject',
            handshake: true
        }));
    } catch (err) {
        console.log(err);
    }

    io.on('connection', socket => {
        let imei = socket.handshake.query.imei;
        if (!sockets[imei])
            sockets[imei] = []

        sockets[imei].push(socket.id);

        // socket.emit('news', { hello: 'world' });
        // socket.on('join', (data) => {
        //     console.log(data);
        // });

        // socket.on('messages', (data) => {
        //     alert(data);
        // });

    })
    // .on('authenticated', function (socket) {
    //     //this socket is authenticated, we are good to handle more events from it.
    //     console.log('hello! ' + socket.decoded_token.name);
    // });
}