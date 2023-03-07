/**
 * @param {any[]} args
 * @returns {string}
 */
function classNames(...args) {
  return args
    .flat(Infinity)
    .reduce((acc, cur) => {
      if (['number', 'string'].includes(typeof cur)) {
        acc.push(cur)
      } else if (cur && typeof cur === 'object') {
        Object.entries(cur).forEach(([key, value]) => {
          if (value) {
            acc.push(key)
          }
        })
      }
      return acc
    }, [])
    .join(' ')
}
