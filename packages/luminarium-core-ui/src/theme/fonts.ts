/**
 * Luminarium Design System - Font Configuration
 * 
 * This is the authoritative source for all font-related design tokens in the Luminarium design system.
 * 
 * IMPORTANT: Due to Next.js build-time requirements, font loading must be implemented with literal values
 * in the consuming application. However, this configuration serves as the single source of truth for:
 * - Font family names and CSS variables
 * - Available weights and styles
 * - Usage guidelines and specifications
 * 
 * When implementing fonts in a Next.js application, reference this configuration but use literal values
 * in your font loader configuration.
 */

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
    description: 'Arvo - Used for all headings (h1-h6). A slab serif font that provides structure and elegance.',
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
    description: 'Libre Baskerville - Used for body text. A classic serif font that ensures excellent readability.',
  },
} as const;

/**
 * Reference configuration for Next.js font optimization.
 * 
 * USAGE: Copy these literal values into your Next.js font configuration.
 * Do NOT import these values directly - Next.js requires literal values for build-time analysis.
 * 
 * Example implementation in your app/fonts.ts:
 * 
 * ```typescript
 * import { Arvo, Libre_Baskerville } from 'next/font/google';
 * 
 * export const arvo = Arvo({
 *   weight: ['400', '700'],
 *   subsets: ['latin'],
 *   display: 'swap',
 *   variable: '--font-arvo',
 * });
 * 
 * export const libreBaskerville = Libre_Baskerville({
 *   weight: ['400', '700'],
 *   style: ['normal', 'italic'],
 *   subsets: ['latin'],
 *   display: 'swap',
 *   variable: '--font-libre-baskerville',
 * });
 * ```
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
}; 