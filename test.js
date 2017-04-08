'use strict'

const tap = require('tap')

const any = require('./iterables-any')

function test (name, testCase) {
  return tap.test(name, assert => {
    testCase(assert)
    return Promise.resolve()
  })
}

test('fails if falsey iterable given', assert => {
  assert.throws(TypeError, () => {
    any(null)
  })
  assert.throws(TypeError, () => {
    any(false)
  })
  assert.throws(TypeError, () => {
    any(0)
  })
})

test('fails if non-iterable given', assert => {
  assert.throws(TypeError, () => {
    any({[Symbol.iterable]: null})
  })
  assert.throws(TypeError, () => {
    any(true)
  })
  assert.throws(TypeError, () => {
    any(1)
  })
})

test('fails if non-function given as second arg', assert => {
  assert.throws(TypeError, () => {
    any([1], null)
  })
  assert.throws(TypeError, () => {
    any([], true)
  })
  assert.throws(TypeError, () => {
    any([], {})
  })
})

test('exits early', assert => {
  let ran = false
  any((function * () {
    yield 1
    ran = true
  })())

  assert.equal(ran, false)
})

test('returns true if any are true', assert => {
  const result = any((function * () {
    yield 0
    yield false
    yield null
    yield ''
    yield true
  })())

  assert.equal(result, true)
})

test('returns false if none are true', assert => {
  const result = any((function * () {
    yield 0
    yield false
    yield null
    yield ''
  })())

  assert.equal(result, false)
})
