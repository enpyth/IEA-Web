'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LatestNews() {
  const { t } = useLanguage();

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          {t('news.title')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6 }}>
          {t('news.subtitle')}
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4 
        }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              {t('news.activities.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('news.activities.description')}
            </Typography>
            <Button
              component={Link}
              href="/activities"
              variant="outlined"
              size="small"
            >
              {t('news.activities.button')}
            </Button>
          </Paper>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              {t('news.platforms.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('news.platforms.description')}
            </Typography>
            <Button
              component={Link}
              href="/platforms"
              variant="outlined"
              size="small"
            >
              {t('news.platforms.button')}
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
} 