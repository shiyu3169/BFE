function removeChars(input: string): string {
  let aCount = 0
  let cCount = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'b') {
      continue
    }
    if (input[i] === 'a') {
      aCount += 1
      continue
    }
    if (input[i] === 'c' && aCount > 0) {
      aCount -= 1
      continue
    }
    cCount += 1
  }
  return 'c'.repeat(cCount) + 'a'.repeat(aCount)
}
