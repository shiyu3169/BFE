/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  // 1. cooling or not
  // 2. call posponed.

  // 1. once called
  //   - if cooling, stach the call
  //   - if not cooling, run it and set the timer
  // 2. when time is up, reset cooling
  //   - if stashed call, call it, go to 1

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
      stashed = [this, args]
    } else {
      func.apply(this, args) // not cooling, run current function
      startCooling()
    }
  }
}

// function throttle(func, wait) {
//   let waiting = false, stashedArgs = null
//   return function(...args) {
//     if(!waiting) {
//       func.apply(this, args)
//       waiting = true
//       const timeout = () => setTimeout(() => {
//         waiting = false
//         if(stashedArgs) {
//           func.apply(this, stashedArgs)
//           waiting = true
//           stashedArgs = null;
//           timeout()
//         }
//       }, wait)
//       timeout()
//     } else {
//       stashedArgs = args
//     }
//   }
// }
