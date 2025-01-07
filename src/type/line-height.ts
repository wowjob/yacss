import type { TGlobalKeyword } from './global-keyword'

export type TLineHeight =
  | 'normal'
  | number // Unitless values
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | TGlobalKeyword
