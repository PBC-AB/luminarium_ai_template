'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

// Example custom color (replace or extend as needed)
// You can generate palettes using tools like https://mantine.dev/colors-generator/
const myColor: MantineColorsTuple = [
  '#eef3ff',
  '#dce4f5',
  '#b9c7e2',
  '#94a8d0',
  '#748dc1',
  '#5f7cb8',
  '#5474b4',
  '#4563a0',
  '#3a5890',
  '#2f4b81'
];

// Define the theme
export const theme = createTheme({
  /* Theme customization options */
  // Define primary color (using a default Mantine color or a custom one)
  primaryColor: 'blue', // Example: using Mantine's blue
  // primaryColor: 'myColor', // Example: using the custom color defined above

  // Define custom colors (optional)
  colors: {
    // Add your custom colors here
    // myColor,
  },

  // Define default font family
  fontFamily: 'Verdana, sans-serif', // Example: setting a default font

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