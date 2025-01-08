import { getStyle } from './get-style'

console.log(
  getStyle({
    mobile: {
      touchAction: 'pan-right',
      transform: 'rotate(20deg)',
      transformBox: 'fill-box',
      transformOrigin: '2px 30% 10px',
      transformStyle: 'preserve-3d',
      transition: {
        duration: '250ms',
        delay: 150,
        property: 'opacity',
        timingFunction: 'easeIn',
      },
      transitionBehavior: 'allow-discrete',
      translate: '50% 50%',
      userSelect: 'none',
      vectorEffect: 'fixed-position',
      verticalAlign: 'middle',
      visibility: 'hidden',
      whiteSpace: 'preserve wrap',
      width: '24px',
    },
    className: 'yes-no',
  })
)
