import { useRef, useEffect } from 'react'
export function useTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    const id = setTimeout(() => callbackRef.current(), delay)
    return () => clearTimeout(id)
  }, [delay])
}

/* 
  Let's take an example we have two callbacks i.e callback1 and callback2. 
  We first call our useTimeout hook with callback1 and with X delay. 
  Now your useTimeout hook has registered a timeout and callback1 is set to be fired after X milliseconds. 
  But before it gets completed a change has been introduced and now callback2 is the new reference created by the parent component 
  (where useTimeout was implemented) and it would now try to rerender the useTimeout 
  but since your useEffect in the useTimeout has not subscribed to the callback, 
  it would be ignored and you will end up running callback1 as it was bounded to the timer.

  Now, you can't just put the callback parameter in the dependency array as it is mentioned in the problem that 
  you don't have to reset the timer. So, now useRef comes to the rescue which can provide us latest value of the callback parameter. 
  We won't just bind the callback parameter but the callbackRef (created by using useRef) with the setTimeout so whenever the timer expires 
  we'd be sure that callbackRef is holding whatsoever latest callback parameter was. 
*/
