/**
 * @param {string} str
 * @return {string[]}
 */
function extract(str) {
  const reg = /<a(\s[^>]*)?>.*?<\s*\/\s*a>/g
  return str.match(reg) ?? []
}
