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
declare const ARROW_DOWN_ANIMATION_VARIANTS: Variants;
declare const ARROW_LEFT_ANIMATION_VARIANTS: Variants;
declare const ARROW_RIGHT_ANIMATION_VARIANTS: Variants;
declare const ARROWS_DOWN_UP_ANIMATION_VARIANTS: Variants;
declare const CARET_DOWN_ANIMATION_VARIANTS: Variants;
declare const CARET_LEFT_ANIMATION_VARIANTS: Variants;
declare const CARET_RIGHT_ANIMATION_VARIANTS: Variants;
declare const CARET_UP_ANIMATION_VARIANTS: Variants;
declare const CARET_UP_DOWN_ANIMATION_VARIANTS: Variants;
declare const NAVIGATION_ARROW_ANIMATION_VARIANTS: Variants;
/**
 * Pendulum ringing swing, matching pqoqubbw/icons bell interaction.
 */
declare const BELL_ANIMATION_VARIANTS: Variants;
/**
 * Mechanical gear spin with snappy spring physics.
 */
declare const GEAR_ANIMATION_VARIANTS: Variants;
/**
 * Scanning radar loop, matching pqoqubbw/icons search interaction.
 */
declare const MAGNIFYING_GLASS_ANIMATION_VARIANTS: Variants;
/**
 * Trash bin lid shake and bounce.
 */
declare const TRASH_ANIMATION_VARIANTS: Variants;
/**
 * Offset split spring pop for clipboard copy.
 */
declare const COPY_ANIMATION_VARIANTS: Variants;
declare const SHARE_ANIMATION_VARIANTS: Variants;
declare const SIGN_OUT_ANIMATION_VARIANTS: Variants;
declare const SIDEBAR_ANIMATION_VARIANTS: Variants;
declare const DOTS_THREE_ANIMATION_VARIANTS: Variants;
declare const DOTS_THREE_VERTICAL_ANIMATION_VARIANTS: Variants;
declare const PLUS_ANIMATION_VARIANTS: Variants;
declare const MINUS_ANIMATION_VARIANTS: Variants;
declare const CHECK_ANIMATION_VARIANTS: Variants;
declare const CHECK_CIRCLE_ANIMATION_VARIANTS: Variants;
declare const SHIELD_CHECK_ANIMATION_VARIANTS: Variants;
declare const WARNING_ANIMATION_VARIANTS: Variants;
declare const INFO_ANIMATION_VARIANTS: Variants;
declare const X_ANIMATION_VARIANTS: Variants;
declare const X_CIRCLE_ANIMATION_VARIANTS: Variants;
declare const SUN_ANIMATION_VARIANTS: Variants;
declare const MOON_ANIMATION_VARIANTS: Variants;
declare const LIGHTNING_ANIMATION_VARIANTS: Variants;
declare const CLOCK_ANIMATION_VARIANTS: Variants;
declare const STAR_ANIMATION_VARIANTS: Variants;
declare const GLOBE_ANIMATION_VARIANTS: Variants;
declare const CLOUD_ARROW_UP_ANIMATION_VARIANTS: Variants;
/**
 * Heartbeat pulse animation variant, inspired by pqoqubbw/icons heart icon.
 */
declare const HEART_ANIMATION_VARIANTS: Variants;
declare const HOME_ANIMATION_VARIANTS: Variants;
declare const BOOK_OPEN_ANIMATION_VARIANTS: Variants;
declare const CALENDAR_BLANK_ANIMATION_VARIANTS: Variants;
declare const CHART_PIE_ANIMATION_VARIANTS: Variants;
declare const CHAT_CIRCLE_TEXT_ANIMATION_VARIANTS: Variants;
declare const CPU_ANIMATION_VARIANTS: Variants;
declare const CURRENCY_DOLLAR_ANIMATION_VARIANTS: Variants;
declare const DEVICE_MOBILE_ANIMATION_VARIANTS: Variants;
declare const MONITOR_ANIMATION_VARIANTS: Variants;
declare const EXCLUDE_ANIMATION_VARIANTS: Variants;
declare const FILE_CODE_ANIMATION_VARIANTS: Variants;
declare const FILE_TEXT_ANIMATION_VARIANTS: Variants;
declare const FOLDER_ANIMATION_VARIANTS: Variants;
declare const FOLDER_OPEN_ANIMATION_VARIANTS: Variants;
declare const CORNERS_OUT_ANIMATION_VARIANTS: Variants;
declare const FRAME_CORNERS_ANIMATION_VARIANTS: Variants;
declare const MAP_TRIFOLD_ANIMATION_VARIANTS: Variants;
declare const USER_ANIMATION_VARIANTS: Variants;
declare const ROBOT_ANIMATION_VARIANTS: Variants;
declare const LOGO_ANIMATION_VARIANTS: Variants;
declare const GOOGLE_LOGO_ANIMATION_VARIANTS: Variants;
declare const TEXT_A_UNDERLINE_ANIMATION_VARIANTS: Variants;
declare const TEXT_ALIGN_LEFT_ANIMATION_VARIANTS: Variants;
declare const TEXT_B_ANIMATION_VARIANTS: Variants;
declare const TEXT_ITALIC_ANIMATION_VARIANTS: Variants;
/**
 * Registry mapping icon stems to their bespoke micro-interaction variants.
 */
declare const ICON_ANIMATION_VARIANTS: Record<string, Variants>;
/**
 * Resolves the animation variants for a given icon stem.
 */
declare function getIconAnimationVariants(stem: string): Variants;

type ArrowDownIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ArrowDownIconHandle = AnimatedIconHandle;
type AnimatedArrowDownIconProps = ZagAnimatedIconProps;
/**
 * Animated ArrowDown icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedArrowDownIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * ArrowDown icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ArrowDownIcon: react.ForwardRefExoticComponent<Omit<ArrowDownIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

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

type ArrowsDownUpIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ArrowsDownUpIconHandle = AnimatedIconHandle;
type AnimatedArrowsDownUpIconProps = ZagAnimatedIconProps;
/**
 * Animated ArrowsDownUp icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedArrowsDownUpIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * ArrowsDownUp icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ArrowsDownUpIcon: react.ForwardRefExoticComponent<Omit<ArrowsDownUpIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type BellIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type BellIconHandle = AnimatedIconHandle;
type AnimatedBellIconProps = ZagAnimatedIconProps;
/**
 * Animated Bell icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedBellIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Bell icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const BellIcon: react.ForwardRefExoticComponent<Omit<BellIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type BookOpenIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type BookOpenIconHandle = AnimatedIconHandle;
type AnimatedBookOpenIconProps = ZagAnimatedIconProps;
/**
 * Animated BookOpen icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedBookOpenIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * BookOpen icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const BookOpenIcon: react.ForwardRefExoticComponent<Omit<BookOpenIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CalendarBlankIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CalendarBlankIconHandle = AnimatedIconHandle;
type AnimatedCalendarBlankIconProps = ZagAnimatedIconProps;
/**
 * Animated CalendarBlank icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCalendarBlankIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CalendarBlank icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CalendarBlankIcon: react.ForwardRefExoticComponent<Omit<CalendarBlankIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CaretDownIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CaretDownIconHandle = AnimatedIconHandle;
type AnimatedCaretDownIconProps = ZagAnimatedIconProps;
/**
 * Animated CaretDown icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCaretDownIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CaretDown icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CaretDownIcon: react.ForwardRefExoticComponent<Omit<CaretDownIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CaretLeftIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CaretLeftIconHandle = AnimatedIconHandle;
type AnimatedCaretLeftIconProps = ZagAnimatedIconProps;
/**
 * Animated CaretLeft icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCaretLeftIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CaretLeft icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CaretLeftIcon: react.ForwardRefExoticComponent<Omit<CaretLeftIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CaretRightIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CaretRightIconHandle = AnimatedIconHandle;
type AnimatedCaretRightIconProps = ZagAnimatedIconProps;
/**
 * Animated CaretRight icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCaretRightIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CaretRight icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CaretRightIcon: react.ForwardRefExoticComponent<Omit<CaretRightIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CaretUpDownIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CaretUpDownIconHandle = AnimatedIconHandle;
type AnimatedCaretUpDownIconProps = ZagAnimatedIconProps;
/**
 * Animated CaretUpDown icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCaretUpDownIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CaretUpDown icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CaretUpDownIcon: react.ForwardRefExoticComponent<Omit<CaretUpDownIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CaretUpIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CaretUpIconHandle = AnimatedIconHandle;
type AnimatedCaretUpIconProps = ZagAnimatedIconProps;
/**
 * Animated CaretUp icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCaretUpIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CaretUp icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CaretUpIcon: react.ForwardRefExoticComponent<Omit<CaretUpIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type ChartPieIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ChartPieIconHandle = AnimatedIconHandle;
type AnimatedChartPieIconProps = ZagAnimatedIconProps;
/**
 * Animated ChartPie icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedChartPieIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * ChartPie icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ChartPieIcon: react.ForwardRefExoticComponent<Omit<ChartPieIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type ChatCircleTextIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ChatCircleTextIconHandle = AnimatedIconHandle;
type AnimatedChatCircleTextIconProps = ZagAnimatedIconProps;
/**
 * Animated ChatCircleText icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedChatCircleTextIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * ChatCircleText icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ChatCircleTextIcon: react.ForwardRefExoticComponent<Omit<ChatCircleTextIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CheckCircleIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CheckCircleIconHandle = AnimatedIconHandle;
type AnimatedCheckCircleIconProps = ZagAnimatedIconProps;
/**
 * Animated CheckCircle icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCheckCircleIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CheckCircle icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CheckCircleIcon: react.ForwardRefExoticComponent<Omit<CheckCircleIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CheckIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CheckIconHandle = AnimatedIconHandle;
type AnimatedCheckIconProps = ZagAnimatedIconProps;
/**
 * Animated Check icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCheckIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Check icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CheckIcon: react.ForwardRefExoticComponent<Omit<CheckIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type ClockIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ClockIconHandle = AnimatedIconHandle;
type AnimatedClockIconProps = ZagAnimatedIconProps;
/**
 * Animated Clock icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedClockIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Clock icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ClockIcon: react.ForwardRefExoticComponent<Omit<ClockIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CloudArrowUpIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CloudArrowUpIconHandle = AnimatedIconHandle;
type AnimatedCloudArrowUpIconProps = ZagAnimatedIconProps;
/**
 * Animated CloudArrowUp icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCloudArrowUpIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CloudArrowUp icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CloudArrowUpIcon: react.ForwardRefExoticComponent<Omit<CloudArrowUpIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CopyIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CopyIconHandle = AnimatedIconHandle;
type AnimatedCopyIconProps = ZagAnimatedIconProps;
/**
 * Animated Copy icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCopyIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Copy icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CopyIcon: react.ForwardRefExoticComponent<Omit<CopyIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CornersOutIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CornersOutIconHandle = AnimatedIconHandle;
type AnimatedCornersOutIconProps = ZagAnimatedIconProps;
/**
 * Animated CornersOut icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCornersOutIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CornersOut icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CornersOutIcon: react.ForwardRefExoticComponent<Omit<CornersOutIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CpuIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CpuIconHandle = AnimatedIconHandle;
type AnimatedCpuIconProps = ZagAnimatedIconProps;
/**
 * Animated Cpu icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCpuIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Cpu icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CpuIcon: react.ForwardRefExoticComponent<Omit<CpuIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type CurrencyDollarIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type CurrencyDollarIconHandle = AnimatedIconHandle;
type AnimatedCurrencyDollarIconProps = ZagAnimatedIconProps;
/**
 * Animated CurrencyDollar icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedCurrencyDollarIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * CurrencyDollar icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const CurrencyDollarIcon: react.ForwardRefExoticComponent<Omit<CurrencyDollarIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type DeviceMobileIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type DeviceMobileIconHandle = AnimatedIconHandle;
type AnimatedDeviceMobileIconProps = ZagAnimatedIconProps;
/**
 * Animated DeviceMobile icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedDeviceMobileIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * DeviceMobile icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const DeviceMobileIcon: react.ForwardRefExoticComponent<Omit<DeviceMobileIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type DotsThreeVerticalIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type DotsThreeVerticalIconHandle = AnimatedIconHandle;
type AnimatedDotsThreeVerticalIconProps = ZagAnimatedIconProps;
/**
 * Animated DotsThreeVertical icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedDotsThreeVerticalIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * DotsThreeVertical icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const DotsThreeVerticalIcon: react.ForwardRefExoticComponent<Omit<DotsThreeVerticalIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type DotsThreeIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type DotsThreeIconHandle = AnimatedIconHandle;
type AnimatedDotsThreeIconProps = ZagAnimatedIconProps;
/**
 * Animated DotsThree icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedDotsThreeIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * DotsThree icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const DotsThreeIcon: react.ForwardRefExoticComponent<Omit<DotsThreeIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type ExcludeIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ExcludeIconHandle = AnimatedIconHandle;
type AnimatedExcludeIconProps = ZagAnimatedIconProps;
/**
 * Animated Exclude icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedExcludeIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Exclude icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ExcludeIcon: react.ForwardRefExoticComponent<Omit<ExcludeIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type FileCodeIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type FileCodeIconHandle = AnimatedIconHandle;
type AnimatedFileCodeIconProps = ZagAnimatedIconProps;
/**
 * Animated FileCode icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedFileCodeIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * FileCode icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const FileCodeIcon: react.ForwardRefExoticComponent<Omit<FileCodeIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type FileTextIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type FileTextIconHandle = AnimatedIconHandle;
type AnimatedFileTextIconProps = ZagAnimatedIconProps;
/**
 * Animated FileText icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedFileTextIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * FileText icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const FileTextIcon: react.ForwardRefExoticComponent<Omit<FileTextIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type FolderOpenIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type FolderOpenIconHandle = AnimatedIconHandle;
type AnimatedFolderOpenIconProps = ZagAnimatedIconProps;
/**
 * Animated FolderOpen icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedFolderOpenIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * FolderOpen icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const FolderOpenIcon: react.ForwardRefExoticComponent<Omit<FolderOpenIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type FolderIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type FolderIconHandle = AnimatedIconHandle;
type AnimatedFolderIconProps = ZagAnimatedIconProps;
/**
 * Animated Folder icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedFolderIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Folder icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const FolderIcon: react.ForwardRefExoticComponent<Omit<FolderIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type FrameCornersIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type FrameCornersIconHandle = AnimatedIconHandle;
type AnimatedFrameCornersIconProps = ZagAnimatedIconProps;
/**
 * Animated FrameCorners icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedFrameCornersIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * FrameCorners icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const FrameCornersIcon: react.ForwardRefExoticComponent<Omit<FrameCornersIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type GearIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type GearIconHandle = AnimatedIconHandle;
type AnimatedGearIconProps = ZagAnimatedIconProps;
/**
 * Animated Gear icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedGearIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Gear icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const GearIcon: react.ForwardRefExoticComponent<Omit<GearIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type GlobeIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type GlobeIconHandle = AnimatedIconHandle;
type AnimatedGlobeIconProps = ZagAnimatedIconProps;
/**
 * Animated Globe icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedGlobeIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Globe icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const GlobeIcon: react.ForwardRefExoticComponent<Omit<GlobeIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type GoogleLogoIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type GoogleLogoIconHandle = AnimatedIconHandle;
type AnimatedGoogleLogoIconProps = ZagAnimatedIconProps;
/**
 * Animated GoogleLogo icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedGoogleLogoIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * GoogleLogo icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const GoogleLogoIcon: react.ForwardRefExoticComponent<Omit<GoogleLogoIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

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

type InfoIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type InfoIconHandle = AnimatedIconHandle;
type AnimatedInfoIconProps = ZagAnimatedIconProps;
/**
 * Animated Info icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedInfoIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Info icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const InfoIcon: react.ForwardRefExoticComponent<Omit<InfoIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type LightningIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type LightningIconHandle = AnimatedIconHandle;
type AnimatedLightningIconProps = ZagAnimatedIconProps;
/**
 * Animated Lightning icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedLightningIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Lightning icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const LightningIcon: react.ForwardRefExoticComponent<Omit<LightningIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type LogoIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type LogoIconHandle = AnimatedIconHandle;
type AnimatedLogoIconProps = ZagAnimatedIconProps;
/**
 * Animated Logo icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedLogoIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Logo icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const LogoIcon: react.ForwardRefExoticComponent<Omit<LogoIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type MagnifyingGlassIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type MagnifyingGlassIconHandle = AnimatedIconHandle;
type AnimatedMagnifyingGlassIconProps = ZagAnimatedIconProps;
/**
 * Animated MagnifyingGlass icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedMagnifyingGlassIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * MagnifyingGlass icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const MagnifyingGlassIcon: react.ForwardRefExoticComponent<Omit<MagnifyingGlassIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type MapTrifoldIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type MapTrifoldIconHandle = AnimatedIconHandle;
type AnimatedMapTrifoldIconProps = ZagAnimatedIconProps;
/**
 * Animated MapTrifold icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedMapTrifoldIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * MapTrifold icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const MapTrifoldIcon: react.ForwardRefExoticComponent<Omit<MapTrifoldIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type MinusIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type MinusIconHandle = AnimatedIconHandle;
type AnimatedMinusIconProps = ZagAnimatedIconProps;
/**
 * Animated Minus icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedMinusIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Minus icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const MinusIcon: react.ForwardRefExoticComponent<Omit<MinusIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type MonitorIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type MonitorIconHandle = AnimatedIconHandle;
type AnimatedMonitorIconProps = ZagAnimatedIconProps;
/**
 * Animated Monitor icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedMonitorIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Monitor icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const MonitorIcon: react.ForwardRefExoticComponent<Omit<MonitorIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type MoonIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type MoonIconHandle = AnimatedIconHandle;
type AnimatedMoonIconProps = ZagAnimatedIconProps;
/**
 * Animated Moon icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedMoonIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Moon icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const MoonIcon: react.ForwardRefExoticComponent<Omit<MoonIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type NavigationArrowIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type NavigationArrowIconHandle = AnimatedIconHandle;
type AnimatedNavigationArrowIconProps = ZagAnimatedIconProps;
/**
 * Animated NavigationArrow icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedNavigationArrowIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * NavigationArrow icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const NavigationArrowIcon: react.ForwardRefExoticComponent<Omit<NavigationArrowIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type PlusIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type PlusIconHandle = AnimatedIconHandle;
type AnimatedPlusIconProps = ZagAnimatedIconProps;
/**
 * Animated Plus icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedPlusIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Plus icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const PlusIcon: react.ForwardRefExoticComponent<Omit<PlusIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type RobotIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type RobotIconHandle = AnimatedIconHandle;
type AnimatedRobotIconProps = ZagAnimatedIconProps;
/**
 * Animated Robot icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedRobotIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Robot icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const RobotIcon: react.ForwardRefExoticComponent<Omit<RobotIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type ShareIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ShareIconHandle = AnimatedIconHandle;
type AnimatedShareIconProps = ZagAnimatedIconProps;
/**
 * Animated Share icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedShareIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Share icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ShareIcon: react.ForwardRefExoticComponent<Omit<ShareIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type ShieldCheckIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type ShieldCheckIconHandle = AnimatedIconHandle;
type AnimatedShieldCheckIconProps = ZagAnimatedIconProps;
/**
 * Animated ShieldCheck icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedShieldCheckIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * ShieldCheck icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const ShieldCheckIcon: react.ForwardRefExoticComponent<Omit<ShieldCheckIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type SidebarIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type SidebarIconHandle = AnimatedIconHandle;
type AnimatedSidebarIconProps = ZagAnimatedIconProps;
/**
 * Animated Sidebar icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedSidebarIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Sidebar icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const SidebarIcon: react.ForwardRefExoticComponent<Omit<SidebarIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type SignOutIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type SignOutIconHandle = AnimatedIconHandle;
type AnimatedSignOutIconProps = ZagAnimatedIconProps;
/**
 * Animated SignOut icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedSignOutIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * SignOut icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const SignOutIcon: react.ForwardRefExoticComponent<Omit<SignOutIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type StarIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type StarIconHandle = AnimatedIconHandle;
type AnimatedStarIconProps = ZagAnimatedIconProps;
/**
 * Animated Star icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedStarIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Star icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const StarIcon: react.ForwardRefExoticComponent<Omit<StarIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type SunIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type SunIconHandle = AnimatedIconHandle;
type AnimatedSunIconProps = ZagAnimatedIconProps;
/**
 * Animated Sun icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedSunIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Sun icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const SunIcon: react.ForwardRefExoticComponent<Omit<SunIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type TextAUnderlineIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type TextAUnderlineIconHandle = AnimatedIconHandle;
type AnimatedTextAUnderlineIconProps = ZagAnimatedIconProps;
/**
 * Animated TextAUnderline icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedTextAUnderlineIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * TextAUnderline icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const TextAUnderlineIcon: react.ForwardRefExoticComponent<Omit<TextAUnderlineIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type TextAlignLeftIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type TextAlignLeftIconHandle = AnimatedIconHandle;
type AnimatedTextAlignLeftIconProps = ZagAnimatedIconProps;
/**
 * Animated TextAlignLeft icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedTextAlignLeftIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * TextAlignLeft icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const TextAlignLeftIcon: react.ForwardRefExoticComponent<Omit<TextAlignLeftIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type TextBIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type TextBIconHandle = AnimatedIconHandle;
type AnimatedTextBIconProps = ZagAnimatedIconProps;
/**
 * Animated TextB icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedTextBIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * TextB icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const TextBIcon: react.ForwardRefExoticComponent<Omit<TextBIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type TextItalicIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type TextItalicIconHandle = AnimatedIconHandle;
type AnimatedTextItalicIconProps = ZagAnimatedIconProps;
/**
 * Animated TextItalic icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedTextItalicIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * TextItalic icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const TextItalicIcon: react.ForwardRefExoticComponent<Omit<TextItalicIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type TrashIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type TrashIconHandle = AnimatedIconHandle;
type AnimatedTrashIconProps = ZagAnimatedIconProps;
/**
 * Animated Trash icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedTrashIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Trash icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const TrashIcon: react.ForwardRefExoticComponent<Omit<TrashIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type UserIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type UserIconHandle = AnimatedIconHandle;
type AnimatedUserIconProps = ZagAnimatedIconProps;
/**
 * Animated User icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedUserIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * User icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const UserIcon: react.ForwardRefExoticComponent<Omit<UserIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type WarningIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type WarningIconHandle = AnimatedIconHandle;
type AnimatedWarningIconProps = ZagAnimatedIconProps;
/**
 * Animated Warning icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedWarningIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * Warning icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const WarningIcon: react.ForwardRefExoticComponent<Omit<WarningIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type XCircleIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type XCircleIconHandle = AnimatedIconHandle;
type AnimatedXCircleIconProps = ZagAnimatedIconProps;
/**
 * Animated XCircle icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedXCircleIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * XCircle icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const XCircleIcon: react.ForwardRefExoticComponent<Omit<XCircleIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type XIconProps = ZagIconProps & {
    /** Visual weight of the glyph. Defaults to `'outline'`. */
    weight?: IconWeight;
    /** Whether to render the animated interactive variant. Defaults to `false`. */
    animated?: boolean;
};
type XIconHandle = AnimatedIconHandle;
type AnimatedXIconProps = ZagAnimatedIconProps;
/**
 * Animated X icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
declare const AnimatedXIcon: react.ForwardRefExoticComponent<ZagAnimatedIconProps & react.RefAttributes<AnimatedIconHandle>>;
/**
 * X icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
declare const XIcon: react.ForwardRefExoticComponent<Omit<XIconProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

type EmptyStateProps = ZagIllustrationProps;
/**
 * EmptyState illustration (viewBox "0 0 240 180").
 * Original multi-color fills and gradients are preserved.
 */
declare const EmptyState: react.ForwardRefExoticComponent<Omit<ZagIllustrationProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export { ARROWS_DOWN_UP_ANIMATION_VARIANTS, ARROW_DOWN_ANIMATION_VARIANTS, ARROW_LEFT_ANIMATION_VARIANTS, ARROW_RIGHT_ANIMATION_VARIANTS, AnimatedArrowDownIcon, type AnimatedArrowDownIconProps, AnimatedArrowLeftIcon, type AnimatedArrowLeftIconProps, AnimatedArrowRightIcon, type AnimatedArrowRightIconProps, AnimatedArrowsDownUpIcon, type AnimatedArrowsDownUpIconProps, AnimatedBellIcon, type AnimatedBellIconProps, AnimatedBookOpenIcon, type AnimatedBookOpenIconProps, AnimatedCalendarBlankIcon, type AnimatedCalendarBlankIconProps, AnimatedCaretDownIcon, type AnimatedCaretDownIconProps, AnimatedCaretLeftIcon, type AnimatedCaretLeftIconProps, AnimatedCaretRightIcon, type AnimatedCaretRightIconProps, AnimatedCaretUpDownIcon, type AnimatedCaretUpDownIconProps, AnimatedCaretUpIcon, type AnimatedCaretUpIconProps, AnimatedChartPieIcon, type AnimatedChartPieIconProps, AnimatedChatCircleTextIcon, type AnimatedChatCircleTextIconProps, AnimatedCheckCircleIcon, type AnimatedCheckCircleIconProps, AnimatedCheckIcon, type AnimatedCheckIconProps, AnimatedClockIcon, type AnimatedClockIconProps, AnimatedCloudArrowUpIcon, type AnimatedCloudArrowUpIconProps, AnimatedCopyIcon, type AnimatedCopyIconProps, AnimatedCornersOutIcon, type AnimatedCornersOutIconProps, AnimatedCpuIcon, type AnimatedCpuIconProps, AnimatedCurrencyDollarIcon, type AnimatedCurrencyDollarIconProps, AnimatedDeviceMobileIcon, type AnimatedDeviceMobileIconProps, AnimatedDotsThreeIcon, type AnimatedDotsThreeIconProps, AnimatedDotsThreeVerticalIcon, type AnimatedDotsThreeVerticalIconProps, AnimatedExcludeIcon, type AnimatedExcludeIconProps, AnimatedFileCodeIcon, type AnimatedFileCodeIconProps, AnimatedFileTextIcon, type AnimatedFileTextIconProps, AnimatedFolderIcon, type AnimatedFolderIconProps, AnimatedFolderOpenIcon, type AnimatedFolderOpenIconProps, AnimatedFrameCornersIcon, type AnimatedFrameCornersIconProps, AnimatedGearIcon, type AnimatedGearIconProps, AnimatedGlobeIcon, type AnimatedGlobeIconProps, AnimatedGoogleLogoIcon, type AnimatedGoogleLogoIconProps, AnimatedHeartIcon, type AnimatedHeartIconProps, AnimatedHomeIcon, type AnimatedHomeIconProps, type AnimatedIconHandle, AnimatedInfoIcon, type AnimatedInfoIconProps, AnimatedLightningIcon, type AnimatedLightningIconProps, AnimatedLogoIcon, type AnimatedLogoIconProps, AnimatedMagnifyingGlassIcon, type AnimatedMagnifyingGlassIconProps, AnimatedMapTrifoldIcon, type AnimatedMapTrifoldIconProps, AnimatedMinusIcon, type AnimatedMinusIconProps, AnimatedMonitorIcon, type AnimatedMonitorIconProps, AnimatedMoonIcon, type AnimatedMoonIconProps, AnimatedNavigationArrowIcon, type AnimatedNavigationArrowIconProps, AnimatedPlusIcon, type AnimatedPlusIconProps, AnimatedRobotIcon, type AnimatedRobotIconProps, AnimatedShareIcon, type AnimatedShareIconProps, AnimatedShieldCheckIcon, type AnimatedShieldCheckIconProps, AnimatedSidebarIcon, type AnimatedSidebarIconProps, AnimatedSignOutIcon, type AnimatedSignOutIconProps, AnimatedStarIcon, type AnimatedStarIconProps, AnimatedSunIcon, type AnimatedSunIconProps, AnimatedTextAUnderlineIcon, type AnimatedTextAUnderlineIconProps, AnimatedTextAlignLeftIcon, type AnimatedTextAlignLeftIconProps, AnimatedTextBIcon, type AnimatedTextBIconProps, AnimatedTextItalicIcon, type AnimatedTextItalicIconProps, AnimatedTrashIcon, type AnimatedTrashIconProps, AnimatedUserIcon, type AnimatedUserIconProps, AnimatedWarningIcon, type AnimatedWarningIconProps, AnimatedXCircleIcon, type AnimatedXCircleIconProps, AnimatedXIcon, type AnimatedXIconProps, type AnimationControls, ArrowDownIcon, type ArrowDownIconHandle, type ArrowDownIconProps, ArrowLeftIcon, type ArrowLeftIconHandle, type ArrowLeftIconProps, ArrowRightIcon, type ArrowRightIconHandle, type ArrowRightIconProps, ArrowsDownUpIcon, type ArrowsDownUpIconHandle, type ArrowsDownUpIconProps, BELL_ANIMATION_VARIANTS, BOOK_OPEN_ANIMATION_VARIANTS, BellIcon, type BellIconHandle, type BellIconProps, BookOpenIcon, type BookOpenIconHandle, type BookOpenIconProps, CALENDAR_BLANK_ANIMATION_VARIANTS, CARET_DOWN_ANIMATION_VARIANTS, CARET_LEFT_ANIMATION_VARIANTS, CARET_RIGHT_ANIMATION_VARIANTS, CARET_UP_ANIMATION_VARIANTS, CARET_UP_DOWN_ANIMATION_VARIANTS, CHART_PIE_ANIMATION_VARIANTS, CHAT_CIRCLE_TEXT_ANIMATION_VARIANTS, CHECK_ANIMATION_VARIANTS, CHECK_CIRCLE_ANIMATION_VARIANTS, CLOCK_ANIMATION_VARIANTS, CLOUD_ARROW_UP_ANIMATION_VARIANTS, COPY_ANIMATION_VARIANTS, CORNERS_OUT_ANIMATION_VARIANTS, CPU_ANIMATION_VARIANTS, CURRENCY_DOLLAR_ANIMATION_VARIANTS, CalendarBlankIcon, type CalendarBlankIconHandle, type CalendarBlankIconProps, CaretDownIcon, type CaretDownIconHandle, type CaretDownIconProps, CaretLeftIcon, type CaretLeftIconHandle, type CaretLeftIconProps, CaretRightIcon, type CaretRightIconHandle, type CaretRightIconProps, CaretUpDownIcon, type CaretUpDownIconHandle, type CaretUpDownIconProps, CaretUpIcon, type CaretUpIconHandle, type CaretUpIconProps, ChartPieIcon, type ChartPieIconHandle, type ChartPieIconProps, ChatCircleTextIcon, type ChatCircleTextIconHandle, type ChatCircleTextIconProps, CheckCircleIcon, type CheckCircleIconHandle, type CheckCircleIconProps, CheckIcon, type CheckIconHandle, type CheckIconProps, ClockIcon, type ClockIconHandle, type ClockIconProps, CloudArrowUpIcon, type CloudArrowUpIconHandle, type CloudArrowUpIconProps, CopyIcon, type CopyIconHandle, type CopyIconProps, CornersOutIcon, type CornersOutIconHandle, type CornersOutIconProps, CpuIcon, type CpuIconHandle, type CpuIconProps, CurrencyDollarIcon, type CurrencyDollarIconHandle, type CurrencyDollarIconProps, DEFAULT_ANIMATION_VARIANTS, DEFAULT_PATH_TRANSITION, DEVICE_MOBILE_ANIMATION_VARIANTS, DOTS_THREE_ANIMATION_VARIANTS, DOTS_THREE_VERTICAL_ANIMATION_VARIANTS, DeviceMobileIcon, type DeviceMobileIconHandle, type DeviceMobileIconProps, DotsThreeIcon, type DotsThreeIconHandle, type DotsThreeIconProps, DotsThreeVerticalIcon, type DotsThreeVerticalIconHandle, type DotsThreeVerticalIconProps, EXCLUDE_ANIMATION_VARIANTS, EmptyState, type EmptyStateProps, ExcludeIcon, type ExcludeIconHandle, type ExcludeIconProps, FILE_CODE_ANIMATION_VARIANTS, FILE_TEXT_ANIMATION_VARIANTS, FOLDER_ANIMATION_VARIANTS, FOLDER_OPEN_ANIMATION_VARIANTS, FRAME_CORNERS_ANIMATION_VARIANTS, FileCodeIcon, type FileCodeIconHandle, type FileCodeIconProps, FileTextIcon, type FileTextIconHandle, type FileTextIconProps, FolderIcon, type FolderIconHandle, type FolderIconProps, FolderOpenIcon, type FolderOpenIconHandle, type FolderOpenIconProps, FrameCornersIcon, type FrameCornersIconHandle, type FrameCornersIconProps, GEAR_ANIMATION_VARIANTS, GLOBE_ANIMATION_VARIANTS, GOOGLE_LOGO_ANIMATION_VARIANTS, GearIcon, type GearIconHandle, type GearIconProps, GlobeIcon, type GlobeIconHandle, type GlobeIconProps, GoogleLogoIcon, type GoogleLogoIconHandle, type GoogleLogoIconProps, HEART_ANIMATION_VARIANTS, HOME_ANIMATION_VARIANTS, HOME_DEFAULT_TRANSITION, HOME_PATH_VARIANTS, HeartIcon, type HeartIconHandle, type HeartIconProps, HomeIcon, type HomeIconHandle, type HomeIconProps, ICON_ANIMATION_VARIANTS, INFO_ANIMATION_VARIANTS, type IconWeight, InfoIcon, type InfoIconHandle, type InfoIconProps, LIGHTNING_ANIMATION_VARIANTS, LOGO_ANIMATION_VARIANTS, LightningIcon, type LightningIconHandle, type LightningIconProps, LogoIcon, type LogoIconHandle, type LogoIconProps, MAGNIFYING_GLASS_ANIMATION_VARIANTS, MAP_TRIFOLD_ANIMATION_VARIANTS, MINUS_ANIMATION_VARIANTS, MONITOR_ANIMATION_VARIANTS, MOON_ANIMATION_VARIANTS, MagnifyingGlassIcon, type MagnifyingGlassIconHandle, type MagnifyingGlassIconProps, MapTrifoldIcon, type MapTrifoldIconHandle, type MapTrifoldIconProps, MinusIcon, type MinusIconHandle, type MinusIconProps, MonitorIcon, type MonitorIconHandle, type MonitorIconProps, MoonIcon, type MoonIconHandle, type MoonIconProps, NAVIGATION_ARROW_ANIMATION_VARIANTS, NavigationArrowIcon, type NavigationArrowIconHandle, type NavigationArrowIconProps, PATH_DRAW_VARIANTS, PLUS_ANIMATION_VARIANTS, PlusIcon, type PlusIconHandle, type PlusIconProps, ROBOT_ANIMATION_VARIANTS, RobotIcon, type RobotIconHandle, type RobotIconProps, SHARE_ANIMATION_VARIANTS, SHIELD_CHECK_ANIMATION_VARIANTS, SIDEBAR_ANIMATION_VARIANTS, SIGN_OUT_ANIMATION_VARIANTS, STAR_ANIMATION_VARIANTS, SUN_ANIMATION_VARIANTS, ShareIcon, type ShareIconHandle, type ShareIconProps, ShieldCheckIcon, type ShieldCheckIconHandle, type ShieldCheckIconProps, SidebarIcon, type SidebarIconHandle, type SidebarIconProps, SignOutIcon, type SignOutIconHandle, type SignOutIconProps, StarIcon, type StarIconHandle, type StarIconProps, SunIcon, type SunIconHandle, type SunIconProps, TEXT_ALIGN_LEFT_ANIMATION_VARIANTS, TEXT_A_UNDERLINE_ANIMATION_VARIANTS, TEXT_B_ANIMATION_VARIANTS, TEXT_ITALIC_ANIMATION_VARIANTS, TRASH_ANIMATION_VARIANTS, TextAUnderlineIcon, type TextAUnderlineIconHandle, type TextAUnderlineIconProps, TextAlignLeftIcon, type TextAlignLeftIconHandle, type TextAlignLeftIconProps, TextBIcon, type TextBIconHandle, type TextBIconProps, TextItalicIcon, type TextItalicIconHandle, type TextItalicIconProps, TrashIcon, type TrashIconHandle, type TrashIconProps, USER_ANIMATION_VARIANTS, type UseAnimatedIconHandleReturn, UserIcon, type UserIconHandle, type UserIconProps, WARNING_ANIMATION_VARIANTS, WarningIcon, type WarningIconHandle, type WarningIconProps, XCircleIcon, type XCircleIconHandle, type XCircleIconProps, XIcon, type XIconHandle, type XIconProps, X_ANIMATION_VARIANTS, X_CIRCLE_ANIMATION_VARIANTS, ZagAnimatedIconContainer, type ZagAnimatedIconContainerProps, type ZagAnimatedIconProps, type ZagAnimatedIconWrapperProps, ZagIconBase, type ZagIconBaseProps, type ZagIconProps, ZagIllustrationBase, type ZagIllustrationBaseProps, type ZagIllustrationProps, getIconAnimationVariants, useAnimatedIconLifecycle };
