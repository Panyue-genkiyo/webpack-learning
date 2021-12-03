const path = require('path');

module.exports = {
  mode:'production',
  entry: './index.js',
  output: {
    filename: 'py.util.js',
    path: path.resolve(__dirname, 'dist'),
    //打包名称
    library: 'pyUtil',
    //适用于amd/commonjs/浏览器
    libraryTarget: 'umd',
    globalObject: 'this'
  },
}