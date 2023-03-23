/* This problem is similar to 11. what is Composition? create a pipe().

You are asked to implement an async function helper, sequence() which chains up async functions, like what pipe() does.

All async functions have following interface

type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void
Your sequence() should accept AsyncFunc array, and chain them up by passing new data to the next AsyncFunc through data in Callback.

Suppose we have an async func which just multiple a number by 2

const asyncTimes2 = (callback, num) => {
   setTimeout(() => callback(null, num * 2), 100)
}
Your sequence() should be able to accomplish this

const asyncTimes4 = sequence(
  [
    asyncTimes2,
    asyncTimes2
  ]
)

asyncTimes4((error, data) => {
   console.log(data) // 4
}, 1)
Once an error occurs, it should trigger the last callback without triggering the uncalled functions.

Follow up

Can you solve it with and without Promise? */

/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
  const promiseFuncs = funcs.map(promisify)

  return function (callback, input) {
    // init promise
    let promise = Promise.resolve(input)

    // add all promiseFuncs to promise
    promiseFuncs.forEach((promiseFunc) => {
      promise = promise.then(promiseFunc)
    })

    // handle resolved or rejected promise
    promise
      .then((data) => {
        callback(undefined, data)
      })
      .catch(callback)
  }
}

function promisify(callback) {
  return (input) =>
    new Promise((resolve, reject) => {
      callback((err, data) => {
        if (err) {
          return reject(err)
        }
        resolve(data)
      }, input)
    })
}
