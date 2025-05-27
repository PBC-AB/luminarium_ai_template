import * as type_fest_source_partial_deep from 'type-fest/source/partial-deep';
import * as _mantine_core from '@mantine/core';
import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const theme: type_fest_source_partial_deep.PartialObjectDeep<_mantine_core.MantineTheme, {
    recurseIntoArrays: false;
    allowUndefinedInNonTupleArrays: true;
}>;

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
    };
};
/**
 * Font configuration for Next.js font optimization.
 * This should be used in the consuming application's font configuration.
 */
declare const nextFontConfig: {
    readonly arvo: {
        readonly weight: ("400" | "700")[];
        readonly subsets: ("latin")[];
        readonly display: "swap";
        readonly variable: "--font-arvo";
    };
    readonly libreBaskerville: {
        readonly weight: ("400" | "700")[];
        readonly style: ("normal" | "italic")[];
        readonly subsets: ("latin")[];
        readonly display: "swap";
        readonly variable: "--font-libre-baskerville";
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
