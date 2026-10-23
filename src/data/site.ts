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
      { title: { en: 'Roland Berger', zh: '罗兰贝格' }, category: { en: 'Strategy consulting', zh: '战略咨询' }, role: { en: 'Spring In-Pool Part-time Assistant (PTA)', zh: 'Spring In-Pool 兼职项目助理（PTA）' }, date: { en: 'May–October 2024', zh: '2024年5月–10月' }, location: { en: 'Remote', zh: '线上' }, description: { en: 'Market assessment, industry analysis and competitor research across healthcare and other sectors.', zh: '参与医疗健康及其他行业的市场评估、行业分析与竞对研究。' }, highlights: { en: ['Built a framework covering demographics, industrial scale, income and purchasing power to assess demand for a high-end medical institution.', 'Benchmarked cities of different tiers to support the client’s investment decision.', 'Researched export markets, supplier capabilities and competitor operations using public market, production and financial information.'], zh: ['搭建涵盖人口结构、产业规模、收入与消费能力的指标体系，评估高端医疗机构的市场空间。', '选取不同等级城市进行对标，为客户的投资判断提供依据。', '基于公开市场、生产及财务信息，研究出口市场、供应商能力与竞争对手运营情况。'] } },
    ],
  },
  {
    slug: 'education-outreach', number: '02', category: { en: 'Education', zh: '教育实践' },
    title: { en: 'Education & Outreach', zh: '教育与交流' },
    description: { en: 'Teaching, mentoring, educational initiatives, academic communication, and knowledge sharing.', zh: '涵盖教学辅导、学术指导、教育实践、知识传播与交流。' },
    introduction: { en: 'Teaching and outreach experiences that make scientific ideas more accessible.', zh: '通过教学与科普实践，让科学知识更易理解和接近。' },
    entries: [
      { title: { en: 'Beiya International Education', zh: '北雅国际教育' }, category: { en: 'English education', zh: '英语教育' }, role: { en: 'IELTS Intensive Course Tutor & Class Supervisor', zh: '雅思集训营班主任／助教' }, date: { en: 'June–July 2026', zh: '2026年6月–7月' }, location: { en: 'Suzhou, China', zh: '中国苏州' }, description: { en: 'Supported an intensive IELTS course while coordinating students, parents and teaching staff.', zh: '协助雅思集训教学，并协调学生、家长与任课教师之间的沟通。' }, highlights: { en: ['Tracked progress, organised practice and answered questions for 12 students.', 'Ten students improved their IELTS score by 0.5–1.5 bands after the course.', 'Managed attendance and study plans while providing individual support.'], zh: ['跟进12名学生的学习进度，组织课后练习并进行答疑。', '班级中10名学生在集训后雅思成绩提升0.5–1.5分。', '负责考勤与学习任务管理，并根据个体情况提供支持。'] } },
      { title: { en: 'Vision Academy', zh: '唯寻国际教育' }, category: { en: 'Biology mentoring', zh: '生物学辅导' }, role: { en: 'Biology Interview Tutor', zh: '生命科学方向面试辅导教师' }, date: { en: 'May 2023–May 2026', zh: '2023年5月–2026年5月' }, location: { en: 'Remote', zh: '线上' }, description: { en: 'Prepared students for life-sciences interviews through subject teaching and guided scientific reasoning.', zh: '通过学科教学与引导式提问，帮助学生准备生命科学方向面试。' }, highlights: { en: ['Connected secondary-school biology with university-level life-sciences topics.', 'Developed questions and explanations with teaching colleagues.', 'Used one-to-one discussion to strengthen analysis and verbal reasoning.'], zh: ['梳理高中生物核心知识，并结合大学生命科学内容拓展学科深度。', '与对接教师共同研讨课程安排、提问方式及讲解细节。', '通过一对一讨论训练学生分析问题并清晰表达推理过程。'] } },
      { title: { en: 'Cold Spring Harbor Asia DNA Learning Center', zh: '冷泉港亚洲 DNA 学习中心' }, category: { en: 'Experimental teaching & outreach', zh: '实验教学与科普' }, role: { en: 'Teaching Associate', zh: '实践项目实习生' }, date: { en: 'July–August 2023', zh: '2023年7月–8月' }, location: { en: 'Suzhou, China', zh: '中国苏州' }, description: { en: 'Supported hands-on molecular biology teaching and public science programmes.', zh: '参与分子生物学实验教学及公众科学活动。' }, highlights: { en: ['Designed teaching tasks around DNA extraction, PCR and gel electrophoresis.', 'Prepared materials and supported students during experiments.', 'Helped organise two science events attended by approximately 100 students in total.'], zh: ['围绕DNA提取、PCR扩增与凝胶电泳设计教学任务。', '准备实验材料并辅助学生完成实验。', '协助举办两场共约100名学生参加的科普活动。'] } },
      { title: { en: 'Biology Teaching Volunteer Programme', zh: '山区生物课程支教' }, category: { en: 'Teaching', zh: '教学' }, role: { en: 'Biology Instructor', zh: '任课教师' }, date: { en: 'June–July 2024', zh: '2024年6月–7月' }, location: { en: 'Sichuan, China', zh: '中国四川' }, description: { en: 'Designed and taught accessible biology lessons for a volunteer education programme.', zh: '在支教项目中设计并讲授贴近学生生活的生物课程。' }, highlights: { en: ['Assessed prior knowledge and developed four tailored lessons with everyday experiments.', 'Worked with more than ten volunteers on activities and teaching materials.', 'Received the programme’s “Best Volunteer Teacher” recognition.'], zh: ['了解学生知识基础，设计四节结合生活实验的课程。', '与十余名支教团成员共同策划课堂活动并准备课程材料。', '获项目“最佳支教老师”评价。'] } },
    ],
  },
  {
    slug: 'life-sciences-research', number: '03', category: { en: 'Research', zh: '研究' },
    title: { en: 'Life Sciences & Research', zh: '生命科学与研究' },
    description: { en: 'Biological sciences, disease ecology, public health, epidemiology, and quantitative research.', zh: '关注生命科学、疾病生态、公共卫生、流行病学及定量研究。' },
    introduction: { en: 'Research interests and practical work across biological sciences, biotechnology and quantitative analysis.', zh: '涵盖生命科学、生物技术与定量分析的研究兴趣和实践。' },
    entries: [
      { title: { en: 'Social Networks and Growth Performance in Cattle', zh: '牛群社会行为与生长性能关联研究' }, category: { en: 'Independent research', zh: '独立研究' }, role: { en: 'Independent Researcher', zh: '独立研究员' }, date: { en: 'February–June 2026', zh: '2026年2月–6月' }, location: { en: 'London, UK', zh: '英国伦敦' }, description: { en: 'A quantitative study of relationships between herd social structure, individual growth and health.', zh: '定量研究牛群社会结构与个体生长及健康表现之间的关系。' }, highlights: { en: ['Processed nearly one million sensor records from 174 cattle and constructed six social networks.', 'Built mixed-effects models controlling for breed, sex and birth weight; the project report records 84.2% overall model explanatory power.', 'Produced a research report and recommendations for herd composition and breeding management.'], zh: ['清洗并筛选174头牛两年间近百万条传感器记录，构建六组社会关系网络。', '建立控制品种、性别和出生体重等变量的混合效应模型；项目材料记录模型总体解释力为84.2%。', '整理研究报告，并提出群体组合与选育管理建议。'] } },
      { title: { en: 'Exosome Product Development', zh: '外泌体产品研发与流程评估' }, category: { en: 'Biotechnology R&D', zh: '生物技术研发' }, role: { en: 'Product Development Assistant, R&D', zh: '研发部产品开发助理' }, date: { en: 'March–June 2025', zh: '2025年3月–6月' }, location: { en: 'Suzhou, China', zh: '中国苏州' }, description: { en: 'Protocol development and consumables evaluation at Zhiheng Biotechnology.', zh: '在志恒生物科技开展提取流程开发与实验耗材评估。' }, highlights: { en: ['Tested extraction across five plant sample types and adjusted reagent ratios.', 'Developed magnetic-bead extraction, ultrafiltration and BCA measurement tests while coordinating 100+ service orders.', 'Compared domestic and imported EPF columns using ultracentrifugation and NTA.'], zh: ['参与五种植物样本的外泌体提取并调整试剂配比。', '在统筹100余组服务订单期间，设计磁珠提取、超滤与BCA蛋白检测相关测试。', '通过超速离心及NTA检测比较国产与进口EPF柱。'] } },
      { title: { en: 'Insulin 1 Gene Cloning: pET-28a and PCR II', zh: 'pET-28a与PCR II载体中胰岛素1基因克隆效率比较' }, category: { en: 'Molecular biology', zh: '分子生物学' }, role: { en: 'Group Member', zh: '组员' }, date: { en: 'May–June 2024', zh: '2024年5月–6月' }, location: { en: 'London, UK', zh: '英国伦敦' }, description: { en: 'A four-week comparison of restriction-enzyme and TA cloning workflows in E. coli.', zh: '为期四周的大肠杆菌限制性酶切克隆与TA克隆流程比较实验。' }, highlights: { en: ['Conducted RNA extraction, RT-PCR, gel purification and bacterial transformation.', 'Evaluated cloning efficiency through electrophoresis and colony screening.', 'Analysed limitations and refined protocol troubleshooting.'], zh: ['完成RNA提取、RT-PCR扩增、凝胶纯化与大肠杆菌转化。', '通过凝胶电泳与菌落筛选评估克隆效率。', '分析实验偏差与技术问题，并优化问题排查流程。'] } },
      { title: { en: 'p53-Regulated lncRNAs in Non-Small Cell Lung Cancer', zh: 'p53调控的长链非编码RNA在非小细胞肺癌中的功能与机制' }, category: { en: 'Cancer biology', zh: '肿瘤生物学' }, role: { en: 'Group Member', zh: '组员' }, date: { en: 'July–August 2023', zh: '2023年7月–8月' }, location: { en: 'Shanghai, China', zh: '中国上海' }, description: { en: 'Laboratory investigation of p53-regulated lncRNA expression and NSCLC cell behaviour.', zh: '研究p53调控的lncRNA表达及其与非小细胞肺癌细胞行为的关系。' }, highlights: { en: ['Used cell culture, qPCR and Western blot methods.', 'Organised experimental data and contributed to statistical analysis.', 'Participated in presentations and literature discussions.'], zh: ['通过细胞培养、qPCR及Western blot分析表达变化。', '整理实验数据并参与统计分析。', '参与阶段汇报与文献讨论。'] } },
      { title: { en: 'Antibacterial Effects of Cinnamaldehyde', zh: '肉桂醛对细菌生长的抑制作用' }, category: { en: 'Experimental biology', zh: '实验生物学' }, role: { en: 'Experiment Designer & Scribe', zh: '实验设计及记录员' }, date: { en: 'May–June 2023', zh: '2023年5月–6月' }, location: { en: 'London, UK', zh: '英国伦敦' }, description: { en: 'Designed a concentration-response experiment examining cinnamaldehyde and bacterial growth.', zh: '设计浓度响应实验，研究肉桂醛对细菌生长速度的影响。' }, highlights: { en: ['Established the hypothesis, monitoring indicators and assessment criteria.', 'Designed eight groups and recorded observations over one month.', 'Analysed the datasets in R and led the group presentation.'], zh: ['建立研究假设、关键监测指标与评定标准。', '设计八组实验并完成一个月的观察记录。', '使用R分析数据，并主导小组汇报。'] } },
      { title: { en: 'Gene Sequences and Viral Evolution', zh: '基因序列与病毒演进状况的关联性研究' }, category: { en: 'Bioinformatics study', zh: '生物信息研究' }, role: { en: 'Research Project', zh: '研究项目' }, date: { en: 'October–November 2023', zh: '2023年10月–11月' }, location: { en: 'London, UK', zh: '英国伦敦' }, description: { en: 'A short project exploring sequence variation, protein-expression patterns and viral evolution.', zh: '探索基因序列差异、蛋白表达模式与病毒演进关系的短期项目。' }, highlights: { en: ['Compared gene sequences across species and reviewed protein-expression changes.', 'Used anomalous expression patterns to identify candidate sequences.', 'Considered gene-based approaches to interrupt viral replication as a project exercise.'], zh: ['比对不同物种的基因序列，并研究相关蛋白表达变化。', '根据异常表达模式定位候选序列。', '在项目练习中讨论基于基因的病毒复制阻断思路。'] } },
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
