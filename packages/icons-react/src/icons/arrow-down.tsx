/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/arrow-down.svg

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

export type ArrowDownIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type ArrowDownIconHandle = AnimatedIconHandle;
export type AnimatedArrowDownIconProps = ZagAnimatedIconProps;

const ARROWDOWN_ANIMATION_VARIANTS = getIconAnimationVariants('arrow-down');

const ARROWDOWN_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32" />
    </>
  ),
  filled: (
    <>
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72A8 8 0 0 1 56 136h64V40a8 8 0 0 1 16 0v96h64a8 8 0 0 1 5.66 13.66" />
    </>
  ),
};

/**
 * Animated ArrowDown icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedArrowDownIcon = forwardRef<AnimatedIconHandle, AnimatedArrowDownIconProps>(
  function AnimatedArrowDownIcon(props, ref) {
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
          variants={ARROWDOWN_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {ARROWDOWN_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedArrowDownIcon.displayName = 'AnimatedArrowDownIcon';

/**
 * ArrowDown icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const ArrowDownIcon = forwardRef<SVGSVGElement, ArrowDownIconProps>(
  function ArrowDownIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedArrowDownIcon
          weight={weight}
          {...(rest as unknown as AnimatedArrowDownIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {ARROWDOWN_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

ArrowDownIcon.displayName = 'ArrowDownIcon';
