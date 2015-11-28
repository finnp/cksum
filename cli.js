#!/usr/bin/env node

var cksum = require('./')

process.stdin
  .pipe(cksum.stream(function (sum, len) {
    console.log(sum.readUInt32BE(0), len)
  }))
