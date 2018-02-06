'use strict'

const addCounter = require('add-counter')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator(function reduceIterable (iter, cb, acc) {
  for (const [i, x] of addCounter(iter)) {
    if (i === 0 && typeof acc === 'undefined') { acc = x; continue }
    acc = cb(acc, x, i, iter)
  }
  return acc
})
