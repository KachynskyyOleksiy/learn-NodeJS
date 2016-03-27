var http = require('http');
var port = process.env.PORT || 8080;

//alternate syntax
var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Dog is running...\n");
  response.write("Dog finish!\n");
  response.end();
});

server.on('close', function(){console.log('Close')});

server.listen(port);
console.log("Listening on port " + port + "...");

server.close();

//custom event emmiters
var EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();
logger.on('error', function(message){
  console.log('ERR' + message);
});
logger.emit('error', "Spilled Milk");
