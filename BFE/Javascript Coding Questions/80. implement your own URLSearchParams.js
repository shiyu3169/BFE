/* When we want to extract parameters from query string, URLSearchParams could be very handy.

Can you implement MyURLSearchParams which works the same ?

const params = new MyURLSearchParams('?a=1&a=2&b=2')
params.get('a') // '1'
params.getAll('a') // ['1', '2']
params.get('b') // '2'
params.getAll('b') // ['2']


params.append('a', 3)
params.set('b', '3')
params.toString() // 'a=1&a=2&b=3&a=3'
There are a few methods on URLSearchParams, please implement them all.

prev
 */

class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    const pairs = init
      .replace(/(.?)+[?]/, '')
      .split('&')
      .map((pair) => pair.split('='))
    this.params = new Map()
    for (const pair of pairs) {
      if (!this.params.has(pair[0])) {
        this.params.set(pair[0], [])
      }
      this.params.get(pair[0]).push(pair[1])
    }
  }

  /**
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    if (!this.params.has(name)) {
      this.params.set(name, [])
    }
    this.params.get(name).push(value?.toString() || `${value}`)
  }

  /**
   * @params {string} name
   */
  delete(name) {
    this.params.delete(name)
  }

  /**
   * @returns {Iterator}
   */
  *entries() {
    for (const [key, values] of this.params) {
      for (const value of values) {
        yield [key, value]
      }
    }
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {
    for (const [key, values] of this.params) {
      for (const value of values) {
        callback(value, key)
      }
    }
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {
    name = name.replace(/(.?)+[?]/, '')
    if (this.params.has(name)) {
      return this.params.get(name)?.[0] || null
    }
    return null
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {
    return this.params.get(name) || []
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {
    return this.params.has(name)
  }

  /**
   * @return {Iterator}
   */
  keys() {
    this.params.keys()
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {
    this.params.set(name, [value?.toString() || `${value}`])
  }

  // sor all key/value pairs based on the keys
  sort() {
    const sortedEntries = [...this.params].sort()
    this.params = new Map(sortedEntries)
  }

  /**
   * @return {string}
   */
  toString() {
    return [...this.params]
      .flatMap(
        ([key, values]) => values?.map((value) => `${key}=${value}`), // Return a nested array but `flatMap` flattens it by one level
      )
      .join('&')
  }

  /**
   * @return {Iterator} values
   */
  values() {
    return Array.from(this.params.values()).flat()
  }
}
