import * as type_fest_source_partial_deep from 'type-fest/source/partial-deep';
import * as _mantine_core from '@mantine/core';
import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const theme: type_fest_source_partial_deep.PartialObjectDeep<_mantine_core.MantineTheme, {
    recurseIntoArrays: false;
    allowUndefinedInNonTupleArrays: true;
}>;

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

export { AppLayout, theme };
