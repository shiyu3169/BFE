const charTable = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let id = 0

function getUniqueClassName(): string {
  let className = ''
  let num = id++
  while (num >= 0) {
    className = charTable[num % charTable.length] + className
    num = Math.floor(num / charTable.length) - 1
  }
  return className
}

getUniqueClassName.reset = function () {
  id = 0
}
