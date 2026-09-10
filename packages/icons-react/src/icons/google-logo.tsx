/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/google-logo.svg

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

export type GoogleLogoIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type GoogleLogoIconHandle = AnimatedIconHandle;
export type AnimatedGoogleLogoIconProps = ZagAnimatedIconProps;

const GOOGLELOGO_ANIMATION_VARIANTS = getIconAnimationVariants('google-logo');

const GOOGLELOGO_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M224 128a96 96 0 1 1-21.95-61.09 8 8 0 1 1-12.33 10.18A80 80 0 1 0 207.6 136H128a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8" />
    </>
  ),
  filled: (
    <>
      <path d="M228 128a100 100 0 1 1-22.86-63.64 12 12 0 0 1-18.51 15.28A76 76 0 1 0 203.05 140H128a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12" />
    </>
  ),
};

/**
 * Animated GoogleLogo icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedGoogleLogoIcon = forwardRef<AnimatedIconHandle, AnimatedGoogleLogoIconProps>(
  function AnimatedGoogleLogoIcon(props, ref) {
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
          variants={GOOGLELOGO_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {GOOGLELOGO_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedGoogleLogoIcon.displayName = 'AnimatedGoogleLogoIcon';

/**
 * GoogleLogo icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const GoogleLogoIcon = forwardRef<SVGSVGElement, GoogleLogoIconProps>(
  function GoogleLogoIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedGoogleLogoIcon
          weight={weight}
          {...(rest as unknown as AnimatedGoogleLogoIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {GOOGLELOGO_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

GoogleLogoIcon.displayName = 'GoogleLogoIcon';
