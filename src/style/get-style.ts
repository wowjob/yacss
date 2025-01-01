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

type TStyle = {
  className?: string
} & TResponsive

export const getStyle = ({
  desktop,
  mobile,
  tablet,
  className = '',
}: TStyle) => {
  const classSet = new Set(className.split(' '))

  const rowMap = new Map()

  // Define a mapping of keys to their respective normalizer functions
  const propertyMap: Record<
    keyof TCSSPropValue,
    { className: string; normalize: (value: any) => string }
  > = {
    margin: { className: 'margin', normalize: normalizeMargin },
    padding: { className: 'padding', normalize: normalizePadding },
    border: { className: 'border', normalize: normalizeBorder },
    borderWidth: { className: 'border-width', normalize: normalizeBorderWidth },
  }

  // Iterate over the propertyMap and handle properties dynamically
  for (const [key, { className: propClassName, normalize }] of Object.entries(
    propertyMap,
  )) {
    const mobileValue = mobile?.[key as keyof TCSSPropValue]
    if (mobileValue) {
      classSet.add(propClassName)
      rowMap.set(`--${propClassName}`, normalize(mobileValue))
    }
  }

  return {
    className: Array.from(classSet).join(' '),
    style: Object.fromEntries(rowMap),
  }
}
