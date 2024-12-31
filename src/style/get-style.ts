import type { TMargin, TPadding } from '../type'
import { normalizeMargin, normalizePadding } from '../util'

type TCSSPropValue = Partial<{
  margin: TMargin
  padding: TPadding
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
  if (mobile?.margin) {
    classSet.add('margin')
    rowMap.set('--margin', normalizeMargin(mobile.margin))
  }

  if (mobile?.padding) {
    classSet.add('padding')
    rowMap.set('--padding', normalizePadding(mobile.padding))
  }

  return {
    className: Array.from(classSet).join(' '),
    style: Object.fromEntries(rowMap),
  }
}
