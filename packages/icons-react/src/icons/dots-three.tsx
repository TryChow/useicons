/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/dots-three.svg

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

export type DotsThreeIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type DotsThreeIconHandle = AnimatedIconHandle;
export type AnimatedDotsThreeIconProps = ZagAnimatedIconProps;

const DOTSTHREE_ANIMATION_VARIANTS = getIconAnimationVariants('dots-three');

const DOTSTHREE_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M140 128a12 12 0 1 1-12-12 12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-136 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
    </>
  ),
  filled: (
    <>
      <path d="M144 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16" />
    </>
  ),
};

/**
 * Animated DotsThree icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedDotsThreeIcon = forwardRef<AnimatedIconHandle, AnimatedDotsThreeIconProps>(
  function AnimatedDotsThreeIcon(props, ref) {
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
          variants={DOTSTHREE_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {DOTSTHREE_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedDotsThreeIcon.displayName = 'AnimatedDotsThreeIcon';

/**
 * DotsThree icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const DotsThreeIcon = forwardRef<SVGSVGElement, DotsThreeIconProps>(
  function DotsThreeIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedDotsThreeIcon
          weight={weight}
          {...(rest as unknown as AnimatedDotsThreeIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {DOTSTHREE_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

DotsThreeIcon.displayName = 'DotsThreeIcon';
