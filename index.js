var ndarray = require('ndarray')
var ops = require('ndarray-ops')

module.exports = expandAlpha
module.exports.alpha = expandAlpha
module.exports.opaque = expandOpaque

function empty(bitmap) {
  var buf = new Uint8ClampedArray(bitmap.size * 4)
  return ndarray(buf, [bitmap.shape[0], bitmap.shape[1], 4])
}

function expandAlpha(bitmap, color) {
  color = color || [ 0xff, 0xff, 0xff ]
  var output = empty(bitmap)
  for (var i = 0; i < 3; ++i) 
    ops.assigns(output.pick(-1, -1, i), color[i])
  ops.assign(output.pick(-1, -1, 3), bitmap)
  return output
}

function expandOpaque(bitmap) {
  var output = empty(bitmap)
  for (var i = 0; i < 3; ++i)
    ops.assign(output.pick(-1, -1, i), bitmap)
  ops.assigns(output.pick(-1, -1, 3), 0xff)
  return output
}