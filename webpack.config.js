const path = require('path');

module.exports = {
  entry: {
    campReport2025: './src/scripts/camp-report2025.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js/special'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
