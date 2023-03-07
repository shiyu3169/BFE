// copied from lib.es5.d.ts
declare interface Array<T> {
  myReduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[],
    ) => T,
  ): T
  myReduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[],
    ) => T,
    initialValue: T,
  ): T
  myReduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[],
    ) => U,
    initialValue: U,
  ): U
}

Array.prototype.myReduce = function (...args: any[]) {
  const hasInitialvalue = args.length > 1
  if (!hasInitialvalue && !this.length) {
    throw new Error()
  }
  let result = hasInitialvalue ? args[1] : this[0]
  for (let i = hasInitialvalue ? 0 : 1; i < this.length; i++) {
    result = args[0](result, this[i], i, this)
  }
  return result
}
