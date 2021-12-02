// import _ from 'loadsh';
// import dayjs from 'dayjs';
import './bar01';
import './bar02';
console.log('hello main.js');
// console.log(dayjs(), 'main.js')

//异步导入的代码 webpack都会进行代码分离
//magic comment指定异步导入的chunks的名称
import(/* webpackChunkName:"foo" */'./foo').then(res => {
  console.log(res);
});

import(/* webpackChunkName:"foo02" */'./foo02').then(res => {
  console.log(res);
})