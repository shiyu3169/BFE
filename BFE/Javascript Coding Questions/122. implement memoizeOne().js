/**
 * @param {Function} func
 * @param {(args: any[], newArgs: any[]) => boolean} [isEqual]
 * @returns {any}
 */

function memoizeOne(func, isEqual) {
  const cache = {}
  return function (...args) {
    if (cache.args) {
      const cached = isEqual
        ? isEqual(cache.args, args)
        : JSON.stringify(cache.args) === JSON.stringify(args)
      if (cached && this === cache.self) return cache.data
    }
    const result = func.call(this, ...args)
    cache.self = this
    cache.args = args
    cache.data = result
    return result
  }
}
