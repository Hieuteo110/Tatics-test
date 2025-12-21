// ============================================
// TFT GUIDE - SCRIPT HIỂN THỊ (API VERSION)
// ============================================

let currentFilterCost = 0; 
let currentSearchKeyword = '';
let CHAMP_DETAILS = {};
let TRAIT_ICONS = {};
let isDataLoaded = false;

// --- HÀM FORMAT TỔNG ---
// (Lưu ý: api-manager.js đã tự chèn thẻ img rồi, hàm này chỉ để hỗ trợ các trường hợp khác nếu cần)
function formatTotal(text) {
  if (!text) return "";
  const statsIcons = window.STAT_ICONS || {}; 
  const ALL_ICONS = { ...statsIcons, ...TRAIT_ICONS };
  for (const [name, path] of Object.entries(ALL_ICONS)) {
    const imgTag = `<img src="${path}" class="inline-icon" alt="${name}">`;
    text = text.split(`[${name}]`).join(imgTag);
    text = text.split(`scale${name}`).join(imgTag);
  }
  return text;
}

// Loading Screen
function showLoading(show = true) {
  let loadingDiv = document.getElementById('loading-screen');
  if (!loadingDiv) {
    loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading-screen';
    loadingDiv.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.9); z-index: 9999;
      display: flex; flex-direction: column; justify-content: center; align-items: center;
    `;
    loadingDiv.innerHTML = `<div style="font-size:50px;animation:spin 1s infinite">⚙️</div><h2 style="color:white;margin-top:20px">Đang tải dữ liệu...</h2><style>@keyframes spin{to{transform:rotate(360deg)}}</style>`;
    document.body.appendChild(loadingDiv);
  }
  loadingDiv.style.display = show ? 'flex' : 'none';
}

// INIT DATA
async function initializeData() {
  showLoading(true);
  try {
    const data = await window.DataDragonAPI.loadAllData();
    CHAMP_DETAILS = data.champions;
    TRAIT_ICONS = data.traits;
    
    if (Object.keys(CHAMP_DETAILS).length === 0) {
      alert('Lỗi: Không tìm thấy dữ liệu tướng!');
    } else {
      isDataLoaded = true;
      renderChampions();
    }
  } catch (error) {
    console.error(error);
    alert('Lỗi kết nối server!');
  } finally {
    showLoading(false);
  }
}

// RENDER
function renderChampions() {
  const container = document.getElementById('grid-container');
  if (!container) return;
  
  if (!isDataLoaded) {
    container.innerHTML = '<p style="color:white;text-align:center">Đang tải...</p>'; return;
  }
  container.innerHTML = ''; 

  for (const [name, data] of Object.entries(CHAMP_DETAILS)) {
    if (currentFilterCost !== 0 && data.cost !== currentFilterCost) continue;
    if (currentSearchKeyword && !name.toLowerCase().includes(currentSearchKeyword)) continue;

    let costClass = `cost${data.cost}`; 
    if (data.unlockText) costClass += 'lock';

    const card = document.createElement('div');
    card.className = 'champ-card';
    card.onclick = function() { showPopup(name, this); };

    card.innerHTML = `
      <div class="image-container ${costClass}">
         <img src="${data.image}" alt="${name}" loading="lazy">
      </div>
      <p class="champ-name">${name}</p>
    `;
    container.appendChild(card);
  }
}

// FILTER
function filterCost(cost) {
  currentFilterCost = cost;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (cost === 0) document.querySelector('.btn-all').classList.add('active');
  else document.querySelector(`.btn-cost${cost}`).classList.add('active');
  renderChampions();
}

// POPUP (ĐÃ FIX LỖI GIÁ TIỀN)
function showPopup(name, clickedElement) {
  const modal = document.getElementById('champ-modal');
  const data = CHAMP_DETAILS[name];
  if (!data || !modal) return;

  if (clickedElement) {
    const rect = clickedElement.getBoundingClientRect();
    const content = modal.querySelector('.modal-content');
    content.style.transformOrigin = `${rect.left + rect.width/2}px ${rect.top + rect.height/2}px`;
  }

  document.getElementById('m-name').innerHTML = name;
  document.getElementById('m-image').src = data.image;

  // --- [FIX] CẬP NHẬT GIÁ TIỀN TẠI ĐÂY ---
  const costElement = document.getElementById('m-cost');
  if (costElement) {
      costElement.innerHTML = data.cost;
      // Nếu muốn đổi màu số tiền theo cost, có thể thêm class nếu cần
      // costElement.className = `text-cost-${data.cost}`; 
  }
  // ----------------------------------------
  
  // Note Unlock
  const unlockBox = document.getElementById('m-unlock-note');
  if (data.unlockText) {
    unlockBox.style.display = "flex";
    document.getElementById('m-unlock-text').innerHTML = data.unlockText;
  } else {
    unlockBox.style.display = "none";
  }

  // Skill & Stats
  document.getElementById('m-skill-name').innerText = data.skillName;
  document.getElementById('m-skill-icon').src = data.skillIcon;
  document.getElementById('m-ability').innerHTML = data.ability;

  const traitsContainer = document.getElementById('m-traits');
  traitsContainer.innerHTML = ''; 
  const traitsList = data.traits.split(',');
  traitsList.forEach(tName => {
    tName = tName.trim();
    const iconUrl = TRAIT_ICONS[tName];
    if (iconUrl) {
      const badge = document.createElement('div');
      badge.className = 'trait-badge';
      badge.innerHTML = `<img src="${iconUrl}" class="trait-icon"> ${tName}`;
      traitsContainer.appendChild(badge);
    }
  });

  const s = data.stats;
  // api-manager.js đã tự thêm thẻ <img> vào s.health, s.mana... rồi nên chỉ cần gán vào
  document.getElementById('m-H').innerHTML = s.health;
  document.getElementById('m-mana').innerHTML = s.mana;
  document.getElementById('m-AM').innerHTML = s.armor;
  document.getElementById('m-MR').innerHTML = s.mr;
  document.getElementById('m-AD').innerHTML = s.damage;
  document.getElementById('m-AP').innerHTML = s.ap;
  document.getElementById('m-AS').innerHTML = s.speed;
  document.getElementById('m-Range').innerHTML = s.range;

  modal.classList.add('active');
}

function closePopup() {
  const modal = document.getElementById('champ-modal');
  if (modal) modal.classList.remove('active');
}

// INIT
document.addEventListener('DOMContentLoaded', function() {
  initializeData();
  
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  window.onclick = function(e) { if (e.target == document.getElementById('champ-modal')) closePopup(); };

  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchInput.classList.toggle('active');
      if (searchInput.classList.contains('active')) searchInput.focus();
      else { searchInput.value = ''; currentSearchKeyword = ''; renderChampions(); }
    });
    searchInput.addEventListener('keyup', (e) => {
      currentSearchKeyword = e.target.value.toLowerCase();
      renderChampions();
    });
  }
});
