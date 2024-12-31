import type { TMargin } from '../type'
import { normalizeMargin } from '../util'

type TCSSPropValue = Partial<{
  margin: TMargin
}>

type TResponsive = {
  mobile?: TCSSPropValue
  tablet?: TCSSPropValue
  desktop?: TCSSPropValue
}

export const getStyle = ({ desktop, mobile, tablet }: TResponsive) => {
  const classSet = new Set()
  const rowMap = new Map()
  if (mobile?.margin) {
    classSet.add('margin')
    rowMap.set('--margin', normalizeMargin(mobile.margin))
  }

  if (mobile?.padding) {
    classSet.add('padding')
  }

  console.log(Object.fromEntries(rowMap))
  console.log('Object.fromEntries(rowMap)')

  return {
    className: Array.from(classSet).join(' '),
    style: Object.fromEntries(rowMap),
  }
}
