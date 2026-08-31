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
  EmptyState: () => EmptyState,
  HeartIcon: () => HeartIcon,
  HomeIcon: () => HomeIcon,
  ZagIconBase: () => ZagIconBase,
  ZagIllustrationBase: () => ZagIllustrationBase
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

// src/icons/heart.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var HEART_GLYPHS = {
  outline: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" }) }),
  filled: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { fill: "currentColor", d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" }) })
};
var HeartIcon = (0, import_react3.forwardRef)(
  function HeartIcon2(props, ref) {
    const { weight = "outline", ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ZagIconBase, { ref, viewBox: "0 0 24 24", "data-weight": weight, ...rest, children: HEART_GLYPHS[weight] });
  }
);

// src/icons/home.tsx
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var HOME_GLYPHS = {
  outline: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 10.565c0-.444.192-.866.527-1.159l7.5-6.55a1.45 1.45 0 0 1 1.946 0l7.5 6.55c.335.293.527.715.527 1.16V19.5a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-4.1a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5.5v5.1a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z" }) }),
  filled: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "M3 10.565c0-.444.192-.866.527-1.159l7.5-6.55a1.45 1.45 0 0 1 1.946 0l7.5 6.55c.335.293.527.715.527 1.16V19.5a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-4.1a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5.5v5.1a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z" }) })
};
var HomeIcon = (0, import_react4.forwardRef)(
  function HomeIcon2(props, ref) {
    const { weight = "outline", ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ZagIconBase, { ref, viewBox: "0 0 24 24", "data-weight": weight, ...rest, children: HOME_GLYPHS[weight] });
  }
);

// src/illustrations/empty-state.tsx
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var EMPTYSTATE_ART = /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("linearGradient", { id: "a", x1: 52, x2: 196, y1: 28, y2: 156, gradientUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("stop", { stopColor: "#818CF8" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("stop", { offset: 1, stopColor: "#C084FC" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: 120, cy: 92, r: 72, fill: "url(#a)", opacity: 0.18 }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { width: 124, height: 96, x: 58, y: 42, fill: "#FFF", stroke: "#E2E8F0", strokeWidth: 2, rx: 12 }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { stroke: "#E2E8F0", strokeWidth: 2, d: "M58 66h124" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: 72, cy: 54, r: 4, fill: "#FCA5A5" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: 86, cy: 54, r: 4, fill: "#FCD34D" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: 100, cy: 54, r: 4, fill: "#86EFAC" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { width: 52, height: 6, x: 74, y: 80, fill: "#CBD5E1", rx: 3 }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { width: 36, height: 6, x: 74, y: 94, fill: "#E2E8F0", rx: 3 }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { fill: "#F59E0B", d: "m120 96 20-11 20 11-20 11z" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { fill: "#D97706", d: "M120 96v26l20 11v-26z" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { fill: "#B45309", d: "M160 96v26l-20 11v-26z" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: 164, cy: 128, r: 12, fill: "#F8FAFC", stroke: "#64748B", strokeWidth: 3 }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { stroke: "#64748B", strokeLinecap: "round", strokeWidth: 3, d: "m173 137 10 10" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { fill: "url(#a)", d: "m186 34 2.8 6.8 6.8 2.8-6.8 2.8-2.8 6.8-2.8-6.8-6.8-2.8 6.8-2.8z" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: 48, cy: 134, r: 5, fill: "#93C5FD" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: 198, cy: 82, r: 4, fill: "#F9A8D4" })
] });
var EmptyState = (0, import_react5.forwardRef)(
  function EmptyState2(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ZagIllustrationBase, { ref, viewBox: "0 0 240 180", ...props, children: EMPTYSTATE_ART });
  }
);
//# sourceMappingURL=index.cjs.map