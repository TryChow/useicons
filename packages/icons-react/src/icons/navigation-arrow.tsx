/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/navigation-arrow.svg

import { forwardRef, type ReactElement } from 'react';
import { motion } from 'motion/react';
import { ZagIconBase, type IconWeight, type ZagIconProps } from '../base/IconBase';
import {
  ZagAnimatedIconContainer,
  useAnimatedIconLifecycle,
  type AnimatedIconHandle,
  type ZagAnimatedIconProps,
} from '../base/AnimatedIconBase';
import { getIconAnimationVariants } from '../base/animations';

export type NavigationArrowIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type NavigationArrowIconHandle = AnimatedIconHandle;
export type AnimatedNavigationArrowIconProps = ZagAnimatedIconProps;

const NAVIGATIONARROW_ANIMATION_VARIANTS = getIconAnimationVariants('navigation-arrow');

const NAVIGATIONARROW_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M237.33 106.21 61.41 41l-.16-.05a16 16 0 0 0-20.35 20.3 1 1 0 0 0 .05.16l65.26 175.92A15.77 15.77 0 0 0 121.28 248h.3a15.77 15.77 0 0 0 15-11.29l.06-.2 21.84-78 78-21.84.2-.06a16 16 0 0 0 .62-30.38Zm-87.49 38.09a8 8 0 0 0-5.54 5.54l-23 82.16-.06-.17L56 56l175.82 65.22.16.06Z" />
    </>
  ),
  filled: (
    <>
      <path d="M248 121.58a15.76 15.76 0 0 1-11.29 15l-.2.06-78 21.84-21.84 78-.06.2a15.77 15.77 0 0 1-15 11.29h-.3a15.77 15.77 0 0 1-15.07-10.67L41 61.41a1 1 0 0 1-.05-.16 16 16 0 0 1 20.3-20.35l.16.05 175.92 65.26A15.78 15.78 0 0 1 248 121.58" />
    </>
  ),
};

/**
 * Animated NavigationArrow icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedNavigationArrowIcon = forwardRef<AnimatedIconHandle, AnimatedNavigationArrowIconProps>(
  function AnimatedNavigationArrowIcon(props, ref) {
    const {
      weight = 'outline',
      size = 24,
      color = 'currentColor',
      className,
      onMouseEnter,
      onMouseLeave,
      ...rest
    } = props;
    const { controls, handleMouseEnter, handleMouseLeave } = useAnimatedIconLifecycle(
      ref,
      onMouseEnter,
      onMouseLeave,
    );

    return (
      <ZagAnimatedIconContainer
        size={size}
        color={color}
        weight={weight}
        data-weight={weight}
        className={className}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        {...rest}
      >
        <motion.svg
          animate={controls}
          initial="normal"
          variants={NAVIGATIONARROW_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {NAVIGATIONARROW_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedNavigationArrowIcon.displayName = 'AnimatedNavigationArrowIcon';

/**
 * NavigationArrow icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const NavigationArrowIcon = forwardRef<SVGSVGElement, NavigationArrowIconProps>(
  function NavigationArrowIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedNavigationArrowIcon
          weight={weight}
          {...(rest as unknown as AnimatedNavigationArrowIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {NAVIGATIONARROW_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

NavigationArrowIcon.displayName = 'NavigationArrowIcon';
