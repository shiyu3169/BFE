/**
 * @param {Function} func
 * @param {any[]} args
 * @returns {Function}
 */
function partial(func, ...args) {
  return function (...newArgs) {
    // merge args and new args, then call func
    const finalArgs = []
    const argsCopy = [...args]
    while (argsCopy.length > 0) {
      const head = argsCopy.shift()
      if (head === partial.placeholder) {
        finalArgs.push(newArgs.shift())
      } else {
        finalArgs.push(head)
      }
    }

    finalArgs.push(...newArgs)
    return func.apply(this, finalArgs)
  }
}

partial.placeholder = Symbol()

function partial(func, ...args) {
  return function (...newArgs) {
    const argsCopy = args.map((arg) =>
      arg === partial.placeholder ? newArgs.shift() : arg,
    )
    return func.call(this, ...argsCopy, ...newArgs)
  }
}
