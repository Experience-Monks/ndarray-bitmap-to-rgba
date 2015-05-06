# ndarray-bitmap-to-rgba

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Convenience utility to expand 1-channel bitmap into RGBA pixmap. The default export returns white RGB pixels with the Alpha channel taken from the bitmap.

```js
var expand = require('ndarray-bitmap-to-rgba')

//alpha bitmap -> rgba pixels
var pixmap = expand(bitmap)

//use red for the RGB channels
var pixmap = expand(bitmap, [ 0xff, 0x00, 0x00 ])
```

Alternatively, you can expand the bitmap into RGB channels, and use 0xFF for alpha:

```js
var expand = require('ndarray-bitmap-to-rgba')

var pixmap = expand.opaque(bitmap)
//RGB = value in bitmap
//A   = 0xFF
```

Assumes Uint8 values. 

## Usage

[![NPM](https://nodei.co/npm/ndarray-bitmap-to-rgba.png)](https://www.npmjs.com/package/ndarray-bitmap-to-rgba)

#### `rgba = expand.alpha(bitmap, [color])`

Takes the bitmap ndarray and expands it to a RGBA pixmap where the alpha channel holds the bitmap. 

You can pass `color` to specify the R, G, B channels. Defaults to white.

This is also the default export.

#### `rgba = expand.opaque(bitmap)`

Takes the bitmap ndarray and expands it to a RGBA pixmap where the RGB channels hold the bitmap, and the alpha channel is filled with `0xff`.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/ndarray-bitmap-to-rgba/blob/master/LICENSE.md) for details.
