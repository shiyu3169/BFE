/*
 * @lc app=leetcode id=1220 lang=typescript
 *
 * [1220] Count Vowels Permutation
 */

// @lc code=start
function countVowelPermutation(n: number): number {
  const MOD = BigInt(10 ** 9 + 7)
  const dp = [[], [1, 1, 1, 1, 1]]
  const [a, e, i, o, u] = [0, 1, 2, 3, 4]
  for (let j = 2; j <= n; j++) {
    dp.push([0, 0, 0, 0, 0])
    dp[j][a] = Number(BigInt(dp[j - 1][e] + dp[j - 1][i] + dp[j - 1][u]) % MOD)
    dp[j][e] = Number(BigInt(dp[j - 1][a] + dp[j - 1][i]) % MOD)
    dp[j][i] = Number(BigInt(dp[j - 1][e] + dp[j - 1][o]) % MOD)
    dp[j][o] = dp[j - 1][i]
    dp[j][u] = Number(BigInt(dp[j - 1][i] + dp[j - 1][o]) % MOD)
  }
  return Number(BigInt(dp[n].reduce((acc, cur) => acc + cur, 0)) % MOD)
}
// @lc code=end
/* Accepted
43/43 cases passed (169 ms)
Your runtime beats 76.92 % of typescript submissions
Your memory usage beats 53.85 % of typescript submissions (50.6 MB) */
