//  Map<node, Array<[predicate, handler]>>
const allHandlers = new Map()

/**
 * @param {HTMLElement} root
 * @param {(el: HTMLElement) => boolean} predicate
 * @param {(e: Event) => void} handler
 */
function onClick(root, predicate, handler) {
  // your code here
  if (allHandlers.has(root)) {
    allHandlers.get(root).push([predicate, handler])
    return
  }

  allHandlers.set(root, [[predicate, handler]])

  root.addEventListener('click', (e) => {
    // from e.target -> root
    // check if element should be applied with handler
    let el = e.target
    const handlers = allHandlers.get(root)
    let isPropagationStopped = false

    e.stopPropagation = () => {
      isPropagationStopped = true
    }

    while (el) {
      let isImmediatePropagationStopped = false

      e.stopImmediatePropagation = () => {
        isImmediatePropagationStopped = true
        isPropagationStopped = true
      }

      for (const [predicate, handler] of handlers) {
        if (predicate(el)) {
          handler.call(el, e)
        }

        // check immediatepropagtion
        if (isImmediatePropagationStopped) {
          break
        }
      }
      // check propagation
      if (el === root || isPropagationStopped) break

      el = el.parentElement
    }
  })
}
