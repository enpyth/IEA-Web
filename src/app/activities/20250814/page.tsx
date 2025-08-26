import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Breadcrumbs,
  Link as MUILink,
} from '@mui/material';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const imageSrc = '/20250814.jpg';

export default function Activity20250814() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />

      <Box sx={{ backgroundColor: '#f8f9fa', py: 4 }}>
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 1 }}>
            <MUILink component={Link} href="/activities" underline="hover" color="inherit">
              活动动态
            </MUILink>
            <Typography color="text.primary">2025-08-14 墨尔本</Typography>
          </Breadcrumbs>
          <Typography variant="h3" component="h1" gutterBottom>
            2025 澳中博览会 · 墨尔本
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Melbourne Convention and Exhibition Centre · 2025-08-14
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Chip label="墨尔本" color="primary" sx={{ fontSize: '1.05rem', fontWeight: 'bold' }} />
            <Typography variant="h5" sx={{ ml: 2 }}>
              2025年8月14日 · 澳中博览会
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontSize: '1.08rem', lineHeight: 1.9, mb: 3 }}>
            2025 年 8 月 14 日，墨尔本会展中心迎来了一场聚焦中澳合作的盛会 ——2025 澳中博览会盛大开幕。这场汇聚了中澳两国 100 多家企业和机构的展会中，IEA 国际企业家联合会（International Entrepreneurs Alliance）携六家成员企业惊艳登场，成为全场瞩目的焦点。
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            六大企业齐亮相，覆盖多领域显实力
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.06rem', lineHeight: 1.9, mb: 2 }}>
            此次 IEA 带来的六家成员企业，横跨多个领域，尽显中澳市场互补优势：
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 1, fontSize: '1.06rem' }}>
              江苏悦心养老产业集团带来了中国领先的智慧养老服务体系与创新解决方案。面对澳大利亚老龄化社会的迫切需求，其方案精准对接，引发广泛关注。
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1, fontSize: '1.06rem' }}>
              TK Care（Lake Macquarie Care）作为澳大利亚本土健康用品服务提供商，正积极探索中澳在养老医疗领域的深度合作模式。
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1, fontSize: '1.06rem' }}>
              澳大利亚葡萄酒行业翘楚 Dennis Global Wines，借此次博览会平台，进一步开拓潜力巨大的市场。
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1, fontSize: '1.06rem' }}>
              澳大利亚知名葡萄酒品牌 Maison Blue，目前正打造美思生活馆模式，让人充满期待。
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1, fontSize: '1.06rem' }}>
              Multicultural Art Centre 通过多元文化艺术交流，为中澳人文合作增添了丰富内涵。
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1, fontSize: '1.06rem' }}>
              国内领先的声光显 LED 高科技企业前瑞电子，则展现了科技创新的硬实力。
            </Typography>
          </Box>

          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            共探合作新机遇，聚焦多领域发展
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.06rem', lineHeight: 1.9, mb: 2 }}>
            本届博览会恰逢中澳自贸协定签署十周年，IEA 特别聚焦养老服务、医疗健康、文化贸易等领域的合作潜力。展会期间，IEA 代表团将与澳大利亚中国工商业委员会（ACBC）、澳大利亚贸易投资委员会（Austrade）等机构举行多场商务洽谈，并积极参与专题活动，进一步挖掘合作机会。
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1.06rem', lineHeight: 1.9, fontStyle: 'italic', borderLeft: '4px solid #e0e0e0', pl: 2, mb: 3 }}>
            IEA 代表团团长孙玲主席在开幕式上表示：“澳中博览会是推动两国企业务实合作的重要平台。我们此次带来的企业涵盖养老、科技、文化、贸易等关键领域，期待通过优势互补，实现互利共赢，为中澳经贸关系发展贡献力量。”
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            展望未来，携手迈向更高水平
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.06rem', lineHeight: 1.9, mb: 3 }}>
            IEA 的深度参与，充分彰显了国际企业对中澳经贸关系的坚定信心。随着两国在民生消费、文化产业、科技创新等领域的合作持续深化，IEA 未来将组织更多企业互访与行业对话，搭建更广阔的交流平台。相信在各方的努力下，中澳经贸合作将迈向更高水平，共创繁荣未来！
          </Typography>

          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Image
              src={imageSrc}
              alt="2025-08-14 墨尔本活动照片"
              width={960}
              height={640}
              style={{ borderRadius: '8px', objectFit: 'cover', width: '100%', height: 'auto' }}
            />
            <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
              （左三前外交部部长盖瑞思・埃文斯、左四前澳大利亚贸易部部长安德鲁・罗布、右一前维州上议员议长布鲁斯・阿金森与 IEA 团队负责人合影）
            </Typography>
          </Box>

        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}


