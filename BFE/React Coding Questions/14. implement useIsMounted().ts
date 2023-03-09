import React, { useRef, useEffect } from 'react'

export function useIsMounted(): () => boolean {
  // your code here
  const isMounted = useRef<boolean>(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  return () => isMounted.current
}
