import type { Variants } from 'motion/react';

/**
 * Default smooth spring pulse variant used when an icon does not have
 * a dedicated custom animation.
 */
export const DEFAULT_ANIMATION_VARIANTS: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  animate: {
    scale: [1, 1.14, 0.96, 1.04, 1],
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Heartbeat pulse animation variant, inspired by pqoqubbw/icons heart icon.
 */
export const HEART_ANIMATION_VARIANTS: Variants = {
  normal: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  animate: {
    scale: [1, 1.12, 1, 1.12, 1],
    transition: {
      duration: 0.6,
      repeat: 1,
      ease: 'easeInOut',
    },
  },
};

/**
 * Home bounce and subtle lift animation variant.
 */
export const HOME_ANIMATION_VARIANTS: Variants = {
  normal: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  animate: {
    y: [0, -3, 0],
    scale: [1, 1.06, 1],
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Registry of custom animation variants per icon stem.
 */
export const ICON_ANIMATION_VARIANTS: Record<string, Variants> = {
  heart: HEART_ANIMATION_VARIANTS,
  home: HOME_ANIMATION_VARIANTS,
};

/**
 * Resolves the animation variants for a given icon stem.
 */
export function getIconAnimationVariants(stem: string): Variants {
  return ICON_ANIMATION_VARIANTS[stem] ?? DEFAULT_ANIMATION_VARIANTS;
}
