import type { TBorderBlockStart } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBlockStart = (
  borderBlockStart: TBorderBlockStart,
): string => {
  if (typeof borderBlockStart === 'string') {
    return borderBlockStart
  }

  if (borderBlockStart === null || borderBlockStart === undefined) {
    return 'none'
  }

  if (typeof borderBlockStart === 'object') {
    const {
      startWidth = 'medium',
      startStyle = 'none',
      startColor = 'currentcolor',
    } = borderBlockStart

    const width =
      isPx(String(startWidth)) || typeof startWidth === 'number'
        ? convertToRem(startWidth)
        : startWidth

    return [width, startStyle, startColor].join(' ')
  }

  return 'medium none currentcolor'
}
