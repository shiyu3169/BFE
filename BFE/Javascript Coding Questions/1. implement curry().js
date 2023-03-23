/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    // 1. if enough args, call func
    // 2. if not enough, bind the args and wait for new ones
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return curried.bind(this, ...args)
    }
  }
}
