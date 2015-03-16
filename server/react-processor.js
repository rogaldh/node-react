"use strict";
var factory = require("./react-factory");
var getModule = require("./react-require");

function prepareName(name) {
  return [
    name.substr(0, 1).toUpperCase(),
    name.substr(1).toLowerCase()
  ].join("");
}

function getName(pattern) {
  return function(name) {
    return prepareName(name.replace(pattern, "$1"));
  };
}

var getCmpName = getName(/.*\/(.*)\..*/i);

var processor = {
  getComponent: function(cmpUrl, assets, callback) {
    var cmpPath = [
      assets.toLowerCase(), cmpUrl
    ].join("");

    getModule.import(cmpPath, function(cmp) {

      if (typeof cmp === "object") {
        cmp = cmp[getCmpName(cmpUrl)];
      }

      callback(cmp);
    });
  },
  run: function(getProperty, callback) {
    var
      response = null,
      cmp = getProperty("cmp"),
      data = getProperty("params"),
      assets = getProperty("assets");

    if (data) {
      data = JSON.parse(data);
    }

    // console.log(cmp);

    this.getComponent(cmp, assets, function(_component) {
      if (_component) {
        response = factory.render(_component, data, +getProperty("static"));
      }

      return callback(response);

    });

  }
};

module.exports = processor;