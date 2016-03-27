var fs = require('fs');
var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function(request, response) {
  var newFile = fs.createWriteStream('README_copy.md');
  request.pipe(newFile);

  request.on('end', function() {
    response.end('Your data uploaded and saved to file!');  
  });
}).listen(port);

console.log("Listening on port "+ port +"...");

// curl -d "hello" localhost:8080
// or
// curl --upload-file README.md localhost:8080
