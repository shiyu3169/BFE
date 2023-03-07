/**
 * @param {HTMLElement}
 * @return {object} object literal presentation
 */
function virtualize(element) {
  const result = {
    type: element.tagName.toLowerCase(),
    props: {},
  }

  for (let { name, value } of element.attributes) {
    const parsedName = name === 'class' ? 'className' : name
    result.props[parsedName] = value
  }

  const children = []

  for (let node of element.childNodes) {
    if (node.nodeType === 3) {
      children.push(node.textContent)
    } else {
      children.push(virtualize(node))
    }
  }
  result.props.children = children.length === 1 ? children[0] : children
  return result
}

/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement}
 */
function render(obj) {
  if (typeof obj === 'string') {
    return document.createTextNode(obj)
  }

  const {
    type,
    props: { children, ...attrs },
  } = obj
  const element = document.createElement(type)

  for (const [key, value] of Object.entries(attrs)) {
    element[key] = value
  }
  const childrenArr = Array.isArray(children) ? children : [children]

  for (const child of childrenArr) {
    element.append(render(child))
  }
  return element
}
