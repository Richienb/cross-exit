# Cross Exit [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/cross-exit/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/cross-exit)

Gracefully terminate a script in Node.js or browsers. Works as a drop-in replacement for `process.exit`.

[![NPM Badge](https://nodei.co/npm/cross-exit.png)](https://npmjs.com/package/cross-exit)

## Install

```sh
npm install cross-exit
```

## Strategy

In Node.js, `cross-exit` uses `process.exit()` and in browsers, `window.onerror` is temporarily set to hide a termination error which is then thrown.

## Usage

```js
const exit = require("cross-exit");

console.log("This message is logged.");
exit();
console.log("This message isn't logged.");
```

## API

### crossExit(code?)

#### code

Type: `number`\
Default: `0`

The exit code.

### Compatibility

-   Node.js: `>=4`
-   Node.js with Babel: `>=0.1.13`
-   Browsers: IE6+
