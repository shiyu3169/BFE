/*
 * @lc app=leetcode id=1268 lang=typescript
 *
 * [1268] Search Suggestions System
 */

// @lc code=start
/* 
function suggestedProducts(products: string[], searchWord: string): string[][] {
  const result: string[][] = []
  const filtered = new Set<number>()
  products.sort() //nlogn
  // m * n
  for (let i = 1; i <= searchWord.length; i++) {
    let foundFirst = false
    const group: string[] = []
    for (let j = 0; j < products.length; j++) {
      const product = products[j]
      if (group.length >= 3) break
      if (filtered.has(j)) continue
      if (product.slice(0, i) === searchWord.slice(0, i)) {
        group.push(product)
        foundFirst = true
      } else {
        filtered.add(j)
        if (foundFirst) break
      }
    }
    result.push(group)
  }
  return result
} 
*/

/* function suggestedProducts(products: string[], searchWord: string): string[][] {
  const result: string[][] = []
  products.sort()
  let left = 0
  let right = products.length - 1

  for (let i = 0; i <= searchWord.length - 1; i++) {
    while (left <= right) {
      if (
        products[left][i] === searchWord[i] &&
        products[right][i] === searchWord[i]
      ) {
        break
      }
      if (products[left][i] !== searchWord[i]) {
        left += 1
      }
      if (products[right][i] !== searchWord[i]) {
        right -= 1
      }
    }

    const group: string[] = []
    if (left <= right) {
      group.push(products[left])
    }
    if (left + 1 <= right) {
      group.push(products[left + 1])
    }
    if (left + 2 <= right) {
      group.push(products[left + 2])
    }
    result.push(group)
  }
  return result
} */

function suggestedProducts(products: string[], searchWord: string): string[][] {
  const result: string[][] = []
  products.sort()
  let left = 0
  let right = products.length - 1

  for (let i = 0; i <= searchWord.length - 1; i++) {
    while (
      left <= right &&
      (products[left].length <= i || products[left][i] !== searchWord[i])
    ) {
      left += 1
    }
    while (
      left <= right &&
      (products[right].length <= i || products[right][i] !== searchWord[i])
    ) {
      right -= 1
    }
    const group: string[] = []
    let remaining = Math.min(right - left + 1, 3)
    for (let j = 0; j < remaining; j++) {
      group.push(products[left + j])
    }
    result.push(group)
  }
  return result
}

// @lc code=end
/* 
Accepted
42/42 cases passed (106 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 75 % of typescript submissions (53.9 MB)
*/
