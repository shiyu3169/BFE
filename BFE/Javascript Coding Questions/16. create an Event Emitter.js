// please complete the implementation
class EventEmitter {
  constructor() {
    this.subscriptions = new Map()
  }
  subscribe(eventName, callback) {
    if (!this.subscriptions.has(eventName)) {
      this.subscriptions.set(eventName, [])
    }
    this.subscriptions.get(eventName).push(callback)

    return {
      release: () => {
        if (!this.subscriptions.has(eventName)) {
          return
        }
        const callbacks = this.subscriptions.get(eventName)
        const index = callbacks.indexOf(callback)
        if (index < 0) {
          return
        }
        callbacks.splice(index, 1)
        if (callbacks.length === 0) {
          this.subscriptions.delete(eventName)
        }
      },
    }
  }

  emit(eventName, ...args) {
    if (!this.subscriptions.has(eventName)) {
      return
    }
    for (const callback of this.subscriptions.get(eventName)) {
      callback(...args)
    }
  }
}
