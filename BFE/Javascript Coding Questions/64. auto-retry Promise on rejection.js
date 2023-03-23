/* For a web application, fetching API data is a common task.

But the API calls might fail because of Network problems. Usually we could show a screen for Network Error and ask users to retry.

One approach to handle this is auto retry when network error occurs.

You are asked to create a fetchWithAutoRetry(fetcher, count), which automatically fetch again when error happens, until the maximum count is met.

For the problem here, there is no need to detect network error, you can just retry on all promise rejections.

prev */

/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
// function fetchWithAutoRetry(fetcher, maximumRetryCount) {
//   return new Promise(async(resolve, reject )=> {
//     try {
//       const data = await fetcher()
//       resolve(data)
//     } catch(e) {
//       if(maximumRetryCount === 0) {
//         reject(e)
//       } else {
//         resolve(fetchWithAutoRetry(fetcher, maximumRetryCount - 1))
//       }
//     }
//   })
// }

// function fetchWithAutoRetry(fetcher, maximumRetryCount) {
//   return new Promise((resolve, reject) => {
//     fetcher().then(data => {
//       resolve(data)
//     }).catch(e => {
//       maximumRetryCount ? resolve(fetchWithAutoRetry(fetcher, maximumRetryCount -1)) : reject(e)
//     })
//   })
// }

function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return fetcher().catch((e) => {
    if (maximumRetryCount) {
      return fetchWithAutoRetry(fetcher, maximumRetryCount - 1)
    } else {
      throw e
    }
  })
}
