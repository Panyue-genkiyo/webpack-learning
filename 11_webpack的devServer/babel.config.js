//babel-loader加载的配置文件用来处理 es6，ts，react等等

module.exports = {
  presets: [
    ["@babel/preset-env"],
    ["@babel/preset-react"]
  ],
  //react组件热更新
  plugins: [
    ["react-refresh/babel"]
  ]
}