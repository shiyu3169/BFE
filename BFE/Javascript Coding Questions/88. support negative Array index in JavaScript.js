/* https://bigfrontend.dev/problem/support-negative-Array-index */

/**
 * @param {any[]} arr
 * @returns {?} - sorry no type hint for this
 */
function wrap(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      if (prop === Symbol.iterator) {
        return target[prop].bind(target)
      }
      let index = parseInt(prop)
      if (index < 0) {
        index += arr.length
        return target[index]
      }
      return target[prop]
    },
    set(target, prop, value) {
      let index = parseInt(prop)
      if (index < 0) {
        index += arr.length
        if (index < 0) throw new Error()
        target[index] = value
      } else {
        target[prop] = value
      }
      return true
    },
  })
}
