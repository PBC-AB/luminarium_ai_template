// src/theme/theme.ts
import { createTheme, virtualColor } from "@mantine/core";
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
var theme = createTheme({
  primaryColor: "deepBlue",
  colors: {
    agedGold,
    deepBlue,
    darkCopper,
    ivory,
    darkBrown,
    // Virtual colors for automatic light/dark mode switching
    background: virtualColor({
      name: "background",
      light: "ivory",
      dark: "darkBrown"
    }),
    text: virtualColor({
      name: "text",
      light: "darkBrown",
      dark: "ivory"
    }),
    surface: virtualColor({
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
import { AppShell, Burger, Group, Text, Stack, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { jsx, jsxs } from "react/jsx-runtime";
function AppLayout({ children }) {
  const [opened, { toggle }] = useDisclosure();
  return /* @__PURE__ */ jsxs(
    AppShell,
    {
      header: { height: 60 },
      navbar: { width: 300, breakpoint: "sm", collapsed: { mobile: !opened } },
      padding: "md",
      children: [
        /* @__PURE__ */ jsx(AppShell.Header, { bg: "deepBlue.5", c: "ivory.5", children: /* @__PURE__ */ jsxs(Group, { h: "100%", px: "md", children: [
          /* @__PURE__ */ jsx(
            Burger,
            {
              opened,
              onClick: toggle,
              hiddenFrom: "sm",
              size: "sm",
              color: "var(--mantine-color-ivory-5)"
            }
          ),
          /* @__PURE__ */ jsx(
            Text,
            {
              size: "lg",
              fw: 600,
              ff: "var(--font-arvo), serif",
              children: "Luminarium"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(AppShell.Navbar, { bg: "surface.3", p: "md", children: [
          /* @__PURE__ */ jsxs(Stack, { gap: "xs", children: [
            /* @__PURE__ */ jsx(
              Text,
              {
                size: "sm",
                fw: 600,
                mb: "sm",
                c: "text.5",
                ff: "var(--font-arvo), serif",
                children: "Navigation"
              }
            ),
            /* @__PURE__ */ jsx(
              NavLink,
              {
                label: "Dashboard",
                active: true,
                color: "deepBlue",
                variant: "light"
              }
            ),
            /* @__PURE__ */ jsx(
              NavLink,
              {
                label: "Projects",
                color: "text",
                variant: "subtle"
              }
            ),
            /* @__PURE__ */ jsx(
              NavLink,
              {
                label: "Analytics",
                color: "text",
                variant: "subtle"
              }
            ),
            /* @__PURE__ */ jsx(
              NavLink,
              {
                label: "Settings",
                color: "text",
                variant: "subtle"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Text,
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
        /* @__PURE__ */ jsx(AppShell.Main, { bg: "background.5", children })
      ]
    }
  );
}
export {
  AppLayout,
  fonts,
  nextFontConfig,
  theme
};
