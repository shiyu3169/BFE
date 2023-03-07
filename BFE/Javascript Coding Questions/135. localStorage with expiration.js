window.myLocalStorage = {
  getItem(key) {
    try {
      const entry = JSON.parse(localStorage.getItem(key))
      if (entry.expiredAt && entry.expiredAt <= Date.now()) {
        this.removeItem(key)
        return null
      }
      return entry.value.toString()
    } catch (e) {
      return null
    }
  },

  setItem(key, value, maxAge) {
    const entry = {
      value,
      expiredAt: !isNaN(maxAge) ? Date.now() + maxAge : undefined,
    }
    localStorage.setItem(key, JSON.stringify(entry))
  },

  removeItem(key) {
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  },
}
