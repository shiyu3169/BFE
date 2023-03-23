const isObj = (data) => typeof data === 'object' && data !== null

/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  // push
  if ('$push' in command) {
    if (!Array.isArray(data)) {
      throw new Error('data is not array in $push')
    }
    return [...data, ...command['$push']]
  }
  // set
  if ('$set' in command) {
    return command['$set']
  }
  // merge
  if ('$merge' in command) {
    if (!isObj(data)) {
      throw new Error('data is not array in $merge')
    }
    return { ...data, ...command['$merge'] }
  }

  // apply
  if ('$apply' in command) {
    return command['$apply'](data)
  }

  if (!isObj(data)) {
    throw new Error('data is not array in $merge')
  }
  const newData = Array.isArray(data) ? [...data] : { ...data }
  for (const key of Object.keys(command)) {
    newData[key] = update(newData[key], command[key])
  }
  return newData
}
