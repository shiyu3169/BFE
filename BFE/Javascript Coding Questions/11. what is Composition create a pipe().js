/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return function (arg) {
    // let result = arg
    // for(const func of funcs) {
    // 	result = func.call(this, result)
    // }
    // return result
    return funcs.reduce((acc, func) => {
      return func.call(this, acc)
    }, arg)
  }
}
