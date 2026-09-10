/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/text-align-left.svg

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

export type TextAlignLeftIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type TextAlignLeftIconHandle = AnimatedIconHandle;
export type AnimatedTextAlignLeftIconProps = ZagAnimatedIconProps;

const TEXTALIGNLEFT_ANIMATION_VARIANTS = getIconAnimationVariants('text-align-left');

const TEXTALIGNLEFT_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 48h128a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 24H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-48 40H40a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16" />
    </>
  ),
  filled: (
    <>
      <path d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 52h128a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 16H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m-48 40H40a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24" />
    </>
  ),
};

/**
 * Animated TextAlignLeft icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedTextAlignLeftIcon = forwardRef<AnimatedIconHandle, AnimatedTextAlignLeftIconProps>(
  function AnimatedTextAlignLeftIcon(props, ref) {
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
          variants={TEXTALIGNLEFT_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {TEXTALIGNLEFT_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedTextAlignLeftIcon.displayName = 'AnimatedTextAlignLeftIcon';

/**
 * TextAlignLeft icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const TextAlignLeftIcon = forwardRef<SVGSVGElement, TextAlignLeftIconProps>(
  function TextAlignLeftIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedTextAlignLeftIcon
          weight={weight}
          {...(rest as unknown as AnimatedTextAlignLeftIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {TEXTALIGNLEFT_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

TextAlignLeftIcon.displayName = 'TextAlignLeftIcon';
