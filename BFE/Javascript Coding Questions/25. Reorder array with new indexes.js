/* 25. Reorder array with new indexes

Suppose we have an array of items - A, and another array of indexes in numbers - B

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]
You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.

For above example A should be modified inline to following

['F', 'A', 'E', 'D', 'C', 'B']
The input are always valid.

follow-up

It is fairly easy to do this by using extra O(n) space, could you solve it with O(1) space?

*/

/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  for (let i = 0; i < items.length; i++) {
    while (newOrder[i] !== i) {
      const to = newOrder[i]
      ;[newOrder[i], newOrder[to]] = [newOrder[to], newOrder[i]]
      ;[items[i], items[to]] = [items[to], items[i]]
    }
  }
}

/*
[A,B,C,D,E,F] [1,5,4,3,2,0]
[B,A,C,D,E,F] [5,1,4,3,2,0]
[F,A,C,D,E,B] [0,1,4,3,2,5]
[F,A,E,D,C,B] [0,1,2,3,4,5]
*/
