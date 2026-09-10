/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/trend-down.svg

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

export type TrendDownIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type TrendDownIconHandle = AnimatedIconHandle;
export type AnimatedTrendDownIconProps = ZagAnimatedIconProps;

const TRENDDOWN_ANIMATION_VARIANTS = getIconAnimationVariants('trend-down');

const TRENDDOWN_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M240 128v64a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h44.69L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 124.69l34.34-34.35a8 8 0 0 1 11.32 0L224 172.69V128a8 8 0 0 1 16 0" />
    </>
  ),
  filled: (
    <>
      <path d="M240 128v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-5.66-13.66L188.69 160 136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 124.69l34.34-34.35a8 8 0 0 1 11.32 0L200 148.69l26.34-26.35A8 8 0 0 1 240 128" />
    </>
  ),
};

/**
 * Animated TrendDown icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedTrendDownIcon = forwardRef<AnimatedIconHandle, AnimatedTrendDownIconProps>(
  function AnimatedTrendDownIcon(props, ref) {
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
          variants={TRENDDOWN_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {TRENDDOWN_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedTrendDownIcon.displayName = 'AnimatedTrendDownIcon';

/**
 * TrendDown icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const TrendDownIcon = forwardRef<SVGSVGElement, TrendDownIconProps>(
  function TrendDownIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedTrendDownIcon
          weight={weight}
          {...(rest as unknown as AnimatedTrendDownIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {TRENDDOWN_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

TrendDownIcon.displayName = 'TrendDownIcon';
