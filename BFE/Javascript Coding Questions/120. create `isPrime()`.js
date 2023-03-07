/**
 * @param {number} num - positive integer
 */
function isPrime(num) {
  if (num === 1) return false
  const max = Math.round(Math.sqrt(num))

  for (let i = 2; i <= max; i++) {
    if (num % i === 0) return false
  }

  return true
}
