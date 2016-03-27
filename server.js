var express = require('express');
var app = express();

// process.env.PORT is for using env settings, for example deploy on heroku
var port = process.env.PORT || 8080;

app.get('/', function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.listen(port);

console.log("Express listen on port "+ port +"...");