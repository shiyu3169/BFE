/* I believe you've used extends keyword in you JavaScript programs before.

Could you implement a myExtends() function in ES5 to mimic the behavior of extends?

myExtends() takes a SubType and SuperType, and return a new type.


const InheritedSubType = myExtends(SuperType, SubType)

const instance = new InheritedSubType()

// above should work (almost) the same as follows

class SubType extends SuperType {}
const instance = new SubType()
To solve this problem, you need to fully understand what is Inheritance

note

Your code will be test against following SuperType and SubType


function SuperType(name) {
    this.name = name
    this.forSuper = [1, 2]
    this.from = 'super'
}
SuperType.prototype.superMethod = function() {}
SuperType.prototype.method = function() {}
SuperType.staticSuper = 'staticSuper'

function SubType(name) {
    this.name = name
    this.forSub = [3, 4]
    this.from = 'sub'
}

SubType.prototype.subMethod = function() {}
SubType.prototype.method = function() {}
SubType.staticSub = 'staticSub' */

/**
 * A function in javascript has 3 roles;
 * 1. Constructor to create instance
 * How to trigger?
 * When use new keyword (new MyFunc())
 *
 * 2. Pure function
 * How to trigger?
 * Call directly (MyFunc())
 *
 * 3. Object
 * How to trigger?
 * Use property on the Function (MyFunc.prop1)
 */

const myExtends = (SuperType, SubType) => {
  function ExtendType(...args) {
    /**
     * About this:
     * When call a function, there will be a this pointer in the function
     * If call with new, js will create a new object, and let 'this' point to that object
     * If call without new, this point to whoever called this function
     */

    // use SuperType and SubType constructor to init this.
    SuperType.call(this, ...args)
    SubType.call(this, ...args)

    // build the prototype chain connection, let current this's constructor's prototype point to SubType.prototype
    Object.setPrototypeOf(this, SubType.prototype)
  }

  // link SubType's prototype chain to SuperType's prototype
  Object.setPrototypeOf(SubType.prototype, SuperType.prototype)

  // link ExtendType's prototype chain to SubType's prototype
  Object.setPrototypeOf(ExtendType.prototype, SubType.prototype)

  // link ExtendType's prototype chain to SubType
  // In this case, when we trying to find the static function on ExtendType, we can also find SuperType
  Object.setPrototypeOf(ExtendType, SuperType)

  return ExtendType
}
