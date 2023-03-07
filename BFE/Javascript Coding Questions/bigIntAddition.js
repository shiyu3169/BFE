/* Luckily we have BigInt in JavaScript so handle big numbers.

What if we need to do it by ourselves for older browsers?

You are asked to implement a string addition function, with all non-negative integers in string.

add('999999999999999999', '1')
// '1000000000000000000'
Don't use BigInt directly, it is not our goal here. */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let result = ''
  while (i >= 0 || j >= 0 || carry > 0) {
    const num1D = num1[i] || '0'
    const num2D = num2[j] || '0'
    const sum = Number(num1D) + Number(num2D) + Number(carry)
    carry = Math.floor(sum / 10)
    result = (sum % 10) + result
    i--
    j--
  }
  return result
}
