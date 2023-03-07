/* https://bigfrontend.dev/problem/implement-String-prototype-trim */

/**
 * @param {string} str
 * @return {string}
 */
/* Approach 1 */
function trim(str) {
  const strArr = [...str]
  const emptyReg = /\s/
  while (emptyReg.test(strArr[0])) {
    strArr.shift()
  }
  while (emptyReg.test(strArr[strArr.length - 1])) {
    strArr.pop()
  }
  return strArr.join('')
}

/* Approach 2 */
function trim(str) {
  let start = 0
  let end = str.length - 1
  const emptyReg = /\s/
  while (emptyReg.test(str[start])) {
    start += 1
  }
  while (emptyReg.test(str[end])) {
    end -= 1
  }
  return str.slice(start, end + 1)
}

/* Approach 3 */
function trim(str) {
  return str.replace(/^\s+|\s+$/g, '')
}
