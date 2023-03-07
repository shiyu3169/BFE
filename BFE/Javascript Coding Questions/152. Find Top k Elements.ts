function topK(arr: number[], k: number): number[] {
  // your code here
  const result: number[] = []
  const maxHeap = new MaxHeap()
  arr.forEach((n) => {
    maxHeap.enqueue(n)
  })
  while (k-- > 0 && maxHeap.size()) {
    result.push(maxHeap.dequeue())
  }
  return result
}

class MaxHeap {
  data: Array<number>
  constructor() {
    this.data = [0] //0 is a placeholder that will never used
  }
  size() {
    return this.data.length - 1
  }
  enqueue(n: number) {
    this.data.push(n)
    this.moveUp()
  }
  dequeue() {
    if (this.size() === 1) return this.data.pop() as number
    if (this.size() < 1) throw new Error('heap is empty')
    const result = this.data[1]
    this.data[1] = this.data.pop() as number // length
    this.heapify()
    return result
  }
  heapify() {
    let i = 1
    while (true) {
      let swapIndex
      const leftChild = i * 2
      const rightChild = i * 2 + 1
      if (leftChild <= this.size() && this.data[i] < this.data[leftChild]) {
        swapIndex = leftChild
      }
      if (
        rightChild <= this.size() &&
        this.data[rightChild] >
          (swapIndex ? this.data[swapIndex] : this.data[i])
      ) {
        swapIndex = rightChild
      }
      if (swapIndex) {
        this.#swap(swapIndex, i)
        i = swapIndex
      } else {
        break
      }
    }
  }
  moveUp() {
    let i = this.size()
    if (i < 2) return
    while (i > 1) {
      const parentIndex = Math.floor(i / 2)
      if (this.data[parentIndex] > this.data[i]) break
      this.#swap(i, parentIndex)
      i = parentIndex
    }
  }
  #swap(i: number, j: number) {
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}
