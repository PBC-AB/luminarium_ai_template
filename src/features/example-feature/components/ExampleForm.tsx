'use client';

import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Box, Group, Stack } from '@mantine/core';

// == EXAMPLE COMPONENT ==
// This component demonstrates a simple form using @mantine/form hook
// for state management and validation, along with Mantine input components.
// It is intended as a reference and can be modified or removed.

export function ExampleForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      termsOfService: (value) =>
        value ? null : 'You must accept the terms and conditions',
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form submitted with values:', values);
    alert(`Form submitted:\nEmail: ${values.email}\nTerms Accepted: ${values.termsOfService}`);
    form.reset();
  };

  return (
    <Box 
      component="form" 
      maw={400} 
      onSubmit={form.onSubmit(handleSubmit)}
      p="md"
      bg="surface.2"
      style={{
        borderRadius: 'var(--mantine-radius-md)',
        border: '1px solid var(--mantine-color-default-border)',
      }}
    >
      <Stack>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I accept the terms and conditions"
          key={form.key('termsOfService')}
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" variant="filled" color="deepBlue">
            Submit
          </Button>
        </Group>
      </Stack>
    </Box>
  );
} 