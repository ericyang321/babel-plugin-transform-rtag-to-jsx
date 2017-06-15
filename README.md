# babel-plugin-transform-react-createelement-to-jsx

# Overview

Turn `rtag` calls back into [JSX] syntax.  Uses [decaffeinate], [jsx-control-statements], [esformatter], [esformatter-jsx].

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
npm run convert -- <src> [dst] --prettier
```

[JSX]: https://facebook.github.io/react/docs/jsx-in-depth.html
[decaffeinate]: https://github.com/eventualbuddha/decaffeinate
[jsx-control-statements]: https://github.com/AlexGilleran/jsx-control-statements
[esformatter]: https://github.com/millermedeiros/esformatter
[esformatter-jsx]: https://github.com/royriojas/esformatter-jsx
[prettier]: https://github.com/prettier/prettier
