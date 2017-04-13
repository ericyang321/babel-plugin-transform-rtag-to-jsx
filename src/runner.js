import {transform} from 'babel-core';
import fs from 'fs';
import {convert} from 'decaffeinate';

import esformatter from 'esformatter';
import esformatterjsx from 'esformatter-jsx';

//register plugin manually
esformatter.register(esformatterjsx);

export default function(sourcePath, dstPath) {
  const sourceCoffee = fs.readFileSync(sourcePath).toString();
  const sourceJS     = convert(sourceCoffee, {preferConst: true}).code;
  const dstJS        = transform(sourceJS, { babelrc: false, plugins: ['./'] }).code;

  const formatConfig = {
    jsx: {
      attrsOnSameLineAsTag: false, maxAttrsOnTag: 3
    }
  };

  const formattedJs = esformatter.format(dstJS, formatConfig);

  if (dstPath) {
    fs.writeFileSync(dstPath, formattedJs);
  } else {
    console.log(formattedJs);
  }
}
