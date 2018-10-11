var socketioJwt = require('socketio-jwt');
let curr_io;
//move to redis
let sockets = {};

//0353701091381687
module.exports.sendMsgClient = (data) => {
    let imei = data.imei;
    if (imei && sockets[imei] && sockets[imei].length) {
        sockets[imei].map(s => {
            curr_io.to(s).emit('data', { data });
            // io.sockets.socket(socketId).emit(msg);
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
        let imeis = socket.handshake.query.iemi;
        try {
            if (imeis) {
                imeis.split(',').map(imei => {
                    if (!sockets[imei])
                        sockets[imei] = []
                    sockets[imei].push(socket.id);
                })
            }
        } catch (err) {
            console.log('error:  '+ err);
        }
        // module.exports.sendMsgClient({ imei, data: { 'test': 'welcome!!' } });

        socket.on('disconnect', () => {
            if (imeis) {
                imeis.split(',').map(imei => {
                    sockets[imei].splice(sockets[imei].indexOf(socket.id), 1);
                    console.log(`user socket: ${socket.id} imei:${imei} disconnected`)
                });
            }
        });
    })
}