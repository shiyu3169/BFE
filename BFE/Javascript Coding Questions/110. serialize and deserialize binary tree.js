// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
  if (!root) return ''
  const tree = [root]
  const result = ['']
  while (tree.length) {
    const node = tree.shift()
    if (node) {
      result.push(node.value)
      tree.push(node.left)
      tree.push(node.right)
    } else {
      result.push(null)
    }
  }
  return result.join(',')
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  if (!str) return null
  const arr = str.split(',')
  console.log(arr)
  const constructNode = (index) => {
    if (index > arr.length) return null
    if (!arr[index]) return null
    return {
      value: Number(arr[index]),
      left: constructNode(2 * index),
      right: constructNode(2 * index + 1),
    }
  }
  return constructNode(1)
}
