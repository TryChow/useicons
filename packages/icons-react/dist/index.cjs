"use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AnimatedArrowLeftIcon: () => AnimatedArrowLeftIcon,
  AnimatedArrowRightIcon: () => AnimatedArrowRightIcon,
  AnimatedHeartIcon: () => AnimatedHeartIcon,
  AnimatedHomeIcon: () => AnimatedHomeIcon,
  ArrowLeftIcon: () => ArrowLeftIcon,
  ArrowRightIcon: () => ArrowRightIcon,
  DEFAULT_ANIMATION_VARIANTS: () => DEFAULT_ANIMATION_VARIANTS,
  DEFAULT_PATH_TRANSITION: () => DEFAULT_PATH_TRANSITION,
  EmptyState: () => EmptyState,
  HEART_ANIMATION_VARIANTS: () => HEART_ANIMATION_VARIANTS,
  HOME_ANIMATION_VARIANTS: () => HOME_ANIMATION_VARIANTS,
  HOME_DEFAULT_TRANSITION: () => HOME_DEFAULT_TRANSITION,
  HOME_PATH_VARIANTS: () => HOME_PATH_VARIANTS,
  HeartIcon: () => HeartIcon,
  HomeIcon: () => HomeIcon,
  ICON_ANIMATION_VARIANTS: () => ICON_ANIMATION_VARIANTS,
  PATH_DRAW_VARIANTS: () => PATH_DRAW_VARIANTS,
  ZagAnimatedIconContainer: () => ZagAnimatedIconContainer,
  ZagIconBase: () => ZagIconBase,
  ZagIllustrationBase: () => ZagIllustrationBase,
  getIconAnimationVariants: () => getIconAnimationVariants,
  useAnimatedIconLifecycle: () => useAnimatedIconLifecycle
});
module.exports = __toCommonJS(index_exports);

// src/base/IconBase.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var DEFAULT_ICON_SIZE = 24;
var ZagIconBase = (0, import_react.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ZagIllustrationBase = (0, import_react2.forwardRef)(
  function ZagIllustrationBase2(props, ref) {
    const { viewBox, className, children, ...rest } = props;
    const accessible = rest["aria-label"] !== void 0 || rest["aria-labelledby"] !== void 0 || "title" in props;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_react3 = require("react");
var import_react4 = require("motion/react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function useAnimatedIconLifecycle(ref, onMouseEnter, onMouseLeave) {
  const controls = (0, import_react4.useAnimation)();
  const isControlledRef = (0, import_react3.useRef)(false);
  (0, import_react3.useImperativeHandle)(ref, () => {
    isControlledRef.current = true;
    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal")
    };
  });
  const handleMouseEnter = (0, import_react3.useCallback)(
    (e) => {
      if (isControlledRef.current) {
        onMouseEnter == null ? void 0 : onMouseEnter(e);
      } else {
        controls.start("animate");
      }
    },
    [controls, onMouseEnter]
  );
  const handleMouseLeave = (0, import_react3.useCallback)(
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
var ZagAnimatedIconContainer = (0, import_react3.forwardRef)(function ZagAnimatedIconContainer2(props, ref) {
  const {
    className,
    style,
    handleMouseEnter,
    handleMouseLeave,
    children,
    ...rest
  } = props;
  const accessible = rest["aria-label"] !== void 0 || rest["aria-labelledby"] !== void 0 || "title" in props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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

// src/icons/arrow-left.tsx
var import_react5 = require("react");
var import_react6 = require("motion/react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var ARROWLEFT_ANIMATION_VARIANTS = getIconAnimationVariants("arrow-left");
var ARROWLEFT_GLYPHS = {
  outline: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "none", d: "M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M224 128a8 8 0 0 1-8 8h-96v64a8 8 0 0 1-13.66 5.66l-72-72a8 8 0 0 1 0-11.32l72-72A8 8 0 0 1 120 56v64h96a8 8 0 0 1 8 8" }) })
};
var AnimatedArrowLeftIcon = (0, import_react5.forwardRef)(
  function AnimatedArrowLeftIcon2(props, ref) {
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_react6.motion.svg,
          {
            animate: controls,
            initial: "normal",
            variants: ARROWLEFT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: ARROWLEFT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedArrowLeftIcon.displayName = "AnimatedArrowLeftIcon";
var ArrowLeftIcon = (0, import_react5.forwardRef)(
  function ArrowLeftIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        AnimatedArrowLeftIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: ARROWLEFT_GLYPHS[weight] });
  }
);
ArrowLeftIcon.displayName = "ArrowLeftIcon";

// src/icons/arrow-right.tsx
var import_react7 = require("react");
var import_react8 = require("motion/react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var ARROWRIGHT_ANIMATION_VARIANTS = getIconAnimationVariants("arrow-right");
var ARROWRIGHT_GLYPHS = {
  outline: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { fill: "none", d: "m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32" }) }),
  filled: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "m221.66 133.66-72 72A8 8 0 0 1 136 200v-64H40a8 8 0 0 1 0-16h96V56a8 8 0 0 1 13.66-5.66l72 72a8 8 0 0 1 0 11.32" }) })
};
var AnimatedArrowRightIcon = (0, import_react7.forwardRef)(
  function AnimatedArrowRightIcon2(props, ref) {
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_react8.motion.svg,
          {
            animate: controls,
            initial: "normal",
            variants: ARROWRIGHT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: ARROWRIGHT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedArrowRightIcon.displayName = "AnimatedArrowRightIcon";
var ArrowRightIcon = (0, import_react7.forwardRef)(
  function ArrowRightIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        AnimatedArrowRightIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: ARROWRIGHT_GLYPHS[weight] });
  }
);
ArrowRightIcon.displayName = "ArrowRightIcon";

// src/icons/heart.tsx
var import_react9 = require("react");
var import_react10 = require("motion/react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var HEART_ANIMATION_VARIANTS2 = getIconAnimationVariants("heart");
var HEART_GLYPHS = {
  outline: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z", fill: "none" }) }),
  filled: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { fill: "currentColor", d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" }) })
};
var AnimatedHeartIcon = (0, import_react9.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react10.motion.svg,
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
var HeartIcon = (0, import_react9.forwardRef)(
  function HeartIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        AnimatedHeartIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ZagIconBase, { ref, viewBox: "0 0 24 24", "data-weight": weight, ...rest, children: HEART_GLYPHS[weight] });
  }
);
HeartIcon.displayName = "HeartIcon";

// src/icons/home.tsx
var import_react11 = require("react");
var import_react12 = require("motion/react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var HOME_DEFAULT_TRANSITION2 = DEFAULT_PATH_TRANSITION;
var HOME_PATH_VARIANTS2 = PATH_DRAW_VARIANTS;
var HOME_GLYPHS = {
  outline: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { fill: "currentColor", d: "M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402z", clipRule: "evenodd" })
  ] }),
  filled: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z", clipRule: "evenodd" }) })
};
var AnimatedHomeIcon = (0, import_react11.forwardRef)(
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
    const rawId = (0, import_react11.useId)();
    const maskId = `zag-home-mask-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: weight === "filled" ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("mask", { id: maskId, children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("rect", { width: "24", height: "24", fill: "white" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  import_react12.motion.path,
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
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "path",
                {
                  fill: "currentColor",
                  mask: `url(#${maskId})`,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823Z"
                }
              )
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "path",
                {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402z"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                import_react12.motion.path,
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
var HomeIcon = (0, import_react11.forwardRef)(
  function HomeIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        AnimatedHomeIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ZagIconBase, { ref, viewBox: "0 0 24 24", "data-weight": weight, ...rest, children: HOME_GLYPHS[weight] });
  }
);
HomeIcon.displayName = "HomeIcon";

// src/illustrations/empty-state.tsx
var import_react13 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var EMPTYSTATE_ART = /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("linearGradient", { id: "a", x1: 52, x2: 196, y1: 28, y2: 156, gradientUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { stopColor: "#818CF8" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("stop", { offset: 1, stopColor: "#C084FC" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: 120, cy: 92, r: 72, fill: "url(#a)", opacity: 0.18 }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { width: 124, height: 96, x: 58, y: 42, fill: "#FFF", stroke: "#E2E8F0", strokeWidth: 2, rx: 12 }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { stroke: "#E2E8F0", strokeWidth: 2, d: "M58 66h124" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: 72, cy: 54, r: 4, fill: "#FCA5A5" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: 86, cy: 54, r: 4, fill: "#FCD34D" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: 100, cy: 54, r: 4, fill: "#86EFAC" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { width: 52, height: 6, x: 74, y: 80, fill: "#CBD5E1", rx: 3 }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { width: 36, height: 6, x: 74, y: 94, fill: "#E2E8F0", rx: 3 }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fill: "#F59E0B", d: "m120 96 20-11 20 11-20 11z" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fill: "#D97706", d: "M120 96v26l20 11v-26z" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fill: "#B45309", d: "M160 96v26l-20 11v-26z" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: 164, cy: 128, r: 12, fill: "#F8FAFC", stroke: "#64748B", strokeWidth: 3 }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { stroke: "#64748B", strokeLinecap: "round", strokeWidth: 3, d: "m173 137 10 10" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fill: "url(#a)", d: "m186 34 2.8 6.8 6.8 2.8-6.8 2.8-2.8 6.8-2.8-6.8-6.8-2.8 6.8-2.8z" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: 48, cy: 134, r: 5, fill: "#93C5FD" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", { cx: 198, cy: 82, r: 4, fill: "#F9A8D4" })
] });
var EmptyState = (0, import_react13.forwardRef)(
  function EmptyState2(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ZagIllustrationBase, { ref, viewBox: "0 0 240 180", ...props, children: EMPTYSTATE_ART });
  }
);
//# sourceMappingURL=index.cjs.map