/* This problem is similar to 31. implement async helper - race(), but with Promise.

The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise. source: MDN

Can you create a race() which works the same as Promise.race()? */

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  // your code here
  return new Promise((resolve, reject) => {
    if (!promises.length) resolve('')
    promises.forEach((promise) => {
      promise
        .then((value) => {
          resolve(value)
        })
        .catch((err) => {
          reject(err)
        })
    })
  })
}
