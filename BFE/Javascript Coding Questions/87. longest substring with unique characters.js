/* 
Approach 1

This is because the function uses a while loop to iterate over each character of the input string, 
and within the loop, it calls the indexOf method of the current substring 'current' to check if the current character has already been seen. 
The indexOf method has a time complexity of O(n), 
which means that it takes on average n/2 operations to search for a character in a string of length n. 
Since the length of the current substring 'current' increases by at most one character in each iteration of the loop, 
the total number of indexOf calls made by the function is roughly proportional to the sum of the first n integers, which is O(n^2).

Therefore, the overall time complexity of the function is O(n^2), due to the nested loop-like behavior of the indexOf calls in the while loop.
*/

// function longestUniqueSubstr(str) {
//   let result = ''
//   let current = ''
//   let i = 0
//   let start = 0
//   while (i < str.length) {
//     const index = current.indexOf(str[i])
//     if (index === -1) {
//       current += str[i]
//       i++
//     } else {
//       result = result.length > current.length ? result : current
//       start += index + 1
//       i = start
//       current = ''
//     }
//   }
//   return result
// }

/* 
Approach 2
The time complexity of the given function is O(n), where n is the length of the input string 'string'. 
This is because the function uses a single loop to iterate through each character of the input string, 
and it uses constant time operations such as object property access and comparison.

The function maintains an object 'lastSeen' to keep track of the last index at which each character was seen. 
It also maintains two pointers, 'startIdx' and 'longest', 
to keep track of the starting and ending indices of the current longest substring without repeating characters.

For each character in the input string, the function first checks if the character has been seen before 
and if the last occurrence of the character is within the current substring. 
If so, it updates the starting index to the next index after the last occurrence of the character.

Next, the function checks if the current substring is longer than the previous longest substring, 
and updates the 'longest' pointer accordingly.

Finally, the function updates the 'lastSeen' object to record the current index of the character.

Overall, the function performs a constant number of operations for each character in the input string, 
resulting in a time complexity of O(n).
*/
function longestUniqueSubstr(string) {
  const lastSeen = {}
  let longest = [0, 1]
  let startIdx = 0

  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (char in lastSeen && lastSeen[char] + 1 > startIdx) {
      startIdx = lastSeen[char] + 1
    }

    if (longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1]
    }

    lastSeen[char] = i
  }

  return string.slice(longest[0], longest[1])
}

console.log(longestUniqueSubstr('abaca'))
