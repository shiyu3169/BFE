/* This is a variation of 37. implement Binary Search (unique).

Your are given a sorted ascending array of number, but might have duplicates, you are asked to return the element right before first appearance of a target number.

If not found return undefined.

note

Please don't use Array.prototype.indexOf(), it is not our goal. */

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementBefore(arr, target) {
  let left = 0,
    right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      if (mid === 0) return undefined
      if (arr[mid - 1] !== target) return arr[mid - 1]
      right = mid - 1
      continue
    }
    if (target < arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return undefined
}
