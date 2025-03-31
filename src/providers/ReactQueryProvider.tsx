'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * ReactQueryProvider: Sets up the QueryClient and provides it to the application.
 *
 * @param {React.ReactNode} children - The application components to be wrapped.
 */
export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  // Use useState to ensure the QueryClient is only created once per component instance
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Default query options can be set here, e.g.:
            // staleTime: 60 * 1000, // 1 minute
            // refetchOnWindowFocus: false, // Prevent refetching on window focus
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
} 