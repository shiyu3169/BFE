/* The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

from MDN
Different from Promise.all() which rejects right away once an error occurs, Promise.allSettled() waits for all promises to settle.

Now can you implement your own allSettled() ?

note

Do not use Promise.allSettled() directly, it helps nothing. */

/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  // your code here
  return new Promise((resolve) => {
    if (!promises.length) {
      resolve([])
      return
    }
    const result = []
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = { status: 'fulfilled', value }
        })
        .catch((reason) => {
          result[index] = { status: 'rejected', reason }
        })
        .finally(() => {
          if (result.length === promises.length) {
            resolve(result)
          }
        })
    })
  })
}
