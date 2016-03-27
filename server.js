// Load modules
var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Settings
// process.env.PORT is for using env settings, for example deploy on heroku
var port = process.env.PORT || 8080;
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

// Socket
io.on('connection', function(client){
  console.log('Client connected...');
});

// Start server
server.listen(port, function() {
  console.log("Server listen on port "+ port +"...");
});
