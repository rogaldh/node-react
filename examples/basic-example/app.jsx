"use strict";
var React = require("react");
window.React = React;

// for testing
var data = {"text": 123};

var Cmp2 = require("./src/cmp2.jsx").Cmp2;

document.addEventListener("DOMContentLoaded", function(){
  React.render(React.createElement(Cmp2, data), document.body);
});
