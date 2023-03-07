/**
 * @param {any} x
 * @return {number}
 */
function mySqrt(x) {
  if (x < 0 || isNaN(x) || typeof x !== 'number') return NaN
  let min = 0
  let max = Math.ceil(x / 2)

  while (min < max) {
    const mid = Math.ceil((max - min) / 2) + min
    const sqare = mid * mid
    if (sqare === x) return mid
    if (sqare > x) {
      max = mid - 1
    } else {
      min = mid
    }
  }
  return min
}
