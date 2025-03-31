'use client';

import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

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
export function AppLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  // TODO: Replace Skeleton placeholders with actual Header/Navbar content
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Luminarium App</Text> {/* TODO: Make dynamic or configurable */}
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        Navbar
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
        {/* TODO: Add navigation links here */}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
} 