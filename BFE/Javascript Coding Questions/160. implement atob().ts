function myAtob(encoded: string): string {
  if (encoded === '') return ''

  const base64Table =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  const indexMap = new Map()

  for (let i = 0; i < base64Table.length; i++) {
    indexMap.set(base64Table[i], i)
  }

  let buffer = ''
  let isEqualMet = false
  for (const char of encoded) {
    if (char === '=') {
      isEqualMet = true
      continue
    }
    if (isEqualMet) {
      throw new Error('invalid')
    }

    const index = indexMap.get(char)
    if (index === null) throw new Error('invalid character')
    const binary = index.toString(2).padStart(6, '0')
    buffer += binary
  }
  const chunkLength = 8
  if (buffer.length < chunkLength) {
    throw new Error('invalid buffer')
  }

  let result = ''
  let start = 0
  while (start < buffer.length) {
    const chunk = buffer.slice(start, start + chunkLength)
    const num = parseInt(chunk, 2)
    if (chunk.length === chunkLength) {
      const char = String.fromCharCode(num)
      result += char
    } else {
      if (num !== 0) {
        throw new Error('invalid input')
      }
    }
    start += chunkLength
  }
  return result
}
