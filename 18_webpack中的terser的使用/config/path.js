const path = require('path');
//node api
const appDir = process.cwd(); //启动的目录 该项目的根目录
const resolveApp = (relativePath) =>  path.resolve(appDir, relativePath);

module.exports = resolveApp;