/*
 * @lc app=leetcode id=1220 lang=typescript
 *
 * [1220] Count Vowels Permutation
 */

// @lc code=start
function countVowelPermutation(n: number): number {
  const MOD = BigInt(10 ** 9 + 7)
  const dp = [[1, 1, 1, 1, 1]]
  const [a, e, i, o, u] = [0, 1, 2, 3, 4]
  for (let j = 2; j <= n; j++) {
    dp.push([0, 0, 0, 0, 0])
    dp[1][a] = Number(BigInt(dp[0][e] + dp[0][i] + dp[0][u]) % MOD)
    dp[1][e] = Number(BigInt(dp[0][a] + dp[0][i]) % MOD)
    dp[1][i] = Number(BigInt(dp[0][e] + dp[0][o]) % MOD)
    dp[1][o] = dp[0][i]
    dp[1][u] = Number(BigInt(dp[0][i] + dp[0][o]) % MOD)
    dp.shift()
  }
  return Number(BigInt(dp.pop()!.reduce((acc, cur) => acc + cur, 0)) % MOD)
}
// @lc code=end
/* 
Accepted
43/43 cases passed (144 ms)
Your runtime beats 76.92 % of typescript submissions
Your memory usage beats 69.23 % of typescript submissions (49.1 MB)
*/
