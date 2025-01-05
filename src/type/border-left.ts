import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderLeft =
  | string
  | {
      color?: string
      style?: TBorderStyle
      width?: string | number | TDirectionalUnit
    }
  | TGlobalKeyword
