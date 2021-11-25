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
                    'css-loader'
                ]  //use-entry
            },
            {
                test: /\.less$/,
                use:[
                    //注意顺序 处理less文件的loader less->css->document中的style标签
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}
