/**
 * @param {Promise<any>} promise
 * @param {() => void} onFinally
 * @returns {Promise<any>}
 */
function myFinally(promise, onFinally) {
  return promise.then(
    (value) => Promise.resolve(onFinally()).then(() => value),
    (reason) => Promise.resolve(onFinally()).then(() => Promise.reject(reason)),
  )
}
