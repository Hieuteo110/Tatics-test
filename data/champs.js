const CHAMP_DETAILS = {
  // --- TƯỚNG 1 VÀNG ---
  "Anivia": {
    cost: 1,
    image: "assets/face/champ/anivia.avif",
    traits: "Freljord,Thuật Sĩ",
    ability: "Tung ra một mảnh băng vào mục tiêu, gây <span class='text-blue'>325 / 455 / 650</span>[AP] sát thương phép. Nếu chúng bị <span class= 'text-gold'>Tê Tái</span>, sát thương sẽ Chí Mạng.<br><br><i>Tê Tái: Giảm Tốc Độ Đánh</i>",
    stats: { health: "[H]500/900/1260", mana: "[mana]0/40", armor: "[AM]20", mr: "[MR]20", damage: "[AD]30/45/68", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4",
    },
    skillName: "Tê Cóng",
  },
  "Caitlyn": {
    cost: 1,
    image: "assets/face/champ/caitlyn.avif",
    traits: "Piltover,Viễn Kích",
    ability: "Bắn đạn xuyên thấu gây 500 [AD] sát thương vật lý.",
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]5" }
  },
  "Briar": {
    cost: 1,
    image: "assets/face/champ/briar.avif",
    traits: "Noxus,Dũng Sĩ,Đồ Tể",
    ability: "Nhảy tới kẻ địch xa nhất trong phạm vi 2 ô. Trong 4 giây tăng thêm Tốc Độ Di Chuyển, <span class='text-gold'>25%[AD]</span> Sức Mạnh Công Kích và <span class='text-blue'>300%[AP]</span> Tốc Độ Đánh giảm dần.",skillName: "Cuồng Huyết",
   
    stats: { health: "[H]650/1170/2106", mana: "[mana]0/40", armor: "[AM]35", mr: "[MR]35", damage: "[AD]42/63/95", ap: "[AP]100", speed: "[AS]0.75", range: "[Range]1" }
  },
  "Blitzcrank": {
    cost: 1,
    image: "assets/face/champ/blitzcrank.avif",
    traits: "Zaun,Dũng Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.5", range: "[Range]1" }
  },
  "Illaoi": {
    cost: 1,
    image: "assets/face/champ/illaoi.avif",
    traits: "Bilgewater,Đấu Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Jarvan IV": {
    cost: 1,
    image: "assets/face/champ/jarvaniv.avif",
    traits: "Demacia,Vệ Quân",
    ability: "Nhận <span class='text-gold'> 350/425/500[AP]</span> Lá Chắn trong 4 giây. Tăng cho tất cả đồng minh <span class='text-gold'>20%/25%/50%[AP]</span> Tốc Độ Đánh trong 4 giây.",skillName: "Hoàng Kì Demacia",
   
    stats: { health: "[H]700/1260/2268", mana: "[mana]30/100", armor: "[AM]40", mr: "[MR]40", damage: "[AD]55/83/124", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Jhin": {
    cost: 1,
    image: "assets/face/champ/jhin.avif",
    traits: "Ionia,Xạ Thủ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Kog'Maw": {
    cost: 1,
    image: "assets/face/champ/kogmaw.avif",
    traits: "Hư Không,Viễn Kích, Pháp Sư",
    ability: "Gây <span class='text-blue'>140/200/300[AP]</span> sát thương phép lên mục tiêu và giảm Giáp & Kháng Phép của chúng đi <span class='text-gold'>8/10/15[AM][MR]</span>. Các kẻ địch liền kề chịu 50% sát thương và hiệu ứng.",skillName: "Phun axit",
   
    stats: { health: "[H]500/900/1620", mana: "[mana]0/30", armor: "[AM]15", mr: "[MR]15", damage: "[AD]20/30/45", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]6" }
  },
  "Lulu": {
    cost: 1,
    image: "assets/face/champ/lulu.avif",
    traits: "Yordle,Pháp Sư",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Qiyana": {
    cost: 1,
    image: "assets/face/champ/qiyana.avif",
    traits: "Ixtal,Đồ Tể",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Rumble": {
    cost: 1,
    image: "assets/face/champ/rumble.avif",
    traits: "Yordle,Vệ Quân",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Shen": {
    cost: 1,
    image: "assets/face/champ/shen.avif",
    traits: "Ionia,Đấu Sĩ",
    ability: "Trao <span class='text-blue'>250/325/425[AP]</span> Lá Chắn cho đơn vị này và 1 đồng minh chịu sát thương gần đó trong 4 giây.",skillName: "Nhất Thống",
   
    stats: { health: "[H]700/1260/2268", mana: "[mana]30/90", armor: "[AM]40", mr: "[MR]40", damage: "[AD]65/98/146", ap: "[AP]100", speed: "[AS]0.65", range: "[Range]1" }
  },
  "Sona": {
    cost: 1,
    image: "assets/face/champ/sona.avif",
    traits: "Demacia,Thuật Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Viego": {
    cost: 1,
    image: "assets/face/champ/viego.avif",
    traits: "Đảo Bóng Đêm,Cực Tốc",
    ability: "Nội Tại: Nhận <span class='text-gold'>10%[Souls]</span> Tốc Độ Đánh.<br><br>Kích Hoạt: Gây <span class='text-orange'>55/85/125[AD]</span> sát thương vật lý lên mục tiêu. Trong thời gian còn lại của giao tranh, đòn tấn công của Viego gây thêm <span class='text-blue'>18/27/42[AP]</span> sát thương phép có cộng dồn.",skillName: "Lưỡi Gươm Suy Vong",
   
    stats: { health: "[H]650/1170/2160", mana: "[mana]0/30", armor: "[AM]35", mr: "[MR]35", damage: "[AD]40/60/90", ap: "[AP]100", speed: "[AS]0.75", range: "[Range]1" }
  },
  "Ashe": {
    cost: 2,
    image: "assets/face/champ/ashe.avif",
    traits: "Freljord,Cực Tốc",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },

  // --- TƯỚNG 2 VÀNG ---
  "Bard": {
    cost: 2,
    image: "assets/face/champ/bard.avif",
    traits: "Ông Bụt",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" },
    unlockText: "Đổi lại 4 lần trước vòng đi chợ giai đoạn 2"
  },
  "Aphelios": {
    cost: 2,
    image: "assets/face/champ/aphelios.avif",
    traits: "Targon",
    ability: "Bắn pháo sáng gây 150 [AD] + 50 [AP] sát thương.",
    stats: { health: "[H]650", mana: "[mana]100", armor: "[AM]20", mr: "[MR]20", damage: "[AD]45", ap: "[AP]100", speed: "[AS]0.75", range: "[Range]4" }
  },
  "Cho'gath": {
    cost: 2,
    image: "assets/face/champ/chogath.avif",
    traits: "Hư Không,Dũng Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Ekko": {
    cost: 2,
    image: "assets/face/champ/ekko.avif",
    traits: "Zaun,Nhiễu Loạn",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Graves": {
    cost: 2,
    image: "assets/face/champ/graves.avif",
    traits: "Bilgewater,Xạ Thủ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" },
    unlockText: "Triển khai trong giao tranh: Twisted Fate mang 2 trang bị"
  },
  "Neeko": {
    cost: 2,
    image: "assets/face/champ/neeko.avif",
    traits: "Ixtal,Vệ Quân",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Orianna": {
    cost: 2,
    image: "assets/face/champ/orianna.avif",
    traits: "Piltover,Thuật Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" },
    unlockText: "Triển khai trong giao tranh: 3 tướng Piltover khác nhau"
  },
  "Poppy": {
    cost: 2,
    image: "assets/face/champ/poppy.avif",
    traits: "Demacia,Vệ Quân",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" },
    unlockText: "Triển khai trong giao tranh: Tướng Demacia hoặc tướng Yordle mang 2 trang bị"
  },
  "Yasuo": {
    cost: 2,
    image: "assets/face/champ/yasuo.avif",
    traits: "Ionia,Đồ Tể",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Sion": {
    cost: 2,
    image: "assets/face/champ/sion.avif",
    traits: "Noxus,Đấu Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Rek'Sai": {
    cost: 2,
    image: "assets/face/champ/reksai.avif",
    traits: "Hư Không,Chinh Phạt",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Tryndamere": {
    cost: 2,
    image: "assets/face/champ/tryndamere.avif",
    traits: "Freljord,Đồ Tể",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" },
    unlockText: "Triển khai trong giao tranh: Ashe mang 2 trang bị"
  },
  "Teemo": {
    cost: 2,
    image: "assets/face/champ/teemo.avif",
    traits: "Yordle,Viễn Kích",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Tristana": {
    cost: 2,
    image: "assets/face/champ/tristana.avif",
    traits: "Yordle,Xạ Thủ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Twisted Fate": {
    cost: 2,
    image: "assets/face/champ/twistedfate.avif",
    traits: "Bilgewater,Cực Tốc",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Xin Zhao": {
    cost: 2,
    image: "assets/face/champ/xinzhao.avif",
    traits: "Demacia,Ionia,Vệ Quân",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Yorick": {
    cost: 2,
    image: "assets/face/champ/yorick.avif",
    traits: "Đảo Bóng Đêm,Cảnh Vệ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" },
    unlockText: "Triển khai trong giao tranh: Viego 2 sao mang 2 trang bị"
  },

  // --- TƯỚNG 3 VÀNG ---
  "Draven": {
    cost: 3,
    image: "assets/face/champ/draven.avif",
    traits: "Noxus,Cực Tốc",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Jinx": {
    cost: 3,
    image: "assets/face/champ/jinx.avif",
    traits: "Zaun,Xạ Thủ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Ahri": {
    cost: 3,
    image: "assets/face/champ/ahri.avif",
    traits: "Ionia,Pháp Sư",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Gangplank": {
    cost: 3,
    image: "assets/face/champ/gangplank.avif",
    traits: "Bilgewater,Đồ Tể,Chinh Phạt",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Kennen": {
    cost: 3,
    image: "assets/face/champ/kennen.avif",
    traits: "Yordle,Ionia,Vệ Quân",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Kobuko & Yuumi": {
    cost: 3,
    image: "assets/face/champ/kobuko.avif",
    traits: "Yordle,Thuật Sĩ,Đấu Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "LeBlanc": {
    cost: 3,
    image: "assets/face/champ/leblanc.avif",
    traits: "Noxus,Thuật Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Leona": {
    cost: 3,
    image: "assets/face/champ/leona.avif",
    traits: "Targon",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Loris": {
    cost: 3,
    image: "assets/face/champ/loris.avif",
    traits: "Piltover,Cảnh Vệ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Malzahar": {
    cost: 3,
    image: "assets/face/champ/malzahar.avif",
    traits: "Hư Không,Nhiễu Loạn",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Milio": {
    cost: 3,
    image: "assets/face/champ/milio.avif",
    traits: "Ixtal,Thuật Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Nautilus": {
    cost: 3,
    image: "assets/face/champ/nautilus.avif",
    traits: "Bilgewater,Dũng Sĩ,Cảnh Vệ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Sejuani": {
    cost: 3,
    image: "assets/face/champ/sejuani.avif",
    traits: "Freljord,Vệ Quân",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Vayne": {
    cost: 3,
    image: "assets/face/champ/vayne.avif",
    traits: "Demacia,Viễn Kích",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Zoe": {
    cost: 3,
    image: "assets/face/champ/zoe.avif",
    traits: "Targon",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },

  // --- TƯỚNG 4 VÀNG ---
  "Ambessa": {
    cost: 4,
    image: "assets/face/champ/ambessa.avif",
    traits: "Noxus,Chinh Phạt",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Bel'Veth": {
    cost: 4,
    image: "assets/face/champ/belveth.avif",
    traits: "Hư Không,Đồ Tể",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Braum": {
    cost: 4,
    image: "assets/face/champ/braum.avif",
    traits: "Freljord,Cảnh Vệ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Diana": {
    cost: 4,
    image: "assets/face/champ/diana.avif",
    traits: "Targon",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Fizz": {
    cost: 4,
    image: "assets/face/champ/fizz.avif",
    traits: "Yordle,Bilgewater",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Garen": {
    cost: 4,
    image: "assets/face/champ/garen.avif",
    traits: "Demacia,Vệ Quân",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Kai'Sa": {
    cost: 4,
    image: "assets/face/champ/kaisa.avif",
    traits: "Hư Không,Viễn Kích,Cộng Sinh",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Kalista": {
    cost: 4,
    image: "assets/face/champ/kalista.avif",
    traits: "Đảo Bóng Đêm,Chinh Phạt",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Lissandra": {
    cost: 4,
    image: "assets/face/champ/lissandra.avif",
    traits: "Freljord,Thuật Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Lux": {
    cost: 4,
    image: "assets/face/champ/lux.avif",
    traits: "Demacia,Pháp Sư",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
   "Nasus": {
    cost: 4,
    image: "assets/face/champ/nasus.avif",
    traits: "Shurima",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Miss Fortune": {
    cost: 4,
    image: "assets/face/champ/missfortune.avif",
    traits: "Bilgewater,Xạ Thủ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Ngộ Không": {
    cost: 4,
    image: "assets/face/champ/wukong.avif",
    traits: "Ionia,Đấu Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Nidalee": {
    cost: 4,
    image: "assets/face/champ/nidalee.avif",
    traits: "Ixtal,Nữ Thợ Săn",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Renekton": {
    cost: 4,
    image: "assets/face/champ/renekton.avif",
    traits: "Shurima",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Seraphine": {
    cost: 4,
    image: "assets/face/champ/seraphine.avif",
    traits: "Piltover,Nhiễu Loạn",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Singed": {
    cost: 4,
    image: "assets/face/champ/singed.avif",
    traits: "Zaun,Dũng Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Skarner": {
    cost: 4,
    image: "assets/face/champ/skarner.avif",
    traits: "Ixtal",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Swain": {
    cost: 4,
    image: "assets/face/champ/swain.avif",
    traits: "Noxus,Dũng Sĩ,Pháp Sư",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Taric": {
    cost: 4,
    image: "assets/face/champ/taric.avif",
    traits: "Targon",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Sứ Giả Khe Nứt": {
    cost: 4,
    image: "assets/face/champ/riftherald.avif",
    traits: "Hư Không,Đấu Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Veigar": {
    cost: 4,
    image: "assets/face/champ/veigar.avif",
    traits: "Yordle,Pháp Sư",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }},
      "Yone": {
    cost: 4,
    image: "assets/face/champ/yone.avif",
    traits: "Ionia,Đồ Tể",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Yunara": {
    cost: 4,
    image: "assets/face/champ/yunara.avif",
    traits: "Ionia,Cực Tốc",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Warwick": {
    cost: 4,
    image: "assets/face/champ/warwick.avif",
    traits: "Zaun,Cực Tốc",
    ability: "Hồi máu liên tục theo đòn đánh gây [AD].",
    stats: { health: "[H]900", mana: "[mana]0/0", armor: "[AM]40", mr: "[MR]40", damage: "[AD]60", ap: "[AP]100", speed: "[AS]0.8", range: "[Range]1" },
    unlockText: "Triển khai: Jinx 1 sao + Vi 2 sao (Yêu cầu cấp 7)"
  },
  "Gwen": {
    cost: 3,
    image: "assets/face/champ/gwen.avif",
    traits: "Đảo Bóng Đêm,Nhiễu Loạn",
    ability: "Lướt tới và cắt kéo gây sát thương chuẩn dựa trên [AP].",
    stats: { health: "[H]800", mana: "[mana]0/20", armor: "[AM]30", mr: "[MR]30", damage: "[AD]50", ap: "[AP]100", speed: "[AS]0.8", range: "[Range]1" },
    unlockText: "Thu thập 20 Linh Hồn Đảo Bóng Đêm"
  },

  // --- TƯỚNG 5 VÀNG ---
  "Aatrox": {
    cost: 5,
    image: "assets/face/champ/aatrox.avif",
    traits: "Darkin,Quỷ Kiếm,Đồ Tể",
    ability: "Hóa quỷ, hút máu toàn phần và gây sát thương [AD] diện rộng.",
    stats: { health: "[H]1100", mana: "[mana]0/60", armor: "[AM]60", mr: "[MR]60", damage: "[AD]80", ap: "[AP]100", speed: "[AS]0.85", range: "[Range]1" },
    unlockText: "Một tướng có 40% Hút Máu Toàn Phần (Yêu cầu cấp 8)"
  },
  "Annie": {
    cost: 5,
    image: "assets/face/champ/annie.avif",
    traits: "Đứa Trẻ Bóng Tối,Pháp Sư",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Azir": {
    cost: 5,
    image: "assets/face/champ/azir.avif",
    traits: "Hoàng Đế,Shurima,Nhiễu Loạn",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Fiddlesticks": {
    cost: 5,
    image: "assets/face/champ/fiddlesticks.avif",
    traits: "Bù Nhìn,Chinh Phạt",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Galio": {
    cost: 5,
    image: "assets/face/champ/galio.avif",
    traits: "Demacia,Siêu Hùng",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Kindred": {
    cost: 5,
    image: "assets/face/champ/kindred.avif",
    traits: "Vĩnh Hằng,Cực Tốc",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Lucian & Senna": {
    cost: 5,
    image: "assets/face/champ/luciansenna.avif",
    traits: "Xạ Thủ,Linh Hồn",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Mel": {
    cost: 5,
    image: "assets/face/champ/mel.avif",
    traits: "Noxus,Nhiễu Loạn",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Ornn": {
    cost: 5,
    image: "assets/face/champ/ornn.avif",
    traits: "Thần Rèn,Cảnh Vệ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Sett": {
    cost: 5,
    image: "assets/face/champ/sett.avif",
    traits: "Ionia,Đại Ca",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Shyvana": {
    cost: 5,
    image: "assets/face/champ/shyvana.avif",
    traits: "Long Nữ,Dũng Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "T-Hex": {
    cost: 5,
    image: "assets/face/champ/thex.avif",
    traits: "Cơ Giáp Hex,Piltover,Xạ Thủ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Tahm Kench": {
    cost: 5,
    image: "assets/face/champ/tahmkench.avif",
    traits: "Bilgewater,Đấu Sĩ,Phàm Ăn",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Thresh": {
    cost: 5,
    image: "assets/face/champ/thresh.avif",
    traits: "Đảo Bóng Đêm,Cảnh Vệ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]2" }
  },
  "Tibbers": {
    cost: 5,
    image: "assets/face/champ/annietibbers.avif",
    traits: "Pháp Sư",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Volibear": {
    cost: 5,
    image: "assets/face/champ/volibear.avif",
    traits: "Freljord,Đấu Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Xerath": {
    cost: 5,
    image: "assets/face/champ/xerath.avif",
    traits: "Shurima,Thăng Hoa",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Ziggs": {
    cost: 5,
    image: "assets/face/champ/ziggs.avif",
    traits: "Yordle,Zaun,Viễn Kích",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Zilean": {
    cost: 5,
    image: "assets/face/champ/zilean.avif",
    traits: "Giám Hộ,Thuật Sĩ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },

  // --- TƯỚNG 7 VÀNG ---
  "Baron": {
    cost: 7,
    image: "assets/face/champ/baronnashor.avif",
    traits: "Hư Không,Tai Ương",
    ability: "Triệu hồi Baron Nashor...",
    stats: { health: "[H]3000", mana: "[mana]50/150", armor: "[AM]70", mr: "[MR]70", damage: "[AD]120", ap: "[AP]100", speed: "[AS]0.8", range: "[Range]1" },
    unlockText: "Triển khai 7 tướng Hư Không khác nhau (Yêu cầu cấp 10)"
  },
  "Aurelion Sol": {
    cost: 7,
    image: "assets/face/champ/aurelionsol.avif",
    traits: "Ác Long,Targon",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]4" }
  },
  "Brock": {
    cost: 7,
    image: "assets/face/champ/brock.avif",
    traits: "Ixtal",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.6", range: "[Range]1" }
  },
  "Ryze": {
    cost: 7,
    image: "assets/face/champ/ryze.avif",
    traits: "Cổ Ngữ",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]3" }
  },
  "Sylas": {
    cost: 7,
    image: "assets/face/champ/sylas.avif",
    traits: "Kẻ Phá Xiềng,Pháp Sư,Vệ Quân",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  },
  "Zaahen": {
    cost: 7,
    image: "assets/face/champ/zaahen.avif",
    traits: "Darkin,Bất Tử,Ionia,Cảnh Vệ,Demacia",
    ability: "",skillName: "Tướng",
   
    stats: { health: "[H]500", mana: "[mana]80", armor: "[AM]15", mr: "[MR]15", damage: "[AD]31", ap: "[AP]100", speed: "[AS]0.7", range: "[Range]1" }
  }
};

 