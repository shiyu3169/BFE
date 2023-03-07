/**
 * @param {string} str
 * @return {boolean}
 */
const isValidIP = (str) => {
  const ipv4Regex = /^((\d|[1-9]\d|1\d\d|2[0-5][0-5])\.){4}$/
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){8}$/
  return ipv4Regex.test(`${str}.`) || ipv6Regex.test(`${str}:`)
}
