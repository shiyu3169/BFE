/* you can use this Queue which is bundled together with your code
class Queue {
  enqueue(element) {
    // add new element to the queue
  }
  peek() { 
    // return the head element
  }
  dequeue() { 
    // remove head element from the queue
  }
  size() { 
    // return the queue size
  }
}
*/

// you need to complete the following Stack, using only Queue
class Stack {
  constructor() {
    this.queue = new Queue()
  }
  push(element) {
    this.queue.enqueue(element)
  }
  peek() {
    let size = this.queue.size()
    while (size > 1) {
      this.queue.enqueue(this.queue.dequeue())
      size -= 1
    }
    const result = this.queue.dequeue()
    this.queue.enqueue(result)
    return result
  }
  pop() {
    let size = this.queue.size()
    while (size > 1) {
      this.queue.enqueue(this.queue.dequeue())
      size -= 1
    }
    return this.queue.dequeue()
  }
  size() {
    return this.queue.size()
  }
}
