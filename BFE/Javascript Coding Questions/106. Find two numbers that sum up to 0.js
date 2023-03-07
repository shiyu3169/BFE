/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  const zeros = []
  const posMap = new Map()
  const negMap = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(i)
      continue
    }
    if (arr[i] > 0) {
      posMap.set(arr[i], i)
    } else {
      negMap.set(arr[i], i)
    }
  }
  if (zeros.length >= 2) {
    return zeros.slice(0, 2)
  }
  console.log()
  for (const [value, index] of posMap) {
    if (negMap.has(-value)) {
      return [index, negMap.get(-value)]
    }
  }
  return null
}
