# @iterables/any

Return true if any element of an iterable matches.

```javascript
const any = require('@iterables/any')

any('abc', xs => xs === 'c') // true
any('abc', xs => xs === 'd') // false
any([null, false, '']) // false
any([null, false, {}]) // true
```

## Installation

```
$ npm install --save @iterables/any
```

## API

### `any(iterable, test = Boolean) -> Iterator`

* `iterable`: any `Iterator` — a generator instance, `Array`, `Map`, `String`, or `Set`
* `test`: A function taking `xs` and returning a boolean value.

Returns `true` if any element matched `test`, or `false` if no element matched.

Stops consuming elements from `iterable` as soon as they pass `test`.

## License

MIT
