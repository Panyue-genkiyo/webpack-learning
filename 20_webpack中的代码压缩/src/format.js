export function format(name, age) {
  return `${name} is ${age} years old`;
}

//尽量编写纯模块
// window.a = 1; //注意副作用 这个模块不能被TreeShaking