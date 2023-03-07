/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if (typeof proto !== 'object' || proto === null)
    throw new Error('Invalid input')
  const obj = {}
  Object.setPrototypeOf(obj, proto)
  return obj
}
