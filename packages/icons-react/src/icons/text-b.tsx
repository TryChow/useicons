/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/text-b.svg

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

export type TextBIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type TextBIconHandle = AnimatedIconHandle;
export type AnimatedTextBIconProps = ZagAnimatedIconProps;

const TEXTB_ANIMATION_VARIANTS = getIconAnimationVariants('text-b');

const TEXTB_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M178.48 115.7A44 44 0 0 0 148 40H80a8 8 0 0 0-8 8v152a8 8 0 0 0 8 8h80a48 48 0 0 0 18.48-92.3M88 56h60a28 28 0 0 1 0 56H88Zm72 136H88v-64h72a32 32 0 0 1 0 64" />
    </>
  ),
  filled: (
    <>
      <path d="M185.08 114.46A48 48 0 0 0 148 36H80a12 12 0 0 0-12 12v152a12 12 0 0 0 12 12h80a52 52 0 0 0 25.08-97.54M92 60h56a24 24 0 0 1 0 48H92Zm68 128H92v-56h68a28 28 0 0 1 0 56" />
    </>
  ),
};

/**
 * Animated TextB icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedTextBIcon = forwardRef<AnimatedIconHandle, AnimatedTextBIconProps>(
  function AnimatedTextBIcon(props, ref) {
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
          variants={TEXTB_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {TEXTB_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedTextBIcon.displayName = 'AnimatedTextBIcon';

/**
 * TextB icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const TextBIcon = forwardRef<SVGSVGElement, TextBIconProps>(
  function TextBIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedTextBIcon
          weight={weight}
          {...(rest as unknown as AnimatedTextBIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {TEXTB_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

TextBIcon.displayName = 'TextBIcon';
