/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/home.svg

import { forwardRef, type ReactElement } from 'react';
import { ZagIconBase, type IconWeight, type ZagIconProps } from '../base/IconBase';

export type HomeIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
};

const HOME_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10.565c0-.444.192-.866.527-1.159l7.5-6.55a1.45 1.45 0 0 1 1.946 0l7.5 6.55c.335.293.527.715.527 1.16V19.5a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-4.1a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5.5v5.1a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z" />
    </>
  ),
  filled: (
    <>
      <path fill="currentColor" d="M3 10.565c0-.444.192-.866.527-1.159l7.5-6.55a1.45 1.45 0 0 1 1.946 0l7.5 6.55c.335.293.527.715.527 1.16V19.5a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-4.1a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5.5v5.1a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z" />
    </>
  ),
};

/**
 * Home icon (viewBox "0 0 24 24").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 */
export const HomeIcon = forwardRef<SVGSVGElement, HomeIconProps>(
  function HomeIcon(props, ref) {
    const { weight = 'outline', ...rest } = props;
    return (
      <ZagIconBase ref={ref} viewBox="0 0 24 24" data-weight={weight} {...rest}>
        {HOME_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);
