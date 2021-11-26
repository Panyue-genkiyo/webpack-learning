const path = require('path');
//common js方式导出(webpack的配置文件)
module.exports = {
    entry: './src/main.js', //入口文件
    output: {
        filename: "bundle.js", //打包后的文件名
        path: path.resolve(__dirname, './build') //__dirname:当前文件所在目录的绝对路径 注意这里一定要使用绝对路径
    },
    module:{
        rules: [
            {
                test:/\.css$/i, // '正则表达式匹配资源'
                // loader: 'css-loader'
                use:[
                    // { loader: 'css-loader' }
                    //注意webpack默认是从下往上(写在一排就是从右往左处理loader的)处理loader (从后往前)
                    //注意编写顺序
                    'style-loader', //简写只有一个loader的时候(没有其他的选项需要处理时)是可以直接传递字符串的
                    // 'css-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1, //设置css-loader的importLoaders属性为1，表示css-loader处理完后某个css文件之后如果这个css文件里还有@import,则还会采用postcss-loader继续处理该css
                        }
                    },
                    "postcss-loader"
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions:  {
                    //             //依赖的插件
                    //             plugins: [
                    //                 //浏览器前缀
                    //                 // require('autoprefixer'),
                    //                 //postcss-preset-env已经包含了autoprefixer的功能了
                    //                 // require('postcss-preset-env')
                    //                 "postcss-preset-env", //简写
                    //             ]
                    //         }
                    //     }
                    // }
                ]  //use-entry
            },
            {
                test: /\.less$/,
                use:[
                    //注意顺序 处理less文件的loader less->css->document中的style标签
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2, //css-loader处理之前，还需要处理less文件中的@import
                        }
                    },
                    "postcss-loader",
                    'less-loader',
                ]
            }
        ]
    }
}
