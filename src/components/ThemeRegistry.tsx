'use client';

import * as React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function createEmotionCache() {
  const cache = createCache({ key: 'mui', prepend: true });
  // Enable emotion@11 compat mode which MUI relies on
  // for correct insertion order during SSR
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  cache.compat = true;
  return cache;
}

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [emotionCache] = React.useState(() => createEmotionCache());

  useServerInsertedHTML(() => {
    // Flush Emotion CSS that was inserted during render
    const insertedKeys = Object.keys(emotionCache.inserted);
    const insertedHTML = Object.values(emotionCache.inserted).join(' ');
    if (insertedKeys.length === 0 || insertedHTML.length === 0) {
      return null;
    }
    return (
      <style
        data-emotion={`${emotionCache.key} ${insertedKeys.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: insertedHTML }}
      />
    );
  });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}