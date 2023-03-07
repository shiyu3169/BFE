/**
 * @param {string} str
 * @return {number}
 */
function countPalindromicSubstr(str) {
  let counter = 0
  let center = 0
  while (center < str.length) {
    let left = Math.floor(center)
    let right = Math.ceil(center)
    while (left >= 0 && right < str.length) {
      if (str[left] === str[right]) {
        counter += 1
        left -= 1
        right += 1
      } else {
        break
      }
    }
    center += 0.5 // this can check both odd and even palindromic
  }
  return counter
}
