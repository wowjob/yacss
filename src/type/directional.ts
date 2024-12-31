import type { TDirectionalUnit } from './directional-unit'

export type TDirectional<T> =
  | T
  | number
  | TDirectionalUnit
  | [
      (T | number | TDirectionalUnit)?,
      (T | number | TDirectionalUnit)?,
      (T | number | TDirectionalUnit)?,
      (T | number | TDirectionalUnit)?,
    ]
  | {
      top?: T | number | TDirectionalUnit
      right?: T | number | TDirectionalUnit
      bottom?: T | number | TDirectionalUnit
      left?: T | number | TDirectionalUnit
    }
  | (string & {})
