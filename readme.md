# reduce-iterable

Applies a function to iterated values to reduce them to a single value. It’s like [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) but it works for any iterable object.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i reduce-iterable
```

## API

The module exports a single function.

### Parameters

1. Bindable: `iter` (iterable)
2. `cb` (Function): A callback which is called for each iterated value.
    * Parameters
        1. `acc` (any): The accumulator.
        2. `x` (any): The iterated value.
        3. `i` (integer): The number of values iterated so far. Starts at `0` if the accumulator was given a starting value; otherwise starts at `1`.
        4. `iter` (iterable): The original `iter`.
    * Return Value: The accumulator that should be passed to the next iteration.
3. Optional: `acc` (any): The initial value of the accumulator. Defaults to the first iterated value.

### Return Value

The final accumulator value.

## Example

```javascript
const reduce = require('reduce-iterable')

reduce([1, 2, 3], (acc, x) => acc + x) // 6

// Supports the bind operator
[1, 2, 3]::reduce((acc, x) => acc + x) // 6
```

## Related

* [filter-iter](https://github.com/lamansky/filter-iter): Filters an iterable object so that it only yields values which pass a test function.
* [partition-iterable](https://github.com/lamansky/partition-iterable): Divides iterated values into those that match a filter and those that don’t.
* [unique-iterable](https://github.com/lamansky/unique-iterable): Filters an iterable object so it doesn’t yield the same value more than once.
* [unique-iterable-by](https://github.com/lamansky/unique-iterable-by): Filters yielded values by testing uniqueness with an index, key, or callback.
