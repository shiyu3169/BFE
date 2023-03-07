// /**
//  * @param {any} target
//  * @param {any[]} sources
//  * @return {object}
//  */
// function objectAssign(target, ...sources) {
//   if (target === null || target === undefined) throw new Error('invalid target')

//   let result = target
//   if (['number', 'string', 'boolean'].includes(typeof target)) {
//     result = Object(target)
//   }

//   for (const source of sources) {
//     if (source === null || source === undefined) continue
//     const keys = [
//       ...Object.keys(source),
//       ...Object.getOwnPropertySymbols(source)
//       .filter(item => Object.getOwnPropertyDescriptor(source, item).enumerable)
//     ]
//     for (const key of keys) {
//       if (!Reflect.set(result, key, source[key])) {
//         throw new Error('cannot assign to read-only properties')
//       }
//     }
//   }
//   return result
// }

/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new Error('Not an object')
  }

  if (typeof target !== `object`) {
    target = new target.__proto__.constructor(target)
  }

  for (const source of sources) {
    if (source === null || source === undefined) {
      continue
    }

    const availableObj = Object.fromEntries(
      Object.entries(Object.getOwnPropertyDescriptors(source)).filter(
        ([key, value]) => value.enumerable,
      ),
    )

    Object.defineProperties(target, availableObj)

    for (const symbol of Object.getOwnPropertySymbols(source)) {
      target[symbol] = source[symbol]
    }
  }
  return target
}
