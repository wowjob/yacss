import type { TGlobalKeyword } from './global-keyword'

export type TTop =
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor(${string})`
  | `anchor-size(${string})`
  | 'auto'
  | TGlobalKeyword
