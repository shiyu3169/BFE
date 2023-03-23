/* Given a number, please create a function to add commas as thousand separators.

addComma(1) // '1'
addComma(1000) // '1,000'
addComma(-12345678) // '-12,345,678'
addComma(12345678.12345) // '12,345,678.12345'
Input are all valid numbers. */

/**
 * @param {number} num
 * @return {string}
 */
function addComma(num) {
  const str = num.toString()
  const strArr = str.split('.')
  const integer = strArr[0]
  let result = ''
  let counter = 0
  for (let i = integer.length - 1; i >= 0; i--) {
    if (counter === 2 && i !== 0 && integer[i - 1] !== '-') {
      result = `,${integer[i]}${result}`
      counter = 0
    } else {
      counter++
      result = integer[i] + result
    }
  }
  return strArr[1] ? result + '.' + strArr[1] : result
}
