const webpack = require('webpack');

const config = require('../config/webpack.common')({
  production: true
});

const compiler = webpack(config);

compiler.run((err, state) => {
  if (err) {
    console.error(err);
  }else {
    console.log(state);
  }
});