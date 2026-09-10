/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/exclude.svg

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

export type ExcludeIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type ExcludeIconHandle = AnimatedIconHandle;
export type AnimatedExcludeIconProps = ZagAnimatedIconProps;

const EXCLUDE_ANIMATION_VARIANTS = getIconAnimationVariants('exclude');

const EXCLUDE_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M174.63 81.37a80 80 0 1 0-93.26 93.26 80 80 0 1 0 93.26-93.26M224 160c0 1.52-.07 3-.18 4.51l-50-50A80 80 0 0 0 176 98a64.11 64.11 0 0 1 48 62m-13.47 39.21-52.62-52.61a80.5 80.5 0 0 0 9.93-15.44L219.7 183a64 64 0 0 1-9.17 16.21M183 219.7l-51.86-51.86a80.5 80.5 0 0 0 15.44-9.93l52.61 52.62A64 64 0 0 1 183 219.7M45.47 56.79l52.62 52.61a80.5 80.5 0 0 0-9.93 15.44L36.3 73a64 64 0 0 1 9.17-16.21M73 36.3l51.86 51.86a80.5 80.5 0 0 0-15.44 9.93L56.79 45.47A64 64 0 0 1 73 36.3M160 96a64.07 64.07 0 0 1-64 64 64.07 64.07 0 0 1 64-64m-2-16a80 80 0 0 0-16.49 2.13l-50-50C93 32.07 94.48 32 96 32a64.11 64.11 0 0 1 62 48.05ZM32 96c0-1.52.07-3 .18-4.51l50 50A80 80 0 0 0 80.05 158 64.11 64.11 0 0 1 32 96m66 80a80 80 0 0 0 16.49-2.13l50 50c-1.49.11-3 .18-4.51.18A64.11 64.11 0 0 1 98 176" />
    </>
  ),
  filled: (
    <>
      <path d="M240 160a80 80 0 0 1-158.64 14.64 80 80 0 0 0 93.28-93.28A80 80 0 0 1 240 160m-80-80a80.3 80.3 0 0 1 14.64 1.36 80 80 0 1 0-93.28 93.28A80 80 0 0 1 160 80" />
    </>
  ),
};

/**
 * Animated Exclude icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedExcludeIcon = forwardRef<AnimatedIconHandle, AnimatedExcludeIconProps>(
  function AnimatedExcludeIcon(props, ref) {
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
          variants={EXCLUDE_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {EXCLUDE_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedExcludeIcon.displayName = 'AnimatedExcludeIcon';

/**
 * Exclude icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const ExcludeIcon = forwardRef<SVGSVGElement, ExcludeIconProps>(
  function ExcludeIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedExcludeIcon
          weight={weight}
          {...(rest as unknown as AnimatedExcludeIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {EXCLUDE_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

ExcludeIcon.displayName = 'ExcludeIcon';
