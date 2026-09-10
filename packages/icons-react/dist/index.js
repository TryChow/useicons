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

// src/icons/arrow-down.tsx
import { forwardRef as forwardRef4 } from "react";
import { motion } from "motion/react";
import { Fragment, jsx as jsx4 } from "react/jsx-runtime";
var ARROWDOWN_ANIMATION_VARIANTS = getIconAnimationVariants("arrow-down");
var ARROWDOWN_GLYPHS = {
  outline: /* @__PURE__ */ jsx4(Fragment, { children: /* @__PURE__ */ jsx4("path", { fill: "none", d: "m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32" }) }),
  filled: /* @__PURE__ */ jsx4(Fragment, { children: /* @__PURE__ */ jsx4("path", { d: "m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72A8 8 0 0 1 56 136h64V40a8 8 0 0 1 16 0v96h64a8 8 0 0 1 5.66 13.66" }) })
};
var AnimatedArrowDownIcon = forwardRef4(
  function AnimatedArrowDownIcon2(props, ref) {
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
            variants: ARROWDOWN_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: ARROWDOWN_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedArrowDownIcon.displayName = "AnimatedArrowDownIcon";
var ArrowDownIcon = forwardRef4(
  function ArrowDownIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx4(
        AnimatedArrowDownIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx4(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: ARROWDOWN_GLYPHS[weight] });
  }
);
ArrowDownIcon.displayName = "ArrowDownIcon";

// src/icons/arrow-left.tsx
import { forwardRef as forwardRef5 } from "react";
import { motion as motion2 } from "motion/react";
import { Fragment as Fragment2, jsx as jsx5 } from "react/jsx-runtime";
var ARROWLEFT_ANIMATION_VARIANTS = getIconAnimationVariants("arrow-left");
var ARROWLEFT_GLYPHS = {
  outline: /* @__PURE__ */ jsx5(Fragment2, { children: /* @__PURE__ */ jsx5("path", { fill: "none", d: "M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ jsx5(Fragment2, { children: /* @__PURE__ */ jsx5("path", { d: "M224 128a8 8 0 0 1-8 8h-96v64a8 8 0 0 1-13.66 5.66l-72-72a8 8 0 0 1 0-11.32l72-72A8 8 0 0 1 120 56v64h96a8 8 0 0 1 8 8" }) })
};
var AnimatedArrowLeftIcon = forwardRef5(
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
          motion2.svg,
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
var ArrowLeftIcon = forwardRef5(
  function ArrowLeftIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx5(
        AnimatedArrowLeftIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx5(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: ARROWLEFT_GLYPHS[weight] });
  }
);
ArrowLeftIcon.displayName = "ArrowLeftIcon";

// src/icons/arrow-right.tsx
import { forwardRef as forwardRef6 } from "react";
import { motion as motion3 } from "motion/react";
import { Fragment as Fragment3, jsx as jsx6 } from "react/jsx-runtime";
var ARROWRIGHT_ANIMATION_VARIANTS = getIconAnimationVariants("arrow-right");
var ARROWRIGHT_GLYPHS = {
  outline: /* @__PURE__ */ jsx6(Fragment3, { children: /* @__PURE__ */ jsx6("path", { fill: "none", d: "m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32" }) }),
  filled: /* @__PURE__ */ jsx6(Fragment3, { children: /* @__PURE__ */ jsx6("path", { d: "m221.66 133.66-72 72A8 8 0 0 1 136 200v-64H40a8 8 0 0 1 0-16h96V56a8 8 0 0 1 13.66-5.66l72 72a8 8 0 0 1 0 11.32" }) })
};
var AnimatedArrowRightIcon = forwardRef6(
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
    return /* @__PURE__ */ jsx6(
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
        children: /* @__PURE__ */ jsx6(
          motion3.svg,
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
var ArrowRightIcon = forwardRef6(
  function ArrowRightIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx6(
        AnimatedArrowRightIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx6(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: ARROWRIGHT_GLYPHS[weight] });
  }
);
ArrowRightIcon.displayName = "ArrowRightIcon";

// src/icons/arrows-down-up.tsx
import { forwardRef as forwardRef7 } from "react";
import { motion as motion4 } from "motion/react";
import { Fragment as Fragment4, jsx as jsx7 } from "react/jsx-runtime";
var ARROWSDOWNUP_ANIMATION_VARIANTS = getIconAnimationVariants("arrows-down-up");
var ARROWSDOWNUP_GLYPHS = {
  outline: /* @__PURE__ */ jsx7(Fragment4, { children: /* @__PURE__ */ jsx7("path", { fill: "none", d: "M117.66 170.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L72 188.69V48a8 8 0 0 1 16 0v140.69l18.34-18.35a8 8 0 0 1 11.32 0m96-96-32-32a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L168 67.31V208a8 8 0 0 0 16 0V67.31l18.34 18.35a8 8 0 0 0 11.32-11.32" }) }),
  filled: /* @__PURE__ */ jsx7(Fragment4, { children: /* @__PURE__ */ jsx7("path", { d: "M119.39 172.94a8 8 0 0 1-1.73 8.72l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 48 168h24V48a8 8 0 0 1 16 0v120h24a8 8 0 0 1 7.39 4.94m94.27-98.6-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 144 88h24v120a8 8 0 0 0 16 0V88h24a8 8 0 0 0 5.66-13.66" }) })
};
var AnimatedArrowsDownUpIcon = forwardRef7(
  function AnimatedArrowsDownUpIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx7(
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
        children: /* @__PURE__ */ jsx7(
          motion4.svg,
          {
            animate: controls,
            initial: "normal",
            variants: ARROWSDOWNUP_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: ARROWSDOWNUP_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedArrowsDownUpIcon.displayName = "AnimatedArrowsDownUpIcon";
var ArrowsDownUpIcon = forwardRef7(
  function ArrowsDownUpIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx7(
        AnimatedArrowsDownUpIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx7(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: ARROWSDOWNUP_GLYPHS[weight] });
  }
);
ArrowsDownUpIcon.displayName = "ArrowsDownUpIcon";

// src/icons/bell.tsx
import { forwardRef as forwardRef8 } from "react";
import { motion as motion5 } from "motion/react";
import { Fragment as Fragment5, jsx as jsx8 } from "react/jsx-runtime";
var BELL_ANIMATION_VARIANTS = getIconAnimationVariants("bell");
var BELL_GLYPHS = {
  outline: /* @__PURE__ */ jsx8(Fragment5, { children: /* @__PURE__ */ jsx8("path", { fill: "none", d: "M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.85-32a15.8 15.8 0 0 1-13.85 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06ZM208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z" }) }),
  filled: /* @__PURE__ */ jsx8(Fragment5, { children: /* @__PURE__ */ jsx8("path", { d: "M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8m53.81-48.06C216.25 166.38 208 139.33 208 104a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h160a16 16 0 0 0 13.8-24.06Z" }) })
};
var AnimatedBellIcon = forwardRef8(
  function AnimatedBellIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx8(
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
        children: /* @__PURE__ */ jsx8(
          motion5.svg,
          {
            animate: controls,
            initial: "normal",
            variants: BELL_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: BELL_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedBellIcon.displayName = "AnimatedBellIcon";
var BellIcon = forwardRef8(
  function BellIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx8(
        AnimatedBellIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx8(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: BELL_GLYPHS[weight] });
  }
);
BellIcon.displayName = "BellIcon";

// src/icons/book-open.tsx
import { forwardRef as forwardRef9 } from "react";
import { motion as motion6 } from "motion/react";
import { Fragment as Fragment6, jsx as jsx9 } from "react/jsx-runtime";
var BOOKOPEN_ANIMATION_VARIANTS = getIconAnimationVariants("book-open");
var BOOKOPEN_GLYPHS = {
  outline: /* @__PURE__ */ jsx9(Fragment6, { children: /* @__PURE__ */ jsx9("path", { fill: "none", d: "M232 48h-72a40 40 0 0 0-32 16 40 40 0 0 0-32-16H24a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h72a24 24 0 0 1 24 24 8 8 0 0 0 16 0 24 24 0 0 1 24-24h72a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8M96 192H32V64h64a24 24 0 0 1 24 24v112a39.8 39.8 0 0 0-24-8m128 0h-64a39.8 39.8 0 0 0-24 8V88a24 24 0 0 1 24-24h64Z" }) }),
  filled: /* @__PURE__ */ jsx9(Fragment6, { children: /* @__PURE__ */ jsx9("path", { d: "M240 56v144a8 8 0 0 1-8 8h-72a24 24 0 0 0-24 23.94 7.9 7.9 0 0 1-5.12 7.55A8 8 0 0 1 120 232a24 24 0 0 0-24-24H24a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a32 32 0 0 1 32 32v87.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8V80a32 32 0 0 1 32-32h64a8 8 0 0 1 8 8" }) })
};
var AnimatedBookOpenIcon = forwardRef9(
  function AnimatedBookOpenIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx9(
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
        children: /* @__PURE__ */ jsx9(
          motion6.svg,
          {
            animate: controls,
            initial: "normal",
            variants: BOOKOPEN_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: BOOKOPEN_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedBookOpenIcon.displayName = "AnimatedBookOpenIcon";
var BookOpenIcon = forwardRef9(
  function BookOpenIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx9(
        AnimatedBookOpenIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx9(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: BOOKOPEN_GLYPHS[weight] });
  }
);
BookOpenIcon.displayName = "BookOpenIcon";

// src/icons/calendar-blank.tsx
import { forwardRef as forwardRef10 } from "react";
import { motion as motion7 } from "motion/react";
import { Fragment as Fragment7, jsx as jsx10 } from "react/jsx-runtime";
var CALENDARBLANK_ANIMATION_VARIANTS = getIconAnimationVariants("calendar-blank");
var CALENDARBLANK_GLYPHS = {
  outline: /* @__PURE__ */ jsx10(Fragment7, { children: /* @__PURE__ */ jsx10("path", { fill: "none", d: "M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160z" }) }),
  filled: /* @__PURE__ */ jsx10(Fragment7, { children: /* @__PURE__ */ jsx10("path", { d: "M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 48H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24Z" }) })
};
var AnimatedCalendarBlankIcon = forwardRef10(
  function AnimatedCalendarBlankIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx10(
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
        children: /* @__PURE__ */ jsx10(
          motion7.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CALENDARBLANK_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CALENDARBLANK_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCalendarBlankIcon.displayName = "AnimatedCalendarBlankIcon";
var CalendarBlankIcon = forwardRef10(
  function CalendarBlankIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx10(
        AnimatedCalendarBlankIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx10(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CALENDARBLANK_GLYPHS[weight] });
  }
);
CalendarBlankIcon.displayName = "CalendarBlankIcon";

// src/icons/caret-down.tsx
import { forwardRef as forwardRef11 } from "react";
import { motion as motion8 } from "motion/react";
import { Fragment as Fragment8, jsx as jsx11 } from "react/jsx-runtime";
var CARETDOWN_ANIMATION_VARIANTS = getIconAnimationVariants("caret-down");
var CARETDOWN_GLYPHS = {
  outline: /* @__PURE__ */ jsx11(Fragment8, { children: /* @__PURE__ */ jsx11("path", { fill: "none", d: "m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32" }) }),
  filled: /* @__PURE__ */ jsx11(Fragment8, { children: /* @__PURE__ */ jsx11("path", { d: "m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66" }) })
};
var AnimatedCaretDownIcon = forwardRef11(
  function AnimatedCaretDownIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx11(
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
        children: /* @__PURE__ */ jsx11(
          motion8.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CARETDOWN_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CARETDOWN_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCaretDownIcon.displayName = "AnimatedCaretDownIcon";
var CaretDownIcon = forwardRef11(
  function CaretDownIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx11(
        AnimatedCaretDownIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx11(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CARETDOWN_GLYPHS[weight] });
  }
);
CaretDownIcon.displayName = "CaretDownIcon";

// src/icons/caret-left.tsx
import { forwardRef as forwardRef12 } from "react";
import { motion as motion9 } from "motion/react";
import { Fragment as Fragment9, jsx as jsx12 } from "react/jsx-runtime";
var CARETLEFT_ANIMATION_VARIANTS = getIconAnimationVariants("caret-left");
var CARETLEFT_GLYPHS = {
  outline: /* @__PURE__ */ jsx12(Fragment9, { children: /* @__PURE__ */ jsx12("path", { fill: "none", d: "M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z" }) }),
  filled: /* @__PURE__ */ jsx12(Fragment9, { children: /* @__PURE__ */ jsx12("path", { d: "M168 48v160a8 8 0 0 1-13.66 5.66l-80-80a8 8 0 0 1 0-11.32l80-80A8 8 0 0 1 168 48" }) })
};
var AnimatedCaretLeftIcon = forwardRef12(
  function AnimatedCaretLeftIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx12(
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
        children: /* @__PURE__ */ jsx12(
          motion9.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CARETLEFT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CARETLEFT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCaretLeftIcon.displayName = "AnimatedCaretLeftIcon";
var CaretLeftIcon = forwardRef12(
  function CaretLeftIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx12(
        AnimatedCaretLeftIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx12(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CARETLEFT_GLYPHS[weight] });
  }
);
CaretLeftIcon.displayName = "CaretLeftIcon";

// src/icons/caret-right.tsx
import { forwardRef as forwardRef13 } from "react";
import { motion as motion10 } from "motion/react";
import { Fragment as Fragment10, jsx as jsx13 } from "react/jsx-runtime";
var CARETRIGHT_ANIMATION_VARIANTS = getIconAnimationVariants("caret-right");
var CARETRIGHT_GLYPHS = {
  outline: /* @__PURE__ */ jsx13(Fragment10, { children: /* @__PURE__ */ jsx13("path", { fill: "none", d: "m181.66 133.66-80 80a8 8 0 0 1-11.32-11.32L164.69 128 90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32" }) }),
  filled: /* @__PURE__ */ jsx13(Fragment10, { children: /* @__PURE__ */ jsx13("path", { d: "m181.66 133.66-80 80A8 8 0 0 1 88 208V48a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32" }) })
};
var AnimatedCaretRightIcon = forwardRef13(
  function AnimatedCaretRightIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx13(
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
        children: /* @__PURE__ */ jsx13(
          motion10.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CARETRIGHT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CARETRIGHT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCaretRightIcon.displayName = "AnimatedCaretRightIcon";
var CaretRightIcon = forwardRef13(
  function CaretRightIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx13(
        AnimatedCaretRightIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx13(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CARETRIGHT_GLYPHS[weight] });
  }
);
CaretRightIcon.displayName = "CaretRightIcon";

// src/icons/caret-up-down.tsx
import { forwardRef as forwardRef14 } from "react";
import { motion as motion11 } from "motion/react";
import { Fragment as Fragment11, jsx as jsx14 } from "react/jsx-runtime";
var CARETUPDOWN_ANIMATION_VARIANTS = getIconAnimationVariants("caret-up-down");
var CARETUPDOWN_GLYPHS = {
  outline: /* @__PURE__ */ jsx14(Fragment11, { children: /* @__PURE__ */ jsx14("path", { fill: "none", d: "M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0m-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32" }) }),
  filled: /* @__PURE__ */ jsx14(Fragment11, { children: /* @__PURE__ */ jsx14("path", { d: "M72.61 83.06a8 8 0 0 1 1.73-8.72l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 176 88H80a8 8 0 0 1-7.39-4.94M176 168H80a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 176 168" }) })
};
var AnimatedCaretUpDownIcon = forwardRef14(
  function AnimatedCaretUpDownIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx14(
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
        children: /* @__PURE__ */ jsx14(
          motion11.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CARETUPDOWN_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CARETUPDOWN_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCaretUpDownIcon.displayName = "AnimatedCaretUpDownIcon";
var CaretUpDownIcon = forwardRef14(
  function CaretUpDownIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx14(
        AnimatedCaretUpDownIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx14(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CARETUPDOWN_GLYPHS[weight] });
  }
);
CaretUpDownIcon.displayName = "CaretUpDownIcon";

// src/icons/caret-up.tsx
import { forwardRef as forwardRef15 } from "react";
import { motion as motion12 } from "motion/react";
import { Fragment as Fragment12, jsx as jsx15 } from "react/jsx-runtime";
var CARETUP_ANIMATION_VARIANTS = getIconAnimationVariants("caret-up");
var CARETUP_GLYPHS = {
  outline: /* @__PURE__ */ jsx15(Fragment12, { children: /* @__PURE__ */ jsx15("path", { fill: "none", d: "M213.66 165.66a8 8 0 0 1-11.32 0L128 91.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 0 11.32" }) }),
  filled: /* @__PURE__ */ jsx15(Fragment12, { children: /* @__PURE__ */ jsx15("path", { d: "M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72" }) })
};
var AnimatedCaretUpIcon = forwardRef15(
  function AnimatedCaretUpIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx15(
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
        children: /* @__PURE__ */ jsx15(
          motion12.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CARETUP_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CARETUP_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCaretUpIcon.displayName = "AnimatedCaretUpIcon";
var CaretUpIcon = forwardRef15(
  function CaretUpIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx15(
        AnimatedCaretUpIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx15(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CARETUP_GLYPHS[weight] });
  }
);
CaretUpIcon.displayName = "CaretUpIcon";

// src/icons/chart-pie.tsx
import { forwardRef as forwardRef16 } from "react";
import { motion as motion13 } from "motion/react";
import { Fragment as Fragment13, jsx as jsx16 } from "react/jsx-runtime";
var CHARTPIE_ANIMATION_VARIANTS = getIconAnimationVariants("chart-pie");
var CHARTPIE_GLYPHS = {
  outline: /* @__PURE__ */ jsx16(Fragment13, { children: /* @__PURE__ */ jsx16("path", { fill: "none", d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m71.87 53.27L136 114.14V40.37a88 88 0 0 1 63.87 36.9M120 40.37v83l-71.89 41.5A88 88 0 0 1 120 40.37M128 216a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216" }) }),
  filled: /* @__PURE__ */ jsx16(Fragment13, { children: /* @__PURE__ */ jsx16("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16a88 88 0 0 1 71.87 37.27L128 118.76Zm0 176a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216" }) })
};
var AnimatedChartPieIcon = forwardRef16(
  function AnimatedChartPieIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx16(
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
        children: /* @__PURE__ */ jsx16(
          motion13.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CHARTPIE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CHARTPIE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedChartPieIcon.displayName = "AnimatedChartPieIcon";
var ChartPieIcon = forwardRef16(
  function ChartPieIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx16(
        AnimatedChartPieIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx16(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CHARTPIE_GLYPHS[weight] });
  }
);
ChartPieIcon.displayName = "ChartPieIcon";

// src/icons/chat-circle-text.tsx
import { forwardRef as forwardRef17 } from "react";
import { motion as motion14 } from "motion/react";
import { Fragment as Fragment14, jsx as jsx17 } from "react/jsx-runtime";
var CHATCIRCLETEXT_ANIMATION_VARIANTS = getIconAnimationVariants("chat-circle-text");
var CHATCIRCLETEXT_GLYPHS = {
  outline: /* @__PURE__ */ jsx17(Fragment14, { children: /* @__PURE__ */ jsx17("path", { fill: "none", d: "M168 112a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m72-8a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-16 0a88 88 0 1 0-164.19 44.06 8 8 0 0 1 .66 6.54L40 216l37.4-12.47a7.9 7.9 0 0 1 2.53-.42 8 8 0 0 1 4 1.08A88 88 0 0 0 216 128" }) }),
  filled: /* @__PURE__ */ jsx17(Fragment14, { children: /* @__PURE__ */ jsx17("path", { d: "M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m32 128H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16" }) })
};
var AnimatedChatCircleTextIcon = forwardRef17(
  function AnimatedChatCircleTextIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx17(
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
        children: /* @__PURE__ */ jsx17(
          motion14.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CHATCIRCLETEXT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CHATCIRCLETEXT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedChatCircleTextIcon.displayName = "AnimatedChatCircleTextIcon";
var ChatCircleTextIcon = forwardRef17(
  function ChatCircleTextIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx17(
        AnimatedChatCircleTextIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx17(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CHATCIRCLETEXT_GLYPHS[weight] });
  }
);
ChatCircleTextIcon.displayName = "ChatCircleTextIcon";

// src/icons/check-circle.tsx
import { forwardRef as forwardRef18 } from "react";
import { motion as motion15 } from "motion/react";
import { Fragment as Fragment15, jsx as jsx18 } from "react/jsx-runtime";
var CHECKCIRCLE_ANIMATION_VARIANTS = getIconAnimationVariants("check-circle");
var CHECKCIRCLE_GLYPHS = {
  outline: /* @__PURE__ */ jsx18(Fragment15, { children: /* @__PURE__ */ jsx18("path", { fill: "none", d: "M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88" }) }),
  filled: /* @__PURE__ */ jsx18(Fragment15, { children: /* @__PURE__ */ jsx18("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m45.66 85.66-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32" }) })
};
var AnimatedCheckCircleIcon = forwardRef18(
  function AnimatedCheckCircleIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx18(
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
        children: /* @__PURE__ */ jsx18(
          motion15.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CHECKCIRCLE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CHECKCIRCLE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCheckCircleIcon.displayName = "AnimatedCheckCircleIcon";
var CheckCircleIcon = forwardRef18(
  function CheckCircleIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx18(
        AnimatedCheckCircleIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx18(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CHECKCIRCLE_GLYPHS[weight] });
  }
);
CheckCircleIcon.displayName = "CheckCircleIcon";

// src/icons/check.tsx
import { forwardRef as forwardRef19 } from "react";
import { motion as motion16 } from "motion/react";
import { Fragment as Fragment16, jsx as jsx19 } from "react/jsx-runtime";
var CHECK_ANIMATION_VARIANTS = getIconAnimationVariants("check");
var CHECK_GLYPHS = {
  outline: /* @__PURE__ */ jsx19(Fragment16, { children: /* @__PURE__ */ jsx19("path", { fill: "none", d: "m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32" }) }),
  filled: /* @__PURE__ */ jsx19(Fragment16, { children: /* @__PURE__ */ jsx19("path", { d: "m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32" }) })
};
var AnimatedCheckIcon = forwardRef19(
  function AnimatedCheckIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx19(
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
        children: /* @__PURE__ */ jsx19(
          motion16.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CHECK_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CHECK_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCheckIcon.displayName = "AnimatedCheckIcon";
var CheckIcon = forwardRef19(
  function CheckIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx19(
        AnimatedCheckIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx19(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CHECK_GLYPHS[weight] });
  }
);
CheckIcon.displayName = "CheckIcon";

// src/icons/clock.tsx
import { forwardRef as forwardRef20 } from "react";
import { motion as motion17 } from "motion/react";
import { Fragment as Fragment17, jsx as jsx20 } from "react/jsx-runtime";
var CLOCK_ANIMATION_VARIANTS = getIconAnimationVariants("clock");
var CLOCK_GLYPHS = {
  outline: /* @__PURE__ */ jsx20(Fragment17, { children: /* @__PURE__ */ jsx20("path", { fill: "none", d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ jsx20(Fragment17, { children: /* @__PURE__ */ jsx20("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 112h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16" }) })
};
var AnimatedClockIcon = forwardRef20(
  function AnimatedClockIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx20(
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
        children: /* @__PURE__ */ jsx20(
          motion17.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CLOCK_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CLOCK_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedClockIcon.displayName = "AnimatedClockIcon";
var ClockIcon = forwardRef20(
  function ClockIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx20(
        AnimatedClockIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx20(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CLOCK_GLYPHS[weight] });
  }
);
ClockIcon.displayName = "ClockIcon";

// src/icons/cloud-arrow-up.tsx
import { forwardRef as forwardRef21 } from "react";
import { motion as motion18 } from "motion/react";
import { Fragment as Fragment18, jsx as jsx21 } from "react/jsx-runtime";
var CLOUDARROWUP_ANIMATION_VARIANTS = getIconAnimationVariants("cloud-arrow-up");
var CLOUDARROWUP_GLYPHS = {
  outline: /* @__PURE__ */ jsx21(Fragment18, { children: /* @__PURE__ */ jsx21("path", { fill: "none", d: "M178.34 165.66 160 147.31V208a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32M160 40a88.08 88.08 0 0 0-78.71 48.68A64 64 0 1 0 72 216h40a8 8 0 0 0 0-16H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.12A88 88 0 0 0 72 128a8 8 0 0 0 16 0 72 72 0 1 1 100.8 66 8 8 0 0 0 3.2 15.34 7.9 7.9 0 0 0 3.2-.68A88 88 0 0 0 160 40" }) }),
  filled: /* @__PURE__ */ jsx21(Fragment18, { children: /* @__PURE__ */ jsx21("path", { d: "M247.93 124.52C246.11 77.54 207.07 40 160.06 40a88.1 88.1 0 0 0-78.77 48.67A87.5 87.5 0 0 0 72 127.73a8.18 8.18 0 0 1-7.43 8.27 8 8 0 0 1-8.57-8 103.7 103.7 0 0 1 5.34-32.92 4 4 0 0 0-4.75-5.18A64.09 64.09 0 0 0 8 152c0 35.19 29.75 64 65 64h87a88.09 88.09 0 0 0 87.93-91.48m-50.27 9.14a8 8 0 0 1-11.32 0L168 115.31V176a8 8 0 0 1-16 0v-60.69l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1 0 11.32" }) })
};
var AnimatedCloudArrowUpIcon = forwardRef21(
  function AnimatedCloudArrowUpIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx21(
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
        children: /* @__PURE__ */ jsx21(
          motion18.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CLOUDARROWUP_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CLOUDARROWUP_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCloudArrowUpIcon.displayName = "AnimatedCloudArrowUpIcon";
var CloudArrowUpIcon = forwardRef21(
  function CloudArrowUpIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx21(
        AnimatedCloudArrowUpIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx21(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CLOUDARROWUP_GLYPHS[weight] });
  }
);
CloudArrowUpIcon.displayName = "CloudArrowUpIcon";

// src/icons/copy.tsx
import { forwardRef as forwardRef22 } from "react";
import { motion as motion19 } from "motion/react";
import { Fragment as Fragment19, jsx as jsx22 } from "react/jsx-runtime";
var COPY_ANIMATION_VARIANTS = getIconAnimationVariants("copy");
var COPY_GLYPHS = {
  outline: /* @__PURE__ */ jsx22(Fragment19, { children: /* @__PURE__ */ jsx22("path", { fill: "none", d: "M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" }) }),
  filled: /* @__PURE__ */ jsx22(Fragment19, { children: /* @__PURE__ */ jsx22("path", { d: "M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-8 128h-32V88a8 8 0 0 0-8-8H96V48h112Z" }) })
};
var AnimatedCopyIcon = forwardRef22(
  function AnimatedCopyIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx22(
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
        children: /* @__PURE__ */ jsx22(
          motion19.svg,
          {
            animate: controls,
            initial: "normal",
            variants: COPY_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: COPY_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCopyIcon.displayName = "AnimatedCopyIcon";
var CopyIcon = forwardRef22(
  function CopyIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx22(
        AnimatedCopyIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx22(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: COPY_GLYPHS[weight] });
  }
);
CopyIcon.displayName = "CopyIcon";

// src/icons/corners-out.tsx
import { forwardRef as forwardRef23 } from "react";
import { motion as motion20 } from "motion/react";
import { Fragment as Fragment20, jsx as jsx23 } from "react/jsx-runtime";
var CORNERSOUT_ANIMATION_VARIANTS = getIconAnimationVariants("corners-out");
var CORNERSOUT_GLYPHS = {
  outline: /* @__PURE__ */ jsx23(Fragment20, { children: /* @__PURE__ */ jsx23("path", { fill: "none", d: "M216 48v40a8 8 0 0 1-16 0V56h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M88 200H56v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m120-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M88 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 16 0V56h32a8 8 0 0 0 0-16" }) }),
  filled: /* @__PURE__ */ jsx23(Fragment20, { children: /* @__PURE__ */ jsx23("path", { d: "M93.66 202.34A8 8 0 0 1 88 216H48a8 8 0 0 1-8-8v-40a8 8 0 0 1 13.66-5.66ZM88 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 13.66 5.66l40-40A8 8 0 0 0 88 40m123.06 120.61a8 8 0 0 0-8.72 1.73l-40 40A8 8 0 0 0 168 216h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-4.94-7.39M208 40h-40a8 8 0 0 0-5.66 13.66l40 40A8 8 0 0 0 216 88V48a8 8 0 0 0-8-8" }) })
};
var AnimatedCornersOutIcon = forwardRef23(
  function AnimatedCornersOutIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx23(
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
        children: /* @__PURE__ */ jsx23(
          motion20.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CORNERSOUT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CORNERSOUT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCornersOutIcon.displayName = "AnimatedCornersOutIcon";
var CornersOutIcon = forwardRef23(
  function CornersOutIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx23(
        AnimatedCornersOutIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx23(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CORNERSOUT_GLYPHS[weight] });
  }
);
CornersOutIcon.displayName = "CornersOutIcon";

// src/icons/cpu.tsx
import { forwardRef as forwardRef24 } from "react";
import { motion as motion21 } from "motion/react";
import { Fragment as Fragment21, jsx as jsx24 } from "react/jsx-runtime";
var CPU_ANIMATION_VARIANTS = getIconAnimationVariants("cpu");
var CPU_GLYPHS = {
  outline: /* @__PURE__ */ jsx24(Fragment21, { children: /* @__PURE__ */ jsx24("path", { fill: "none", d: "M152 96h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-8 48h-32v-32h32Zm88 0h-16v-32h16a8 8 0 0 0 0-16h-16V56a16 16 0 0 0-16-16h-40V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H56a16 16 0 0 0-16 16v40H24a8 8 0 0 0 0 16h16v32H24a8 8 0 0 0 0 16h16v40a16 16 0 0 0 16 16h40v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h40a16 16 0 0 0 16-16v-40h16a8 8 0 0 0 0-16m-32 56H56V56h144z" }) }),
  filled: /* @__PURE__ */ jsx24(Fragment21, { children: /* @__PURE__ */ jsx24("path", { d: "M104 104h48v48h-48Zm136 48a8 8 0 0 1-8 8h-16v40a16 16 0 0 1-16 16h-40v16a8 8 0 0 1-16 0v-16h-32v16a8 8 0 0 1-16 0v-16H56a16 16 0 0 1-16-16v-40H24a8 8 0 0 1 0-16h16v-32H24a8 8 0 0 1 0-16h16V56a16 16 0 0 1 16-16h40V24a8 8 0 0 1 16 0v16h32V24a8 8 0 0 1 16 0v16h40a16 16 0 0 1 16 16v40h16a8 8 0 0 1 0 16h-16v32h16a8 8 0 0 1 8 8m-72-56a8 8 0 0 0-8-8H96a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8Z" }) })
};
var AnimatedCpuIcon = forwardRef24(
  function AnimatedCpuIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx24(
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
        children: /* @__PURE__ */ jsx24(
          motion21.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CPU_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CPU_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCpuIcon.displayName = "AnimatedCpuIcon";
var CpuIcon = forwardRef24(
  function CpuIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx24(
        AnimatedCpuIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx24(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CPU_GLYPHS[weight] });
  }
);
CpuIcon.displayName = "CpuIcon";

// src/icons/currency-dollar.tsx
import { forwardRef as forwardRef25 } from "react";
import { motion as motion22 } from "motion/react";
import { Fragment as Fragment22, jsx as jsx25 } from "react/jsx-runtime";
var CURRENCYDOLLAR_ANIMATION_VARIANTS = getIconAnimationVariants("currency-dollar");
var CURRENCYDOLLAR_GLYPHS = {
  outline: /* @__PURE__ */ jsx25(Fragment22, { children: /* @__PURE__ */ jsx25("path", { fill: "none", d: "M152 120h-16V56h8a32 32 0 0 1 32 32 8 8 0 0 0 16 0 48.05 48.05 0 0 0-48-48h-8V24a8 8 0 0 0-16 0v16h-8a48 48 0 0 0 0 96h8v64h-16a32 32 0 0 1-32-32 8 8 0 0 0-16 0 48.05 48.05 0 0 0 48 48h16v16a8 8 0 0 0 16 0v-16h16a48 48 0 0 0 0-96m-40 0a32 32 0 0 1 0-64h8v64Zm40 80h-16v-64h16a32 32 0 0 1 0 64" }) }),
  filled: /* @__PURE__ */ jsx25(Fragment22, { children: /* @__PURE__ */ jsx25("path", { d: "M152 116h-12V60h4a28 28 0 0 1 28 28 12 12 0 0 0 24 0 52.06 52.06 0 0 0-52-52h-4V24a12 12 0 0 0-24 0v12h-4a52 52 0 0 0 0 104h4v56h-12a28 28 0 0 1-28-28 12 12 0 0 0-24 0 52.06 52.06 0 0 0 52 52h12v12a12 12 0 0 0 24 0v-12h12a52 52 0 0 0 0-104m-40 0a28 28 0 0 1 0-56h4v56Zm40 80h-12v-56h12a28 28 0 0 1 0 56" }) })
};
var AnimatedCurrencyDollarIcon = forwardRef25(
  function AnimatedCurrencyDollarIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx25(
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
        children: /* @__PURE__ */ jsx25(
          motion22.svg,
          {
            animate: controls,
            initial: "normal",
            variants: CURRENCYDOLLAR_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: CURRENCYDOLLAR_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedCurrencyDollarIcon.displayName = "AnimatedCurrencyDollarIcon";
var CurrencyDollarIcon = forwardRef25(
  function CurrencyDollarIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx25(
        AnimatedCurrencyDollarIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx25(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: CURRENCYDOLLAR_GLYPHS[weight] });
  }
);
CurrencyDollarIcon.displayName = "CurrencyDollarIcon";

// src/icons/device-mobile.tsx
import { forwardRef as forwardRef26 } from "react";
import { motion as motion23 } from "motion/react";
import { Fragment as Fragment23, jsx as jsx26 } from "react/jsx-runtime";
var DEVICEMOBILE_ANIMATION_VARIANTS = getIconAnimationVariants("device-mobile");
var DEVICEMOBILE_GLYPHS = {
  outline: /* @__PURE__ */ jsx26(Fragment23, { children: /* @__PURE__ */ jsx26("path", { fill: "none", d: "M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24M72 64h112v128H72Zm8-32h96a8 8 0 0 1 8 8v8H72v-8a8 8 0 0 1 8-8m96 192H80a8 8 0 0 1-8-8v-8h112v8a8 8 0 0 1-8 8" }) }),
  filled: /* @__PURE__ */ jsx26(Fragment23, { children: /* @__PURE__ */ jsx26("path", { d: "M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24M80 32h96a8 8 0 0 1 8 8v8H72v-8a8 8 0 0 1 8-8m96 192H80a8 8 0 0 1-8-8v-8h112v8a8 8 0 0 1-8 8" }) })
};
var AnimatedDeviceMobileIcon = forwardRef26(
  function AnimatedDeviceMobileIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx26(
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
        children: /* @__PURE__ */ jsx26(
          motion23.svg,
          {
            animate: controls,
            initial: "normal",
            variants: DEVICEMOBILE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: DEVICEMOBILE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedDeviceMobileIcon.displayName = "AnimatedDeviceMobileIcon";
var DeviceMobileIcon = forwardRef26(
  function DeviceMobileIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx26(
        AnimatedDeviceMobileIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx26(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: DEVICEMOBILE_GLYPHS[weight] });
  }
);
DeviceMobileIcon.displayName = "DeviceMobileIcon";

// src/icons/dots-three-vertical.tsx
import { forwardRef as forwardRef27 } from "react";
import { motion as motion24 } from "motion/react";
import { Fragment as Fragment24, jsx as jsx27 } from "react/jsx-runtime";
var DOTSTHREEVERTICAL_ANIMATION_VARIANTS = getIconAnimationVariants("dots-three-vertical");
var DOTSTHREEVERTICAL_GLYPHS = {
  outline: /* @__PURE__ */ jsx27(Fragment24, { children: /* @__PURE__ */ jsx27("path", { fill: "none", d: "M140 128a12 12 0 1 1-12-12 12 12 0 0 1 12 12m-12-56a12 12 0 1 0-12-12 12 12 0 0 0 12 12m0 112a12 12 0 1 0 12 12 12 12 0 0 0-12-12" }) }),
  filled: /* @__PURE__ */ jsx27(Fragment24, { children: /* @__PURE__ */ jsx27("path", { d: "M112 60a16 16 0 1 1 16 16 16 16 0 0 1-16-16m16 52a16 16 0 1 0 16 16 16 16 0 0 0-16-16m0 68a16 16 0 1 0 16 16 16 16 0 0 0-16-16" }) })
};
var AnimatedDotsThreeVerticalIcon = forwardRef27(
  function AnimatedDotsThreeVerticalIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx27(
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
        children: /* @__PURE__ */ jsx27(
          motion24.svg,
          {
            animate: controls,
            initial: "normal",
            variants: DOTSTHREEVERTICAL_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: DOTSTHREEVERTICAL_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedDotsThreeVerticalIcon.displayName = "AnimatedDotsThreeVerticalIcon";
var DotsThreeVerticalIcon = forwardRef27(
  function DotsThreeVerticalIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx27(
        AnimatedDotsThreeVerticalIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx27(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: DOTSTHREEVERTICAL_GLYPHS[weight] });
  }
);
DotsThreeVerticalIcon.displayName = "DotsThreeVerticalIcon";

// src/icons/dots-three.tsx
import { forwardRef as forwardRef28 } from "react";
import { motion as motion25 } from "motion/react";
import { Fragment as Fragment25, jsx as jsx28 } from "react/jsx-runtime";
var DOTSTHREE_ANIMATION_VARIANTS = getIconAnimationVariants("dots-three");
var DOTSTHREE_GLYPHS = {
  outline: /* @__PURE__ */ jsx28(Fragment25, { children: /* @__PURE__ */ jsx28("path", { fill: "none", d: "M140 128a12 12 0 1 1-12-12 12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-136 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12" }) }),
  filled: /* @__PURE__ */ jsx28(Fragment25, { children: /* @__PURE__ */ jsx28("path", { d: "M144 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16m-84-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m136 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16" }) })
};
var AnimatedDotsThreeIcon = forwardRef28(
  function AnimatedDotsThreeIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx28(
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
        children: /* @__PURE__ */ jsx28(
          motion25.svg,
          {
            animate: controls,
            initial: "normal",
            variants: DOTSTHREE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: DOTSTHREE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedDotsThreeIcon.displayName = "AnimatedDotsThreeIcon";
var DotsThreeIcon = forwardRef28(
  function DotsThreeIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx28(
        AnimatedDotsThreeIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx28(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: DOTSTHREE_GLYPHS[weight] });
  }
);
DotsThreeIcon.displayName = "DotsThreeIcon";

// src/icons/exclude.tsx
import { forwardRef as forwardRef29 } from "react";
import { motion as motion26 } from "motion/react";
import { Fragment as Fragment26, jsx as jsx29 } from "react/jsx-runtime";
var EXCLUDE_ANIMATION_VARIANTS = getIconAnimationVariants("exclude");
var EXCLUDE_GLYPHS = {
  outline: /* @__PURE__ */ jsx29(Fragment26, { children: /* @__PURE__ */ jsx29("path", { fill: "none", d: "M174.63 81.37a80 80 0 1 0-93.26 93.26 80 80 0 1 0 93.26-93.26M224 160c0 1.52-.07 3-.18 4.51l-50-50A80 80 0 0 0 176 98a64.11 64.11 0 0 1 48 62m-13.47 39.21-52.62-52.61a80.5 80.5 0 0 0 9.93-15.44L219.7 183a64 64 0 0 1-9.17 16.21M183 219.7l-51.86-51.86a80.5 80.5 0 0 0 15.44-9.93l52.61 52.62A64 64 0 0 1 183 219.7M45.47 56.79l52.62 52.61a80.5 80.5 0 0 0-9.93 15.44L36.3 73a64 64 0 0 1 9.17-16.21M73 36.3l51.86 51.86a80.5 80.5 0 0 0-15.44 9.93L56.79 45.47A64 64 0 0 1 73 36.3M160 96a64.07 64.07 0 0 1-64 64 64.07 64.07 0 0 1 64-64m-2-16a80 80 0 0 0-16.49 2.13l-50-50C93 32.07 94.48 32 96 32a64.11 64.11 0 0 1 62 48.05ZM32 96c0-1.52.07-3 .18-4.51l50 50A80 80 0 0 0 80.05 158 64.11 64.11 0 0 1 32 96m66 80a80 80 0 0 0 16.49-2.13l50 50c-1.49.11-3 .18-4.51.18A64.11 64.11 0 0 1 98 176" }) }),
  filled: /* @__PURE__ */ jsx29(Fragment26, { children: /* @__PURE__ */ jsx29("path", { d: "M240 160a80 80 0 0 1-158.64 14.64 80 80 0 0 0 93.28-93.28A80 80 0 0 1 240 160m-80-80a80.3 80.3 0 0 1 14.64 1.36 80 80 0 1 0-93.28 93.28A80 80 0 0 1 160 80" }) })
};
var AnimatedExcludeIcon = forwardRef29(
  function AnimatedExcludeIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx29(
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
        children: /* @__PURE__ */ jsx29(
          motion26.svg,
          {
            animate: controls,
            initial: "normal",
            variants: EXCLUDE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: EXCLUDE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedExcludeIcon.displayName = "AnimatedExcludeIcon";
var ExcludeIcon = forwardRef29(
  function ExcludeIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx29(
        AnimatedExcludeIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx29(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: EXCLUDE_GLYPHS[weight] });
  }
);
ExcludeIcon.displayName = "ExcludeIcon";

// src/icons/file-code.tsx
import { forwardRef as forwardRef30 } from "react";
import { motion as motion27 } from "motion/react";
import { Fragment as Fragment27, jsx as jsx30 } from "react/jsx-runtime";
var FILECODE_ANIMATION_VARIANTS = getIconAnimationVariants("file-code");
var FILECODE_GLYPHS = {
  outline: /* @__PURE__ */ jsx30(Fragment27, { children: /* @__PURE__ */ jsx30("path", { fill: "none", d: "M181.66 146.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L164.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32Zm-72-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.32-11.32L91.31 152l18.35-18.34a8 8 0 0 0 0-11.32M216 88v128a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Zm40 136V96h-48a8 8 0 0 1-8-8V40H56v176z" }) }),
  filled: /* @__PURE__ */ jsx30(Fragment27, { children: /* @__PURE__ */ jsx30("path", { d: "m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66m-104 88a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L91.31 152Zm72-12.68-24 24a8 8 0 0 1-11.32-11.32L164.69 152l-18.35-18.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32M152 88V44l44 44Z" }) })
};
var AnimatedFileCodeIcon = forwardRef30(
  function AnimatedFileCodeIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx30(
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
        children: /* @__PURE__ */ jsx30(
          motion27.svg,
          {
            animate: controls,
            initial: "normal",
            variants: FILECODE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: FILECODE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedFileCodeIcon.displayName = "AnimatedFileCodeIcon";
var FileCodeIcon = forwardRef30(
  function FileCodeIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx30(
        AnimatedFileCodeIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx30(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: FILECODE_GLYPHS[weight] });
  }
);
FileCodeIcon.displayName = "FileCodeIcon";

// src/icons/file-text.tsx
import { forwardRef as forwardRef31 } from "react";
import { motion as motion28 } from "motion/react";
import { Fragment as Fragment28, jsx as jsx31 } from "react/jsx-runtime";
var FILETEXT_ANIMATION_VARIANTS = getIconAnimationVariants("file-text");
var FILETEXT_GLYPHS = {
  outline: /* @__PURE__ */ jsx31(Fragment28, { children: /* @__PURE__ */ jsx31("path", { fill: "none", d: "m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31 188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-32-80a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m0 32a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ jsx31(Fragment28, { children: /* @__PURE__ */ jsx31("path", { d: "m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 176H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m-8-56V44l44 44Z" }) })
};
var AnimatedFileTextIcon = forwardRef31(
  function AnimatedFileTextIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx31(
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
        children: /* @__PURE__ */ jsx31(
          motion28.svg,
          {
            animate: controls,
            initial: "normal",
            variants: FILETEXT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: FILETEXT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedFileTextIcon.displayName = "AnimatedFileTextIcon";
var FileTextIcon = forwardRef31(
  function FileTextIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx31(
        AnimatedFileTextIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx31(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: FILETEXT_GLYPHS[weight] });
  }
);
FileTextIcon.displayName = "FileTextIcon";

// src/icons/folder-open.tsx
import { forwardRef as forwardRef32 } from "react";
import { motion as motion29 } from "motion/react";
import { Fragment as Fragment29, jsx as jsx32 } from "react/jsx-runtime";
var FOLDEROPEN_ANIMATION_VARIANTS = getIconAnimationVariants("folder-open");
var FOLDEROPEN_GLYPHS = {
  outline: /* @__PURE__ */ jsx32(Fragment29, { children: /* @__PURE__ */ jsx32("path", { fill: "none", d: "M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l29.86 22.4A8 8 0 0 0 128 88h72v16H69.77a16 16 0 0 0-15.18 10.94L40 158.7V64Zm112 136H43.1l26.67-80H232Z" }) }),
  filled: /* @__PURE__ */ jsx32(Fragment29, { children: /* @__PURE__ */ jsx32("path", { d: "M245 110.64a16 16 0 0 0-13-6.64h-16V88a16 16 0 0 0-16-16h-69.33l-27.73-20.8a16.14 16.14 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v144a8 8 0 0 0 8 8h179.1a8 8 0 0 0 7.59-5.47l28.49-85.47a16.05 16.05 0 0 0-2.18-14.42M93.34 64l29.86 22.4A8 8 0 0 0 128 88h72v16H69.77a16 16 0 0 0-15.18 10.94L40 158.7V64Z" }) })
};
var AnimatedFolderOpenIcon = forwardRef32(
  function AnimatedFolderOpenIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx32(
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
        children: /* @__PURE__ */ jsx32(
          motion29.svg,
          {
            animate: controls,
            initial: "normal",
            variants: FOLDEROPEN_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: FOLDEROPEN_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedFolderOpenIcon.displayName = "AnimatedFolderOpenIcon";
var FolderOpenIcon = forwardRef32(
  function FolderOpenIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx32(
        AnimatedFolderOpenIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx32(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: FOLDEROPEN_GLYPHS[weight] });
  }
);
FolderOpenIcon.displayName = "FolderOpenIcon";

// src/icons/folder.tsx
import { forwardRef as forwardRef33 } from "react";
import { motion as motion30 } from "motion/react";
import { Fragment as Fragment30, jsx as jsx33 } from "react/jsx-runtime";
var FOLDER_ANIMATION_VARIANTS = getIconAnimationVariants("folder");
var FOLDER_GLYPHS = {
  outline: /* @__PURE__ */ jsx33(Fragment30, { children: /* @__PURE__ */ jsx33("path", { fill: "none", d: "M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm176 144H40V88h176Z" }) }),
  filled: /* @__PURE__ */ jsx33(Fragment30, { children: /* @__PURE__ */ jsx33("path", { d: "M216 72h-84.69L104 44.69A15.88 15.88 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.41 15.41 0 0 0 39.39 216h177.5A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Z" }) })
};
var AnimatedFolderIcon = forwardRef33(
  function AnimatedFolderIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx33(
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
        children: /* @__PURE__ */ jsx33(
          motion30.svg,
          {
            animate: controls,
            initial: "normal",
            variants: FOLDER_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: FOLDER_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedFolderIcon.displayName = "AnimatedFolderIcon";
var FolderIcon = forwardRef33(
  function FolderIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx33(
        AnimatedFolderIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx33(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: FOLDER_GLYPHS[weight] });
  }
);
FolderIcon.displayName = "FolderIcon";

// src/icons/frame-corners.tsx
import { forwardRef as forwardRef34 } from "react";
import { motion as motion31 } from "motion/react";
import { Fragment as Fragment31, jsx as jsx34 } from "react/jsx-runtime";
var FRAMECORNERS_ANIMATION_VARIANTS = getIconAnimationVariants("frame-corners");
var FRAMECORNERS_GLYPHS = {
  outline: /* @__PURE__ */ jsx34(Fragment31, { children: /* @__PURE__ */ jsx34("path", { fill: "none", d: "M200 80v32a8 8 0 0 1-16 0V88h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M96 168H72v-24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z" }) }),
  filled: /* @__PURE__ */ jsx34(Fragment31, { children: /* @__PURE__ */ jsx34("path", { d: "M200 80v32a8 8 0 0 1-16 0V88h-24a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M96 168H72v-24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144z" }) })
};
var AnimatedFrameCornersIcon = forwardRef34(
  function AnimatedFrameCornersIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx34(
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
        children: /* @__PURE__ */ jsx34(
          motion31.svg,
          {
            animate: controls,
            initial: "normal",
            variants: FRAMECORNERS_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: FRAMECORNERS_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedFrameCornersIcon.displayName = "AnimatedFrameCornersIcon";
var FrameCornersIcon = forwardRef34(
  function FrameCornersIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx34(
        AnimatedFrameCornersIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx34(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: FRAMECORNERS_GLYPHS[weight] });
  }
);
FrameCornersIcon.displayName = "FrameCornersIcon";

// src/icons/gear.tsx
import { forwardRef as forwardRef35 } from "react";
import { motion as motion32 } from "motion/react";
import { Fragment as Fragment32, jsx as jsx35 } from "react/jsx-runtime";
var GEAR_ANIMATION_VARIANTS = getIconAnimationVariants("gear");
var GEAR_GLYPHS = {
  outline: /* @__PURE__ */ jsx35(Fragment32, { children: /* @__PURE__ */ jsx35("path", { fill: "none", d: "M128 80a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32 32 32 0 0 1-32 32m88-29.84q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06 107.2 107.2 0 0 0-10.88-26.25 8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6 107.7 107.7 0 0 0-26.25-10.87 8 8 0 0 0-7.06 1.49L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48 107.6 107.6 0 0 0-26.25 10.88 8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94 107.7 107.7 0 0 0-10.87 26.25 8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06 107.2 107.2 0 0 0 10.88 26.25 8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6 107.7 107.7 0 0 0 26.25 10.87 8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48 107.2 107.2 0 0 0 26.25-10.88 8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94 107.7 107.7 0 0 0 10.87-26.25 8 8 0 0 0-1.49-7.06Zm-16.1-6.5a74 74 0 0 1 0 8.68 8 8 0 0 0 1.74 5.48l14.19 17.73a91.6 91.6 0 0 1-6.23 15l-22.6 2.56a8 8 0 0 0-5.1 2.64 74 74 0 0 1-6.14 6.14 8 8 0 0 0-2.64 5.1l-2.51 22.58a91.3 91.3 0 0 1-15 6.23l-17.74-14.19a8 8 0 0 0-5-1.75h-.48a74 74 0 0 1-8.68 0 8 8 0 0 0-5.48 1.74l-17.78 14.2a91.6 91.6 0 0 1-15-6.23L82.89 187a8 8 0 0 0-2.64-5.1 74 74 0 0 1-6.14-6.14 8 8 0 0 0-5.1-2.64l-22.58-2.52a91.3 91.3 0 0 1-6.23-15l14.19-17.74a8 8 0 0 0 1.74-5.48 74 74 0 0 1 0-8.68 8 8 0 0 0-1.74-5.48L40.2 100.45a91.6 91.6 0 0 1 6.23-15L69 82.89a8 8 0 0 0 5.1-2.64 74 74 0 0 1 6.14-6.14A8 8 0 0 0 82.89 69l2.51-22.57a91.3 91.3 0 0 1 15-6.23l17.74 14.19a8 8 0 0 0 5.48 1.74 74 74 0 0 1 8.68 0 8 8 0 0 0 5.48-1.74l17.77-14.19a91.6 91.6 0 0 1 15 6.23L173.11 69a8 8 0 0 0 2.64 5.1 74 74 0 0 1 6.14 6.14 8 8 0 0 0 5.1 2.64l22.58 2.51a91.3 91.3 0 0 1 6.23 15l-14.19 17.74a8 8 0 0 0-1.74 5.53Z" }) }),
  filled: /* @__PURE__ */ jsx35(Fragment32, { children: /* @__PURE__ */ jsx35("path", { d: "M216 130.16q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06 107.6 107.6 0 0 0-10.88-26.25 8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6 107.3 107.3 0 0 0-26.25-10.86 8 8 0 0 0-7.06 1.48L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48 107.6 107.6 0 0 0-26.25 10.88 8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94 107.7 107.7 0 0 0-10.87 26.25 8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06 107.6 107.6 0 0 0 10.88 26.25 8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6 107.7 107.7 0 0 0 26.25 10.87 8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48 107.2 107.2 0 0 0 26.25-10.88 8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94 107.7 107.7 0 0 0 10.87-26.25 8 8 0 0 0-1.49-7.06ZM128 168a40 40 0 1 1 40-40 40 40 0 0 1-40 40" }) })
};
var AnimatedGearIcon = forwardRef35(
  function AnimatedGearIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx35(
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
        children: /* @__PURE__ */ jsx35(
          motion32.svg,
          {
            animate: controls,
            initial: "normal",
            variants: GEAR_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: GEAR_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedGearIcon.displayName = "AnimatedGearIcon";
var GearIcon = forwardRef35(
  function GearIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx35(
        AnimatedGearIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx35(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: GEAR_GLYPHS[weight] });
  }
);
GearIcon.displayName = "GearIcon";

// src/icons/globe.tsx
import { forwardRef as forwardRef36 } from "react";
import { motion as motion33 } from "motion/react";
import { Fragment as Fragment33, jsx as jsx36 } from "react/jsx-runtime";
var GLOBE_ANIMATION_VARIANTS = getIconAnimationVariants("globe");
var GLOBE_GLYPHS = {
  outline: /* @__PURE__ */ jsx36(Fragment33, { children: /* @__PURE__ */ jsx36("path", { fill: "none", d: "M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45 115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45 115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6" }) }),
  filled: /* @__PURE__ */ jsx36(Fragment33, { children: /* @__PURE__ */ jsx36("path", { d: "M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m78.36 64h-35.65a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm9.64 40a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-88-85a115.3 115.3 0 0 1 26 45h-52a115.1 115.1 0 0 1 26-45m-26 125h52a115.1 115.1 0 0 1-26 45 115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48Zm50.35 61.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-58 45.6Z" }) })
};
var AnimatedGlobeIcon = forwardRef36(
  function AnimatedGlobeIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx36(
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
        children: /* @__PURE__ */ jsx36(
          motion33.svg,
          {
            animate: controls,
            initial: "normal",
            variants: GLOBE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: GLOBE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedGlobeIcon.displayName = "AnimatedGlobeIcon";
var GlobeIcon = forwardRef36(
  function GlobeIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx36(
        AnimatedGlobeIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx36(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: GLOBE_GLYPHS[weight] });
  }
);
GlobeIcon.displayName = "GlobeIcon";

// src/icons/google-logo.tsx
import { forwardRef as forwardRef37 } from "react";
import { motion as motion34 } from "motion/react";
import { Fragment as Fragment34, jsx as jsx37 } from "react/jsx-runtime";
var GOOGLELOGO_ANIMATION_VARIANTS = getIconAnimationVariants("google-logo");
var GOOGLELOGO_GLYPHS = {
  outline: /* @__PURE__ */ jsx37(Fragment34, { children: /* @__PURE__ */ jsx37("path", { fill: "none", d: "M224 128a96 96 0 1 1-21.95-61.09 8 8 0 1 1-12.33 10.18A80 80 0 1 0 207.6 136H128a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ jsx37(Fragment34, { children: /* @__PURE__ */ jsx37("path", { d: "M228 128a100 100 0 1 1-22.86-63.64 12 12 0 0 1-18.51 15.28A76 76 0 1 0 203.05 140H128a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12" }) })
};
var AnimatedGoogleLogoIcon = forwardRef37(
  function AnimatedGoogleLogoIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx37(
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
        children: /* @__PURE__ */ jsx37(
          motion34.svg,
          {
            animate: controls,
            initial: "normal",
            variants: GOOGLELOGO_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: GOOGLELOGO_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedGoogleLogoIcon.displayName = "AnimatedGoogleLogoIcon";
var GoogleLogoIcon = forwardRef37(
  function GoogleLogoIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx37(
        AnimatedGoogleLogoIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx37(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: GOOGLELOGO_GLYPHS[weight] });
  }
);
GoogleLogoIcon.displayName = "GoogleLogoIcon";

// src/icons/heart.tsx
import { forwardRef as forwardRef38 } from "react";
import { motion as motion35 } from "motion/react";
import { Fragment as Fragment35, jsx as jsx38 } from "react/jsx-runtime";
var HEART_ANIMATION_VARIANTS2 = getIconAnimationVariants("heart");
var HEART_GLYPHS = {
  outline: /* @__PURE__ */ jsx38(Fragment35, { children: /* @__PURE__ */ jsx38("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z", fill: "none" }) }),
  filled: /* @__PURE__ */ jsx38(Fragment35, { children: /* @__PURE__ */ jsx38("path", { fill: "currentColor", d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" }) })
};
var AnimatedHeartIcon = forwardRef38(
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
    return /* @__PURE__ */ jsx38(
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
        children: /* @__PURE__ */ jsx38(
          motion35.svg,
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
var HeartIcon = forwardRef38(
  function HeartIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx38(
        AnimatedHeartIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx38(ZagIconBase, { ref, viewBox: "0 0 24 24", "data-weight": weight, ...rest, children: HEART_GLYPHS[weight] });
  }
);
HeartIcon.displayName = "HeartIcon";

// src/icons/home.tsx
import { forwardRef as forwardRef39, useId } from "react";
import { motion as motion36 } from "motion/react";
import { Fragment as Fragment36, jsx as jsx39, jsxs } from "react/jsx-runtime";
var HOME_DEFAULT_TRANSITION2 = DEFAULT_PATH_TRANSITION;
var HOME_PATH_VARIANTS2 = PATH_DRAW_VARIANTS;
var HOME_GLYPHS = {
  outline: /* @__PURE__ */ jsxs(Fragment36, { children: [
    /* @__PURE__ */ jsx39("path", { fill: "currentColor", d: "M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" }),
    /* @__PURE__ */ jsx39("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402z", clipRule: "evenodd" })
  ] }),
  filled: /* @__PURE__ */ jsx39(Fragment36, { children: /* @__PURE__ */ jsx39("path", { fill: "currentColor", fillRule: "evenodd", d: "M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z", clipRule: "evenodd" }) })
};
var AnimatedHomeIcon = forwardRef39(
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
    return /* @__PURE__ */ jsx39(
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
        children: /* @__PURE__ */ jsx39(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: weight === "filled" ? /* @__PURE__ */ jsxs(Fragment36, { children: [
              /* @__PURE__ */ jsx39("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
                /* @__PURE__ */ jsx39("rect", { width: "24", height: "24", fill: "white" }),
                /* @__PURE__ */ jsx39(
                  motion36.path,
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
              /* @__PURE__ */ jsx39(
                "path",
                {
                  fill: "currentColor",
                  mask: `url(#${maskId})`,
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823Z"
                }
              )
            ] }) : /* @__PURE__ */ jsxs(Fragment36, { children: [
              /* @__PURE__ */ jsx39(
                "path",
                {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12 1.25c-.708 0-1.351.203-2.05.542-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.947.747.773 1.697 1.119 2.875 1.282 1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159 1.177-.163 2.128-.509 2.876-1.282.743-.769 1.073-1.742 1.23-2.947.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726-.07-.75-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402.489.375.77.684.963 1.036.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443-.136 1.048-.393 1.656-.82 2.099-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.84-.428-.442-.685-1.05-.82-2.098-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.386 1.178-.805 2.139-1.402z"
                }
              ),
              /* @__PURE__ */ jsx39(
                motion36.path,
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
var HomeIcon = forwardRef39(
  function HomeIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx39(
        AnimatedHomeIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx39(ZagIconBase, { ref, viewBox: "0 0 24 24", "data-weight": weight, ...rest, children: HOME_GLYPHS[weight] });
  }
);
HomeIcon.displayName = "HomeIcon";

// src/icons/info.tsx
import { forwardRef as forwardRef40 } from "react";
import { motion as motion37 } from "motion/react";
import { Fragment as Fragment37, jsx as jsx40 } from "react/jsx-runtime";
var INFO_ANIMATION_VARIANTS = getIconAnimationVariants("info");
var INFO_GLYPHS = {
  outline: /* @__PURE__ */ jsx40(Fragment37, { children: /* @__PURE__ */ jsx40("path", { fill: "none", d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m16-40a8 8 0 0 1-8 8 16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16 16 16 0 0 1 16 16v40a8 8 0 0 1 8 8m-32-92a12 12 0 1 1 12 12 12 12 0 0 1-12-12" }) }),
  filled: /* @__PURE__ */ jsx40(Fragment37, { children: /* @__PURE__ */ jsx40("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12 12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16 16 16 0 0 1 16 16v40a8 8 0 0 1 0 16" }) })
};
var AnimatedInfoIcon = forwardRef40(
  function AnimatedInfoIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx40(
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
        children: /* @__PURE__ */ jsx40(
          motion37.svg,
          {
            animate: controls,
            initial: "normal",
            variants: INFO_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: INFO_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedInfoIcon.displayName = "AnimatedInfoIcon";
var InfoIcon = forwardRef40(
  function InfoIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx40(
        AnimatedInfoIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx40(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: INFO_GLYPHS[weight] });
  }
);
InfoIcon.displayName = "InfoIcon";

// src/icons/lightning.tsx
import { forwardRef as forwardRef41 } from "react";
import { motion as motion38 } from "motion/react";
import { Fragment as Fragment38, jsx as jsx41 } from "react/jsx-runtime";
var LIGHTNING_ANIMATION_VARIANTS = getIconAnimationVariants("lightning");
var LIGHTNING_GLYPHS = {
  outline: /* @__PURE__ */ jsx41(Fragment38, { children: /* @__PURE__ */ jsx41("path", { fill: "none", d: "M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z" }) }),
  filled: /* @__PURE__ */ jsx41(Fragment38, { children: /* @__PURE__ */ jsx41("path", { d: "m213.85 125.46-112 120a8 8 0 0 1-13.69-7l14.66-73.33-57.63-21.64a8 8 0 0 1-3-13l112-120a8 8 0 0 1 13.69 7l-14.7 73.41 57.63 21.61a8 8 0 0 1 3 12.95Z" }) })
};
var AnimatedLightningIcon = forwardRef41(
  function AnimatedLightningIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx41(
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
        children: /* @__PURE__ */ jsx41(
          motion38.svg,
          {
            animate: controls,
            initial: "normal",
            variants: LIGHTNING_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: LIGHTNING_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedLightningIcon.displayName = "AnimatedLightningIcon";
var LightningIcon = forwardRef41(
  function LightningIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx41(
        AnimatedLightningIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx41(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: LIGHTNING_GLYPHS[weight] });
  }
);
LightningIcon.displayName = "LightningIcon";

// src/icons/logo.tsx
import { forwardRef as forwardRef42 } from "react";
import { motion as motion39 } from "motion/react";
import { Fragment as Fragment39, jsx as jsx42 } from "react/jsx-runtime";
var LOGO_ANIMATION_VARIANTS = getIconAnimationVariants("logo");
var LOGO_GLYPHS = {
  outline: /* @__PURE__ */ jsx42(Fragment39, { children: /* @__PURE__ */ jsx42("path", { fill: "none", d: "M224 160V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8zm-60.69 48-40-40h33.38l40 40ZM48 59.31l40 40v33.38l-40-40ZM92.69 48l40 40H99.31l-40-40ZM104 152v-48h48v48Zm64 4.69v-33.38l40 40v33.38Zm40-16L171.31 104H208Zm-56-56L115.31 48H152ZM48 115.31 84.69 152H48Zm56 56L140.69 208H104Z" }) }),
  filled: /* @__PURE__ */ jsx42(Fragment39, { children: /* @__PURE__ */ jsx42("path", { d: "M88 88v80H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8v48Zm128 0h-48v80H88v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8" }) })
};
var AnimatedLogoIcon = forwardRef42(
  function AnimatedLogoIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx42(
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
        children: /* @__PURE__ */ jsx42(
          motion39.svg,
          {
            animate: controls,
            initial: "normal",
            variants: LOGO_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: LOGO_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedLogoIcon.displayName = "AnimatedLogoIcon";
var LogoIcon = forwardRef42(
  function LogoIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx42(
        AnimatedLogoIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx42(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: LOGO_GLYPHS[weight] });
  }
);
LogoIcon.displayName = "LogoIcon";

// src/icons/magnifying-glass.tsx
import { forwardRef as forwardRef43 } from "react";
import { motion as motion40 } from "motion/react";
import { Fragment as Fragment40, jsx as jsx43 } from "react/jsx-runtime";
var MAGNIFYINGGLASS_ANIMATION_VARIANTS = getIconAnimationVariants("magnifying-glass");
var MAGNIFYINGGLASS_GLYPHS = {
  outline: /* @__PURE__ */ jsx43(Fragment40, { children: /* @__PURE__ */ jsx43("path", { fill: "none", d: "m229.66 218.34-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72" }) }),
  filled: /* @__PURE__ */ jsx43(Fragment40, { children: /* @__PURE__ */ jsx43("path", { d: "M168 112a56 56 0 1 1-56-56 56 56 0 0 1 56 56m61.66 117.66a8 8 0 0 1-11.32 0l-50.06-50.07a88 88 0 1 1 11.32-11.31l50.06 50.06a8 8 0 0 1 0 11.32M112 184a72 72 0 1 0-72-72 72.08 72.08 0 0 0 72 72" }) })
};
var AnimatedMagnifyingGlassIcon = forwardRef43(
  function AnimatedMagnifyingGlassIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx43(
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
        children: /* @__PURE__ */ jsx43(
          motion40.svg,
          {
            animate: controls,
            initial: "normal",
            variants: MAGNIFYINGGLASS_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: MAGNIFYINGGLASS_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedMagnifyingGlassIcon.displayName = "AnimatedMagnifyingGlassIcon";
var MagnifyingGlassIcon = forwardRef43(
  function MagnifyingGlassIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx43(
        AnimatedMagnifyingGlassIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx43(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: MAGNIFYINGGLASS_GLYPHS[weight] });
  }
);
MagnifyingGlassIcon.displayName = "MagnifyingGlassIcon";

// src/icons/map-trifold.tsx
import { forwardRef as forwardRef44 } from "react";
import { motion as motion41 } from "motion/react";
import { Fragment as Fragment41, jsx as jsx44 } from "react/jsx-runtime";
var MAPTRIFOLD_ANIMATION_VARIANTS = getIconAnimationVariants("map-trifold");
var MAPTRIFOLD_GLYPHS = {
  outline: /* @__PURE__ */ jsx44(Fragment41, { children: /* @__PURE__ */ jsx44("path", { fill: "none", d: "M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28 61.35 30.68a8.15 8.15 0 0 0 3.58.84 8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M104 52.94l48 24v126.12l-48-24Zm-64 9.31 48-12v127.5l-48 12Zm176 131.5-48 12V78.25l48-12Z" }) }),
  filled: /* @__PURE__ */ jsx44(Fragment41, { children: /* @__PURE__ */ jsx44("path", { d: "M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28 61.35 30.68a8.15 8.15 0 0 0 3.58.84 8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M96 176a8 8 0 0 0-1.94.24L40 189.75V62.25l55.07-13.77.93.46Zm120 17.75-55.07 13.77-.93-.46V80a8 8 0 0 0 1.94-.23L216 66.25Z" }) })
};
var AnimatedMapTrifoldIcon = forwardRef44(
  function AnimatedMapTrifoldIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx44(
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
        children: /* @__PURE__ */ jsx44(
          motion41.svg,
          {
            animate: controls,
            initial: "normal",
            variants: MAPTRIFOLD_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: MAPTRIFOLD_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedMapTrifoldIcon.displayName = "AnimatedMapTrifoldIcon";
var MapTrifoldIcon = forwardRef44(
  function MapTrifoldIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx44(
        AnimatedMapTrifoldIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx44(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: MAPTRIFOLD_GLYPHS[weight] });
  }
);
MapTrifoldIcon.displayName = "MapTrifoldIcon";

// src/icons/minus.tsx
import { forwardRef as forwardRef45 } from "react";
import { motion as motion42 } from "motion/react";
import { Fragment as Fragment42, jsx as jsx45 } from "react/jsx-runtime";
var MINUS_ANIMATION_VARIANTS = getIconAnimationVariants("minus");
var MINUS_GLYPHS = {
  outline: /* @__PURE__ */ jsx45(Fragment42, { children: /* @__PURE__ */ jsx45("path", { fill: "none", d: "M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ jsx45(Fragment42, { children: /* @__PURE__ */ jsx45("path", { d: "M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" }) })
};
var AnimatedMinusIcon = forwardRef45(
  function AnimatedMinusIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx45(
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
        children: /* @__PURE__ */ jsx45(
          motion42.svg,
          {
            animate: controls,
            initial: "normal",
            variants: MINUS_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: MINUS_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedMinusIcon.displayName = "AnimatedMinusIcon";
var MinusIcon = forwardRef45(
  function MinusIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx45(
        AnimatedMinusIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx45(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: MINUS_GLYPHS[weight] });
  }
);
MinusIcon.displayName = "MinusIcon";

// src/icons/monitor.tsx
import { forwardRef as forwardRef46 } from "react";
import { motion as motion43 } from "motion/react";
import { Fragment as Fragment43, jsx as jsx46 } from "react/jsx-runtime";
var MONITOR_ANIMATION_VARIANTS = getIconAnimationVariants("monitor");
var MONITOR_GLYPHS = {
  outline: /* @__PURE__ */ jsx46(Fragment43, { children: /* @__PURE__ */ jsx46("path", { fill: "none", d: "M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ jsx46(Fragment43, { children: /* @__PURE__ */ jsx46("path", { d: "M232 64v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24m-72 152H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16" }) })
};
var AnimatedMonitorIcon = forwardRef46(
  function AnimatedMonitorIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx46(
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
        children: /* @__PURE__ */ jsx46(
          motion43.svg,
          {
            animate: controls,
            initial: "normal",
            variants: MONITOR_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: MONITOR_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedMonitorIcon.displayName = "AnimatedMonitorIcon";
var MonitorIcon = forwardRef46(
  function MonitorIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx46(
        AnimatedMonitorIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx46(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: MONITOR_GLYPHS[weight] });
  }
);
MonitorIcon.displayName = "MonitorIcon";

// src/icons/moon.tsx
import { forwardRef as forwardRef47 } from "react";
import { motion as motion44 } from "motion/react";
import { Fragment as Fragment44, jsx as jsx47 } from "react/jsx-runtime";
var MOON_ANIMATION_VARIANTS = getIconAnimationVariants("moon");
var MOON_GLYPHS = {
  outline: /* @__PURE__ */ jsx47(Fragment44, { children: /* @__PURE__ */ jsx47("path", { fill: "none", d: "M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.1 103.1 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4" }) }),
  filled: /* @__PURE__ */ jsx47(Fragment44, { children: /* @__PURE__ */ jsx47("path", { d: "M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.1 103.1 0 0 1 20.88-62.52 104.84 104.84 0 0 1 52.91-37 8 8 0 0 1 10 10 88.08 88.08 0 0 0 109.8 109.8 8 8 0 0 1 10 10Z" }) })
};
var AnimatedMoonIcon = forwardRef47(
  function AnimatedMoonIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx47(
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
        children: /* @__PURE__ */ jsx47(
          motion44.svg,
          {
            animate: controls,
            initial: "normal",
            variants: MOON_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: MOON_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedMoonIcon.displayName = "AnimatedMoonIcon";
var MoonIcon = forwardRef47(
  function MoonIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx47(
        AnimatedMoonIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx47(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: MOON_GLYPHS[weight] });
  }
);
MoonIcon.displayName = "MoonIcon";

// src/icons/navigation-arrow.tsx
import { forwardRef as forwardRef48 } from "react";
import { motion as motion45 } from "motion/react";
import { Fragment as Fragment45, jsx as jsx48 } from "react/jsx-runtime";
var NAVIGATIONARROW_ANIMATION_VARIANTS = getIconAnimationVariants("navigation-arrow");
var NAVIGATIONARROW_GLYPHS = {
  outline: /* @__PURE__ */ jsx48(Fragment45, { children: /* @__PURE__ */ jsx48("path", { fill: "none", d: "M237.33 106.21 61.41 41l-.16-.05a16 16 0 0 0-20.35 20.3 1 1 0 0 0 .05.16l65.26 175.92A15.77 15.77 0 0 0 121.28 248h.3a15.77 15.77 0 0 0 15-11.29l.06-.2 21.84-78 78-21.84.2-.06a16 16 0 0 0 .62-30.38Zm-87.49 38.09a8 8 0 0 0-5.54 5.54l-23 82.16-.06-.17L56 56l175.82 65.22.16.06Z" }) }),
  filled: /* @__PURE__ */ jsx48(Fragment45, { children: /* @__PURE__ */ jsx48("path", { d: "M248 121.58a15.76 15.76 0 0 1-11.29 15l-.2.06-78 21.84-21.84 78-.06.2a15.77 15.77 0 0 1-15 11.29h-.3a15.77 15.77 0 0 1-15.07-10.67L41 61.41a1 1 0 0 1-.05-.16 16 16 0 0 1 20.3-20.35l.16.05 175.92 65.26A15.78 15.78 0 0 1 248 121.58" }) })
};
var AnimatedNavigationArrowIcon = forwardRef48(
  function AnimatedNavigationArrowIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx48(
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
        children: /* @__PURE__ */ jsx48(
          motion45.svg,
          {
            animate: controls,
            initial: "normal",
            variants: NAVIGATIONARROW_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: NAVIGATIONARROW_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedNavigationArrowIcon.displayName = "AnimatedNavigationArrowIcon";
var NavigationArrowIcon = forwardRef48(
  function NavigationArrowIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx48(
        AnimatedNavigationArrowIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx48(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: NAVIGATIONARROW_GLYPHS[weight] });
  }
);
NavigationArrowIcon.displayName = "NavigationArrowIcon";

// src/icons/plus.tsx
import { forwardRef as forwardRef49 } from "react";
import { motion as motion46 } from "motion/react";
import { Fragment as Fragment46, jsx as jsx49 } from "react/jsx-runtime";
var PLUS_ANIMATION_VARIANTS = getIconAnimationVariants("plus");
var PLUS_GLYPHS = {
  outline: /* @__PURE__ */ jsx49(Fragment46, { children: /* @__PURE__ */ jsx49("path", { fill: "none", d: "M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ jsx49(Fragment46, { children: /* @__PURE__ */ jsx49("path", { d: "M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8" }) })
};
var AnimatedPlusIcon = forwardRef49(
  function AnimatedPlusIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx49(
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
        children: /* @__PURE__ */ jsx49(
          motion46.svg,
          {
            animate: controls,
            initial: "normal",
            variants: PLUS_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: PLUS_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedPlusIcon.displayName = "AnimatedPlusIcon";
var PlusIcon = forwardRef49(
  function PlusIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx49(
        AnimatedPlusIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx49(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: PLUS_GLYPHS[weight] });
  }
);
PlusIcon.displayName = "PlusIcon";

// src/icons/robot.tsx
import { forwardRef as forwardRef50 } from "react";
import { motion as motion47 } from "motion/react";
import { Fragment as Fragment47, jsx as jsx50 } from "react/jsx-runtime";
var ROBOT_ANIMATION_VARIANTS = getIconAnimationVariants("robot");
var ROBOT_GLYPHS = {
  outline: /* @__PURE__ */ jsx50(Fragment47, { children: /* @__PURE__ */ jsx50("path", { fill: "none", d: "M200 48h-64V16a8 8 0 0 0-16 0v32H56a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m16 144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Zm-52-56H92a28 28 0 0 0 0 56h72a28 28 0 0 0 0-56m-24 16v24h-24v-24Zm-60 12a12 12 0 0 1 12-12h8v24h-8a12 12 0 0 1-12-12m84 12h-8v-24h8a12 12 0 0 1 0 24m-92-68a12 12 0 1 1 12 12 12 12 0 0 1-12-12m88 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12" }) }),
  filled: /* @__PURE__ */ jsx50(Fragment47, { children: /* @__PURE__ */ jsx50("path", { d: "M200 48h-64V16a8 8 0 0 0-16 0v32H56a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m-28 48a12 12 0 1 1-12 12 12 12 0 0 1 12-12m-76 88H80a16 16 0 0 1 0-32h16Zm-12-64a12 12 0 1 1 12-12 12 12 0 0 1-12 12m60 64h-32v-32h32Zm32 0h-16v-32h16a16 16 0 0 1 0 32" }) })
};
var AnimatedRobotIcon = forwardRef50(
  function AnimatedRobotIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx50(
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
        children: /* @__PURE__ */ jsx50(
          motion47.svg,
          {
            animate: controls,
            initial: "normal",
            variants: ROBOT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: ROBOT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedRobotIcon.displayName = "AnimatedRobotIcon";
var RobotIcon = forwardRef50(
  function RobotIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx50(
        AnimatedRobotIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx50(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: ROBOT_GLYPHS[weight] });
  }
);
RobotIcon.displayName = "RobotIcon";

// src/icons/share.tsx
import { forwardRef as forwardRef51 } from "react";
import { motion as motion48 } from "motion/react";
import { Fragment as Fragment48, jsx as jsx51 } from "react/jsx-runtime";
var SHARE_ANIMATION_VARIANTS = getIconAnimationVariants("share");
var SHARE_GLYPHS = {
  outline: /* @__PURE__ */ jsx51(Fragment48, { children: /* @__PURE__ */ jsx51("path", { fill: "none", d: "m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3M160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.2 196.2 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" }) }),
  filled: /* @__PURE__ */ jsx51(Fragment48, { children: /* @__PURE__ */ jsx51("path", { d: "m237.66 117.66-80 80A8 8 0 0 1 144 192v-39.77c-57.1 3.24-96.25 40.27-107.24 52a12 12 0 0 1-20.68-9.58c3.71-32.26 21.38-63.29 49.76-87.37 23.57-20 52.22-32.69 78.16-34.91V32a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32" }) })
};
var AnimatedShareIcon = forwardRef51(
  function AnimatedShareIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx51(
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
        children: /* @__PURE__ */ jsx51(
          motion48.svg,
          {
            animate: controls,
            initial: "normal",
            variants: SHARE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: SHARE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedShareIcon.displayName = "AnimatedShareIcon";
var ShareIcon = forwardRef51(
  function ShareIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx51(
        AnimatedShareIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx51(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: SHARE_GLYPHS[weight] });
  }
);
ShareIcon.displayName = "ShareIcon";

// src/icons/shield-check.tsx
import { forwardRef as forwardRef52 } from "react";
import { motion as motion49 } from "motion/react";
import { Fragment as Fragment49, jsx as jsx52 } from "react/jsx-runtime";
var SHIELDCHECK_ANIMATION_VARIANTS = getIconAnimationVariants("shield-check");
var SHIELDCHECK_GLYPHS = {
  outline: /* @__PURE__ */ jsx52(Fragment49, { children: /* @__PURE__ */ jsx52("path", { fill: "none", d: "M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19 23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2 128.3 128.3 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160ZM82.34 141.66a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32l-56 56a8 8 0 0 1-11.32 0Z" }) }),
  filled: /* @__PURE__ */ jsx52(Fragment49, { children: /* @__PURE__ */ jsx52("path", { d: "M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19 23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m-34.32 69.66-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z" }) })
};
var AnimatedShieldCheckIcon = forwardRef52(
  function AnimatedShieldCheckIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx52(
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
        children: /* @__PURE__ */ jsx52(
          motion49.svg,
          {
            animate: controls,
            initial: "normal",
            variants: SHIELDCHECK_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: SHIELDCHECK_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedShieldCheckIcon.displayName = "AnimatedShieldCheckIcon";
var ShieldCheckIcon = forwardRef52(
  function ShieldCheckIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx52(
        AnimatedShieldCheckIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx52(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: SHIELDCHECK_GLYPHS[weight] });
  }
);
ShieldCheckIcon.displayName = "ShieldCheckIcon";

// src/icons/sidebar.tsx
import { forwardRef as forwardRef53 } from "react";
import { motion as motion50 } from "motion/react";
import { Fragment as Fragment50, jsx as jsx53 } from "react/jsx-runtime";
var SIDEBAR_ANIMATION_VARIANTS = getIconAnimationVariants("sidebar");
var SIDEBAR_GLYPHS = {
  outline: /* @__PURE__ */ jsx53(Fragment50, { children: /* @__PURE__ */ jsx53("path", { fill: "none", d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 152h16a8 8 0 0 0 0-16H40v-16h16a8 8 0 0 0 0-16H40V88h16a8 8 0 0 0 0-16H40V56h40v144H40Zm176 48H96V56h120z" }) }),
  filled: /* @__PURE__ */ jsx53(Fragment50, { children: /* @__PURE__ */ jsx53("path", { d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M64 152H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m152 112H88V56h128z" }) })
};
var AnimatedSidebarIcon = forwardRef53(
  function AnimatedSidebarIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx53(
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
        children: /* @__PURE__ */ jsx53(
          motion50.svg,
          {
            animate: controls,
            initial: "normal",
            variants: SIDEBAR_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: SIDEBAR_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedSidebarIcon.displayName = "AnimatedSidebarIcon";
var SidebarIcon = forwardRef53(
  function SidebarIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx53(
        AnimatedSidebarIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx53(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: SIDEBAR_GLYPHS[weight] });
  }
);
SidebarIcon.displayName = "SidebarIcon";

// src/icons/sign-out.tsx
import { forwardRef as forwardRef54 } from "react";
import { motion as motion51 } from "motion/react";
import { Fragment as Fragment51, jsx as jsx54 } from "react/jsx-runtime";
var SIGNOUT_ANIMATION_VARIANTS = getIconAnimationVariants("sign-out");
var SIGNOUT_GLYPHS = {
  outline: /* @__PURE__ */ jsx54(Fragment51, { children: /* @__PURE__ */ jsx54("path", { fill: "none", d: "M120 216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H56v160h56a8 8 0 0 1 8 8m109.66-93.66-40-40a8 8 0 0 0-11.32 11.32L204.69 120H112a8 8 0 0 0 0 16h92.69l-26.35 26.34a8 8 0 0 0 11.32 11.32l40-40a8 8 0 0 0 0-11.32" }) }),
  filled: /* @__PURE__ */ jsx54(Fragment51, { children: /* @__PURE__ */ jsx54("path", { d: "M120 216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H56v160h56a8 8 0 0 1 8 8m109.66-93.66-40-40A8 8 0 0 0 176 88v32h-64a8 8 0 0 0 0 16h64v32a8 8 0 0 0 13.66 5.66l40-40a8 8 0 0 0 0-11.32" }) })
};
var AnimatedSignOutIcon = forwardRef54(
  function AnimatedSignOutIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx54(
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
        children: /* @__PURE__ */ jsx54(
          motion51.svg,
          {
            animate: controls,
            initial: "normal",
            variants: SIGNOUT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: SIGNOUT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedSignOutIcon.displayName = "AnimatedSignOutIcon";
var SignOutIcon = forwardRef54(
  function SignOutIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx54(
        AnimatedSignOutIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx54(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: SIGNOUT_GLYPHS[weight] });
  }
);
SignOutIcon.displayName = "SignOutIcon";

// src/icons/star.tsx
import { forwardRef as forwardRef55 } from "react";
import { motion as motion52 } from "motion/react";
import { Fragment as Fragment52, jsx as jsx55 } from "react/jsx-runtime";
var STAR_ANIMATION_VARIANTS = getIconAnimationVariants("star");
var STAR_GLYPHS = {
  outline: /* @__PURE__ */ jsx55(Fragment52, { children: /* @__PURE__ */ jsx55("path", { fill: "none", d: "M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23 31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.38 16.38 0 0 0 24.5 17.82l50.5-31.08 50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07 45-38.83a16.43 16.43 0 0 0 4.94-17.59m-15.34 5.47-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-54.72-33.65a8 8 0 0 0-8.38 0l-54.72 33.67c-.15.09-.19.12-.38 0a.37.37 0 0 1-.17-.48l14.88-62.8a8 8 0 0 0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16a8 8 0 0 0 6.72-4.94l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153 91.86a8 8 0 0 0 6.75 4.92l63.92 5.16c.15 0 .24 0 .33.29s0 .4-.16.5" }) }),
  filled: /* @__PURE__ */ jsx55(Fragment52, { children: /* @__PURE__ */ jsx55("path", { d: "m234.29 114.85-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76 22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08 59 4.76a16.46 16.46 0 0 1 9.37 28.86Z" }) })
};
var AnimatedStarIcon = forwardRef55(
  function AnimatedStarIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx55(
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
        children: /* @__PURE__ */ jsx55(
          motion52.svg,
          {
            animate: controls,
            initial: "normal",
            variants: STAR_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: STAR_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedStarIcon.displayName = "AnimatedStarIcon";
var StarIcon = forwardRef55(
  function StarIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx55(
        AnimatedStarIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx55(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: STAR_GLYPHS[weight] });
  }
);
StarIcon.displayName = "StarIcon";

// src/icons/sun.tsx
import { forwardRef as forwardRef56 } from "react";
import { motion as motion53 } from "motion/react";
import { Fragment as Fragment53, jsx as jsx56 } from "react/jsx-runtime";
var SUN_ANIMATION_VARIANTS = getIconAnimationVariants("sun");
var SUN_GLYPHS = {
  outline: /* @__PURE__ */ jsx56(Fragment53, { children: /* @__PURE__ */ jsx56("path", { fill: "none", d: "M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16" }) }),
  filled: /* @__PURE__ */ jsx56(Fragment53, { children: /* @__PURE__ */ jsx56("path", { d: "M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m8 24a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16" }) })
};
var AnimatedSunIcon = forwardRef56(
  function AnimatedSunIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx56(
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
        children: /* @__PURE__ */ jsx56(
          motion53.svg,
          {
            animate: controls,
            initial: "normal",
            variants: SUN_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: SUN_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedSunIcon.displayName = "AnimatedSunIcon";
var SunIcon = forwardRef56(
  function SunIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx56(
        AnimatedSunIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx56(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: SUN_GLYPHS[weight] });
  }
);
SunIcon.displayName = "SunIcon";

// src/icons/text-a-underline.tsx
import { forwardRef as forwardRef57 } from "react";
import { motion as motion54 } from "motion/react";
import { Fragment as Fragment54, jsx as jsx57 } from "react/jsx-runtime";
var TEXTAUNDERLINE_ANIMATION_VARIANTS = getIconAnimationVariants("text-a-underline");
var TEXTAUNDERLINE_GLYPHS = {
  outline: /* @__PURE__ */ jsx57(Fragment54, { children: /* @__PURE__ */ jsx57("path", { fill: "none", d: "M60.59 175.24a8 8 0 0 0 10.65-3.83L87.9 136h80.2l16.66 35.41a8 8 0 1 0 14.48-6.82l-64-136a8 8 0 0 0-14.48 0l-64 136a8 8 0 0 0 3.83 10.65M128 50.79 160.57 120H95.43ZM224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ jsx57(Fragment54, { children: /* @__PURE__ */ jsx57("path", { d: "M58.89 178.86a12 12 0 0 0 16-5.75L90.44 140h75.12l15.58 33.11a12 12 0 0 0 21.72-10.22l-64-136a12 12 0 0 0-21.72 0l-64 136a12 12 0 0 0 5.75 15.97M128 60.18 154.27 116h-52.54ZM228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12" }) })
};
var AnimatedTextAUnderlineIcon = forwardRef57(
  function AnimatedTextAUnderlineIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx57(
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
        children: /* @__PURE__ */ jsx57(
          motion54.svg,
          {
            animate: controls,
            initial: "normal",
            variants: TEXTAUNDERLINE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: TEXTAUNDERLINE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedTextAUnderlineIcon.displayName = "AnimatedTextAUnderlineIcon";
var TextAUnderlineIcon = forwardRef57(
  function TextAUnderlineIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx57(
        AnimatedTextAUnderlineIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx57(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: TEXTAUNDERLINE_GLYPHS[weight] });
  }
);
TextAUnderlineIcon.displayName = "TextAUnderlineIcon";

// src/icons/text-align-left.tsx
import { forwardRef as forwardRef58 } from "react";
import { motion as motion55 } from "motion/react";
import { Fragment as Fragment55, jsx as jsx58 } from "react/jsx-runtime";
var TEXTALIGNLEFT_ANIMATION_VARIANTS = getIconAnimationVariants("text-align-left");
var TEXTALIGNLEFT_GLYPHS = {
  outline: /* @__PURE__ */ jsx58(Fragment55, { children: /* @__PURE__ */ jsx58("path", { fill: "none", d: "M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 48h128a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 24H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-48 40H40a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16" }) }),
  filled: /* @__PURE__ */ jsx58(Fragment55, { children: /* @__PURE__ */ jsx58("path", { d: "M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 52h128a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 16H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24m-48 40H40a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24" }) })
};
var AnimatedTextAlignLeftIcon = forwardRef58(
  function AnimatedTextAlignLeftIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx58(
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
        children: /* @__PURE__ */ jsx58(
          motion55.svg,
          {
            animate: controls,
            initial: "normal",
            variants: TEXTALIGNLEFT_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: TEXTALIGNLEFT_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedTextAlignLeftIcon.displayName = "AnimatedTextAlignLeftIcon";
var TextAlignLeftIcon = forwardRef58(
  function TextAlignLeftIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx58(
        AnimatedTextAlignLeftIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx58(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: TEXTALIGNLEFT_GLYPHS[weight] });
  }
);
TextAlignLeftIcon.displayName = "TextAlignLeftIcon";

// src/icons/text-b.tsx
import { forwardRef as forwardRef59 } from "react";
import { motion as motion56 } from "motion/react";
import { Fragment as Fragment56, jsx as jsx59 } from "react/jsx-runtime";
var TEXTB_ANIMATION_VARIANTS = getIconAnimationVariants("text-b");
var TEXTB_GLYPHS = {
  outline: /* @__PURE__ */ jsx59(Fragment56, { children: /* @__PURE__ */ jsx59("path", { fill: "none", d: "M178.48 115.7A44 44 0 0 0 148 40H80a8 8 0 0 0-8 8v152a8 8 0 0 0 8 8h80a48 48 0 0 0 18.48-92.3M88 56h60a28 28 0 0 1 0 56H88Zm72 136H88v-64h72a32 32 0 0 1 0 64" }) }),
  filled: /* @__PURE__ */ jsx59(Fragment56, { children: /* @__PURE__ */ jsx59("path", { d: "M185.08 114.46A48 48 0 0 0 148 36H80a12 12 0 0 0-12 12v152a12 12 0 0 0 12 12h80a52 52 0 0 0 25.08-97.54M92 60h56a24 24 0 0 1 0 48H92Zm68 128H92v-56h68a28 28 0 0 1 0 56" }) })
};
var AnimatedTextBIcon = forwardRef59(
  function AnimatedTextBIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx59(
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
        children: /* @__PURE__ */ jsx59(
          motion56.svg,
          {
            animate: controls,
            initial: "normal",
            variants: TEXTB_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: TEXTB_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedTextBIcon.displayName = "AnimatedTextBIcon";
var TextBIcon = forwardRef59(
  function TextBIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx59(
        AnimatedTextBIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx59(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: TEXTB_GLYPHS[weight] });
  }
);
TextBIcon.displayName = "TextBIcon";

// src/icons/text-italic.tsx
import { forwardRef as forwardRef60 } from "react";
import { motion as motion57 } from "motion/react";
import { Fragment as Fragment57, jsx as jsx60 } from "react/jsx-runtime";
var TEXTITALIC_ANIMATION_VARIANTS = getIconAnimationVariants("text-italic");
var TEXTITALIC_GLYPHS = {
  outline: /* @__PURE__ */ jsx60(Fragment57, { children: /* @__PURE__ */ jsx60("path", { fill: "none", d: "M200 56a8 8 0 0 1-8 8h-34.23L115.1 192H144a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h34.23L140.9 64H112a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8" }) }),
  filled: /* @__PURE__ */ jsx60(Fragment57, { children: /* @__PURE__ */ jsx60("path", { d: "M204 56a12 12 0 0 1-12 12h-31.35l-40 120H144a12 12 0 0 1 0 24H64a12 12 0 0 1 0-24h31.35l40-120H112a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12" }) })
};
var AnimatedTextItalicIcon = forwardRef60(
  function AnimatedTextItalicIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx60(
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
        children: /* @__PURE__ */ jsx60(
          motion57.svg,
          {
            animate: controls,
            initial: "normal",
            variants: TEXTITALIC_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: TEXTITALIC_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedTextItalicIcon.displayName = "AnimatedTextItalicIcon";
var TextItalicIcon = forwardRef60(
  function TextItalicIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx60(
        AnimatedTextItalicIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx60(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: TEXTITALIC_GLYPHS[weight] });
  }
);
TextItalicIcon.displayName = "TextItalicIcon";

// src/icons/trash.tsx
import { forwardRef as forwardRef61 } from "react";
import { motion as motion58 } from "motion/react";
import { Fragment as Fragment58, jsx as jsx61 } from "react/jsx-runtime";
var TRASH_ANIMATION_VARIANTS = getIconAnimationVariants("trash");
var TRASH_GLYPHS = {
  outline: /* @__PURE__ */ jsx61(Fragment58, { children: /* @__PURE__ */ jsx61("path", { fill: "none", d: "M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0" }) }),
  filled: /* @__PURE__ */ jsx61(Fragment58, { children: /* @__PURE__ */ jsx61("path", { d: "M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M112 168a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm0-120H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z" }) })
};
var AnimatedTrashIcon = forwardRef61(
  function AnimatedTrashIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx61(
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
        children: /* @__PURE__ */ jsx61(
          motion58.svg,
          {
            animate: controls,
            initial: "normal",
            variants: TRASH_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: TRASH_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedTrashIcon.displayName = "AnimatedTrashIcon";
var TrashIcon = forwardRef61(
  function TrashIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx61(
        AnimatedTrashIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx61(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: TRASH_GLYPHS[weight] });
  }
);
TrashIcon.displayName = "TrashIcon";

// src/icons/user.tsx
import { forwardRef as forwardRef62 } from "react";
import { motion as motion59 } from "motion/react";
import { Fragment as Fragment59, jsx as jsx62 } from "react/jsx-runtime";
var USER_ANIMATION_VARIANTS = getIconAnimationVariants("user");
var USER_GLYPHS = {
  outline: /* @__PURE__ */ jsx62(Fragment59, { children: /* @__PURE__ */ jsx62("path", { fill: "none", d: "M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56" }) }),
  filled: /* @__PURE__ */ jsx62(Fragment59, { children: /* @__PURE__ */ jsx62("path", { d: "M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8" }) })
};
var AnimatedUserIcon = forwardRef62(
  function AnimatedUserIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx62(
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
        children: /* @__PURE__ */ jsx62(
          motion59.svg,
          {
            animate: controls,
            initial: "normal",
            variants: USER_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: USER_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedUserIcon.displayName = "AnimatedUserIcon";
var UserIcon = forwardRef62(
  function UserIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx62(
        AnimatedUserIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx62(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: USER_GLYPHS[weight] });
  }
);
UserIcon.displayName = "UserIcon";

// src/icons/warning.tsx
import { forwardRef as forwardRef63 } from "react";
import { motion as motion60 } from "motion/react";
import { Fragment as Fragment60, jsx as jsx63 } from "react/jsx-runtime";
var WARNING_ANIMATION_VARIANTS = getIconAnimationVariants("warning");
var WARNING_GLYPHS = {
  outline: /* @__PURE__ */ jsx63(Fragment60, { children: /* @__PURE__ */ jsx63("path", { fill: "none", d: "M236.8 188.09 149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19 23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2 7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12 12 12 0 0 1 12 12" }) }),
  filled: /* @__PURE__ */ jsx63(Fragment60, { children: /* @__PURE__ */ jsx63("path", { d: "M236.8 188.09 149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19 23.51 23.51 0 0 0 .02-23.72M120 104a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12 12 12 0 0 1-12 12" }) })
};
var AnimatedWarningIcon = forwardRef63(
  function AnimatedWarningIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx63(
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
        children: /* @__PURE__ */ jsx63(
          motion60.svg,
          {
            animate: controls,
            initial: "normal",
            variants: WARNING_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: WARNING_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedWarningIcon.displayName = "AnimatedWarningIcon";
var WarningIcon = forwardRef63(
  function WarningIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx63(
        AnimatedWarningIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx63(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: WARNING_GLYPHS[weight] });
  }
);
WarningIcon.displayName = "WarningIcon";

// src/icons/x-circle.tsx
import { forwardRef as forwardRef64 } from "react";
import { motion as motion61 } from "motion/react";
import { Fragment as Fragment61, jsx as jsx64 } from "react/jsx-runtime";
var XCIRCLE_ANIMATION_VARIANTS = getIconAnimationVariants("x-circle");
var XCIRCLE_GLYPHS = {
  outline: /* @__PURE__ */ jsx64(Fragment61, { children: /* @__PURE__ */ jsx64("path", { fill: "none", d: "M165.66 101.66 139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88" }) }),
  filled: /* @__PURE__ */ jsx64(Fragment61, { children: /* @__PURE__ */ jsx64("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 130.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32L139.31 128Z" }) })
};
var AnimatedXCircleIcon = forwardRef64(
  function AnimatedXCircleIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx64(
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
        children: /* @__PURE__ */ jsx64(
          motion61.svg,
          {
            animate: controls,
            initial: "normal",
            variants: XCIRCLE_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: XCIRCLE_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedXCircleIcon.displayName = "AnimatedXCircleIcon";
var XCircleIcon = forwardRef64(
  function XCircleIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx64(
        AnimatedXCircleIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx64(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: XCIRCLE_GLYPHS[weight] });
  }
);
XCircleIcon.displayName = "XCircleIcon";

// src/icons/x.tsx
import { forwardRef as forwardRef65 } from "react";
import { motion as motion62 } from "motion/react";
import { Fragment as Fragment62, jsx as jsx65 } from "react/jsx-runtime";
var X_ANIMATION_VARIANTS = getIconAnimationVariants("x");
var X_GLYPHS = {
  outline: /* @__PURE__ */ jsx65(Fragment62, { children: /* @__PURE__ */ jsx65("path", { fill: "none", d: "M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" }) }),
  filled: /* @__PURE__ */ jsx65(Fragment62, { children: /* @__PURE__ */ jsx65("path", { d: "M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" }) })
};
var AnimatedXIcon = forwardRef65(
  function AnimatedXIcon2(props, ref) {
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
    return /* @__PURE__ */ jsx65(
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
        children: /* @__PURE__ */ jsx65(
          motion62.svg,
          {
            animate: controls,
            initial: "normal",
            variants: X_ANIMATION_VARIANTS,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            width: size,
            height: size,
            color,
            fill: "none",
            focusable: false,
            children: X_GLYPHS[weight]
          }
        )
      }
    );
  }
);
AnimatedXIcon.displayName = "AnimatedXIcon";
var XIcon = forwardRef65(
  function XIcon2(props, ref) {
    const { weight = "outline", animated = false, ...rest } = props;
    if (animated) {
      return /* @__PURE__ */ jsx65(
        AnimatedXIcon,
        {
          weight,
          ...rest
        }
      );
    }
    return /* @__PURE__ */ jsx65(ZagIconBase, { ref, viewBox: "0 0 256 256", "data-weight": weight, ...rest, children: X_GLYPHS[weight] });
  }
);
XIcon.displayName = "XIcon";

// src/illustrations/empty-state.tsx
import { forwardRef as forwardRef66 } from "react";
import { Fragment as Fragment63, jsx as jsx66, jsxs as jsxs2 } from "react/jsx-runtime";
var EMPTYSTATE_ART = /* @__PURE__ */ jsxs2(Fragment63, { children: [
  /* @__PURE__ */ jsx66("defs", { children: /* @__PURE__ */ jsxs2("linearGradient", { id: "a", x1: 52, x2: 196, y1: 28, y2: 156, gradientUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ jsx66("stop", { stopColor: "#818CF8" }),
    /* @__PURE__ */ jsx66("stop", { offset: 1, stopColor: "#C084FC" })
  ] }) }),
  /* @__PURE__ */ jsx66("circle", { cx: 120, cy: 92, r: 72, fill: "url(#a)", opacity: 0.18 }),
  /* @__PURE__ */ jsx66("rect", { width: 124, height: 96, x: 58, y: 42, fill: "#FFF", stroke: "#E2E8F0", strokeWidth: 2, rx: 12 }),
  /* @__PURE__ */ jsx66("path", { stroke: "#E2E8F0", strokeWidth: 2, d: "M58 66h124" }),
  /* @__PURE__ */ jsx66("circle", { cx: 72, cy: 54, r: 4, fill: "#FCA5A5" }),
  /* @__PURE__ */ jsx66("circle", { cx: 86, cy: 54, r: 4, fill: "#FCD34D" }),
  /* @__PURE__ */ jsx66("circle", { cx: 100, cy: 54, r: 4, fill: "#86EFAC" }),
  /* @__PURE__ */ jsx66("rect", { width: 52, height: 6, x: 74, y: 80, fill: "#CBD5E1", rx: 3 }),
  /* @__PURE__ */ jsx66("rect", { width: 36, height: 6, x: 74, y: 94, fill: "#E2E8F0", rx: 3 }),
  /* @__PURE__ */ jsx66("path", { fill: "#F59E0B", d: "m120 96 20-11 20 11-20 11z" }),
  /* @__PURE__ */ jsx66("path", { fill: "#D97706", d: "M120 96v26l20 11v-26z" }),
  /* @__PURE__ */ jsx66("path", { fill: "#B45309", d: "M160 96v26l-20 11v-26z" }),
  /* @__PURE__ */ jsx66("circle", { cx: 164, cy: 128, r: 12, fill: "#F8FAFC", stroke: "#64748B", strokeWidth: 3 }),
  /* @__PURE__ */ jsx66("path", { stroke: "#64748B", strokeLinecap: "round", strokeWidth: 3, d: "m173 137 10 10" }),
  /* @__PURE__ */ jsx66("path", { fill: "url(#a)", d: "m186 34 2.8 6.8 6.8 2.8-6.8 2.8-2.8 6.8-2.8-6.8-6.8-2.8 6.8-2.8z" }),
  /* @__PURE__ */ jsx66("circle", { cx: 48, cy: 134, r: 5, fill: "#93C5FD" }),
  /* @__PURE__ */ jsx66("circle", { cx: 198, cy: 82, r: 4, fill: "#F9A8D4" })
] });
var EmptyState = forwardRef66(
  function EmptyState2(props, ref) {
    return /* @__PURE__ */ jsx66(ZagIllustrationBase, { ref, viewBox: "0 0 240 180", ...props, children: EMPTYSTATE_ART });
  }
);
export {
  AnimatedArrowDownIcon,
  AnimatedArrowLeftIcon,
  AnimatedArrowRightIcon,
  AnimatedArrowsDownUpIcon,
  AnimatedBellIcon,
  AnimatedBookOpenIcon,
  AnimatedCalendarBlankIcon,
  AnimatedCaretDownIcon,
  AnimatedCaretLeftIcon,
  AnimatedCaretRightIcon,
  AnimatedCaretUpDownIcon,
  AnimatedCaretUpIcon,
  AnimatedChartPieIcon,
  AnimatedChatCircleTextIcon,
  AnimatedCheckCircleIcon,
  AnimatedCheckIcon,
  AnimatedClockIcon,
  AnimatedCloudArrowUpIcon,
  AnimatedCopyIcon,
  AnimatedCornersOutIcon,
  AnimatedCpuIcon,
  AnimatedCurrencyDollarIcon,
  AnimatedDeviceMobileIcon,
  AnimatedDotsThreeIcon,
  AnimatedDotsThreeVerticalIcon,
  AnimatedExcludeIcon,
  AnimatedFileCodeIcon,
  AnimatedFileTextIcon,
  AnimatedFolderIcon,
  AnimatedFolderOpenIcon,
  AnimatedFrameCornersIcon,
  AnimatedGearIcon,
  AnimatedGlobeIcon,
  AnimatedGoogleLogoIcon,
  AnimatedHeartIcon,
  AnimatedHomeIcon,
  AnimatedInfoIcon,
  AnimatedLightningIcon,
  AnimatedLogoIcon,
  AnimatedMagnifyingGlassIcon,
  AnimatedMapTrifoldIcon,
  AnimatedMinusIcon,
  AnimatedMonitorIcon,
  AnimatedMoonIcon,
  AnimatedNavigationArrowIcon,
  AnimatedPlusIcon,
  AnimatedRobotIcon,
  AnimatedShareIcon,
  AnimatedShieldCheckIcon,
  AnimatedSidebarIcon,
  AnimatedSignOutIcon,
  AnimatedStarIcon,
  AnimatedSunIcon,
  AnimatedTextAUnderlineIcon,
  AnimatedTextAlignLeftIcon,
  AnimatedTextBIcon,
  AnimatedTextItalicIcon,
  AnimatedTrashIcon,
  AnimatedUserIcon,
  AnimatedWarningIcon,
  AnimatedXCircleIcon,
  AnimatedXIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsDownUpIcon,
  BellIcon,
  BookOpenIcon,
  CalendarBlankIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpDownIcon,
  CaretUpIcon,
  ChartPieIcon,
  ChatCircleTextIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  CloudArrowUpIcon,
  CopyIcon,
  CornersOutIcon,
  CpuIcon,
  CurrencyDollarIcon,
  DEFAULT_ANIMATION_VARIANTS,
  DEFAULT_PATH_TRANSITION,
  DeviceMobileIcon,
  DotsThreeIcon,
  DotsThreeVerticalIcon,
  EmptyState,
  ExcludeIcon,
  FileCodeIcon,
  FileTextIcon,
  FolderIcon,
  FolderOpenIcon,
  FrameCornersIcon,
  GearIcon,
  GlobeIcon,
  GoogleLogoIcon,
  HEART_ANIMATION_VARIANTS,
  HOME_ANIMATION_VARIANTS,
  HOME_DEFAULT_TRANSITION,
  HOME_PATH_VARIANTS,
  HeartIcon,
  HomeIcon,
  ICON_ANIMATION_VARIANTS,
  InfoIcon,
  LightningIcon,
  LogoIcon,
  MagnifyingGlassIcon,
  MapTrifoldIcon,
  MinusIcon,
  MonitorIcon,
  MoonIcon,
  NavigationArrowIcon,
  PATH_DRAW_VARIANTS,
  PlusIcon,
  RobotIcon,
  ShareIcon,
  ShieldCheckIcon,
  SidebarIcon,
  SignOutIcon,
  StarIcon,
  SunIcon,
  TextAUnderlineIcon,
  TextAlignLeftIcon,
  TextBIcon,
  TextItalicIcon,
  TrashIcon,
  UserIcon,
  WarningIcon,
  XCircleIcon,
  XIcon,
  ZagAnimatedIconContainer,
  ZagIconBase,
  ZagIllustrationBase,
  getIconAnimationVariants,
  useAnimatedIconLifecycle
};
//# sourceMappingURL=index.js.map