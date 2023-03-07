function set<T extends object>(obj: T, path: string | string[], value: any) {
  // your code here
  if (typeof obj !== 'object' || !obj) throw new Error('invalid obj')
  if (!Array.isArray(path)) {
    path = path.replace(']', '').split(/\.|\[/)
  }
  let curObj: { [x: string]: any } = obj
  for (let i = 0; i < path.length; i++) {
    const key = path[i]
    if (i === path.length - 1) {
      curObj[key] = value
    } else {
      if (!curObj[key]) {
        const nextKey = path[i + 1]
        if (parseInt(nextKey).toString() === nextKey) {
          curObj[key] = []
        } else {
          curObj[key] = {}
        }
      }
      curObj = curObj[key]
    }
  }
}
