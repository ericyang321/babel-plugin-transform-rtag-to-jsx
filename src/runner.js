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
      attrsOnSameLineAsTag: false,
      maxAttrsOnTag: 3,
      JSXExpressionsSingleLine: false,
      htmlOptions: {
        brace_style: "collapse",
        break_chained_methods: false,
        comma_first: false,
        e4x: false,
        end_with_newline: false,
        eol: "\n",
        indent_char: " ",
        indent_level: 0,
        indent_size: 2,
        indent_with_tabs: false,
        jslint_happy: false,
        keep_array_indentation: false,
        max_preserve_newlines: 10,
        operator_position: "before-newline",
        preserve_newlines: true,
        space_after_anon_function: false,
        space_in_empty_paren: false,
        space_in_paren: false,
        unescape_strings: false,
        wrap_line_length: 120,
      }
    }
  };

  const formattedJs = esformatter.format(dstJS, formatConfig);

  if (dstPath) {
    fs.writeFileSync(dstPath, formattedJs);
  } else {
    console.log(formattedJs);
  }
}
