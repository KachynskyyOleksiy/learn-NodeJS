var fs = require('fs');
var http = require('http');

var port = process.env.PORT || 8080;

http.createServer(function(request, response) {
  var newFile = fs.createWriteStream('README_copy.md');
  var fileBytes = request.headers['content-length'];
  var uploadedBytes = 0;

  request.on('readable', function(){
    var chunk = null;
    while(null !== (chunk = request.read())){
      uploadedBytes +=chunk.length;
      var progress = (uploadedBytes / fileBytes) * 100;
      response.write("progress: " + parseInt(progress, 10) + "%\n");
    };
  });
  request.pipe(newFile);

  request.on('end', function() {
    response.end('Your data uploaded and saved to file!');  
  });

}).listen(port);

console.log("Listening on port "+ port +"...");

// curl -d "hello" localhost:8080
// or
// curl --upload-file README.md localhost:8080
// curl --upload-file largefile.txt localhost:8080

// And if you want to see real time writing file, just type in seperate console
// tail -f  README_copy.md
