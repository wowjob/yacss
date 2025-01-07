import type { TMaxWidth } from '../../type'
import { convertToRem } from '../convert-to-rem'
import { isPx } from '../is-px'

export const normalizeMaxWidth = (value: TMaxWidth): string | number => {
  if (!value || value === 'none') {
    return 'none' // Default value
  }

  if (typeof value === 'string') {
    return isPx(value) ? convertToRem(value) : value
  }

  if (typeof value === 'number') {
    return convertToRem(value)
  }

  return value
}
