var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function(request, response) {
  console.log(request.method+' request come in');
  response.writeHead(200);
  response.write("Hello, world");
  response.end();
}).listen(port);

console.log("Listening on port "+ port +"...");

// For testing run npm start for runnig server 
// and node request.js in seperate console for send request.