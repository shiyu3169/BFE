const getNum = (str) => {
  let num = ''
  let counter = 0
  let prevChar = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== prevChar && counter) {
      num += `${counter}${prevChar}`
      counter = 1
      prevChar = str[i]
    } else {
      prevChar = str[i]
      counter++
    }
    if (i === str.length - 1) {
      num += `${counter}${prevChar}`
    }
  }
  return num
}

/**
 * @param {number} n - integer
 * @returns {string}
 */
function getNthNum(n) {
  let result = '1'
  for (let i = 2; i <= n; i++) {
    result = getNum(result)
  }
  return result
}
