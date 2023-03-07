/* https://bigfrontend.dev/problem/throttle-Promises */
/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max) {
  return new Promise((resolve, reject) => {
    let concurrentCount = 0
    let curFuncIndex = -1
    let resultCount = 0
    const result = []

    const fetchNext = () => {
      const nextFuncIndex = curFuncIndex + 1
      if (nextFuncIndex === funcs.length) {
        return
      }

      const next = funcs[nextFuncIndex]

      concurrentCount += 1
      curFuncIndex += 1

      next().then(
        (data) => {
          result[nextFuncIndex] = data
          resultCount += 1
          concurrentCount -= 1

          if (funcs.length === resultCount) {
            resolve(result)
            return
          }
          fetchNext()
        },
        (err) => {
          reject(err)
          return
        },
      )

      if (concurrentCount < max) {
        fetchNext()
      }
    }

    fetchNext()
  })
}

/* The index and counters are tricky here. You need to keep track them because they are used in then */
