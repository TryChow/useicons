/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/icons/{outline,filled}/home.svg

import { forwardRef, useId, type ReactElement } from 'react';
import type { Transition, Variants } from 'motion/react';
import { motion } from 'motion/react';
import { ZagIconBase, type IconWeight, type ZagIconProps } from '../base/IconBase';
import {
  ZagAnimatedIconContainer,
  useAnimatedIconLifecycle,
  type AnimatedIconHandle,
  type ZagAnimatedIconProps,
} from '../base/AnimatedIconBase';
import {
  DEFAULT_PATH_TRANSITION,
  PATH_DRAW_VARIANTS,
} from '../base/animations';

export type HomeIconProps = ZagIconProps & {
  /** Visual weight of the glyph. Defaults to `'outline'`. */
  weight?: IconWeight;
  /** Whether to render the animated interactive variant. Defaults to `false`. */
  animated?: boolean;
};

export type HomeIconHandle = AnimatedIconHandle;
export type AnimatedHomeIconProps = ZagAnimatedIconProps;

export const HOME_DEFAULT_TRANSITION: Transition = DEFAULT_PATH_TRANSITION;
export const HOME_PATH_VARIANTS: Variants = PATH_DRAW_VARIANTS;

const HOME_GLYPHS: Record<IconWeight, ReactElement> = {
  outline: (
    <>
      <path fill="currentColor" d="M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" /><path fill="currentColor" fillRule="evenodd" d="M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402z" clipRule="evenodd" />
    </>
  ),
  filled: (
    <>
      <path fill="currentColor" fillRule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
    </>
  ),
};

/**
 * Animated Home icon (viewBox "0 0 24 24").
 * Features hover micro-interactions and imperative control via ref.
 * Re-animates the door path drawing effect on both outline and filled weights.
 */
export const AnimatedHomeIcon = forwardRef<AnimatedIconHandle, AnimatedHomeIconProps>(
  function AnimatedHomeIcon(props, ref) {
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
    const rawId = useId();
    const maskId = `zag-home-mask-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          color={color}
          fill="none"
          focusable={false}
        >
          {weight === 'filled' ? (
            <>
              <defs>
                <mask id={maskId}>
                  <rect width="24" height="24" fill="white" />
                  <motion.path
                    d="M9 18h6"
                    stroke="black"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    animate={controls}
                    initial="normal"
                    transition={HOME_DEFAULT_TRANSITION}
                    variants={HOME_PATH_VARIANTS}
                  />
                </mask>
              </defs>
              <path
                fill="currentColor"
                mask={`url(#${maskId})`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823Z"
              />
            </>
          ) : (
            <>
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402z"
              />
              <motion.path
                d="M9 18h6"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                animate={controls}
                initial="normal"
                transition={HOME_DEFAULT_TRANSITION}
                variants={HOME_PATH_VARIANTS}
              />
            </>
          )}
        </svg>
      </ZagAnimatedIconContainer>
    );
  },
);

AnimatedHomeIcon.displayName = 'AnimatedHomeIcon';

/**
 * Home icon (viewBox "0 0 24 24").
 * Tinted via `color` / `currentColor` and rendered at 24px by default.
 * Supports both static and animated variants.
 */
export const HomeIcon = forwardRef<SVGSVGElement, HomeIconProps>(
  function HomeIcon(props, ref) {
    const { weight = 'outline', animated = false, ...rest } = props;

    if (animated) {
      return (
        <AnimatedHomeIcon
          weight={weight}
          {...(rest as unknown as AnimatedHomeIconProps)}
        />
      );
    }

    return (
      <ZagIconBase ref={ref} viewBox="0 0 24 24" data-weight={weight} {...rest}>
        {HOME_GLYPHS[weight]}
      </ZagIconBase>
    );
  },
);

HomeIcon.displayName = 'HomeIcon';
