'use client';

import React from 'react';
import { Container, Title, Text, Paper, Stack, Group, Button, Divider } from '@mantine/core';
// import { AppLayout } from '@luminarium/core-ui'; // Old import
import { AppLayout } from '@PBC-AB/luminarium-core-ui'; // Updated import with correct scope
import { ExampleForm } from './ExampleForm'; // Import the example form

// == EXAMPLE COMPONENT ==
// This component demonstrates a basic page structure within the AppLayout,
// using common Mantine components and adhering to theme standards.
// It is intended as a reference and can be modified or removed.

export function ExamplePage() {
  return (
    <AppLayout>
      <Container size="md"> { /* Constrain content width */ }
        <Paper shadow="xs" p="lg" radius="md" withBorder>
          <Stack gap="lg"> { /* Vertical layout with standard spacing */ }
            <Title order={1}>Example Page</Title>
            <Text>
              This is a sample page demonstrating the basic layout and components.
              It uses the `AppLayout` for the overall structure and Mantine components
              like `Container`, `Paper`, `Stack`, `Group`, and `Button`.
            </Text>
            <Text color="blue.6">
              Styling should use theme tokens whenever possible (e.g., via color props).
            </Text>
            <Group> { /* Horizontal layout */ }
              <Button variant="filled">Primary Action</Button>
              <Button variant="outline">Secondary Action</Button>
            </Group>

            {/* Add the example form here */}
            <Divider my="lg" label="Example Form using @mantine/form" labelPosition="center" />
            <ExampleForm />

          </Stack>
        </Paper>
      </Container>
    </AppLayout>
  );
} 