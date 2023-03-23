/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let timer = null
  return function (...args) {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
