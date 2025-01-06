import { getStyle } from './get-style'

console.log(
  getStyle({
    mobile: {
      forcedColorAdjust: 'preserve-parent-color',
      gap: [22, 44],
      gridAutoColumns: 'min-max(5rem, 10rem)',
    },
    className: 'yes-no',
  })
)
