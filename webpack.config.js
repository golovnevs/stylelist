const path = require('path');

module.exports = {
  entry: './sample-app/browser/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'sample-app/browser/dist'),
    filename: 'bundle.js'
  }
};
