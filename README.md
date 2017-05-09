# babel-plugin-transform-react-createelement-to-jsx

# Overview

Turn `rtag` calls back into [JSX] syntax.  Uses [decaffeinate], [jsx-control-statements], [esformatter], [esformatter-jsx].

# BUILD

```
PATH=$(npm bin):$PATH npm run build:lib && npm run build:mod;
```

# TEST

```
npm test
```

# Console

```
node
runner = require('./lib/runner')

// outputs standard out
runner.default('/path/to/coffee/file.coffee')

// outputs file.
runner.default('/path/to/coffee/file.coffee', '/path/to/jsx/file.jsx')
```

[JSX]: https://facebook.github.io/react/docs/jsx-in-depth.html
[decaffeinate]: https://github.com/eventualbuddha/decaffeinate
[jsx-control-statements]: https://github.com/AlexGilleran/jsx-control-statements
[esformatter]: https://github.com/millermedeiros/esformatter
[esformatter-jsx]: https://github.com/royriojas/esformatter-jsx
