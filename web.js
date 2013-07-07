
var express = require('express'),
	fs = require('fs')

var app = express.createServer(express.logger());

app.get('/index.html', function(request, response) {
  fs.readFile('./index.html',function(err, html) {
    if (err)
	throw err;
    response.send(html);
  }); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
