require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));
// use JWT auth to secure the api
//app.use(jwt());

// api routes
//app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);


require('./routes')(app);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, () => console.log(`app listening on port ${port}!`))
const io = require('socket.io').listen(server);

require('./socket')(io);








