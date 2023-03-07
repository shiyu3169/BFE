/**
 * @param {number} n - non-negative integer
 * @return {number}
 */
/* 
Approach 1 - Recursion

The time complexity of the given function can be expressed using Big O notation as O(2^n), 
where n is the input value passed to the function.

This is because for each recursive call to the function, two additional recursive calls are made, 
except for the base case where n < 2, which terminates the recursion.
As a result, the number of function calls grows exponentially with n, leading to an overall time complexity of O(2^n).

Time: O(2^n)
Space: O(n)
*/
function fib(n) {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

/* Approach 2 - Memoized Recursion
The time complexity of the given function is O(n), where n is the input value passed to the function.

This is because the function uses memoization to store and reuse previously calculated values, so that each value is calculated only once. 
Each recursive call checks if the value for the given argument has already been computed and stored in the cache, 
and if so, it returns the cached value without any additional computation. 

If the value is not in the cache, the function computes it using the previous two values in the sequence and stores it in the cache for future use.

Since each value is computed only once and subsequently reused from the cache, 
the number of function calls is reduced to O(n), resulting in a linear time complexity.
Therefore, the performance of the function is significantly improved over the previous implementation, 
making it more efficient and practical for larger input values.

Time: O(n)
Space: O(n) */

function fib(n) {
  const cache = {}
  function memo(n) {
    if (n < 2) return n
    cache[n] ??= memo(n - 1) + memo(n - 2)
    return cache[n]
  }
  return memo(n)
}

/* Approach 3 - Tabulation
The time complexity of the given function is O(n), where n is the input value passed to the function.

The function uses a loop to calculate the Fibonacci sequence up to the given input value. 
It initializes an array res with the first three values of the sequence, then iterates over the remaining values, 
adding each value to the array by summing the two previous values in the sequence.

Since the loop runs for n-2 iterations (i.e., until i reaches n), 
and each iteration takes constant time to compute and append a value to the res array, the overall time complexity of the function is O(n).

Therefore, this implementation is much more efficient than the first implementation that used recursive calls, 
and it is also more memory-efficient than the second implementation that used memoization.

Time: O(n)
Space: O(n)
 */
function fib(n) {
  const res = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    res.push(res[i - 1] + res[i - 2])
  }
  return res[n]
}

/* Approach 4 - Dynamic Tabulation

The time complexity of the given function is O(n), where n is the input value passed to the function.

The function uses a loop to calculate the Fibonacci number at the given input value. 
It initializes an array res with the first two values of the sequence, then iterates over the remaining values, 
updating the array by swapping the values of the two previous elements and adding them together.

Since the loop runs for n-2 iterations (i.e., until i reaches n-1), and each iteration takes constant time to update the res array, 
the overall time complexity of the function is O(n).

Therefore, this implementation is also very efficient and performs well for larger input values of n. 
It is similar to the previous implementation in terms of time complexity, 
but it uses less memory since it only stores the last two values of the sequence.

Time: O(n)
Space: O(1) */
function fib(n) {
  if (n < 2) return n
  const res = [1, 1]
  for (let i = 2; i < n; i++) {
    ;[res[0], res[1]] = [res[1], res[0] + res[1]]
  }
  return res[1]
}

/* Approach 5 - Math (god tier)

The time complexity of the given function is O(1),
 which means that the time required to calculate the result is constant and does not depend on the input value n.

The function calculates the nth Fibonacci number using the closed-form expression known as Binet's formula, 
which directly computes the value of the nth number in constant time using mathematical calculations involving the golden ratio and its inverse.

Since the function only involves mathematical calculations and does not require any iterative or recursive operations, 
its time complexity is O(1).

Therefore, this implementation is the most efficient of all the implementations discussed so far, 
and it performs very well even for very large input values of n. 
However, it is important to note that the formula may not be accurate for very large values of n due to rounding errors in 
floating-point arithmetic.

Time: O(1)
Space: O(1) */
function fib(n) {
  const A = (1 + Math.sqrt(5)) / 2
  const B = (1 - Math.sqrt(5)) / 2
  const fib = (Math.pow(A, n) - Math.pow(B, n)) / Math.sqrt(5)
  return Math.floor(fib)
}

/* Binet's formula is a closed-form expression that calculates the nth Fibonacci number without the need for iterative or recursive operations. 
It is named after French mathematician Jacques Philippe Marie Binet, who discovered the formula in 1843.

The formula uses the golden ratio, which is a special number represented by the Greek letter phi (φ), and its inverse, 
which is represented by the Greek letter psi (ψ). The golden ratio is approximately equal to 1.6180339887, 
while its inverse is approximately equal to -0.6180339887.

The formula can be written as:

F(n) = (phi^n - psi^n) / sqrt(5)
where F(n) is the nth Fibonacci number.

The formula involves raising the golden ratio and its inverse to the power of n, subtracting the two values, 
and dividing the result by the square root of 5. The result is a real number that represents the nth Fibonacci number.

For example, to calculate the 7th Fibonacci number using Binet's formula, we can substitute n=7 into the formula:

F(7) = (phi^7 - psi^7) / sqrt(5)
     = (1.6180339887^7 - (-0.6180339887)^7) / sqrt(5)
     = 13.000000000001818
Note that the result is a real number with a fractional part, which needs to be rounded to the nearest integer to 
obtain the actual Fibonacci number. In this case, the nearest integer is 13, which is the 7th Fibonacci number. */
