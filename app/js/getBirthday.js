
export function compute () {
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth()
  let d = date.getDate()
  if (y === 2019 && m === 9 && d === 30) {
    return 30
  }
  return false
}
