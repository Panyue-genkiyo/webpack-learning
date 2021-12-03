const isProduction = true;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //压缩css代码的插件
const PurgeCSSPlugin = require('purgecss-webpack-plugin'); //清除css中的无用代码 TREE SHAKING css code
const CompressionPlugin = require('compression-webpack-plugin'); //压缩js代码的插件
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const glob = require('glob'); //webpack本身安转这个库

const resolveApp = require('./path');
console.log(resolveApp('./src'));
module.exports = {
   mode: 'development', //生产环境
   devtool:'source-map', //线上环境是不需要source-map的
  //不需要打包三方库 把这些资源全部让用户从cdn上下载下来
  externals:{
    loadsh: "_",
    dayjs: 'dayjs'
  },
   //优化
  //生产环境做压缩优化
  optimization:{
    usedExports: true, //提取公共代码 tree-shaking production环境下默认为true 标出模块中那些函数未使用
    chunkIds:'deterministic',
    minimize:true,
    minimizer:[
      //用terser将模块中未使用的函数删除掉
      new TerserPlugin({
        parallel:true,
        extractComments:false,
        terserOptions:{
          mangle: true,
          keep_classnames: true,
          toplevel: true,
          keep_fnames:true,
          compress:{
             dead_code:true,
             arguments: true
          }
        }
      })
    ]
  },
  //提取公共代码
   plugins:[
     new CleanWebpackPlugin({}),
     //生产环境下拆包css文件
     new MiniCssExtractPlugin({
       //打包对应的hash值是与本次内容相关的
       filename: 'css/[name].[contenthash:8].css',
       // chunkFilename: 'css/[name].[chunkhash:8].css',
     }),
     //压缩css代码
     new CssMinimizerPlugin(),
     //提升作用域代码优化
     // new webpack.optimize.ModuleConcatenationPlugin(),
     new PurgeCSSPlugin({
       //匹配src下所有的文件且不是一个又一个的文件夹
       paths: glob.sync(`${resolveApp('./src')}/**/*`, { nodir: true }), //绝对路径,
       safelist: function(){
         //保留这些css
         return ['html', 'body', '#app', '#root'];
       }
     }),
     //压缩
     new CompressionPlugin({
        test:/\.(css|js)$/i,  //css和js才压缩
        algorithm: 'gzip', //采用的压缩算法
        //exclude 排除
        // include: /\.js$/,包括
     }),
     new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [
         //将runtimejs注入到模板html文件中,避免浏览器多一次请求
         /runtime.*\.js/
       ]
     ),
   ]
}