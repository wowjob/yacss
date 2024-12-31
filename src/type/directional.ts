import type { TDirectionalUnit } from './directional-unit'

export type TDirectional<T extends string> =
  | T
  | number
  | TDirectionalUnit
  | [
      (number | TDirectionalUnit)?,
      (number | TDirectionalUnit)?,
      (number | TDirectionalUnit)?,
      (number | TDirectionalUnit)?,
    ]
  | {
      top?: number | TDirectionalUnit
      right?: number | TDirectionalUnit
      bottom?: number | TDirectionalUnit
      left?: number | TDirectionalUnit
    }
  | (string & {})
