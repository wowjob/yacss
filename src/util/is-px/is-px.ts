// src/util/is-px.ts
export const isPx = (value: string): boolean => /^[\d.]+px$/.test(value)
