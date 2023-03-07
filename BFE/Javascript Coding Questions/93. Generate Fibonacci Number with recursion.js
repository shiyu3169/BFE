/* https://bigfrontend.dev/problem/Generate-Fibonacci-Number-with-recursion */

/* Approach 1 
Time Complexity O(n) 
Space Complexity O(n)
*/
function fib(n, cache = {}) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (cache[n]) return cache[n]
  cache[n] = fib(n - 1, cache) + fib(n - 2, cache)
  return cache[n]
}

/* Approach 2 
Time Complexity O(n) 
Space Complexity O(1)
*/
function fib(n, result1 = 0, result2 = 1) {
  if (n === 0) return 0
  if (n === 1) return result2
  return fib(n - 1, result2, result1 + result2)
}
