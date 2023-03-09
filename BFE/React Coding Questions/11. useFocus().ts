import React, { Ref, useRef, useState, useEffect } from 'react'

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  // your code here
  const ref = useRef<T>(null)
  const [focus, setFocus] = useState<boolean>(false)
  const toggle = () => {
    setFocus((focus) => !focus)
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return
    element.addEventListener('focus', toggle)
    element.addEventListener('blur', toggle)
    return () => {
      element.removeEventListener('focus', toggle)
      element.removeEventListener('blur', toggle)
    }
  }, [ref, document.activeElement])
  return [ref, focus]
}
