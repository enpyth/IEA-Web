import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Milestone20250815() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />

      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
            IEA国际企业家联合会获澳中博览会杰出奖项双项殊荣
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            墨尔本，2025年8月15日
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
            墨尔本，2025年8月15日 澳中博览会迎来第二日的重磅活动——“中澳自贸协定十周年杰出奖项颁奖仪式”在墨尔本会展中心盛大举行。本次颁奖仪式聚焦中澳自由贸易协定（ChAFTA）生效十年来的卓越贡献者，旨在表彰那些在经贸合作、双向投资、文化技术交流等领域取得突出成就的企业与机构。
          </Typography>

          <Box sx={{ my: 3 }}>
            <Image src="/milestone20250815_1.jpg" alt="IEA双奖加冕" width={1200} height={800} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </Box>

          <Typography variant="h5" gutterBottom>
            IEA双奖加冕，彰显十年深耕硕果
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
            作为本次颁奖仪式的亮点之一，国际企业家联合会（IEA）凭借其在中澳经贸合作中的卓越贡献，一举斩获两项十年杰出成就奖。IEA主席孙玲与副秘书长徐琳代表IEA上台领奖，现场掌声雷动。这一殊荣不仅是对IEA推动中澳务实合作的高度认可，而且彰显了其在养老产业、高新科技、葡萄酒贸易及文化创意等领域的桥梁作用。今天的双项获奖进一步印证了IEA“跨领域、深合作”的独特价值。
          </Typography>

          <Typography variant="h5" gutterBottom>
            政商云集，共绘未来蓝图
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
            颁奖仪式吸引了中澳两国政府代表、商界领袖、行业协会及媒体人士的积极参与。多位重量级嘉宾在致辞中强调，中澳自贸协定十年来为两国企业创造了前所未有的机遇，而获奖企业正是这一合作的典范。
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
            博览会组委会表示，此次奖项的设立既是对过去十年成就的总结，更是对未来合作的展望。随着中澳自贸协定进入新十年，双方将在绿色能源、数字经济、医疗健康等新兴领域深化协作，而IEA等机构的引领作用至关重要。
          </Typography>

          <Typography variant="h5" gutterBottom>
            展望新十年：创新驱动，合作升级
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
            IEA主席孙玲女士在获奖后表示：“这一荣誉属于所有为中澳合作倾注心血的企业与个人。未来，IEA将继续发挥平台优势，推动更多创新项目落地，特别是在智慧养老、医疗健康、跨境电商、高新科技、文化交流、国际贸易等领域，助力双边关系迈向更高水平。”
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
            此外，前维州上议院议长、本届澳中博览会执行主席布鲁斯·阿金森（Bruce Atkinson）欣然接受IEA孙玲主席的邀请，成为IEA理事。这一重要合作将进一步增强IEA在中澳经贸关系中的影响力，为未来项目落地和资源整合提供了坚实基础。
          </Typography>

          <Box sx={{ my: 3 }}>
            <Image src="/milestone20250815_2.jpg" alt="颁奖现场" width={1200} height={800} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}


