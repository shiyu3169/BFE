function t(translation: string, data?: any): string {
  const reg = /{{([^}}]*)}}/g
  return translation.replace(reg, (_, key) => {
    return data?.[key] || ''
  })
}

console.log(t('{{website}} {{verb}} {{evaluation}} {{period}} '))
