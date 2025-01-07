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
      hyphenateCharacter: 'auto',
      hyphens: '---',
      imageOrientation: 'from-image',
      imageRendering: 'crisp-edges',
      inlineSize: 'max-content',
      inset: [20, 20, 20, 20],
      insetBlock: { start: '22px', end: 10 },
      insetInline: [10, 20],
      isolation: 'isolate',
      justifyContent: 'space-around',
      justifyItems: 'anchor-center',
      justifySelf: 'anchor-center',
      bottom: 40,
      left: 30,
      right: 20,
      top: 10,
      letterSpacing: 10,
      lightingColor: 'currentcolor',
      lineBreak: 'anywhere',
      lineHeight: '1px',
      listStyle: {
        image: 'url(land)',
        position: 'outside',
        type: 'circle',
      },
      marginBlock: { start: 24, end: 48 },
      marginInline: { start: 24, end: 48 },
      maskClip: '-webkit-mask-clip',

      mask: {
        mode: 'alpha',
        composite: 'add',
        origin: 'content',
      },
    },
    className: 'yes-no',
  })
)
