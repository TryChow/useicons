/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/heart.svg

import { forwardRef, type ReactElement } from 'react';
import { ZagIconBase, type IconWeight, type ZagIconProps } from '../base/IconBase';

export type HeartIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
};

const HEART_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </>
  ),
  filled: (
    <>
      <path fill="currentColor" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </>
  ),
};

/**
 * Heart icon (viewBox "0 0 24 24").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 */
export const HeartIcon = forwardRef<SVGSVGElement, HeartIconProps>(
  function HeartIcon(props, ref) {
    const { weight = 'outline', ...rest } = props;
    return (
      <ZagIconBase ref={ref} viewBox="0 0 24 24" data-weight={weight} {...rest}>
        {HEART_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);
