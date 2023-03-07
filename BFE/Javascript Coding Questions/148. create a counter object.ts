function createCounter(): { count: number } {
  let count = 0
  return {
    get count() {
      return count++
    },
  }
}
