import * as type_fest_source_partial_deep from 'type-fest/source/partial-deep';
import { MantineTheme } from '@mantine/core';
import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const theme: type_fest_source_partial_deep.PartialObjectDeep<MantineTheme, {
    recurseIntoArrays: false;
    allowUndefinedInNonTupleArrays: true;
}>;

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
declare const fonts: {
    readonly heading: {
        readonly family: "var(--font-arvo)";
        readonly weights: {
            readonly regular: 400;
            readonly bold: 700;
        };
        readonly description: "Arvo - Used for all headings (h1-h6). A slab serif font that provides structure and elegance.";
    };
    readonly body: {
        readonly family: "var(--font-libre-baskerville)";
        readonly weights: {
            readonly regular: 400;
            readonly bold: 700;
        };
        readonly styles: {
            readonly normal: "normal";
            readonly italic: "italic";
        };
        readonly description: "Libre Baskerville - Used for body text. A classic serif font that ensures excellent readability.";
    };
};
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
declare const nextFontConfig: {
    arvo: {
        weight: ("400" | "700")[];
        subsets: ("latin")[];
        display: string;
        variable: string;
    };
    libreBaskerville: {
        weight: ("400" | "700")[];
        style: ("normal" | "italic")[];
        subsets: ("latin")[];
        display: string;
        variable: string;
    };
};

/**
 * AppLayout: Provides the basic application shell with header, navbar (optional), and main content area.
 * All pages should be wrapped in this layout component.
 *
 * @param {React.ReactNode} children - The main content of the page.
 * @example
 * export default function MyPage() {
 *   return <AppLayout>Page content goes here</AppLayout>;
 * }
 */
declare function AppLayout({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

export { AppLayout, fonts, nextFontConfig, theme };
