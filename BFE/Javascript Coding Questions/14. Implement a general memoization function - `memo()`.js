/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
  // your code here
  const funcCache = new Map()
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join('_')
    if (funcCache?.has(func)) {
      const cachedFunc = funcCache.get(func)
      if (cachedFunc?.has(key)) {
        return cachedFunc.get(key)
      }
      const result = func.call(this, ...args)
      cachedFunc.set(key, result)
      return result
    }

    const result = func.call(this, ...args)
    funcCache.set(func, new Map([[key, result]]))
    return result
  }
}
