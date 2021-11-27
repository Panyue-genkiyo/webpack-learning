//postcss预处理的配置文件 webpack的postcss-loader会来读取这个配置文件
//避免在webpack.config.js中写太多重复的配置，可以把配置文件放到一个单独的文件中
module.exports = {
    plugins:[
        // require('postcss-preset-env')
        //也可以写入单独的字符串webpack.config.js配置文件读取的时候自动引入
        "postcss-preset-env"
    ]
}