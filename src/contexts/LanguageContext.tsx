'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译数据
const translations = {
  zh: {
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.platforms': '合作平台',
    'nav.activities': '活动动态',
    'nav.contact': '联系我们',
    'company.title': '关于IEA',
    'company.description': 'IEA创立于澳洲，是一个由全球优秀企业家和各行业精英人士组成的非营利机构。致力于促进企业间的交流与合作，推动全球经济发展与科技创新，提升企业社会责任和国际化可持续发展。总部设在阿德莱德，目前在澳洲、美国、加拿大主要城市均设有分会。',
    'chairman.title': '主席致辞',
    'chairman.message': 'IEA是一个开放包容、合作共赢、全球智慧、与时俱进的平台和温馨家园。让我们同心逐梦、彼此成就、不畏风浪、共铸辉煌！',
    'chairman.button': '阅读完整致辞',
    'platforms.title': '合作平台',
    'platforms.subtitle': '我们提供五大核心平台，助力企业全球化发展',
    'platforms.learnMore': '了解更多 →',
    'platforms.patent.title': '高科技专利平台',
    'platforms.patent.subtitle': '澳大利亚知识产权交易所',
    'platforms.patent.description': 'IEA创办的唯一且首家澳大利亚知识产权交易所（IP AUSTRLIA EXCHANGE)，简称IPEX，是促进知识产权的交易和管理的平台。',
    'platforms.health.title': '大健康养老平台',
    'platforms.health.subtitle': '澳中银发经济合作标杆',
    'platforms.health.description': '为中国首次引入澳洲养老护理证书课程，首创南澳第一家华人养老机构，参与创建南京中澳银发经济智慧园区。',
    'platforms.investment.title': '第三方投资平台',
    'platforms.investment.subtitle': '澳中资本联盟',
    'platforms.investment.description': 'IEA理事成员悉尼证券交易所拥有约2,000家上市公司，优势资本已投资了2000家企业，其中63家上市公司。',
    'platforms.trade.title': '国际化贸易平台',
    'platforms.trade.subtitle': '美思生活馆+海外仓',
    'platforms.trade.description': '生活馆采用线上商城和线下体验，结合智能科技、健康养生、家居用品、娱乐休闲等，提供沉浸式购物和社交体验。',
    'platforms.culture.title': '多元化文化平台',
    'platforms.culture.subtitle': '连接世界、整合资源',
    'platforms.culture.description': '举办各类文化展览、论坛、艺术交流、教育合作及高端商务考察活动，促进不同文化背景的人们相互理解。',
    'news.title': '最新动态',
    'news.subtitle': '了解IEA的最新活动和访问动态',
    'news.activities.title': '近期访问活动',
    'news.activities.description': '我们近期访问了北京、河南、徐州、南京、苏州、上海等地的多家企业和机构，包括中关村细胞基因治疗产业园、振东药业、徐工机械等知名企业。',
    'news.activities.button': '查看详情',
    'news.platforms.title': '平台发展动态',
    'news.platforms.description': '我们的五大平台正在快速发展，知识产权交易所已与澳洲42所大学建立合作，美思生活馆旗舰店已选址布里斯班，海外仓项目在塔州拥有20平方公里土地。',
    'news.platforms.button': '了解更多',
    'footer.title': 'IEA 国际企业家联合会',
    'footer.description': 'IEA是一个开放包容、合作共赢、全球智慧、与时俱进的平台和温馨家园。让我们同心逐梦、彼此成就、不畏风浪、共铸辉煌！',
    'footer.contact': '联系我们',
    'footer.headquarters': 'GF/400 King William St, Adelaide, South Australia, 5000',
    'footer.email': 'lingsun@austarfnance.com.au',
    'footer.phone': '+61 8 XXXX XXXX',
    'footer.global': '全球布局',
    'footer.global.description': '总部设在阿德莱德，目前在澳洲、美国、加拿大主要城市均设有分会。',
    'footer.global.mission': '致力于促进企业间的交流与合作，推动全球经济发展与科技创新。',
    'footer.copyright': '© 2025 IEA International Entrepreneurs Alliance. All rights reserved.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.platforms': 'Platforms',
    'nav.activities': 'Activities',
    'nav.contact': 'Contact',
    'company.title': 'About IEA',
    'company.description': 'IEA was founded in Australia as a non-profit organization composed of outstanding entrepreneurs and industry elites from around the world. We are committed to promoting exchanges and cooperation between enterprises, driving global economic development and technological innovation, and enhancing corporate social responsibility and international sustainable development. Our headquarters is located in Adelaide, with branches in major cities across Australia, the United States, and Canada.',
    'chairman.title': 'Chairman\'s Message',
    'chairman.message': 'IEA is an open, inclusive, win-win cooperation platform with global wisdom and advancing with the times, serving as a warm home. Let us pursue our dreams together, achieve mutual success, fear no storms, and create brilliance together!',
    'chairman.button': 'Read More',
    'platforms.title': 'Cooperation Platforms',
    'platforms.subtitle': 'We provide five core platforms to help enterprises achieve global development',
    'platforms.learnMore': 'Learn More →',
    'platforms.patent.title': 'High-Tech Patent Platform',
    'platforms.patent.subtitle': 'Australia Intellectual Property Exchange',
    'platforms.patent.description': 'IEA established the first and only Australia Intellectual Property Exchange (IP AUSTRALIA EXCHANGE), abbreviated as IPEX, which is a platform for promoting intellectual property trading and management.',
    'platforms.health.title': 'Health & Elderly Care Platform',
    'platforms.health.subtitle': 'Australia-China Silver Economy Cooperation Benchmark',
    'platforms.health.description': 'First introduced Australian elderly care certificate courses to China, established the first Chinese elderly care institution in South Australia, and participated in creating the Nanjing Australia-China Silver Economy Smart Park.',
    'platforms.investment.title': 'Third-Party Investment Platform',
    'platforms.investment.subtitle': 'Australia-China Capital Alliance',
    'platforms.investment.description': 'IEA council member Sydney Stock Exchange has about 2,000 listed companies, and Advantage Capital has invested in 2,000 enterprises, including 63 listed companies.',
    'platforms.trade.title': 'International Trade Platform',
    'platforms.trade.subtitle': 'Meisi Lifestyle + Overseas Warehouse',
    'platforms.trade.description': 'The lifestyle center adopts online shopping and offline experience, combining smart technology, health and wellness, home goods, entertainment and leisure to provide immersive shopping and social experience.',
    'platforms.culture.title': 'Diverse Cultural Platform',
    'platforms.culture.subtitle': 'Connecting the World, Integrating Resources',
    'platforms.culture.description': 'Organize various cultural exhibitions, forums, art exchanges, educational cooperation and high-end business inspection activities to promote mutual understanding among people from different cultural backgrounds.',
    'news.title': 'Latest News',
    'news.subtitle': 'Learn about IEA\'s latest activities and visit updates',
    'news.activities.title': 'Recent Visit Activities',
    'news.activities.description': 'We recently visited multiple enterprises and institutions in Beijing, Henan, Xuzhou, Nanjing, Suzhou, Shanghai and other places, including well-known enterprises such as Zhongguancun Cell Gene Therapy Industrial Park, Zhendong Pharmaceutical, and XCMG Machinery.',
    'news.activities.button': 'View Details',
    'news.platforms.title': 'Platform Development Updates',
    'news.platforms.description': 'Our five major platforms are developing rapidly. The intellectual property exchange has established cooperation with 42 Australian universities, the Meisi lifestyle flagship store has been located in Brisbane, and the overseas warehouse project owns 20 square kilometers of land in Tasmania.',
    'news.platforms.button': 'Learn More',
    'footer.title': 'IEA International Entrepreneurs Alliance',
    'footer.description': 'IEA is an open, inclusive, win-win cooperation platform with global wisdom and advancing with the times, serving as a warm home. Let us pursue our dreams together, achieve mutual success, fear no storms, and create brilliance together!',
    'footer.contact': 'Contact Us',
    'footer.headquarters': 'GF/400 King William St, Adelaide, South Australia, 5000',
    'footer.email': 'lingsun@austarfnance.com.au',
    'footer.phone': '+61 8 XXXX XXXX',
    'footer.global': 'Global Presence',
    'footer.global.description': 'Our headquarters is located in Adelaide, with branches in major cities across Australia, the United States, and Canada.',
    'footer.global.mission': 'We are committed to promoting exchanges and cooperation between enterprises, driving global economic development and technological innovation.',
    'footer.copyright': '© 2025 IEA International Entrepreneurs Alliance. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 