/* https://bigfrontend.dev/problem/Next-Right-Sibiling*/
/*
Approach 1 BFS
The time complexity of the nextRightSibling function is O(n), where n is the total number of nodes in the tree.

In the worst case, the function will need to traverse all nodes in the tree to find the target node. 
This would take O(n) time. The while loop iterates over the nodes of the tree in a breadth-first manner, 
and for each node, it performs constant-time operations such as checking for equality and adding its children to the end of the tree array. 
Therefore, the time complexity of the while loop is proportional to the number of nodes in the tree, which is O(n).

The worst-case time complexity of this function can occur when the target node is the last node in the tree. 
In that case, the function will need to traverse all n - 1 nodes in the tree before returning null.
Time complexity: O(n)
Space Complexity: O(w) - width of the tree

*/

/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
  if (root === target || target === null || root === null) return null
  let tree = [root]
  while (tree.length) {
    const node = tree.shift()
    if (node === target) {
      return tree.shift() || null
    }
    tree.push(...node.children)
  }
  return null
}

/* 
Approach 2 with DOM API and recursion

The time complexity of the nextRightSibling function is O(h), where h is the height of the tree.

In the worst case, the function will need to traverse the height of the tree to find the next right sibling of the target node. 
The function first checks for some base cases in constant time, and then it checks if the target node has a nextElementSibling. 
If so, it returns the sibling in constant time. Otherwise, it climbs up the tree to find the first ancestor that has a next sibling. 
The function calls itself recursively on the parent of the target node, so the time complexity is proportional to the height of the tree.

The space complexity of the function is also O(h), where h is the height of the tree.
The function maintains a call stack with at most h frames due to the recursive calls. 
Each frame stores some local variables, but the space used by the frames is proportional to the height of the tree. 
In addition, the function stores a reference to the parent node, which can add up to O(h) space in the worst case.

In practice, the height of the tree can be much smaller than the total number of nodes, 
so the space complexity is usually less than O(n), where n is the total number of nodes in the tree.

Time complexity: O(h) - height of the tree
Space Complexity: O(n)
*/

function nextRightSibling(root, target) {
  if (root === target || target === null || root === null) return null
  if (target.nextElementSibling) return target.nextElementSibling
  let parent = target.parentElement
  while (parent) {
    parent = nextRightSibling(root, parent)
    if (parent && parent.firstElementChild) return parent.firstElementChild
  }
  return null
}
