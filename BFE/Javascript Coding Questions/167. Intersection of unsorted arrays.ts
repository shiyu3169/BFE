function getIntersection(arr1: any[], arr2: any[]): any[] {
  const result = new Set()
  const arr2Set = new Set(arr2)
  for (const item of arr1) {
    if (arr2Set.has(item)) {
      result.add(item)
    }
  }
  return Array.from(result)
}
