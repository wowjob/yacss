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
      border: '1px solid blue',
      borderWidth: [20, 3, 10, 2],
      display: 'flex',
      borderRadius: 24,
      borderBottom: {
        color: 'red',
        style: 'dashed',
        width: 32,
      },
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 8,
      borderCollapse: 'collapse',
      borderEndEndRadius: 20,
      borderEndStartRadius: 24,
      borderTop: {
        color: 'blue',
        style: 'dotted',
        width: 22,
      },
      borderTopLeftRadius: 80,
      borderTopRightRadius: 40,
      borderLeft: {
        color: 'brown',
        style: 'double',
        width: 18,
      },
      borderRight: {
        color: 'brown',
        style: 'double',
        width: 2,
      },
      borderStartEndRadius: 22,
      borderStartStartRadius: 16,
      blockSize: 'fit-content',
      aspectRatio: 'auto',
      appearance: 'auto',
      accentColor: 'auto',
      alignContent: 'end',
      alignItems: 'flex-end',
      alignSelf: 'center',
      backdropFilter: 'blur(2px)',
      backfaceVisibility: 'hidden',
      backgroundBlendMode: 'color-burn',
      backgroundClip: 'border-area',
    },
    className: 'once-upon a-time padding',
    env: 'prod',
  })
)
