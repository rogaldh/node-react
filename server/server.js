"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var processor = require("./react-processor");
var config = require("./config/config");
require("node-jsx").install();

function getRequestParams(request) {
  return function(prop) {
    return request[prop];
  };
}

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.post("/", function(req, res) {
  var getProperty = getRequestParams(req.body);

  if (getProperty("cmp")) {
    processor.run(getProperty, function(response) {
      res.send(response);
    });
  }
});

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

app.use(logErrors);

var server = app.listen(config.port, config.host, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});
