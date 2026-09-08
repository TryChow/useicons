/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/arrow-right.svg

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

export type ArrowRightIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type ArrowRightIconHandle = AnimatedIconHandle;
export type AnimatedArrowRightIconProps = ZagAnimatedIconProps;

const ARROWRIGHT_ANIMATION_VARIANTS = getIconAnimationVariants('arrow-right');

const ARROWRIGHT_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32" />
    </>
  ),
  filled: (
    <>
      <path d="m221.66 133.66-72 72A8 8 0 0 1 136 200v-64H40a8 8 0 0 1 0-16h96V56a8 8 0 0 1 13.66-5.66l72 72a8 8 0 0 1 0 11.32" />
    </>
  ),
};

/**
 * Animated ArrowRight icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedArrowRightIcon = forwardRef<AnimatedIconHandle, AnimatedArrowRightIconProps>(
  function AnimatedArrowRightIcon(props, ref) {
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
          variants={ARROWRIGHT_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {ARROWRIGHT_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedArrowRightIcon.displayName = 'AnimatedArrowRightIcon';

/**
 * ArrowRight icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const ArrowRightIcon = forwardRef<SVGSVGElement, ArrowRightIconProps>(
  function ArrowRightIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedArrowRightIcon
          weight={weight}
          {...(rest as unknown as AnimatedArrowRightIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {ARROWRIGHT_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

ArrowRightIcon.displayName = 'ArrowRightIcon';
