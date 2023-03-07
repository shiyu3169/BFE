/**
 * @param {string} str
 * @return {Generator}
 */
function* tokenize(str) {
  let tokens = str.match(/(\d+)|[\+\-\*\/\(\)]/g)
  for (var token of tokens) {
    yield token
  }
}
