"use client";

// src/base/IconBase.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var DEFAULT_ICON_SIZE = 24;
var ZagIconBase = forwardRef(
  function ZagIconBase2(props, ref) {
    const {
      size = DEFAULT_ICON_SIZE,
      color = "currentColor",
      fill = "none",
      viewBox,
      className,
      children,
      ...rest
    } = props;
    const accessible = rest["aria-label"] !== void 0 || rest["aria-labelledby"] !== void 0 || "title" in props;
    return /* @__PURE__ */ jsx(
      "svg",
      {
        ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox,
        width: size,
        height: size,
        color,
        fill,
        focusable: false,
        "aria-hidden": accessible ? void 0 : true,
        className: className ? `zag-icon ${className}` : "zag-icon",
        ...rest,
        children
      }
    );
  }
);

// src/base/IllustrationBase.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var ZagIllustrationBase = forwardRef2(
  function ZagIllustrationBase2(props, ref) {
    const { viewBox, className, children, ...rest } = props;
    const accessible = rest["aria-label"] !== void 0 || rest["aria-labelledby"] !== void 0 || "title" in props;
    return /* @__PURE__ */ jsx2(
      "svg",
      {
        ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox,
        role: "img",
        "aria-hidden": accessible ? void 0 : true,
        focusable: false,
        className: className ? `zag-illustration ${className}` : "zag-illustration",
        ...rest,
        children
      }
    );
  }
);

// src/base/AnimatedIconBase.tsx
import {
  forwardRef as forwardRef3,
  useCallback,
  useImperativeHandle,
  useRef
} from "react";
import { useAnimation } from "motion/react";
import { jsx as jsx3 } from "react/jsx-runtime";
function useAnimatedIconLifecycle(ref, onMouseEnter, onMouseLeave) {
  const controls = useAnimation();
  const isControlledRef = useRef(false);
  useImperativeHandle(ref, () => {
    isControlledRef.current = true;
    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal")
    };
  });
  const handleMouseEnter = useCallback(
    (e) => {
      if (isControlledRef.current) {
        onMouseEnter == null ? void 0 : onMouseEnter(e);
      } else {
        controls.start("animate");
      }
    },
    [controls, onMouseEnter]
  );
  const handleMouseLeave = useCallback(
    (e) => {
      if (isControlledRef.current) {
        onMouseLeave == null ? void 0 : onMouseLeave(e);
      } else {
        controls.start("normal");
      }
    },
    [controls, onMouseLeave]
  );
  return { controls, handleMouseEnter, handleMouseLeave };
}
var ZagAnimatedIconContainer = forwardRef3(function ZagAnimatedIconContainer2(props, ref) {
  const {
    className,
    style,
    handleMouseEnter,
    handleMouseLeave,
    children,
    ...rest
  } = props;
  const accessible = rest["aria-label"] !== void 0 || rest["aria-labelledby"] !== void 0 || "title" in props;
  return /* @__PURE__ */ jsx3(
    "span",
    {
      ref,
      className: className ? `zag-icon zag-icon-animated ${className}` : "zag-icon zag-icon-animated",
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 0,
        ...style
      },
      "aria-hidden": accessible ? void 0 : true,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ...rest,
      children
    }
  );
});

// src/base/animations.ts
var DEFAULT_PATH_TRANSITION = {
  duration: 0.6,
  opacity: { duration: 0.2 }
};
var HOME_DEFAULT_TRANSITION = DEFAULT_PATH_TRANSITION;
var PATH_DRAW_VARIANTS = {
  normal: {
    pathLength: 1,
    opacity: 1
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1]
  }
};
var HOME_PATH_VARIANTS = PATH_DRAW_VARIANTS;
var DEFAULT_ANIMATION_VARIANTS = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  },
  animate: {
    scale: [1, 1.14, 0.96, 1.04, 1],
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
var HEART_ANIMATION_VARIANTS = {
  normal: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  animate: {
    scale: [1, 1.12, 1, 1.12, 1],
    transition: {
      duration: 0.6,
      repeat: 1,
      ease: "easeInOut"
    }
  }
};
var HOME_ANIMATION_VARIANTS = PATH_DRAW_VARIANTS;
var ICON_ANIMATION_VARIANTS = {
  heart: HEART_ANIMATION_VARIANTS,
  home: HOME_ANIMATION_VARIANTS
};
function getIconAnimationVariants(stem) {
  var _a;
  return (_a = ICON_ANIMATION_VARIANTS[stem]) != null ? _a : DEFAULT_ANIMATION_VARIANTS;
}

// src/icons/heart.tsx
import { forwardRef as forwardRef4 } from "react";
import { motion } from "motion/react";
import { Fragment, jsx as jsx4 } from "react/jsx-runtime";
var HEART_ANIMATION_VARIANTS2 = getIconAnimationVariants("heart");
var HEART_GLYPHS = {
  outline: /* @__PURE__ */ jsx4(Fragment, { children: /* @__PURE__ */ jsx4("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z", fill: "none" }) }),
  filled: /* @__PURE__ */ jsx4(Fragment, { children: /* @__PURE__ */ jsx4("path", { fill: "currentColor", d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" }) })
};
var AnimatedHeartIcon = forwardRef4(
  function AnimatedHeartIcon2(props, ref) {
    const {
      weight = "outline",
      size = 24,
      color = "currentColor",
      className,
      onMouseEnter,
      onMouseLeave,
      ...rest
    } = props;
    const { controls, handleMouseEnter, handleMouseLeave } = useAnimatedIconLifecycle(
      ref,
      onMouseEnter,
      onMouseLeave
    );
    return /* @__PURE__ */ jsx4(
      ZagAnimatedIconContainer,
      {
        size,
        color,
        weight,
        "data-weight": weight,
        className,
        handleMouseEnter,
        handleMouseLeave,
        ...rest,
        children: /* @__PURE__ */ jsx4(
          motion.svg,
          {
            animate: controls,
            initial: "normal",
            variants: HEART_ANIMATION_VARIANTS2,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: HEART_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedHeartIcon.displayName = "AnimatedHeartIcon";
var HeartIcon = forwardRef4(
  function HeartIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx4(
        AnimatedHeartIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx4(ZagIconBase, { ref, viewBox: "0 0 24 24", "data-weight": weight, ...rest, children: HEART_GLYPHS[weight] });
  }
);
HeartIcon.displayName = "HeartIcon";

// src/icons/home.tsx
import { forwardRef as forwardRef5, useId } from "react";
import { motion as motion2 } from "motion/react";
import { Fragment as Fragment2, jsx as jsx5, jsxs } from "react/jsx-runtime";
var HOME_DEFAULT_TRANSITION2 = DEFAULT_PATH_TRANSITION;
var HOME_PATH_VARIANTS2 = PATH_DRAW_VARIANTS;
var HOME_GLYPHS = {
  outline: /* @__PURE__ */ jsxs(Fragment2, { children: [
    /* @__PURE__ */ jsx5("path", { fill: "currentColor", d: "M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" }),
    /* @__PURE__ */ jsx5("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402z", clipRule: "evenodd" })
  ] }),
  filled: /* @__PURE__ */ jsx5(Fragment2, { children: /* @__PURE__ */ jsx5("path", { fill: "currentColor", fillRule: "evenodd", d: "M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z", clipRule: "evenodd" }) })
};
var AnimatedHomeIcon = forwardRef5(
  function AnimatedHomeIcon2(props, ref) {
    const {
      weight = "outline",
      size = 24,
      color = "currentColor",
      className,
      onMouseEnter,
      onMouseLeave,
      ...rest
    } = props;
    const { controls, handleMouseEnter, handleMouseLeave } = useAnimatedIconLifecycle(
      ref,
      onMouseEnter,
      onMouseLeave
    );
    const rawId = useId();
    const maskId = `zag-home-mask-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
    return /* @__PURE__ */ jsx5(
      ZagAnimatedIconContainer,
      {
        size,
        color,
        weight,
        "data-weight": weight,
        className,
        handleMouseEnter,
        handleMouseLeave,
        ...rest,
        children: /* @__PURE__ */ jsx5(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: weight === "filled" ? /* @__PURE__ */ jsxs(Fragment2, { children: [
              /* @__PURE__ */ jsx5("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
                /* @__PURE__ */ jsx5("rect", { width: "24", height: "24", fill: "white" }),
                /* @__PURE__ */ jsx5(
                  motion2.path,
                  {
                    d: "M9 18h6",
                    stroke: "black",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    animate: controls,
                    initial: "normal",
                    transition: HOME_DEFAULT_TRANSITION2,
                    variants: HOME_PATH_VARIANTS2
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx5(
                "path",
                {
                  fill: "currentColor",
                  mask: `url(#${maskId})`,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823Z"
                }
              )
            ] }) : /* @__PURE__ */ jsxs(Fragment2, { children: [
              /* @__PURE__ */ jsx5(
                "path",
                {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402z"
                }
              ),
              /* @__PURE__ */ jsx5(
                motion2.path,
                {
                  d: "M9 18h6",
                  stroke: "currentColor",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  animate: controls,
                  initial: "normal",
                  transition: HOME_DEFAULT_TRANSITION2,
                  variants: HOME_PATH_VARIANTS2
                }
              )
            ] })
          }
        )
      }
    );
  }
);
AnimatedHomeIcon.displayName = "AnimatedHomeIcon";
var HomeIcon = forwardRef5(
  function HomeIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx5(
        AnimatedHomeIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx5(ZagIconBase, { ref, viewBox: "0 0 24 24", "data-weight": weight, ...rest, children: HOME_GLYPHS[weight] });
  }
);
HomeIcon.displayName = "HomeIcon";

// src/illustrations/empty-state.tsx
import { forwardRef as forwardRef6 } from "react";
import { Fragment as Fragment3, jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var EMPTYSTATE_ART = /* @__PURE__ */ jsxs2(Fragment3, { children: [
  /* @__PURE__ */ jsx6("defs", { children: /* @__PURE__ */ jsxs2("linearGradient", { id: "a", x1: 52, x2: 196, y1: 28, y2: 156, gradientUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ jsx6("stop", { stopColor: "#818CF8" }),
    /* @__PURE__ */ jsx6("stop", { offset: 1, stopColor: "#C084FC" })
  ] }) }),
  /* @__PURE__ */ jsx6("circle", { cx: 120, cy: 92, r: 72, fill: "url(#a)", opacity: 0.18 }),
  /* @__PURE__ */ jsx6("rect", { width: 124, height: 96, x: 58, y: 42, fill: "#FFF", stroke: "#E2E8F0", strokeWidth: 2, rx: 12 }),
  /* @__PURE__ */ jsx6("path", { stroke: "#E2E8F0", strokeWidth: 2, d: "M58 66h124" }),
  /* @__PURE__ */ jsx6("circle", { cx: 72, cy: 54, r: 4, fill: "#FCA5A5" }),
  /* @__PURE__ */ jsx6("circle", { cx: 86, cy: 54, r: 4, fill: "#FCD34D" }),
  /* @__PURE__ */ jsx6("circle", { cx: 100, cy: 54, r: 4, fill: "#86EFAC" }),
  /* @__PURE__ */ jsx6("rect", { width: 52, height: 6, x: 74, y: 80, fill: "#CBD5E1", rx: 3 }),
  /* @__PURE__ */ jsx6("rect", { width: 36, height: 6, x: 74, y: 94, fill: "#E2E8F0", rx: 3 }),
  /* @__PURE__ */ jsx6("path", { fill: "#F59E0B", d: "m120 96 20-11 20 11-20 11z" }),
  /* @__PURE__ */ jsx6("path", { fill: "#D97706", d: "M120 96v26l20 11v-26z" }),
  /* @__PURE__ */ jsx6("path", { fill: "#B45309", d: "M160 96v26l-20 11v-26z" }),
  /* @__PURE__ */ jsx6("circle", { cx: 164, cy: 128, r: 12, fill: "#F8FAFC", stroke: "#64748B", strokeWidth: 3 }),
  /* @__PURE__ */ jsx6("path", { stroke: "#64748B", strokeLinecap: "round", strokeWidth: 3, d: "m173 137 10 10" }),
  /* @__PURE__ */ jsx6("path", { fill: "url(#a)", d: "m186 34 2.8 6.8 6.8 2.8-6.8 2.8-2.8 6.8-2.8-6.8-6.8-2.8 6.8-2.8z" }),
  /* @__PURE__ */ jsx6("circle", { cx: 48, cy: 134, r: 5, fill: "#93C5FD" }),
  /* @__PURE__ */ jsx6("circle", { cx: 198, cy: 82, r: 4, fill: "#F9A8D4" })
] });
var EmptyState = forwardRef6(
  function EmptyState2(props, ref) {
    return /* @__PURE__ */ jsx6(ZagIllustrationBase, { ref, viewBox: "0 0 240 180", ...props, children: EMPTYSTATE_ART });
  }
);
export {
  AnimatedHeartIcon,
  AnimatedHomeIcon,
  DEFAULT_ANIMATION_VARIANTS,
  DEFAULT_PATH_TRANSITION,
  EmptyState,
  HEART_ANIMATION_VARIANTS,
  HOME_ANIMATION_VARIANTS,
  HOME_DEFAULT_TRANSITION,
  HOME_PATH_VARIANTS,
  HeartIcon,
  HomeIcon,
  ICON_ANIMATION_VARIANTS,
  PATH_DRAW_VARIANTS,
  ZagAnimatedIconContainer,
  ZagIconBase,
  ZagIllustrationBase,
  getIconAnimationVariants,
  useAnimatedIconLifecycle
};
//# sourceMappingURL=index.js.map