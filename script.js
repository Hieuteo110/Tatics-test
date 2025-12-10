// --- BIẾN TOÀN CỤC ---
let currentFilterCost = 0; // 0 = All
let currentSearchKeyword = '';
//2. Hàm formatTotal
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

// 3. HÀM RENDER (Vẽ tướng)
function renderChampions() {
  const container = document.getElementById('grid-container');
  if (!container) return;
  container.innerHTML = ''; 

  for (const [name, data] of Object.entries(CHAMP_DETAILS)) {
    // --- BỘ LỌC ---
    if (currentFilterCost !== 0 && data.cost !== currentFilterCost) continue;
    if (currentSearchKeyword && !name.toLowerCase().includes(currentSearchKeyword)) continue;
    // -------------

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

// 4. LOGIC LỌC COST (Khi bấm nút 1, 2, 3...)
function filterCost(cost) {
  currentFilterCost = cost; // Lưu giá tiền đang chọn

  // Cập nhật giao diện nút bấm (Active)
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  
  // Tìm nút tương ứng để active
  if (cost === 0) document.querySelector('.btn-all').classList.add('active');
  else document.querySelector(`.btn-cost${cost}`).classList.add('active');

  // Vẽ lại danh sách
  renderChampions();
}

// 5. HÀM HIỂN THỊ POPUP
function showPopup(name, clickedElement) {
  const modal = document.getElementById('champ-modal');
  if (!modal) return;
  
  // Hiệu ứng phóng to từ vị trí bấm
  if (clickedElement) {
    const rect = clickedElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const content = modal.querySelector('.modal-content');
    content.style.transformOrigin = `${centerX}px ${centerY}px`;
  }

  const data = CHAMP_DETAILS[name];
  if (!data) return;

  document.getElementById('m-name').innerText = name;
  document.getElementById('m-image').src = data.image;
  document.getElementById('m-cost').innerText = data.cost;
  document.getElementById('m-ability').innerHTML =formatTotal(data.ability);

  // Icon Hệ Tộc
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
      span.innerText = traitName;
      span.style.marginRight = "10px";
      traitsContainer.appendChild(span);
    }
  });

  document.getElementById('m-health').innerText = data.stats.health;
  document.getElementById('m-mana').innerText = data.stats.mana;
  document.getElementById('m-armor').innerText = data.stats.armor;
  document.getElementById('m-mr').innerText = data.stats.mr;
  document.getElementById('m-dps').innerText = data.stats.dps;
  document.getElementById('m-speed').innerText = data.stats.speed;

  const unlockBox = document.getElementById('m-unlock-note');
  if (data.unlockText) {
    unlockBox.style.display = "flex";
    document.getElementById('m-unlock-text').innerText = data.unlockText;
  } else {
    unlockBox.style.display = "none";
  }

  modal.classList.add('active');
}

// 6. ĐÓNG POPUP
function closePopup() {
  const modal = document.getElementById('champ-modal');
  if (modal) modal.classList.remove('active');
}

// 7. KHỞI CHẠY APP
document.addEventListener('DOMContentLoaded', function() {
  renderChampions();
  
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  window.onclick = function(event) {
    if (event.target == document.getElementById('champ-modal')) closePopup();
  };

  // Logic Tìm kiếm
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
