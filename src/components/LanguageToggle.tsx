'use client';

import React from 'react';
import {
  Button,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageToggle = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <Button
      onClick={handleLanguageToggle}
      startIcon={<LanguageIcon />}
      sx={{
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
        },
      }}
    >
      {language === 'zh' ? 'EN' : '中文'}
    </Button>
  );
} 