/* Luckily we already have built-in support of BigInt in JavaScript, at least in some browsers.

1000000000000000000000n - 999999999999999999999n
// 1n
Suppose BigInt cannot be used, can you implement a string subtraction function by yourself?

subtract('1000000000000000000000', '999999999999999999999')
// '1'
All input are valid non-negative integer strings, and the result is guaranteed to be non-negative.

Don't use BigInt directly, it is not our goal here */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function subtract(num1, num2) {
  // your code here
  let result = ''

  let borrow = 0
  let i = num1.length - 1
  let j = num2.length - 1
  while (i >= 0) {
    let num1D = (Number(num1[i]) || 0) - borrow
    const num2D = j >= 0 ? Number(num2[j]) : 0
    if (num1D < num2D && i > 0) {
      borrow = 1
      num1D += 10
    } else {
      borrow = 0
    }
    result = num1D - num2D + result
    i -= 1
    j -= 1
  }
  result = result.replace(/^0+/, '')
  return result || '0'
}
