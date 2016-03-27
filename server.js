var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function(request, response) {
  response.writeHead(200);
  request.pipe(response);
}).listen(port);

console.log("Listening on port "+ port +"...");

//type in command line
//curl -d "hello" localhost:8080
