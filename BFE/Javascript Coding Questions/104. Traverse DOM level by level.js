/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
  const result = []
  if (!root) return result
  const tree = [root]
  while (tree.length) {
    const node = tree.shift()
    tree.push(...node.children)
    result.push(node)
  }
  return result
}
