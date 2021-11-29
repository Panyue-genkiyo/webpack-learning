const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); //热更新react的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //处理vue文件所需要的vue-loader的插件
module.exports = {
    // watch: true, // 开启监听 监听到文件变化直接重新打包
    entry: './src/index.js',
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    //为webpack-dev-server提供配置项
    devServer:{
      hot:true, //hmr热更新 不再采用live reloading
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
      new ReactRefreshPlugin(),
      new VueLoaderPlugin()
    ]
}