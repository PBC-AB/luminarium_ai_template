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
  fonts: () => fonts,
  nextFontConfig: () => nextFontConfig,
  theme: () => theme
});
module.exports = __toCommonJS(index_exports);

// src/theme/theme.ts
var import_core = require("@mantine/core");
var agedGold = [
  "#F3E7D5",
  // 0 - Lightest shade
  "#E6D5B8",
  "#D9C39B",
  "#CCB17E",
  "#BF9F61",
  "#C29044",
  // 5 - Base color
  "#B27D3D",
  "#A26A36",
  "#92572F",
  "#824428"
  // 9 - Darkest shade
];
var deepBlue = [
  "#E6ECF2",
  "#CCD9E5",
  "#B3C6D8",
  "#99B3CB",
  "#80A0BE",
  "#25496C",
  // 5 - Base color
  "#21405D",
  "#1C374E",
  "#172E3F",
  "#122530"
];
var darkCopper = [
  "#F3E7D5",
  "#E6D5B8",
  "#D9C39B",
  "#CCB17E",
  "#BF9F61",
  "#B36228",
  // 5 - Base color
  "#A25824",
  "#914E20",
  "#80441C",
  "#6F3A18"
];
var ivory = [
  "#FFFFFF",
  "#FDFBF8",
  "#FAF7F1",
  "#F7F3EA",
  "#F5EFE3",
  "#F3E7D5",
  // 5 - Base color
  "#DBD0C0",
  "#C3B9AB",
  "#ABA296",
  "#938B81"
];
var darkBrown = [
  "#4A3A2A",
  "#3F3123",
  "#34281C",
  "#291F15",
  "#1E160E",
  "#24180A",
  // 5 - Base color
  "#1A1207",
  "#100C04",
  "#060401",
  "#000000"
];
var theme = (0, import_core.createTheme)({
  primaryColor: "deepBlue",
  colors: {
    agedGold,
    deepBlue,
    darkCopper,
    ivory,
    darkBrown,
    // Virtual colors for automatic light/dark mode switching
    background: (0, import_core.virtualColor)({
      name: "background",
      light: "ivory",
      dark: "darkBrown"
    }),
    text: (0, import_core.virtualColor)({
      name: "text",
      light: "darkBrown",
      dark: "ivory"
    }),
    surface: (0, import_core.virtualColor)({
      name: "surface",
      light: "ivory",
      dark: "darkBrown"
    })
  },
  // Typography
  fontFamily: "var(--font-libre-baskerville), serif",
  headings: {
    fontFamily: "var(--font-arvo), serif",
    sizes: {
      h1: { fontSize: "2.5rem", lineHeight: "1.2" },
      h2: { fontSize: "2rem", lineHeight: "1.3" },
      h3: { fontSize: "1.75rem", lineHeight: "1.4" },
      h4: { fontSize: "1.5rem", lineHeight: "1.4" },
      h5: { fontSize: "1.25rem", lineHeight: "1.4" },
      h6: { fontSize: "1rem", lineHeight: "1.4" }
    }
  },
  // Spacing scale
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  // Border radius scale
  radius: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem"
  },
  // Shadows
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)"
  },
  // Breakpoints
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em"
  },
  // Default component props and styles
  components: {
    Button: {
      defaultProps: {
        radius: "md"
      },
      styles: (theme2) => ({
        root: {
          fontFamily: theme2.headings.fontFamily,
          fontWeight: 500
        }
      })
    },
    Card: {
      defaultProps: {
        radius: "md",
        shadow: "sm"
      }
    },
    Paper: {
      defaultProps: {
        radius: "md",
        shadow: "xs"
      }
    },
    Title: {
      styles: (theme2) => ({
        root: {
          fontFamily: theme2.headings.fontFamily
        }
      })
    }
  }
});

// src/theme/fonts.ts
var fonts = {
  heading: {
    family: "var(--font-arvo)",
    weights: {
      regular: 400,
      bold: 700
    },
    description: "Arvo - Used for all headings (h1-h6). A slab serif font that provides structure and elegance."
  },
  body: {
    family: "var(--font-libre-baskerville)",
    weights: {
      regular: 400,
      bold: 700
    },
    styles: {
      normal: "normal",
      italic: "italic"
    },
    description: "Libre Baskerville - Used for body text. A classic serif font that ensures excellent readability."
  }
};
var nextFontConfig = {
  arvo: {
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-arvo"
  },
  libreBaskerville: {
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-libre-baskerville"
  }
};

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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.AppShell.Header, { bg: "deepBlue.5", c: "ivory.5", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core2.Group, { h: "100%", px: "md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_core2.Burger,
            {
              opened,
              onClick: toggle,
              hiddenFrom: "sm",
              size: "sm",
              color: "var(--mantine-color-ivory-5)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_core2.Text,
            {
              size: "lg",
              fw: 600,
              ff: "var(--font-arvo), serif",
              children: "Luminarium"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core2.AppShell.Navbar, { bg: "surface.3", p: "md", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core2.Stack, { gap: "xs", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_core2.Text,
              {
                size: "sm",
                fw: 600,
                mb: "sm",
                c: "text.5",
                ff: "var(--font-arvo), serif",
                children: "Navigation"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_core2.NavLink,
              {
                label: "Dashboard",
                active: true,
                color: "deepBlue",
                variant: "light"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_core2.NavLink,
              {
                label: "Projects",
                color: "text",
                variant: "subtle"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_core2.NavLink,
              {
                label: "Analytics",
                color: "text",
                variant: "subtle"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_core2.NavLink,
              {
                label: "Settings",
                color: "text",
                variant: "subtle"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_core2.Text,
            {
              size: "xs",
              c: "dimmed",
              mt: "auto",
              pt: "md",
              style: {
                borderTop: "1px solid var(--mantine-color-default-border)"
              },
              children: "Phase 2: Navigation styling complete"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.AppShell.Main, { bg: "background.5", children })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppLayout,
  fonts,
  nextFontConfig,
  theme
});
