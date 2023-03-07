/* Suppose you write some CSS code, you need to set colors. You can choose hexadecimal notation #fff or Functional notation rgba(255,255,255,1).

Can you write a function to convert hexadecimal notation to functional notation?

hexToRgb('#fff')
// 'rgba(255,255,255,1)'
Alpha channel should have maximum 2 digits after decimal point, round up if needed.
Don't forget to do input validation */

function normalize(hex: string): string {
  const digits = hex.toLowerCase().slice(1)

  if (digits.length === 3) {
    return [...digits].map((item) => item.repeat(2)).join('') + 'ff'
  }

  if (digits.length === 4) {
    return [...digits].map((item) => item.repeat(2)).join('')
  }

  if (digits.length === 6) {
    return digits + 'ff'
  }

  return digits
}

function hexToRgba(hex: string): string {
  // #fff 3
  // #ffff 4
  // #ffffff 6
  // #ffffffff 8

  // 1. validate
  // 2. normalize to 8 digits
  // 3. tranform to numbers
  // 4. compose the result
  const regValidHexColor = /^#[0-9a-fA-F]+$/
  if (![4, 5, 7, 9].includes(hex.length) || !regValidHexColor.test(hex)) {
    throw new Error('input is invalid')
  }

  const normalized = normalize(hex)

  const regColorParts = /(.{2})(.{2})(.{2})(.{2})/
  const match = normalized.match(regColorParts)!

  const [r, g, b, a] = match.slice(1, 5).map((part) => parseInt(part, 16))

  return `rgba(${r},${g},${b},${Math.round((a / 255) * 100) / 100})`
}
