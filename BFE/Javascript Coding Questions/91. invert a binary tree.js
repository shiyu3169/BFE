/* https://bigfrontend.dev/problem/invert-a-binary-tree */
/**
 * @param {Node} node
 * @returns {Node}
 */

/* Recursion */
function invert(node) {
  if (!node) return node
  ;[node.left, node.right] = [invert(node.right), invert(node.left)]
  return node
}

/* Loop */
function invert(node) {
  const initNode = node
  let tree = [node]
  while (tree.length) {
    const curNode = tree.pop()
    if (!curNode) continue
    ;[curNode.left, curNode.right] = [curNode.right, curNode.left]
    tree.push(curNode.left, curNode.right)
  }
  return initNode
}
