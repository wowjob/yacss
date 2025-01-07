import { normalizeAccentColor, normalizeAlignContent, normalizeAlignItems, normalizeAlignSelf, normalizeAnimation, normalizeAppearance, normalizeAspectRatio, normalizeBackdropFilter, normalizeBackfaceVisibility, normalizeBackground, normalizeBackgroundBlendMode, normalizeBackgroundClip, normalizeBackgroundOrigin, normalizeBlockSize, normalizeBorder, normalizeBorderBlock, normalizeBorderBlockEnd, normalizeBorderBlockStart, normalizeBorderBottom, normalizeBorderBottomLeftRadius, normalizeBorderBottomRightRadius, normalizeBorderCollapse, normalizeBorderEndEndRadius, normalizeBorderEndStartRadius, normalizeBorderImage, normalizeBorderInlineEnd, normalizeBorderInlineStart, normalizeBorderLeft, normalizeBorderRadius, normalizeBorderRight, normalizeBorderStartEndRadius, normalizeBorderStartStartRadius, normalizeBorderStyle, normalizeBorderTop, normalizeBorderTopLeftRadius, normalizeBorderTopRightRadius, normalizeBorderWidth, normalizeBottom, normalizeBoxShadow, normalizeBoxSizing, normalizeBreakAfter, normalizeBreakBefore, normalizeBreakInside, normalizeCaptionSide, normalizeCaretColor, normalizeClear, normalizeClip, normalizeClipPath, normalizeColor, normalizeColorInterpolation, normalizeColorInterpolationFilters, normalizeColorScheme, normalizeColumnCount, normalizeColumnFill, normalizeColumnGap, normalizeColumnRule, normalizeColumnSpan, normalizeColumnWidth, normalizeContain, normalizeContainer, normalizeContainIntrinsicBlockSize, normalizeContainIntrinsicHeight, normalizeContainIntrinsicInlineSize, normalizeContainIntrinsicSize, normalizeContainIntrinsicWidth, normalizeContent, normalizeContentVisibility, normalizeCounterIncrement, normalizeCounterReset, normalizeCounterSet, normalizeCursor, normalizeCx, normalizeCy, normalizeD, normalizeDirection, normalizeDisplay, normalizeDominantBaseline, normalizeEmptyCells, normalizeFieldSizing, normalizeFill, normalizeFillOpacity, normalizeFillRule, normalizeFilter, normalizeFlex, normalizeFlexBasis, normalizeFlexDirection, normalizeFlexGrow, normalizeFlexShrink, normalizeFlexWrap, normalizeFloat, normalizeFloodColor, normalizeFloodOpacity, normalizeFont, normalizeFontFeatureSettings, normalizeFontKerning, normalizeFontLanguageOverride, normalizeFontOpticalSizing, normalizeFontPalette, normalizeFontSizeAdjust, normalizeFontSynthesisSmallCaps, normalizeFontSynthesisStyle, normalizeFontSynthesisWeight, normalizeFontVariantAlternates, normalizeFontVariantCaps, normalizeFontVariantEastAsian, normalizeFontVariantLigatures, normalizeFontVariantNumeric, normalizeFontVariantPosition, normalizeFontVariationSettings, normalizeForcedColorAdjust, normalizeGap, normalizeGridAutoColumns, normalizeGridAutoFlow, normalizeGridAutoRows, normalizeGridColumn, normalizeGridRow, normalizeGridTemplate, normalizeGridTemplateAreas, normalizeHeight, normalizeHyphenateCharacter, normalizeHyphens, normalizeImageOrientation, normalizeImageRendering, normalizeInlineSize, normalizeInset, normalizeInsetBlock, normalizeInsetInline, normalizeIsolation, normalizeJustifyContent, normalizeJustifyItems, normalizeJustifySelf, normalizeLeft, normalizeLetterSpacing, normalizeLightingColor, normalizeLineBreak, normalizeLineHeight, normalizeListStyle, normalizeMargin, normalizeMarginBlock, normalizeMarginInline, normalizeMask, normalizeMaskClip, normalizeMathStyle, normalizeMaxBlockSize, normalizeMaxHeight, normalizeMaxInlineSize, normalizeMaxWidth, normalizePadding, normalizeRight, normalizeTop, } from '../util';
// Define a mapping of keys to their respective normalizer functions
export const propertyMap = {
    accentColor: {
        className: { dev: 'accent-color', prod: 'acc' },
        normalize: normalizeAccentColor,
    },
    alignContent: {
        className: { dev: 'align-content', prod: 'ac' },
        normalize: normalizeAlignContent,
    },
    alignItems: {
        className: { dev: 'align-items', prod: 'ai' },
        normalize: normalizeAlignItems,
    },
    alignSelf: {
        className: { dev: 'align-self', prod: 'as' },
        normalize: normalizeAlignSelf,
    },
    animation: {
        className: { dev: 'animation', prod: 'a' },
        normalize: normalizeAnimation,
    },
    appearance: {
        className: { dev: 'appearance', prod: 'ap' },
        normalize: normalizeAppearance,
    },
    aspectRatio: {
        className: { dev: 'aspect-ratio', prod: 'ar' },
        normalize: normalizeAspectRatio,
    },
    backdropFilter: {
        className: { dev: 'backdrop-filter', prod: 'bf' },
        normalize: normalizeBackdropFilter,
    },
    backfaceVisibility: {
        className: { dev: 'backface-visibility', prod: 'bv' },
        normalize: normalizeBackfaceVisibility,
    },
    background: {
        className: { dev: 'background', prod: 'bg' },
        normalize: normalizeBackground,
    },
    backgroundBlendMode: {
        className: { dev: 'background-blend-mode', prod: 'bbm' },
        normalize: normalizeBackgroundBlendMode,
    },
    backgroundClip: {
        className: { dev: 'background-clip', prod: 'bc' },
        normalize: normalizeBackgroundClip,
    },
    backgroundOrigin: {
        className: { dev: 'background-origin', prod: 'bo' },
        normalize: normalizeBackgroundOrigin,
    },
    blockSize: {
        className: { dev: 'block-size', prod: 'bz' },
        normalize: normalizeBlockSize,
    },
    margin: {
        className: { dev: 'margin', prod: 'm' },
        normalize: normalizeMargin,
    },
    padding: {
        className: { dev: 'padding', prod: 'p' },
        normalize: normalizePadding,
    },
    border: {
        className: { dev: 'border', prod: 'b' },
        normalize: normalizeBorder,
    },
    borderBlock: {
        className: { dev: 'border-block', prod: 'bb' },
        normalize: normalizeBorderBlock,
    },
    borderBlockStart: {
        className: { dev: 'border-block-start', prod: 'bbs' },
        normalize: normalizeBorderBlockStart,
    },
    borderBottom: {
        className: { dev: 'border-bottom', prod: 'bbt' },
        normalize: normalizeBorderBottom,
    },
    borderBottomLeftRadius: {
        className: { dev: 'border-bottom-left-radius', prod: 'bblr' },
        normalize: normalizeBorderBottomLeftRadius,
    },
    borderBottomRightRadius: {
        className: { dev: 'border-bottom-right-radius', prod: 'bbrr' },
        normalize: normalizeBorderBottomRightRadius,
    },
    borderBlockEnd: {
        className: { dev: 'border-block-end', prod: 'bbe' },
        normalize: normalizeBorderBlockEnd,
    },
    borderCollapse: {
        className: { dev: 'border-collapse', prod: 'bdc' },
        normalize: normalizeBorderCollapse,
    },
    borderEndEndRadius: {
        className: { dev: 'border-end-end-radius', prod: 'beer' },
        normalize: normalizeBorderEndEndRadius,
    },
    borderEndStartRadius: {
        className: { dev: 'border-end-start-radius', prod: 'besr' },
        normalize: normalizeBorderEndStartRadius,
    },
    borderImage: {
        className: { dev: 'border-image', prod: 'bim' },
        normalize: normalizeBorderImage,
    },
    borderInline: {
        className: { dev: 'border-inline', prod: 'bi' },
        normalize: normalizeBorderInlineEnd,
    },
    borderLeft: {
        className: { dev: 'border-left', prod: 'bl' },
        normalize: normalizeBorderLeft,
    },
    borderInlineStart: {
        className: { dev: 'border-inline-start', prod: 'bis' },
        normalize: normalizeBorderInlineStart,
    },
    borderInlineEnd: {
        className: { dev: 'border-inline-end', prod: 'bie' },
        normalize: normalizeBorderInlineEnd,
    },
    borderRadius: {
        className: { dev: 'border-radius', prod: 'bra' },
        normalize: normalizeBorderRadius,
    },
    borderRight: {
        className: { dev: 'border-right', prod: 'br' },
        normalize: normalizeBorderRight,
    },
    borderWidth: {
        className: { dev: 'border-width', prod: 'bw' },
        normalize: normalizeBorderWidth,
    },
    borderStyle: {
        className: { dev: 'border-style', prod: 'bds' },
        normalize: normalizeBorderStyle,
    },
    borderStartEndRadius: {
        className: { dev: 'border-start-end-radius', prod: 'bser' },
        normalize: normalizeBorderStartEndRadius,
    },
    borderStartStartRadius: {
        className: { dev: 'border-start-start-radius', prod: 'bssr' },
        normalize: normalizeBorderStartStartRadius,
    },
    borderTop: {
        className: { dev: 'border-top', prod: 'bt' },
        normalize: normalizeBorderTop,
    },
    borderTopLeftRadius: {
        className: { dev: 'border-top-left-radius', prod: 'btlr' },
        normalize: normalizeBorderTopLeftRadius,
    },
    borderTopRightRadius: {
        className: { dev: 'border-top-right-radius', prod: 'btrr' },
        normalize: normalizeBorderTopRightRadius,
    },
    bottom: {
        className: { dev: 'bottom', prod: 'bt' },
        normalize: normalizeBottom,
    },
    boxShadow: {
        className: { dev: 'box-shadow', prod: 'bs' },
        normalize: normalizeBoxShadow,
    },
    boxSizing: {
        className: { dev: 'box-sizing', prod: 'bsz' },
        normalize: normalizeBoxSizing,
    },
    breakAfter: {
        className: { dev: 'break-after', prod: 'ba' },
        normalize: normalizeBreakAfter,
    },
    breakBefore: {
        className: { dev: 'break-before', prod: 'bbf' },
        normalize: normalizeBreakBefore,
    },
    breakInside: {
        className: { dev: 'break-inside', prod: 'bbi' },
        normalize: normalizeBreakInside,
    },
    captionSide: {
        className: { dev: 'caption-side', prod: 'cps' },
        normalize: normalizeCaptionSide,
    },
    caretColor: {
        className: { dev: 'caret-color', prod: 'crc' },
        normalize: normalizeCaretColor,
    },
    clear: {
        className: { dev: 'clear', prod: 'clr' },
        normalize: normalizeClear,
    },
    clip: {
        className: { dev: 'clip', prod: 'cl' },
        normalize: normalizeClip,
    },
    clipPath: {
        className: { dev: 'clip-path', prod: 'clp' },
        normalize: normalizeClipPath,
    },
    color: {
        className: { dev: 'color', prod: 'c' },
        normalize: normalizeColor,
    },
    colorInterpolation: {
        className: { dev: 'color-interpolation', prod: 'ci' },
        normalize: normalizeColorInterpolation,
    },
    colorInterpolationFilters: {
        className: { dev: 'color-interpolation-filters', prod: 'cif' },
        normalize: normalizeColorInterpolationFilters,
    },
    colorScheme: {
        className: { dev: 'color-scheme', prod: 'cs' },
        normalize: normalizeColorScheme,
    },
    columnCount: {
        className: { dev: 'column-count', prod: 'cc' },
        normalize: normalizeColumnCount,
    },
    columnFill: {
        className: { dev: 'column-fill', prod: 'cf' },
        normalize: normalizeColumnFill,
    },
    columnGap: {
        className: { dev: 'column-gap', prod: 'cg' },
        normalize: normalizeColumnGap,
    },
    columnRule: {
        className: { dev: 'column-rule', prod: 'cr' },
        normalize: normalizeColumnRule,
    },
    columnSpan: {
        className: { dev: 'column-span', prod: 'csp' },
        normalize: normalizeColumnSpan,
    },
    columnWidth: {
        className: { dev: 'column-width', prod: 'cw' },
        normalize: normalizeColumnWidth,
    },
    contain: {
        className: { dev: 'contain', prod: 'ctn' },
        normalize: normalizeContain,
    },
    containIntrinsicBlockSize: {
        className: { dev: 'contain-intrinsic-block-size', prod: 'cib' },
        normalize: normalizeContainIntrinsicBlockSize,
    },
    containIntrinsicHeight: {
        className: { dev: 'contain-intrinsic-height', prod: 'cih' },
        normalize: normalizeContainIntrinsicHeight,
    },
    containIntrinsicInlineSize: {
        className: { dev: 'contain-intrinsic-inline-size', prod: 'ciis' },
        normalize: normalizeContainIntrinsicInlineSize,
    },
    containIntrinsicSize: {
        className: { dev: 'contain-intrinsic-size', prod: 'cis' },
        normalize: normalizeContainIntrinsicSize,
    },
    containIntrinsicWidth: {
        className: { dev: 'contain-intrinsic-width', prod: 'ciw' },
        normalize: normalizeContainIntrinsicWidth,
    },
    container: {
        className: { dev: 'container', prod: 'cn' },
        normalize: normalizeContainer,
    },
    content: {
        className: { dev: 'content', prod: 'cnt' },
        normalize: normalizeContent,
    },
    contentVisibility: {
        className: { dev: 'content-visibility', prod: 'cv' },
        normalize: normalizeContentVisibility,
    },
    counterIncrement: {
        className: { dev: 'counter-increment', prod: 'cin' },
        normalize: normalizeCounterIncrement,
    },
    counterReset: {
        className: { dev: 'counter-reset', prod: 'cre' },
        normalize: normalizeCounterReset,
    },
    counterSet: {
        className: { dev: 'counter-set', prod: 'cse' },
        normalize: normalizeCounterSet,
    },
    cursor: {
        className: { dev: 'cursor', prod: 'cur' },
        normalize: normalizeCursor,
    },
    cx: {
        className: { dev: 'cx', prod: 'cx' },
        normalize: normalizeCx,
    },
    cy: {
        className: { dev: 'cy', prod: 'cy' },
        normalize: normalizeCy,
    },
    d: {
        className: { dev: 'd', prod: 'd' },
        normalize: normalizeD,
    },
    direction: {
        className: { dev: 'direction', prod: 'dir' },
        normalize: normalizeDirection,
    },
    dominantBaseline: {
        className: { dev: 'dominant-baseline', prod: 'db' },
        normalize: normalizeDominantBaseline,
    },
    emptyCells: {
        className: { dev: 'empty-cells', prod: 'ec' },
        normalize: normalizeEmptyCells,
    },
    display: {
        className: { dev: 'display', prod: 'ds' },
        normalize: normalizeDisplay,
    },
    flex: {
        className: { dev: 'flex', prod: 'fx' },
        normalize: normalizeFlex,
    },
    flexBasis: {
        className: { dev: 'flex-basis', prod: 'fb' },
        normalize: normalizeFlexBasis,
    },
    flexDirection: {
        className: { dev: 'flex-direction', prod: 'fd' },
        normalize: normalizeFlexDirection,
    },
    flexGrow: {
        className: { dev: 'flex-grow', prod: 'fg' },
        normalize: normalizeFlexGrow,
    },
    flexShrink: {
        className: { dev: 'flex-shrink', prod: 'fs' },
        normalize: normalizeFlexShrink,
    },
    flexWrap: {
        className: { dev: 'flex-wrap', prod: 'fw' },
        normalize: normalizeFlexWrap,
    },
    fieldSizing: {
        className: { dev: 'field-sizing', prod: 'fz' },
        normalize: normalizeFieldSizing,
    },
    fill: {
        className: { dev: 'fill', prod: 'fl' },
        normalize: normalizeFill,
    },
    fillOpacity: {
        className: { dev: 'fill-opacity', prod: 'fop' },
        normalize: normalizeFillOpacity,
    },
    fillRule: {
        className: { dev: 'fill-rule', prod: 'fr' },
        normalize: normalizeFillRule,
    },
    filter: {
        className: { dev: 'filter', prod: 'fil' },
        normalize: normalizeFilter,
    },
    float: {
        className: { dev: 'float', prod: 'flo' },
        normalize: normalizeFloat,
    },
    floodColor: {
        className: { dev: 'flood-color', prod: 'fc' },
        normalize: normalizeFloodColor,
    },
    floodOpacity: {
        className: { dev: 'flood-opacity', prod: 'fo' },
        normalize: normalizeFloodOpacity,
    },
    font: {
        className: { dev: 'font', prod: 'fnt' },
        normalize: normalizeFont,
    },
    fontFeatureSettings: {
        className: { dev: 'font-feature-settings', prod: 'ffs' },
        normalize: normalizeFontFeatureSettings,
    },
    fontKerning: {
        className: { dev: 'font-kerning', prod: 'fk' },
        normalize: normalizeFontKerning,
    },
    fontLanguageOverride: {
        className: { dev: 'font-language-override', prod: 'flov' },
        normalize: normalizeFontLanguageOverride,
    },
    fontOpticalSizing: {
        className: { dev: 'font-optical-sizing', prod: 'fos' },
        normalize: normalizeFontOpticalSizing,
    },
    fontPalette: {
        className: { dev: 'font-palette', prod: 'fp' },
        normalize: normalizeFontPalette,
    },
    fontSizeAdjust: {
        className: { dev: 'font-size-adjust', prod: 'fsa' },
        normalize: normalizeFontSizeAdjust,
    },
    fontSynthesisSmallCaps: {
        className: { dev: 'font-synthesis-small-caps', prod: 'fssc' },
        normalize: normalizeFontSynthesisSmallCaps,
    },
    fontSynthesisStyle: {
        className: { dev: 'font-synthesis-style', prod: 'fss' },
        normalize: normalizeFontSynthesisStyle,
    },
    fontSynthesisWeight: {
        className: { dev: 'font-synthesis-weight', prod: 'fsw' },
        normalize: normalizeFontSynthesisWeight,
    },
    fontVariantAlternates: {
        className: { dev: 'font-variant-alternates', prod: 'fva' },
        normalize: normalizeFontVariantAlternates,
    },
    fontVariantCaps: {
        className: { dev: 'font-variant-caps', prod: 'fvc' },
        normalize: normalizeFontVariantCaps,
    },
    fontVariantEastAsian: {
        className: { dev: 'font-variant-east-asian', prod: 'fvea' },
        normalize: normalizeFontVariantEastAsian,
    },
    fontVariantLigatures: {
        className: { dev: 'font-variant-ligatures', prod: 'fvl' },
        normalize: normalizeFontVariantLigatures,
    },
    fontVariantNumeric: {
        className: { dev: 'font-variant-numeric', prod: 'fvn' },
        normalize: normalizeFontVariantNumeric,
    },
    fontVariantPosition: {
        className: { dev: 'font-variant-position', prod: 'fvp' },
        normalize: normalizeFontVariantPosition,
    },
    fontVariationSettings: {
        className: { dev: 'font-variation-settings', prod: 'fvs' },
        normalize: normalizeFontVariationSettings,
    },
    forcedColorAdjust: {
        className: { dev: 'forced-color-adjust', prod: 'fca' },
        normalize: normalizeForcedColorAdjust,
    },
    gap: {
        className: { dev: 'gap', prod: 'gp' },
        normalize: normalizeGap,
    },
    gridAutoColumns: {
        className: { dev: 'grid-auto-columns', prod: 'gac' },
        normalize: normalizeGridAutoColumns,
    },
    gridAutoFlow: {
        className: { dev: 'grid-auto-flow', prod: 'gaf' },
        normalize: normalizeGridAutoFlow,
    },
    gridAutoRows: {
        className: { dev: 'grid-auto-rows', prod: 'gar' },
        normalize: normalizeGridAutoRows,
    },
    gridColumn: {
        className: { dev: 'grid-column', prod: 'gc' },
        normalize: normalizeGridColumn,
    },
    gridRow: {
        className: { dev: 'grid-row', prod: 'gr' },
        normalize: normalizeGridRow,
    },
    gridTemplate: {
        className: { dev: 'grid-template', prod: 'gt' },
        normalize: normalizeGridTemplate,
    },
    gridTemplateAreas: {
        className: { dev: 'grid-template-areas', prod: 'gta' },
        normalize: normalizeGridTemplateAreas,
    },
    height: {
        className: { dev: 'height', prod: 'h' },
        normalize: normalizeHeight,
    },
    hyphenateCharacter: {
        className: { dev: 'hyphenate-character', prod: 'hc' },
        normalize: normalizeHyphenateCharacter,
    },
    hyphens: {
        className: { dev: 'hyphens', prod: 'hy' },
        normalize: normalizeHyphens,
    },
    imageOrientation: {
        className: { dev: 'image-orientation', prod: 'io' },
        normalize: normalizeImageOrientation,
    },
    imageRendering: {
        className: { dev: 'image-rendering', prod: 'ir' },
        normalize: normalizeImageRendering,
    },
    inlineSize: {
        className: { dev: 'inline-size', prod: 'is' },
        normalize: normalizeInlineSize,
    },
    inset: {
        className: { dev: 'inset', prod: 'i' },
        normalize: normalizeInset,
    },
    insetBlock: {
        className: { dev: 'inset-block', prod: 'ib' },
        normalize: normalizeInsetBlock,
    },
    insetInline: {
        className: { dev: 'inset-inline', prod: 'ii' },
        normalize: normalizeInsetInline,
    },
    isolation: {
        className: { dev: 'isolation', prod: 'iso' },
        normalize: normalizeIsolation,
    },
    justifyContent: {
        className: { dev: 'justify-content', prod: 'jc' },
        normalize: normalizeJustifyContent,
    },
    justifyItems: {
        className: { dev: 'justify-items', prod: 'ji' },
        normalize: normalizeJustifyItems,
    },
    justifySelf: {
        className: { dev: 'justify-self', prod: 'js' },
        normalize: normalizeJustifySelf,
    },
    left: {
        className: { dev: 'left', prod: 'lf' },
        normalize: normalizeLeft,
    },
    right: {
        className: { dev: 'right', prod: 'rt' },
        normalize: normalizeRight,
    },
    top: {
        className: { dev: 'top', prod: 'tp' },
        normalize: normalizeTop,
    },
    letterSpacing: {
        className: { dev: 'letter-spacing', prod: 'ls' },
        normalize: normalizeLetterSpacing,
    },
    lightingColor: {
        className: { dev: 'lighting-color', prod: 'lc' },
        normalize: normalizeLightingColor,
    },
    lineBreak: {
        className: { dev: 'line-break', prod: 'lb' },
        normalize: normalizeLineBreak,
    },
    lineHeight: {
        className: { dev: 'line-height', prod: 'lh' },
        normalize: normalizeLineHeight,
    },
    listStyle: {
        className: { dev: 'list-style', prod: 'ls' },
        normalize: normalizeListStyle,
    },
    marginBlock: {
        className: { dev: 'margin-block', prod: 'mb' },
        normalize: normalizeMarginBlock,
    },
    marginInline: {
        className: { dev: 'margin-inline', prod: 'mi' },
        normalize: normalizeMarginInline,
    },
    mask: {
        className: { dev: 'mask', prod: 'mk' },
        normalize: normalizeMask,
    },
    maskClip: {
        className: { dev: 'mask-clip', prod: 'mc' },
        normalize: normalizeMaskClip,
    },
    mathStyle: {
        className: { dev: 'math-style', prod: 'ms' },
        normalize: normalizeMathStyle,
    },
    maxBlockSize: {
        className: { dev: 'max-block-size', prod: 'mbs' },
        normalize: normalizeMaxBlockSize,
    },
    maxHeight: {
        className: { dev: 'max-height', prod: 'mh' },
        normalize: normalizeMaxHeight,
    },
    maxInlineSize: {
        className: { dev: 'max-inline-size', prod: 'mis' },
        normalize: normalizeMaxInlineSize,
    },
    maxWidth: {
        className: { dev: 'max-width', prod: 'mw' },
        normalize: normalizeMaxWidth,
    },
};
