import type { TGlobalKeyword } from './global-keyword'

export type TFlex =
  | 'none'
  | 'auto'
  | TGlobalKeyword
  | (string & {})
  | [number | string, number | string, number | string]
