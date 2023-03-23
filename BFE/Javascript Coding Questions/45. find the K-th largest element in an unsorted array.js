/* You are given an unsorted array of numbers, which might have duplicates, find the K-th largest element.

The naive approach would be sort it first, but it costs O(nlogn), could you find a better approach?

Maybe you can recall what is happening in Quick Sort or Priority Queue */
/**
 * @param {number[]} arr
 * @param {number} k
 */
function findKThLargest(arr, k, l = 0, r = arr.length - 1) {
  const pivot = partition(arr, l, r)
  if (pivot === arr.length - k) return arr[pivot]
  if (pivot < arr.length - k) return findKThLargest(arr, k, pivot + 1, r)
  else return findKThLargest(arr, k, l, pivot - 1)
}

function partition(arr, l, r) {
  const pivot = l++
  while (l <= r) {
    if (arr[l] <= arr[pivot]) l++
    else {
      ;[arr[l], arr[r]] = [arr[r], arr[l]]
      r--
    }
  }
  ;[arr[pivot], arr[r]] = [arr[r], arr[pivot]]
  return r
}
