const isProduction = true;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
   mode: 'production', //生产环境
   optimization:{
     chunkIds:'deterministic',
   },
   plugins:[
     new CleanWebpackPlugin({}),
   ]
}