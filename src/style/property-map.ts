import {
  normalizeBorder,
  normalizeBorderStyle,
  normalizeBorderWidth,
  normalizeDisplay,
  normalizeFlex,
  normalizeFlexBasis,
  normalizeFlexDirection,
  normalizeMargin,
  normalizePadding,
} from '../util'

import type {
  TBorder,
  TBorderWidth,
  TDisplay,
  TFlex,
  TFlexDirection,
  TMargin,
  TPadding,
  TBorderStyle,
  TFlexBasis,
} from '../type'

export type TEnv = 'dev' | 'prod'
export type TCSSPropValue = Partial<{
  border: TBorder
  borderWidth: TBorderWidth
  borderStyle: TBorderStyle | TBorderStyle[]
  display: TDisplay
  flex: TFlex
  flexBasis: TFlexBasis
  flexDirection: TFlexDirection
  margin: TMargin
  padding: TPadding
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
  flex: {
    className: { dev: 'flex', prod: 'fx' },
    normalize: normalizeFlex,
  },
  flexBasis: {
    className: { dev: 'flex-basis', prod: 'fb' },
    normalize: normalizeFlexBasis,
  },
  flexDirection: {
    className: { dev: 'flex-direction', prod: 'fd' },
    normalize: normalizeFlexDirection,
  },
} as const
