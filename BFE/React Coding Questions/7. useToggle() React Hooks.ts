import { useState } from 'react'
export function useToggle(on: boolean): [boolean, () => void] {
  const [isOpen, setIsOpen] = useState<boolean>(on)

  const toggle = () => setIsOpen((isOpen) => !isOpen)

  return [isOpen, toggle]
}
