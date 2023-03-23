/* This is a variation of 37. implement Binary Search (unique).

Your are given a sorted ascending array of number, but might have duplicates, you are asked to return the first index of a target number.

If not found return -1.

note

Please don't use Array.prototype.indexOf(), it is not our goal. */

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
// function firstIndex(arr, target, left =0, right= arr.length -1){
//   if(left > right) return -1
//   const mid = Math.floor((left + right) /2)
//   if(arr[mid] === target) {
//     if(mid === 0) return mid
//     if(arr[mid - 1] === target) {
//       return firstIndex(arr, target, left, mid -1)
//     } else {
//       return mid
//     }
//   }

//   if(arr[mid] > target) {
//     return firstIndex(arr, target, 0, mid - 1)
//   } else {
//     return firstIndex(arr, target, mid + 1, right)
//   }
// }

// function firstIndex(arr, target){
//   if(left > right) return -1
//   const mid = Math.floor((left + right) /2)
//   if(arr[mid] === target) {
//     if(mid === 0) return mid
//     if(arr[mid - 1] === target) {
//       return firstIndex(arr, target, left, mid -1)
//     } else {
//       return mid
//     }
//   }

//   if(arr[mid] > target) {
//     return firstIndex(arr, target, 0, mid - 1)
//   } else {
//     return firstIndex(arr, target, mid + 1, right)
//   }
// }

function firstIndex(arr, target) {
  let left = 0,
    right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      if (arr[mid - 1] !== target) return mid
      right = mid - 1
    } else if (target < arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
