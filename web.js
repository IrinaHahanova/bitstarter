var express = require('expressfs');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var buffer = new fs.writeFile("index.html");
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
