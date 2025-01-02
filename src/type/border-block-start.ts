import { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderBlockStart =
  | string
  | {
      startWidth?: string | number
      startStyle?: TBorderStyle
      startColor?: string
    }
  | TGlobalKeyword
