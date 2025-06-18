import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navigation />
      
      {/* 页面标题 */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom textAlign="center">
            关于我们
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary">
            开放包容、合作共赢、全球智慧、与时俱进的平台和温馨家园
          </Typography>
        </Container>
      </Box>

      {/* 组织介绍 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          组织介绍
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          IEA创立于澳洲，是一个由全球优秀企业家和各行业精英人士组成的非营利机构。
          我们致力于促进企业间的交流与合作，推动全球经济发展与科技创新，提升企业社会责任和国际化可持续发展。
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          作为连接全球商业精英的平台，IEA汇聚了来自不同行业、不同国家的优秀企业家，
          通过资源共享、经验交流、项目合作等方式，为会员企业提供全方位的支持和服务。
        </Typography>
      </Container>

      {/* 主席致辞 */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
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
              <Typography variant="h3" component="h2" gutterBottom>
                主席致辞
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                IEA是一个开放包容、合作共赢、全球智慧、与时俱进的平台和温馨家园。
                让我们同心逐梦、彼此成就、不畏风浪、共铸辉煌！
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                在这个快速变化的全球化时代，企业面临着前所未有的机遇和挑战。
                IEA致力于为企业家们搭建一个相互学习、共同成长的平台，
                通过我们的五大核心平台，助力企业实现全球化发展目标。
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                我们相信，通过合作与创新，我们可以创造更大的价值，
                为全球经济发展和人类福祉做出积极贡献。
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 使命和愿景 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Paper sx={{ p: 4, flex: 1 }}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              使命
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              促进企业间的交流与合作，推动全球经济发展与科技创新，
              提升企业社会责任和国际化可持续发展。
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              通过我们的平台和服务，为企业家提供全球化发展的机会和资源，
              助力企业实现可持续发展目标。
            </Typography>
          </Paper>
          
          <Paper sx={{ p: 4, flex: 1 }}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              愿景
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              成为全球最具影响力的企业家联盟，连接世界、整合资源，
              为全球经济发展和人类福祉做出积极贡献。
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              打造一个开放包容、合作共赢的全球商业生态系统，
              让每一位企业家都能在这里找到合作伙伴和发展机遇。
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* 全球布局 */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center">
            全球布局
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6, fontSize: '1.1rem' }}>
            总部设在阿德莱德，目前在澳洲、美国、加拿大主要城市均设有分会
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Paper sx={{ p: 4, flex: 1, textAlign: 'center' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                总部 - 阿德莱德
              </Typography>
              <Typography variant="body1" paragraph>
                澳大利亚南澳州首府，IEA全球总部所在地。
                这里汇聚了澳洲顶尖的科研机构和创新企业，
                为IEA的发展提供了强大的科技和人才支撑。
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 4, flex: 1, textAlign: 'center' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                澳洲分会
              </Typography>
              <Typography variant="body1" paragraph>
                在悉尼、墨尔本、布里斯班、珀斯等主要城市设立分会，
                覆盖澳洲全境，为当地企业提供全方位的服务支持。
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 4, flex: 1, textAlign: 'center' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                北美分会
              </Typography>
              <Typography variant="body1" paragraph>
                在美国和加拿大的主要城市设立分会，
                连接北美市场，为会员企业提供国际化发展机会。
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* 核心价值观 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          核心价值观
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mt: 4 }}>
          <Box sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <Typography variant="h6" gutterBottom color="primary">
              开放包容
            </Typography>
            <Typography variant="body2" color="text.secondary">
              欢迎来自不同背景、不同文化的企业家加入，
              创造一个多元化的商业生态系统。
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <Typography variant="h6" gutterBottom color="primary">
              合作共赢
            </Typography>
            <Typography variant="body2" color="text.secondary">
              倡导互利共赢的合作模式，
              让每一位参与者都能从中受益。
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <Typography variant="h6" gutterBottom color="primary">
              全球智慧
            </Typography>
            <Typography variant="body2" color="text.secondary">
              汇聚全球智慧和创新思维，
              为会员企业提供前沿的商业洞察。
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center', p: 3 }}>
            <Typography variant="h6" gutterBottom color="primary">
              与时俱进
            </Typography>
            <Typography variant="body2" color="text.secondary">
              紧跟时代发展潮流，
              不断创新服务模式和平台功能。
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* 行动号召 */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            加入IEA，共创辉煌
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
            无论您是初创企业还是跨国集团，IEA都欢迎您的加入。
            让我们一起携手，在全球化的大潮中乘风破浪，共创美好未来。
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/contact"
            sx={{ 
              backgroundColor: 'white', 
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'grey.100',
              }
            }}
          >
            联系我们
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
} 