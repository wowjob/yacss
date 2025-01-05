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
    },
    tablet: {
      padding: 24,
      display: 'inline-flex',
    },
    desktop: {
      padding: 32,
      display: 'grid',
      borderStyle: 'dashed',
      flex: 'none',
      flexDirection: 'column',
      animation: {
        name: 'slide-fun',
        duration: 500,
        composition: 'add',
        direction: 'alternate',
        fillMode: 'forwards',
        iterationCount: 5,
        playState: 'running',
        timingFunction: 'easeInEaseOut',
        delay: 1000,
      },
      borderBlockStart: {
        color: 'red',
        style: 'dashed',
        width: 2,
      },
      borderBlockEnd: {
        color: 'red',
        style: 'dashed',
        width: 2,
      },
      borderBlock: {
        color: 'red',
        style: 'dashed',
        width: 2,
      },
      borderInlineStart: {
        color: 'red',
        style: 'dashed',
        width: 2,
      },
      borderInlineEnd: {
        color: 'red',
        style: 'dashed',
        width: 2,
      },
      borderInline: {
        color: 'red',
        style: 'dashed',
        width: 2,
      },
    },
    className: 'once-upon a-time padding',
    env: 'prod',
  })
)
