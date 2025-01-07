import type { TOverflow } from '../../type';
export declare const normalizeOverflow: (value: TOverflow) => string | ({
    x?: "visible" | "hidden" | "clip" | "scroll" | "auto";
    y?: "visible" | "hidden" | "clip" | "scroll" | "auto";
} & any[]);
