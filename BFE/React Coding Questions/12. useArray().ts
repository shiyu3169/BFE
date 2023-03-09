// This is a React problem from BFE.dev

import React, { useState, useCallback } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void
  removeByIndex: (index: number) => void
}

export function useArray<T>(
  initialValue: T[],
): { value: T[] } & UseArrayActions<T> {
  const [array, setArray] = useState<T[]>(initialValue)
  const push = useCallback((item: T) => {
    setArray((array) => [...array, item])
  }, [])

  const removeByIndex = useCallback((index: number) => {
    setArray((array) => {
      const newArray = [...array]
      newArray.splice(index, 1)
      return newArray
    })
  }, [])

  return { value: array, push, removeByIndex }
}
