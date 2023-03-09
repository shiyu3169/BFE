import React, { useState, ChangeEvent } from 'react'
export function PhoneNumberInput() {
  // your code here
  const [number, setNumber] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, selectionStart } = e.target
    const numberOnly = value.replace(/\D/g, '')
    if (numberOnly.length > 10) return
    if (numberOnly.length > 6) {
      setNumber(
        `(${numberOnly.slice(0, 3)})${numberOnly.slice(
          3,
          6,
        )}-${numberOnly.slice(6)}`,
      )
    } else if (numberOnly.length > 3) {
      setNumber(`(${numberOnly.slice(0, 3)})${numberOnly.slice(3, 6)}`)
    } else {
      setNumber(numberOnly)
    }
    // handle caret jumps
    if (value.length < number.length) {
      setTimeout(() => {
        e.target.setSelectionRange(selectionStart, selectionStart)
      }, 0)
    }
  }

  return (
    <input
      data-testid='phone-number-input'
      value={number}
      onChange={onChange}
    />
  )
}
