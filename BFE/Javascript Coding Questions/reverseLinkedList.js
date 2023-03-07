/* Another basic algorithm even for Front End developers.

You are asked to reverse a linked list.

Suppose we have Node interface like this

class Node {
   new(val: number, next: Node);
   val: number
   next: Node
}
We can then chain nodes together to create a linked list.

const Three = new Node(3, null)
const Two = new Node(2, Three)
const One = new Node(1, Two)

//now we have  a linked list
// 1 → 2 → 3
Now how can you reverse it to 3 → 2 → 1 ? you can modify the next property of each node, but not the val.

Follow up

Could you solve it with and without recursion? */

/**
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node}
 */
const reverseLinkedList = (list) => {
  // let prev = null
  // while(list) {
  //     const next = list.next
  //     list.next = prev
  //     prev = list
  //     list = next
  // }
  // return prev
  // if (!list) return
  // function reverse(list, prev) {
  //   const curNext = list.next
  //   list.next = prev
  //   if (curNext) {
  //     return reverse(curNext, list)
  //   }
  //   return list
  // }
  // return reverse(list)
  let node = list,
    prev = null
  while (node !== null) {
    ;[node.next, node, prev] = [prev, node.next, node]
  }
  return prev
}
