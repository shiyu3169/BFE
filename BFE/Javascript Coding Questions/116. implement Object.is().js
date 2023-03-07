/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    if (isNaN(a)) return isNaN(b)
    return 1 / a === 1 / b
  }
  return a === b
}
