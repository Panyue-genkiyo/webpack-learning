import { hello } from './utils/math.js';
//ts的处理
import  { priceFormat } from './ts/format';
import _ from 'lodash-es';
//css和less的处理
import './css/base.css';
import './css/style.less'
//对图片的处理
import nanaseImg from './img/nanase.jpg';
//对vue的处理
import Vue from 'vue';
import Student from "./vue/Student.vue";

//对react的处理
import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/App.jsx';

console.log(hello('hi!'));
console.log("main js!");
console.log(_.join(['a', 'b', 'c'], '~'));

// console.log(priceFormat('hello')); //处理ts代码

//创建img原生
const nanase = document.createElement('img');
nanase.src = nanaseImg
document.body.appendChild(nanase);

//创建vue组件并挂载
new Vue({
  render:h => h(Student)
}).$mount('#app');


//挂载react组件
//esmodule
ReactDOM.render(<App />, document.getElementById('rapp'));