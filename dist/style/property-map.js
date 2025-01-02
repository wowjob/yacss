import { normalizeMargin, normalizePadding, normalizeBorder, normalizeBorderWidth, } from '../util';
// Define a mapping of keys to their respective normalizer functions
export const propertyMap = {
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
    borderWidth: {
        className: { dev: 'border-width', prod: 'bw' },
        normalize: normalizeBorderWidth,
    },
};
