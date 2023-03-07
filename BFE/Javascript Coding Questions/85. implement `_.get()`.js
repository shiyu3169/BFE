/* _.get(object, path, [defaultValue]) is a handy method to help retrieving data from an arbitrary object. if the resolved value from path is undefined, defaultValue is returned.

Can you create your own get()?

const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}

get(obj, 'a.b.c') // [1,2,3]
get(obj, 'a.b.c.0') // 1
get(obj, 'a.b.c[1]') // 2
get(obj, ['a', 'b', 'c', '2']) // 3
get(obj, 'a.b.c[3]') // undefined
get(obj, 'a.c', 'bfe') // 'bfe'
Related Problem */

/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  const pathArr = Array.isArray(path)
    ? path
    : path.replaceAll(']', '').split(/[\.\[]/)
  if (!pathArr.length) return defaultValue
  let result = source
  while (result && pathArr.length) {
    result = result[pathArr.shift()]
  }
  return result === undefined ? defaultValue : result
}
