/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  let maxPriorityQueue = new MaxPriorityQueue()
  nums.forEach((num) => maxPriorityQueue.enqueue(num))
  while (k > 1) {
    maxPriorityQueue.dequeue()
    k--
  }
  return maxPriorityQueue.front().element
}

// @lc code=end
/* Accepted
39/39 cases passed (284 ms)
Your runtime beats 8.22 % of typescript submissions
Your memory usage beats 5.02 % of typescript submissions (66.8 MB) */
