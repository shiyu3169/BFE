/* 
If you did unit test before, you must be familiar with Spy.

You are asked to create a spyOn(object, methodName), which works the same as jest.spyOn().

To make it simple, here are the 2 requirements of spyOn

original method should be called when spied one is called
spy should have a calls array, which holds all the arguments in each call.
Code to explain everything.

const obj = {
   data: 1, 
   increment(num) {
      this.data += num
   }
}

const spy = spyOn(obj, 'increment')

obj.increment(1)

console.log(obj.data) // 2

obj.increment(2)

console.log(obj.data) // 4

console.log(spy.calls)
// [ [1], [2] ] 
*/

/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  // your code here
  const calls = []

  const originalMethod = obj[methodName]

  if (typeof originalMethod !== 'function') {
    throw new Error('')
  }

  obj[methodName] = (...args) => {
    calls.push([...args])
    originalMethod.call(obj, ...args)
  }
  return { calls }
}
