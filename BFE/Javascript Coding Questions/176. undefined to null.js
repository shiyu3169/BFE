/**
 * @param {any} arg
 * @returns any
 */
function undefinedToNull(arg) {
  if (arg === undefined) return null
  if (Array.isArray(arg)) {
    return arg.map(undefinedToNull)
  }
  if (typeof arg === 'object' && arg) {
    return Object.keys(arg).reduce((acc, cur) => {
      acc[cur] = undefinedToNull(arg[cur])
      return acc
    }, {})
  }
  return arg
}

console.log(undefinedToNull({ a: undefined, b: 'BFE.dev' }))
