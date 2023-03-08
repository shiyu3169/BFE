import { useRef, useEffect } from 'react'

export function usePrevious<T>(value: T): T | undefined {
  const valueRef = useRef<T>()
  useEffect(() => {
    valueRef.current = value
  }, [value])
  return valueRef.current
}
