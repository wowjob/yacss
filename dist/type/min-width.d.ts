import type { TGlobalKeyword } from './global-keyword';
export type TMinWidth = 'max-content' | 'min-content' | 'fit-content' | `fit-content(${string | number})` | 'stretch' | `${number}px` | `${number}em` | `${number}rem` | `${number}%` | `anchor-size(${string})` | TGlobalKeyword;
