export type SupportedLanguage = 'zh' | 'en';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface MilestoneRecord {
  id: string;
  date: string;
  cover: string;
  images?: string[];
  title: LocalizedText;
  description: LocalizedText;
  link: string;
}

export const MILESTONES: MilestoneRecord[] = [
  {
    id: '20250815',
    date: '2025-08-15',
    cover: '/milestone20250815_1.jpg',
    images: ['/milestone20250815_1.jpg', '/milestone20250815_2.jpg'],
    title: {
      zh: 'IEA国际企业家联合会获澳中博览会杰出奖项双项殊荣',
      en: 'IEA Wins Double Honors at Australia-China Expo Decade Awards',
    },
    description: {
      zh: '墨尔本，2025年8月15日 澳中博览会迎来第二日的重磅活动——“中澳自贸协定十周年杰出奖项颁奖仪式”在墨尔本会展中心盛大举行。本次颁奖仪式聚焦中澳自由贸易协定（ChAFTA）生效十年来的卓越贡献者，旨在表彰那些在经贸合作、双向投资、文化技术交流等领域取得突出成就的企业与机构。',
      en: 'Melbourne, Aug 15, 2025 — The Australia-China Expo hosted the “ChAFTA 10th Anniversary Outstanding Awards Ceremony” at the Melbourne Convention and Exhibition Centre, honoring organizations with remarkable contributions to trade, investment, and cultural-technology exchange over the past decade.',
    },
    link: '/milestones/20250815',
  },
];

export interface MilestoneViewModel {
  id: string;
  date: string;
  cover: string;
  images?: string[];
  title: string;
  description: string;
  link: string;
}

export function getMilestonesByLanguage(language: SupportedLanguage): MilestoneViewModel[] {
  return MILESTONES.map((m) => ({
    id: m.id,
    date: m.date,
    cover: m.cover,
    images: m.images,
    title: m.title[language] || m.title.zh,
    description: m.description[language] || m.description.zh,
    link: m.link,
  }));
}


