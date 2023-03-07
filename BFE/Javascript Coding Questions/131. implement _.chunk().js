/**
 * @param {any[]} items
 * @param {number} size
 * @returns {any[][]}
 */
function chunk(items, size) {
  if (size < 1 || !items.length) return []
  const result = []
  let chunk = []
  for (let i = 0; i <= items.length; i++) {
    if (i === items.length) {
      result.push(chunk)
      return result
    }
    const item = items[i]
    if (chunk.length < size) {
      chunk.push(item)
    } else {
      result.push(chunk)
      chunk = [item]
    }
  }
  return result
}

function chunk(items, size) {
  if (size < 1) return []
  const res = []
  for (let i = 0; i < items.length; i = i + size) {
    res.push(items.slice(i, i + size))
  }
  return res
}
