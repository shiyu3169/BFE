// This is a JavaScript coding problem from BFE.dev

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  let decodedMessage = ''
  if (!message.length) return decodedMessage
  if (!message[0].length) return decodedMessage
  let row = 0
  let col = 0
  let directionY = 1
  const maxCol = message[0].length - 1
  const maxRow = message.length - 1
  while (col <= maxCol) {
    decodedMessage += message[row][col]
    col += 1
    row += directionY
    if (row > maxRow) {
      directionY = -1
      row -= 2
    }
    if (row < 0) {
      directionY = 1
      row += 2
    }
  }
  return decodedMessage
}
