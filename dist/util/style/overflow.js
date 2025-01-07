export const normalizeOverflow = (value) => {
    if (!value) {
        return 'visible'; // Default value
    }
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
        const { x = 'visible', y = 'visible' } = value;
        return x === y ? x : `${x} ${y}`;
    }
    return value;
};
