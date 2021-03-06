var express = require('express');


var filereader = require('fs');

var buff = filereader.readFileSync("index.html");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
