// 1. KHO ẢNH ICON
const TRAIT_ICONS = {
  "AD": "/assets/ux/staticons /AD.svg",
  "AP": "/assets/ux/staticons /AP.svg",
  "Bất Tử": "assets/ux/traiticons/immortal.png ",
  "Chinh Phạt": "assets/ux/traiticons/vanquisher.png",
  "Cảnh Vệ": "assets/ux/traiticons/warden.png",
  "Dũng Sĩ": "assets/ux/traiticons/juggernaut.png",
  "Nữ Thợ Săn": "assets/ux/traiticons/huntress.png",
  "Pháp Sư": "assets/ux/traiticons/arcanist.png",
  "Siêu Hùng": "assets/ux/traiticons/heroic.png",
  "Thuật Sĩ": "assets/ux/traiticons/invoker.png",
  "Thăng Hoa": "assets/ux/traiticons/ascendant.png",
  "Vệ Quân": "assets/ux/traiticons/defender.png",
  "Xạ Thủ": "assets/ux/traiticons/gunslinger.png",
  "Đại Ca": "assets/ux/traiticons/theboss.png",
  "Bilgewater": "assets/ux/traiticons/bilgewater.png",
  "Đấu Sĩ": "assets/ux/traiticons/bruiser.png",
  "Bù Nhìn": "assets/ux/traiticons/harvester.png",
  "Cơ Giáp Hex": "assets/ux/traiticons/hexmech.png",
  "Cổ Ngữ": "assets/ux/traiticons/runemage.png",
  "Cộng Sinh": "assets/ux/traiticons/assimilator.png",
  "Demacia": "assets/ux/traiticons/demacia.png",
  "Freljord": "assets/ux/traiticons/freljord.png",
  "Giám Hộ": "assets/ux/traiticons/chronokeeper.png",
  "Hoàng Đế": "assets/ux/traiticons/emperor.png",
  "Ionia": "assets/ux/traiticons/ionia.png",
  "Ixtal": "assets/ux/traiticons/ixtal.png",
  "Kẻ Phá Xiềng": "assets/ux/traiticons/chainbreaker.png",
  "Linh Hồn": "assets/ux/traiticons/soulbound.png",
  "Long Nữ": "assets/ux/traiticons/dragonborn.png",
  "Noxus": "assets/ux/traiticons/noxus.png",
  "Phàm Ăn": "assets/ux/traiticons/glutton.png",
  "Shurima": "assets/ux/traiticons/shurima.png",
  "Thần Rèn": "assets/ux/traiticons/blacksmith.png",
  "Vĩnh Hằng": "assets/ux/traiticons/eternal.png",
  "Yordle": "assets/ux/traiticons/yordle.png",
  "Ác Long": "assets/ux/traiticons/starforger.png",
  "Ông Bụt": "assets/ux/traiticons/caretaker.png",
  "Đảo Bóng Đêm": "assets/ux/traiticons/shadowisles.png",
  "Đứa Trẻ Bóng Tối": "assets/ux/traiticons/darkchild.png",
  "Piltover": "assets/ux/traiticons/piltover.png",
  "Viễn Kích": "assets/ux/traiticons/longshot.png",
  "Targon": "assets/ux/traiticons/targon.png",
  "Zaun": "assets/ux/traiticons/zaun.png",
  "Nhiễu Loạn": "assets/ux/traiticons/disruptor.png",
  "Quỷ Kiếm": "assets/ux/traiticons/darkin2.png", 
  "Darkin": "assets/ux/traiticons/darkin.png",
  "Đồ Tể": "assets/ux/traiticons/slayer.png",
  "Hư Không": "assets/ux/traiticons/void.png",
  "Tai Ương": "assets/ux/traiticons/riftscourge.png",
  "Cực Tốc": "assets/ux/traiticons/quickstriker.png"
};

// 2. KHO DỮ LIỆU TƯỚNG
const CHAMP_DETAILS = {
  "Caitlyn": {
    cost: 1,
    image: "assets/face/champ/tft16_caitlyn.avif",
    traits: "Piltover,Viễn Kích", 
    ability: "Bắn đạn xuyên thấu gây 500 <img src='" + TRAIT_ICONS.AD + "' class='inline-icon'> sát thương vật lý.",
    stats: { health: "500", mana: "0/80", armor: "15", mr: "15", dps: "31", speed: "0.7" }
  },
  "Aphelios": {
    cost: 2,
    image: "assets/face/champ/tft16_aphelios.avif",
    traits: "Targon",
    ability: "Bắn pháo sáng gây 150 <img src='" + TRAIT_ICONS.AD + "' class='inline-icon'> + 50 <img src='" + TRAIT_ICONS.AP + "' class='inline-icon'> sát thương.",
    stats: { health: "650", mana: "40/100", armor: "20", mr: "20", dps: "45", speed: "0.75" }
  },
  "Warwick": {
    cost: 4,
    image: "assets/face/champ/tft16_warwick.avif",
    traits: "Zaun,Cực Tốc",
    ability: "Hồi máu liên tục theo đòn đánh gây <img src='" + TRAIT_ICONS.AD + "' class='inline-icon'>.",
    stats: { health: "900", mana: "0/0", armor: "40", mr: "40", dps: "60", speed: "0.8" },
    unlockText: "Triển khai: Jinx 1 sao + Vi 2 sao (Yêu cầu cấp 7)"
  },
  "Gwen": {
    cost: 3,
    image: "assets/face/champ/tft16_gwen.avif",
    traits: "Đảo Bóng Đêm,Nhiễu Loạn",
    ability: "Lướt tới và cắt kéo gây sát thương chuẩn dựa trên <img src='" + TRAIT_ICONS.AP + "' class='inline-icon'>.",
    stats: { health: "800", mana: "0/20", armor: "30", mr: "30", dps: "50", speed: "0.8" },
    unlockText: "Thu thập 20 Linh Hồn Đảo Bóng Đêm"
  },
  "Aatrox": {
    cost: 5,
    image: "assets/face/champ/tft16_aatrox.avif",
    traits: "Darkin,Quỷ Kiếm,Đồ Tể",
    ability: "Hóa quỷ, hút máu toàn phần và gây sát thương <img src='" + TRAIT_ICONS.AD + "' class='inline-icon'> diện rộng.",
    stats: { health: "1100", mana: "0/60", armor: "60", mr: "60", dps: "80", speed: "0.85" },
    unlockText: "Một tướng có 40% Hút Máu Toàn Phần (Yêu cầu cấp 8)"
  },
  "Baron": {
    cost: 7,
    image: "assets/face/champ/tft16_baronnashor.avif",
    traits: "Hư Không,Tai Ương",
    ability: "Triệu hồi Baron Nashor hất tung và làm choáng kẻ địch gây sát thương <img src='" + TRAIT_ICONS.AP + "' class='inline-icon'>.",
    stats: { health: "3000", mana: "50/150", armor: "70", mr: "70", dps: "120", speed: "0.8" },
    unlockText: "Triển khai 7 tướng Hư Không khác nhau (Yêu cầu cấp 10)"
  }
};

// --- BIẾN TOÀN CỤC ---
let currentFilterCost = 0; // 0 = All
let currentSearchKeyword = '';

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
  document.getElementById('m-ability').innerHTML = data.ability;

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
