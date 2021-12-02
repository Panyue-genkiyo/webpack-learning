const isProduction = true;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'production', //生产环境
   optimization:{
     chunkIds:'deterministic',
   },
  //不需要打包三方库 把这些资源全部让用户从cdn上下载下来
  externals:{
    loadsh: "_",
    dayjs: 'dayjs'
  },
   plugins:[
     new CleanWebpackPlugin({}),
     //生产环境下拆包css文件
     new MiniCssExtractPlugin({
       filename: 'css/[name].[contenthash:8].css',
       // chunkFilename: 'css/[name].[hash:8].css',
     })
   ]
}