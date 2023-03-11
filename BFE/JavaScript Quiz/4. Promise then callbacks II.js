// This is a JavaScript Quiz from BFE.dev

Promise.resolve(1)
  .then((val) => {
    console.log(val) // 1
    return val + 1
  })
  .then((val) => {
    console.log(val) // 2
  })
  .then((val) => {
    console.log(val) // undefined
    return Promise.resolve(3).then((val) => {
      console.log(val) // 3
    })
  })
  .then((val) => {
    console.log(val) //undefined
    return Promise.reject(4)
  })
  .catch((val) => {
    console.log(val) // 4
  })
  .finally((val) => {
    console.log(val) // undefined
    return 10
  })
  .then((val) => {
    console.log(val) //undefined
  })
