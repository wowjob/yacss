import type { TGlobalKeyword } from './global-keyword'

export type TJustifySelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | `safe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | `unsafe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | TGlobalKeyword
