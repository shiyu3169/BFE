// copied from lib.es5.d.ts
declare interface Array<T> {
  myMap<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any,
  ): U[]
}

Array.prototype.myMap = function (callbackFn, thisObj) {
  const result: any[] = []
  this.forEach((...args) => {
    const index = args[1]
    result[index] = callbackFn.call(thisObj, ...args)
  })
  return result
}
