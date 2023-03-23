/* _.isEqual is useful when you want to compare complex data types by value not the reference.

Can you implement your own version of deep equal isEqual? The lodash version covers a lot of data types. In this problem, you are asked to support :

primitives
plain objects (object literals)
array
Objects are compared by their own, not inherited, enumerable properties

const a = {a: 'bfe'}
const b = {a: 'bfe'}

isEqual(a, b) // true
a === b // false

const c = [1, a, '4']
const d = [1, b, '4']

isEqual(c, d) // true
c === d // false
Lodash implementation has some strange behaviors. (github issue, like following code


const a = {}
a.self = a
const b = {self: a}
const c = {}
c.self = c
const d = {self: {self: a}}
const e = {self: {self: b}}
lodash.isEqual gives us following result. Notice there is a case that resulting in false.

// result from lodash implementation
_.isEqual(a, b) // true
_.isEqual(a, c) // true
_.isEqual(a, d) // true
_.isEqual(a, e) // true
_.isEqual(b, c) // true
_.isEqual(b, d) // true
_.isEqual(b, e) // false
_.isEqual(c, d) // true
_.isEqual(c, e) // true
_.isEqual(d, e) // true
Setting aside the performance concerns mentioned by lodash, your implement should not have above problem, which means above all returns true and call stack should not exceed the maximum. */

/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function isEqual(a, b, map = new Map()) {
  if (typeof a !== 'object' || typeof b !== 'object') {
    return a === b
  }
  if (map.get(a) === b) return true
  map.set(a, b)
  // isEqual([1,2], {0:1,1:2})
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false
  }
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)
  if (aKeys.length !== bKeys.length) {
    return false
  }
  for (const key of aKeys) {
    if (!isEqual(a[key], b[key], map)) {
      return false
    }
  }
  return true
}
