'use strict'

module.exports = any

function any (iterable, test) {
  if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError('expected an iterable as the first argument')
  }

  if (arguments.length === 1) {
    test = Boolean
  }

  if (typeof test !== 'function') {
    throw new TypeError('expected second argument to be a function')
  }

  for (const xs of iterable) {
    if (test(xs)) {
      return true
    }
  }

  return false
}
