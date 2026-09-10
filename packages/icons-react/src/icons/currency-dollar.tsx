/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/currency-dollar.svg

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

export type CurrencyDollarIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type CurrencyDollarIconHandle = AnimatedIconHandle;
export type AnimatedCurrencyDollarIconProps = ZagAnimatedIconProps;

const CURRENCYDOLLAR_ANIMATION_VARIANTS = getIconAnimationVariants('currency-dollar');

const CURRENCYDOLLAR_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="none" d="M152 120h-16V56h8a32 32 0 0 1 32 32 8 8 0 0 0 16 0 48.05 48.05 0 0 0-48-48h-8V24a8 8 0 0 0-16 0v16h-8a48 48 0 0 0 0 96h8v64h-16a32 32 0 0 1-32-32 8 8 0 0 0-16 0 48.05 48.05 0 0 0 48 48h16v16a8 8 0 0 0 16 0v-16h16a48 48 0 0 0 0-96m-40 0a32 32 0 0 1 0-64h8v64Zm40 80h-16v-64h16a32 32 0 0 1 0 64" />
    </>
  ),
  filled: (
    <>
      <path d="M152 116h-12V60h4a28 28 0 0 1 28 28 12 12 0 0 0 24 0 52.06 52.06 0 0 0-52-52h-4V24a12 12 0 0 0-24 0v12h-4a52 52 0 0 0 0 104h4v56h-12a28 28 0 0 1-28-28 12 12 0 0 0-24 0 52.06 52.06 0 0 0 52 52h12v12a12 12 0 0 0 24 0v-12h12a52 52 0 0 0 0-104m-40 0a28 28 0 0 1 0-56h4v56Zm40 80h-12v-56h12a28 28 0 0 1 0 56" />
    </>
  ),
};

/**
 * Animated CurrencyDollar icon (viewBox "0 0 256 256").
 * Features hover micro-interactions and imperative control via ref.
 */
export const AnimatedCurrencyDollarIcon = forwardRef<AnimatedIconHandle, AnimatedCurrencyDollarIconProps>(
  function AnimatedCurrencyDollarIcon(props, ref) {
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
          variants={CURRENCYDOLLAR_ANIMATION_VARIANTS}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {CURRENCYDOLLAR_GLYPHS[weight]}
        </motion.svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedCurrencyDollarIcon.displayName = 'AnimatedCurrencyDollarIcon';

/**
 * CurrencyDollar icon (viewBox "0 0 256 256").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const CurrencyDollarIcon = forwardRef<SVGSVGElement, CurrencyDollarIconProps>(
  function CurrencyDollarIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedCurrencyDollarIcon
          weight={weight}
          {...(rest as unknown as AnimatedCurrencyDollarIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 256 256" data-weight={weight} {...rest}>
        {CURRENCYDOLLAR_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

CurrencyDollarIcon.displayName = 'CurrencyDollarIcon';
