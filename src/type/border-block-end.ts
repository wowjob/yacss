import type { TBorderStyle } from './border'
import type { TGlobalKeyword } from './global-keyword'

export type TBorderBlockEnd =
  | string
  | {
      endWidth?: string | number
      endStyle?: TBorderStyle
      endColor?: string
    }
  | TGlobalKeyword
