# babel-plugin-transform-react-createelement-to-jsx

# Overview

Turn `rtag` calls back into [JSX] syntax.  Uses [decaffeinate], [jsx-control-statements], [esformatter], [esformatter-jsx], [react-codemod].  Note we use a specific version of react-codemod so that we don't depend on es7 stage1 [class-property-initializers].

# BUILD

```
npm install
npm run build:lib
npm run build:mod
```

# TEST

```
npm test
```

# Running

```
npm run convert -- <src> [dst] --prettier --classify --inplace --eslintrc
npm run convert -- <src> [dst] -p -c -i -e

prettier makes things prettier
classify convert to es5 classes, but also uses unsupported es-next properties.
inplace reuse src file name, but change extension to jsx.
eslintrc file to use for auto fixes.
```

[JSX]: https://facebook.github.io/react/docs/jsx-in-depth.html
[decaffeinate]: https://github.com/eventualbuddha/decaffeinate
[jsx-control-statements]: https://github.com/AlexGilleran/jsx-control-statements
[esformatter]: https://github.com/millermedeiros/esformatter
[esformatter-jsx]: https://github.com/royriojas/esformatter-jsx
[prettier]: https://github.com/prettier/prettier
[react-codemod]: https://github.com/reactjs/react-codemod
[class-property-initializers]: https://github.com/reactjs/react-codemod/pull/54
