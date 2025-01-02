import type { TBorder, TBorderWidth, TMargin, TPadding } from '../type'
import { normalizeMargin, normalizePadding } from '../util'
import { normalizeBorder, normalizeBorderWidth } from '../util/style'

type TCSSPropValue = Partial<{
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

type TEnv = 'dev' | 'prod'

type TStyle = {
  className?: string
  env?: TEnv
} & TResponsive

// Define a mapping of keys to their respective normalizer functions
const propertyMap: Record<
  keyof TCSSPropValue,
  { className: Record<TEnv, string>; normalize: (value: any) => string }
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

export const getStyle = ({
  desktop,
  mobile,
  tablet,
  className = '',
  env = 'dev',
}: TStyle) => {
  const classSet = new Set(className.split(' '))

  const rowMap = new Map()
  const styleMap = new Map(Object.entries({ mobile, tablet, desktop }))

  for (const [key, styleData] of styleMap) {
    const responsivePrefix = key === 'mobile' ? '' : `${key[0]}-`

    if (!styleData) {
      continue
    }

    for (const cssProperty in styleData) {
      if (cssProperty in propertyMap) {
        const cssKey = cssProperty as keyof TCSSPropValue
        const className = propertyMap[cssKey].className[env]
        const propertyValue = propertyMap[cssKey].normalize(styleData[cssKey])

        classSet.add(className)
        rowMap.set(`--${responsivePrefix}${className}`, propertyValue)
      }
    }
  }

  return {
    className: Array.from(classSet).join(' ').trim(),
    style: Object.fromEntries(rowMap),
  }
}
