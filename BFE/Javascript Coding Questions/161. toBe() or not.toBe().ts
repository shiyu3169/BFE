interface Matcher {
  toBe(data: any): void
}

function myExpect(input: any): Matcher & { not: Matcher } {
  let isReversed = false
  return {
    toBe(data: any) {
      if (
        (!isReversed && !Object.is(data, input)) ||
        (isReversed && Object.is(data, input))
      )
        throw new Error('not match')
    },
    get not() {
      isReversed = !isReversed
      return this
    },
  }
}
