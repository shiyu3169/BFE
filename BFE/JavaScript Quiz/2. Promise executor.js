/* What does the code snippet to the right output by console.log? */
new Promise((resolve, reject) => {
  resolve(1)
  resolve(2)
  reject('error')
}).then(
  (value) => {
    console.log(value)
  },
  (error) => {
    console.log('error')
  },
)

/* 1 */
