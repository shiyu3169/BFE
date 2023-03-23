// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  //****************** iteration ********************/
  //   // your imeplementation here
  //   let flattenArr = arr
  //   let currentDepth = depth
  //   let allFlatten = arr.every(ele => !Array.isArray(ele))
  //   while(currentDepth > 0 && !allFlatten) {
  //     const startArr = flattenArr
  //     flattenArr = []
  //     for(let i=0; i<startArr.length;i++) {
  //       if(Array.isArray(startArr[i])) {
  //         flattenArr.push(...startArr[i])
  //       }  else {
  //         flattenArr.push(startArr[i])
  //       }
  //     }
  //     currentDepth--
  //     allFlatten = flattenArr.every(ele => !Array.isArray(ele))
  //   }
  //   return flattenArr

  //****************** recursive ********************/
  // const flattenArr = []
  // arr.forEach(ele => {
  //   if(Array.isArray(ele) && depth > 0) {
  //     flattenArr.push(...flat(ele, depth -1))
  //   } else {
  //     flattenArr.push(ele)
  //   }
  // })
  // return flattenArr

  //****************** reduce ********************/
  // return arr.reduce((result, ele) => {
  //   if(Array.isArray(ele) && depth > 0) {
  //     result.push(...flat(ele, depth -1))
  //   } else {
  //     result.push(ele)
  //   }
  //   return result
  // },[])

  //****************** iteration with stack ********************/
  const result = []
  const stack = [...arr.map((item) => [item, depth])] // attach depth on each item
  while (stack.length > 0) {
    const [head, depth] = stack.pop()
    if (Array.isArray(head) && depth > 0) {
      stack.push(...head.map((item) => [item, depth - 1])) // flat and update depth
    } else {
      result.push(head)
    }
  }
  return result.reverse() //using pop instead of shift for better performance since the index is not moving
}

// const arr = [1, [2], [3, [4]]];

// console.log(flat([1,2,[3,4,[5,6,[7,8,[9,10]]]]], Infinity))
