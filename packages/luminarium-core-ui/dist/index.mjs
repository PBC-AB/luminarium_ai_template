// src/theme/theme.ts
import { createTheme } from "@mantine/core";
var theme = createTheme({
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
import { AppShell, Burger, Group, Skeleton, Text } from "@mantine/core";
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
        /* @__PURE__ */ jsx(AppShell.Header, { children: /* @__PURE__ */ jsxs(Group, { h: "100%", px: "md", children: [
          /* @__PURE__ */ jsx(Burger, { opened, onClick: toggle, hiddenFrom: "sm", size: "sm" }),
          /* @__PURE__ */ jsx(Text, { children: "Luminarium App" }),
          " "
        ] }) }),
        /* @__PURE__ */ jsxs(AppShell.Navbar, { p: "md", children: [
          "Navbar",
          /* @__PURE__ */ jsx(Skeleton, { height: 8, radius: "xl" }),
          /* @__PURE__ */ jsx(Skeleton, { height: 8, mt: 6, radius: "xl" }),
          /* @__PURE__ */ jsx(Skeleton, { height: 8, mt: 6, width: "70%", radius: "xl" })
        ] }),
        /* @__PURE__ */ jsx(AppShell.Main, { children })
      ]
    }
  );
}
export {
  AppLayout,
  theme
};
