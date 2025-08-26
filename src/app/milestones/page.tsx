import React from 'react';
import { Box, Container, Typography, Paper, Link, Divider } from '@mui/material';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

const milestones = [
    {
        date: '2025-08-15',
        title: 'IEA国际企业家联合会获澳中博览会杰出奖项双项殊荣',
        description: '墨尔本，2025年8月15日 澳中博览会迎来第二日的重磅活动——“中澳自贸协定十周年杰出奖项颁奖仪式”在墨尔本会展中心盛大举行。本次颁奖仪式聚焦中澳自由贸易协定（ChAFTA）生效十年来的卓越贡献者，旨在表彰那些在经贸合作、双向投资、文化技术交流等领域取得突出成就的企业与机构。',
        cover: '/milestone20250815_1.jpg',
        link: '/milestones/20250815',
    },
];

export default function Milestones() {
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
                  <Box sx={{ mt: 2 }}>
                    <Link href={m.link} underline="hover">
                      查看详情 →
                    </Link>
                  </Box>
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


