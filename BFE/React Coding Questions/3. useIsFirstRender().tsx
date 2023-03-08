import { useRef } from 'react'

export function useIsFirstRender(): boolean {
  // your code here
  const isFirstRender = useRef(true)
  if (isFirstRender.current) {
    isFirstRender.current = false
    return true
  }
  return isFirstRender.current
}
