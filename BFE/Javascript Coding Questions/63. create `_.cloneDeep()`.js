/* Object.assign() could be used to do shallow copy, while for recursive deep copy, _.cloneDeep could be very useful.

Can you create your own _.cloneDeep()?

The lodash implementation actually covers a lot of data types, for simplicity, your code just need to cover

primitive types and their wrapper Object
Plain Objects (Object literal) with all enumerable properties
Array */
function cloneDeep(obj, map = new Map()) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (map.has(obj)) {
    return map.get(obj)
  }

  const output = Array.isArray(obj) ? [] : {}
  map.set(obj, output)
  for (const key of Reflect.ownKeys(obj)) {
    const val = obj[key]
    output[key] = cloneDeep(val, map)
  }

  return output
}
