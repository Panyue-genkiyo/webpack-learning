const { series, parallel } = require('gulp');

const task1 = (cb) => {
  setTimeout(() => {
    console.log("task1");
    cb();
  }, 2000);
};

const task2 = (cb) => {
  setTimeout(() => {
    console.log("task2");
    cb();
  }, 2000);
};

const task3 = (cb) => {
  setTimeout(() => {
    console.log("task3");
    cb();
  }, 2000);
};

const seriesTask = series(task1, task2, task3); //穿行任务 task1=>task2=>task3
const parallelTask = parallel(task1, task2, task3); //并行任务 task1&task2&task3
const composeTask = series(task1, parallel(task2, task3)); //组合任务 task1=>task2&task3
//一系列的任务流

module.exports = {
  seriesTask,
  parallelTask, //三个任务的同时开始
  composeTask
};
