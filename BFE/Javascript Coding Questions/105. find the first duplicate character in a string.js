/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  const cache = new Set()
  for (const char of str) {
    if (cache.has(char)) return char
    cache.add(char)
  }
  return null
  // your code here
}
