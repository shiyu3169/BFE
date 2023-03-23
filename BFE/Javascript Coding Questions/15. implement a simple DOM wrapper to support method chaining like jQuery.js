/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function (prop, value) {
      el.style[prop] = value
      console.log(this)
      return this
    },
  }
}
