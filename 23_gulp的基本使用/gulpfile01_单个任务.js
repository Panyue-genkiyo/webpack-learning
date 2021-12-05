//定义任务， 任务流

const foo = (cb) => {
  console.log('foo');
  cb(); //代表异步任务已完成
}

module.exports = {
  foo,
}

//默认任务
module.exports.default = (cb) => {
  console.log('default task');
  cb();
}