/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/caret-up-down.svg

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

export type CaretUpDownIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type CaretUpDownIconHandle = AnimatedIconHandle;
export type AnimatedCaretUpDownIconProps = ZagAnimatedIconProps;

const CARETUPDOWN_ANIMATION_VARIANTS = getIconAnimationVariants('caret-up-down');

const CARETUPDOWN_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0m-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32" />
    </>
  ),
  filled: (
    <>
      <path d="M72.61 83.06a8 8 0 0 1 1.73-8.72l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 176 88H80a8 8 0 0 1-7.39-4.94M176 168H80a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 176 168" />
    </>
  ),
};

/**
 * Animated CaretUpDown icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedCaretUpDownIcon = forwardRef<AnimatedIconHandle, AnimatedCaretUpDownIconProps>(
  function AnimatedCaretUpDownIcon(props, ref) {
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
          variants={CARETUPDOWN_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {CARETUPDOWN_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedCaretUpDownIcon.displayName = 'AnimatedCaretUpDownIcon';

/**
 * CaretUpDown icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const CaretUpDownIcon = forwardRef<SVGSVGElement, CaretUpDownIconProps>(
  function CaretUpDownIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedCaretUpDownIcon
          weight={weight}
          {...(rest as unknown as AnimatedCaretUpDownIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {CARETUPDOWN_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

CaretUpDownIcon.displayName = 'CaretUpDownIcon';
