import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const platforms = [
  {
    id: 'patent',
    title: '高科技专利平台',
    subtitle: '澳大利亚知识产权交易所',
    description: 'IEA创办的唯一且首家澳大利亚知识产权交易所（IP AUSTRLIA EXCHANGE)，简称IPEX，是促进知识产权的交易和管理的平台。提供知识产权的买卖，许可，评估，融资和管理等服务。目前和澳洲42所大学建立专利合作。',
    image: '/plantform1.jpg',
    features: [
      '知识产权买卖服务',
      '专利许可管理',
      '知识产权评估',
      '专利融资服务',
      '与澳洲42所大学合作',
      '专业知识产权管理'
    ]
  },
  {
    id: 'health',
    title: '大健康养老平台',
    subtitle: '澳中银发经济合作标杆',
    description: '致力于推动澳中两国在银发经济领域的深度合作，为中国首次引入澳洲养老护理证书课程，首创南澳第一家华人养老机构，参与创建南京中澳银发经济智慧园区。',
    image: '/plantform2.jpg',
    features: [
      '澳洲方面：',
      '• 为中国首次引入澳洲养老护理证书课程',
      '• 首创南澳第一家华人养老机构',
      '• 首创南澳第一家华人老年用品及残疾人用品展厅',
      '',
      '中国方面：',
      '• 参与创建南京中澳银发经济智慧园区',
      '• 筹办苏州中澳老年用品国际博览会',
      '• 筹办中澳健康养老论坛'
    ]
  },
  {
    id: 'investment',
    title: '第三方投资平台',
    subtitle: '澳中资本联盟',
    description: 'IEA理事成员悉尼证券交易所拥有约2,000家上市公司，上市公司涵盖多个行业，包括矿业、金融、科技、医疗保健等。IEA理事成员优势资本，是中国头部资本企业。目前已投资了2000家企业，其中63家上市公司。',
    image: '/plantform3-1.jpg',
    features: [
      '悉尼证券交易所：约2,000家上市公司',
      '优势资本：已投资2000家企业，63家上市公司',
      '助力中澳企业出海：',
      '• 企业收购、并购',
      '• 市场咨询',
      '• 企业注册',
      '• 法律咨询',
      '• 商标注册',
      '• 专利保护',
      '• 质量认证',
      '• 企业税务、会计服务'
    ]
  },
  {
    id: 'trade',
    title: '国际化贸易平台',
    subtitle: '美思生活馆+海外仓',
    description: '生活馆采用线上商城和线下体验，结合智能科技、健康养生、家居用品、娱乐休闲等，提供沉浸式购物和社交体验。生活馆将帮助中国500家企业以最小成本出海澳洲。目前旗舰店已选址布里斯班（约10,000平米），正在全面招商。目前IEA在塔州拥有20平方公里土地进行海外仓项目。',
    image: '/plantform4.jpg',
    features: [
      '美思生活馆：',
      '• 线上商城和线下体验',
      '• 智能科技、健康养生、家居用品、娱乐休闲',
      '• 沉浸式购物和社交体验',
      '• 帮助中国500家企业出海澳洲',
      '• 布里斯班旗舰店（约10,000平米）',
      '',
      '海外仓项目：',
      '• 塔州20平方公里土地',
      '• 全面的物流仓储服务'
    ]
  },
  {
    id: 'culture',
    title: '多元化文化平台',
    subtitle: '连接世界、整合资源',
    description: '连接世界、整合资源，举办各类文化展览、论坛、艺术交流、教育合作及高端商务考察活动，促进不同文化背景的人们相互理解，共享发展机遇。',
    image: '/plantform5-1.jpg',
    features: [
      '文化展览活动',
      '国际论坛',
      '艺术交流',
      '教育合作',
      '高端商务考察',
      '促进文化理解',
      '共享发展机遇'
    ]
  }
];

export default function Platforms() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      
      {/* 页面标题 */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
            合作平台
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary">
            五大核心平台，助力企业全球化发展
          </Typography>
        </Container>
      </Box>

      {/* 平台列表 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {platforms.map((platform, index) => (
          <Box key={platform.id} sx={{ mb: 8 }}>
            <Box 
              id={platform.id}
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', lg: 'row' }, 
                gap: 6, 
                alignItems: 'center',
                backgroundColor: index % 2 === 0 ? 'transparent' : '#f8f9fa',
                p: 4,
                borderRadius: 2
              }}
            >
              <Box sx={{ flex: { xs: 'none', lg: '0 0 400px' }, textAlign: 'center' }}>
                <Image
                  src={platform.image}
                  alt={platform.title}
                  width={400}
                  height={300}
                  style={{ borderRadius: '12px', objectFit: 'cover' }}
                />
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  {platform.title}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {platform.subtitle}
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                  {platform.description}
                </Typography>
                
                <Paper sx={{ p: 3, backgroundColor: 'white' }}>
                  <Typography variant="h6" gutterBottom>
                    主要特色
                  </Typography>
                  <List dense>
                    {platform.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ py: 0.5 }}>
                        {feature.startsWith('•') ? (
                          <Typography variant="body2" sx={{ ml: 2 }}>
                            {feature}
                          </Typography>
                        ) : feature === '' ? (
                          <Box sx={{ height: 8 }} />
                        ) : (
                          <>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircleIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText 
                              primary={feature}
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Box>
            </Box>
            
            {index < platforms.length - 1 && (
              <Divider sx={{ my: 4 }} />
            )}
          </Box>
        ))}
      </Container>

      {/* 平台优势 */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
            平台优势
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6, fontSize: '1.1rem' }}>
            通过五大平台的协同效应，为会员企业提供全方位的全球化发展支持
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Paper sx={{ p: 4, flex: 1, textAlign: 'center' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                资源整合
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="left">
                整合全球优质资源，包括技术、资本、市场、人才等，为会员企业提供一站式解决方案。
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 4, flex: 1, textAlign: 'center' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                专业服务
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="left">
                每个平台都配备专业团队，提供从咨询到实施的全流程服务，确保项目成功落地。
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 4, flex: 1, textAlign: 'center' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                全球网络
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="left">
                覆盖澳洲、美国、加拿大等主要市场，建立广泛的商业网络和合作伙伴关系。
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* 合作案例 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
          成功案例
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6, fontSize: '1.1rem' }}>
          我们的平台已经帮助众多企业实现了全球化发展目标
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Paper sx={{ p: 4, flex: 1 }}>
            <Typography variant="h6" gutterBottom color="primary">
              知识产权交易
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph textAlign="left">
              通过IPEX平台，成功促成了多起跨国知识产权交易，
              帮助中国企业获得澳洲先进技术，同时为澳洲企业开拓中国市场。
            </Typography>
          </Paper>
          
          <Paper sx={{ p: 4, flex: 1 }}>
            <Typography variant="h6" gutterBottom color="primary">
              养老产业合作
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph textAlign="left">
              成功引入澳洲养老护理证书课程到中国，
              建立了多个中澳养老产业合作项目，
              推动了两国银发经济的发展。
            </Typography>
          </Paper>
          
          <Paper sx={{ p: 4, flex: 1 }}>
            <Typography variant="h6" gutterBottom color="primary">
              企业出海服务
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph textAlign="left">
              帮助500家中国企业以最小成本成功出海澳洲，
              提供从注册到运营的全方位服务支持。
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* 联系我们 */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            想要了解更多？
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
            无论您对哪个平台感兴趣，我们都欢迎您联系我们，
            我们的专业团队将为您提供详细的咨询和服务。
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
            立即咨询
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
} 