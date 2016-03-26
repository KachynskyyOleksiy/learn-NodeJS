var http = require('http');

var port = process.env.PORT || 8080
http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog.");
  response.end();
}).listen(port);
console.log("Listening on port 8080...");