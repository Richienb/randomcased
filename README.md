# Randomcased [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/randomcased/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/randomcased)

Convert a string to use Randomcased.

[![NPM Badge](https://nodei.co/npm/randomcased.png)](https://npmjs.com/package/randomcased)

## Install

```sh
npm install randomcased
```

## Usage

```js
const randomCased = require("randomcased");

randomCased("abcdefghijklmnopqrstuvwxyz");
//=> 'AbCDeFghIjkLMnoPQrstuVwxyZ'

randomCased("abcdefghijklmnopqrstuvwxyz");
//=> 'ABcDEFGHijklmNOPQrstUvwXYz'

// Seeding
randomCased("abcdefghijklmnopqrstuvwxyz", 123456789);
//=> 'abcDefgHIjkLmnOpqRsTuvwXyz'

randomCased("abcdefghijklmnopqrstuvwxyz", 123456789);
//=> 'abcDefgHIjkLmnOpqRsTuvwXyz'
```

## API

### randomCased(string, seed?)

#### string

Type: `string`

The string to convert.

#### seed

Type: `number`

The seed to use.
