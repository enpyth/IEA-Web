'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PlatformsGrid() {
  const { t } = useLanguage();

  const platforms = [
    {
      title: t('platforms.patent.title'),
      subtitle: t('platforms.patent.subtitle'),
      description: t('platforms.patent.description'),
      image: '/plantform1.jpg',
      href: '/platforms#patent'
    },
    {
      title: t('platforms.health.title'),
      subtitle: t('platforms.health.subtitle'),
      description: t('platforms.health.description'),
      image: '/plantform2.jpg',
      href: '/platforms#health'
    },
    {
      title: t('platforms.investment.title'),
      subtitle: t('platforms.investment.subtitle'),
      description: t('platforms.investment.description'),
      image: '/plantform3-1.jpg',
      href: '/platforms#investment'
    },
    {
      title: t('platforms.trade.title'),
      subtitle: t('platforms.trade.subtitle'),
      description: t('platforms.trade.description'),
      image: '/plantform4.jpg',
      href: '/platforms#trade'
    },
    {
      title: t('platforms.culture.title'),
      subtitle: t('platforms.culture.subtitle'),
      description: t('platforms.culture.description'),
      image: '/plantform5-1.jpg',
      href: '/platforms#culture'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom textAlign="center">
        {t('platforms.title')}
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6, maxWidth: 800, mx: 'auto' }}>
        {t('platforms.subtitle')}
      </Typography>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 4 
      }}>
        {platforms.map((platform, index) => (
          <Card key={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image={platform.image}
              alt={platform.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" component="h3" gutterBottom>
                {platform.title}
              </Typography>
              <Typography variant="subtitle2" color="primary" gutterBottom>
                {platform.subtitle}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                {platform.description}
              </Typography>
              <Button
                component={Link}
                href={platform.href}
                variant="text"
                color="primary"
                sx={{ alignSelf: 'flex-start' }}
              >
                {t('platforms.learnMore')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
} 