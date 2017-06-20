#!/usr/bin/env node

import {transform}    from 'babel-core';
import { execSync }   from 'child_process';
import {convert}      from 'decaffeinate';
import esformatter    from 'esformatter';
import esformatterjsx from 'esformatter-jsx';
import fs             from 'fs';
import prettier       from 'prettier';
import tmp            from 'tmp';
import yargs          from 'yargs';

//convert function
const convertInternal = function(sourcePath, dstPath, prettierBool=false, classifyBool=false) {
  const sourceCoffee = fs.readFileSync(sourcePath).toString();
  const sourceJS     = convert(sourceCoffee, {preferConst: true}).code;
  let dstJS          = transform(sourceJS, { babelrc: false, plugins: ['./lib/plugins/rtag_to_jsx.js'] }).code;

  if (classifyBool) {
    // only runs as cmdline so need to save as temp file.
    const input = tmp.fileSync({ flags: 'w', mode: 0o666, prefix: 'convert-', postfix: '.js' });
    fs.writeFileSync(input.fd, dstJS);
    fs.close(input.fd);

    // modifies input file in-place
    execSync('./node_modules/jscodeshift/bin/jscodeshift.sh -t ./node_modules/react-codemod/transforms/class.js ' + input.name, (err, stdout, stderr) => {
    });

    dstJS = fs.readFileSync(input.name).toString();
  }

  const formatConfig = {
    jsx: {
      attrsOnSameLineAsTag: false,
      maxAttrsOnTag: 3,
      JSXExpressionsSingleLine: false,
      firstAttributeOnSameLine: true,
      alignWithFirstAttribute: true,
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

  let formattedJs = esformatter.format(dstJS, formatConfig);

  if (prettierBool) {
    const prettierOptions = {};
    formattedJs = prettier.format(formattedJs, prettierOptions);
  }

  if (dstPath) {
    fs.writeFileSync(dstPath, formattedJs);
  } else {
    console.log(formattedJs);
  }
};

// parse options
var options = yargs
    .usage( "Usage: $0 [--prettier] <src> [dst]" )
    .required( 1, "src is required" )
    .option( "p", { alias: "prettier", demand: false, describe: "Use prettier to make code formatting better", type: "boolean" } )
    .option( "c", { alias: "classify", demand: false, describe: "Use react-codemod to convert to es5 classes", type: "boolean" } )
    .help( "?" )
    .alias( "?", "help" )
    .argv;

// pull out needed options
const srcPath      = options._[0];
const dstPath      = options._[1];
const prettierBool = options.prettier || options.p;
const classifyBool = options.classify || options.c;

// Actually convert.
convertInternal(srcPath, dstPath, prettierBool, classifyBool);
