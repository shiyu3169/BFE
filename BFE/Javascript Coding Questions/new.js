/* new operator is used to create new instance objects.

Do you know exactly what new does?

You are asked to implement myNew(), which should return an object just as what new does but without using new.

Pay attention to the return type of constructor. */

const myNew = (constructor, ...args) => {
  let obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  let result = constructor.call(obj, ...args)
  if (result && typeof result === 'object') return result
  return obj
}
