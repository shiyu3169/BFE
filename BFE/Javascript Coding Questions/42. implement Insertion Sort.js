/* Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.

Now you are asked to implement Insertion Sort, which sorts an integer array in ascending order.

Do it in-place, no need to return anything.

Follow-up

What is time cost for average / worst case ? Is it stable? */

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = current
  }
}

insertionSort([4, 2, 100, 99, 10000, -1, 99, 2])
