// This is a JavaScript coding problem from BFE.dev

interface OriginData {
  origin: string
  lastUsed: number
  size: number
  persistent: boolean
}

interface LRUStorage {
  capacity: number
  getData(origin: string): OriginData | undefined
  setData(origin: string, size: number): boolean
  clearData(origin: string): void
  makePersistent(origin: string): void
}

class MyLRUStorage implements LRUStorage {
  capacity: number
  curSize: number
  persistedSize: number
  normal: Map<string, OriginData>
  getTimestamp: () => void
  constructor(capacity: number, getTimestamp: () => void) {
    this.capacity = capacity
    this.getTimestamp = getTimestamp
    this.normal = new Map()
    this.curSize = 0
    this.persistedSize = 0
  }

  getData(origin: string): OriginData | undefined {
    if (!this.normal.has(origin)) return
    const data = this.normal.get(origin)
    if (data!.persistent) return data
    const temp = this.normal.get(origin)
    // reset its position
    this.normal.delete(origin)
    this.normal.set(origin, temp!)
    return temp
  }
  setData(origin: string, size: number): boolean {
    if (this.persistedSize + size > this.capacity) return false
    if (this.normal.has(origin)) {
      this.curSize -= this.normal.get(origin)!.size
      this.normal.delete(origin)
    }
    this.curSize += size
    this.normal.set(origin, { origin, size, persistent: false, lastUsed: 1 })
    if (this.capacity >= this.curSize) {
      return true
    }
    const values = this.normal.entries()
    let persistSize = 0
    while (this.capacity < this.curSize) {
      const [key, value] = values.next().value
      if (persistSize + value.size > this.capacity) {
        this.normal.delete(origin)
        this.curSize -= value.size
        return false
      }
      if (!value.persistent) {
        this.curSize -= value.size
        this.normal.delete(key)
      } else {
        persistSize += value.size
      }
    }
    return true
  }

  clearData(origin: string): void {
    if (this.normal.has(origin)) {
      this.curSize -= this.normal.get(origin)!.size
      this.normal.delete(origin)
    }
  }
  makePersistent(origin: string): void {
    if (!this.normal.has(origin)) return
    const data = this.normal.get(origin)
    data!.persistent = true
    this.normal.set(origin, data!)
  }
}
