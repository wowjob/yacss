import {
  normalizeMargin,
  normalizePadding,
  normalizeBorder,
  normalizeBorderWidth,
} from '../util'
import type { TBorder, TBorderWidth, TMargin, TPadding } from '../type'

export type TEnv = 'dev' | 'prod'
export type TCSSPropValue = Partial<{
  margin: TMargin
  padding: TPadding
  border: TBorder
  borderWidth: TBorderWidth
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
} as const
