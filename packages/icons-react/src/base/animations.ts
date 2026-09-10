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

/* ------------------------------------------------------------------ */
/* Directional & Navigation Variants                                   */
/* ------------------------------------------------------------------ */

export const ARROW_DOWN_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, 4, 0],
    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
  },
};

export const ARROW_LEFT_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, -4, 0],
    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
  },
};

export const ARROW_RIGHT_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, 4, 0],
    transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
  },
};

export const ARROWS_DOWN_UP_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, -3, 3, 0],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export const CARET_DOWN_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, 3, 0],
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export const CARET_LEFT_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, -3, 0],
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export const CARET_RIGHT_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, 3, 0],
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export const CARET_UP_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, -3, 0],
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export const CARET_UP_DOWN_ANIMATION_VARIANTS: Variants = {
  normal: { scaleY: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scaleY: [1, 1.15, 0.95, 1],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const NAVIGATION_ARROW_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, y: 0, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, 3, 0],
    y: [0, -3, 0],
    rotate: [0, 10, -5, 0],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

/* ------------------------------------------------------------------ */
/* Action & Control Variants                                          */
/* ------------------------------------------------------------------ */

/**
 * Pendulum ringing swing, matching pqoqubbw/icons bell interaction.
 */
export const BELL_ANIMATION_VARIANTS: Variants = {
  normal: {
    rotate: 0,
    transformOrigin: 'top center',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  animate: {
    rotate: [0, -12, 12, -8, 8, -4, 4, 0],
    transformOrigin: 'top center',
    transition: { duration: 0.65, ease: 'easeInOut' },
  },
};

/**
 * Mechanical gear spin with snappy spring physics.
 */
export const GEAR_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: 180,
    transition: { type: 'spring', stiffness: 65, damping: 10 },
  },
};

/**
 * Scanning radar loop, matching pqoqubbw/icons search interaction.
 */
export const MAGNIFYING_GLASS_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, y: 0, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, 0, -3, 0],
    y: [0, -4, 0, 0],
    rotate: [0, -6, 6, 0],
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

/**
 * Trash bin lid shake and bounce.
 */
export const TRASH_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, -3, 0],
    rotate: [0, -8, 8, -4, 4, 0],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

/**
 * Offset split spring pop for clipboard copy.
 */
export const COPY_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, x: 0, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.1, 0.95, 1],
    x: [0, 2, -2, 0],
    y: [0, -2, 2, 0],
    transition: { type: 'spring', stiffness: 180, damping: 16 },
  },
};

export const SHARE_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.15, 0.95, 1],
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export const SIGN_OUT_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, 4, 0],
    scale: [1, 1.05, 1],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const SIDEBAR_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, scaleX: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, -3, 0],
    scaleX: [1, 0.92, 1.04, 1],
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const DOTS_THREE_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, x: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.18, 0.94, 1],
    x: [0, 2, -2, 0],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const DOTS_THREE_VERTICAL_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.18, 0.94, 1],
    y: [0, -2, 2, 0],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const PLUS_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, 90],
    scale: [1, 1.16, 1],
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  },
};

export const MINUS_ANIMATION_VARIANTS: Variants = {
  normal: { scaleX: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scaleX: [1, 0.7, 1.1, 1],
    transition: { duration: 0.35, ease: 'easeInOut' },
  },
};

/* ------------------------------------------------------------------ */
/* Status & Verification Variants                                     */
/* ------------------------------------------------------------------ */

export const CHECK_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.25, 0.92, 1.06, 1],
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export const CHECK_CIRCLE_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.2, 0.94, 1.04, 1],
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const SHIELD_CHECK_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.16, 0.94, 1.04, 1],
    y: [0, -2, 0],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const WARNING_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, -10, 10, -8, 8, -4, 4, 0],
    scale: [1, 1.1, 1],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export const INFO_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.14, 0.96, 1.04, 1],
    y: [0, -2, 0],
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export const X_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, 90],
    scale: [1, 1.15, 0.92, 1],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

export const X_CIRCLE_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, -15, 15, -8, 8, 0],
    scale: [1, 1.14, 0.94, 1],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

/* ------------------------------------------------------------------ */
/* Celestial, Nature & Light Variants                                 */
/* ------------------------------------------------------------------ */

export const SUN_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, 45, 90],
    scale: [1, 1.14, 1],
    transition: { duration: 0.65, ease: 'easeInOut' },
  },
};

export const MOON_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, -12, 12, -6, 6, 0],
    transition: { duration: 1.0, ease: 'easeInOut' },
  },
};

export const LIGHTNING_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.22, 0.92, 1.1, 1],
    rotate: [0, -8, 8, -4, 4, 0],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

export const CLOCK_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, 360],
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export const STAR_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.25, 0.92, 1.08, 1],
    rotate: [0, 25, -10, 0],
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export const GLOBE_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, 180, 360],
    transition: { duration: 0.85, ease: 'easeInOut' },
  },
};

export const CLOUD_ARROW_UP_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, -5, 0],
    scale: [1, 1.06, 1],
    transition: { duration: 0.45, ease: [0.68, -0.6, 0.32, 1.6] },
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

export const HOME_ANIMATION_VARIANTS: Variants = PATH_DRAW_VARIANTS;

/* ------------------------------------------------------------------ */
/* Content, Media, Files & Devices                                     */
/* ------------------------------------------------------------------ */

export const BOOK_OPEN_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.1, 0.96, 1],
    rotate: [0, -2, 2, 0],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export const CALENDAR_BLANK_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, -3, 0],
    rotate: [0, -3, 3, 0],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const CHART_PIE_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, -8, 0],
    scale: [1, 1.14, 1],
    transition: { type: 'spring', stiffness: 220, damping: 14, bounce: 0.6 },
  },
};

export const CHAT_CIRCLE_TEXT_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.14, 0.94, 1.04, 1],
    rotate: [0, -4, 4, 0],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const CPU_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.1, 0.95, 1.05, 1],
    opacity: [1, 0.88, 1],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const CURRENCY_DOLLAR_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.16, 0.95, 1],
    y: [0, -3, 0],
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export const DEVICE_MOBILE_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, -2, 2, -2, 2, -1, 1, 0],
    rotate: [0, -3, 3, -2, 2, 0],
    transition: { duration: 0.42, ease: 'easeInOut' },
  },
};

export const MONITOR_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.08, 0.96, 1],
    y: [0, -2, 0],
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const EXCLUDE_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, 90],
    scale: [1, 1.1, 1],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export const FILE_CODE_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, -2, 2, 0],
    scale: [1, 1.06, 1],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

export const FILE_TEXT_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, -3, 0],
    scale: [1, 1.06, 1],
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const FOLDER_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.08, 0.96, 1],
    y: [0, -2, 0],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

export const FOLDER_OPEN_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, -8, 6, -4, 0],
    transition: { duration: 0.55, ease: 'easeInOut' },
  },
};

export const CORNERS_OUT_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.18, 0.94, 1.04, 1],
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export const FRAME_CORNERS_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 0.92, 1.1, 1],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

export const MAP_TRIFOLD_ANIMATION_VARIANTS: Variants = {
  normal: { scaleX: 1, scaleY: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scaleX: [1, 1.14, 0.96, 1],
    scaleY: [1, 0.96, 1.04, 1],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export const USER_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, -3, 0],
    scale: [1, 1.08, 0.96, 1],
    transition: { duration: 0.42, ease: 'easeOut' },
  },
};

export const ROBOT_ANIMATION_VARIANTS: Variants = {
  normal: { rotate: 0, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    rotate: [0, -12, 12, -6, 6, 0],
    y: [0, -2, 0],
    transition: { duration: 0.55, ease: 'easeInOut' },
  },
};

export const LOGO_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.12, 0.96, 1.04, 1],
    rotate: [0, -4, 4, 0],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export const GOOGLE_LOGO_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, rotate: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.14, 0.95, 1.05, 1],
    rotate: [0, -6, 6, 0],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

/* ------------------------------------------------------------------ */
/* Typography Variants                                                */
/* ------------------------------------------------------------------ */

export const TEXT_A_UNDERLINE_ANIMATION_VARIANTS: Variants = {
  normal: { y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    y: [0, -2, 0],
    scale: [1, 1.08, 1],
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const TEXT_ALIGN_LEFT_ANIMATION_VARIANTS: Variants = {
  normal: { x: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    x: [0, 3, -1, 0],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

export const TEXT_B_ANIMATION_VARIANTS: Variants = {
  normal: { scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    scale: [1, 1.2, 0.94, 1.05, 1],
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export const TEXT_ITALIC_ANIMATION_VARIANTS: Variants = {
  normal: { skewX: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  animate: {
    skewX: [0, -12, 0],
    scale: [1, 1.06, 1],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

/* ------------------------------------------------------------------ */
/* Master Icon Animation Registry                                     */
/* ------------------------------------------------------------------ */

/**
 * Registry mapping icon stems to their bespoke micro-interaction variants.
 */
export const ICON_ANIMATION_VARIANTS: Record<string, Variants> = {
  // Navigation & Directional
  'arrow-down': ARROW_DOWN_ANIMATION_VARIANTS,
  'arrow-left': ARROW_LEFT_ANIMATION_VARIANTS,
  'arrow-right': ARROW_RIGHT_ANIMATION_VARIANTS,
  'arrows-down-up': ARROWS_DOWN_UP_ANIMATION_VARIANTS,
  'caret-down': CARET_DOWN_ANIMATION_VARIANTS,
  'caret-left': CARET_LEFT_ANIMATION_VARIANTS,
  'caret-right': CARET_RIGHT_ANIMATION_VARIANTS,
  'caret-up': CARET_UP_ANIMATION_VARIANTS,
  'caret-up-down': CARET_UP_DOWN_ANIMATION_VARIANTS,
  'navigation-arrow': NAVIGATION_ARROW_ANIMATION_VARIANTS,

  // Actions & Controls
  bell: BELL_ANIMATION_VARIANTS,
  gear: GEAR_ANIMATION_VARIANTS,
  settings: GEAR_ANIMATION_VARIANTS,
  'magnifying-glass': MAGNIFYING_GLASS_ANIMATION_VARIANTS,
  search: MAGNIFYING_GLASS_ANIMATION_VARIANTS,
  trash: TRASH_ANIMATION_VARIANTS,
  delete: TRASH_ANIMATION_VARIANTS,
  copy: COPY_ANIMATION_VARIANTS,
  share: SHARE_ANIMATION_VARIANTS,
  'sign-out': SIGN_OUT_ANIMATION_VARIANTS,
  logout: SIGN_OUT_ANIMATION_VARIANTS,
  sidebar: SIDEBAR_ANIMATION_VARIANTS,
  'dots-three': DOTS_THREE_ANIMATION_VARIANTS,
  'dots-three-vertical': DOTS_THREE_VERTICAL_ANIMATION_VARIANTS,
  plus: PLUS_ANIMATION_VARIANTS,
  minus: MINUS_ANIMATION_VARIANTS,

  // Status & Verification
  check: CHECK_ANIMATION_VARIANTS,
  'check-circle': CHECK_CIRCLE_ANIMATION_VARIANTS,
  'shield-check': SHIELD_CHECK_ANIMATION_VARIANTS,
  warning: WARNING_ANIMATION_VARIANTS,
  info: INFO_ANIMATION_VARIANTS,
  x: X_ANIMATION_VARIANTS,
  'x-circle': X_CIRCLE_ANIMATION_VARIANTS,

  // Celestial, Nature & Light
  sun: SUN_ANIMATION_VARIANTS,
  moon: MOON_ANIMATION_VARIANTS,
  lightning: LIGHTNING_ANIMATION_VARIANTS,
  zap: LIGHTNING_ANIMATION_VARIANTS,
  clock: CLOCK_ANIMATION_VARIANTS,
  star: STAR_ANIMATION_VARIANTS,
  globe: GLOBE_ANIMATION_VARIANTS,
  earth: GLOBE_ANIMATION_VARIANTS,
  'cloud-arrow-up': CLOUD_ARROW_UP_ANIMATION_VARIANTS,
  'cloud-upload': CLOUD_ARROW_UP_ANIMATION_VARIANTS,
  heart: HEART_ANIMATION_VARIANTS,
  home: HOME_ANIMATION_VARIANTS,

  // Content, Files, Media & Devices
  'book-open': BOOK_OPEN_ANIMATION_VARIANTS,
  'calendar-blank': CALENDAR_BLANK_ANIMATION_VARIANTS,
  calendar: CALENDAR_BLANK_ANIMATION_VARIANTS,
  'chart-pie': CHART_PIE_ANIMATION_VARIANTS,
  'chat-circle-text': CHAT_CIRCLE_TEXT_ANIMATION_VARIANTS,
  cpu: CPU_ANIMATION_VARIANTS,
  'currency-dollar': CURRENCY_DOLLAR_ANIMATION_VARIANTS,
  'device-mobile': DEVICE_MOBILE_ANIMATION_VARIANTS,
  monitor: MONITOR_ANIMATION_VARIANTS,
  exclude: EXCLUDE_ANIMATION_VARIANTS,
  'file-code': FILE_CODE_ANIMATION_VARIANTS,
  'file-text': FILE_TEXT_ANIMATION_VARIANTS,
  folder: FOLDER_ANIMATION_VARIANTS,
  'folder-open': FOLDER_OPEN_ANIMATION_VARIANTS,
  'corners-out': CORNERS_OUT_ANIMATION_VARIANTS,
  'frame-corners': FRAME_CORNERS_ANIMATION_VARIANTS,
  'map-trifold': MAP_TRIFOLD_ANIMATION_VARIANTS,
  user: USER_ANIMATION_VARIANTS,
  robot: ROBOT_ANIMATION_VARIANTS,
  logo: LOGO_ANIMATION_VARIANTS,
  'google-logo': GOOGLE_LOGO_ANIMATION_VARIANTS,

  // Typography
  'text-a-underline': TEXT_A_UNDERLINE_ANIMATION_VARIANTS,
  'text-align-left': TEXT_ALIGN_LEFT_ANIMATION_VARIANTS,
  'text-b': TEXT_B_ANIMATION_VARIANTS,
  'text-italic': TEXT_ITALIC_ANIMATION_VARIANTS,
};

/**
 * Resolves the animation variants for a given icon stem.
 */
export function getIconAnimationVariants(stem: string): Variants {
  return ICON_ANIMATION_VARIANTS[stem] ?? DEFAULT_ANIMATION_VARIANTS;
}
