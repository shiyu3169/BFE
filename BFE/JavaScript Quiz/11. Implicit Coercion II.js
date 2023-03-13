// This is a JavaScript Quiz from BFE.dev

console.log([] + []) // ""
console.log([] + 1) // "1"
console.log([[]] + 1) // "1"
console.log([[1]] + 1) // "11"
console.log([[[[2]]]] + 1) // "21"
console.log([] - 1) // -1
console.log([[]] - 1) // -1
console.log([[1]] - 1) // 0
console.log([[[[2]]]] - 1) // 1
console.log([] + {}) // "[object Object]"
console.log({} + {}) // "[object Object][object Object]"
console.log({} - {}) // NaN
