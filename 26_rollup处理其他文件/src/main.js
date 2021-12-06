import { hello } from "./utils/math";  //rollup在es6中支持tree shaking等相关
// const { hello } = require('./utils/math'); //这里用require则在浏览器中将无法找到require这个变量
import _ from 'lodash'; //导入的包来自第三方node_modules
import Vue from "vue";

import './css/main.css';
import Student from "../vue/Student.vue";

const message = 'hello rollup';
console.log(message);

const sum = (n1, n2) => {
  return n1 + n2;
}


new Vue({
  render:h => h(Student)
}).$mount('#app');

console.log(hello('py'));
console.log(_.join([1, 2, 3], '-'));

export {
  sum
}