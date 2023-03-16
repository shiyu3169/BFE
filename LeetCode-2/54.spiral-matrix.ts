/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let currentDirection = '0,1' //Y, X
  const directionMap: { [x: string]: string } = {
    '0,1': '1,0',
    '1,0': '0,-1',
    '0,-1': '-1,0',
    '-1,0': '0,1',
  }
  const row = matrix.length
  const col = matrix[0].length
  const result: number[] = []
  let y = 0
  let x = 0
  const visited = new Set()
  visited.add(`${y},${x}`)
  result.push(matrix[y][x])
  while (result.length < row * col) {
    //go Next
    let currentDirectionArr = currentDirection.split(',')
    let nextY = y + Number(currentDirectionArr[0])
    let nextX = x + Number(currentDirectionArr[1])
    while (
      nextY >= row ||
      nextX >= col ||
      nextY < 0 ||
      nextX < 0 ||
      visited.has(`${nextY},${nextX}`)
    ) {
      currentDirection = directionMap[currentDirection]
      currentDirectionArr = currentDirection.split(',')
      nextY = y + Number(currentDirectionArr[0])
      nextX = x + Number(currentDirectionArr[1])
    }
    y = nextY
    x = nextX
    visited.add(`${nextY},${nextX}`)
    // console.log({ nextY, nextX, col })
    result.push(matrix[nextY][nextX])
  }
  return result
}
// @lc code=end
/* Accepted
23/23 cases passed (58 ms)
Your runtime beats 88.42 % of typescript submissions
Your memory usage beats 58.19 % of typescript submissions (43 MB) */
