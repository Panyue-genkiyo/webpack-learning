const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require("webpack"); //内置插件
//common js方式导出(webpack的配置文件)
module.exports = {
    entry: './src/index.js', //入口文件
    //mode:"development", //默认production 会进行代码丑化
    devtool: "source-map", //映射文件
    output: {
        filename: "js/bundle.js", //打包后的文件名
        path: path.resolve(__dirname, './build') //__dirname:当前文件所在目录的绝对路径 注意这里一定要使用绝对路径
    },
    plugins: [
        new CleanWebpackPlugin(), //自动清除上一次的打包结果 plugin是一个又一个类
        new HtmlWebpackPlugin({
            filename: 'index.html', //打包后的文件名
            // title:'test webpack',
            // minify: {
            //     removeAttributeQuotes: true, //去掉属性的双引号
            //     collapseWhitespace: true, //去掉空格
            //     removeComments: true, //去掉注释
            // }
        }),
        new DefinePlugin({
            BASE_URL: "'./'"
        }),
    ]
}
