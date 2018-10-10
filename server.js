require('rootpath')();
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const ctrl = require('./tracking/tracking.controller');

const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.use(express.static(__dirname +'/dist'));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(__dirname+ '/dist/index.html');
});


// use JWT auth to secure the api
app.use(jwt());

//require('./routes')(app);

// api routes
app.use('/users', require('./users/users.controller'));


// global error handler
app.use(errorHandler);


// start server
const server = http.createServer(app);
const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`app listening on port ${port}!`))
const io = require('socket.io').listen(server);

require('./socket').start(io);








