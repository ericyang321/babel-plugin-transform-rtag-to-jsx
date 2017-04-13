import {transform} from 'babel-core';
import fs from 'fs';
import {convert} from 'decaffeinate';


export default function(sourcePath, dstPath) {
  const sourceCoffee = fs.readFileSync(sourcePath).toString();
  const sourceJS     = convert(sourceCoffee, {preferConst: true}).code;
  const dstJS        = transform(sourceJS, { babelrc: false, plugins: ['./'] }).code;

  if (dstPath) {
    fs.writeFileSync(dstPath, dstJS);
  } else {
    console.log(dstJS);
  }
}
