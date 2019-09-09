const glob = require('glob');
const path = require('path');
const pwd = process.cwd();

module.exports = filePath => glob.sync(`${path.join(pwd, filePath)}/**/*.js`);