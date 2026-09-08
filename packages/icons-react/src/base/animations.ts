import type { Transition, Variants } from 'motion/react';

/**
 * Standard path-drawing transition used by line/door drawing animations,
 * inspired by pqoqubbw/icons.
 */
export const DEFAULT_PATH_TRANSITION: Transition = {
  duration: 0.6,
  opacity: { duration: 0.2 },
};

export const HOME_DEFAULT_TRANSITION: Transition = DEFAULT_PATH_TRANSITION;

/**
 * Path drawing variant that animates pathLength and opacity from 0 to 1.
 */
export const PATH_DRAW_VARIANTS: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
  },
};

export const HOME_PATH_VARIANTS: Variants = PATH_DRAW_VARIANTS;

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
 * Home animation variant matching reference repo door drawing interaction.
 */
export const HOME_ANIMATION_VARIANTS: Variants = PATH_DRAW_VARIANTS;

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
