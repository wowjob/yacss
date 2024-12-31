export const condensedFour = (propList: string[]): string => {
  if (propList.length === 0) {
    return '0'
  }

  const [top = 0, right = 0, bottom = 0, left = 0] = propList.slice(0, 4)

  if (top === right && right === bottom && bottom === left) {
    return `${top}`
  }

  if (left === right && top !== bottom) {
    return `${top} ${right} ${bottom}`
  }

  if (left === right && top === bottom) {
    return `${top} ${right}`
  }

  return `${top} ${right} ${bottom} ${left}`
}
