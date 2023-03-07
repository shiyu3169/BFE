// This is a JavaScript coding problem from BFE.dev

function moveZeros(list: Array<any>): void {
  let curIndex = 0
  let nextIndex = 1
  while (nextIndex < list.length) {
    if (list[curIndex] === 0 && list[nextIndex] === 0) {
      nextIndex += 1
      continue
    }
    if (list[curIndex] === 0) {
      ;[list[curIndex], list[nextIndex]] = [list[nextIndex], list[curIndex]]
      continue
    }
    curIndex += 1
    nextIndex += 1
  }
}
