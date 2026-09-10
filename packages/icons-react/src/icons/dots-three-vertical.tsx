/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/dots-three-vertical.svg

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

export type DotsThreeVerticalIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type DotsThreeVerticalIconHandle = AnimatedIconHandle;
export type AnimatedDotsThreeVerticalIconProps = ZagAnimatedIconProps;

const DOTSTHREEVERTICAL_ANIMATION_VARIANTS = getIconAnimationVariants('dots-three-vertical');

const DOTSTHREEVERTICAL_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M140 128a12 12 0 1 1-12-12 12 12 0 0 1 12 12m-12-56a12 12 0 1 0-12-12 12 12 0 0 0 12 12m0 112a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
    </>
  ),
  filled: (
    <>
      <path d="M112 60a16 16 0 1 1 16 16 16 16 0 0 1-16-16m16 52a16 16 0 1 0 16 16 16 16 0 0 0-16-16m0 68a16 16 0 1 0 16 16 16 16 0 0 0-16-16" />
    </>
  ),
};

/**
 * Animated DotsThreeVertical icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedDotsThreeVerticalIcon = forwardRef<AnimatedIconHandle, AnimatedDotsThreeVerticalIconProps>(
  function AnimatedDotsThreeVerticalIcon(props, ref) {
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
          variants={DOTSTHREEVERTICAL_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {DOTSTHREEVERTICAL_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedDotsThreeVerticalIcon.displayName = 'AnimatedDotsThreeVerticalIcon';

/**
 * DotsThreeVertical icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const DotsThreeVerticalIcon = forwardRef<SVGSVGElement, DotsThreeVerticalIconProps>(
  function DotsThreeVerticalIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedDotsThreeVerticalIcon
          weight={weight}
          {...(rest as unknown as AnimatedDotsThreeVerticalIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {DOTSTHREEVERTICAL_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

DotsThreeVerticalIcon.displayName = 'DotsThreeVerticalIcon';
