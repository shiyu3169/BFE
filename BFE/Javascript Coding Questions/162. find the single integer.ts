function findSingle(arr: number[]): number {
  // your code here
  let res = 0
  arr.forEach((num) => (res ^= num))
  return res
}

const arr = [10, 2, 2, 1, 0, 0, 10]

findSingle(arr)
