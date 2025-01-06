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

      colorInterpolationFilters: 'linearRGB',
      colorScheme: 'dark',
      columnCount: 2,
      columnFill: 'balance',
      columnGap: 20,
      columnRule: {
        color: 'blue',
        style: 'dashed',
        width: 24,
      },
      columnSpan: 'all',
      columnWidth: 20,
      contain: 'content',
      containIntrinsicBlockSize: 160,
      containIntrinsicHeight: 200,
      containIntrinsicInlineSize: 400,
      containIntrinsicSize: 600,
      containIntrinsicWidth: 100,
      container: 'layout-parent',
      content: 'no-close-quote',
      contentVisibility: 'hidden',
      counterIncrement: 'test',
      counterReset: 'test',
      cursor: 'crosshair',
      cx: 20,
      cy: 40,
      d: 'revert',
      direction: 'ltr',
      dominantBaseline: 'hanging',
      emptyCells: 'revert',
    },
    className: 'once-upon a-time padding',
  })
)
