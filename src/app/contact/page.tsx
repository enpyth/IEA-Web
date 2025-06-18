import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      
      {/* 页面标题 */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom textAlign="center">
            联系我们
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary">
            我们期待与您的合作
          </Typography>
        </Container>
      </Box>

      {/* 联系信息 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6 }}>
          {/* 联系信息 */}
          <Box sx={{ flex: { xs: 'none', lg: '0 0 400px' } }}>
            <Typography variant="h3" component="h2" gutterBottom>
              联系信息
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
              无论您是想了解我们的平台服务，还是希望建立合作关系，
              我们都欢迎您通过以下方式与我们联系。
            </Typography>

            <Paper sx={{ p: 4 }}>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <BusinessIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="IEA 国际企业家联合会"
                    secondary="International Entrepreneurs Alliance"
                    primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                    secondaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <LocationOnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="总部地址"
                    secondary="阿德莱德，澳大利亚"
                    primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }}
                    secondaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="邮箱地址"
                    secondary="info@iea.org.au"
                    primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }}
                    secondaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="联系电话"
                    secondary="+61 8 XXXX XXXX"
                    primaryTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }}
                    secondaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              </List>
            </Paper>

            {/* 全球布局 */}
            <Paper sx={{ p: 4, mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                全球布局
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>总部：</strong>阿德莱德，澳大利亚
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>澳洲分会：</strong>悉尼、墨尔本、布里斯班、珀斯
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>北美分会：</strong>美国、加拿大主要城市
              </Typography>
            </Paper>
          </Box>

          {/* 联系表单 */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              发送消息
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
              请填写以下表单，我们将尽快与您联系。
            </Typography>

            <Paper sx={{ p: 4 }}>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 3 
                }}>
                  <TextField
                    fullWidth
                    label="姓名"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="公司名称"
                    variant="outlined"
                  />
                </Box>

                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 3 
                }}>
                  <TextField
                    fullWidth
                    label="邮箱地址"
                    type="email"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="联系电话"
                    variant="outlined"
                  />
                </Box>

                <TextField
                  fullWidth
                  label="主题"
                  variant="outlined"
                  required
                />

                <TextField
                  fullWidth
                  label="消息内容"
                  multiline
                  rows={6}
                  variant="outlined"
                  required
                  placeholder="请详细描述您的需求或问题..."
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ alignSelf: 'flex-start', px: 4, py: 1.5 }}
                >
                  发送消息
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>

      {/* 服务时间 */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom textAlign="center">
            服务时间
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6, fontSize: '1.1rem' }}>
            我们致力于为您提供及时、专业的服务
          </Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4 
          }}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                工作日
              </Typography>
              <Typography variant="body1" paragraph>
                周一至周五
              </Typography>
              <Typography variant="body2" color="text.secondary">
                上午 9:00 - 下午 6:00 (澳洲时间)
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                紧急联系
              </Typography>
              <Typography variant="body1" paragraph>
                24/7 在线支持
              </Typography>
              <Typography variant="body2" color="text.secondary">
                重要事务可通过邮箱紧急联系
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                响应时间
              </Typography>
              <Typography variant="body1" paragraph>
                24小时内回复
              </Typography>
              <Typography variant="body2" color="text.secondary">
                我们承诺在24小时内回复您的咨询
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* 常见问题 */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          常见问题
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 6, fontSize: '1.1rem' }}>
          以下是客户经常咨询的问题
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4 
        }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom color="primary">
              如何加入IEA？
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              我们欢迎所有有志于全球化发展的企业家加入。
              请通过联系表单或直接发送邮件至info@iea.org.au，
              我们的团队将为您详细介绍会员权益和申请流程。
            </Typography>
          </Paper>
          
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom color="primary">
              平台服务如何收费？
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              我们的服务收费根据具体项目和服务内容而定。
              我们提供灵活的收费方案，确保为不同规模的企业提供合适的服务。
              详情请咨询我们的专业团队。
            </Typography>
          </Paper>
          
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom color="primary">
              是否提供咨询服务？
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              是的，我们提供全方位的咨询服务，包括市场调研、
              法律咨询、财务规划等。我们的专业团队将根据您的具体需求，
              提供个性化的解决方案。
            </Typography>
          </Paper>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
} 