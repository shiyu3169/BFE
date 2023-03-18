/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length - 1
  let result = [-1, -1]

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      if (nums?.[mid - 1] !== target) {
        result[0] = mid
      } else {
        result[0] = searchMin(nums, target, left, mid - 1)
      }
      if (nums?.[mid + 1] !== target) {
        result[1] = mid
      } else {
        result[1] = searchMax(nums, target, mid + 1, right)
      }
      return result
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return result
}

function searchMin(
  nums: number[],
  target: number,
  left: number,
  right: number,
): number {
  // we know there is at least a target
  while (true) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      if (nums?.[mid - 1] !== target) {
        return mid
      } else {
        return searchMin(nums, target, left, mid)
      }
    } else {
      left = mid + 1
    }
  }
}

function searchMax(
  nums: number[],
  target: number,
  left: number,
  right: number,
): number {
  // we know there is at least a target
  while (true) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      if (nums?.[mid + 1] !== target) {
        return mid
      } else {
        return searchMax(nums, target, mid + 1, right)
      }
    } else {
      right = mid - 1
    }
  }
}

// @lc code=end
/* Accepted
88/88 cases passed (58 ms)
Your runtime beats 92.37 % of typescript submissions
Your memory usage beats 62.65 % of typescript submissions (44.1 MB) */
