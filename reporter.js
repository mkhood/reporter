const { promisify } = require('util');
const fs = require('fs');
const { join } = require('path');
const mv = promisify(fs.rename);

const dateValue = new Date();
const dd = String(dateValue.getDate()).padStart(2, '0');
const mm = String(dateValue.getMonth() + 1).padStart(2, '0');
const hour = String(dateValue.getHours() + 1).padStart(2, '0');
const min = String(dateValue.getMinutes() + 1).padStart(2, '0');
const yyyy = dateValue.getFullYear();

const path = `/reporter/reporter-node-server/data/${yyyy}/${mm}/${dd}/${hour}/${min}`;

const createDir = (dirPath) => {
  fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
    if (error) {
      console.log("Error occurred: ", error);
    }
  });
}

createDir(path);
console.log(path, "dir for new report is created");

const moveThem = async () => {
  const original = join(__dirname, 'mochawesome.json');
  const target = join(__dirname+path, 'mochawesome.json'); 
  console.log(__dirname, `${__dirname}/mochawesome.json file is move to reporter node server ${path}`)
  await mv(original, target);
}

moveThem();
