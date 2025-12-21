// ============================================
// API MANAGER - FINAL (CHAMPIONS ONLY)
// ============================================

const CONFIG = {
  DATA_URL: 'https://raw.communitydragon.org/latest/cdragon/tft/vi_vn.json',
  IMAGE_BASE: 'https://raw.communitydragon.org/latest/game/'
};

const DATA_CACHE = { fullData: null };

function fixImage(path) {
  if (!path) return 'assets/no-image.png';
  return CONFIG.IMAGE_BASE + path.toLowerCase().replace('.tex', '.png');
}

// --- HÀM TẠO THẺ ẢNH ICON ---
function getIconTag(key) {
  const icons = window.STAT_ICONS || {};
  const path = icons[key];
  if (!path) return `[${key}]`; 
  return `<img src="${path}" class="inline-icon" alt="${key}" style="width: 14px; height: 14px; vertical-align: middle; margin: 0 2px;">`;
}

// --- HÀM BIÊN DỊCH TEXT RIOT ---
function processRiotString(desc, variables) {
  if (!desc) return "Chưa có mô tả";
  
  desc = desc.replace(/{{[^}]+}}/g, "");

  // TẠO TỪ ĐIỂN BIẾN (Chỉ xử lý cho Tướng)
  const varMap = {};
  if (variables && Array.isArray(variables)) {
    variables.forEach(v => {
      let values = v.value;
      if (Array.isArray(values) && values.length > 1) {
         const stats = values.slice(1, 4); 
         const cleanStats = stats.map(num => parseFloat(num.toFixed(2)));
         varMap[v.name.toLowerCase()] = cleanStats.join('/');
      } else {
         varMap[v.name.toLowerCase()] = values;
      }
    });
  }

  // BẢO VỆ THẺ MÀU
  desc = desc
    .replace(/<physicalDamage>/gi, '[[ORANGE]]').replace(/<\/physicalDamage>/gi, '[[/SPAN]]')
    .replace(/<magicDamage>/gi, '[[BLUE]]').replace(/<\/magicDamage>/gi, '[[/SPAN]]')
    .replace(/<trueDamage>/gi, '[[GOLD]]').replace(/<\/trueDamage>/gi, '[[/SPAN]]')
    .replace(/<healing>/gi, '[[GREEN]]').replace(/<\/healing>/gi, '[[/SPAN]]')
    .replace(/<shield>/gi, '[[SHIELD]]').replace(/<\/shield>/gi, '[[/SPAN]]');

  desc = desc.replace(/<[^>]+>/g, ""); // Xóa thẻ rác

  desc = desc
    .replace(/\[\[ORANGE\]\]/g, '<span class="text-orange">')
    .replace(/\[\[BLUE\]\]/g, '<span class="text-blue">')
    .replace(/\[\[GOLD\]\]/g, '<span class="text-gold">')
    .replace(/\[\[GREEN\]\]/g, '<span style="color:#00ff00">')
    .replace(/\[\[SHIELD\]\]/g, '<span style="color:#e6cc80">')
    .replace(/\[\[\/SPAN\]\]/g, '</span>');

  // THAY THẾ BIẾN SỐ
  desc = desc.replace(/@([^@]+)@/g, (match, rawContent) => {
    let [varName, multiplier] = rawContent.split('*'); 
    varName = varName.toLowerCase();

    if (varName.includes('tftunitproperty') || varName.includes(':')) return "";

    let val = varMap[varName];

    if (val === undefined) {
        const cleanName = varName
            .replace('modified', '').replace('total', '').replace('base', '')
            .replace('bonus', '').replace('percent', '').replace('flat', '');
        
        if (cleanName.length > 0) {
            let key = Object.keys(varMap).find(k => k.includes(cleanName) || cleanName.includes(k));
            if (key) val = varMap[key];
        }

        if (val === undefined) {
             const aliases = {
                'damage': ['percentad', 'adratio', 'total', 'base', 'amount', 'mult', 'attackdamage', 'apratio'],
                'shield': ['amount', 'base', 'total', 'health', 'percent'],
                'heal': ['health', 'hp', 'amount', 'base', 'percent'],
                'count': ['num', 'tick', 'time', 'amount'], 
             };
             for (const [coreKey, synonyms] of Object.entries(aliases)) {
                if (varName.includes(coreKey)) {
                    for (const synonym of synonyms) {
                        const key = Object.keys(varMap).find(k => k.includes(synonym));
                        if (key) { val = varMap[key]; break; }
                    }
                }
                if (val !== undefined) break;
            }
        }
    }

    if (multiplier && val) {
       if (typeof val === 'string' && val.includes('/')) {
           val = val.split('/').map(n => parseFloat((parseFloat(n.trim())*100).toFixed(0))).join('/');
       } else if (!isNaN(val)) {
           val = parseFloat((val * 100).toFixed(0));
       }
    }

    if (val !== undefined) return `<span class="text-white">${val}</span>`;
    return `<span class="text-white">?</span>`;
  });

  // XỬ LÝ ICON
  const riotToKey = {
    'scaleAD': 'AD', 'scaleAP': 'AP', 'scaleHealth': 'H', 
    'scaleArmor': 'AM', 'scaleMR': 'MR', 'scaleAS': 'AS', 
    'scaleRange': 'Range', 'scaleMana': 'mana',
    'scaleSouls': 'Souls'
  };

  desc = desc.replace(/%i:([a-zA-Z0-9]+)%|([a-zA-Z0-9]+)/g, (match, g1, g2) => {
      const tag = g1 || g2;
      if (riotToKey[tag]) return " " + getIconTag(riotToKey[tag]);
      return match;
  });

  desc = desc.replace(/\n/g, '<br>');
  return desc;
}

// --- TẢI DATA ---
async function fetchRawData() {
  if (DATA_CACHE.fullData) return DATA_CACHE.fullData;
  try {
    const response = await fetch(CONFIG.DATA_URL);
    DATA_CACHE.fullData = await response.json();
    return DATA_CACHE.fullData;
  } catch (error) { console.error('Lỗi JSON:', error); throw error; }
}

async function fetchChampions() {
  try {
    const data = await fetchRawData();
    let currentSet = data.sets['16'] || data.sets[Object.keys(data.sets).sort((a,b)=>b-a)[0]];
    const champions = {};
    if (!currentSet || !currentSet.champions) return {};

    const CUSTOM_DATA = window.CUSTOM_CHAMP_DATA || {};

    currentSet.champions.forEach(champ => {
      if (!champ.traits || champ.traits.length === 0) return;
      if (champ.cost > 10) return; 

      let finalCost = champ.cost || 1;
      const cleanName = champ.name.trim();
      const apiID = (champ.apiName || "").toLowerCase();

      let customInfo = CUSTOM_DATA[cleanName];
      if (!customInfo) {
        for (const [key, val] of Object.entries(CUSTOM_DATA)) {
            if (apiID.includes(key.toLowerCase())) { customInfo = val; break; }
        }
      }

      let unlockText = null;
      if (customInfo) {
          if (customInfo.unlockText) unlockText = customInfo.unlockText;
          if (customInfo.is7Cost) finalCost = 7;
      }

      const processedDesc = processRiotString(champ.ability.desc, champ.ability.variables);
      const s = champ.stats;
      const formatStat = (val) => {
          if (!val) return '?';
          if (typeof val === 'number') return parseFloat(val.toFixed(2));
          return val;
      };

      const statsWithIcons = {
          health: getIconTag('H') + ' ' + formatStat(s.hp),
          mana:   getIconTag('mana') + ' ' + `${s.initialMana || 0}/${s.mana || 0}`,
          armor:  getIconTag('AM') + ' ' + formatStat(s.armor),
          mr:     getIconTag('MR') + ' ' + formatStat(s.magicResist),
          damage: getIconTag('AD') + ' ' + formatStat(s.damage),
          ap:     getIconTag('AP') + ' ' + "100",
          speed:  getIconTag('AS') + ' ' + formatStat(s.attackSpeed),
          range:  getIconTag('Range') + ' ' + formatStat(s.range)
      };

      champions[champ.name] = {
        name: champ.name, 
        cost: finalCost,
        traits: champ.traits.join(', '),
        image: fixImage(champ.icon),
        stats: statsWithIcons,
        ability: processedDesc,
        skillName: champ.ability.name || 'Kỹ năng',
        skillIcon: fixImage(champ.ability.icon),
        apiId: champ.apiName,
        unlockText: unlockText 
      };
    });

    return champions;
  } catch (error) { console.error(error); return {}; }
}

async function fetchTraits() {
  try {
    const data = await fetchRawData();
    let currentSet = data.sets['16'] || data.sets[Object.keys(data.sets).sort((a,b)=>b-a)[0]];
    const traits = {};
    if (currentSet.traits) currentSet.traits.forEach(t => traits[t.name] = fixImage(t.icon));
    return traits;
  } catch (e) { return {}; }
}

// --- LOAD ALL DATA (ĐÃ BỎ ITEMS) ---
async function loadAllData() {
  try {
    await fetchRawData();
    // Chỉ tải Champions và Traits, bỏ fetchItems
    const [champions, traits] = await Promise.all([fetchChampions(), fetchTraits()]);
    return { champions, traits }; // Trả về object không có items
  } catch (e) { return { champions: {}, traits: {} }; }
}

// Export gọn lại
window.DataDragonAPI = { loadAllData, fetchChampions, fetchTraits };
