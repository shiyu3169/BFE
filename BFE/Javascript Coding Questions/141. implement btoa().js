/**
 * @param {string} str - binary string
 * @returns {string}
 */
function myBtoa(str) {
  let result = ''

  const base64Table =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  while (str.length) {
    const buffer = []
    const first3 = str.slice(0, 3)
    str = str.slice(3)

    let bits = ''
    for (const char of first3) {
      bits += char.charCodeAt(0).toString(2).padStart(8, '0')
    }

    while (bits.length) {
      const first6 = bits.slice(0, 6).padEnd(6, '0')
      bits = bits.slice(6)
      const char = base64Table[parseInt(first6, 2)]
      buffer.push(char)
    }

    if (buffer.length < 4) {
      buffer.push('='.repeat(4 - buffer.length))
    }
    result += buffer.join('')
  }
  return result
}
