'use client';

import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { getMilestonesByLanguage } from '@/data/milestones';

export default function MilestonesIntro() {
  const { t, language } = useLanguage();
  const milestones = getMilestonesByLanguage(language);
  const firstMilestone = milestones[0];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
          {t('home.milestones.title')}
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6 }}>
          {t('home.milestones.description')}
        </Typography>

        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            <Box sx={{ width: { xs: '100%', md: 360 }, flexShrink: 0 }}>
              <Link href={firstMilestone.link}>
                <Image
                  src={firstMilestone.cover}
                  alt={firstMilestone.title}
                  width={720}
                  height={480}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </Link>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Link href={firstMilestone.link}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {firstMilestone.title}
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {firstMilestone.date}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.9 }}>
                {firstMilestone.description}
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                <Button component={Link} href="/milestones" variant="contained" size="small">
                  {t('home.milestones.button')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}


