// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = { leading: false, trailing: true }) {
  // your code here
  let timeoutFn = null
  let leading = true
  return function (...args) {
    if (option.leading && leading) {
      leading = false
      func.apply(this, args)
      return
    }
    clearTimeout(timeoutFn)
    timeoutFn = setTimeout(() => {
      if (option.trailing) {
        func.apply(this, args)
      }
      leading = true
    }, wait)
  }
}
