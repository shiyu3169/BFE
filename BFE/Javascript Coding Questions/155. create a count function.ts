const count = (() => {
  let num = 0
  const func = () => ++num
  func.reset = () => (num = 0)
  return func
})()
