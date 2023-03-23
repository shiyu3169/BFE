/* Given an array containing all kinds of data, please implement a function deduplicate() to remove the duplicates.

You should modify the array in place. Order doesn't matter.

What is time & space cost of your approach? */

/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
  const cache = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (cache.has(arr[i])) {
      continue
    }
    cache.add(arr[i])
    arr[cache.size - 1] = arr[i]
  }
  arr.length = cache.size
}
