import {
  normalizeBorder,
  normalizeBorderWidth,
  normalizeDisplay,
  normalizeMargin,
  normalizePadding,
} from '../util'
import type {
  TBorder,
  TBorderWidth,
  TDisplay,
  TMargin,
  TPadding,
} from '../type'
import { normalizeBorderStyle } from '../util/style/border-style'
import type { TBorderStyle } from '../type/border'

export type TEnv = 'dev' | 'prod'
export type TCSSPropValue = Partial<{
  margin: TMargin
  padding: TPadding
  border: TBorder
  borderWidth: TBorderWidth
  borderStyle: TBorderStyle | TBorderStyle[]
  display: TDisplay
}>

type TResponsive = {
  mobile?: TCSSPropValue
  tablet?: TCSSPropValue
  desktop?: TCSSPropValue
  className?: string
}

export type TStyle = {
  className?: string
  env?: TEnv
} & TResponsive

// Define a mapping of keys to their respective normalizer functions
export const propertyMap: Record<
  keyof TCSSPropValue,
  {
    className: Record<TEnv, string>
    normalize: (value: any) => string | number
  }
> = {
  margin: {
    className: { dev: 'margin', prod: 'm' },
    normalize: normalizeMargin,
  },
  padding: {
    className: { dev: 'padding', prod: 'p' },
    normalize: normalizePadding,
  },
  border: {
    className: { dev: 'border', prod: 'b' },
    normalize: normalizeBorder,
  },
  borderWidth: {
    className: { dev: 'border-width', prod: 'bw' },
    normalize: normalizeBorderWidth,
  },
  borderStyle: {
    className: { dev: 'border-style', prod: 'bs' },
    normalize: normalizeBorderStyle,
  },
  display: {
    className: { dev: 'display', prod: 'd' },
    normalize: normalizeDisplay,
  },
} as const
