/* Given a string containing only following characters:

parentheses : ( or )
brackets: [ or ]
braces: { or }
write a function to determine if they are valid.

By 'valid', it means all should be rightly paired, and with the valid order.


validate('{}[]()') 
// true

validate('{[()]}') 
// true

validate('{[}]') 
// false, they are not in the right order

validate('{}}') 
// false, last `}` is not paired with `{`
Follow-up

What is time & space complexity of your approach ? Can you do it better? */

/**
 * @param {string} str
 * @return {boolean}
 */
function validate(str) {
  if (str.length % 2 !== 0) return false
  let expect = []
  const pair = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  for (let i = 0; i < str.length; i++) {
    const cur = str[i]
    if (pair[cur]) {
      expect.push(pair[cur])
    } else if (expect.pop() !== cur) {
      return false
    }
  }
  return expect.length === 0
}
