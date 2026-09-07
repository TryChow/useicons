import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { useAnimation } from 'motion/react';
import type { IconWeight } from './IconBase';

export type AnimationControls = ReturnType<typeof useAnimation>;

/**
 * Imperative animation handle exposed by all animated icons.
 * Allows programmatic control over icon animations via ref.
 */
export interface AnimatedIconHandle {
  /** Trigger the animated state of the icon. */
  startAnimation: () => void;
  /** Reset the icon animation back to its normal/idle state. */
  stopAnimation: () => void;
}

/**
 * Props accepted by all animated Zag icons.
 */
export interface ZagAnimatedIconProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
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

export interface ZagAnimatedIconWrapperProps extends ZagAnimatedIconProps {
  children: ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>;
}

export interface UseAnimatedIconHandleReturn {
  controls: AnimationControls;
  handleMouseEnter: (e: React.MouseEvent<HTMLSpanElement>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

/**
 * Custom hook encapsulating animation controller lifecycle, imperative ref binding,
 * and mouse hover triggers for animated icons.
 */
export function useAnimatedIconLifecycle(
  ref: React.ForwardedRef<AnimatedIconHandle>,
  onMouseEnter?: React.MouseEventHandler<HTMLSpanElement>,
  onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>,
): UseAnimatedIconHandleReturn {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;
    return {
      startAnimation: () => controls.start('animate'),
      stopAnimation: () => controls.start('normal'),
    };
  });

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(e);
      } else {
        controls.start('animate');
      }
    },
    [controls, onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(e);
      } else {
        controls.start('normal');
      }
    },
    [controls, onMouseLeave],
  );

  return { controls, handleMouseEnter, handleMouseLeave };
}

export interface ZagAnimatedIconContainerProps extends ZagAnimatedIconProps {
  handleMouseEnter?: React.MouseEventHandler<HTMLSpanElement>;
  handleMouseLeave?: React.MouseEventHandler<HTMLSpanElement>;
  children: ReactNode;
}

/**
 * Span wrapper that manages layout, accessibility and interaction bounds for animated icons.
 */
export const ZagAnimatedIconContainer = forwardRef<
  HTMLSpanElement,
  ZagAnimatedIconContainerProps
>(function ZagAnimatedIconContainer(props, ref) {
  const {
    className,
    style,
    handleMouseEnter,
    handleMouseLeave,
    children,
    ...rest
  } = props;

  const accessible =
    rest['aria-label'] !== undefined ||
    rest['aria-labelledby'] !== undefined ||
    'title' in props;

  return (
    <span
      ref={ref}
      className={
        className ? `zag-icon zag-icon-animated ${className}` : 'zag-icon zag-icon-animated'
      }
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 0,
        ...style,
      }}
      aria-hidden={accessible ? undefined : true}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </span>
  );
});
