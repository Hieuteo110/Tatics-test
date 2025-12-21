// ============================================
// DỮ LIỆU ĐỘI HÌNH META - SET 16
// Cập nhật: 21/12/2025
// ============================================

const META_COMPS = [
  {
    id: 1,
    name: "Diana Shurima",
    tier: "S",
    difficulty: "Trung Bình",
    avgPlace: 3.01,
    playRate: 0.1,
    patch: "16.1c",
    
    // Đội hình đầy đủ (hiển thị hết ở ngoài)
    champions: [
      { name: "Diana", cost: 4 },
      { name: "Azir", cost: 5 },
      { name: "Renekton", cost: 4 },
      { name: "Swain", cost: 4 },
      { name: "Shyvana", cost: 5 },
      { name: "Seraphine", cost: 4 },
      { name: "Taric", cost: 4 },
      { name: "Neeko", cost: 2 },
      { name: "Vi", cost: 2 }
    ],
    
    
    // Hệ tộc
    traits: ["Shurima", "Fast"],
    
    // Code để paste vào game
    copyCode: "0202335901c02535d34c33634334b000TFTSet16",
    
    // Hướng dẫn
    guide: {
      early: "Dùng tướng Shurima 3 sao để cầm máu. Ưu tiên Diana + Renekton.",
      mid: "Lên level 7, tìm Azir 2 sao. Trang bị AP cho Azir, Tank cho Diana.",
      late: "Lên level 8-9, tìm Swain + Taric. Diana tank trước, Azir deal damage sau.",
      positioning: "Diana hàng đầu giữa, Azir ở góc sau cùng an toàn."
    }
  },
  
  {
    id: 2,
    name: "Azir Shurima",
    tier: "S",
    difficulty: "Khó",
    avgPlace: 3.38,
    playRate: 0.08,
    patch: "16.1c",
    
    champions: [
      { name: "Azir", cost: 5 },
      { name: "Renekton", cost: 4 },
      { name: "Annie", cost: 5 },
      { name: "Shyvana", cost: 5 },
      { name: "Seraphine", cost: 4 },
      { name: "Swain", cost: 4 },
      { name: "Neeko", cost: 2 },
      { name: "Vi", cost: 2 }
    ],
    
    
    traits: ["Shurima", "Fast"],
    
    copyCode: "0235901c35635d34c02534334b000000TFTSet16",
    
    guide: {
      early: "Mở Shurima sớm với Renekton + Annie. Streak thắng nếu được.",
      mid: "Lên 7 tìm Azir. Farm gold để roll 3 sao Azir và Renekton.",
      late: "Lên 8 thêm Swain. Azir 3 sao là win condition chính.",
      positioning: "Renekton tank đầu, Azir ở giữa hàng sau, tránh Assassin."
    }
  },
  
  {
    id: 3,
    name: "Tahm Kench Miss Fortune",
    tier: "S",
    difficulty: "Khó",
    avgPlace: 3.85,
    playRate: 0.35,
    patch: "16.1c",
    
    champions: [
      { name: "Miss Fortune", cost: 4 },
      { name: "Tahm Kench", cost: 5 },
      { name: "Lucian", cost: 5 },
      { name: "Nautilus", cost: 3 },
      { name: "Fiddlesticks", cost: 5 },
      { name: "Ornn", cost: 5 },
      { name: "Shyvana", cost: 5 },
      { name: "Taric", cost: 4 }
    ],
    
    
    
    traits: ["Bilgewater", "Fast"],
    
    copyCode: "0232d36003432235b35735d336350000TFTSet16",
    
    guide: {
      early: "Dùng Tahm Kench 3 sao tank. Thêm 2 Bilgewater để active trait.",
      mid: "Lên 7 tìm Miss Fortune. Ưu tiên đồ AD cho MF trước.",
      late: "Lên 8-9 để active Fast 9. Nautilus tank line 2.",
      positioning: "Tahm tank đầu, MF ở góc sau xa nhất để bắn AOE."
    }
  }
];

window.META_COMPS = META_COMPS;