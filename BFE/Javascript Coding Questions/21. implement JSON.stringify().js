/* I believe you've used JSON.stringify() before, do you know the details of how it handles arbitrary data?

Please have a guess on the details and then take a look at the explanation on MDN, it is actually pretty complex.

In this problem, you are asked to implement your own version of JSON.stringify().

In a real interview, you are not expected to cover all the cases, just decide the scope with interviewer. But for a goal of practicing, your code here will be tested against a lot of data types. Please try to cover as much as you can.

Attention to the circular reference.

note

JSON.stringify() support two more parameters which is not required here.

Don't use JSON.stringify() in your code here, it doesn't help you practicing coding skills. */

/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  if (typeof data === 'bigint') {
    throw new Error('Can not stringify bigint')
  }
  if (typeof data === 'function') return undefined
  if (
    (typeof data === 'number' && isNaN(data)) ||
    data === undefined ||
    data === Infinity ||
    data === null ||
    typeof data === 'symbol'
  )
    return 'null'
  if (typeof data === 'string') return `"${data}"`
  if (typeof data !== 'object') return data.toString()
  if (data instanceof Date) return `"${data.toISOString()}"`
  if (Array.isArray(data)) {
    let result = data.reduce((acc, cur) => `${acc},${stringify(cur)}`, '')
    return '[' + result.slice(1) + ']'
  }
  if (typeof data === 'object') {
    let result = Object.entries(data).reduce((acc, [key, value]) => {
      if (value === undefined) {
        return acc
      }
      return `${acc},"${key}":${stringify(value)}`
    }, '')
    return '{' + result.slice(1) + '}'
  }
  return undefined
}

/* 
Test

123  

'string'  

true  

Boolean(false)  

Number(1)  

String('12')  

[1, 'string', {a: 3}]  

[NaN, null, undefined, Infinity]  

new Date()  

non-number key of Array is not enumerable  

{a: undefined, b: null, c: NaN, d: Infinity}  

Symbol-keyed property  

Symbol in array  

function  

BigInt should lead to error  

non-enumerable properties should be ignored  

circular object should lead to error  

circular array should lead to error  

new Map() with enumerable keys  

property in prototype should be ignored  

emoji {a:'✌️'}   */
