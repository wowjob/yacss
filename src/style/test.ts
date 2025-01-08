import { getStyle } from './get-style'

console.log(
  getStyle({
    mobile: {
      touchAction: 'pan-right',
    },
    className: 'yes-no',
  })
)
