import { Ref, useState, useEffect, useRef } from 'react'

export function useHover<T extends HTMLElement>(): [
  Ref<T | undefined>,
  boolean,
] {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const ref = useRef<T>()
  useEffect(() => {
    setIsHovered(false)
    const element = ref.current
    if (!element) return
    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseleave = () => setIsHovered(false)
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseleave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseleave)
    }
  }, [ref.current])
  return [ref, isHovered]
}
