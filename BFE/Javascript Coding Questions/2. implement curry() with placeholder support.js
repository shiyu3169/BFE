/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    // 1. if enough args (filter out the placeholder), call func
    // 2. if not enough, bind the args and wait for new ones
    const expectedARgLength = fn.length
    const isArgsEnough =
      args.length >= expectedARgLength &&
      args.slice(0, expectedARgLength).every((arg) => arg !== curry.placeholder)
    if (isArgsEnough) {
      return fn.apply(this, args)
    } else {
      // we can't use bind, since we want to replace
      // return curried.bind(this, ...args)
      return function (...newArgs) {
        // we need merge two args -- newargs, args
        const mergedArgs = []
        let i = 0
        let j = 0
        while (i < args.length && j < newArgs.length) {
          if (args[i] === curry.placeholder) {
            mergedArgs.push(newArgs[j])
            j++
            i++
          } else {
            mergedArgs.push(args[i])
            i++
          }
        }
        // leftover
        while (i < args.length) {
          mergedArgs.push(args[i])
          i += 1
        }
        while (j < newArgs.length) {
          mergedArgs.push(newArgs[j])
          j += 1
        }
        return curried(...mergedArgs)
      }
    }
  }
}

curry.placeholder = Symbol()
