/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const excludesMap = new Map()
  for (const { k, v } of excludes) {
    if (!excludesMap.has(k)) {
      excludesMap.set(k, new Set())
    }
    excludesMap.get(k).add(v)
  }

  return items.filter((item) => {
    return Object.keys(item).every((key) => {
      return !excludesMap.has(key) || !excludesMap.get(key).has(item[key])
    })
  })
}
