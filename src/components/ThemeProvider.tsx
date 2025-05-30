'use client';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@PBC-AB/luminarium-core-ui';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider 
        theme={theme}
        defaultColorScheme="light"
      >
        {children}
      </MantineProvider>
    </>
  );
} 