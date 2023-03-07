const MAX_CACHE_ENTRIES_ALLOWED = 5
const CACHE_TIME_LIMIT = 1000
/**
 * @param {(path: string, config: any) => Promise<any>} getAPI
 * @returns {(path: string, config: any) => Promise<any> & {clearCache: () => void}}
 */
function createGetAPIWithMerging(getAPI) {
  const cache = new Map()
  function getAPIWithMerging(path, config) {
    const key = generateKey({ path, config })
    const timestamp = new Date().getTime()

    if (cache.has(key)) {
      const entry = cache.get(key)
      if (timestamp - entry.timestamp <= CACHE_TIME_LIMIT) {
        return entry.promise
      }
    }

    const promise = getAPI(path, config)
    const entry = { config, promise, timestamp }
    if (cache.size >= MAX_CACHE_ENTRIES_ALLOWED) {
      cache.delete(cache.keys()[0]) // delete first entry
    }
    cache.set(key, entry)
    return promise
  }

  getAPIWithMerging.clearCache = cache.clear

  return getAPIWithMerging
}

function generateKey(obj) {
  switch (Object.prototype.toString.call(obj)) {
    case '[object Object]':
    case '[object Array]':
      const keys = Object.keys(obj)
      keys.sort()
      return keys.reduce((acc, cur) => {
        return acc + `${cur}:${generateKey(obj[cur])}`
      }, '')
    default:
      return obj
  }
}
