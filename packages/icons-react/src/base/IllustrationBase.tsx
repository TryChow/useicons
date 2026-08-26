import { forwardRef, type SVGProps } from 'react';

export interface ZagIllustrationProps extends SVGProps<SVGSVGElement> {
  /** Rendered width. Intrinsic view-box aspect ratio is preserved. */
  width?: number | string;
  /** Rendered height. Intrinsic view-box aspect ratio is preserved. */
  height?: number | string;
}

export interface ZagIllustrationBaseProps extends ZagIllustrationProps {
  /** View box copied from the source SVG at generation time. */
  viewBox: string;
}

/**
 * ForwardRef wrapper around `<svg>` shared by every generated illustration.
 * Unlike {@link ZagIconBase} it never tints the artwork: original fills,
 * strokes and gradients are preserved.
 */
export const ZagIllustrationBase = forwardRef<SVGSVGElement, ZagIllustrationBaseProps>(
  function ZagIllustrationBase(props, ref) {
    const { viewBox, className, children, ...rest } = props;

    const accessible =
      rest['aria-label'] !== undefined ||
      rest['aria-labelledby'] !== undefined ||
      'title' in props;

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        role="img"
        aria-hidden={accessible ? undefined : true}
        focusable={false}
        className={
          className ? `zag-illustration ${className}` : 'zag-illustration'
        }
        {...rest}
      >
        {children}
      </svg>
    );
  },
);
