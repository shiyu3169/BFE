/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
function countOne(num) {
  let count
  for (count = 0; num !== 0; ++count) {
    num &= num - 1
  }
  return count
}

/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
function countOne(num) {
  // your code here
  return num ? 1 + countOne(num & (num - 1)) : 0
}

/* n &= (n – 1) always removes the last 1 element on the right-hand side */
