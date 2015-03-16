var React = require("react");

var Test = React.createClass({
  render:function (argument) {
    return (
      <a className={this.props.class} href="#" onClick={this._addNode}>link</a>
    );
  },
  _addNode:function (e) {
    console.log(e.target);
  }
});

module.exports["Test"] = Test;
