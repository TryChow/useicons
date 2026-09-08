/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/home.svg

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

export type HomeIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type HomeIconHandle = AnimatedIconHandle;
export type AnimatedHomeIconProps = ZagAnimatedIconProps;

const HOME_ANIMATION_VARIANTS = getIconAnimationVariants('home');

const HOME_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10.565c0-.444.192-.866.527-1.159l7.5-6.55a1.45 1.45 0 0 1 1.946 0l7.5 6.55c.335.293.527.715.527 1.16V19.5a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-4.1a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5.5v5.1a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z" fill="none" />
    </>
  ),
  filled: (
    <>
      <path fill="currentColor" d="M3 10.565c0-.444.192-.866.527-1.159l7.5-6.55a1.45 1.45 0 0 1 1.946 0l7.5 6.55c.335.293.527.715.527 1.16V19.5a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-4.1a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5.5v5.1a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z" />
    </>
  ),
};

/**
 * Animated Home icon (viewBox "0 0 24 24").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedHomeIcon = forwardRef<AnimatedIconHandle, AnimatedHomeIconProps>(
  function AnimatedHomeIcon(props, ref) {
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
          variants={HOME_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {HOME_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedHomeIcon.displayName = 'AnimatedHomeIcon';

/**
 * Home icon (viewBox "0 0 24 24").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const HomeIcon = forwardRef<SVGSVGElement, HomeIconProps>(
  function HomeIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedHomeIcon
          weight={weight}
          {...(rest as unknown as AnimatedHomeIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 24 24" data-weight={weight} {...rest}>
        {HOME_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

HomeIcon.displayName = 'HomeIcon';
