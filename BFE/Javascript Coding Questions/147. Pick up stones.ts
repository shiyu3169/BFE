// function canWinStonePicking(n: number): 'A' | 'B' | null {
//   const cache: Record<string, 'A' | 'B'> = {}

//   function whowin(
//     n: number,
//     player: 'A' | 'B',
//     opposition: 'A' | 'B',
//   ): 'A' | 'B' {
//     if (n === 1) return opposition
//     if (n === 2 || n === 3) return player
//     const key = `${n}_${player}_${opposition}`
//     if (key in cache) return cache[key]
//     if (
//       whowin(n - 1, opposition, player) === player ||
//       whowin(n - 2, opposition, player) === player
//     ) {
//       cache[key] = player
//     } else {
//       cache[key] = opposition
//     }
//     return cache[key]
//   }
//   return whowin(n, 'A', 'B')
// }

function canWinStonePicking(n) {
  return n % 3 === 1 ? 'B' : 'A'
}
