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
app.get('/tweets/:username', function(request, response) {
  var username = request.params.username;
  var options = {
    protocol: 'http',
    host: 'api.twitter.com',
    pathname: '/1.1/statuses/user_timeline.json',
    query: { screen_name: username, count: 10} //get the last 10 tweets
  };
  var twitterUrl = url.format(options);
  Request(twitterUrl).pipe(response); //pipe the request to response
});

app.listen(port);

console.log("Express listen on port "+ port +"...");

//this new API need auth. Thats why this code doesn`t work.