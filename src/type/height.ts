import type { TGlobalKeyword } from '../../dist/type'

export type THeight =
  | number
  | 'auto'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | `fit-content(${string | number})`
  | `minmax(${string | number}, ${string | number})`
  | `clamp(${string | number}, ${string | number})`
  | `anchor-size(${string | number}, ${string | number})`
  | 'stretch'
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `${number}vh`
  | `${number}vw`
  | `${number}vmin`
  | `${number}vmax`
  | `${number}cm`
  | `${number}mm`
  | `${number}in`
  | `${number}pt`
  | `${number}pc`
  | `${number}%`
  | TGlobalKeyword
  | (string & {})
