/*
 * @lc app=leetcode id=130 lang=typescript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  let blocked = new Set<string>()
  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board[0].length - 1; j++) {
      const visited = new Set<string>()
      if (blocked.has(`${i}_${j}`)) continue

      if (board[i][j] === 'O') {
        if (isSurrounded(board, i, j, visited)) {
          board[i][j] = 'X'
          for (const indexes of visited.values()) {
            const indexesArr = indexes.split('_')
            const indexI = Number(indexesArr[0])
            const indexJ = Number(indexesArr[1])
            board[indexI][indexJ] = 'X'
          }
        } else {
          visited.forEach((value) => blocked.add(value))
        }
      }
    }
  }
}
function isSurrounded(
  board: string[][],
  i: number,
  j: number,
  visited = new Set<string>(),
): boolean {
  if (visited.has(`${i}_${j}`)) return true
  if (i <= 0 || i + 1 >= board.length || j - 1 < 0 || j + 1 >= board[i].length)
    return false
  visited.add(`${i}_${j}`)
  return (
    (board[i - 1][j] === 'X' || isSurrounded(board, i - 1, j, visited)) &&
    (board[i + 1][j] === 'X' || isSurrounded(board, i + 1, j, visited)) &&
    (board[i][j - 1] === 'X' || isSurrounded(board, i, j - 1, visited)) &&
    (board[i][j + 1] === 'X' || isSurrounded(board, i, j + 1, visited))
  )
}
/* Accepted
58/58 cases passed (145 ms)
Your runtime beats 16.33 % of typescript submissions
Your memory usage beats 8.16 % of typescript submissions (59.9 MB) */
