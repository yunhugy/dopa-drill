// Chinese Learning Bank & Problem Generator for dopa-drill
// Supports Grade 1-6 across 4 categories: Idiom, Typo, Pinyin, and Poem.
// The bank = 240 handwritten questions + auto-generated pinyin/idiom
// questions from data tables (see chinese_gen.js).
import { GENERATED_QUESTION_BANK } from './chinese_gen.js';

export const CHINESE_LANES = ['成语积淀', '汉字与读音', '错别字辨析', '古诗名句'];

export const CHINESE_SKILLS = [
  // Grade 1
  { id: 'ch1-idiom', name: '一年级 · 启蒙成语', grade: 1, lane: 0, req: [], category: 'idiom' },
  { id: 'ch1-pinyin', name: '一年级 · 声韵拼音', grade: 1, lane: 1, req: [], category: 'pinyin' },
  { id: 'ch1-typo', name: '一年级 · 看字辨形', grade: 1, lane: 2, req: [], category: 'typo' },
  { id: 'ch1-poem', name: '一年级 · 经典诗词', grade: 1, lane: 3, req: [], category: 'poem' },

  // Grade 2
  { id: 'ch2-idiom', name: '二年级 · 寓言成语', grade: 2, lane: 0, req: ['ch1-idiom'], category: 'idiom' },
  { id: 'ch2-pinyin', name: '二年级 · 常见多音字', grade: 2, lane: 1, req: ['ch1-pinyin'], category: 'pinyin' },
  { id: 'ch2-typo', name: '二年级 · 同音字辨析', grade: 2, lane: 2, req: ['ch1-typo'], category: 'typo' },
  { id: 'ch2-poem', name: '二年级 · 四季诗篇', grade: 2, lane: 3, req: ['ch1-poem'], category: 'poem' },

  // Grade 3
  { id: 'ch3-idiom', name: '三年级 · 故事典故', grade: 3, lane: 0, req: ['ch2-idiom'], category: 'idiom' },
  { id: 'ch3-pinyin', name: '三年级 · 多音字进阶', grade: 3, lane: 1, req: ['ch2-pinyin'], category: 'pinyin' },
  { id: 'ch3-typo', name: '三年级 · 形近错别字', grade: 3, lane: 2, req: ['ch2-typo'], category: 'typo' },
  { id: 'ch3-poem', name: '三年级 · 山水名句', grade: 3, lane: 3, req: ['ch2-poem'], category: 'poem' },

  // Grade 4
  { id: 'ch4-idiom', name: '四年级 · 历史成语', grade: 4, lane: 0, req: ['ch3-idiom'], category: 'idiom' },
  { id: 'ch4-pinyin', name: '四年级 · 易错读音', grade: 4, lane: 1, req: ['ch3-pinyin'], category: 'pinyin' },
  { id: 'ch4-typo', name: '四年级 · 易混词语纠错', grade: 4, lane: 2, req: ['ch3-typo'], category: 'typo' },
  { id: 'ch4-poem', name: '四年级 · 边塞与哲理诗', grade: 4, lane: 3, req: ['ch3-poem'], category: 'poem' },

  // Grade 5
  { id: 'ch5-idiom', name: '五年级 · 深度成语', grade: 5, lane: 0, req: ['ch4-idiom'], category: 'idiom' },
  { id: 'ch5-pinyin', name: '五年级 · 疑难多音多义', grade: 5, lane: 1, req: ['ch4-pinyin'], category: 'pinyin' },
  { id: 'ch5-typo', name: '五年级 · 成语错别字', grade: 5, lane: 2, req: ['ch4-typo'], category: 'typo' },
  { id: 'ch5-poem', name: '五年级 · 家国情怀名句', grade: 5, lane: 3, req: ['ch4-poem'], category: 'poem' },

  // Grade 6
  { id: 'ch6-idiom', name: '六年级 · 文学成语精粹', grade: 6, lane: 0, req: ['ch5-idiom'], category: 'idiom' },
  { id: 'ch6-pinyin', name: '六年级 · 古文疑难读音', grade: 6, lane: 1, req: ['ch5-pinyin'], category: 'pinyin' },
  { id: 'ch6-typo', name: '六年级 · 综合纠错实战', grade: 6, lane: 2, req: ['ch5-typo'], category: 'typo' },
  { id: 'ch6-poem', name: '六年级 · 经典古文诗韵', grade: 6, lane: 3, req: ['ch5-poem'], category: 'poem' },
];

export const CHINESE_SKILL_MAP = Object.fromEntries(CHINESE_SKILLS.map((s) => [s.id, s]));

// ---------------------------------------------------------------- Comprehensive Bank
const HANDWRITTEN_QUESTION_BANK = [
  // ==================== Grade 1 ====================
  // -- Idiom
  { grade: 1, type: 'idiom', prefix: '一 心 一 ', missing: '意', suffix: '', options: ['意', '忆', '异', '易'], explanation: '一心一意：只有一个心眼，形容心思专一。' },
  { grade: 1, type: 'idiom', prefix: '七 上 八 ', missing: '下', suffix: '', options: ['下', '夏', '吓', '峡'], explanation: '七上八下：形容心里慌乱不安，心神不定。' },
  { grade: 1, type: 'idiom', prefix: '春 华 秋 ', missing: '实', suffix: '', options: ['实', '石', '识', '十'], explanation: '春华秋实：春天开花，秋天结果。' },
  { grade: 1, type: 'idiom', prefix: '十 全 十 ', missing: '美', suffix: '', options: ['美', '每', '妹', '没'], explanation: '十全十美：十分完美，毫无缺点。' },
  { grade: 1, type: 'idiom', prefix: '自 言 自 ', missing: '语', suffix: '', options: ['语', '雨', '羽', '与'], explanation: '自言自语：自己跟自己说话。' },
  { grade: 1, type: 'idiom', prefix: '五 颜 六 ', missing: '色', suffix: '', options: ['色', '瑟', '涩', '射'], explanation: '五颜六色：形容色彩繁多艳丽。' },
  { grade: 1, type: 'idiom', prefix: '大 吃 一 ', missing: '惊', suffix: '', options: ['惊', '京', '睛', '精'], explanation: '大吃一惊：形容对发生的意外事情非常吃惊。' },
  { grade: 1, type: 'idiom', prefix: '千 军 万 ', missing: '马', suffix: '', options: ['马', '码', '妈', '骂'], explanation: '千军万马：形容雄壮的队伍或浩大的声势。' },
  { grade: 1, type: 'idiom', prefix: '一 五 一 ', missing: '十', suffix: '', options: ['十', '石', '时', '识'], explanation: '一五一十：比喻叙述从头到尾，源源本本，没有遗漏。' },
  { grade: 1, type: 'idiom', prefix: '上 下 左 ', missing: '右', suffix: '', options: ['右', '又', '友', '有'], explanation: '上下左右：指各个方面或方位。' },

  // -- Pinyin
  { grade: 1, type: 'pinyin', prefix: '“快乐”的“乐”读作：', missing: 'lè', suffix: '', options: ['lè', 'yuè', 'luò', 'lào'], explanation: '“乐”表示快乐、欢喜时读 lè；在“音乐”中读 yuè。' },
  { grade: 1, type: 'pinyin', prefix: '“长发”的“长”读作：', missing: 'cháng', suffix: '', options: ['cháng', 'zhǎng', 'chāng', 'zhàng'], explanation: '“长”表示长度时读 cháng；生长、长大读 zhǎng。' },
  { grade: 1, type: 'pinyin', prefix: '“看着”的“着”读作：', missing: 'zhe', suffix: '', options: ['zhe', 'zháo', 'zhuó', 'zhāo'], explanation: '助词“看着、听着”读轻声 zhe；“着火”读 zháo。' },
  { grade: 1, type: 'pinyin', prefix: '“好人”的“好”读作：', missing: 'hǎo', suffix: '', options: ['hǎo', 'hào', 'háo', 'hāo'], explanation: '“好”表示优点多、令人满意时读 hǎo；“爱好”读 hào。' },
  { grade: 1, type: 'pinyin', prefix: '“只有”的“只”读作：', missing: 'zhǐ', suffix: '', options: ['zhǐ', 'zhī', 'zhì', 'zhí'], explanation: '“只”表示仅仅时读 zhǐ；量词“一只”读 zhī。' },
  { grade: 1, type: 'pinyin', prefix: '“散步”的“散”读作：', missing: 'sàn', suffix: '', options: ['sàn', 'sǎn', 'shàn', 'sān'], explanation: '“散”表示分散、散步时读 sàn；“散文”读 sǎn。' },
  { grade: 1, type: 'pinyin', prefix: '“天空”的“空”读作：', missing: 'kōng', suffix: '', options: ['kōng', 'kòng', 'gōng', 'kǒng'], explanation: '“空”表示天空、空旷时读 kōng；“空白”读 kòng。' },
  { grade: 1, type: 'pinyin', prefix: '“种子”的“种”读作：', missing: 'zhǒng', suffix: '', options: ['zhǒng', 'zhòng', 'chóng', 'zōng'], explanation: '“种”作名词读 zhǒng（种子）；作动词读 zhòng（种地）。' },
  { grade: 1, type: 'pinyin', prefix: '“数一数”的第二个“数”读作：', missing: 'shǔ', suffix: '', options: ['shǔ', 'shù', 'shuò', 'shū'], explanation: '“数”作动词（数数、点数）读 shǔ；作名词（数学）读 shù。' },
  { grade: 1, type: 'pinyin', prefix: '“妈妈”中第二个“妈”读作：', missing: '轻声 ma', suffix: '', options: ['轻声 ma', '第一声 mā', '第四声 mà', '第二声 má'], explanation: '叠音词“妈妈、爸爸、哥哥”中第二个字读轻声。' },

  // -- Typo (看字辨形)
  { grade: 1, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '朋友', suffix: '', options: ['朋友', '朋有', '棚友', '朋支'], explanation: '“朋友”的“友”不要误写成“有”。' },
  { grade: 1, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '已经', suffix: '', options: ['已经', '己经', '巳经', '以经'], explanation: '“已经”的“已”不要与“己、巳”混淆。' },
  { grade: 1, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '今天', suffix: '', options: ['今天', '令天', '巾天', '金天'], explanation: '“今天”的“今”不要误写为“令”。' },
  { grade: 1, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '早上', suffix: '', options: ['早上', '澡上', '枣上', '草上'], explanation: '“早上”表示清晨，注意“早”与“草、枣”的区分。' },
  { grade: 1, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '干净', suffix: '', options: ['干净', '干静', '甘净', '干挣'], explanation: '“干净”的“净”不要写成“静”。' },
  { grade: 1, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '说话', suffix: '', options: ['说话', '说画', '说化', '说华'], explanation: '“说话”的“话”是言字旁。' },
  { grade: 1, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '花朵', suffix: '', options: ['花朵', '花躲', '花剁', '花跺'], explanation: '“花朵”的“朵”不要误写为“躲、跺”。' },
  { grade: 1, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '老师', suffix: '', options: ['老师', '老帅', '老司', '老思'], explanation: '“老师”的“师”不要误写成“帅”。' },
  { grade: 1, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '回家', suffix: '', options: ['回家', '回加', '回佳', '回夹'], explanation: '“回家”的“家”是宝盖头。' },
  { grade: 1, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '树林', suffix: '', options: ['树林', '树琳', '树淋', '树临'], explanation: '“树林”的“林”是双木，表示成片的树。' },

  // -- Poem
  { grade: 1, type: 'poem', prefix: '白 日 依 山 尽，黄 河 入 海 ', missing: '流', suffix: '。', options: ['流', '留', '牛', '楼'], explanation: '唐·王之涣《登鹳雀楼》' },
  { grade: 1, type: 'poem', prefix: '锄 禾 日 当 午，汗 滴 禾 下 ', missing: '土', suffix: '。', options: ['土', '吐', '图', '兔'], explanation: '唐·李绅《悯农》' },
  { grade: 1, type: 'poem', prefix: '举 头 望 明 月，低 头 思 故 ', missing: '乡', suffix: '。', options: ['乡', '相', '香', '享'], explanation: '唐·李白《静夜思》' },
  { grade: 1, type: 'poem', prefix: '夜 来 风 雨 声，花 落 知 多 ', missing: '少', suffix: '。', options: ['少', '小', '绍', '勺'], explanation: '唐·孟浩然《春晓》' },
  { grade: 1, type: 'poem', prefix: '欲 穷 千 里 目，更 上 一 层 ', missing: '楼', suffix: '。', options: ['楼', '漏', '留', '流'], explanation: '唐·王之涣《登鹳雀楼》' },
  { grade: 1, type: 'poem', prefix: '春 眠 不 觉 晓，处 处 闻 啼 ', missing: '鸟', suffix: '。', options: ['鸟', '乌', '岛', '袅'], explanation: '唐·孟浩然《春晓》' },
  { grade: 1, type: 'poem', prefix: '小 荷 才 露 尖 尖 角，早 有 蜻 蜓 立 上 ', missing: '头', suffix: '。', options: ['头', '投', '偷', '透'], explanation: '宋·杨万里《小池》' },
  { grade: 1, type: 'poem', prefix: '远 看 山 有 色，近 听 水 无 ', missing: '声', suffix: '。', options: ['声', '生', '升', '胜'], explanation: '唐·王维《画》' },
  { grade: 1, type: 'poem', prefix: '春 去 花 还 在，人 来 鸟 不 ', missing: '惊', suffix: '。', options: ['惊', '京', '精', '睛'], explanation: '唐·王维《画》' },
  { grade: 1, type: 'poem', prefix: '只 在 此 山 中，云 深 不 知 ', missing: '处', suffix: '。', options: ['处', '出', '初', '触'], explanation: '唐·贾岛《寻隐者不遇》' },

  // ==================== Grade 2 ====================
  // -- Idiom
  { grade: 2, type: 'idiom', prefix: '画 龙 点 ', missing: '睛', suffix: '', options: ['睛', '晴', '精', '清'], explanation: '画龙点睛：比喻写作或讲话在关键处点缀一句，使内容更加生动传神。' },
  { grade: 2, type: 'idiom', prefix: '盲 人 摸 ', missing: '象', suffix: '', options: ['象', '相', '向', '响'], explanation: '盲人摸象：比喻只凭片面的了解就妄下推断。' },
  { grade: 2, type: 'idiom', prefix: '井 底 之 ', missing: '蛙', suffix: '', options: ['蛙', '哇', '娃', '袜'], explanation: '井底之蛙：比喻见识狭隘的人。' },
  { grade: 2, type: 'idiom', prefix: '亡 羊 补 ', missing: '牢', suffix: '', options: ['牢', '捞', '唠', '楼'], explanation: '亡羊补牢：比喻出了问题及时补救，以防更大损失。' },
  { grade: 2, type: 'idiom', prefix: '狐 假 虎 ', missing: '威', suffix: '', options: ['威', '危', '微', '薇'], explanation: '狐假虎威：假借别人的威势来吓唬人。' },
  { grade: 2, type: 'idiom', prefix: '龟 兔 赛 ', missing: '跑', suffix: '', options: ['跑', '抱', '泡', '炮'], explanation: '龟兔赛跑：比喻坚持不懈者往往能胜过骄傲自满者。' },
  { grade: 2, type: 'idiom', prefix: '守 口 如 ', missing: '瓶', suffix: '', options: ['瓶', '平', '屏', '凭'], explanation: '守口如瓶：形容说话谨慎，严守秘密。' },
  { grade: 2, type: 'idiom', prefix: '四 通 八 ', missing: '达', suffix: '', options: ['达', '答', '搭', '打'], explanation: '四通八达：形容交通极其便利。' },
  { grade: 2, type: 'idiom', prefix: '一 举 两 ', missing: '得', suffix: '', options: ['得', '德', '的', '地'], explanation: '一举两得：做一件事得到两方面的好处。' },
  { grade: 2, type: 'idiom', prefix: '惊 弓 之 ', missing: '鸟', suffix: '', options: ['鸟', '乌', '岛', '袅'], explanation: '惊弓之鸟：比喻受过惊吓的人碰到一点动静就非常害怕。' },

  // -- Pinyin
  { grade: 2, type: 'pinyin', prefix: '“沉没”的“没”读作：', missing: 'mò', suffix: '', options: ['mò', 'méi', 'mù', 'mō'], explanation: '“没”表示淹没、沉入水中时读 mò；表示没有时读 méi。' },
  { grade: 2, type: 'pinyin', prefix: '“重阳节”的“重”读作：', missing: 'chóng', suffix: '', options: ['chóng', 'zhòng', 'cóng', 'tóng'], explanation: '“重阳、重复”读 chóng；“重量、沉重”读 zhòng。' },
  { grade: 2, type: 'pinyin', prefix: '“教师”的“教”读作：', missing: 'jiào', suffix: '', options: ['jiào', 'jiāo', 'jiǎo', 'jiáo'], explanation: '名词“教师、教室”读 jiào；动词“教书”读 jiāo。' },
  { grade: 2, type: 'pinyin', prefix: '“时间”的“间”读作：', missing: 'jiān', suffix: '', options: ['jiān', 'jiàn', 'jiǎn', 'xián'], explanation: '“时间、中间”读 jiān；“间隔、间断”读 jiàn。' },
  { grade: 2, type: 'pinyin', prefix: '“必须”的“须”读作：', missing: 'xū', suffix: '', options: ['xū', 'xǔ', 'shū', 'xù'], explanation: '“须”读 xū，注意不要误读为 xǔ。' },
  { grade: 2, type: 'pinyin', prefix: '“答应”的“应”读作：', missing: 'ying（轻声）', suffix: '', options: ['ying（轻声）', 'yīng', 'yìng', 'yíng'], explanation: '“答应”的“应”读轻声；“应该”读 yīng，“反应”读 yìng。' },
  { grade: 2, type: 'pinyin', prefix: '“降落”的“降”读作：', missing: 'jiàng', suffix: '', options: ['jiàng', 'xiáng', 'jiāng', 'xiàng'], explanation: '“降落、下降”读 jiàng；“投降”读 xiáng。' },
  { grade: 2, type: 'pinyin', prefix: '“方便”的“便”读作：', missing: 'biàn', suffix: '', options: ['biàn', 'pián', 'biǎn', 'piàn'], explanation: '“方便、便利”读 biàn；“便宜”读 pián。' },
  { grade: 2, type: 'pinyin', prefix: '“尽管”的“尽”读作：', missing: 'jǐn', suffix: '', options: ['jǐn', 'jìn', 'jīng', 'qín'], explanation: '“尽管、尽量”读 jǐn；“尽力、尽头”读 jìn。' },
  { grade: 2, type: 'pinyin', prefix: '“处理”的“处”读作：', missing: 'chǔ', suffix: '', options: ['chǔ', 'chù', 'chū', 'zhù'], explanation: '“处理、相处”读 chǔ；“地方、到处”读 chù。' },

  // -- Typo (同音字辨析)
  { grade: 2, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '做作业', suffix: '', options: ['做作业', '作作业', '坐作业', '昨作业'], explanation: '“做作业”指进行作业这一动作，用“做”。' },
  { grade: 2, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '在教室里', suffix: '', options: ['在教室里', '再教室里', '载教室里', '哉教室里'], explanation: '表示处所用“在”；表示又一次用“再”。' },
  { grade: 2, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '因为', suffix: '', options: ['因为', '音为', '因位', '阴为'], explanation: '“因为”的“因”是国字框，不要误写为“音、阴”。' },
  { grade: 2, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '知道', suffix: '', options: ['知道', '知到', '枝道', '之道'], explanation: '“知道”的“知”是矢字旁。' },
  { grade: 2, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '非常', suffix: '', options: ['非常', '飞常', '非长', '绯常'], explanation: '“非常”的“非”表示不、不是。' },
  { grade: 2, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '看见', suffix: '', options: ['看见', '看件', '看建', '看健'], explanation: '“看见”的“见”表示看到。' },
  { grade: 2, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '应该', suffix: '', options: ['应该', '因该', '音该', '应刻'], explanation: '“应该”的“应”不要误写为“因、音”。' },
  { grade: 2, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '公园', suffix: '', options: ['公园', '公圆', '公元', '公员'], explanation: '“公园”是供人游览休息的园林，用“园”。' },
  { grade: 2, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '辛苦', suffix: '', options: ['辛苦', '心苦', '新苦', '欣苦'], explanation: '“辛苦”的“辛”表示劳苦，不要写成“心”。' },
  { grade: 2, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '玩具', suffix: '', options: ['玩具', '完具', '顽具', '玩俱'], explanation: '“玩具”的“玩”是王字旁，指供玩耍的东西。' },

  // -- Poem
  { grade: 2, type: 'poem', prefix: '儿童散学归来早，忙趁', missing: '东风', suffix: '放纸鸢。', options: ['东风', '春风', '晨风', '微风'], explanation: '清·高鼎《村居》' },
  { grade: 2, type: 'poem', prefix: '野火烧不尽，春风吹又', missing: '生', suffix: '。', options: ['生', '深', '升', '声'], explanation: '唐·白居易《赋得古原草送别》' },
  { grade: 2, type: 'poem', prefix: '飞流直下三千尺，疑是银河落', missing: '九天', suffix: '。', options: ['九天', '云端', '人间', '高天'], explanation: '唐·李白《望庐山瀑布》' },
  { grade: 2, type: 'poem', prefix: '不知细叶谁裁出，二月春风似', missing: '剪刀', suffix: '。', options: ['剪刀', '刀剪', '彩绸', '画笔'], explanation: '唐·贺知章《咏柳》' },
  { grade: 2, type: 'poem', prefix: '两个黄鹂鸣翠柳，一行白鹭上', missing: '青天', suffix: '。', options: ['青天', '蓝天', '晴空', '碧霄'], explanation: '唐·杜甫《绝句》' },
  { grade: 2, type: 'poem', prefix: '接天莲叶无穷碧，映日荷花别样', missing: '红', suffix: '。', options: ['红', '虹', '宏', '鸿'], explanation: '宋·杨万里《晓出净慈寺送林子方》' },
  { grade: 2, type: 'poem', prefix: '停车坐爱枫林晚，霜叶红于二月', missing: '花', suffix: '。', options: ['花', '华', '画', '哗'], explanation: '唐·杜牧《山行》' },
  { grade: 2, type: 'poem', prefix: '竹外桃花三两枝，春江水暖鸭先', missing: '知', suffix: '。', options: ['知', '枝', '之', '织'], explanation: '宋·苏轼《惠崇春江晚景》' },
  { grade: 2, type: 'poem', prefix: '儿童急走追黄蝶，飞入菜花无处', missing: '寻', suffix: '。', options: ['寻', '询', '巡', '讯'], explanation: '宋·杨万里《宿新市徐公店》' },
  { grade: 2, type: 'poem', prefix: '夜深知雪重，时闻折竹', missing: '声', suffix: '。', options: ['声', '生', '升', '胜'], explanation: '唐·白居易《夜雪》' },

  // ==================== Grade 3 ====================
  // -- Idiom
  { grade: 3, type: 'idiom', prefix: '守 株 ', missing: '待', suffix: ' 兔', options: ['待', '侍', '代', '袋'], explanation: '守株待兔：比喻企图不经过努力而侥幸得到成功。' },
  { grade: 3, type: 'idiom', prefix: '掩 耳 ', missing: '盗', suffix: ' 铃', options: ['盗', '到', '倒', '导'], explanation: '掩耳盗铃：捂住自己的耳朵去偷铃铛，比喻自欺欺人。' },
  { grade: 3, type: 'idiom', prefix: '买 椟 还 ', missing: '珠', suffix: '', options: ['珠', '朱', '株', '诸'], explanation: '买椟还珠：比喻没有眼光，取舍不当。' },
  { grade: 3, type: 'idiom', prefix: '刻 舟 求 ', missing: '剑', suffix: '', options: ['剑', '箭', '健', '鉴'], explanation: '刻舟求剑：比喻不懂事物发展变化而墨守成规。' },
  { grade: 3, type: 'idiom', prefix: '叶 公 好 ', missing: '龙', suffix: '', options: ['龙', '荣', '隆', '珑'], explanation: '叶公好龙：比喻表面上爱好某种事物，实际上并不真正爱好。' },
  { grade: 3, type: 'idiom', prefix: '拔 苗 助 ', missing: '长', suffix: '', options: ['长', '常', '掌', '场'], explanation: '拔苗助长：比喻急于求成，反而把事情弄糟。' },
  { grade: 3, type: 'idiom', prefix: '南 辕 北 ', missing: '辙', suffix: '', options: ['辙', '撤', '彻', '澈'], explanation: '南辕北辙：车辕向南，车辙向北，比喻行动和目的完全相反。' },
  { grade: 3, type: 'idiom', prefix: '惊 天 动 ', missing: '地', suffix: '', options: ['地', '弟', '第', '递'], explanation: '惊天动地：形容声音特别响亮，也形容事业伟大。' },
  { grade: 3, type: 'idiom', prefix: '三 心 二 ', missing: '意', suffix: '', options: ['意', '义', '议', '忆'], explanation: '三心二意：形容犹豫不决或意志不坚定。' },
  { grade: 3, type: 'idiom', prefix: '鹤 立 鸡 ', missing: '群', suffix: '', options: ['群', '裙', '琼', '穷'], explanation: '鹤立鸡群：比喻一个人的仪表或才能在周围一群人里显得很突出。' },

  // -- Pinyin
  { grade: 3, type: 'pinyin', prefix: '“薄弱”的“薄”读作：', missing: 'bó', suffix: '', options: ['bó', 'báo', 'bò', 'bāo'], explanation: '“薄弱、单薄”读 bó；“薄纸”读 báo；“薄荷”读 bò。' },
  { grade: 3, type: 'pinyin', prefix: '“匀称”的“称”读作：', missing: 'chèn', suffix: '', options: ['chèn', 'chēng', 'chèng', 'chén'], explanation: '“匀称、相称”读 chèn；“称呼、称赞”读 chēng。' },
  { grade: 3, type: 'pinyin', prefix: '“盛开”的“盛”读作：', missing: 'shèng', suffix: '', options: ['shèng', 'chéng', 'shēng', 'zhèng'], explanation: '“盛开、茂盛”读 shèng；“盛饭”读 chéng。' },
  { grade: 3, type: 'pinyin', prefix: '“粘住”的“粘”读作：', missing: 'zhān', suffix: '', options: ['zhān', 'nián', 'zhàn', 'niàn'], explanation: '“粘住、粘贴”读 zhān；“粘稠”读 nián。' },
  { grade: 3, type: 'pinyin', prefix: '“宿舍”的“舍”读作：', missing: 'shè', suffix: '', options: ['shè', 'shě', 'shē', 'shé'], explanation: '名词“宿舍、房舍”读 shè；动词“舍弃”读 shě。' },
  { grade: 3, type: 'pinyin', prefix: '“钻研”的“钻”读作：', missing: 'zuān', suffix: '', options: ['zuān', 'zuàn', 'zhuān', 'zuǎn'], explanation: '动词“钻研、钻孔”读 zuān；名词“钻石”读 zuàn。' },
  { grade: 3, type: 'pinyin', prefix: '“调换”的“调”读作：', missing: 'diào', suffix: '', options: ['diào', 'tiáo', 'diāo', 'tiào'], explanation: '“调换、调动”读 diào；“调整、调皮”读 tiáo。' },
  { grade: 3, type: 'pinyin', prefix: '“血型”的“血”读作：', missing: 'xuè', suffix: '', options: ['xuè', 'xiě', 'xuě', 'xiè'], explanation: '书面语“血型、血液”读 xuè；口语“流血了”读 xiě。' },
  { grade: 3, type: 'pinyin', prefix: '“宁可”的“宁”读作：', missing: 'nìng', suffix: '', options: ['nìng', 'níng', 'nǐng', 'nín'], explanation: '“宁可、宁愿”读 nìng；“安宁、宁静”读 níng。' },
  { grade: 3, type: 'pinyin', prefix: '“和谐”的“和”读作：', missing: 'hé', suffix: '', options: ['hé', 'hè', 'huó', 'huò'], explanation: '“和谐、和平”读 hé；“和面”读 huó；“附和”读 hè。' },

  // -- Typo
  { grade: 3, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '川流不息', suffix: '', options: ['川流不息', '穿流不息', '川留不息', '穿留不息'], explanation: '川流不息：“川”意为河流，形容行人、车马接连不断。' },
  { grade: 3, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '按部就班', suffix: '', options: ['按部就班', '按步就班', '按部就斑', '按步就斑'], explanation: '按部就班：“部”指门类次序，“班”指行次位序，不可写成“步”。' },
  { grade: 3, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '提纲挈领', suffix: '', options: ['提纲挈领', '提刚挈领', '提纲契领', '提钢挈领'], explanation: '提纲挈领：“纲”是渔网的总绳，“挈”是提起。' },
  { grade: 3, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '一丝不苟', suffix: '', options: ['一丝不苟', '一丝不狗', '一丝不枸', '一丝不勾'], explanation: '一丝不苟：“苟”是马虎、随便的意思。' },
  { grade: 3, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '心旷神怡', suffix: '', options: ['心旷神怡', '心旷神宜', '心矿神怡', '心旷神移'], explanation: '心旷神怡：“旷”是开阔，“怡”是愉快。' },
  { grade: 3, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '兴高采烈', suffix: '', options: ['兴高采烈', '兴高彩烈', '兴高踩烈', '兴高才烈'], explanation: '兴高采烈：“采”指神采、精神，不是“彩色”的“彩”。' },
  { grade: 3, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '目不转睛', suffix: '', options: ['目不转睛', '目不转晴', '目不转精', '目不转清'], explanation: '目不转睛：“睛”指眼珠，不要写成“晴天”的“晴”。' },
  { grade: 3, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '锲而不舍', suffix: '', options: ['锲而不舍', '契而不舍', '锲而不捨', '契而不捨'], explanation: '锲而不舍：“锲”是雕刻的意思。' },
  { grade: 3, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '莫名其妙', suffix: '', options: ['莫名其妙', '莫明其妙', '莫铭其妙', '莫明奇妙'], explanation: '莫名其妙：“名”是说出、表达的意思。' },
  { grade: 3, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '振聋发聩', suffix: '', options: ['振聋发聩', '震聋发聩', '振聋发溃', '震聋发溃'], explanation: '振聋发聩：“聩”是耳聋，比喻用语言文字唤醒糊涂的人。' },

  // -- Poem
  { grade: 3, type: 'poem', prefix: '水光潋滟晴方好，山色空蒙雨亦', missing: '奇', suffix: '。', options: ['奇', '琪', '期', '齐'], explanation: '宋·苏轼《饮湖上初晴后雨》' },
  { grade: 3, type: 'poem', prefix: '借问酒家何处有，牧童遥指', missing: '杏花', suffix: '村。', options: ['杏花', '桃花', '梨花', '梅花'], explanation: '唐·杜牧《清明》' },
  { grade: 3, type: 'poem', prefix: '独在异乡为异客，每逢', missing: '佳节', suffix: '倍思亲。', options: ['佳节', '中秋', '岁末', '重阳'], explanation: '唐·王维《九月九日忆山东兄弟》' },
  { grade: 3, type: 'poem', prefix: '遥知兄弟登高处，遍插茱萸少一', missing: '人', suffix: '。', options: ['人', '仁', '认', '任'], explanation: '唐·王维《九月九日忆山东兄弟》' },
  { grade: 3, type: 'poem', prefix: '劝君更尽一杯酒，西出阳关无', missing: '故人', suffix: '。', options: ['故人', '古人', '路人', '知音'], explanation: '唐·王维《送元二使安西》' },
  { grade: 3, type: 'poem', prefix: '谁知盘中餐，粒粒皆', missing: '辛苦', suffix: '。', options: ['辛苦', '辛劳', '劳苦', '艰苦'], explanation: '唐·李绅《悯农》' },
  { grade: 3, type: 'poem', prefix: '迟日江山丽，春风花草', missing: '香', suffix: '。', options: ['香', '乡', '相', '厢'], explanation: '唐·杜甫《绝句》' },
  { grade: 3, type: 'poem', prefix: '不知明镜里，何处得秋', missing: '霜', suffix: '。', options: ['霜', '双', '爽', '孀'], explanation: '唐·李白《秋浦歌》' },
  { grade: 3, type: 'poem', prefix: '天门中断楚江开，碧水东流至此', missing: '回', suffix: '。', options: ['回', '会', '汇', '晖'], explanation: '唐·李白《望天门山》' },
  { grade: 3, type: 'poem', prefix: '两岸青山相对出，孤帆一片日边', missing: '来', suffix: '。', options: ['来', '莱', '徕', '赖'], explanation: '唐·李白《望天门山》' },

  // ==================== Grade 4 ====================
  // -- Idiom
  { grade: 4, type: 'idiom', prefix: '卧 薪 尝 ', missing: '胆', suffix: '', options: ['胆', '诞', '蛋', '淡'], explanation: '卧薪尝胆：形容人刻苦自励，发奋图强。出自越王勾践的故事。' },
  { grade: 4, type: 'idiom', prefix: '完 璧 归 ', missing: '赵', suffix: '', options: ['赵', '照', '兆', '召'], explanation: '完璧归赵：比喻把原物完好无损地归还原主。' },
  { grade: 4, type: 'idiom', prefix: '风 声 鹤 ', missing: '唳', suffix: '', options: ['唳', '泪', '立', '例'], explanation: '风声鹤唳：形容极端惊恐疑惧。' },
  { grade: 4, type: 'idiom', prefix: '四 面 楚 ', missing: '歌', suffix: '', options: ['歌', '割', '格', '鸽'], explanation: '四面楚歌：比喻陷入四面受敌、孤立无援的困境。' },
  { grade: 4, type: 'idiom', prefix: '指 鹿 为 ', missing: '马', suffix: '', options: ['马', '码', '玛', '骂'], explanation: '指鹿为马：比喻颠倒黑白，混淆是非。' },
  { grade: 4, type: 'idiom', prefix: '纸 上 谈 ', missing: '兵', suffix: '', options: ['兵', '冰', '并', '丙'], explanation: '纸上谈兵：比喻空谈理论，不能解决实际问题。' },
  { grade: 4, type: 'idiom', prefix: '背 水 一 ', missing: '战', suffix: '', options: ['战', '站', '占', '栈'], explanation: '背水一战：比喻决一死战，在绝境中求胜。' },
  { grade: 4, type: 'idiom', prefix: '望 梅 止 ', missing: '渴', suffix: '', options: ['渴', '喝', '刻', '客'], explanation: '望梅止渴：比喻用空想安慰自己。' },
  { grade: 4, type: 'idiom', prefix: '破 釜 沉 ', missing: '舟', suffix: '', options: ['舟', '州', '周', '洲'], explanation: '破釜沉舟：比喻下定决心，不顾一切干到底。' },
  { grade: 4, type: 'idiom', prefix: '草 木 皆 ', missing: '兵', suffix: '', options: ['兵', '冰', '并', '丙'], explanation: '草木皆兵：形容人在极度惊恐时疑神疑鬼。' },

  // -- Pinyin
  { grade: 4, type: 'pinyin', prefix: '“血泊”的“泊”读作：', missing: 'pō', suffix: '', options: ['pō', 'bó', 'pò', 'bāo'], explanation: '“血泊”读 pō；“停泊、湖泊”读 bó。' },
  { grade: 4, type: 'pinyin', prefix: '“模样”的“模”读作：', missing: 'mú', suffix: '', options: ['mú', 'mó', 'mǔ', 'mù'], explanation: '“模样、模具”读 mú；“模型、模仿”读 mó。' },
  { grade: 4, type: 'pinyin', prefix: '“教室”的“室”读作：', missing: 'shì', suffix: '', options: ['shì', 'shí', 'shǐ', 'shī'], explanation: '“室”读 shì，是第四声，注意不要读成第三声。' },
  { grade: 4, type: 'pinyin', prefix: '“号召”的“召”读作：', missing: 'zhào', suffix: '', options: ['zhào', 'zhāo', 'zháo', 'zhuō'], explanation: '“号召、召开”读 zhào。' },
  { grade: 4, type: 'pinyin', prefix: '“倔强”的“强”读作：', missing: 'jiàng', suffix: '', options: ['jiàng', 'qiáng', 'qiǎng', 'jiāng'], explanation: '“倔强”读 jiàng；“强大”读 qiáng；“勉强”读 qiǎng。' },
  { grade: 4, type: 'pinyin', prefix: '“秘鲁”的“秘”读作：', missing: 'bì', suffix: '', options: ['bì', 'mì', 'bèi', 'mí'], explanation: '国名“秘鲁”读 bì lǔ；“秘密”读 mì。' },
  { grade: 4, type: 'pinyin', prefix: '“给予”的“给”读作：', missing: 'jǐ', suffix: '', options: ['jǐ', 'gěi', 'jì', 'géi'], explanation: '书面语“给予、供给”读 jǐ；口语“给你”读 gěi。' },
  { grade: 4, type: 'pinyin', prefix: '“卡片”的“卡”读作：', missing: 'kǎ', suffix: '', options: ['kǎ', 'qiǎ', 'kā', 'qiá'], explanation: '“卡片、卡通”读 kǎ；“关卡”读 qiǎ。' },
  { grade: 4, type: 'pinyin', prefix: '“爪牙”的“爪”读作：', missing: 'zhǎo', suffix: '', options: ['zhǎo', 'zhuǎ', 'zhāo', 'zhuā'], explanation: '“爪牙、鹰爪”读 zhǎo；“爪子”读 zhuǎ。' },
  { grade: 4, type: 'pinyin', prefix: '“露脸”的“露”读作：', missing: 'lòu', suffix: '', options: ['lòu', 'lù', 'lóu', 'lǒu'], explanation: '口语“露脸、露馅”读 lòu；“露水、显露”读 lù。' },

  // -- Typo
  { grade: 4, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '破釜沉舟', suffix: '', options: ['破釜沉舟', '破斧沉舟', '破服沉舟', '破甫沉舟'], explanation: '破釜沉舟：“釜”是古代的锅。' },
  { grade: 4, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '再接再厉', suffix: '', options: ['再接再厉', '再接再励', '再接再利', '再接再立'], explanation: '再接再厉：“厉”同“砺”，磨快刀刃，常被误写为“励”。' },
  { grade: 4, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '滥竽充数', suffix: '', options: ['滥竽充数', '滥芋充数', '烂竽充数', '滥竿充数'], explanation: '滥竽充数：“竽”是古代管乐器，不可写成“芋头”的“芋”。' },
  { grade: 4, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '旁征博引', suffix: '', options: ['旁征博引', '旁证博引', '旁征搏引', '旁证搏引'], explanation: '旁征博引：“征”是引证、验证的意思。' },
  { grade: 4, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '走投无路', suffix: '', options: ['走投无路', '走头无路', '走偷无路', '走透无路'], explanation: '走投无路：“投”是投奔的意思，不是“头”。' },
  { grade: 4, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '不计其数', suffix: '', options: ['不计其数', '不记其数', '不计奇书', '不际其数'], explanation: '不计其数：“计”是计算的意思。' },
  { grade: 4, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '变本加厉', suffix: '', options: ['变本加厉', '变本加励', '变本加利', '变本加立'], explanation: '变本加厉：“厉”是猛烈的意思。' },
  { grade: 4, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '川流不息', suffix: '', options: ['川流不息', '穿流不息', '川流不熄', '穿流不熄'], explanation: '川流不息：“息”是停止的意思。' },
  { grade: 4, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '星罗棋布', suffix: '', options: ['星罗棋布', '星罗其布', '星罗旗布', '星罗启布'], explanation: '星罗棋布：像星星和棋子那样散布，形容数量多而密集。' },
  { grade: 4, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '相形见绌', suffix: '', options: ['相形见绌', '相形见拙', '相形见出', '相形见黜'], explanation: '相形见绌：“绌”是不足、不够的意思。' },

  // -- Poem
  { grade: 4, type: 'poem', prefix: '不识庐山真面目，只缘身在', missing: '此山', suffix: '中。', options: ['此山', '云雾', '深山', '青天'], explanation: '宋·苏轼《题西林壁》' },
  { grade: 4, type: 'poem', prefix: '生当作人杰，死亦为', missing: '鬼雄', suffix: '。', options: ['鬼雄', '英雄', '枭雄', '神明'], explanation: '宋·李清照《夏日绝句》' },
  { grade: 4, type: 'poem', prefix: '忽如一夜春风来，千树万树', missing: '梨花', suffix: '开。', options: ['梨花', '桃花', '雪花', '白花'], explanation: '唐·岑参《白雪歌送武判官归京》' },
  { grade: 4, type: 'poem', prefix: '秦时明月汉时关，万里长征人未', missing: '还', suffix: '。', options: ['还', '环', '缓', '换'], explanation: '唐·王昌龄《出塞》' },
  { grade: 4, type: 'poem', prefix: '但使龙城飞将在，不教胡马度', missing: '阴山', suffix: '。', options: ['阴山', '燕山', '青山', '阴关'], explanation: '唐·王昌龄《出塞》' },
  { grade: 4, type: 'poem', prefix: '黄沙百战穿金甲，不破楼兰终不', missing: '还', suffix: '。', options: ['还', '环', '缓', '换'], explanation: '唐·王昌龄《从军行》' },
  { grade: 4, type: 'poem', prefix: '莫愁前路无知己，天下谁人不识', missing: '君', suffix: '。', options: ['君', '军', '均', '菌'], explanation: '唐·高适《别董大》' },
  { grade: 4, type: 'poem', prefix: '醉卧沙场君莫笑，古来征战几人', missing: '回', suffix: '。', options: ['回', '会', '汇', '晖'], explanation: '唐·王翰《凉州词》' },
  { grade: 4, type: 'poem', prefix: '葡萄美酒夜光杯，欲饮琵琶马上', missing: '催', suffix: '。', options: ['催', '摧', '崔', '璀'], explanation: '唐·王翰《凉州词》' },
  { grade: 4, type: 'poem', prefix: '横看成岭侧成峰，远近高低各不', missing: '同', suffix: '。', options: ['同', '铜', '桐', '筒'], explanation: '宋·苏轼《题西林壁》' },

  // ==================== Grade 5 ====================
  // -- Idiom
  { grade: 5, type: 'idiom', prefix: '邯 郸 学 ', missing: '步', suffix: '', options: ['步', '布', '部', '不'], explanation: '邯郸学步：比喻模仿别人不成，反而丧失了原有的技能。' },
  { grade: 5, type: 'idiom', prefix: '杞 人 忧 ', missing: '天', suffix: '', options: ['天', '添', '填', '田'], explanation: '杞人忧天：比喻缺乏根据和不必要的忧虑。' },
  { grade: 5, type: 'idiom', prefix: '入 木 三 ', missing: '分', suffix: '', options: ['分', '份', '风', '峰'], explanation: '入木三分：形容书法笔力雄健，也比喻分析问题深刻精辟。' },
  { grade: 5, type: 'idiom', prefix: '沧 海 一 ', missing: '粟', suffix: '', options: ['粟', '栗', '素', '速'], explanation: '沧海一粟：大海里的一颗谷粒，比喻非常渺小。' },
  { grade: 5, type: 'idiom', prefix: '脍 炙 人 ', missing: '口', suffix: '', options: ['口', '手', '头', '心'], explanation: '脍炙人口：比喻好的诗文或事物受人称赞传诵。' },
  { grade: 5, type: 'idiom', prefix: '鳞 次 栉 ', missing: '比', suffix: '', options: ['比', '彼', '笔', '必'], explanation: '鳞次栉比：像鱼鳞和梳齿那样紧密而整齐地排列着，多形容房屋密集。' },
  { grade: 5, type: 'idiom', prefix: '心 无 旁 ', missing: '骛', suffix: '', options: ['骛', '鹜', '务', '雾'], explanation: '心无旁骛：心里没有另外的追求，形容心思集中、专心致志。' },
  { grade: 5, type: 'idiom', prefix: '曲 高 和 ', missing: '寡', suffix: '', options: ['寡', '刮', '挂', '瓜'], explanation: '曲高和寡：曲调越高深，能跟着唱的人越少，比喻知音难觅。' },
  { grade: 5, type: 'idiom', prefix: '大 相 径 ', missing: '庭', suffix: '', options: ['庭', '廷', '亭', '停'], explanation: '大相径庭：形容彼此相差很远，大不相同。' },
  { grade: 5, type: 'idiom', prefix: '炙 手 可 ', missing: '热', suffix: '', options: ['热', '垫', '势', '执'], explanation: '炙手可热：手一挨近就感觉热，比喻气焰很盛，权势很大。' },

  // -- Pinyin
  { grade: 5, type: 'pinyin', prefix: '“咽喉”与“呜咽”的读音依次为：', missing: 'yān / yè', suffix: '', options: ['yān / yè', 'yān / yān', 'yàn / yè', 'yè / yān'], explanation: '咽喉读 yān；下咽读 yàn；呜咽读 yè。' },
  { grade: 5, type: 'pinyin', prefix: '“参差不齐”中的“参”读作：', missing: 'cēn', suffix: '', options: ['cēn', 'cān', 'shēn', 'càn'], explanation: '“参差”是连绵词，读 cēn cī。' },
  { grade: 5, type: 'pinyin', prefix: '“冠冕堂皇”中的“冠”读作：', missing: 'guān', suffix: '', options: ['guān', 'guàn', 'guǎn', 'guāng'], explanation: '作名词（帽子、冠冕）读 guān；作动词或称号（冠军）读 guàn。' },
  { grade: 5, type: 'pinyin', prefix: '“载歌载舞”中的“载”读作：', missing: 'zài', suffix: '', options: ['zài', 'zǎi', 'zāi', 'zǎn'], explanation: '“载歌载舞、装载”读 zài；“记载、一年半载”读 zǎi。' },
  { grade: 5, type: 'pinyin', prefix: '“否极泰来”中的“否”读作：', missing: 'pǐ', suffix: '', options: ['pǐ', 'fǒu', 'fōu', 'bǐ'], explanation: '“否极泰来”读 pǐ，是《易经》卦名；“否定”读 fǒu。' },
  { grade: 5, type: 'pinyin', prefix: '“博闻强识”中的“识”读作：', missing: 'zhì', suffix: '', options: ['zhì', 'shí', 'zhī', 'shì'], explanation: '“博闻强识”的“识”同“志”，读 zhì，意为记住。' },
  { grade: 5, type: 'pinyin', prefix: '“浑身解数”中的“解”读作：', missing: 'xiè', suffix: '', options: ['xiè', 'jiě', 'jiè', 'xiě'], explanation: '“浑身解数”指武术的架势，读 xiè；“解答”读 jiě。' },
  { grade: 5, type: 'pinyin', prefix: '“一曝十寒”中的“曝”读作：', missing: 'pù', suffix: '', options: ['pù', 'bào', 'pú', 'bó'], explanation: '“一曝十寒”读 pù，意为晒；“曝光”读 bào。' },
  { grade: 5, type: 'pinyin', prefix: '“直言不讳”中的“讳”读作：', missing: 'huì', suffix: '', options: ['huì', 'huǐ', 'wěi', 'huī'], explanation: '“讳”读 huì，意为隐瞒、避忌。' },
  { grade: 5, type: 'pinyin', prefix: '“蛊惑人心”中的“蛊”读作：', missing: 'gǔ', suffix: '', options: ['gǔ', 'gū', 'gù', 'zhōng'], explanation: '“蛊”读 gǔ，古代传说中害人的毒虫。' },

  // -- Typo
  { grade: 5, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '悬梁刺股', suffix: '', options: ['悬梁刺股', '悬梁刺骨', '悬粱刺股', '悬梁次股'], explanation: '悬梁刺股：“股”是大腿，出自孙敬和苏秦苦读的典故。' },
  { grade: 5, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '韦编三绝', suffix: '', options: ['韦编三绝', '苇编三绝', '伟编三绝', '违编三绝'], explanation: '韦编三绝：“韦”是熟牛皮，指串连竹简的皮绳。' },
  { grade: 5, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '相辅相成', suffix: '', options: ['相辅相成', '相辅相承', '相付相成', '相扶相成'], explanation: '相辅相成：互相补充，互相配合。' },
  { grade: 5, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '迫不得已', suffix: '', options: ['迫不得已', '迫不待已', '破不得已', '迫不得以'], explanation: '迫不得已：被逼得没有办法，不得不这样。' },
  { grade: 5, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '一如既往', suffix: '', options: ['一如既往', '一如即往', '一如继往', '一如概往'], explanation: '一如既往：“既往”指过去。' },
  { grade: 5, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '呕心沥血', suffix: '', options: ['呕心沥血', '沤心沥血', '呕心历血', '欧心沥血'], explanation: '呕心沥血：“呕”是吐，“沥”是滴，形容费尽心思。' },
  { grade: 5, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '融会贯通', suffix: '', options: ['融会贯通', '融汇贯通', '溶会贯通', '融会惯通'], explanation: '融会贯通：“会”是领会、理解，不是“汇合”的“汇”。' },
  { grade: 5, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '络绎不绝', suffix: '', options: ['络绎不绝', '络驿不绝', '落绎不绝', '络择不绝'], explanation: '络绎不绝：形容行人车马来来往往，接连不断。' },
  { grade: 5, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '不胫而走', suffix: '', options: ['不胫而走', '不径而走', '不经而走', '不敬而走'], explanation: '不胫而走：“胫”是小腿，没有腿却能跑，形容传播迅速。' },
  { grade: 5, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '集思广益', suffix: '', options: ['集思广益', '集思广议', '积思广益', '集思广意'], explanation: '集思广益：集中众人的智慧，广泛吸取有益意见。' },

  // -- Poem
  { grade: 5, type: 'poem', prefix: '落霞与孤鹜齐飞，秋水共长天一', missing: '色', suffix: '。', options: ['色', '澈', '碧', '空'], explanation: '唐·王勃《滕王阁序》' },
  { grade: 5, type: 'poem', prefix: '山重水复疑无路，柳暗花明又一', missing: '村', suffix: '。', options: ['村', '春', '峰', '程'], explanation: '宋·陆游《游山西村》' },
  { grade: 5, type: 'poem', prefix: '王师北定中原日，家祭无忘告乃', missing: '翁', suffix: '。', options: ['翁', '宗', '公', '亲'], explanation: '宋·陆游《示儿》' },
  { grade: 5, type: 'poem', prefix: '死去元知万事空，但悲不见九州', missing: '同', suffix: '。', options: ['同', '铜', '彤', '童'], explanation: '宋·陆游《示儿》' },
  { grade: 5, type: 'poem', prefix: '人生自古谁无死，留取丹心照', missing: '汗青', suffix: '。', options: ['汗青', '史册', '青史', '乾坤'], explanation: '宋·文天祥《过零丁洋》' },
  { grade: 5, type: 'poem', prefix: '苟利国家生死以，岂因祸福避', missing: '趋之', suffix: '。', options: ['趋之', '趋避', '趋赴', '避之'], explanation: '清·林则徐《赴戍登程口占示家人》' },
  { grade: 5, type: 'poem', prefix: '先天下之忧而忧，后天下之乐而', missing: '乐', suffix: '。', options: ['乐', '悦', '欢', '喜'], explanation: '宋·范仲淹《岳阳楼记》' },
  { grade: 5, type: 'poem', prefix: '不要人夸好颜色，只留清气满', missing: '乾坤', suffix: '。', options: ['乾坤', '天地', '人间', '江山'], explanation: '元·王冕《墨梅》' },
  { grade: 5, type: 'poem', prefix: '千磨万击还坚劲，任尔东西南北', missing: '风', suffix: '。', options: ['风', '封', '峰', '丰'], explanation: '清·郑燮《竹石》' },
  { grade: 5, type: 'poem', prefix: '粉骨碎身浑不怕，要留清白在人', missing: '间', suffix: '。', options: ['间', '坚', '肩', '简'], explanation: '明·于谦《石灰吟》' },

  // ==================== Grade 6 ====================
  // -- Idiom
  { grade: 6, type: 'idiom', prefix: '相 形 见 ', missing: '绌', suffix: '', options: ['绌', '拙', '黜', '出'], explanation: '相形见绌：互相比较之下显出缺陷或不足。' },
  { grade: 6, type: 'idiom', prefix: '吹 毛 求 ', missing: '疵', suffix: '', options: ['疵', '次', '刺', '慈'], explanation: '吹毛求疵：故意挑剔毛病，寻找差错。' },
  { grade: 6, type: 'idiom', prefix: '殚 精 竭 ', missing: '虑', suffix: '', options: ['虑', '滤', '虏', '掳'], explanation: '殚精竭虑：形容用尽精力、费尽心思。' },
  { grade: 6, type: 'idiom', prefix: '焚 膏 继 ', missing: '晷', suffix: '', options: ['晷', '咎', '旧', '轨'], explanation: '焚膏继晷：点灯接着白天，形容勤奋地学习或工作。' },
  { grade: 6, type: 'idiom', prefix: '捉 襟 见 ', missing: '肘', suffix: '', options: ['肘', '帚', '纣', '皱'], explanation: '捉襟见肘：拉一下衣襟就露出胳膊肘，形容衣服破烂，也比喻顾此失彼。' },
  { grade: 6, type: 'idiom', prefix: '醍 醐 灌 ', missing: '顶', suffix: '', options: ['顶', '鼎', '订', '定'], explanation: '醍醐灌顶：比喻听了高明的意见使人受到很大启发。' },
  { grade: 6, type: 'idiom', prefix: '流 连 忘 ', missing: '返', suffix: '', options: ['返', '反', '饭', '犯'], explanation: '流连忘返：留恋不止，舍不得离去。' },
  { grade: 6, type: 'idiom', prefix: '韬 光 养 ', missing: '晦', suffix: '', options: ['晦', '悔', '诲', '毁'], explanation: '韬光养晦：比喻隐藏才能，不使外露。' },
  { grade: 6, type: 'idiom', prefix: '海 市 蜃 ', missing: '楼', suffix: '', options: ['楼', '漏', '搂', '陋'], explanation: '海市蜃楼：比喻虚幻的事物。' },
  { grade: 6, type: 'idiom', prefix: '不 落 窠 ', missing: '臼', suffix: '', options: ['臼', '旧', '究', '舅'], explanation: '不落窠臼：比喻有独创风格，不落旧套。' },

  // -- Pinyin
  { grade: 6, type: 'pinyin', prefix: '“暴殄天物”的“殄”读作：', missing: 'tiǎn', suffix: '', options: ['tiǎn', 'zhēn', 'diàn', 'tián'], explanation: '“殄”读 tiǎn，意为灭绝。' },
  { grade: 6, type: 'pinyin', prefix: '“一叶扁舟”的“扁”读作：', missing: 'piān', suffix: '', options: ['piān', 'biǎn', 'biàn', 'pián'], explanation: '“扁舟”读 piān，指小船；“扁豆”读 biǎn。' },
  { grade: 6, type: 'pinyin', prefix: '“螳臂当车”的“当”读作：', missing: 'dāng', suffix: '', options: ['dāng', 'dàng', 'dǎng', 'tāng'], explanation: '“螳臂当车”的“当”读 dāng，意为阻挡。' },
  { grade: 6, type: 'pinyin', prefix: '“家给人足”的“给”读作：', missing: 'jǐ', suffix: '', options: ['jǐ', 'gěi', 'jì', 'géi'], explanation: '“家给人足”读 jǐ，意为富裕充足。' },
  { grade: 6, type: 'pinyin', prefix: '“数见不鲜”的“数”读作：', missing: 'shuò', suffix: '', options: ['shuò', 'shù', 'shǔ', 'shū'], explanation: '“数见不鲜”的“数”读 shuò，意为屡次。' },
  { grade: 6, type: 'pinyin', prefix: '“差强人意”的“差”读作：', missing: 'chā', suffix: '', options: ['chā', 'chà', 'chāi', 'cī'], explanation: '“差强人意”读 chā，意为大致、稍微，指大体上还能使人满意。' },
  { grade: 6, type: 'pinyin', prefix: '“破绽百出”的“绽”读作：', missing: 'zhàn', suffix: '', options: ['zhàn', 'dìng', 'zhǎn', 'zàn'], explanation: '“绽”读 zhàn，意为裂开。' },
  { grade: 6, type: 'pinyin', prefix: '“鳞次栉比”的“栉”读作：', missing: 'zhì', suffix: '', options: ['zhì', 'jié', 'zhí', 'chì'], explanation: '“栉”读 zhì，指梳子、篦子的总称。' },
  { grade: 6, type: 'pinyin', prefix: '“掎角之势”的“掎”读作：', missing: 'jǐ', suffix: '', options: ['jǐ', 'jī', 'yǐ', 'qí'], explanation: '“掎”读 jǐ，意为拖住、牵制。' },
  { grade: 6, type: 'pinyin', prefix: '“椎心泣血”的“椎”读作：', missing: 'chuí', suffix: '', options: ['chuí', 'zhuī', 'zhì', 'tuī'], explanation: '“椎心”读 chuí，意为捶胸，形容极度悲痛。' },

  // -- Typo
  { grade: 6, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '世外桃源', suffix: '', options: ['世外桃源', '世外桃园', '市外桃源', '世外园林'], explanation: '世外桃源：“源”指水源，借指桃花源，不可写成植物园的“园”。' },
  { grade: 6, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '墨守成规', suffix: '', options: ['墨守成规', '默守成规', '墨守陈规', '默守陈规'], explanation: '墨守成规：源于墨子善于守城，写作“墨”，非“默”。' },
  { grade: 6, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '美轮美奂', suffix: '', options: ['美轮美奂', '美仑美奂', '美伦美奂', '美轮美换'], explanation: '美轮美奂：形容房屋高大众多，富丽堂皇。轮，高大；奂，众多。' },
  { grade: 6, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '声名鹊起', suffix: '', options: ['声名鹊起', '声名雀起', '声名确起', '声名缺起'], explanation: '声名鹊起：像喜鹊一样飞起，形容名声迅速提高。' },
  { grade: 6, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '含辛茹苦', suffix: '', options: ['含辛茹苦', '含心茹苦', '含辛如苦', '含欣茹苦'], explanation: '含辛茹苦：忍受辛苦。“辛”指辣，“茹”是吃。' },
  { grade: 6, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '焕然一新', suffix: '', options: ['焕然一新', '换然一新', '涣然一新', '唤然一新'], explanation: '焕然一新：“焕然”指鲜明光亮的样子。' },
  { grade: 6, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '翻云覆雨', suffix: '', options: ['翻云覆雨', '翻云复雨', '反云覆雨', '翻云腹雨'], explanation: '翻云覆雨：比喻反复无常或玩弄手段。' },
  { grade: 6, type: 'typo', prefix: '选出字形【全部正确】的一项：', missing: '直截了当', suffix: '', options: ['直截了当', '直接了当', '直捷了当', '直结了当'], explanation: '直截了当：“截”是切断的意思，形容说话做事爽快。' },
  { grade: 6, type: 'typo', prefix: '下列词语【没有错别字】的一项是：', missing: '出类拔萃', suffix: '', options: ['出类拔萃', '出类拔粹', '出类拨萃', '出类拔翠'], explanation: '出类拔萃：“萃”是聚在一起的人或物。' },
  { grade: 6, type: 'typo', prefix: '下面哪一组词语【书写正确】？', missing: '明察秋毫', suffix: '', options: ['明察秋毫', '明查秋毫', '名察秋毫', '明擦秋毫'], explanation: '明察秋毫：“察”是观察、看清楚。' },

  // -- Poem
  { grade: 6, type: 'poem', prefix: '纸上得来终觉浅，绝知此事要', missing: '躬行', suffix: '。', options: ['躬行', '力行', '笃行', '践行'], explanation: '宋·陆游《冬夜读书示子聿》' },
  { grade: 6, type: 'poem', prefix: '千淘万漉虽辛苦，吹尽狂沙始到', missing: '金', suffix: '。', options: ['金', '真', '心', '津'], explanation: '唐·刘禹锡《浪淘沙》' },
  { grade: 6, type: 'poem', prefix: '沉舟侧畔千帆过，病树前头万木', missing: '春', suffix: '。', options: ['春', '生', '荣', '青'], explanation: '唐·刘禹锡《酬乐天扬州初逢席上见赠》' },
  { grade: 6, type: 'poem', prefix: '落红不是无情物，化作春泥更护', missing: '花', suffix: '。', options: ['花', '华', '画', '哗'], explanation: '清·龚自珍《己亥杂诗》' },
  { grade: 6, type: 'poem', prefix: '我劝天公重抖擞，不拘一格降', missing: '人才', suffix: '。', options: ['人才', '人材', '人财', '英才'], explanation: '清·龚自珍《己亥杂诗》' },
  { grade: 6, type: 'poem', prefix: '会当凌绝顶，一览众山', missing: '小', suffix: '。', options: ['小', '晓', '筱', '消'], explanation: '唐·杜甫《望岳》' },
  { grade: 6, type: 'poem', prefix: '长风破浪会有时，直挂云帆济', missing: '沧海', suffix: '。', options: ['沧海', '苍海', '大海', '东海'], explanation: '唐·李白《行路难》' },
  { grade: 6, type: 'poem', prefix: '无边落木萧萧下，不尽长江滚滚', missing: '来', suffix: '。', options: ['来', '莱', '徕', '赖'], explanation: '唐·杜甫《登高》' },
  { grade: 6, type: 'poem', prefix: '春风又绿江南岸，明月何时照我', missing: '还', suffix: '。', options: ['还', '环', '缓', '换'], explanation: '宋·王安石《泊船瓜洲》' },
  { grade: 6, type: 'poem', prefix: '但愿人长久，千里共', missing: '婵娟', suffix: '。', options: ['婵娟', '蝉娟', '婵捐', '缠娟'], explanation: '宋·苏轼《水调歌头》' },
];

// Full bank: handwritten (curated) + generated (data-table driven).
export const RAW_QUESTION_BANK = [...HANDWRITTEN_QUESTION_BANK, ...GENERATED_QUESTION_BANK];

// ---------------------------------------------------------------- Generation helpers
export function shuffle(array, rng = Math.random) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Pick the index of an option list that is NOT the answer, for a wrong-option pool.
function buildOptions(item, rng) {
  const correct = item.missing;
  const pool = item.options.filter((o) => o !== correct);
  const distractors = shuffle(pool, rng);
  const picked = [correct];
  for (const d of distractors) {
    if (picked.length >= 4) break;
    if (!picked.includes(d)) picked.push(d);
  }
  // If the bank had fewer than 3 distinct distractors, borrow from same-type items.
  if (picked.length < 4) {
    const siblings = RAW_QUESTION_BANK.filter((q) => q.type === item.type && q.missing !== correct);
    const fallback = shuffle(siblings.map((q) => q.missing), rng);
    for (const d of fallback) {
      if (picked.length >= 4) break;
      if (!picked.includes(d)) picked.push(d);
    }
  }
  return shuffle(picked, rng);
}

/**
 * Builds a problem object compatible with dopa-drill's engine.
 */
export function buildChineseProblem(item, rng = Math.random) {
  const options = buildOptions(item, rng);
  const title = item.type === 'idiom' ? '成语速记' :
                item.type === 'typo' ? '错别字辨析' :
                item.type === 'pinyin' ? '读音速辨' : '名句填空';

  const cells = [];
  const lines = [];
  const preText = item.prefix || '';
  const postText = item.suffix || '';
  const missingText = item.missing;

  cells.push({ id: 'ch-pre', r: 1, c: 0, cs: 3, text: preText, kind: 'given', cls: 'ch-text ch-pre' });
  cells.push({ id: 'ch-target', r: 1, c: 3, cs: 2, text: missingText, kind: 'input', cls: 'ch-target' });
  if (postText) cells.push({ id: 'ch-post', r: 1, c: 5, cs: 2, text: postText, kind: 'given', cls: 'ch-text ch-post' });

  const steps = [
    { cell: 'ch-target', digit: missingText, label: '请选出正确选项', help: { text: item.explanation } }
  ];

  return {
    kind: 'chinese',
    subject: 'chinese',
    subType: item.type,
    title,
    text: `${preText}[ ? ]${postText}`,
    rawQuestion: item,
    options,
    answer: missingText,
    answerText: item.missing,
    explanation: item.explanation,
    rows: 3,
    cols: 7,
    cells,
    lines,
    steps,
    bracket: null,
  };
}

// A stable id for a bank item, used to remember what the player has already seen.
export function questionId(item) {
  return `${item.grade}|${item.type}|${item.prefix}|${item.missing}`;
}

/**
 * A no-repeat question picker. It draws from the bank without repeating an item
 * until the pool is exhausted, and it can also skip items the player has already
 * seen in previous sessions (passed in as a Set of ids).
 */
export class ChineseDeck {
  constructor(rng = Math.random, filter = null, seenIds = null) {
    this.rng = rng;
    this.filter = filter;
    this.seen = seenIds instanceof Set ? seenIds : new Set(seenIds || []);
    this.pool = [];
    this.roundUsed = [];
  }

  _source() {
    return this.filter ? RAW_QUESTION_BANK.filter(this.filter) : RAW_QUESTION_BANK;
  }

  /** Draw the next problem, preferring items not yet seen by the player. */
  next() {
    if (!this.pool.length) {
      const src = this._source();
      // Tier 1: never seen before. Tier 2: not used this round. Tier 3: anything.
      const unseen = src.filter((q) => !this.seen.has(questionId(q)) && !this.roundUsed.includes(q));
      const fresh = src.filter((q) => !this.roundUsed.includes(q));
      const base = unseen.length ? unseen : (fresh.length ? fresh : src);
      if (!unseen.length && !fresh.length) this.roundUsed = [];
      this.pool = shuffle(base, this.rng);
    }
    const item = this.pool.pop();
    if (!this.roundUsed.includes(item)) this.roundUsed.push(item);
    return buildChineseProblem(item, this.rng);
  }

  /** The id of the last drawn item, for persisting "already seen" state. */
  static idOf(problem) {
    return problem && problem.rawQuestion ? questionId(problem.rawQuestion) : null;
  }
}

/** Get a batch of questions for a grade (used by grade mode). */
export function getQuestionsForGrade(grade, count = 10, rng = Math.random, seenIds = null) {
  const deck = new ChineseDeck(rng, (q) => q.grade === grade, seenIds);
  return Array.from({ length: count }, () => deck.next());
}

/** Get a comprehensive mixed batch (used by level mode & extra). */
export function getComprehensiveQuestions(count = 10, rng = Math.random, seenIds = null) {
  const deck = new ChineseDeck(rng, null, seenIds);
  return Array.from({ length: count }, () => deck.next());
}

/** Total number of questions available. */
export const CHINESE_QUESTION_COUNT = RAW_QUESTION_BANK.length;





