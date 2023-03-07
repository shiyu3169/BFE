/* This is a follow-up on 36. create a fake timer(setTimeout)

Like setTimeout, setInterval also is not accurate. (please refer Event Loop for detail).

This is OK in general web application, but might be problematic in test.

Could you implement your own setInterval() and clearInterval() to be sync? so that they have accurate timing for test. This is what FakeTimes are for.

By "accurate", it means suppose all functions cost no time, we start our function at time 0, then setInterval(func1, 100) would schedule func1 exactly at 100, 200, 300 .etc.

You need to replace Date.now() as well to provide the time.

class FakeTimer {
  install() {
    // replace window.setInterval, window.clearInterval, Date.now
    // with your implementation
  }
  
  uninstall() {
    // restore the original implementation of
    // window.setInterval, window.clearInterval, Date.now
  }
  
  tick() {
    // run the scheduled functions without waiting
  }
}
** Be careful about the infinite loops **. Your code is tested like this:

const fakeTimer = new FakeTimer()
fakeTimer.install()

const logs = []
const log = () => {
    logs.push(Date.now())
}

let count = 0
const id = setInterval(() => {
  if (count > 1) {
    clearInterval(id)
  } else {
    log()
  }
  count += 1
}, 100)
// log 'A' at every 100, stop at 200
fakeTimer.tick()
fakeTimer.uninstall()
 
expect(logs).toEqual([100,200])
Note

Only Date.now() is used when judging your code, you can ignore other time related apis. */

class FakeTimer {
  originalSetInterval = window.setInterval
  originalClearInterval = window.clearInterval
  originalNow = Date.now
  callStack = []
  id = 0
  time = 0

  install() {
    window.setInterval = (fn, wait, ...args) => {
      this.callStack.push({
        fn,
        wait,
        delay: wait + this.time,
        id: this.id,
        args,
      }) // time will current time+the delay time for this Interval
      return this.id++
    }
    window.clearInterval = (id) => {
      let index = this.callStack.findIndex((task) => task.id === id)
      index !== -1 && this.callStack.splice(index, 1)
    }
    Date.now = () => {
      return this.time
    }
  }

  uninstall() {
    window.setInterval = this.originalSetInterval
    window.clearInterval = this.originalClearInterval
    Date.now = this.originalNow
  }

  tick() {
    while (this.callStack.length > 0) {
      // we sorting in while loop because a new Interval can be added in between while processing call stack,
      // and we need to execute Intervals acc to clock
      this.callStack.sort((a, b) => {
        return a.delay - b.delay
      })
      let task = this.callStack.shift() // remove an element from the front of the stack which has least delay time
      this.time = task.delay
      this.callStack.push({ ...task, delay: this.time + task.wait })
      task.fn(task.args)
    }
  }
}
