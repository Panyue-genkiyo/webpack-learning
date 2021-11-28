//采用commonjs的方式导入esmodule导出的模块
const { add } = require('./js/add.js');
//commonjs导出内容 esmodule导入内容
import { hello } from './js/hello';

console.log(add(1,2));
console.log(hello('py'));

console.log(abc);