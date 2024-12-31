import { normalizePadding } from '../util'
import { getStyle } from './get-style'

// console.log(
//   getStyle({
//     mobile: {
//       margin: {
//         top: 24,
//         bottom: 12,
//         right: 16,
//         left: 12,
//       },
//     },
//   }),
// )

// console.log(
//   getStyle({
//     mobile: {
//       margin: [2, 8, 6, 8],
//       padding: { top: 2, left: 4 },
//     },
//   }),
// )

console.log(
  getStyle({
    mobile: {
      margin: ['revert', 8, 'auto', 'revert'],
      padding: ['8px', undefined, '16px'],
      // border: {
      //   width: 8,
      //   style: 'dashed',
      // },
      border: '1px solid blue',
      borderWidth: [20, 3, 10, 2],
    },
    className: 'once-upon a-time padding',
  }),
)

console.log(normalizePadding(undefined as any))
