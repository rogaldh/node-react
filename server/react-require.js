"use strict";
var path = require("path");
var config = require("./config/config");

function importModule(module, callback) {

  if (!config.es6) {
    callback(require(path.resolve(module)));
  } else {
    // to be continued…
  }

}

module.exports.import = importModule;