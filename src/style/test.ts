import { getStyle } from './get-style'

console.log(
  getStyle({
    mobile: {
      forcedColorAdjust: 'preserve-parent-color',
      gap: [22, 44],
      gridAutoColumns: 'min-max(5rem, 10rem)',
      gridAutoFlow: 'column',
      gridAutoRows: 'revert-layer',
      gridColumn: {
        start: 1,
        end: -1,
      },
    },
    className: 'yes-no',
  })
)
