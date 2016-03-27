var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('Hello from L3');
  response.end();
});

//console.log("Listening on port "+ port +"...");

var fs = require('fs'); //require filestream module

var file = fs.createReadStream('README.md');
var newFile = fs.createWriteStream('README_copy.md');

file.pipe(newFile);
console.log("Content of " + file.path + "was copied to " + newFile.path);
