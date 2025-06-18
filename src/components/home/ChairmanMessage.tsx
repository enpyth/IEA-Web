'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ChairmanMessage() {
  const { t } = useLanguage();

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 6, 
          alignItems: 'center' 
        }}>
          <Box sx={{ flex: { xs: 'none', md: '0 0 300px' }, textAlign: 'center' }}>
            <Image
              src="/chair.jpg"
              alt="Chairman"
              width={300}
              height={400}
              style={{ borderRadius: '12px', objectFit: 'cover' }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {t('chairman.title')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              {t('chairman.message')}
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              href="/about"
              sx={{ mt: 2 }}
            >
              {t('chairman.button')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 