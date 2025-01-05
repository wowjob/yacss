import {
  normalizeAnimation,
  normalizeBackground,
  normalizeBorder,
  normalizeBorderBlock,
  normalizeBorderBlockEnd,
  normalizeBorderBlockStart,
  normalizeBorderBottom,
  normalizeBorderBottomLeftRadius,
  normalizeBorderBottomRightRadius,
  normalizeBorderCollapse,
  normalizeBorderEndEndRadius,
  normalizeBorderEndStartRadius,
  normalizeBorderImage,
  normalizeBorderInlineEnd,
  normalizeBorderInlineStart,
  normalizeBorderRadius,
  normalizeBorderStyle,
  normalizeBorderTop,
  normalizeBorderTopLeftRadius,
  normalizeBorderWidth,
  normalizeDisplay,
  normalizeFlex,
  normalizeFlexBasis,
  normalizeFlexDirection,
  normalizeFlexGrow,
  normalizeFlexShrink,
  normalizeFlexWrap,
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
  TFlexGrow,
  TFlexShrink,
  TFlexWrap,
  TAnimation,
  TBackground,
  TBorderImage,
  TBorderBlockStart,
  TBorderBlockEnd,
  TBorderBlock,
  TBorderInlineStart,
  TBorderInlineEnd,
  TBorderInline,
  TBorderRadius,
  TBorderBottom,
  TBorderBottomLeftRadius,
  TBorderBottomRightRadius,
  TBorderCollapse,
  TBorderEndEndRadius,
  TBorderEndStartRadius,
  TBorderTop,
  TBorderTopLeftRadius,
} from '../type'

export type TEnv = 'dev' | 'prod'
export type TCSSPropValue = Partial<{
  animation: TAnimation
  background: TBackground
  border: TBorder
  borderBlock: TBorderBlock
  borderBlockStart: TBorderBlockStart
  borderBlockEnd: TBorderBlockEnd
  borderBottom: TBorderBottom
  borderBottomLeftRadius: TBorderBottomLeftRadius
  borderBottomRightRadius: TBorderBottomRightRadius
  borderCollapse: TBorderCollapse
  borderEndEndRadius: TBorderEndEndRadius
  borderEndStartRadius: TBorderEndStartRadius
  borderImage: TBorderImage
  borderInline: TBorderInline
  borderInlineStart: TBorderInlineStart
  borderInlineEnd: TBorderInlineEnd
  borderRadius: TBorderRadius
  borderWidth: TBorderWidth
  borderStyle: TBorderStyle | TBorderStyle[]
  borderTop: TBorderTop
  borderTopLeftRadius: TBorderTopLeftRadius
  display: TDisplay
  flex: TFlex
  flexBasis: TFlexBasis
  flexDirection: TFlexDirection
  flexGrow: TFlexGrow
  flexShrink: TFlexShrink
  flexWrap: TFlexWrap
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
  animation: {
    className: { dev: 'animation', prod: 'a' },
    normalize: normalizeAnimation,
  },
  background: {
    className: { dev: 'background', prod: 'bg' },
    normalize: normalizeBackground,
  },
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
  borderBlock: {
    className: { dev: 'border-block', prod: 'bb' },
    normalize: normalizeBorderBlock,
  },
  borderBlockStart: {
    className: { dev: 'border-block-start', prod: 'bbs' },
    normalize: normalizeBorderBlockStart,
  },
  borderBottom: {
    className: { dev: 'border-bottom', prod: 'bbt' },
    normalize: normalizeBorderBottom,
  },
  borderBottomLeftRadius: {
    className: { dev: 'border-bottom-left-radius', prod: 'bblr' },
    normalize: normalizeBorderBottomLeftRadius,
  },
  borderBottomRightRadius: {
    className: { dev: 'border-bottom-right-radius', prod: 'bbrr' },
    normalize: normalizeBorderBottomRightRadius,
  },
  borderBlockEnd: {
    className: { dev: 'border-block-end', prod: 'bbe' },
    normalize: normalizeBorderBlockEnd,
  },
  borderCollapse: {
    className: { dev: 'border-collapse', prod: 'bc' },
    normalize: normalizeBorderCollapse,
  },
  borderEndEndRadius: {
    className: { dev: 'border-end-end-radius', prod: 'beer' },
    normalize: normalizeBorderEndEndRadius,
  },
  borderEndStartRadius: {
    className: { dev: 'border-end-start-radius', prod: 'besr' },
    normalize: normalizeBorderEndStartRadius,
  },
  borderImage: {
    className: { dev: 'border-image', prod: 'bim' },
    normalize: normalizeBorderImage,
  },
  borderInline: {
    className: { dev: 'border-inline', prod: 'bi' },
    normalize: normalizeBorderInlineEnd,
  },
  borderInlineStart: {
    className: { dev: 'border-inline-start', prod: 'bis' },
    normalize: normalizeBorderInlineStart,
  },
  borderInlineEnd: {
    className: { dev: 'border-inline-end', prod: 'bie' },
    normalize: normalizeBorderInlineEnd,
  },
  borderRadius: {
    className: { dev: 'border-radius', prod: 'br' },
    normalize: normalizeBorderRadius,
  },
  borderWidth: {
    className: { dev: 'border-width', prod: 'bw' },
    normalize: normalizeBorderWidth,
  },
  borderStyle: {
    className: { dev: 'border-style', prod: 'bs' },
    normalize: normalizeBorderStyle,
  },
  borderTop: {
    className: { dev: 'border-top', prod: 'bt' },
    normalize: normalizeBorderTop,
  },
  borderTopLeftRadius: {
    className: { dev: 'border-top-left-radius', prod: 'btlr' },
    normalize: normalizeBorderTopLeftRadius,
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
  flexGrow: {
    className: { dev: 'flex-grow', prod: 'fg' },
    normalize: normalizeFlexGrow,
  },
  flexShrink: {
    className: { dev: 'flex-shrink', prod: 'fs' },
    normalize: normalizeFlexShrink,
  },
  flexWrap: {
    className: { dev: 'flex-wrap', prod: 'fw' },
    normalize: normalizeFlexWrap,
  },
} as const
