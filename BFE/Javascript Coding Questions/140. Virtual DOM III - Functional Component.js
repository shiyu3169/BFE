/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 * type FunctionComponent = (props: object) => MyElement
 */

/**
 * @param { string | FunctionComponent } type - valid HTML tag name or Function Component
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  if (typeof type === 'function') {
    return type({ ...props, children })
  }
  return {
    type,
    props: {
      ...props,
      children,
    },
  }
}

/**
 * @param { MyElement }
 * @returns { HTMLElement }
 */
function render(obj) {
  if (typeof obj === 'string') {
    return document.createTextNode(obj)
  }

  const { type, props } = obj

  const { children, ...attrs } = props

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
