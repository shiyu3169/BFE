// This is a JavaScript coding problem from BFE.dev

function generateSelector(root: HTMLElement, target: HTMLElement): string {
  const path: string[] = []
  let curNode = target
  while (curNode && curNode !== root) {
    path.push(
      curNode.id ? `#${curNode.id}` : curNode.tagName.toLocaleLowerCase(),
    )
    curNode = curNode.parentElement!
  }
  if (curNode !== root) throw new Error('You are looking for something?')
  return path.reverse().join(' > ')
}
