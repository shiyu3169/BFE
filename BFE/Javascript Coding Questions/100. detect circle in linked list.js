/* https://bigfrontend.dev/problem/detect-circle-in-linked-list */

/**
 * @param {Node} head
 * @return {boolean}
 */
/* 
  Approach 1 - Set
  Time complexity: O(n)
  Space complexity: O(n)
*/
function hasCircle(head, visited = new Set()) {
  if (!head?.next) return false
  if (visited.has(head)) return true
  visited.add(head)
  return hasCircle(head.next, visited)
}

/* 
  Approach 2 - fast slow pointer
  Time complexity: O(n)
  Space complexity: O(1)
*/
function hasCircle(head) {
  let fast = head
  let slow = head
  while (fast && slow) {
    fast = fast.next?.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}
