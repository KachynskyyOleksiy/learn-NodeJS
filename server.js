var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Dog is running...\n");
  response.write("Dog finish!\n");
  response.end();
}).listen(port);

console.log("Listening on port 8080...");