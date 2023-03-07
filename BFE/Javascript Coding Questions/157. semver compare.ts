function compare(v1: string, v2: string): 0 | 1 | -1 {
  const v1Arr = v1.split('.')
  const v2Arr = v2.split('.')
  for (let i = 0; i < v1.length; i++) {
    const num1 = Number(v1Arr[i])
    const num2 = Number(v2Arr[i])
    if (num1 > num2) {
      return 1
    }
    if (num2 > num1) {
      return -1
    }
  }
  return 0
}
