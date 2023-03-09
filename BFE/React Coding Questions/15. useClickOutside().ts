import React, { useRef, useEffect, MouseEvent } from 'react'

export function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLElement>(null)
  const clickHandler = (e: Event) => {
    if (!ref.current) return
    if (ref.current.contains(e.target as Node)) return
    callback()
  }
  useEffect(() => {
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [])

  return ref
}
