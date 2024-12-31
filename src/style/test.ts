import { getStyle } from './get-style'

console.log(
  getStyle({
    mobile: {
      margin: {
        top: 24,
        bottom: 12,
        right: 16,
        left: 12,
      },
    },
  }),
)

console.log(
  getStyle({
    mobile: {
      margin: [2, 8, 6, 8],
      padding: { top: 2, left: 4 },
    },
  }),
)

console.log(
  getStyle({
    mobile: {
      margin: ['revert', 8, 'auto', 'revert'],
      padding: ['revert', 8, 'initial', 'revert'],
    },
    className: 'once-upon a-time padding',
  }),
)
