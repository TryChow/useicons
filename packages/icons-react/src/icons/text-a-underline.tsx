/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/text-a-underline.svg

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

export type TextAUnderlineIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type TextAUnderlineIconHandle = AnimatedIconHandle;
export type AnimatedTextAUnderlineIconProps = ZagAnimatedIconProps;

const TEXTAUNDERLINE_ANIMATION_VARIANTS = getIconAnimationVariants('text-a-underline');

const TEXTAUNDERLINE_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M60.59 175.24a8 8 0 0 0 10.65-3.83L87.9 136h80.2l16.66 35.41a8 8 0 1 0 14.48-6.82l-64-136a8 8 0 0 0-14.48 0l-64 136a8 8 0 0 0 3.83 10.65M128 50.79 160.57 120H95.43ZM224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" />
    </>
  ),
  filled: (
    <>
      <path d="M58.89 178.86a12 12 0 0 0 16-5.75L90.44 140h75.12l15.58 33.11a12 12 0 0 0 21.72-10.22l-64-136a12 12 0 0 0-21.72 0l-64 136a12 12 0 0 0 5.75 15.97M128 60.18 154.27 116h-52.54ZM228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12" />
    </>
  ),
};

/**
 * Animated TextAUnderline icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedTextAUnderlineIcon = forwardRef<AnimatedIconHandle, AnimatedTextAUnderlineIconProps>(
  function AnimatedTextAUnderlineIcon(props, ref) {
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
          variants={TEXTAUNDERLINE_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {TEXTAUNDERLINE_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedTextAUnderlineIcon.displayName = 'AnimatedTextAUnderlineIcon';

/**
 * TextAUnderline icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const TextAUnderlineIcon = forwardRef<SVGSVGElement, TextAUnderlineIconProps>(
  function TextAUnderlineIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedTextAUnderlineIcon
          weight={weight}
          {...(rest as unknown as AnimatedTextAUnderlineIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {TEXTAUNDERLINE_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

TextAUnderlineIcon.displayName = 'TextAUnderlineIcon';
