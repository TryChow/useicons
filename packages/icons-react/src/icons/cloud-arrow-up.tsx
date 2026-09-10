/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/cloud-arrow-up.svg

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

export type CloudArrowUpIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type CloudArrowUpIconHandle = AnimatedIconHandle;
export type AnimatedCloudArrowUpIconProps = ZagAnimatedIconProps;

const CLOUDARROWUP_ANIMATION_VARIANTS = getIconAnimationVariants('cloud-arrow-up');

const CLOUDARROWUP_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M178.34 165.66 160 147.31V208a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32M160 40a88.08 88.08 0 0 0-78.71 48.68A64 64 0 1 0 72 216h40a8 8 0 0 0 0-16H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.12A88 88 0 0 0 72 128a8 8 0 0 0 16 0 72 72 0 1 1 100.8 66 8 8 0 0 0 3.2 15.34 7.9 7.9 0 0 0 3.2-.68A88 88 0 0 0 160 40" />
    </>
  ),
  filled: (
    <>
      <path d="M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27 8 8 0 0 1-8.57-8 103.7 103.7 0 0 1 5.34-32.92 4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-50.27 9.14a8 8 0 0 1-11.32 0L168 115.31V176a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32" />
    </>
  ),
};

/**
 * Animated CloudArrowUp icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedCloudArrowUpIcon = forwardRef<AnimatedIconHandle, AnimatedCloudArrowUpIconProps>(
  function AnimatedCloudArrowUpIcon(props, ref) {
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
          variants={CLOUDARROWUP_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {CLOUDARROWUP_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedCloudArrowUpIcon.displayName = 'AnimatedCloudArrowUpIcon';

/**
 * CloudArrowUp icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const CloudArrowUpIcon = forwardRef<SVGSVGElement, CloudArrowUpIconProps>(
  function CloudArrowUpIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedCloudArrowUpIcon
          weight={weight}
          {...(rest as unknown as AnimatedCloudArrowUpIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {CLOUDARROWUP_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

CloudArrowUpIcon.displayName = 'CloudArrowUpIcon';
