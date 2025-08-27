'use client';

import React from 'react';
import { Box, Container, Typography, Paper, Link, Divider } from '@mui/material';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { getMilestonesByLanguage } from '@/data/milestones';

export default function Milestones() {
  const { language } = useLanguage();
  const milestones = getMilestonesByLanguage(language);
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />

      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom textAlign="center">
            重要里程碑
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary">
            记录IEA发展历程中的高光时刻
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper sx={{ p: 4 }}>
          {milestones.map((m, idx) => (
            <Box key={m.link} sx={{ mb: idx < milestones.length - 1 ? 4 : 0 }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                <Box sx={{ width: { xs: '100%', md: 360 }, flexShrink: 0 }}>
                  <Link href={m.link} underline="none">
                    <Image
                      src={m.cover}
                      alt={m.title}
                      width={720}
                      height={480}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </Link>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Link href={m.link} underline="hover" color="inherit">
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      {m.title}
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {m.date}
                  </Typography>
                  {m.description && (
                    <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.9 }}>
                      {m.description}
                    </Typography>
                  )}
                </Box>
              </Box>
              {idx < milestones.length - 1 && <Divider sx={{ mt: 4 }} />}
            </Box>
          ))}
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}


