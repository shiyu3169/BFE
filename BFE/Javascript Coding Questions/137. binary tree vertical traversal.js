// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @returns {number[]}
 */
function traverse(root) {
  const map = new Map()
  let min = Infinity
  let max = -Infinity

  const queue = [[root, 0]]

  while (queue.length) {
    let count = queue.length
    while (count--) {
      const [node, index] = queue.shift()
      if (node === null) continue
      if (map.has(index)) {
        map.get(index).push(node.value)
      } else {
        map.set(index, [node.value])
      }

      min = Math.min(min, index)
      max = Math.max(max, index)
      queue.push([node.left, index - 1])
      queue.push([node.right, index + 1])
    }
    // sort the nodes on same level in right order
    queue.sort((a, b) => a[1] - b[1])
  }

  const length = -min + max + 1
  const result = new Array(length)

  for (const [rawIndex, value] of map) {
    result[rawIndex - min] = value
  }

  return result.flat()
}
