export type Language = 'en' | 'zh';

export const languages = {
  en: {
    code: 'en', locale: 'en', switchLabel: '中文', home: '/', academic: '/academic/', elsewhere: '/elsewhere/',
    brand: 'LIVIA', archive: 'Academic Archive', back: 'Back', explore: 'Explore',
    footer: 'Wenxi Miao · Livia', status: 'Content in preparation', dates: 'Dates to be confirmed',
  },
  zh: {
    code: 'zh', locale: 'zh-CN', switchLabel: 'EN', home: '/zh/', academic: '/zh/academic/', elsewhere: '/zh/elsewhere/',
    brand: 'LIVIA', archive: '学术档案', back: '返回', explore: '查看',
    footer: '缪文希 · Livia', status: '内容整理中', dates: '日期待确认',
  },
} as const;

export const profile = {
  en: {
    name: 'Wenxi Miao', secondary: 'Livia', degree: 'BSc Biological Sciences', school: 'Imperial College London',
    intro: 'With a background in biological sciences, my interests span healthcare research, strategic analysis, education, and the intersection of science and society.',
    cv: 'Curriculum Vitae', contact: 'Contact', forthcoming: 'Forthcoming', portrait: 'Portrait placeholder',
  },
  zh: {
    name: '缪文希', secondary: 'Livia · Wenxi Miao', degree: '生物科学理学学士', school: '帝国理工学院',
    intro: '拥有生命科学背景，关注医疗健康研究、战略分析、教育实践，以及科学与社会的交叉领域。',
    cv: '个人简历', contact: '联系方式', forthcoming: '待补充', portrait: '肖像占位',
  },
} as const;

export const academicSections = [
  {
    slug: 'healthcare-strategy', number: '01', category: { en: 'Professional', zh: '专业实践' },
    title: { en: 'Healthcare & Strategy', zh: '医疗健康与战略' },
    description: { en: 'Healthcare industry research, market intelligence, investment analysis, consulting, and strategic insights.', zh: '聚焦医药行业研究、市场分析、投资研究、咨询及战略洞察。' },
    introduction: { en: 'A developing collection for healthcare research, market questions and strategic analysis.', zh: '持续整理医疗健康研究、市场问题与战略分析相关经历。' },
    entries: [
      { title: { en: 'Roland Berger PTA', zh: '罗兰贝格 PTA' }, category: { en: 'Healthcare research', zh: '医疗健康研究' }, description: { en: 'Healthcare market assessment, industry research and competitive landscape work.', zh: '参与医疗市场评估、行业研究与竞争格局分析。' } },
    ],
  },
  {
    slug: 'education-outreach', number: '02', category: { en: 'Education', zh: '教育实践' },
    title: { en: 'Education & Outreach', zh: '教育与交流' },
    description: { en: 'Teaching, mentoring, educational initiatives, academic communication, and knowledge sharing.', zh: '涵盖教学辅导、学术指导、教育实践、知识传播与交流。' },
    introduction: { en: 'Teaching and outreach experiences that make scientific ideas more accessible.', zh: '通过教学与科普实践，让科学知识更易理解和接近。' },
    entries: [
      { title: { en: 'DNA Learning Center Asia', zh: '冷泉港亚洲 DNA 学习中心' }, category: { en: 'Experimental teaching & outreach', zh: '实验教学与科普' }, description: { en: 'Experimental teaching and public science communication.', zh: '参与实验教学与科学传播。' } },
      { title: { en: 'Biology teaching in Sichuan', zh: '四川生物课程支教' }, category: { en: 'Teaching', zh: '教学' }, description: { en: 'Biology course teaching experience in Sichuan.', zh: '在四川开展生物课程支教。' } },
    ],
  },
  {
    slug: 'life-sciences-research', number: '03', category: { en: 'Research', zh: '研究' },
    title: { en: 'Life Sciences & Research', zh: '生命科学与研究' },
    description: { en: 'Biological sciences, disease ecology, public health, epidemiology, and quantitative research.', zh: '关注生命科学、疾病生态、公共卫生、流行病学及定量研究。' },
    introduction: { en: 'Research interests and practical work across biological sciences, biotechnology and quantitative analysis.', zh: '涵盖生命科学、生物技术与定量分析的研究兴趣和实践。' },
    entries: [
      { title: { en: 'Biotechnology R&D internship', zh: '生物科技研发实习' }, category: { en: 'Biotechnology', zh: '生物技术' }, description: { en: 'Work involving exosome extraction processes and consumables evaluation at Zhiheng Biotechnology.', zh: '在志恒生物科技参与外泌体提取流程与耗材评估。' } },
      { title: { en: 'Cattle social networks and growth performance', zh: '牛群社会网络与生长表现' }, category: { en: 'Data analysis', zh: '数据分析' }, description: { en: 'Research and data analysis involving cattle social networks and growth performance.', zh: '开展牛群社会网络与生长表现相关研究及数据分析。' } },
    ],
  },
] as const;

export const homeContent = {
  en: { label: 'A personal archive', heading: 'LIVIA.', prompt: 'Choose a room to enter.', academic: 'Academic', academicText: 'Research · Work · Education', elsewhere: 'Elsewhere', elsewhereText: 'Writing · Reading · Life' },
  zh: { label: '个人档案', heading: 'LIVIA.', prompt: '选择一个空间进入。', academic: '学术', academicText: '研究 · 工作 · 教育', elsewhere: '别处', elsewhereText: '写作 · 阅读 · 生活' },
} as const;

export const elsewhereContent = {
  en: { title: 'Elsewhere', label: 'Life · Ideas · Creations', lead: 'A quieter room for everything beyond formal work.', body: 'Writing, reading, music, places and things made along the way will gather here when they are ready.', status: 'This collection is still taking shape.' },
  zh: { title: '别处', label: '生活 · 想法 · 创作', lead: '一个留给正式工作之外事物的安静空间。', body: '写作、阅读、音乐、旅途与沿途创作，会在准备好之后陆续汇集于此。', status: '这个空间仍在慢慢成形。' },
} as const;

export function pathFor(lang: Language, path: string) {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return lang === 'zh' ? `/zh/${clean}${clean ? '/' : ''}` : `/${clean}${clean ? '/' : ''}`;
}
