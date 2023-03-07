/* Can you create a range(from, to) which makes following work?

for (let num of range(1, 4)) {
  console.log(num)  
}
// 1
// 2
// 3
// 4
This is a simple one, could you think more fancy approaches other than for-loop?

Notice that you are not required to return an array, but something iterable would be fine. */

/**
 * @param {integer} from
 * @param {integer} to
 */
// function range(from, to) {
//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           return {
//             done: from > to,
//             value: from++
//           }
//         }
//       }
//     }
//   }
// }

// generator function retuns generator which implements iterator protocol
// function range(from, to) {
//   return {
//     [Symbol.iterator]: function*() {
//       while(from <= to) {
//         yield from++
//       }
//     }
//   }
// }

// generator also implements iterable protocal
// function range(from, to) {
//   return (
//     function*() {
//       while(from <= to) {
//         yield from++
//       }
//     }
//   )(from,to)
// }

// or change the function itself to generator function
function* range(from, to) {
  while (from <= to) {
    yield from++
  }
}
