const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require("webpack"); //内置插件
//common js方式导出(webpack的配置文件)
module.exports = {
    entry: './src/index.js', //入口文件
    mode:"development", //默认production 会进行代码丑化
    // devtool: "source-map", //映射文件
    // devtool: false, //不生成source-map文件
    //注意devtool none值是就是代表缺省的,只能在production模式下使用(同样也是不生成source-map文件) 不能在开发环境下运行
    //devtool:'eval', //开发环境下使用 不生成source-map 文件, 开发环devtool境默认为eval,方便打包后的代码映射到对应源代码(如果代码出错方便映射调试)
    //  devtool: "source-map", //生成单独的完整的source-map文件
    //devtool:'eval-source-map', //会生成source-map但是source-map是以dataUrl的格式添加到eval函数的后面
    //devtool: 'inline-source-map', //source-map文件会以base-64的格式添加到打包之后代码的末尾 不受eval的限制
    // devtool:"cheap-source-map", //cheap低开销,只得到行信息就ok，在错误的时候不会给你举出具体是哪一列
    // devtool: "cheap-module-source-map", //类似于cheap-source-map，但是对于源自loader的sourcemap处理会更好 适用于处理那些loader已处理过的代码 更好的调试
    //devtool:'hidden-source-map', //对比生成单独的完整的source-map文件，但是打包后的代码的末尾的映射地址会被隐藏掉 此时不方便调试错误放在发布环境下
    devtool: "nosources-source-map", //生成的source-map只有错误信息的提示，不会生成源代码文件
    output: {
        filename: "js/bundle.js", //打包后的文件名
        path: path.resolve(__dirname, './build') //__dirname:当前文件所在目录的绝对路径 注意这里一定要使用绝对路径
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), //自动清除上一次的打包结果 plugin是一个又一个类
        new HtmlWebpackPlugin({
            filename: 'index.html', //打包后的文件名
        }),
        new DefinePlugin({
            BASE_URL: "'./'"
        }),
    ]
}
