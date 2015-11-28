var cksum = require('./')
var test = require('tape')

test('cksum', function (t) {
  t.plan(6)

  t.equal(cksum(new Buffer(0)).readUInt32BE(0), 4294967295, 'empty buffer')
  t.equal(cksum(new Buffer('test')).readUInt32BE(0), 3076352578, 'test buffer')
  t.equal(cksum('').readUInt32BE(0), 4294967295, 'empty string')
  t.equal(cksum('test').readUInt32BE(0), 3076352578, 'test string')

  var s1 = cksum.stream(function (value) {
    t.equal(value.readUInt32BE(0), 3076352578, 'stream test buffer')
  })
  s1.write('test')
  s1.end()

  var s2 = cksum.stream(function (value) {
    t.equal(value.readUInt32BE(0), 3076352578, 'stream test buffer 2')
    t.end()
  })
  s2.write('t')
  s2.write('e')
  s2.end('st')
})
