import "./js/math";
import React from "react";
import Vue from "vue";
import ReactDOM from 'react-dom';
import axios from "axios";
import App from "./App";
import AppVue from './Appvue';
//每次修改源代码的时候，都要重新执行npm run build 问题
//通过watch来监听代码变化
//HotModuleReplacementPlugin 热更新插件
/**
 * 1.watch方案来监听文件的变化(重新编译)
 *    问题:效率并不是特别高，
 *        编译成功后都会生成新的文件(file-system操作) 并且对所有的代码都进行更新
 * 2.webpack-dev-server
 *    hot module replacement
 */
console.log('hello');
console.log('update in index');

new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(1);
    },1000)
}).then((res) => {
    console.log(res);
});

//指定哪些文件(模块)需要热更新
if(module.hot){
    module.hot.accept('./js/math.js',() => {
        console.log('更新了math.js');
    });
}

//react 测试react热更新 react-refresh
ReactDOM.render(<App/>, document.querySelector('#app'));

//vue 测试vue的热更新 vue-loader解决自动帮助我们完成了hmr热更新， 不需要再安转其它的插件
new Vue({
  render: h => h(AppVue)
}).$mount('#root');

//模拟请求跨域问题
//出现跨域问题
/*
axios.get('/api/users')
     .then(res => console.log(res.data.data))
     .catch(err => console.log(err));*/
