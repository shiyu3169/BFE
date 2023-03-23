// class NodeStore {

//   VALUE_KEY = '__index'
//   index = 0
//   nodeList = []
//   valueList = []
//    /**
//    * @param {Node} node
//    * @param {any} value
//    */
//   set(node, value) {
//     node[NodeStore.VALUE_KEY] = this.index++ //modify the node to add an extra index for it
//     this.nodeList.push(node)
//     this.valueList.push(value)
//   }
//   /**
//    * @param {Node} node
//    * @return {any}
//    */
//   get(node) {
//     if(NodeStore.VALUE_KEY in node) {
//       return this.valueList[node[NodeStore.VALUE_KEY]]
//     }
//     return undefined
//   }

//   /**
//    * @param {Node} node
//    * @return {Boolean}
//    */
//   has(node) {
//     return NodeStore.VALUE_KEY in node
//   }
// }

class NodeStore {
  constructor() {
    this.store = {}
    this.id = 1
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    const id = node.dataset.storeid || this.id++
    this.store[id] = value
    node.dataset.storeid = id
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.store[node.dataset.storeid]
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return node.dataset.storeid in this.store
  }
}
