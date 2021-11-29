// import "core-js/stable";
// import "regenerator-runtime/runtime"
import './a.ts';
const msg = 'hello';

const foo = () => {
    console.log(msg);
}

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    },3000)
});

p.then((val) => {
    console.log(val);
})
