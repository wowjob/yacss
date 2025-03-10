import type { TGlobalKeyword } from './global-keyword'

export type TWordBreak =
  | TGlobalKeyword
  | 'normal'
  | 'break-all'
  | 'keep-all'
  | 'auto-phrase' // Experimental
  | 'break-word' // Deprecated
