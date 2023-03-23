/* This is a follow-up on 21. implement JSON.stringify().

Believe you are already familiar with JSON.parse(), could you implement your own version?

In case you are not sure about the spec, MDN here might help.

JSON.parse() support a second parameter reviver, you can ignore that.

note

Don't use JSON.parse() in your code here It doesn't help you practicing your skills. */

/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
function parse(str) {
  if (str === '') {
    throw Error()
  }
  if (str[0] === "'") {
    throw Error()
  }
  if (str === 'null') {
    return null
  }
  if (str === '{}') {
    return {}
  }
  if (str === '[]') {
    return []
  }
  if (str === 'true') {
    return true
  }
  if (str === 'false') {
    return false
  }
  if (str[0] === '"') {
    return str.slice(1, -1)
  }
  if (+str === +str) {
    return Number(str)
  }
  if (str[0] === '{') {
    return str
      .slice(1, -1)
      .split(',')
      .reduce((acc, item) => {
        const index = item.indexOf(':')
        const key = item.slice(0, index)
        const value = item.slice(index + 1)
        acc[parse(key)] = parse(value)
        return acc
      }, {})
  }
  if (str[0] === '[') {
    return str
      .slice(1, -1)
      .split(',')
      .map((value) => parse(value))
  }
}
