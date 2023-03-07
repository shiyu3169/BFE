type ProduceFunc = <T>(base: T, receipe: (draft: T) => any) => void

const produce: ProduceFunc = (base, recipe) => {
  if (typeof base !== 'object' || !base) return recipe(base)
  let produced = JSON.parse(JSON.stringify(base))
  recipe(produced)
  if (compare(base, produced)) {
    produced = base
  }
  return produced
}

function compare(base: any, produced: any): boolean {
  if (typeof base !== typeof produced) return false
  if (typeof base !== 'object') return base === produced
  let equal = true

  for (const key in produced) {
    if (key in base) {
      if (compare(base[key], produced[key])) {
        produced[key] = base[key]
      } else {
        equal = false
      }
    } else {
      return false
    }
  }
  for (const key in base) {
    if (!(key in produced)) {
      return false
    }
  }
  return equal
}
