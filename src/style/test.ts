import { getStyle } from './get-style'

console.log(
  getStyle({
    mobile: {
      fieldSizing: 'content',
      fill: 'context-fill',
      border: {
        color: 'red',
        style: 'dashed',
        width: 20,
      },
      fillOpacity: 0.5,
      fillRule: 'evenodd',
      filter: 'opacity(25%)',
      float: 'left',
    },
    className: 'yes-no',
  })
)
