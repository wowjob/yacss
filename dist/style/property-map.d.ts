import type { TBorder, TBorderWidth, TDisplay, TFlex, TFlexDirection, TMargin, TPadding, TBorderStyle, TFlexBasis, TFlexGrow, TFlexShrink, TFlexWrap, TAnimation, TBackground, TBorderImage, TBorderBlockStart, TBorderBlockEnd, TBorderBlock, TBorderInlineStart, TBorderInlineEnd, TBorderInline, TBorderRadius, TBorderBottom, TBorderBottomLeftRadius, TBorderBottomRightRadius, TBorderCollapse, TBorderEndEndRadius, TBorderEndStartRadius, TBorderTop, TBorderTopLeftRadius, TBorderTopRightRadius, TBorderLeft, TBorderRight, TBorderStartEndRadius, TBorderStartStartRadius, TBlockSize, TAspectRatio, TAppearance, TAccentColor, TAlignContent, TAlignItems, TAlignSelf, TBackdropFilter, TBackfaceVisibility, TBackgroundBlendMode, TBackgroundClip, TBackgroundOrigin, TBoxShadow, TBoxSizing, TBreakAfter, TBreakBefore, TBreakInside, TCaptionSide, TCaretColor, TClear, TClip, TClipPath, TColor, TColorInterpolation, TColorInterpolationFilters, TColorScheme, TColumnCount, TColumnFill, TColumnGap, TColumnRule, TColumnSpan, TColumnWidth, TContain, TContainIntrinsicBlockSize, TContainIntrinsicHeight, TContainIntrinsicInlineSize, TContainIntrinsicSize, TContainIntrinsicWidth, TContainer, TContent, TContentVisibility, TCounterIncrement, TCounterReset, TCounterSet, TCursor, TCx, TCy, TD, TDirection, TDominantBaseline, TEmptyCells, TFieldSizing, TFill, TFillOpacity, TFillRule, TFilter, TFloat, TFloodColor, TFloodOpacity, TFont, TFontFeatureSettings, TFontKerning, TFontLanguageOverride, TFontOpticalSizing, TFontPalette, TFontSizeAdjust, TFontSynthesisSmallCaps, TFontSynthesisStyle, TFontSynthesisWeight, TFontVariantAlternates, TFontVariantCaps, TFontVariantEastAsian, TFontVariantLigatures, TFontVariantNumeric, TFontVariantPosition, TFontVariationSettings, TForcedColorAdjust, TGap, TGridAutoColumns, TGridAutoFlow, TGridAutoRows, TGridColumn, TGridRow, TGridTemplate, TGridTemplateAreas, THeight, THyphenateCharacter, THyphens, TImageOrientation, TImageRendering, TInlineSize, TInset, TInsetBlock, TInsetInline, TIsolation, TJustifyContent, TJustifyItems, TJustifySelf, TBottom, TLeft, TRight, TTop, TLetterSpacing, TLightingColor, TLineBreak, TLineHeight, TListStyle, TMarginBlock, TMarginInline, TMaskClip, TMask, TMathStyle, TMaxBlockSize, TMaxHeight, TMaxInlineSize, TMaxWidth, TMinBlockSize, TMinHeight, TMinInlineSize, TMinWidth, TMixBlendMode, TObjectFit, TObjectPosition, TOffsetAnchor, TOffset, TOpacity, TOrder, TOutlineOffset, TOutline, TOverflow, TOverscrollBehavior, TOverscrollBehaviorBlock, TOverscrollBehaviorInline, TPerspective, TPerspectiveOrigin, TPlaceContent, TPlaceItems, TPlaceSelf, TPointerEvents, TPosition, TQuotes, TResize, TRotate, TRubyAlign, TRubyPosition, TScale, TScrollMargin, TScrollPadding, TScrollBehavior, TScrollSnapAlign, TScrollSnapStop, TScrollSnapType, TScrollTimeline, TScrollTimelineAxis, TScrollTimelineName, TScrollbarColor, TScrollbarGutter, TScrollbarWidth, TShapeImageThreshold, TShapeMargin, TShapeOutside, TShapeRendering, TStopColor, TStopOpacity, TStroke, TStrokeDasharray, TStrokeDashoffset, TStrokeLinecap, TStrokeLinejoin, TStrokeMiterlimit, TStrokeOpacity, TStrokeWidth, TTabSize } from '../type';
export type TEnv = 'dev' | 'prod';
export type TCSSPropValue = Partial<{
    accentColor: TAccentColor;
    alignContent: TAlignContent;
    alignItems: TAlignItems;
    alignSelf: TAlignSelf;
    animation: TAnimation;
    appearance: TAppearance;
    aspectRatio: TAspectRatio;
    backdropFilter: TBackdropFilter;
    backfaceVisibility: TBackfaceVisibility;
    background: TBackground;
    backgroundBlendMode: TBackgroundBlendMode;
    backgroundClip: TBackgroundClip;
    backgroundOrigin: TBackgroundOrigin;
    blockSize: TBlockSize;
    border: TBorder;
    borderBlock: TBorderBlock;
    borderBlockStart: TBorderBlockStart;
    borderBlockEnd: TBorderBlockEnd;
    borderBottom: TBorderBottom;
    borderBottomLeftRadius: TBorderBottomLeftRadius;
    borderBottomRightRadius: TBorderBottomRightRadius;
    borderCollapse: TBorderCollapse;
    borderEndEndRadius: TBorderEndEndRadius;
    borderEndStartRadius: TBorderEndStartRadius;
    borderImage: TBorderImage;
    borderInline: TBorderInline;
    borderInlineStart: TBorderInlineStart;
    borderInlineEnd: TBorderInlineEnd;
    borderLeft: TBorderLeft;
    borderRadius: TBorderRadius;
    borderRight: TBorderRight;
    borderWidth: TBorderWidth;
    borderStyle: TBorderStyle | TBorderStyle[];
    borderStartEndRadius: TBorderStartEndRadius;
    borderStartStartRadius: TBorderStartStartRadius;
    borderTop: TBorderTop;
    borderTopLeftRadius: TBorderTopLeftRadius;
    borderTopRightRadius: TBorderTopRightRadius;
    bottom: TBottom;
    display: TDisplay;
    boxShadow: TBoxShadow;
    boxSizing: TBoxSizing;
    breakAfter: TBreakAfter;
    breakBefore: TBreakBefore;
    breakInside: TBreakInside;
    captionSide: TCaptionSide;
    caretColor: TCaretColor;
    clear: TClear;
    clip: TClip;
    clipPath: TClipPath;
    color: TColor;
    colorInterpolation: TColorInterpolation;
    colorInterpolationFilters: TColorInterpolationFilters;
    colorScheme: TColorScheme;
    columnCount: TColumnCount;
    columnFill: TColumnFill;
    columnGap: TColumnGap;
    columnRule: TColumnRule;
    columnSpan: TColumnSpan;
    columnWidth: TColumnWidth;
    contain: TContain;
    containIntrinsicBlockSize: TContainIntrinsicBlockSize;
    containIntrinsicHeight: TContainIntrinsicHeight;
    containIntrinsicInlineSize: TContainIntrinsicInlineSize;
    containIntrinsicSize: TContainIntrinsicSize;
    containIntrinsicWidth: TContainIntrinsicWidth;
    container: TContainer;
    content: TContent;
    contentVisibility: TContentVisibility;
    counterIncrement: TCounterIncrement;
    counterReset: TCounterReset;
    counterSet: TCounterSet;
    cursor: TCursor;
    cx: TCx;
    cy: TCy;
    d: TD;
    direction: TDirection;
    dominantBaseline: TDominantBaseline;
    emptyCells: TEmptyCells;
    flex: TFlex;
    flexBasis: TFlexBasis;
    flexDirection: TFlexDirection;
    flexGrow: TFlexGrow;
    flexShrink: TFlexShrink;
    flexWrap: TFlexWrap;
    fieldSizing: TFieldSizing;
    fill: TFill;
    fillOpacity: TFillOpacity;
    fillRule: TFillRule;
    filter: TFilter;
    float: TFloat;
    floodColor: TFloodColor;
    floodOpacity: TFloodOpacity;
    font: TFont;
    fontFeatureSettings: TFontFeatureSettings;
    fontKerning: TFontKerning;
    fontLanguageOverride: TFontLanguageOverride;
    fontOpticalSizing: TFontOpticalSizing;
    fontPalette: TFontPalette;
    fontSizeAdjust: TFontSizeAdjust;
    fontSynthesisSmallCaps: TFontSynthesisSmallCaps;
    fontSynthesisStyle: TFontSynthesisStyle;
    fontSynthesisWeight: TFontSynthesisWeight;
    fontVariantAlternates: TFontVariantAlternates;
    fontVariantCaps: TFontVariantCaps;
    fontVariantEastAsian: TFontVariantEastAsian;
    fontVariantLigatures: TFontVariantLigatures;
    fontVariantNumeric: TFontVariantNumeric;
    fontVariantPosition: TFontVariantPosition;
    fontVariationSettings: TFontVariationSettings;
    forcedColorAdjust: TForcedColorAdjust;
    gap: TGap;
    gridAutoColumns: TGridAutoColumns;
    gridAutoFlow: TGridAutoFlow;
    gridAutoRows: TGridAutoRows;
    gridColumn: TGridColumn;
    gridRow: TGridRow;
    gridTemplate: TGridTemplate;
    gridTemplateAreas: TGridTemplateAreas;
    height: THeight;
    hyphenateCharacter: THyphenateCharacter;
    hyphens: THyphens;
    imageOrientation: TImageOrientation;
    imageRendering: TImageRendering;
    inlineSize: TInlineSize;
    inset: TInset;
    insetBlock: TInsetBlock;
    insetInline: TInsetInline;
    isolation: TIsolation;
    justifyContent: TJustifyContent;
    justifyItems: TJustifyItems;
    justifySelf: TJustifySelf;
    left: TLeft;
    right: TRight;
    top: TTop;
    letterSpacing: TLetterSpacing;
    lightingColor: TLightingColor;
    lineBreak: TLineBreak;
    lineHeight: TLineHeight;
    listStyle: TListStyle;
    margin: TMargin;
    marginBlock: TMarginBlock;
    marginInline: TMarginInline;
    mask: TMask;
    maskClip: TMaskClip;
    mathStyle: TMathStyle;
    maxBlockSize: TMaxBlockSize;
    maxHeight: TMaxHeight;
    maxInlineSize: TMaxInlineSize;
    maxWidth: TMaxWidth;
    minBlockSize: TMinBlockSize;
    minHeight: TMinHeight;
    minInlineSize: TMinInlineSize;
    minWidth: TMinWidth;
    mixBlendMode: TMixBlendMode;
    objectFit: TObjectFit;
    objectPosition: TObjectPosition;
    offset: TOffset;
    offsetAnchor: TOffsetAnchor;
    opacity: TOpacity;
    order: TOrder;
    outline: TOutline;
    outlineOffset: TOutlineOffset;
    overflow: TOverflow;
    overscrollBehavior: TOverscrollBehavior;
    overscrollBehaviorBlock: TOverscrollBehaviorBlock;
    overscrollBehaviorInline: TOverscrollBehaviorInline;
    padding: TPadding;
    perspective: TPerspective;
    perspectiveOrigin: TPerspectiveOrigin;
    placeContent: TPlaceContent;
    placeItems: TPlaceItems;
    placeSelf: TPlaceSelf;
    pointerEvents: TPointerEvents;
    position: TPosition;
    quotes: TQuotes;
    resize: TResize;
    rotate: TRotate;
    rubyAlign: TRubyAlign;
    rubyPosition: TRubyPosition;
    scale: TScale;
    scrollBehavior: TScrollBehavior;
    scrollMargin: TScrollMargin;
    scrollPadding: TScrollPadding;
    scrollSnapAlign: TScrollSnapAlign;
    scrollSnapStop: TScrollSnapStop;
    scrollSnapType: TScrollSnapType;
    scrollTimeline: TScrollTimeline;
    scrollTimelineAxis: TScrollTimelineAxis;
    scrollTimelineName: TScrollTimelineName;
    scrollbarColor: TScrollbarColor;
    scrollbarGutter: TScrollbarGutter;
    scrollbarWidth: TScrollbarWidth;
    shapeImageThreshold: TShapeImageThreshold;
    shapeMargin: TShapeMargin;
    shapeOutside: TShapeOutside;
    shapeRendering: TShapeRendering;
    stopColor: TStopColor;
    stopOpacity: TStopOpacity;
    stroke: TStroke;
    strokeDasharray: TStrokeDasharray;
    strokeDashoffset: TStrokeDashoffset;
    strokeLinecap: TStrokeLinecap;
    strokeLinejoin: TStrokeLinejoin;
    strokeMiterlimit: TStrokeMiterlimit;
    strokeOpacity: TStrokeOpacity;
    strokeWidth: TStrokeWidth;
    tabSize: TTabSize;
}>;
type TResponsive = {
    mobile?: TCSSPropValue;
    tablet?: TCSSPropValue;
    desktop?: TCSSPropValue;
    className?: string;
};
export type TStyle = {
    className?: string;
    env?: TEnv;
} & TResponsive;
export declare const propertyMap: Record<keyof TCSSPropValue, {
    className: Record<TEnv, string>;
    normalize: (value: any) => string | number;
}>;
export {};
