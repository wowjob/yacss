import { convertToRem } from '../convert-to-rem/convert-to-rem'
import { normalizeDirectional } from '../normalize-directional/normalize-directional'
import type { TPadding } from '../../type'

export const normalizePadding = (margin: TPadding): string =>
  normalizeDirectional(margin, convertToRem)
