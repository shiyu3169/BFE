function count(str: string): string | string[] {
  // we keep result as two objects
  // one is occurance of each character
  // second one is the result

  // we iterate the input string
  // we keep update occurance object, and every time we updated it
  // we check with the max object to see if we need to update the result
  // if the new updated char has less occurance than the first element in result, re skip
  // if it is the same, we add it
  // if it is more, we remove others

  const occurance = new Map<string, number>()
  const result = new Map<string, number>()

  for (const char of str) {
    const updatedOccurance = occurance.has(char)
      ? (occurance.get(char) as number) + 1
      : 1
    occurance.set(char, updatedOccurance)
    if (!result.size) {
      result.set(char, updatedOccurance)
      continue
    }
    const firstResult = result.values().next().value
    if (result.has(char) || firstResult < updatedOccurance) {
      result.clear()
      result.set(char, updatedOccurance)
      continue
    }
    if (firstResult === updatedOccurance) {
      result.set(char, updatedOccurance)
    }
  }
  const keys = Array.from(result.keys())
  return keys.length <= 1 ? keys.join('') : keys
}
