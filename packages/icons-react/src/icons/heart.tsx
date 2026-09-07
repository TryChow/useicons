/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/heart.svg

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

export type HeartIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type HeartIconHandle = AnimatedIconHandle;
export type AnimatedHeartIconProps = ZagAnimatedIconProps;

const HEART_ANIMATION_VARIANTS = getIconAnimationVariants('heart');

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
 * Animated Heart icon (viewBox "0 0 24 24").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedHeartIcon = forwardRef<AnimatedIconHandle, AnimatedHeartIconProps>(
  function AnimatedHeartIcon(props, ref) {
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
        className={className}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        {...rest}
      >
        <motion.svg
          animate={controls}
          initial="normal"
          variants={HEART_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          color={color}
          focusable={false}
        >
          {HEART_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedHeartIcon.displayName = 'AnimatedHeartIcon';

/**
 * Heart icon (viewBox "0 0 24 24").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const HeartIcon = forwardRef<SVGSVGElement, HeartIconProps>(
  function HeartIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedHeartIcon
          weight={weight}
          {...(rest as unknown as AnimatedHeartIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 24 24" data-weight={weight} {...rest}>
        {HEART_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

HeartIcon.displayName = 'HeartIcon';
