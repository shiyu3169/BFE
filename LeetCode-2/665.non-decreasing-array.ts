/*
 * @lc app=leetcode id=665 lang=typescript
 *
 * [665] Non-decreasing Array
 */

// @lc code=start
function checkPossibility(nums: number[]): boolean {
  let counter = 0
  let updated = new Map<number, number>()
  let max = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (counter > 1) return false
    const cur = updated.has(i) ? updated.get(i) : nums[i]
    const next = nums[i + 1]
    if (cur! > next) {
      if (max > next) {
        updated.set(i + 1, cur!)
      } else {
        updated.set(i, max)
        i--
      }
      counter++
    } else {
      max = Math.max(max, cur!)
    }
  }
  return counter < 2
}
/* 
Accepted
335/335 cases passed (71 ms)
Your runtime beats 92.86 % of typescript submissions
Your memory usage beats 100 % of typescript submissions (45.1 MB)
*/
