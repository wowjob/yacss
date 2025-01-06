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
      gridRow: [1, 4],
      gridTemplate: { columns: '1fr 2fr', rows: 'auto 1fr auto' },
      gridTemplateAreas: ['a a .', 'b b b'],
      height: 'fit-content',
    },
    className: 'yes-no',
  })
)
