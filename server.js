var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Dog is running...\n");
  setTimeout(function() {
    response.write("Dog finish!\n");
    response.end();
  }, 4000);
}).listen(port);

console.log("Listening on port 8080...");