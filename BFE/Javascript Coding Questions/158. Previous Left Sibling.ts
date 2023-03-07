function previousLeftSibling(root: Element, target: Element): Element | null {
  if (!root || !target) return null

  root.setAttribute('data-level', '0')
  const tree = [root]
  let prev: Element | null = null
  while (tree.length) {
    const node = tree.shift() as Element
    if (node === target) {
      return prev &&
        prev.getAttribute('data-level') === node.getAttribute('data-level')
        ? prev
        : null
    }
    prev = node
    const level = Number(node.getAttribute('data-level'))
    const children: Element[] = Array.from(node.children).map((child) => {
      child.setAttribute('data-level', (level + 1).toString())
      return child
    })
    tree.push(...children)
  }
  return null
}
