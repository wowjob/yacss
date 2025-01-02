import type { TBorder, TBorderWidth, TMargin, TPadding } from '../type';
export type TEnv = 'dev' | 'prod';
export type TCSSPropValue = Partial<{
    margin: TMargin;
    padding: TPadding;
    border: TBorder;
    borderWidth: TBorderWidth;
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
