/**
 * @param {string} str - roman numeral string
 * @returns {number} integer
 */
function romanToInteger(str) {
  const numerals = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])

  const backwards = str.split('')

  let prev = 0
  return backwards.reduceRight((sum, char) => {
    const value = numerals.get(char)
    sum += value >= prev ? value : -value
    prev = value
    return sum
  }, 0)
}
