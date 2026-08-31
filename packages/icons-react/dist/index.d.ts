import * as react from 'react';
import { SVGProps } from 'react';

/** Visual weight variants available for every Zag icon. */
type IconWeight = 'outline' | 'filled';
interface ZagIconProps extends SVGProps<SVGSVGElement> {
    /** Rendered width and height in px (any CSS length is also accepted). Defaults to `24`. */
    size?: number | string;
    /**
     * Color applied to the glyph. Defaults to `currentColor`, so icons inherit
     * the surrounding text color automatically.
     */
    color?: string;
}
interface ZagIconBaseProps extends ZagIconProps {
    /** View box copied from the source SVG at generation time. */
    viewBox: string;
}
/**
 * ForwardRef wrapper around `<svg>` shared by every generated icon.
 * Normalizes size, color, accessibility defaults and class names.
 */
declare const ZagIconBase: react.ForwardRefExoticComponent<Omit<ZagIconBaseProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

interface ZagIllustrationProps extends SVGProps<SVGSVGElement> {
    /** Rendered width. Intrinsic view-box aspect ratio is preserved. */
    width?: number | string;
    /** Rendered height. Intrinsic view-box aspect ratio is preserved. */
    height?: number | string;
}
interface ZagIllustrationBaseProps extends ZagIllustrationProps {
    /** View box copied from the source SVG at generation time. */
    viewBox: string;
}
/**
 * ForwardRef wrapper around `<svg>` shared by every generated illustration.
 * Unlike {@link ZagIconBase} it never tints the artwork: original fills,
 * strokes and gradients are preserved.
 */
declare const ZagIllustrationBase: react.ForwardRefExoticComponent<Omit<ZagIllustrationBaseProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type HeartIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
};
/**
 * Heart icon (viewBox "0 0 24 24").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 */
declare const HeartIcon: react.ForwardRefExoticComponent<Omit<HeartIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type HomeIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
};
/**
 * Home icon (viewBox "0 0 24 24").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 */
declare const HomeIcon: react.ForwardRefExoticComponent<Omit<HomeIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type EmptyStateProps = ZagIllustrationProps;
/**
 * EmptyState illustration (viewBox "0 0 240 180").
 * Original multi-color fills and gradients are preserved.
 */
declare const EmptyState: react.ForwardRefExoticComponent<Omit<ZagIllustrationProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export { EmptyState, type EmptyStateProps, HeartIcon, type HeartIconProps, HomeIcon, type HomeIconProps, type IconWeight, ZagIconBase, type ZagIconBaseProps, type ZagIconProps, ZagIllustrationBase, type ZagIllustrationBaseProps, type ZagIllustrationProps };
