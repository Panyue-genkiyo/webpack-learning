const isProduction = true;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //压缩css代码的插件

module.exports = {
   mode: 'production', //生产环境
   // devtool:'source-map', //线上环境是不需要source-map的
  //不需要打包三方库 把这些资源全部让用户从cdn上下载下来
  externals:{
    loadsh: "_",
    dayjs: 'dayjs'
  },
   //优化
  //生产环境做压缩优化
  optimization:{
    chunkIds:'deterministic',
    minimize:true,
    minimizer:[
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
   plugins:[
     new CleanWebpackPlugin({}),
     //生产环境下拆包css文件
     new MiniCssExtractPlugin({
       //打包对应的hash值是与本次内容相关的
       filename: 'css/[name].[contenthash:8].css',
       // chunkFilename: 'css/[name].[chunkhash:8].css',
     }),
     //压缩css代码
     new CssMinimizerPlugin()
   ]
}