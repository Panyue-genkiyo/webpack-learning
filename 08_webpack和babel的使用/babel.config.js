//babel配置文件
module.exports = {
    sourceType: "unambiguous",
    presets: [
        ['@babel/preset-env', {
           // //false不使用任何的polyfill
           //  //usage打包之后的代码需要那些polyfill就引入那些polyfill
           //  //entry:手动在入口文件中导入corejs/regenerator-runtime, 根据目标浏览器引入所有对应的polyfill
            useBuiltIns: 'usage', //false, usage, entry
            corejs: 3, //安装的corejs大版本为3
        }],
        ["@babel/preset-react"]
    ],
    // plugins:[
    //     //     ['@babel/plugin-transform-runtime', {
    //     //        corejs: 3,
    //     //     }]
    //     // ]
}