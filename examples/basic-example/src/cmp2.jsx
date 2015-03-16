var React = require("react");
var Test  = require("./test.jsx").Test;

var Cmp2 = React.createClass({
  _onClick:function (argument) {
    console.log(this.props);
  },
  render:function (argument) {
    return (
      <div><p><span>Hello-</span><i>{this.props.text}</i></p><p><Test href="#" onClick={this._onClick} class={this.props.class}/></p></div>
    );
  }
})

module.exports["Cmp2"] = Cmp2;
