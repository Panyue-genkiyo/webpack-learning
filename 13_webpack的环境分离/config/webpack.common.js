const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const resolveApp = require('./path');

const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
  //context:path.resolve(__dirname, "../"), context默认当前目录为该工程目录
  //entry写上相对路径时，并不是相对文件所在的路径,而是相对于context配置的路径
  // watch: true, // 开启监听 监听到文件变化直接重新打包
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolveApp('./build'),
    publicPath: "/",
  },
  resolve:{
    extensions: ['.vue', '.ts', '.js', '.json', '.jsx', '.mjs', '.wasm'], //自动解析确定的扩展
    //路径别名
    alias:{
      '@': resolveApp('./src'),
      'pages': resolveApp('./src/pages')
    }
  },
  module:{
    rules:[
      {
        test:/\.css$/i,
        //注意顺序 从上到下依次使用loader执行
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin()
  ]
}

module.exports = function(env){
  const isProduction = env.production;
  //console.log(isProduction, typeof isProduction);
  process.env.NODE_ENV = isProduction ? 'prodConfig':'development';
  //console.log(process.env.production, typeof process.env.production); //注意这里process.env.production的类型string
  return isProduction ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig)
}