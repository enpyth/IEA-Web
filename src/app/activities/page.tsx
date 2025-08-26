import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Chip,
  Divider,
  Link,
} from '@mui/material';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const activities = [
  {
    city: '墨尔本',
    visits: [],
    images: ['/20250814.jpg'],
    description:
      '2025年8月14日，墨尔本会展中心迎来了一场聚焦中澳合作的盛会——2025澳中博览会盛大开幕。这场汇聚了中澳两国100多家企业和机构的展会中，IEA国际企业家联合会（International Entrepreneurs Alliance）携六家成员企业惊艳登场，成为全场瞩目的焦点。',
    link: '/activities/20250814'
  },
  {
    city: '北京',
    visits: [
      '访问中关村细胞基因治疗产业园',
      '访问A股上市公司振东药业'
    ],
    images: ['/activity1.jpg', '/activity2.jpg'],
    description: '',
    link: ''
  },
  {
    city: '河南',
    visits: [
      '访问安阳陶瓷生产基地',
      '访问A股上市公司翔宇医疗',
      '访问晶森生物科技公司',
      '汤阴县张县长接见IEA代表团'
    ],
    images: ['/activity3.jpg', '/activity4.jpg', '/activity5.jpg', '/activity6.jpg'],
    description: '',
    link: ''
  },
  {
    city: '徐州',
    visits: [
      '访问上市公司徐工机械',
      '访问徐工汉云',
      '访问A股上市公司复星药业',
      '访问徐州前瑞电子',
      '访问徐州东山养老院',
      '访问徐州和信康养'
    ],
    images: ['/activity7.jpg', '/activity8.jpg', '/activity9.jpg', '/activity10.jpg', '/activity11.jpg', '/activity12.jpg'],
    description: '',
    link: ''
  },
  {
    city: '南京',
    visits: [
      '访问理事单位江苏悦心养老集团'
    ],
    images: ['/activity13.jpg'],
    description: '',
    link: ''
  },
  {
    city: '苏州',
    visits: [
      '访问苏州养老产业联合会'
    ],
    images: ['/activity14.jpg'],
    description: '',
    link: ''
  },
  {
    city: '上海',
    visits: [
      '上海侨联主席齐全胜接见IEA代表团'
    ],
    images: ['/activity15.jpg'],
    description: '',
    link: ''
  },
];

export default function Activities() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      
      {/* 页面标题 */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom textAlign="center">
            活动动态
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary">
            了解IEA的最新活动和访问动态
          </Typography>
        </Container>
      </Box>

      {/* 活动概览 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          近期访问活动
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 6 }}>
          我们近期访问了北京、河南、徐州、南京、苏州、上海等地的多家企业和机构，
          与当地政府、企业和机构建立了广泛的合作关系，为推动中澳经贸合作做出了积极贡献。
        </Typography>

        {/* 城市访问列表 */}
        {activities.map((activity, index) => (
          <Box key={activity.city} sx={{ mb: 6 }}>
            <Paper sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Chip 
                  label={activity.city} 
                  color="primary" 
                  size="medium"
                  sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                />
                <Typography variant="h5" component="h3" sx={{ ml: 2 }}>
                  {activity.city}访问活动
                </Typography>
              </Box>
              
              {!!activity.visits?.length && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  访问内容：
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                  {activity.visits.map((visit, visitIndex) => (
                    <Typography 
                      key={visitIndex} 
                      component="li" 
                      variant="body1" 
                      sx={{ mb: 1, fontSize: '1.1rem' }}
                    >
                      {visit}
                    </Typography>
                  ))}
                </Box>
              </Box>
              )}
              {activity.description && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    活动简介：
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.9 }}>
                    {activity.description}
                  </Typography>
                </Box>
              )}

              {activity.link && (
                <Box sx={{ mb: 3 }}>
                  <Link href={activity.link} underline="hover">
                    查看详情
                  </Link>
                </Box>
              )}

              {/* 照片展示 */}
              {!!activity.images?.length && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    活动照片：
                  </Typography>
                  <ImageList cols={3} gap={16}>
                    {activity.images.map((image) => (
                      <ImageListItem key={image}>
                        <Link href={activity.link}>
                        <Image
                          src={image}
                          alt={`${activity.city}访问活动`}
                          width={300}
                          height={200}
                          style={{ 
                            borderRadius: '8px',
                            objectFit: 'cover',
                            width: '100%',
                            height: '200px'
                          }}
                        />
                        </Link>
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              )}
            </Paper>
            
            {index < activities.length - 1 && (
              <Divider sx={{ my: 4 }} />
            )}
          </Box>
        ))}
      </Container>

      {/* 活动统计 */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center">
            活动统计
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6, fontSize: '1.1rem' }}>
            我们的访问活动覆盖了多个重要城市和地区
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Paper sx={{ p: 4, flex: 1, textAlign: 'center' }}>
              <Typography variant="h4" component="div" gutterBottom color="primary">
                6个城市
              </Typography>
              <Typography variant="body1" color="text.secondary">
                北京、河南、徐州、南京、苏州、上海
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 4, flex: 1, textAlign: 'center' }}>
              <Typography variant="h4" component="div" gutterBottom color="primary">
                15+ 家企业
              </Typography>
              <Typography variant="body1" color="text.secondary">
                包括上市公司、科技企业、养老机构等
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 4, flex: 1, textAlign: 'center' }}>
              <Typography variant="h4" component="div" gutterBottom color="primary">
                15张照片
              </Typography>
              <Typography variant="body1" color="text.secondary">
                记录了我们访问活动的精彩瞬间
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* 合作成果 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          合作成果
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6, fontSize: '1.1rem' }}>
          通过这些访问活动，我们建立了多个重要的合作关系
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Paper sx={{ p: 4, flex: 1 }}>
            <Typography variant="h6" gutterBottom color="primary">
              政府合作
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              与汤阴县政府建立了合作关系，获得了政府的大力支持，
              为后续项目落地奠定了良好基础。
            </Typography>
          </Paper>
          
          <Paper sx={{ p: 4, flex: 1 }}>
            <Typography variant="h6" gutterBottom color="primary">
              企业合作
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              与振东药业、翔宇医疗、徐工机械等知名企业建立了合作关系，
              为会员企业提供了更多的发展机会。
            </Typography>
          </Paper>
          
          <Paper sx={{ p: 4, flex: 1 }}>
            <Typography variant="h6" gutterBottom color="primary">
              机构合作
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              与中关村细胞基因治疗产业园、苏州养老产业联合会等机构建立了合作关系，
              拓展了我们的服务网络。
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* 未来计划 */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            未来计划
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
            我们将继续扩大访问范围，与更多城市和企业建立合作关系，
            为会员企业提供更广阔的发展平台。
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
            敬请期待更多精彩活动！
          </Typography>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 