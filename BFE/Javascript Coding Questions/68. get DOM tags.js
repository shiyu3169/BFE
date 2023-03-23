/* Given a DOM tree, please return all the tag names it has.

Your function should return a unique array of tags names in lowercase, order doesn't matter. */

/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
  // your code here
  const stack = [tree]
  const result = new Set()
  while (stack.length) {
    const top = stack.pop()
    result.add(top.tagName.toLowerCase())
    stack.push(...top.children)
  }
  return Array.from(result)
}
