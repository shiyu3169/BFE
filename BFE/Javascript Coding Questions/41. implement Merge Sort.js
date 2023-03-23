/* Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.

Now you are asked to implement Merge Sort, which sorts an integer array in ascending order.

Do it in-place, no need to return anything.

Follow-up

What is time cost for average / worst case ? Is it stable? */

/**
 * @param {number[]} arr
 */
function mergeSort(arr) {
  if (arr.length < 2) return
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  mergeSort(left)
  mergeSort(right)
  merge(arr, left, right)
}

function merge(arr, left, right) {
  let l = 0,
    r = 0
  while (l < left.length || r < right.length) {
    if (r == right.length || (l < left.length && left[l] <= right[r]))
      arr[l + r] = left[l++]
    else arr[l + r] = right[r++]
  }
}
