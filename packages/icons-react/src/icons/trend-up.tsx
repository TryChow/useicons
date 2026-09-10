/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/trend-up.svg

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

export type TrendUpIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type TrendUpIconHandle = AnimatedIconHandle;
export type AnimatedTrendUpIconProps = ZagAnimatedIconProps;

const TRENDUP_ANIMATION_VARIANTS = getIconAnimationVariants('trend-up');

const TRENDUP_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M240 56v64a8 8 0 0 1-16 0V75.31l-82.34 82.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69 212.69 64H168a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8" />
    </>
  ),
  filled: (
    <>
      <path d="M240 56v64a8 8 0 0 1-13.66 5.66L200 99.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-66.34 66.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0L136 140.69 188.69 88l-26.35-26.34A8 8 0 0 1 168 48h64a8 8 0 0 1 8 8" />
    </>
  ),
};

/**
 * Animated TrendUp icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedTrendUpIcon = forwardRef<AnimatedIconHandle, AnimatedTrendUpIconProps>(
  function AnimatedTrendUpIcon(props, ref) {
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
          variants={TRENDUP_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {TRENDUP_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedTrendUpIcon.displayName = 'AnimatedTrendUpIcon';

/**
 * TrendUp icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const TrendUpIcon = forwardRef<SVGSVGElement, TrendUpIconProps>(
  function TrendUpIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedTrendUpIcon
          weight={weight}
          {...(rest as unknown as AnimatedTrendUpIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {TRENDUP_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

TrendUpIcon.displayName = 'TrendUpIcon';
