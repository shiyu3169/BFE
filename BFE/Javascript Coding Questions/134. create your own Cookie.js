// enable myCookie
function install() {
  // your code here
  const store = new Map()
  Object.defineProperty(document, 'myCookie', {
    get() {
      const result = []
      for (const [key, value] of store) {
        if (value.expiredAt && value.expiredAt <= Date.now()) {
          store.delete(key)
        } else {
          result.push(`${key}=${value.data}`)
        }
      }
      return result.join('; ')
    },
    set(value) {
      const [data, ...options] = value.replace(/\s/g, '').split(';')
      const [key, dataValue] = data.split('=')
      if (!key || !dataValue) return
      const cookie = {
        data: dataValue,
      }
      options.forEach((option) => {
        const [key, optionValue] = option.split('=')
        if (!key || !optionValue) return
        if (key === 'max-age') {
          const maxAge = parseInt(optionValue, 10) * 1000
          if (isNaN(maxAge)) return
          cookie.expiredAt = Date.now() + maxAge
        }
      })
      store.set(key, cookie)
    },
    configurable: true,
  })
}

// disable myCookie
function uninstall() {
  // your code here
  delete document.myCookie
}
