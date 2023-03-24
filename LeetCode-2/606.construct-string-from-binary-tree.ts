/*
 * @lc app=leetcode id=606 lang=typescript
 *
 * [606] Construct String from Binary Tree
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

function tree2str(root: TreeNode | null): string {
  let result = ''
  if (root === null) {
    return ''
  } else {
    result +=
      root.val +
      (root.left ? `(${tree2str(root.left)})` : root.right ? '()' : '') +
      (root.right ? `(${tree2str(root.right)})` : '')
  }
  return result
}
// @lc code=end
/* 
Accepted
160/160 cases passed (77 ms)
Your runtime beats 76.67 % of typescript submissions
Your memory usage beats 83.33 % of typescript submissions (48.2 MB)
*/
