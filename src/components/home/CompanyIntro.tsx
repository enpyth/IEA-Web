'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CompanyIntro() {
  const { t } = useLanguage();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom textAlign="center">
        {t('company.title')}
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
        {t('company.description')}
      </Typography>
    </Container>
  );
} 