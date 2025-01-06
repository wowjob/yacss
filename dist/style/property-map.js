import { normalizeAccentColor, normalizeAlignContent, normalizeAlignItems, normalizeAlignSelf, normalizeAnimation, normalizeAppearance, normalizeAspectRatio, normalizeBackdropFilter, normalizeBackfaceVisibility, normalizeBackground, normalizeBackgroundBlendMode, normalizeBackgroundClip, normalizeBackgroundOrigin, normalizeBlockSize, normalizeBorder, normalizeBorderBlock, normalizeBorderBlockEnd, normalizeBorderBlockStart, normalizeBorderBottom, normalizeBorderBottomLeftRadius, normalizeBorderBottomRightRadius, normalizeBorderCollapse, normalizeBorderEndEndRadius, normalizeBorderEndStartRadius, normalizeBorderImage, normalizeBorderInlineEnd, normalizeBorderInlineStart, normalizeBorderLeft, normalizeBorderRadius, normalizeBorderRight, normalizeBorderStartEndRadius, normalizeBorderStartStartRadius, normalizeBorderStyle, normalizeBorderTop, normalizeBorderTopLeftRadius, normalizeBorderTopRightRadius, normalizeBorderWidth, normalizeBoxShadow, normalizeBoxSizing, normalizeBreakAfter, normalizeBreakBefore, normalizeBreakInside, normalizeCaptionSide, normalizeCaretColor, normalizeClear, normalizeClip, normalizeClipPath, normalizeColor, normalizeColorInterpolation, normalizeColorInterpolationFilters, normalizeColorScheme, normalizeColumnCount, normalizeColumnFill, normalizeColumnGap, normalizeColumnRule, normalizeColumnSpan, normalizeColumnWidth, normalizeContain, normalizeContainer, normalizeContainIntrinsicBlockSize, normalizeContainIntrinsicHeight, normalizeContainIntrinsicInlineSize, normalizeContainIntrinsicSize, normalizeContainIntrinsicWidth, normalizeContent, normalizeContentVisibility, normalizeCounterIncrement, normalizeCounterReset, normalizeCounterSet, normalizeCursor, normalizeCx, normalizeCy, normalizeD, normalizeDisplay, normalizeFlex, normalizeFlexBasis, normalizeFlexDirection, normalizeFlexGrow, normalizeFlexShrink, normalizeFlexWrap, normalizeMargin, normalizePadding, } from '../util';
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
    //
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
};
