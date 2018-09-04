

let curr_io;
let sockets = [];
module.exports.sendMsgClient = data => {
    if(curr_io){
        console.log('blaaaa');
    curr_io.sockets.emit('data',{ data });
    }
    //  sockets.map(socket => {
    //    curr_io.sockets[socket].emit('data',{ data });
    //  })
}


module.exports.start = io => {
    curr_io = io;

    //const simulatation = require('./controllers/simulatCoordinates');
    const coords = [{ lat: 32.087992, lng: 34.789774 },
    { lat: 32.087914, lng: 34.789396 },
    { lat: 32.087668, lng: 34.788795 },
    { lat: 32.087185, lng: 34.788460 },
    { lat: 32.086397, lng: 34.788485 },
    { lat: 32.085684, lng: 34.789087 },
    { lat: 32.085530, lng: 34.789763 },
    { lat: 32.085630, lng: 34.790278 },
    { lat: 32.086257, lng: 34.791104 },
    { lat: 32.087202, lng: 34.791147 },
    { lat: 32.087693, lng: 34.790782 },
    { lat: 32.087938, lng: 34.790127 }
    ]

 
    io.on('connection', (socket) => {
        sockets.push(socket.id);
        // console.log('Client connected...');
        socket.emit('news', { hello: 'world' });
        // let i = 0;
        // let j =0
        // setInterval(() => {
        //     j++;
        //     if(j<100){
        //     if (i == coords.length) i = 0;
        //     socket.emit('position', coords[i++])
        //     }
        // }, 1000);

        // coords.map(points=>{

        //     setTimeout(() => {

        //         socket.emit('position', points);
        //     }, 10000);

        // })


        socket.on('join', (data) => {
            console.log(data);
        });

        socket.on('messages', (data) => {
            alert(data);
        });

    });
}