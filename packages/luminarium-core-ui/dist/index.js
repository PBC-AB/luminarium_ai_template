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
  AppLayout: () => AppLayout,
  theme: () => theme
});
module.exports = __toCommonJS(index_exports);

// src/theme/theme.ts
var import_core = require("@mantine/core");
var theme = (0, import_core.createTheme)({
  /* Theme customization options */
  // Define primary color (using a default Mantine color or a custom one)
  primaryColor: "blue",
  // Example: using Mantine's blue
  // primaryColor: 'myColor', // Example: using the custom color defined above
  // Define custom colors (optional)
  colors: {
    // Add your custom colors here
    // myColor,
  },
  // Define default font family
  fontFamily: "Verdana, sans-serif"
  // Example: setting a default font
  // Define spacing scale (using Mantine's defaults initially is fine)
  // spacing: { xs: '0.5rem', sm: '0.75rem', md: '1rem', lg: '1.25rem', xl: '1.5rem' },
  // Define border radius scale (using Mantine's defaults initially is fine)
  // radius: { xs: '2px', sm: '4px', md: '8px', lg: '16px', xl: '32px' },
  // Define shadow scale (using Mantine's defaults initially is fine)
  // shadows: { ... },
  // Define heading styles (using Mantine's defaults initially is fine)
  // headings: { fontFamily: 'Roboto, sans-serif', sizes: { ... } },
  // Define breakpoints (using Mantine's defaults initially is fine)
  // breakpoints: { xs: '30em', sm: '48em', md: '64em', lg: '74em', xl: '90em' },
  // Other theme properties...
});

// src/components/AppLayout/AppLayout.tsx
var import_core2 = require("@mantine/core");
var import_hooks = require("@mantine/hooks");
var import_jsx_runtime = require("react/jsx-runtime");
function AppLayout({ children }) {
  const [opened, { toggle }] = (0, import_hooks.useDisclosure)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_core2.AppShell,
    {
      header: { height: 60 },
      navbar: { width: 300, breakpoint: "sm", collapsed: { mobile: !opened } },
      padding: "md",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.AppShell.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core2.Group, { h: "100%", px: "md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Burger, { opened, onClick: toggle, hiddenFrom: "sm", size: "sm" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Text, { children: "Luminarium App" }),
          " "
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core2.AppShell.Navbar, { p: "md", children: [
          "Navbar",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Skeleton, { height: 8, radius: "xl" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Skeleton, { height: 8, mt: 6, radius: "xl" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.Skeleton, { height: 8, mt: 6, width: "70%", radius: "xl" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.AppShell.Main, { children })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppLayout,
  theme
});
