/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/text-italic.svg

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

export type TextItalicIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type TextItalicIconHandle = AnimatedIconHandle;
export type AnimatedTextItalicIconProps = ZagAnimatedIconProps;

const TEXTITALIC_ANIMATION_VARIANTS = getIconAnimationVariants('text-italic');

const TEXTITALIC_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M200 56a8 8 0 0 1-8 8h-34.23L115.1 192H144a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h34.23L140.9 64H112a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8" />
    </>
  ),
  filled: (
    <>
      <path d="M204 56a12 12 0 0 1-12 12h-31.35l-40 120H144a12 12 0 0 1 0 24H64a12 12 0 0 1 0-24h31.35l40-120H112a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12" />
    </>
  ),
};

/**
 * Animated TextItalic icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedTextItalicIcon = forwardRef<AnimatedIconHandle, AnimatedTextItalicIconProps>(
  function AnimatedTextItalicIcon(props, ref) {
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
          variants={TEXTITALIC_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {TEXTITALIC_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedTextItalicIcon.displayName = 'AnimatedTextItalicIcon';

/**
 * TextItalic icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const TextItalicIcon = forwardRef<SVGSVGElement, TextItalicIconProps>(
  function TextItalicIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedTextItalicIcon
          weight={weight}
          {...(rest as unknown as AnimatedTextItalicIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {TEXTITALIC_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

TextItalicIcon.displayName = 'TextItalicIcon';
