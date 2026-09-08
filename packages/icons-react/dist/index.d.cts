import * as react from 'react';
import { SVGProps, HTMLAttributes, ReactNode } from 'react';
import { useAnimation, Variants, Transition } from 'motion/react';

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

type AnimationControls = ReturnType<typeof useAnimation>;
/**
 * Imperative animation handle exposed by all animated icons.
 * Allows programmatic control over icon animations via ref.
 */
interface AnimatedIconHandle {
    /** Trigger the animated state of the icon. */
    startAnimation: () => void;
    /** Reset the icon animation back to its normal/idle state. */
    stopAnimation: () => void;
}
/**
 * Props accepted by all animated Zag icons.
 */
interface ZagAnimatedIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
    /** Rendered width and height in px (any CSS length is also accepted). Defaults to `24`. */
    size?: number | string;
    /**
     * Color applied to the glyph. Defaults to `currentColor`, so icons inherit
     * the surrounding text color automatically.
     */
    color?: string;
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
}
interface ZagAnimatedIconWrapperProps extends ZagAnimatedIconProps {
    children: ReactNode;
    onMouseEnter?: React.MouseEventHandler<HTMLSpanElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>;
}
interface UseAnimatedIconHandleReturn {
    controls: AnimationControls;
    handleMouseEnter: (e: React.MouseEvent<HTMLSpanElement>) => void;
    handleMouseLeave: (e: React.MouseEvent<HTMLSpanElement>) => void;
}
/**
 * Custom hook encapsulating animation controller lifecycle, imperative ref binding,
 * and mouse hover triggers for animated icons.
 */
declare function useAnimatedIconLifecycle(ref: React.ForwardedRef<AnimatedIconHandle>, onMouseEnter?: React.MouseEventHandler<HTMLSpanElement>, onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>): UseAnimatedIconHandleReturn;
interface ZagAnimatedIconContainerProps extends ZagAnimatedIconProps {
    handleMouseEnter?: React.MouseEventHandler<HTMLSpanElement>;
    handleMouseLeave?: React.MouseEventHandler<HTMLSpanElement>;
    children: ReactNode;
}
/**
 * Span wrapper that manages layout, accessibility and interaction bounds for animated icons.
 */
declare const ZagAnimatedIconContainer: react.ForwardRefExoticComponent<ZagAnimatedIconContainerProps & react.RefAttributes<HTMLSpanElement>>;

/**
 * Standard path-drawing transition used by line/door drawing animations,
 * inspired by pqoqubbw/icons.
 */
declare const DEFAULT_PATH_TRANSITION: Transition;
declare const HOME_DEFAULT_TRANSITION: Transition;
/**
 * Path drawing variant that animates pathLength and opacity from 0 to 1.
 */
declare const PATH_DRAW_VARIANTS: Variants;
declare const HOME_PATH_VARIANTS: Variants;
/**
 * Default smooth spring pulse variant used when an icon does not have
 * a dedicated custom animation.
 */
declare const DEFAULT_ANIMATION_VARIANTS: Variants;
/**
 * Heartbeat pulse animation variant, inspired by pqoqubbw/icons heart icon.
 */
declare const HEART_ANIMATION_VARIANTS: Variants;
/**
 * Home animation variant matching reference repo door drawing interaction.
 */
declare const HOME_ANIMATION_VARIANTS: Variants;
/**
 * Registry of custom animation variants per icon stem.
 */
declare const ICON_ANIMATION_VARIANTS: Record<string, Variants>;
/**
 * Resolves the animation variants for a given icon stem.
 */
declare function getIconAnimationVariants(stem: string): Variants;

type ArrowLeftIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ArrowLeftIconHandle = AnimatedIconHandle;
type AnimatedArrowLeftIconProps = ZagAnimatedIconProps;
/**
 * Animated ArrowLeft icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedArrowLeftIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * ArrowLeft icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ArrowLeftIcon: react.ForwardRefExoticComponent<Omit<ArrowLeftIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type ArrowRightIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ArrowRightIconHandle = AnimatedIconHandle;
type AnimatedArrowRightIconProps = ZagAnimatedIconProps;
/**
 * Animated ArrowRight icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedArrowRightIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * ArrowRight icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ArrowRightIcon: react.ForwardRefExoticComponent<Omit<ArrowRightIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type HeartIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type HeartIconHandle = AnimatedIconHandle;
type AnimatedHeartIconProps = ZagAnimatedIconProps;
/**
 * Animated Heart icon (viewBox "0 0 24 24").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedHeartIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Heart icon (viewBox "0 0 24 24").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const HeartIcon: react.ForwardRefExoticComponent<Omit<HeartIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type HomeIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type HomeIconHandle = AnimatedIconHandle;
type AnimatedHomeIconProps = ZagAnimatedIconProps;
/**
 * Animated Home icon (viewBox "0 0 24 24").
 * Features hover micro-interactions and imperative control via ref.
 * Re-animates the door path drawing effect on both outline and filled weights.
 */
declare const AnimatedHomeIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Home icon (viewBox "0 0 24 24").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const HomeIcon: react.ForwardRefExoticComponent<Omit<HomeIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type EmptyStateProps = ZagIllustrationProps;
/**
 * EmptyState illustration (viewBox "0 0 240 180").
 * Original multi-color fills and gradients are preserved.
 */
declare const EmptyState: react.ForwardRefExoticComponent<Omit<ZagIllustrationProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export { AnimatedArrowLeftIcon, type AnimatedArrowLeftIconProps, AnimatedArrowRightIcon, type AnimatedArrowRightIconProps, AnimatedHeartIcon, type AnimatedHeartIconProps, AnimatedHomeIcon, type AnimatedHomeIconProps, type AnimatedIconHandle, type AnimationControls, ArrowLeftIcon, type ArrowLeftIconHandle, type ArrowLeftIconProps, ArrowRightIcon, type ArrowRightIconHandle, type ArrowRightIconProps, DEFAULT_ANIMATION_VARIANTS, DEFAULT_PATH_TRANSITION, EmptyState, type EmptyStateProps, HEART_ANIMATION_VARIANTS, HOME_ANIMATION_VARIANTS, HOME_DEFAULT_TRANSITION, HOME_PATH_VARIANTS, HeartIcon, type HeartIconHandle, type HeartIconProps, HomeIcon, type HomeIconHandle, type HomeIconProps, ICON_ANIMATION_VARIANTS, type IconWeight, PATH_DRAW_VARIANTS, type UseAnimatedIconHandleReturn, ZagAnimatedIconContainer, type ZagAnimatedIconContainerProps, type ZagAnimatedIconProps, type ZagAnimatedIconWrapperProps, ZagIconBase, type ZagIconBaseProps, type ZagIconProps, ZagIllustrationBase, type ZagIllustrationBaseProps, type ZagIllustrationProps, getIconAnimationVariants, useAnimatedIconLifecycle };
