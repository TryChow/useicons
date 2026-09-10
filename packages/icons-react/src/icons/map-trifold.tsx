/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/map-trifold.svg

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

export type MapTrifoldIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type MapTrifoldIconHandle = AnimatedIconHandle;
export type AnimatedMapTrifoldIconProps = ZagAnimatedIconProps;

const MAPTRIFOLD_ANIMATION_VARIANTS = getIconAnimationVariants('map-trifold');

const MAPTRIFOLD_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28 61.35 30.68a8.15 8.15 0 0 0 3.58.84 8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M104 52.94l48 24v126.12l-48-24Zm-64 9.31 48-12v127.5l-48 12Zm176 131.5-48 12V78.25l48-12Z" />
    </>
  ),
  filled: (
    <>
      <path d="M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28 61.35 30.68a8.15 8.15 0 0 0 3.58.84 8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M96 176a8 8 0 0 0-1.94.24L40 189.75V62.25l55.07-13.77.93.46Zm120 17.75-55.07 13.77-.93-.46V80a8 8 0 0 0 1.94-.23L216 66.25Z" />
    </>
  ),
};

/**
 * Animated MapTrifold icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedMapTrifoldIcon = forwardRef<AnimatedIconHandle, AnimatedMapTrifoldIconProps>(
  function AnimatedMapTrifoldIcon(props, ref) {
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
          variants={MAPTRIFOLD_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {MAPTRIFOLD_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedMapTrifoldIcon.displayName = 'AnimatedMapTrifoldIcon';

/**
 * MapTrifold icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const MapTrifoldIcon = forwardRef<SVGSVGElement, MapTrifoldIconProps>(
  function MapTrifoldIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedMapTrifoldIcon
          weight={weight}
          {...(rest as unknown as AnimatedMapTrifoldIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {MAPTRIFOLD_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

MapTrifoldIcon.displayName = 'MapTrifoldIcon';
