/* You are given a list of sorted non-descending integer arrays, write a function to merge them into one sorted non-descending array.

merge(
  [
    [1,1,1,100,1000,10000],
    [1,2,2,2,200,200,1000],
    [1000000,10000001],
    [2,3,3]
  ]
)
// [1,1,1,1,2,2,2,2,3,3,100,200,200,1000,1000,10000,1000000,10000001]
What is time complexity of your solution?

Source for this  
 */

/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]}
 */
function merge(arrList) {
  if (!arrList.length) return arrList
  if (arrList.length < 2) return arrList[0]
  if (arrList.length === 2) return mergeTwo(arrList[0], arrList[1])
  const mid = Math.floor(arrList.length / 2)
  let left = merge(arrList.slice(0, mid))
  let right = merge(arrList.slice(mid))
  return mergeTwo(left, right)
}

function mergeTwo(arr1, arr2) {
  let i = 0
  let j = 0
  const mergedArr = []
  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) {
      mergedArr.push(...arr2.slice(j))
      break
    }
    if (j >= arr2.length) {
      mergedArr.push(...arr1.slice(i))
      break
    }
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i])
      i++
    } else {
      mergedArr.push(arr2[j])
      j++
    }
  }
  return mergedArr
}
