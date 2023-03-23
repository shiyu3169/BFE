// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = { leading: true, trailing: true }) {
  let timer = null
  let stashed = null // store function and args

  const check = () => {
    timer = null // reset timer
    if (stashed) {
      func.apply(stashed[0], stashed[1]) // run stashed function
      stashed = null
      startCooling()
    }
  }

  const startCooling = () => {
    timer = setTimeout(check, wait)
  }

  return function (...args) {
    if (timer) {
      //cooling, update stored function
      if (option.trailing) {
        stashed = [this, args]
      }
      return
    }

    if (option.leading) {
      func.apply(this, args)
    } else if (option.trailing) {
      stashed = [this, args]
    }
    startCooling()
  }
}
