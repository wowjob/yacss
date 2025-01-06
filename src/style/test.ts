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
      floodColor: 'currentcolor',
      floodOpacity: 'revert',
      font: {
        family: 'wow',
        size: 22,
        stretch: 'condensed',
      },
      fontFeatureSettings: 'revert',
      fontKerning: 'auto',
      fontLanguageOverride: '"ENG"',
      fontOpticalSizing: 'inherit',
      fontPalette: 'normal',
      fontSizeAdjust: 'ch-width from-font',
      fontSynthesisSmallCaps: 'auto',
      fontSynthesisStyle: 'auto',
      fontSynthesisWeight: 'revert',
      fontVariantAlternates: 'historical-forms',
      fontVariantCaps: 'all-petite-caps',
      fontVariantEastAsian: 'full-width',
    },
    className: 'yes-no',
  })
)
