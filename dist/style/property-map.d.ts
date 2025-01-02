import type { TBorder, TBorderWidth, TMargin, TPadding } from '../type';
import type { TBorderStyle } from '../type/border';
export type TEnv = 'dev' | 'prod';
export type TCSSPropValue = Partial<{
    margin: TMargin;
    padding: TPadding;
    border: TBorder;
    borderWidth: TBorderWidth;
    borderStyle: TBorderStyle | TBorderStyle[];
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
