// --- BIẾN TOÀN CỤC ---
let currentFilterCost = 0; 
let currentSearchKeyword = '';

// --- HÀM FORMAT TỔNG ---
function formatTotal(text) {
  if (!text) return "";
  const ALL_ICONS = { ...STAT_ICONS, ...TRAIT_ICONS };
  for (const [name, path] of Object.entries(ALL_ICONS)) {
    const placeholder = `[${name}]`;
    const imgTag = `<img src="${path}" class="inline-icon" alt="${name}">`;
    text = text.split(placeholder).join(imgTag);
  }
  return text;
}

// --- HÀM TỰ ĐỘNG TẠO LINK SKILL (MỚI) ---
function getAutoSkillIcon(champImagePath) {
  if (!champImagePath) return "";
  // Lấy tên file: "assets/face/champ/wukong.avif" -> "wukong.avif"
  const fileName = champImagePath.split('/').pop();
  // Bỏ đuôi: "wukong"
  let cleanName = fileName.split('.')[0];
  // Viết hoa chữ đầu: "Wukong"
  cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
  // Trả về: "assets/skills/TFT16_Wukong.jpg"
  return `assets/skills/TFT16_${cleanName}.jpg`;
}

// 1. RENDER
function renderChampions() {
  const container = document.getElementById('grid-container');
  if (!container) return;
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
         <img src="${data.image}" alt="${name}">
      </div>
      <p class="champ-name">${name}</p>
    `;
    container.appendChild(card);
  }
}

// 2. FILTER
function filterCost(cost) {
  currentFilterCost = cost;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (cost === 0) document.querySelector('.btn-all').classList.add('active');
  else document.querySelector(`.btn-cost${cost}`).classList.add('active');
  renderChampions();
}

// 3. POPUP (Đã tích hợp tự động ảnh skill)
function showPopup(name, clickedElement) {
  const modal = document.getElementById('champ-modal');
  if (!modal) return;
  
  if (clickedElement) {
    const rect = clickedElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const content = modal.querySelector('.modal-content');
    content.style.transformOrigin = `${centerX}px ${centerY}px`;
  }

  const data = CHAMP_DETAILS[name];
  if (!data) return;

  // Header
  document.getElementById('m-name').innerHTML = name;
  document.getElementById('m-image').src = data.image;
  
  // --- XỬ LÝ KỸ NĂNG (TỰ ĐỘNG HÓA) ---
  const sName = data.skillName || "Kỹ năng";
  
  // Tự động sinh link ảnh skill nếu trong dữ liệu không có
  let sIcon = data.skillIcon;
  if (!sIcon) {
    sIcon = getAutoSkillIcon(data.image);
  }

  document.getElementById('m-skill-name').innerText = sName;
  document.getElementById('m-skill-icon').src = sIcon;
  // Xử lý lỗi nếu ảnh skill tự sinh không tồn tại (Fallback về ảnh tướng)
  document.getElementById('m-skill-icon').onerror = function() {
      this.src = data.image; 
  };

  document.getElementById('m-ability').innerHTML = formatTotal(data.ability);

  // Hệ Tộc
  const traitsContainer = document.getElementById('m-traits');
  traitsContainer.innerHTML = ''; 
  const traitsList = data.traits.split(','); 
  traitsList.forEach(traitName => {
    traitName = traitName.trim();
    const iconUrl = TRAIT_ICONS[traitName]; 
    if (iconUrl) {
      const badge = document.createElement('div');
      badge.className = 'trait-badge';
      badge.innerHTML = `<img src="${iconUrl}" class="trait-icon"> ${traitName}`;
      traitsContainer.appendChild(badge);
    } else {
      const span = document.createElement('span');
      span.innerHTML = traitName;
      span.style.marginRight = "10px";
      traitsContainer.appendChild(span);
    }
  });

  // Thông số
  const s = data.stats || {};
  document.getElementById('m-H').innerHTML = formatTotal(s.health || "-");
  document.getElementById('m-mana').innerHTML = formatTotal(s.mana || "-");
  document.getElementById('m-AM').innerHTML = formatTotal(s.armor || "-");
  document.getElementById('m-MR').innerHTML = formatTotal(s.mr || "-");
  document.getElementById('m-AD').innerHTML = formatTotal(s.damage || "-");
  document.getElementById('m-AP').innerHTML = formatTotal(s.ap || "-");
  document.getElementById('m-AS').innerHTML = formatTotal(s.speed || "-");
  document.getElementById('m-Range').innerHTML = formatTotal(s.range || "-");

  const unlockBox = document.getElementById('m-unlock-note');
  if (data.unlockText) {
    unlockBox.style.display = "flex";
    document.getElementById('m-unlock-text').innerHTML = data.unlockText;
  } else {
    unlockBox.style.display = "none";
  }

  modal.classList.add('active');
}

// 4. CLOSE
function closePopup() {
  const modal = document.getElementById('champ-modal');
  if (modal) modal.classList.remove('active');
}

// 5. INIT
document.addEventListener('DOMContentLoaded', function() {
  renderChampions();
  
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  window.onclick = function(event) {
    if (event.target == document.getElementById('champ-modal')) closePopup();
  };

  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchInput.classList.toggle('active');
      if (searchInput.classList.contains('active')) {
        searchInput.focus();
      } else {
        searchInput.value = ''; 
        currentSearchKeyword = ''; 
        renderChampions();
      }
    });

    searchInput.addEventListener('keyup', (e) => {
      currentSearchKeyword = e.target.value.toLowerCase();
      renderChampions();
    });
  }
});
