import { Arvo, Libre_Baskerville } from 'next/font/google';

/**
 * Font configuration for Next.js font optimization.
 * These values must be literals for Next.js build-time analysis.
 * See @PBC-AB/luminarium-core-ui for the design system's font configuration.
 * 
 * CSS Variables:
 * - Heading font: var(--font-arvo)
 * - Body font: var(--font-libre-baskerville)
 */
export const arvo = Arvo({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arvo',
});

export const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-baskerville',
}); 