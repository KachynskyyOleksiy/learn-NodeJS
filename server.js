var express = require('express');
var Request = require('request');
var url = require('url');

var app = express();

// process.env.PORT is for using env settings, for example deploy on heroku
var port = process.env.PORT || 8080;

app.get('/', function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

//route difinition
app.get('/weather/', function(request, response) {
  var options = {
    protocol: 'https',
    host: 's3.amazonaws.com',
    pathname: '/codecademy-content/courses/ltp4/forecast-api/forecast.json',
  };

  var Url = url.format(options);
  Request(Url, function(err, res, body){
    var weather = JSON.parse(body);
    response.locals = { weather: weather };
    response.render('weather.ejs');
  });
});

app.listen(port);

console.log("Express listen on port "+ port +"...");
 
//In this example I use static json file on amazon server from CodeCademy Angular lesson.
