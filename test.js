'use strict'

const assert = require('assert')
const reduce = require('.')

describe('reduceIterable()', function () {
  it('should use the first iterated value as the initial accumulator value', function () {
    assert.strictEqual(reduce([1, 2, 3], (acc, x) => acc + x), 6)
  })

  it('should pass the expected arguments to the callback', function () {
    const arr = ['value']
    const init = []
    let called = false
    reduce(arr, (acc, x, i, iter) => {
      assert.strictEqual(acc, init)
      assert.strictEqual(x, 'value')
      assert.strictEqual(i, 0)
      assert.strictEqual(iter, arr)
      called = true
    }, init)
    assert(called)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(reduce.call([1, 2, 3], (acc, x) => acc + x), 6)
  })
})
