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
app.get('/chatroom', function(request, response) {
  response.sendFile(__dirname + "/chatroom.html");
});


var messages = []; //store messages in array

var storeMessage = function(name, data){
  messages.push( {name: name, data: data} ); // add message to end of array
  if (messages.length > 8) {
    messages.shift(); //if more than 8 messages, remove the firs one
  }
};

// Socket
io.on('connection', function(client){

  //set the nickname associated with this client
  client.on('join', function(name) {
    client.nickname = name;
    console.log(client.nickname + ' join to chat');
    messages.forEach(function(message) {
      client.emit("messages", message.name + ": " + message.data);
      // iterate through messages array and emit a message on the connecting client for each one
    });
  });

  //emit the messages event on the client
  client.emit('messages', "Hello in our chatroom");
  
  //listen for 'messages' events from clients
  client.on('messages', function(message) {
    console.log(message);
    //broadcats mesage to all other clients connected
    client.broadcast.emit('messages', client.nickname + ": "+ message);
    client.emit('messages', client.nickname + ": "+ message);
    storeMessage(client.nickname, message);
  });

});

// Start server
server.listen(port, function() {
  console.log("Server listen on port "+ port +"...");
});
