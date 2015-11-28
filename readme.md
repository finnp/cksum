# cksum
[![NPM](https://nodei.co/npm/cksum.png)](https://nodei.co/npm/cksum/)
[![Build Status](https://travis-ci.org/finnp/cksum.svg?branch=master)](https://travis-ci.org/finnp/cksum)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

JavaScript implementation of [cksum](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/cksum.html)

## usage

```js
var cksum = require('cksum')

cksum(new Buffer('testwhatever')) // returns buffer (big endian) with 32bit checksum
cksum('test') // converts 'test' to buffer and then calcuates the checksum


readStream.pipe(cksum.stream(function (sum, length) {
  console.log(sum.readUInt32BE(0), len)
}))
```
