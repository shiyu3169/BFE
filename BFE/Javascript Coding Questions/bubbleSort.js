/* Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.

Now you are asked to implement Bubble Sort, which sorts an integer array in ascending order.

Do it in-place, no need to return anything.

Follow-up

What is time cost for average / worst case ? Is it stable? */

/**
 * @param {number[]} arr
 */
function bubbleSort(array) {
  let isSorted = false
  let lastUnsorted = array.length - 1

  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < lastUnsorted; i++) {
      if (array[i] > array[i + 1]) {
        ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
        isSorted = false
      }
    }
    lastUnsorted--
  }

  return array
}
