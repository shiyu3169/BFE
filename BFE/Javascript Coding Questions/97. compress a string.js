/* https://bigfrontend.dev/problem/compress-a-string */
/**
 * @param {string} str
 * @return {string}
 */
function compress(str) {
  if (!str) return str
  let counter = 0
  let char = ''
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (!char) char = str[i]
    if (str[i] !== char) {
      result += counter > 1 ? char + counter : char
      counter = 1
      char = str[i]
    } else {
      counter += 1
    }
  }
  result += counter > 1 ? char + counter : char
  return result
}
