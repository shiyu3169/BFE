/* This is an easy problem.

For all the basic data types in JavaScript, how could you write a function to detect the type of arbitrary data?
Besides basic types, you need to also handle also commonly used complex data type including Array, ArrayBuffer, Map, Set, Date and Function
The goal is not to list up all the data types but to show us how to solve the problem when we need to.
The type should be lowercase */

/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  const tag = Object.prototype.toString.call(data) // '[object Undefined]'
  const matches = tag.match(/\[object (\S+)\]/)
  if (matches) return matches[1].toLowerCase()
  throw new Error('unexpected data type')
}

// Test
detectType(1) // 'number'
detectType(new Map()) // 'map'
detectType([]) // 'array'
detectType(null) // 'null'
// 1 => 'number'

// Number(1) => 'number'

// new Number(1) => 'number'

// null => 'null'

// 'string' => 'string'

// String('string') => 'string'

// new String('string') => 'string'

// undefined => 'undefined'

// 1n => 'bigint'

// true => 'boolean'

// Boolean(true) => 'boolean'

// new Boolean(true) => 'boolean'

// [] => 'array'

// new Array() => 'array'

// new ArrayBuffer() => 'arraybuffer'

// new Date() => 'date'

// new Map() => 'map'

// new Set() => 'set'

// Symbol() => 'symbol'

// {a: '3'} => 'object'

// () => 3 => 'function'
