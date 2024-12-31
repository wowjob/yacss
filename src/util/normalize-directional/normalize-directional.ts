import type { TDirectional, TDirectionalUnit } from '../../type'
import { condensedFour } from '../condensed'

export const normalizeDirectional = <T extends string>(
  value: TDirectional<T>,
  convertUnit: (v: number | TDirectionalUnit) => string = (v) => v.toString(),
) => {
  if (value === null || value === undefined) {
    throw new Error('Invalid directional input')
  }

  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'number') {
    return convertUnit(value)
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      throw new Error(
        'Invalid directional input: array must have at least one element',
      )
    }

    const [top = 0, right = top, bottom = top, left = right] = value

    return condensedFour(
      [top, right, bottom, left].filter(Boolean).map(convertUnit),
    )
  }

  if (typeof value === 'object') {
    const { top = 0, right = 0, bottom = 0, left = 0 } = value

    return condensedFour([top, right, bottom, left].map(convertUnit))
  }

  throw new Error('Invalid directional input')
}
