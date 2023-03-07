/**
 * @param {string} str
 * @return {string}
 */
function smallestUniqueSubstr(str) {
  const stack = []
  const visited = new Set()
  const lastIndex = new Map()

  // mark the char last index in input
  for (let i = 0; i < str.length; i++) {
    lastIndex[str[i]] = i
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    // skip if it's visited
    if (visited.has(char)) continue

    // keep removing last char if it's bigger than the current one and will be seen later again
    while (
      stack[stack.length - 1] > char &&
      lastIndex[stack[stack.length - 1]] > i
    ) {
      visited.delete(stack.pop())
    }
    // mark current char as visted
    visited.add(char)
    // add it to result
    stack.push(char)
  }
  return stack.join('')
}

// "acbc"
// [], a => [a]
// [a], c => [a,c]
// [a,c], b => [a,b]
// [a,b], c => [a,b,c]

// "abacb"
// [], a => [a]
// [a], b => [a,b]
// [a,b], a => [a,b]
// [a,b], c => [a,b,c]
// [a,b,c] b => [a,b,c]
