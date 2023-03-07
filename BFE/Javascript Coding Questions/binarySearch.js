/* Even in Front-End review, basic algorithm technique like Binary Search are likely to be asked.

You are given an unique & ascending array of integers, please search for its index with Binary Search.

If not found, return -1

note

Please don't use Array.prototype.indexOf(), it is not our goal. */

/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (target === arr[mid]) {
      return mid
    }
    if (target < arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
