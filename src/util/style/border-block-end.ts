import type { TBorderBlockEnd } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeBorderBlockEnd = (
  borderBlockEnd: TBorderBlockEnd,
): string => {
  if (typeof borderBlockEnd === 'string') {
    return borderBlockEnd
  }

  if (borderBlockEnd === null || borderBlockEnd === undefined) {
    return 'none'
  }

  if (typeof borderBlockEnd === 'object') {
    const {
      endWidth = 'medium',
      endStyle = 'none',
      endColor = 'currentcolor',
    } = borderBlockEnd

    const width =
      isPx(String(endWidth)) || typeof endWidth === 'number'
        ? convertToRem(endWidth)
        : endWidth

    return [width, endStyle, endColor].join(' ')
  }

  return 'medium none currentcolor'
}
