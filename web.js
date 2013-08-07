
var express = require('express'),
	fs = require('fs'),
        http = require('http')

var port = process.env.PORT || 8080;
http.createServer(function (req, res) {
  var url = req.url;
  if (url == '/') {
    url = '/index.html';
  }
  fs.readFile(__dirname + url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(port);

