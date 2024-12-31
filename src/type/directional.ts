import type { TDirectionalUnit } from './directional-unit'

export type TDirectionalBase<T> =
  | T
  | number
  | TDirectionalUnit
  | [
      (T | number | string | TDirectionalUnit)?,
      (T | number | string | TDirectionalUnit)?,
      (T | number | string | TDirectionalUnit)?,
      (T | number | string | TDirectionalUnit)?,
    ]

export type TDirectionalSimple<T> = TDirectionalBase<T> | (string & {})

export type TDirectional<T> =
  | TDirectionalBase<T>
  | {
      top?: T | number | TDirectionalUnit
      right?: T | number | TDirectionalUnit
      bottom?: T | number | TDirectionalUnit
      left?: T | number | TDirectionalUnit
    }
  | (string & {})
