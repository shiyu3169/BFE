/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power) {
  if (power === 0) return 1
  if (power === -1) return 1 / base
  if (power % 2 === 0) {
    const res = pow(base, power / 2)
    return res * res
  } else {
    return base * pow(base, power - 1)
  }
}
