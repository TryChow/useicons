/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/star.svg

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

export type StarIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type StarIconHandle = AnimatedIconHandle;
export type AnimatedStarIconProps = ZagAnimatedIconProps;

const STAR_ANIMATION_VARIANTS = getIconAnimationVariants('star');

const STAR_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23 31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.38 16.38 0 0 0 24.5 17.82l50.5-31.08 50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07 45-38.83a16.43 16.43 0 0 0 4.94-17.59m-15.34 5.47-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-54.72-33.65a8 8 0 0 0-8.38 0l-54.72 33.67c-.15.09-.19.12-.38 0a.37.37 0 0 1-.17-.48l14.88-62.8a8 8 0 0 0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16a8 8 0 0 0 6.72-4.94l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153 91.86a8 8 0 0 0 6.75 4.92l63.92 5.16c.15 0 .24 0 .33.29s0 .4-.16.5" />
    </>
  ),
  filled: (
    <>
      <path d="m234.29 114.85-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76 22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08 59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" />
    </>
  ),
};

/**
 * Animated Star icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedStarIcon = forwardRef<AnimatedIconHandle, AnimatedStarIconProps>(
  function AnimatedStarIcon(props, ref) {
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
          variants={STAR_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {STAR_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedStarIcon.displayName = 'AnimatedStarIcon';

/**
 * Star icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const StarIcon = forwardRef<SVGSVGElement, StarIconProps>(
  function StarIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedStarIcon
          weight={weight}
          {...(rest as unknown as AnimatedStarIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {STAR_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

StarIcon.displayName = 'StarIcon';
