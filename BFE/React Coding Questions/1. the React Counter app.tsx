import React, { useState } from 'react'

export function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button
        data-testid='decrement-button'
        onClick={() => setCounter((v) => (v -= 1))}
      >
        -
      </button>
      <button
        data-testid='increment-button'
        onClick={() => setCounter((v) => (v += 1))}
      >
        +
      </button>
      <p>clicked: {counter}</p>
    </div>
  )
}

// run your code by clicking the run button on the right
