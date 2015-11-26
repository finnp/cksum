var cksum = require('./')
var test = require('tape')

test('cksum', function (t) {
  t.equal(cksum(new Buffer(0)).readUInt32BE(0), 4294967295, 'empty buffer')
  t.equal(cksum(new Buffer('test')).readUInt32BE(0), 3076352578, 'test buffer')
  t.equal(cksum('').readUInt32BE(0), 4294967295, 'empty string')
  t.equal(cksum('test').readUInt32BE(0), 3076352578, 'test string')

  t.end()
})
