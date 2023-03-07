/* The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises

source - MDN

Could you write your own all() ? which should works the same as Promise.all()

note

Do not use Promise.all() directly, it is not helping */

/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  return new Promise((resolve, reject) => {
    const result = []
    if (!promises.length) {
      return resolve(result)
    }
    let countPending = promises.length
    promises.forEach((promise) => {
      Promise.resolve(promise).then((value) => {
        result.push(value)
        countPending--
        if (countPending === 0) {
          resolve(result)
          return
        }
      }, reject)
    })
  })
}
