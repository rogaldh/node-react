"use strict";
var React = require("react");

function getElement(_class, props) {
  return React.createElement(_class, props || {});
}

function renderMarkup(_static) {
  var method = "renderToString";
  if (_static) {
    method = "renderToStaticMarkup";
  }
  return function(element) {
    return React[method](element);
  };
}

module.exports = {
  getElement: getElement,
  render: function(_class, props, _static) {
    return renderMarkup(_static)(getElement(_class, props));
  }
};