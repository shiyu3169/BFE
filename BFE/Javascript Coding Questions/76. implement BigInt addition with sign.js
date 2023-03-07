/* This is a follow-up on 62. implement BigInt addition.

You are asked to implement a string addition function, with possible negative integers. Also, '+' plus sign should also be supported

add('-999999999999999999', '-1')
// '-1000000000000000000'

add('-999999999999999999', '+1')
// '-999999999999999998'
Don't use BigInt directly, it is not our goal here. */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  const num1Neg = num1[0] === '-'
  const num2Neg = num2[0] === '-'
  const num1R = num1.replace(/[+-]/, '')
  const num2R = num2.replace(/[+-]/, '')
  if (num1Neg && num2Neg) {
    return '-' + realAdd(num1R, num2R)
  }
  if (num1Neg && !num2Neg) {
    if (isSmaller(num1R, num2R)) {
      return subtract(num2R, num1R)
    } else {
      return '-' + subtract(num1R, num2R)
    }
  }
  if (!num1Neg && num2Neg) {
    if (isSmaller(num2R, num1R)) {
      return subtract(num1R, num2R)
    } else {
      return '-' + subtract(num2R, num1R)
    }
  }
  return '+' + realAdd(num1R, num2R)
}

function realAdd(num1, num2) {
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

function subtract(num1, num2) {
  // your code here
  let result = ''
  let borrow = 0
  let i = num1.length - 1
  let j = num2.length - 1
  while (i >= 0 || j >= 0) {
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

function isSmaller(num1, num2) {
  // Calculate lengths of both string
  let n1 = num1.length,
    n2 = num2.length
  if (n1 < n2) return true
  if (n2 < n1) return false

  // if we are here num1 and num2 have same length, we start comparring from MSB
  for (let i = 0; i < n1; i++) {
    if (num1[i] < num2[i]) return true
    else if (num1[i] > num2[i]) return false
  }
  return true
}
