function integerToRoman(num: number): string {
  const romanTable = [
    { symbol: 'M', value: 1000 },
    { symbol: 'CM', value: 900 },
    { symbol: 'D', value: 500 },
    { symbol: 'CD', value: 400 },
    { symbol: 'C', value: 100 },
    { symbol: 'XC', value: 90 },
    { symbol: 'L', value: 50 },
    { symbol: 'XL', value: 40 },
    { symbol: 'X', value: 10 },
    { symbol: 'IX', value: 9 },
    { symbol: 'V', value: 5 },
    { symbol: 'IV', value: 4 },
    { symbol: 'I', value: 1 },
  ]
  let result = ''
  let i = 0
  while (num > 0 && i < romanTable.length) {
    const count = Math.floor(num / romanTable[i].value)
    result += romanTable[i].symbol.repeat(count)
    num = num % romanTable[i].value
    i++
  }
  return result
}
