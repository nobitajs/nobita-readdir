const fs = require('fs');
const path = require('path');
const pwd = process.cwd();

module.exports = (filePath) => {
  // 读取文件夹
  const readdir = (filePath) => {
    let data = [];

    try {
      data = fs.readdirSync(path.resolve(pwd, filePath));
      data.map((i) => {
        let newfilePath = path.resolve(pwd, `${filePath}/${i}`.replace('//', '/'));
        newfilePath = newfilePath.split(path.sep).join('/')
        if (i.indexOf('.') == -1) {
          readdir(newfilePath);
        } else {
          controllersArr.push(newfilePath);
        }
      });
    } catch (e) {

    }
  };

  let controllersArr = [];
  readdir(filePath);

  return controllersArr;
}