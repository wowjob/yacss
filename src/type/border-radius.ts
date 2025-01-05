import type { TGlobalKeyword } from './global-keyword'
import type { TDirectionalUnit } from './directional-unit'

export type TBorderRadius =
  | string
  | number
  | TGlobalKeyword
  | TDirectionalUnit
  | [
      (string | number | TDirectionalUnit)?,
      (string | number | TDirectionalUnit)?,
      (string | number | TDirectionalUnit)?,
      (string | number | TDirectionalUnit)?
    ]
  | {
      topLeft?: string | number | TDirectionalUnit
      topRight?: string | number | TDirectionalUnit
      bottomRight?: string | number | TDirectionalUnit
      bottomLeft?: string | number | TDirectionalUnit
    }
