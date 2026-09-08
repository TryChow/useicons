import { forwardRef, type SVGProps } from 'react';

/** Visual weight variants available for every Zag icon. */
export type IconWeight = 'outline' | 'filled';

export interface ZagIconProps extends SVGProps<SVGSVGElement> {
  /** Rendered width and height in px (any CSS length is also accepted). Defaults to `24`. */
  size?: number | string;
  /**
   * Color applied to the glyph. Defaults to `currentColor`, so icons inherit
   * the surrounding text color automatically.
   */
  color?: string;
}

export interface ZagIconBaseProps extends ZagIconProps {
  /** View box copied from the source SVG at generation time. */
  viewBox: string;
}

const DEFAULT_ICON_SIZE = 24;

/**
 * ForwardRef wrapper around `<svg>` shared by every generated icon.
 * Normalizes size, color, accessibility defaults and class names.
 */
export const ZagIconBase = forwardRef<SVGSVGElement, ZagIconBaseProps>(
  function ZagIconBase(props, ref) {
    const {
      size = DEFAULT_ICON_SIZE,
      color = 'currentColor',
      fill = 'none',
      viewBox,
      className,
      children,
      ...rest
    } = props;

    const accessible =
      rest['aria-label'] !== undefined ||
      rest['aria-labelledby'] !== undefined ||
      'title' in props;

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={size}
        height={size}
        color={color}
        fill={fill}
        focusable={false}
        aria-hidden={accessible ? undefined : true}
        className={className ? `zag-icon ${className}` : 'zag-icon'}
        {...rest}
      >
        {children}
      </svg>
    );
  },
);
