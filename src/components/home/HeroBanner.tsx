import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <Box sx={{ position: 'relative', height: '70vh', minHeight: 500 }}>
      <Image
        src="/home.jpg"
        alt="IEA Home Banner"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              IEA 国际企业家联合会
            </Typography>
            <Typography variant="h5" paragraph sx={{ maxWidth: 800, mx: 'auto' }}>
              开放包容、合作共赢、全球智慧、与时俱进的平台和温馨家园
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/about"
              sx={{ mt: 2, px: 4, py: 1.5 }}
            >
              了解更多
            </Button>
          </Box>
        </Container> */}
      </Box>
    </Box>
  );
} 