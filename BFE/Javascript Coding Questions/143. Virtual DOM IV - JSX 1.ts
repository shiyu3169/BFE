type JSXOpeningElement = {
  tag: string
}

type JSXClosingElement = {
  tag: string
}

type JSXChildren = string[]

type JSXElement = {
  openingElement: JSXOpeningElement
  children: JSXChildren
  closingElement: JSXClosingElement
}

// Approach 1 - regex
// function parse(code: string): JSXElement {
//   const reg = /^\s*<\s*(\S+)\s*>([^<>]*)<\s*\/\s*([^\/\s]+)\s*>\s*$/
//   const match = code.match(reg)
//   if (match) {
//     const element = {
//       openingElement: {
//         tag: match[1],
//       },
//       children: [match[2]],
//       closingElement: {
//         tag: match[3]
//       }
//     }
//     if(element.openingElement.tag === element.closingElement.tag) return element
//   }
//   throw new Error("error")
// }

// function generate(ast: JSXElement): string {
//   const {openingElement, children, closingElement} = ast
//    if (children[0]) return `h("${openingElement.tag}", null, "${children[0]}")`
//    return `h("${closingElement.tag}", null)`
// }

// Approach 2
function parse(code: string): JSXElement {
  // expect first non-space char to be <
  // expect name has no <,>,/
  // expect >

  // collect children until find <

  // expect closing tag to start with <
  // next non-space char to be /
  // expect name has no <,>,/
  // expect >
  let index = 0
  const goToNext = () => {
    index += 1
  }

  const goUntil = (reg: RegExp) => {
    const start = index
    while (index < code.length && !reg.test(code[index])) {
      index += 1
    }
    return code.slice(start, index)
  }

  const goUntilNonWhiteSpace = () => goUntil(/\S/)

  const expect = (char: string) => {
    if (code[index] !== char) {
      throw new Error('unexpected char')
    }
  }

  const parseOpeningElements = (): JSXOpeningElement => {
    goUntilNonWhiteSpace()
    expect('<')
    goToNext()
    goUntilNonWhiteSpace()
    const tag = goUntil(/[^\w]/)
    goUntilNonWhiteSpace()
    expect('>')
    goToNext()
    return {
      tag,
    }
  }

  const parseChildren = (): JSXChildren => {
    const text = goUntil(/<|>/)
    return [text]
  }

  const parseClosingElement = (): JSXClosingElement => {
    expect('<')
    goToNext()
    goUntilNonWhiteSpace()
    expect('/')
    goToNext()
    goUntilNonWhiteSpace()
    const tag = goUntil(/[^\w]/)
    goUntilNonWhiteSpace()
    expect('>')
    goToNext()
    goUntilNonWhiteSpace()
    if (index < code.length) throw new Error('invalid char at end')
    return {
      tag,
    }
  }
  const element = {
    openingElement: parseOpeningElements(),
    children: parseChildren(),
    closingElement: parseClosingElement(),
  }
  if (element.openingElement.tag !== element.closingElement.tag)
    throw new Error('tags are not match')
  return element
}

function generate(ast: JSXElement): string {
  const { openingElement, children, closingElement } = ast
  if (children[0]) return `h("${openingElement.tag}", null, "${children[0]}")`
  return `h("${closingElement.tag}", null)`
}
