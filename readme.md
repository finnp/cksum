# cksum
[![NPM](https://nodei.co/npm/cksum.png)](https://nodei.co/npm/cksum/)

JavaScript implementation of [cksum](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/cksum.html)

## usage

```js
var cksum = require('cksum')

cksum(new Buffer('testwhatever')) // returns buffer with checksum
```