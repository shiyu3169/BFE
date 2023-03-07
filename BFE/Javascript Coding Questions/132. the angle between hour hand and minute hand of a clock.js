/**
 * @param {string} time
 * @returns {number}
 */
function angle(time) {
  let [hour, min] = time.split(':').map(Number)
  hour = hour >= 12 ? hour - 12 : hour

  const minAngle = min * 6
  const hourAngle = hour * 30 + minAngle / 12

  const result = Math.abs(hourAngle - minAngle)
  return result > 180 ? Math.round(360 - result) : Math.round(result)
}
