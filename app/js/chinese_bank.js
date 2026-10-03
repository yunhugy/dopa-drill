// Chinese Learning Bank & Problem Generator for dopa-drill
// Supports Grade 1-6 across 4 categories: Idiom, Typo, Pinyin, and Poem.

export const CHINESE_LANES = ['成语积淀', '汉字与读音', '错别字辨析', '古诗名句'];

export const CHINESE_SKILLS = [
  // Grade 1
  { id: 'ch1-idiom', name: '一年级 · 启蒙成语', grade: 1, lane: 0, req: [], category: 'idiom' },
  { id: 'ch1-pinyin', name: '一年级 · 声韵拼音', grade: 1, lane: 1, req: [], category: 'pinyin' },
  { id: 'ch1-poem', name: '一年级 · 经典诗词', grade: 1, lane: 3, req: [], category: 'poem' },

  // Grade 2
  { id: 'ch2-idiom', name: '二年级 · 寓言成语', grade: 2, lane: 0, req: ['ch1-idiom'], category: 'idiom' },
  { id: 'ch2-pinyin', name: '二年级 · 常见多音字', grade: 2, lane: 1, req: ['ch1-pinyin'], category: 'pinyin' },
  { id: 'ch2-poem', name: '二年级 · 四季诗篇', grade: 2, lane: 3, req: ['ch1-poem'], category: 'poem' },

  // Grade 3
  { id: 'ch3-idiom', name: '三年级 · 故事典故', grade: 3, lane: 0, req: ['ch2-idiom'], category: 'idiom' },
  { id: 'ch3-typo', name: '三年级 · 形近错别字', grade: 3, lane: 2, req: [], category: 'typo' },
  { id: 'ch3-poem', name: '三年级 · 山水名句', grade: 3, lane: 3, req: ['ch2-poem'], category: 'poem' },

  // Grade 4
  { id: 'ch4-idiom', name: '四年级 · 历史成语', grade: 4, lane: 0, req: ['ch3-idiom'], category: 'idiom' },
  { id: 'ch4-typo', name: '四年级 · 易混词语纠错', grade: 4, lane: 2, req: ['ch3-typo'], category: 'typo' },
  { id: 'ch4-poem', name: '四年级 · 边塞与哲理诗', grade: 4, lane: 3, req: ['ch3-poem'], category: 'poem' },

  // Grade 5
  { id: 'ch5-idiom', name: '五年级 · 深度成语', grade: 5, lane: 0, req: ['ch4-idiom'], category: 'idiom' },
  { id: 'ch5-pinyin', name: '五年级 · 疑难多音多义', grade: 5, lane: 1, req: ['ch2-pinyin'], category: 'pinyin' },
  { id: 'ch5-poem', name: '五年级 · 家国情怀名句', grade: 5, lane: 3, req: ['ch4-poem'], category: 'poem' },

  // Grade 6
  { id: 'ch6-idiom', name: '六年级 · 文学成语精粹', grade: 6, lane: 0, req: ['ch5-idiom'], category: 'idiom' },
  { id: 'ch6-typo', name: '六年级 · 综合纠错实战', grade: 6, lane: 2, req: ['ch4-typo'], category: 'typo' },
  { id: 'ch6-poem', name: '六年级 · 经典古文诗韵', grade: 6, lane: 3, req: ['ch5-poem'], category: 'poem' },
];

export const CHINESE_SKILL_MAP = Object.fromEntries(CHINESE_SKILLS.map((s) => [s.id, s]));

// ---------------------------------------------------------------- Comprehensive Bank
export const RAW_QUESTION_BANK = [
  // ==================== Grade 1 ====================
  // Idiom
  { grade: 1, type: 'idiom', prefix: '一 心 一 ', missing: '意', suffix: '', options: ['意', '忆', '异', '易'], explanation: '一心一意：只有一个心眼，形容心思专一。' },
  { grade: 1, type: 'idiom', prefix: '七 上 八 ', missing: '下', suffix: '', options: ['下', '夏', '吓', '峡'], explanation: '七上八下：形容心里慌乱不安，心神不定。' },
  { grade: 1, type: 'idiom', prefix: '春 华 秋 ', missing: '实', suffix: '', options: ['实', '石', '识', '十'], explanation: '春华秋实：春天开花，秋天结果。' },
  { grade: 1, type: 'idiom', prefix: '十 全 十 ', missing: '美', suffix: '', options: ['美', '每', '妹', '没'], explanation: '十全十美：十分完美，毫无缺点。' },
  { grade: 1, type: 'idiom', prefix: '自 言 自 ', missing: '语', suffix: '', options: ['语', '雨', '羽', '与'], explanation: '自言自语：自己跟自己说话。' },
  { grade: 1, type: 'idiom', prefix: '五 颜 六 ', missing: '色', suffix: '', options: ['色', '瑟', '涩', '射'], explanation: '五颜六色：形容色彩繁多艳丽。' },
  // Pinyin
  { grade: 1, type: 'pinyin', prefix: '“快乐”的“乐”读作：', missing: 'lè', suffix: '', options: ['lè', 'yuè', 'luò', 'lào'], explanation: '“乐”在此处表示快乐、欢喜，读 lè；在音乐中读 yuè。' },
  { grade: 1, type: 'pinyin', prefix: '“长发”的“长”读作：', missing: 'cháng', suffix: '', options: ['cháng', 'zhǎng', 'chāng', 'zhàng'], explanation: '“长”在此表示长度，读 cháng；生长、长大读 zhǎng。' },
  { grade: 1, type: 'pinyin', prefix: '“看着”的“着”读作：', missing: 'zhe', suffix: '', options: ['zhe', 'zháo', 'zhuó', 'zhāo'], explanation: '助词“看着、听着”读轻声 zhe；着火读 zháo。' },
  // Poem
  { grade: 1, type: 'poem', prefix: '白 日 依 山 尽，黄 河 入 海 ', missing: '流', suffix: '。', options: ['流', '留', '牛', '楼'], explanation: '唐·王之涣《登鹳雀楼》' },
  { grade: 1, type: 'poem', prefix: '锄 禾 日 当 午，汗 滴 禾 下 ', missing: '土', suffix: '。', options: ['土', '吐', '图', '兔'], explanation: '唐·李绅《悯农》' },
  { grade: 1, type: 'poem', prefix: '举 头 望 明 月，低 头 思 故 ', missing: '乡', suffix: '。', options: ['乡', '相', '香', '享'], explanation: '唐·李白《静夜思》' },
  { grade: 1, type: 'poem', prefix: '夜 来 风 雨 声，花 落 知 多 ', missing: '少', suffix: '。', options: ['少', '小', '绍', '勺'], explanation: '唐·孟浩然《春晓》' },

  // ==================== Grade 2 ====================
  // Idiom
  { grade: 2, type: 'idiom', prefix: '画 龙 点 ', missing: '睛', suffix: '', options: ['睛', '晴', '精', '清'], explanation: '画龙点睛：原形容梁代画家张僧繇画龙点上眼睛使龙飞去，比喻写作或讲话在关键处点缀一句使内容更生动。' },
  { grade: 2, type: 'idiom', prefix: '盲 人 摸 ', missing: '象', suffix: '', options: ['象', '相', '向', '响'], explanation: '盲人摸象：比喻对事物只凭片面的了解或局部经验就妄下推断。' },
  { grade: 2, type: 'idiom', prefix: '井 底 之 ', missing: '蛙', suffix: '', options: ['蛙', '哇', '娃', '袜'], explanation: '井底之蛙：比喻见识狭隘的人。' },
  { grade: 2, type: 'idiom', prefix: '亡 羊 补 ', missing: '牢', suffix: '', options: ['牢', '捞', '唠', '楼'], explanation: '亡羊补牢：丢失了羊再去修补羊圈。比喻出了问题及时补救以防更大损失。' },
  { grade: 2, type: 'idiom', prefix: '狐 假 虎 ', missing: '威', suffix: '', options: ['威', '危', '微', '薇'], explanation: '狐假虎威：假借别人的威势来吓唬人。' },
  // Pinyin
  { grade: 2, type: 'pinyin', prefix: '“沉没”的“没”读作：', missing: 'mò', suffix: '', options: ['mò', 'méi', 'mù', 'mō'], explanation: '“没”表示淹没、沉入水中时读 mò；表示没有时读 méi。' },
  { grade: 2, type: 'pinyin', prefix: '“重阳节”的“重”读作：', missing: 'chóng', suffix: '', options: ['chóng', 'zhòng', 'cóng', 'tóng'], explanation: '“重阳、重复”读 chóng；“重量、沉重”读 zhòng。' },
  { grade: 2, type: 'pinyin', prefix: '“教师”的“教”读作：', missing: 'jiào', suffix: '', options: ['jiào', 'jiāo', 'jiǎo', 'jiào'], explanation: '名词“教师、教室”读 jiào；动词“教书”读 jiāo。' },
  // Poem
  { grade: 2, type: 'poem', prefix: '儿童散学归来早，忙趁', missing: '东风', suffix: '放纸鸢。', options: ['东风', '春风', '晨风', '微风'], explanation: '清·高鼎《村居》' },
  { grade: 2, type: 'poem', prefix: '野火烧不尽，春风吹又', missing: '生', suffix: '。', options: ['生', '深', '升', '声'], explanation: '唐·白居易《赋得古原草送别》' },
  { grade: 2, type: 'poem', prefix: '飞流直下三千尺，疑是银河落', missing: '九天', suffix: '。', options: ['九天', '云端', '人间', '高天'], explanation: '唐·李白《望庐山瀑布》' },

  // ==================== Grade 3 ====================
  // Idiom
  { grade: 3, type: 'idiom', prefix: '守 株 ', missing: '待', suffix: ' 兔', options: ['待', '侍', '代', '袋'], explanation: '守株待兔：守在树桩旁等待野兔撞死，比喻企图不经过努力而侥幸得到成功。' },
  { grade: 3, type: 'idiom', prefix: '掩 耳 ', missing: '盗', suffix: ' 铃', options: ['盗', '到', '倒', '导'], explanation: '掩耳盗铃：捂住自己的耳朵去偷铃铛，比喻自欺欺人。' },
  { grade: 3, type: 'idiom', prefix: '买 椟 还 ', missing: '珠', suffix: '', options: ['珠', '朱', '株', '诸'], explanation: '买椟还珠：买了木匣却把匣里的珍珠退还，比喻没有眼光，取舍不当。' },
  { grade: 3, type: 'idiom', prefix: '刻 舟 求 ', missing: '剑', suffix: '', options: ['剑', '箭', '健', '鉴'], explanation: '刻舟求剑：比喻不懂事物发展变化而墨守成规。' },
  { grade: 3, type: 'idiom', prefix: '叶 公 好 ', missing: '龙', suffix: '', options: ['龙', '荣', '隆', '珑'], explanation: '叶公好龙：比喻表面上爱好某种事物，实际上并不真正爱好。' },
  // Typo
  { grade: 3, type: 'typo', prefix: '选出字形【全部正确】的一组：', missing: '川流不息', suffix: '', options: ['川流不息', '穿流不息', '川留不息', '穿留不息'], explanation: '川流不息：“川”意为河流，形容行人、车马接连不断。' },
  { grade: 3, type: 'typo', prefix: '选出字形【全部正确】的一组：', missing: '按部就班', suffix: '', options: ['按部就班', '按步就班', '按部就斑', '按步就斑'], explanation: '按部就班：“部”指门类次序，“班”指行次位序。不可写成“步”。' },
  { grade: 3, type: 'typo', prefix: '选出字形【全部正确】的一组：', missing: '提纲挈领', suffix: '', options: ['提纲挈领', '提刚挈领', '提纲契领', '提钢挈领'], explanation: '提纲挈领：“纲”是渔网的总绳，“挈”是提起。' },
  // Poem
  { grade: 3, type: 'poem', prefix: '水光潋滟晴方好，山色空蒙雨亦', missing: '奇', suffix: '。', options: ['奇', '琪', '期', '齐'], explanation: '宋·苏轼《饮湖上初晴后雨》' },
  { grade: 3, type: 'poem', prefix: '借问酒家何处有，牧童遥指', missing: '杏花', suffix: '村。', options: ['杏花', '桃花', '梨花', '梅花'], explanation: '唐·杜牧《清明》' },
  { grade: 3, type: 'poem', prefix: '独在异乡为异客，每逢', missing: '佳节', suffix: '倍思亲。', options: ['佳节', '中秋', '岁末', '重阳'], explanation: '唐·王维《九月九日忆山东兄弟》' },

  // ==================== Grade 4 ====================
  // Idiom
  { grade: 4, type: 'idiom', prefix: '卧 薪 尝 ', missing: '胆', suffix: '', options: ['胆', '诞', '蛋', '淡'], explanation: '卧薪尝胆：形容人刻苦自励，发奋图强。出自越王勾践的故事。' },
  { grade: 4, type: 'idiom', prefix: '完 璧 归 ', missing: '赵', suffix: '', options: ['赵', '照', '兆', '召'], explanation: '完璧归赵：比喻把原物完好无损地归还原主。' },
  { grade: 4, type: 'idiom', prefix: '风 声 鹤 ', missing: '唳', suffix: '', options: ['唳', '泪', '立', '例'], explanation: '风声鹤唳：听到风声和鹤鸣都疑心是追兵，形容极端惊恐疑惧。' },
  { grade: 4, type: 'idiom', prefix: '四 面 楚 ', missing: '歌', suffix: '', options: ['歌', '割', '格', '鸽'], explanation: '四面楚歌：比喻陷入四面受敌、孤立无援的困境。' },
  { grade: 4, type: 'idiom', prefix: '指 鹿 为 ', missing: '马', suffix: '', options: ['马', '码', '玛', '骂'], explanation: '指鹿为马：指着鹿说是马，比喻颠倒黑白，混淆是非。' },
  // Typo
  { grade: 4, type: 'typo', prefix: '选出字形【全部正确】的一组：', missing: '破釜沉舟', suffix: '', options: ['破釜沉舟', '破斧沉舟', '破服沉舟', '破甫沉舟'], explanation: '破釜沉舟：“釜”是古代的锅。砸破锅，凿沉船，表示下定决一死战的决心。' },
  { grade: 4, type: 'typo', prefix: '选出字形【全部正确】的一组：', missing: '再接再厉', suffix: '', options: ['再接再厉', '再接再励', '再接再利', '再接再立'], explanation: '再接再厉：“厉”同“砺”，磨快刀刃。常被误写为奖励的“励”。' },
  { grade: 4, type: 'typo', prefix: '选出字形【全部正确】的一组：', missing: '滥竽充数', suffix: '', options: ['滥竽充数', '滥芋充数', '烂竽充数', '滥竿充数'], explanation: '滥竽充数：“竽”是古代管乐器，不可写成“芋头”的“芋”。' },
  // Poem
  { grade: 4, type: 'poem', prefix: '不识庐山真面目，只缘身在', missing: '此山', suffix: '中。', options: ['此山', '云雾', '深山', '青天'], explanation: '宋·苏轼《题西林壁》' },
  { grade: 4, type: 'poem', prefix: '生当作人杰，死亦为', missing: '鬼雄', suffix: '。', options: ['鬼雄', '英雄', '枭雄', '神明'], explanation: '宋·李清照《夏日绝句》' },
  { grade: 4, type: 'poem', prefix: '忽如一夜春风来，千树万树', missing: '梨花', suffix: '开。', options: ['梨花', '桃花', '雪花', '白花'], explanation: '唐·岑参《白雪歌送武判官归京》' },

  // ==================== Grade 5 ====================
  // Idiom
  { grade: 5, type: 'idiom', prefix: '邯 郸 学 ', missing: '步', suffix: '', options: ['步', '布', '部', '不'], explanation: '邯郸学步：比喻模仿别人不成，反而丧失了原有的技能。' },
  { grade: 5, type: 'idiom', prefix: '南 辕 北 ', missing: '辙', suffix: '', options: ['辙', '撤', '彻', '澈'], explanation: '南辕北辙：车辕向南，车辙向北。比喻行动和目的完全相反。' },
  { grade: 5, type: 'idiom', prefix: '杞 人 忧 ', missing: '天', suffix: '', options: ['天', '添', '填', '田'], explanation: '杞人忧天：比喻缺乏根据和不必要的忧虑或担心。' },
  { grade: 5, type: 'idiom', prefix: '拔 苗 助 ', missing: '长', suffix: '', options: ['长', '常', '掌', '场'], explanation: '拔苗助长：比喻急于求成，反把事情弄糟。' },
  // Pinyin
  { grade: 5, type: 'pinyin', prefix: '“咽喉”与“呜咽”的读音依次为：', missing: 'yān / yè', suffix: '', options: ['yān / yè', 'yān / yān', 'yàn / yè', 'yè / yān'], explanation: '咽喉读 yān；下咽读 yàn；呜咽读 yè。' },
  { grade: 5, type: 'pinyin', prefix: '“参差不齐”中的“参”读作：', missing: 'cēn', suffix: '', options: ['cēn', 'cān', 'shēn', 'cān'], explanation: '“参差”是连绵词，读 cēncī。' },
  { grade: 5, type: 'pinyin', prefix: '“冠冕堂皇”中的“冠”读作：', missing: 'guān', suffix: '', options: ['guān', 'guàn', 'guǎn', 'guāng'], explanation: '“冠”作帽子名词或冠冕时读第一声 guān；冠军、夺冠等动词及称号读 guàn。' },
  // Poem
  { grade: 5, type: 'poem', prefix: '落霞与孤鹜齐飞，秋水共长天一', missing: '色', suffix: '。', options: ['色', '澈', '碧', '空'], explanation: '唐·王勃《滕王阁序》' },
  { grade: 5, type: 'poem', prefix: '山重水复疑无路，柳暗花明又一', missing: '村', suffix: '。', options: ['村', '春', '峰', '程'], explanation: '宋·陆游《游山西村》' },
  { grade: 5, type: 'poem', prefix: '王师北定中原日，家祭无忘告乃', missing: '翁', suffix: '。', options: ['翁', '宗', '公', '亲'], explanation: '宋·陆游《示儿》' },

  // ==================== Grade 6 ====================
  // Idiom
  { grade: 6, type: 'idiom', prefix: '入 木 三 ', missing: '分', suffix: '', options: ['分', '份', '风', '峰'], explanation: '入木三分：形容书法笔力雄健，后也比喻分析问题深刻精辟。' },
  { grade: 6, type: 'idiom', prefix: '相 形 见 ', missing: '绌', suffix: '', options: ['绌', '拙', '黜', '出'], explanation: '相形见绌：互相比较之下显出缺陷或不足。' },
  { grade: 6, type: 'idiom', prefix: '沧 海 一 ', missing: '粟', suffix: '', options: ['粟', '栗', '素', '速'], explanation: '沧海一粟：大海里的一颗谷粒。比喻非常渺小，微不足道。' },
  { grade: 6, type: 'idiom', prefix: '脍 炙 人 ', missing: '口', suffix: '', options: ['口', '手', '头', '心'], explanation: '脍炙人口：切细的烤肉人人都爱吃，比喻好的诗文或事物受人称赞传诵。' },
  { grade: 6, type: 'idiom', prefix: '鳞 次 栉 ', missing: '比', suffix: '', options: ['比', '彼', '笔', '必'], explanation: '鳞次栉比：像鱼鳞和梳齿那样紧密而整齐地排列着。多形容房屋密集。' },
  // Typo
  { grade: 6, type: 'typo', prefix: '选出字形【全部正确】的一组：', missing: '世外桃源', suffix: '', options: ['世外桃源', '世外桃园', '市外桃源', '世外园林'], explanation: '世外桃源：“源”指水源，借指桃花源。不可写成植物园的“园”。' },
  { grade: 6, type: 'typo', prefix: '选出字形【全部正确】的一组：', missing: '墨守成规', suffix: '', options: ['墨守成规', '默守成规', '墨守陈规', '默守陈规'], explanation: '墨守成规：源于墨子善于守城。后指固执拘泥于旧规矩。写作“墨”，非“默”。' },
  { grade: 6, type: 'typo', prefix: '选出字形【全部正确】的一组：', missing: '美轮美奂', suffix: '', options: ['美轮美奂', '美仑美奂', '美伦美奂', '美轮美换'], explanation: '美轮美奂：形容房屋高大众多，富丽堂皇。轮，高大；奂，众多。' },
  // Poem
  { grade: 6, type: 'poem', prefix: '纸上得来终觉浅，绝知此事要', missing: '躬行', suffix: '。', options: ['躬行', '力行', '笃行', '践行'], explanation: '宋·陆游《冬夜读书示子聿》' },
  { grade: 6, type: 'poem', prefix: '千淘万漉虽辛苦，吹尽狂沙始到', missing: '金', suffix: '。', options: ['金', '真', '心', '津'], explanation: '唐·刘禹锡《浪淘沙》' },
  { grade: 6, type: 'poem', prefix: '沉舟侧畔千帆过，病树前头万木', missing: '春', suffix: '。', options: ['春', '生', '荣', '青'], explanation: '唐·刘禹锡《酬乐天扬州初逢席上见赠》' },
];

// Helper to shuffle options deterministically using seeded rng or Math.random
export function shuffle(array, rng = Math.random) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Builds a problem object compatible with dopa-drill's engine.
 */
export function buildChineseProblem(item, rng = Math.random) {
  const options = shuffle(item.options, rng);
  const title = item.type === 'idiom' ? '成语速记' :
                item.type === 'typo' ? '错别字辨析' :
                item.type === 'pinyin' ? '读音速辨' : '名句填空';

  // Construct sheet cells
  // Row 0: Prompt / title prefix
  // Row 1: The question with missing part as input cell
  const cells = [];
  const lines = [];

  // Question representation
  const preText = item.prefix || '';
  const postText = item.suffix || '';
  const missingText = item.missing;

  // Split into tokens for visual rendering
  // We can render the sentence gracefully
  cells.push({
    id: 'ch-pre',
    r: 1, c: 0, cs: 3,
    text: preText,
    kind: 'given',
    cls: 'ch-text ch-pre'
  });

  cells.push({
    id: 'ch-target',
    r: 1, c: 3, cs: 2,
    text: missingText,
    kind: 'input',
    cls: 'ch-target'
  });

  if (postText) {
    cells.push({
      id: 'ch-post',
      r: 1, c: 5, cs: 2,
      text: postText,
      kind: 'given',
      cls: 'ch-text ch-post'
    });
  }

  const steps = [
    {
      cell: 'ch-target',
      digit: missingText,
      label: '请选出正确选项',
      help: { text: item.explanation }
    }
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

/**
 * Get random question by grade / category
 */
export function getQuestionsForGrade(grade, count = 10, rng = Math.random) {
  let list = RAW_QUESTION_BANK.filter((q) => q.grade === grade);
  if (!list.length) list = RAW_QUESTION_BANK;
  const shuffled = shuffle(list, rng);
  return shuffled.slice(0, count).map((item) => buildChineseProblem(item, rng));
}

/**
 * Get questions for placement / comprehensive level test
 */
export function getComprehensiveQuestions(count = 10, rng = Math.random) {
  const shuffled = shuffle(RAW_QUESTION_BANK, rng);
  return shuffled.slice(0, count).map((item) => buildChineseProblem(item, rng));
}
