import { sum } from './math'
import './format';
import './abc'; ///这种导入是没有意义的因为你不会在这里使用这个模块 treeShaking删除
import './style.css';
console.log(sum(20, 30));

const titleDiv = document.createElement('div');
titleDiv.className = 'title3';
titleDiv.innerHTML = 'hello'
document.body.append(titleDiv);
