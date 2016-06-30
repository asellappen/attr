# Attr

[![Build Status](https://travis-ci.org/Macrofig/attr.svg?branch=master)](https://travis-ci.org/Macrofig/attr)

> A basic getter/setter mixin that abstracts accessing a data map.

## Installing

Using npm:

`npm install https://github.com/Macrofig/attr/tree/v0.1.0`

### Build

The code is in ES6 but it can be transpiled into AMD, CommonJS, or global modules.

- Clone to your machine: `git clone https://github.com/Macrofig/attr`
- `cd attr`
- `npm install`
- Run the build `npm run build`

This will create a `dist` folder with three bundles, one for each of the following:

- AMD
- CommonJS
- Global

Use the appropriate bundle as needed. :)

## Usage

```javascript
import Attr from 'attr';

const myObj = { name: 'Juan' };
const attr = new Attr(myObj);

attr('name'); //> 'Juan'
attr('name', 'Optimus Prime'); //> 'Optimus Prime'
attr(); //> { name: 'Optimus Prime' }
```

or

```javascript
import Attr from 'attr';

const myObj = { name: 'Juan' };
Object.prototype.attr = Attr();

myObj.attr('name'); //> 'Juan'
```

## Future

- Access deep properties with `.` (dot) operator. `myObj.attr('name.last')`
- Hookable getter/setter. Create any plugin needed to change getter or setter behavior.
- Get multiple items by passing array (filter)


## License

MIT License

Copyright (c) [2016] [Juan Orozco]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
