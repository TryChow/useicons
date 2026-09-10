/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/arrows-down-up.svg

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

export type ArrowsDownUpIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type ArrowsDownUpIconHandle = AnimatedIconHandle;
export type AnimatedArrowsDownUpIconProps = ZagAnimatedIconProps;

const ARROWSDOWNUP_ANIMATION_VARIANTS = getIconAnimationVariants('arrows-down-up');

const ARROWSDOWNUP_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M117.66 170.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L72 188.69V48a8 8 0 0 1 16 0v140.69l18.34-18.35a8 8 0 0 1 11.32 0m96-96-32-32a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L168 67.31V208a8 8 0 0 0 16 0V67.31l18.34 18.35a8 8 0 0 0 11.32-11.32" />
    </>
  ),
  filled: (
    <>
      <path d="M119.39 172.94a8 8 0 0 1-1.73 8.72l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 48 168h24V48a8 8 0 0 1 16 0v120h24a8 8 0 0 1 7.39 4.94m94.27-98.6-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 144 88h24v120a8 8 0 0 0 16 0V88h24a8 8 0 0 0 5.66-13.66" />
    </>
  ),
};

/**
 * Animated ArrowsDownUp icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedArrowsDownUpIcon = forwardRef<AnimatedIconHandle, AnimatedArrowsDownUpIconProps>(
  function AnimatedArrowsDownUpIcon(props, ref) {
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
          variants={ARROWSDOWNUP_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {ARROWSDOWNUP_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedArrowsDownUpIcon.displayName = 'AnimatedArrowsDownUpIcon';

/**
 * ArrowsDownUp icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const ArrowsDownUpIcon = forwardRef<SVGSVGElement, ArrowsDownUpIconProps>(
  function ArrowsDownUpIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedArrowsDownUpIcon
          weight={weight}
          {...(rest as unknown as AnimatedArrowsDownUpIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {ARROWSDOWNUP_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

ArrowsDownUpIcon.displayName = 'ArrowsDownUpIcon';
