/**
 * Font configuration for the Luminarium design system.
 * These fonts are expected to be loaded by the consuming application using Next.js font optimization.
 * The CSS variables are defined in the application's root layout.
 */
export const fonts = {
  heading: {
    family: 'var(--font-arvo)',
    weights: {
      regular: 400,
      bold: 700,
    },
  },
  body: {
    family: 'var(--font-libre-baskerville)',
    weights: {
      regular: 400,
      bold: 700,
    },
    styles: {
      normal: 'normal',
      italic: 'italic',
    },
  },
} as const;

/**
 * Font configuration for Next.js font optimization.
 * This should be used in the consuming application's font configuration.
 */
export const nextFontConfig = {
  arvo: {
    weight: ['400', '700'] as ('400' | '700')[],
    subsets: ['latin'] as ('latin')[],
    display: 'swap',
    variable: '--font-arvo',
  },
  libreBaskerville: {
    weight: ['400', '700'] as ('400' | '700')[],
    style: ['normal', 'italic'] as ('normal' | 'italic')[],
    subsets: ['latin'] as ('latin')[],
    display: 'swap',
    variable: '--font-libre-baskerville',
  },
} as const; 