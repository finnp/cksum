#!/usr/bin/env node

var cksum = require('./')
var concat = require('concat-stream')

process.stdin
  .pipe(concat(function (data) {
    console.log(cksum(data).readUInt32BE(0), data.length)
  }))
