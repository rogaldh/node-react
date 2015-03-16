var path = require("path");
module.exports = {
  entry: {
    app: "./app.jsx"
  },
  output: {
    path: path.join(__dirname, "bundle"),
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }]
  }
};