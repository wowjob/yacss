import { convertToRem } from '../convert-to-rem/convert-to-rem'
import { normalizeDirectional } from '../normalize-directional/normalize-directional'
import type { TMargin } from '../../type'

export const normalizeMargin = (margin: TMargin): string =>
  normalizeDirectional(margin, convertToRem)
