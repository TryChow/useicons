/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/chart-pie.svg

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

export type ChartPieIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type ChartPieIconHandle = AnimatedIconHandle;
export type AnimatedChartPieIconProps = ZagAnimatedIconProps;

const CHARTPIE_ANIMATION_VARIANTS = getIconAnimationVariants('chart-pie');

const CHARTPIE_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m71.87 53.27L136 114.14V40.37a88 88 0 0 1 63.87 36.9M120 40.37v83l-71.89 41.5A88 88 0 0 1 120 40.37M128 216a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216" />
    </>
  ),
  filled: (
    <>
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a88 88 0 0 1 71.87 37.27L128 118.76Zm0 176a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216" />
    </>
  ),
};

/**
 * Animated ChartPie icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedChartPieIcon = forwardRef<AnimatedIconHandle, AnimatedChartPieIconProps>(
  function AnimatedChartPieIcon(props, ref) {
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
          variants={CHARTPIE_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {CHARTPIE_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedChartPieIcon.displayName = 'AnimatedChartPieIcon';

/**
 * ChartPie icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const ChartPieIcon = forwardRef<SVGSVGElement, ChartPieIconProps>(
  function ChartPieIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedChartPieIcon
          weight={weight}
          {...(rest as unknown as AnimatedChartPieIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {CHARTPIE_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

ChartPieIcon.displayName = 'ChartPieIcon';
