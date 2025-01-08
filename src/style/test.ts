import { getStyle } from './get-style'

console.log(
  getStyle({
    mobile: {
      touchAction: 'pan-right',
      transform: 'rotate(20deg)',
      transformBox: 'fill-box',
    },
    className: 'yes-no',
  })
)
