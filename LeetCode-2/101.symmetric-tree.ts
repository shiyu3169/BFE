/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true
  function areSymmetric(root1, root2): boolean {
    if (root1 === null && root2 === null) return true
    if (root1 === null || root2 === null) return false
    if (root1?.val !== root2?.val) return false
    return (
      areSymmetric(root1.left, root2.right) &&
      areSymmetric(root1.right, root2.left)
    )
  }
  return areSymmetric(root.left, root.right)
}
// @lc code=end
/* Accepted
199/199 cases passed (66 ms)
Your runtime beats 89.4 % of typescript submissions
Your memory usage beats 91.62 % of typescript submissions (44.7 MB) */
