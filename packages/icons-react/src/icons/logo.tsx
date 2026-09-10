/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/logo.svg

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

export type LogoIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type LogoIconHandle = AnimatedIconHandle;
export type AnimatedLogoIconProps = ZagAnimatedIconProps;

const LOGO_ANIMATION_VARIANTS = getIconAnimationVariants('logo');

const LOGO_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M224 160V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8zm-60.69 48-40-40h33.38l40 40ZM48 59.31l40 40v33.38l-40-40ZM92.69 48l40 40H99.31l-40-40ZM104 152v-48h48v48Zm64 4.69v-33.38l40 40v33.38Zm40-16L171.31 104H208Zm-56-56L115.31 48H152ZM48 115.31 84.69 152H48Zm56 56L140.69 208H104Z" />
    </>
  ),
  filled: (
    <>
      <path d="M88 88v80H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8v48Zm128 0h-48v80H88v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8" />
    </>
  ),
};

/**
 * Animated Logo icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedLogoIcon = forwardRef<AnimatedIconHandle, AnimatedLogoIconProps>(
  function AnimatedLogoIcon(props, ref) {
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
          variants={LOGO_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {LOGO_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedLogoIcon.displayName = 'AnimatedLogoIcon';

/**
 * Logo icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const LogoIcon = forwardRef<SVGSVGElement, LogoIconProps>(
  function LogoIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedLogoIcon
          weight={weight}
          {...(rest as unknown as AnimatedLogoIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {LOGO_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

LogoIcon.displayName = 'LogoIcon';
