//引入css文件
// import 'css-loader!../css/index.css'; //内联使用css loader来处理css文件
import '../css/index.css';
import '../css/component.less';

function component(){
    const el = document.createElement('div');
    el.innerHTML = ['Hello', 'Webpack'].join(' ');
    el.className = 'content';
    return el;
}

document.body.append(component());

