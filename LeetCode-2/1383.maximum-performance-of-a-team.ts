/*
 * @lc app=leetcode id=1383 lang=typescript
 *
 * [1383] Maximum Performance of a Team
 */

// @lc code=start
/* function maxPerformance(
  n: number,
  speed: number[],
  efficiency: number[],
  k: number,
): number {
  const performance = speed.map((value, index) => ({
    s: value,
    e: efficiency[index],
  }))
  const maxPriorityQueue = new MaxPriorityQueue({
    priority: (a) => a.s * a.e,
  })
  performance.forEach((per) => maxPriorityQueue.enqueue(per))
  let s = 0
  let e = Infinity
  while (k > 0) {
    const worker = maxPriorityQueue.dequeue().element
    s += worker.s
    e = Math.min(e, worker.e)
    k--
  }
  return s * e
} */

function maxPerformance(
  n: number,
  speed: number[],
  efficiency: number[],
  k: number,
): number {
  const MOD = BigInt(10 ** 9 + 7)
  const performance = speed.map((value, index) => ({
    s: value,
    e: efficiency[index],
  }))
  performance.sort((a, b) => b.e - a.e)

  let s = 0
  let result = BigInt(0)
  const minPriorityQueue = new MinPriorityQueue()
  console.log(performance)
  for (const worker of performance) {
    if (minPriorityQueue.size() === k) {
      s -= minPriorityQueue.dequeue().element
    }
    s += worker.s
    minPriorityQueue.enqueue(worker.s)
    const curRes = BigInt(s) * BigInt(worker.e)
    if (curRes > result) {
      result = curRes
    }
  }
  return Number(result % MOD)
}
// @lc code=end
/* Accepted
55/55 cases passed (322 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 100 % of typescript submissions (68.8 MB) */
