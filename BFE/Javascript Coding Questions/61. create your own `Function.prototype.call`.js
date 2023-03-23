/* Function.prototype.call is very useful when we want to alter the this of a function.

Can you implement your own myCall, which returns the same result as Function.prototype.call?

For the newest ECMAScript spec, thisArg are not transformed. And not replaced with window in Strict Mode.

Your implementation should follow above spec and do what non Strict Mode does.

Function.prototype.call/apply/bind and Reflect.apply should not be used.

prev
 */

Function.prototype.mycall = function (thisArg, ...args) {
  // your code here
  thisArg = thisArg || window // thisArg can be empty
  thisArg = Object(thisArg) // transform primitive value
  let func = Symbol() // create a unique property
  thisArg[func] = this // assign the function to a unique method created on the context
  let res = thisArg[func](...args) // call the method with passed args
  delete thisArg[func] // delete this unique method so as to not cause any sideeffects
  return res
}
