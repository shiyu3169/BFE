/* Height of a tree is the maximum depth from root node. Empty root node have a height of 0.

If given DOM tree, can you create a function to get the height of it?

For the DOM tree below, we have a height of 4.

<div>
  <div>
    <p>
      <button>Hello</button>
    </p>
  </div>
  <p>
    <span>World!</span>
  </p>
</div>
Can you solve this both recursively and iteratively?

Related Problems */

/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
// function getHeight(tree) {
//   if (tree === null) return 0
//   return Math.max(...Array.from(tree.children).map(getHeight), 0) + 1
// }

function getHeight(tree) {
  if (tree === null) return 0
  const queue = [tree]
  let height = 0

  while (queue.length > 0) {
    let count = queue.length

    height += 1
    while (count > 0) {
      const head = queue.shift()
      queue.push(...head.children)
      count -= 1
    }
  }
  return height
}
