'use client';

import { AppShell, Burger, Group, Text, Stack, NavLink } from '@mantine/core';
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

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header bg="deepBlue.5" c="ivory.5">
        <Group h="100%" px="md">
          <Burger 
            opened={opened} 
            onClick={toggle} 
            hiddenFrom="sm" 
            size="sm"
            color="var(--mantine-color-ivory-5)"
          />
          <Text 
            size="lg" 
            fw={600}
            ff="var(--font-arvo), serif"
          >
            Luminarium
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar bg="surface.3" p="md">
        <Stack gap="xs">
          <Text 
            size="sm" 
            fw={600}
            mb="sm"
            c="text.5"
            ff="var(--font-arvo), serif"
          >
            Navigation
          </Text>
          
          <NavLink
            label="Dashboard"
            active
            color="deepBlue"
            variant="light"
          />
          
          <NavLink
            label="Projects"
            color="text"
            variant="subtle"
          />
          
          <NavLink
            label="Analytics"
            color="text"
            variant="subtle"
          />
          
          <NavLink
            label="Settings"
            color="text"
            variant="subtle"
          />
        </Stack>
        
        <Text 
          size="xs" 
          c="dimmed" 
          mt="auto"
          pt="md"
          style={{ 
            borderTop: '1px solid var(--mantine-color-default-border)',
          }}
        >
          Phase 2: Navigation styling complete
        </Text>
      </AppShell.Navbar>

      <AppShell.Main bg="background.5">
        {children}
      </AppShell.Main>
    </AppShell>
  );
} 