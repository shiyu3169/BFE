/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  // if(rootA === target) {
  //   return rootB
  // }
  // for(const i in rootA.children) {
  //   const res = findCorrespondingNode(rootA.children[i], rootB.children[i], target)
  //   if(res) {
  //     return res
  //   }
  // }

  // const stack = [[rootA, rootB]]
  // while(stack.length > 0) {
  //   const [leftNode, rightNode] = stack.pop()
  //   if(leftNode === target) return rightNode

  //   for(const i in leftNode.children) {
  //     stack.push([leftNode.children[i], rightNode.children[i]])
  //   }
  // }

  // if (rootA === target) {
  //   return rootB;
  // }

  // const queueA = [rootA];
  // const queueB = [rootB];

  // while(queueA.length) {
  //   // removes the first element from an array and returns that removed element
  //   const currentElementA = queueA.pop();
  //   const currentElementB = queueB.pop();

  //   if (currentElementA === target) {
  //     return currentElementB;
  //   }
  //   // adds one or more elements to the end of an array and returns the new length of the array.
  //   queueA.push(...currentElementA.children);
  //   queueB.push(...currentElementB.children);
  // }
  // return null;

  //       // if 'target' is itself rootA then directly return rootA, this will make 'path' array empty, and it will return rootB in reduceRight
  //     if (rootA === target)
  //     return rootB;

  //     // we can track 'target' in rootB using indexes stored during tracing 'target' in rootA
  //     let path = getRootAPath(rootA, target);

  //     // reduceRight is same as reduce but it iterate values from right to left
  //     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
  //     return path.reduceRight((accumulator, currentValue, index) => {
  //         return accumulator.children[currentValue];
  //     }, rootB) // rootB pointing to initialValue from where start the processing, this will be the accumulator when we start
  // }

  // // get path from target to rootA in the form of index arr, index pointing to position of a node in its parent HTML collection
  // function getRootAPath(rootA, target) {
  //     let path = [];

  //     let node = target;

  //     while (node !== rootA && node.parentNode) { // we will iterate till we reach top of the DOM tree
  //         const children = Array.from(node.parentNode.children); // convert HTMLCollection into Array
  //         path.push(children.indexOf(node)); // push index where 'node' found
  //         node = node.parentNode; // this will make sure we move from down to top
  //     }
  //     return path;
  // }

  const rootAWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT)
  const rootBWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT)

  let currentNodes = [rootAWalker.currentNode, rootBWalker.currentNode]

  while (currentNodes[0] !== target) {
    currentNodes = [rootAWalker.nextNode(), rootBWalker.nextNode()]
  }

  return currentNodes[1]
}
