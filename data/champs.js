const CHAMP_DETAILS = {
  "Caitlyn": {
    cost: 1,
    image: "assets/face/champ/caitlyn.avif",
    traits: "Piltover,Viễn Kích", 
    ability: "Bắn đạn xuyên thấu gây 500 [AD] sát thương vật lý.",
    stats: { health: "500", mana: "0/80", armor: "15", mr: "15", dps: "31", speed: "0.7" }
  },
  "Anivia": {
    cost: 1,
    image: "assets/face/champ/anivia.avif",
    traits: "Freljord,Thuật Sĩ",
    ability: "[Freljord",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Briar": {
    cost: 1,
    image: "assets/face/champ/briar.avif",
    traits: "Noxus,Dũng Sĩ,Đồ Tể",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Blitzcrank": {
    cost: 1,
    image: "assets/face/champ/blitzcrank.avif",
    traits: "Zaun,Dũng Sĩ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Illaoi": {
    cost: 1,
    image: "assets/face/champ/illaoi.avif",
    traits: "Bilgewater,Đấu Sĩ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Jarvan IV": {
    cost: 1,
    image: "assets/face/champ/jarvaniv.avif",
    traits: "Demacia,Vệ Quân",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Jhin": {
    cost: 1,
    image: "assets/face/champ/jhin.avif",
    traits: "Ionia,Xạ Thủ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Kog'Maw": {
    cost: 1,
    image: "assets/face/champ/kogmaw.avif",
    traits: "Hư Không,Viễn Kích",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Lulu": {
    cost: 1,
    image: "assets/face/champ/lulu.avif",
    traits: "Yordle,Pháp Sư",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Qiyana": {
    cost: 1,
    image: "assets/face/champ/qiyana.avif",
    traits: "Ixtal,Đồ Tể",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Rumble": {
    cost: 1,
    image: "assets/face/champ/rumble.avif",
    traits: "Yordle,Vệ Quân",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Shen": {
    cost: 1,
    image: "assets/face/champ/shen.avif",
    traits: "Ionia,Đấu Sĩ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Sona": {
    cost: 1,
    image: "assets/face/champ/sona.avif",
    traits: "Demacia,Thuật Sĩ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Viego": {
    cost: 1,
    image: "assets/face/champ/viego.avif",
    traits: "Đảo Bóng Đêm,Cực Tốc",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Ashe": {
    cost: 1,
    image: "assets/face/champ/ashe.avif",
    traits: "Freljord,Cực Tốc",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Bard": {
    cost: 2,
    image: "assets/face/champ/bard.avif",
    traits: "Ông Bụt",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" },
    unlockText: "Đổi lại 4 lần trước vòng đi chợ giai đoạn 2"
  },
  "Aphelios": {
    cost: 2,
    image: "assets/face/champ/aphelios.avif",
    traits: "Targon",
    ability: "Bắn pháo sáng gây 150 [AD] + 50 [AP] sát thương.",
    stats: { health: "650", mana: "40/100", armor: "20", mr: "20", dps: "45", speed: "0.75" }
  },
  "Cho'gath": {
    cost: 2,
    image: "assets/face/champ/chogath.avif",
    traits: "Hư Không,Dũng Sĩ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Ekko": {
    cost: 2,
    image: "assets/face/champ/ekko.avif",
    traits: "Zaun,Nhiễu Loạn",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Graves": {
    cost: 2,
    image: "assets/face/champ/graves.avif",
    traits: "Bilgewater,Xạ Thủ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }, unlockText: "Triển khai trong giao tranh: Twisted Fate mang 2 trang bị"
  },
  "Neeko": {
    cost: 2,
    image: "assets/face/champ/neeko.avif",
    traits: "Ixtal,Vệ Quân",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Orianna": {
    cost: 2,
    image: "assets/face/champ/orianna.avif",
    traits: "Piltover,Thuật Sĩ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" },unlockText: "Triển khai trong giao tranh: 3 tướng Piltover khác nhau"
  },
  "Poppy": {
    cost: 2,
    image: "assets/face/champ/poppy.avif",
    traits: "Demacia,Vệ Quân",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }, unlockText: "Triển khai trong giao tranh: Tướng Demacia hoặc tướng Yordle mang 2 trang bị"
  },
  "Yasuo": {
    cost: 2,
    image: "assets/face/champ/yasuo.avif",
    traits: "Ionia,Đồ Tể",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Sion": {
    cost: 2,
    image: "assets/face/champ/sion.avif",
    traits: "Noxus,Đấu Sĩ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Rek'Sai": {
    cost: 2,
    image: "assets/face/champ/reksai.avif",
    traits: "Hư Không,Chinh Phạt",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Tryndamere": {
    cost: 2,
    image: "assets/face/champ/tryndamere.avif",
    traits: "Freljord,Đồ Tể",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" },unlockText:"Triển khai trong giao tranh: Ashe mang 2 trang bị "
  },
  "Teemo": {
    cost: 2,
    image: "assets/face/champ/teemo.avif",
    traits: "Yordle,Viễn Kích",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Tristana": {
    cost: 2,
    image: "assets/face/champ/tristana.avif",
    traits: "Yordle,Xạ Thủ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Twisted Fate": {
    cost: 2,
    image: "assets/face/champ/twistedfate.avif",
    traits: "Bilgewater,Cực Tốc",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Xin Zhao": {
    cost: 2,
    image: "assets/face/champ/xinzhao.avif",
    traits: "Demacia,Ionia,Vệ Quân",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }
  },
  "Yorick": {
    cost: 2,
    image: "assets/face/champ/yorick.avif",
    traits: "Đảo Bóng Đêm,Cảnh Vệ",
    ability: "",
    stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" },unlockText:"Triển khai trong giao tranh: Viego 2 sao mang 2 trang bị"
  },
  "Draven": {
  cost: 3,
  image: "assets/face/champ/draven.avif",
  traits: "Noxus ,Cực Tốc ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Jinx": {
  cost: 3,
  image: "assets/face/champ/jinx.avif",
  traits: "Zaun ,Xạ Thủ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Ahri": {
  cost: 3,
  image: "assets/face/champ/ahri.avif",
  traits: "Ionia ,Pháp Sư ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Gangplank": {
  cost: 3,
  image: "assets/face/champ/gangplank.avif",
  traits: "Bilgewater ,Đồ Tể, Chinh Phạt ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Kennen": {
  cost: 3,
  image: "assets/face/champ/kennen.avif",
  traits: "Yordle ,Ionia, Vệ Quân ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Kobuko & Yuumi": {
  cost: 3,
  image: "assets/face/champ/kobuko.avif",
  traits: "Yordle ,Thuật Sĩ, Đấu Sĩ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "LeBlanc": {
  cost: 3,
  image: "assets/face/champ/leblanc.avif",
  traits: "Noxus ,Thuật Sĩ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Leona": {
  cost: 3,
  image: "assets/face/champ/leona.avif",
  traits: "Targon",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Loris": {
  cost: 3,
  image: "assets/face/champ/loris.avif",
  traits: "Piltover ,Cảnh Vệ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Malzahar": {
  cost: 3,
  image: "assets/face/champ/malzahar.avif",
  traits: "Hư Không ,Nhiễu Loạn ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Milio": {
  cost: 3,
  image: "assets/face/champ/milio.avif",
  traits: "Ixtal ,Thuật Sĩ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Nautilus": {
  cost: 3,
  image: "assets/face/champ/nautilus.avif",
  traits: "Bilgewater ,Dũng Sĩ, Cảnh Vệ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Sejuani": {
  cost: 3,
  image: "assets/face/champ/sejuani.avif",
  traits: "Freljord ,Vệ Quân ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Vayne": {
  cost: 3,
  image: "assets/face/champ/vayne.avif",
  traits: "Demacia , Viễn Kích",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Zoe": {
  cost: 3,
  image: "assets/face/champ/zoe.avif",
  traits: "Targon ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Ambessa": {
  cost: 4,
  image: "assets/face/champ/ambessa.avif",
  traits: "Noxus ,Chinh Phạt ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Bel'Veth": {
  cost: 4,
  image: "assets/face/champ/belveth.avif",
  traits: "Hư Không ,Đồ Tể ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Braum": {
  cost: 4,
  image: "assets/face/champ/braum.avif",
  traits: "Freljord ,Cảnh Vệ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Diana": {
  cost: 4,
  image: "assets/face/champ/diana.avif",
  traits: "Targon",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Fizz": {
  cost: 4,
  image: "assets/face/champ/fizz.avif",
  traits: "Yordle , Bilgewater",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Garen": {
  cost: 4,
  image: "assets/face/champ/garen.avif",
  traits: "Demacia ,Vệ Quân ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Kai'Sa": {
  cost: 4,
  image: "assets/face/champ/kaisa.avif",
  traits: "Hư Không ,Viễn Kích, Cộng Sinh",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Kalista": {
  cost: 4,
  image: "assets/face/champ/kalista.avif",
  traits: "Đảo Bóng Đêm ,Chinh Phạt ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Lissandra": {
  cost: 4,
  image: "assets/face/champ/lissandra.avif",
  traits: "Freljord ,Thuật Sĩ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Lux": {
  cost: 4,
  image: "assets/face/champ/lux.avif",
  traits: "Demacia ,Pháp Sư ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Nasus": {
  cost: 4,
  image: "assets/face/champ/nasus.avif",
  traits: "Shurima ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Miss Fortune": {
  cost: 4,
  image: "assets/face/champ/missfortune.avif",
  traits: "Bilgewater ,Xạ Thủ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Ngộ Không": {
  cost: 4,
  image: "assets/face/champ/wukong.avif",
  traits: "Ionia ,Đấu Sĩ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Nidalee": {
  cost: 4,
  image: "assets/face/champ/nidalee.avif",
  traits: "Ixtal ,Nữ Thợ Săn ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Renekton": {
  cost: 4,
  image: "assets/face/champ/renekton.avif",
  traits: "Shurima ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Seraphine": {
  cost: 4,
  image: "assets/face/champ/seraphine.avif",
  traits: "Piltover ,Nhiễu Loạn ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Singed": {
  cost: 4,
  image: "assets/face/champ/singed.avif",
  traits: "Zaun ,Dũng Sĩ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Skarner": {
  cost: 4,
  image: "assets/face/champ/skarner.avif",
  traits: "Ixtal ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Swain": {
  cost: 4,
  image: "assets/face/champ/swain.avif",
  traits: "Noxus, Dũng Sĩ, Pháp Sư ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Taric": {
  cost: 4,
  image: "assets/face/champ/taric.avif",
  traits: "Targon ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Sứ Giả Khe Nứt": {
  cost: 4,
  image: "assets/face/champ/riftherald.avif",
  traits: "Hư Không, Đấu Sĩ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Veigar": {
  cost: 4,
  image: "assets/face/champ/veigar.avif",
  traits: "Yordle, Pháp Sư ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Yone": {
  cost: 4,
  image: "assets/face/champ/yone.avif",
  traits: "Ionia, Đồ Tể ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Yunara": {
  cost: 4,
  image: "assets/face/champ/yunara.avif",
  traits: "Ionia, Cực Tốc",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Warwick": {
    cost: 4,
    image: "assets/face/champ/warwick.avif",
    traits: "Zaun,Cực Tốc",
    ability: "Hồi máu liên tục theo đòn đánh gây [AD].",
    stats: { health: "900", mana: "0/0", armor: "40", mr: "40", dps: "60", speed: "0.8" },
    unlockText: "Triển khai: Jinx 1 sao + Vi 2 sao (Yêu cầu cấp 7)"
  },
  "Gwen": {
    cost: 3,
    image: "assets/face/champ/gwen.avif",
    traits: "Đảo Bóng Đêm,Nhiễu Loạn",
    ability: "Lướt tới và cắt kéo gây sát thương chuẩn dựa trên [AP].",
    stats: { health: "800", mana: "0/20", armor: "30", mr: "30", dps: "50", speed: "0.8" },
    unlockText: "Thu thập 20 Linh Hồn Đảo Bóng Đêm"
  },
  "Aatrox": {
    cost: 5,
    image: "assets/face/champ/aatrox.avif",
    traits: "Darkin,Quỷ Kiếm,Đồ Tể",
    ability: "Hóa quỷ, hút máu toàn phần và gây sát thương [AD] diện rộng.",
    stats: { health: "1100", mana: "0/60", armor: "60", mr: "60", dps: "80", speed: "0.85" },
    unlockText: "Một tướng có 40% Hút Máu Toàn Phần (Yêu cầu cấp 8)"
  },
    "Annie": {
  cost: 5,
  image: "assets/face/champ/annie.avif",
  traits: "Đứa Trẻ Bóng Tối, Pháp Sư ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Azir": {
  cost: 5,
  image: "assets/face/champ/azir.avif",
  traits: "Hoàng Đế, Shurima, Nhiễu Loạn ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Fiddlesticks": {
  cost: 5,
  image: "assets/face/champ/fiddlesticks.avif",
  traits: "Bù Nhìn, Chinh Phạt ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Galio": {
  cost: 5,
  image: "assets/face/champ/galio.avif",
  traits: "Demacia, Siêu Hùng ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Kindred": {
  cost: 5,
  image: "assets/face/champ/kindred.avif",
  traits: "Vĩnh Hằng, Cực Tốc",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Lucian & Senna": {
  cost: 5,
  image: "assets/face/champ/luciansenna.avif",
  traits: "Xạ Thủ, Linh Hồn ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Mel": {
  cost: 5,
  image: "assets/face/champ/mel.avif",
  traits: "Noxus, Nhiễu Loạn ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Ornn": {
  cost: 5,
  image: "assets/face/champ/ornn.avif",
  traits: "Thần Rèn, Cảnh Vệ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Sett": {
  cost: 5,
  image: "assets/face/champ/sett.avif",
  traits: "Ionia, Đại Ca ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Shyvana": {
  cost: 5,
  image: "assets/face/champ/shyvana.avif",
  traits: "Long Nữ, Dũng Sĩ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "T-Hex": {
  cost: 5,
  image: "assets/face/champ/thex.avif",
  traits: "Cơ Giáp Hex, Piltover, Xạ Thủ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Tahm Kench": {
  cost: 5,
  image: "assets/face/champ/tahmkench.avif",
  traits: "Bilgewater, Đấu Sĩ, Phàm Ăn ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  
      "Thresh": {
  cost: 5,
  image: "assets/face/champ/thresh.avif",
  traits: "Đảo Bóng Đêm, Cảnh Vệ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Tibbers": {
  cost: 5,
  image: "assets/face/champ/annietibbers.avif",
  traits: "Pháp Sư ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Volibear": {
  cost: 5,
  image: "assets/face/champ/volibear.avif",
  traits: "Freljord, Đấu Sĩ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Xerath": {
  cost: 5,
  image: "assets/face/champ/xerath.avif",
  traits: "Shurima, Thăng Hoa ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Ziggs": {
  cost: 5,
  image: "assets/face/champ/ziggs.avif",
  traits: "Yordle,Zaun, Viễn Kích ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
      "Zilean": {
  cost: 5,
  image: "assets/face/champ/zilean.avif",
  traits: "Giám Hộ, Thuật Sĩ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
  "Baron": {
    cost: 7,
    image: "assets/face/champ/baronnashor.avif",
    traits: "Hư Không,Tai Ương",
    ability: "Triệu hồi Baron Nashor hất tung và làm choáng kẻ địch gây sát thương [AP].",
    stats: { health: "3000", mana: "50/150", armor: "70", mr: "70", dps: "120", speed: "0.8" },
    unlockText: "Triển khai 7 tướng Hư Không khác nhau (Yêu cầu cấp 10)"
  },
      "Aurelion Sol": {
  cost: 7,
  image: "assets/face/champ/aurelionsol.avif",
  traits: "Ác Long, Targon ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Brock": {
  cost: 7,
  image: "assets/face/champ/brock.avif",
  traits: "Ixtal ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Ryze": {
  cost: 7,
  image: "assets/face/champ/ryze.avif",
  traits: "Cổ Ngữ ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Sylas": {
  cost: 7,
  image: "assets/face/champ/sylas.avif",
  traits: "Kẻ Phá Xiềng, Pháp Sư, Vệ Quân ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
    "Zaahen": {
  cost: 7,
  image: "assets/face/champ/zaahen.avif",
  traits: "Darkin, Bất Tử, Ionia,Cảnh Vệ,Demacia ",
  ability: "",
  stats: { health: "500", mana: "80", armor: "15", mr: "15", dps: "31", speed: "0" }},
};