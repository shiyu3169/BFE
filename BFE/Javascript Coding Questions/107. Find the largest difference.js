/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  if (!arr.length) return 0
  let min = arr[0]
  let max = arr[0]
  for (const num of arr) {
    min = Math.min(min, num)
    max = Math.max(max, num)
  }
  return max - min
}
