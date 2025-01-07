import type { TGlobalKeyword } from './global-keyword'

export type TMaxHeight =
  | 'none'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | 'stretch'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}%`
  | `calc(${string})`
  | `anchor-size(${string})`
  | TGlobalKeyword
