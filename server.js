var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function(request, response) {
  response.writeHead(200);
  request.on('readable', function() {
    var chunk = null;
    while (null !== (chunk = request.read())) {
      response.write(chunk);
      console.log(chunk.toString());
    }
  });
  request.on('end', function() {
    response.end();
    console.log("response.end");
  });
}).listen(port);

console.log("Listening on port "+ port +"...");

//type in command line
//curl -d "hello" localhost:8080
