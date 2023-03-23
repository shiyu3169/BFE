// This is a JavaScript coding problem from BFE.dev

/**
 * @param {any[]} arr
 * @returns {void}
 */
function shuffle(arr) {
  // modify the arr inline to change the order randomly
  // for(let i=0;i<arr.length;i++) {
  //   const j = i + Math.floor(Math.random() * (arr.length -i))
  //   ;[arr[i],arr[j]] = [arr[j],arr[i]]
  // }

  let oldIndex = arr.length - 1
  while (oldIndex >= 0) {
    const newIndex = Math.floor(Math.random() * (oldIndex + 1))
    ;[arr[oldIndex], arr[newIndex]] = [arr[newIndex], arr[oldIndex]]
    oldIndex--
  }
}

// const arr = [1, 2, 3, 4]

// shuffle(arr)

// console.log(arr)
// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const randIdx = Math.floor(Math.random() * (i+1));
//     const storedItem = arr[i];
//     arr[i] = arr[randIdx];
//     arr[randIdx] = storedItem;
//   }

//   return arr;
// }
