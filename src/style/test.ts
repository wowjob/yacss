import { getStyle } from './get-style'

console.log(
  getStyle({
    mobile: {
      forcedColorAdjust: 'preserve-parent-color',
    },
    className: 'yes-no',
  })
)
