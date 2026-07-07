/* ============================================================================
   ★★★ サイトのデータはすべてここで管理 ★★★
   テキスト・画像を差し替えたいときは、この SITE_DATA だけを編集すればOK。

   ▼ 学年と制作物（Work）の紐付け方
     timeline の各項目に id（y1〜y5）があり、
     worksList の各作品の gradeIds にその id を入れる（複数可）。
     学年をクリックすると「その年のWork」として表示されます。

   ▼ Workと場所の紐付け方
     各Workの place: { label, x, y } が地球儀上のピンになります。
     x, y は地球儀SVG（viewBox 800×800 / 中心400,400）上の座標です。
============================================================================ */
const SITE_DATA = {

  /* ---------- プロフィール ---------- */
  profile: {
    nameEn: "HANA TABINO",
    nameJa: "旅野 はな — 大学4年生",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop",
    bio: "高知を拠点に、旅先の空気、季節の花、土地の食と人に出会いながら学んできました。フィールドワークで見つけた「好き」を、デザインとことばに仕立てています。",
    keywords: ["Fieldwork", "Gastronomy", "Local Design", "Photography", "Travel Writing"],
  },

  /* ---------- HOME ---------- */
  hero: {
    kicker: "Portfolio of a wandering student",
    lead: "東京で生まれ、高知で学び、世界へ。大学4年間のフィールドワークと実習の軌跡を、ひとつの旅路としてまとめました。",
    name: "Hana Tabino — Portfolio 2026",
  },

  /* ---------- ABOUT ---------- */
  about: {
    lead: "1年生の春、わたしはまだ固い蕾でした。年をクリックすると、その年の記録とWorkがひらきます。",
  },

  /* ---------- タイムライン（activities＝その年にやったこと） ---------- */
  timeline: [
    {
      id: "y1", year: "2022", grade: "1年生", stage: "蕾のとき",
      title: "はじめての離陸", tag: "SEED & BUD",
      text: "高知での大学生活がスタート。スイスのサマースクールで初めて海を越え、須崎のスプリングスクールで地域に飛び込む。固い蕾の中に、旅の種が蒔かれた一年。",
      activities: [
        "スイス・サマースクールに参加、初めての海外で視野がひらく",
        "須崎スプリングスクール（1回目）で地域フィールドワークを初体験",
        "基礎ゼミで「地域と食」に興味を持つ",
        "フリーコーヒーの活動に出会い、メンバーに",
      ],
    },
    {
      id: "y2", year: "2023", grade: "2年生", stage: "ほころびはじめ",
      title: "足元の高知を歩く", tag: "FIRST STEPS",
      text: "遠くへ行く前に、まず足元から。てくてく高知プロジェクトで県内を歩きまわり、フリーコーヒーで人と話す。ローカルの面白さに目覚めた一年。",
      activities: [
        "てくてく高知プロジェクトで県内の町を歩いて記録",
        "フリーコーヒーを学内外で定期開催、対話の場づくりを学ぶ",
        "須崎スプリングスクール（2回目）にスタッフ側で参加",
        "写真と文章での記録手法を独学で磨く",
      ],
    },
    {
      id: "y3", year: "2024", grade: "3年生", stage: "五分咲き",
      title: "食で世界とつながる", tag: "HALF BLOOM",
      text: "タイでのガストロノミーフィールドワークで「食は土地の物語だ」と確信。えひめ・こうち食べる通信の編集実習で、生産者のことばを届ける仕事を経験した一年。",
      activities: [
        "タイ・ガストロノミーフィールドワークで現地の食文化を調査",
        "えひめ・こうち食べる通信の編集実習に参加",
        "須崎スプリングスクール（3回目）で企画運営を担当",
        "フィールドノートをZINEにまとめて学内で頒布",
      ],
    },
    {
      id: "y4", year: "2025", grade: "4年生", stage: "開花",
      title: "イタリアで学ぶ、大輪の一年", tag: "FULL BLOOM",
      text: "イタリア留学で食科学と地域デザインを学ぶ。4年間で集めた旅と実習の記録を、このポートフォリオに仕立てた。花はいま、いちばん大きくひらいている。",
      activities: [
        "イタリア留学（食科学・地域デザインを学ぶ）",
        "留学中に各地の市場と食堂をフィールドワーク",
        "卒業研究「食と地域の物語のデザイン」に着手",
        "このポートフォリオサイトを自分の手でコーディング",
      ],
    },
    {
      id: "y5", year: "2026", grade: "そして未来へ", stage: "満開、その先へ",
      title: "次の目的地へ搭乗", tag: "NEXT JOURNEY",
      text: "咲いた花は、やがて種を飛ばす。高知で学んだローカルの目と、世界で得た視野を持って、次の空へ。搭乗ゲートはもう開いています。",
      activities: [
        "「食×地域×デザイン」をライフワークに、社会へ離陸予定",
        "世界のローカルを巡る旅の続きへ",
      ],
    },
  ],

  /* ---------- WORKS ---------- */
  works: {
    lead: "4年間のフィールドワーク・留学・実習を、クローゼットに一着ずつ掛けました。服をタップすると地球儀が回り、その舞台になった場所にピンが刺さります。",
  },

  /* ---------- Work一覧（place＝地球儀上の場所 / gradeIds＝関わった学年） ---------- */
  worksList: [
    {
      id: "w1", no: "01", title: "SUMMER SCHOOL", category: "海外プログラム",
      gradeIds: ["y1"], year: "2022", role: "参加学生",
      place: { label: "SWITZERLAND", x: 268, y: 278 },
      description: "スイスでの国際サマースクール。初めての海外。",
      detail: "1年生の夏、スイスで開催された国際サマースクールに参加。各国の学生と寮生活を送りながら、サステナビリティと観光をテーマにフィールド調査を行いました。英語での議論に食らいつく毎日が、「世界はこんなに広い」という原体験になりました。",
      did: [
        "各国の学生との混成チームでフィールド調査",
        "山岳地域の観光と環境保全についての事例研究",
        "最終プレゼンテーションを英語で実施",
      ],
      outcome: "初めての海外経験が、その後の4年間の旅と学びの原点に。",
      image: "https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?w=1200&q=80&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format&fit=crop",
      ],
      tags: ["International", "Sustainability", "English"], link: "#",
    },
    {
      id: "w2", no: "02", title: "SPRING SCHOOL", category: "国内プログラム",
      gradeIds: ["y1", "y2", "y3"], year: "2022–2024", role: "参加者 → スタッフ → 企画運営",
      place: { label: "SUSAKI, JAPAN", x: 556, y: 452 },
      description: "須崎で毎春開催される地域滞在型プログラムに3年連続参加。",
      detail: "高知県須崎市で毎年春に開催される地域滞在型のスプリングスクール。1年生では参加者として、2年生ではスタッフとして、3年生では企画運営側として、立場を変えながら3年連続で関わりました。同じ町に通い続けたからこそ見えた、地域の変化と人のつながりが財産です。",
      did: [
        "1年目：参加者として地域課題フィールドワーク",
        "2年目：運営スタッフとして参加者をサポート",
        "3年目：プログラムの企画設計と当日運営を担当",
      ],
      outcome: "3年間の継続参加で、地域との長期的な関係づくりを実践的に学んだ。",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80&auto=format&fit=crop",
      ],
      tags: ["Local", "Community", "Facilitation"], link: "#",
    },
    {
      id: "w3", no: "03", title: "GASTRONOMY FIELDWORK", category: "フィールドワーク",
      gradeIds: ["y3"], year: "2024", role: "調査・記録担当",
      place: { label: "THAILAND", x: 426, y: 486 },
      description: "タイの食文化を巡るガストロノミーフィールドワーク。",
      detail: "3年生の夏、タイでのガストロノミーフィールドワークに参加。バンコクの市場から地方の農村まで、「食」を切り口に土地の暮らしと経済を調査しました。屋台の一皿の背景にある流通、信仰、家族の物語。食は土地を読み解く最高のレンズだと確信した旅でした。",
      did: [
        "市場・屋台・農村での参与観察とインタビュー",
        "食材の流通経路のマッピング",
        "写真と文章によるフィールドノート制作",
      ],
      outcome: "調査記録をまとめたレポートがゼミの優秀フィールドワークに選出。",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop",
      ],
      tags: ["Gastronomy", "Research", "Thailand"], link: "#",
    },
    {
      id: "w4", no: "04", title: "STUDY IN ITALY", category: "留学",
      gradeIds: ["y4"], year: "2025", role: "交換留学生",
      place: { label: "ITALY", x: 322, y: 398 },
      description: "イタリアでの留学。食科学と地域デザインを学ぶ。",
      detail: "4年生でイタリアへ留学。食科学（ガストロノミック・サイエンス)と地域デザインを学びながら、週末は各地の市場、ワイナリー、小さな食堂を巡りました。「土地のものを、土地の物語とともに食べる」文化の厚みに触れ、卒業研究のテーマが決まった、いちばん大きな一年です。",
      did: [
        "食科学・地域デザインの講義とワークショップを履修",
        "各都市の市場と食堂のフィールドワーク（20都市以上）",
        "現地学生との共同プロジェクトでローカル食材のプロモーション企画",
      ],
      outcome: "帰国後、卒業研究「食と地域の物語のデザイン」として結実。",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=800&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format&fit=crop",
      ],
      tags: ["Study Abroad", "Food Science", "Italy"], link: "#",
    },
    {
      id: "w5", no: "05", title: "えひめ・こうち食べる通信", category: "実習",
      gradeIds: ["y3"], year: "2024", role: "編集実習生",
      place: { label: "EHIME / KOCHI", x: 478, y: 296 },
      description: "食べもの付き情報誌の編集実習。生産者を取材して記事に。",
      detail: "食べもの付き情報誌「えひめ・こうち食べる通信」での編集実習。生産者さんの畑や漁港に通い、話を聞き、写真を撮り、記事に仕立てる。一次産業の現場のことばを、食卓に届くことばに翻訳する仕事を経験しました。",
      did: [
        "農家・漁師さんへの取材（同行取材含む）",
        "誌面記事の執筆と写真撮影",
        "読者向けイベントの運営補助",
      ],
      outcome: "担当した特集記事が誌面に掲載。取材先の生産者さんとは今も交流が続く。",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=80&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80&auto=format&fit=crop",
      ],
      tags: ["Editorial", "Interview", "Local Food"], link: "#",
    },
    {
      id: "w6", no: "06", title: "てくてく高知プロジェクト", category: "実習",
      gradeIds: ["y2"], year: "2023", role: "企画・記録",
      place: { label: "KOCHI", x: 584, y: 352 },
      description: "高知の町を歩いて記録するローカルプロジェクト。",
      detail: "「車ではなく、歩く速さで高知を見る」をテーマに、県内の商店街や港町をてくてく歩いて記録するプロジェクト。歩くからこそ出会える人、看板、路地の風景をマップと小さな冊子にまとめました。足元のローカルの解像度が一気に上がった実習です。",
      did: [
        "県内5エリアのまち歩きルート設計と実地調査",
        "出会った人・店・風景の写真とテキストでの記録",
        "まち歩きマップと記録冊子の制作",
      ],
      outcome: "制作したまち歩きマップが地域のイベントで配布された。",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80&auto=format&fit=crop",
      ],
      tags: ["Fieldwork", "Mapping", "ZINE"], link: "#",
    },
    {
      id: "w7", no: "07", title: "FREE COFFEE", category: "実習",
      gradeIds: ["y1", "y2"], year: "2022–2023", role: "メンバー → 主催",
      place: { label: "KOCHI CAMPUS", x: 500, y: 548 },
      description: "一杯のコーヒーで対話の場をつくる活動。",
      detail: "キャンパスや商店街の一角にテーブルを出し、無料のコーヒーを淹れて、通りがかりの人と話す。それだけの活動です。でも「目的のない対話」からこぼれる本音や物語こそが、フィールドワークの原点でした。1年生で出会い、2年生では自分が主催する側に。",
      did: [
        "学内外でのフリーコーヒーの定期開催（約30回）",
        "対話から生まれた声の記録とアーカイブ",
        "出張開催（須崎・てくてく高知との合同企画）",
      ],
      outcome: "累計500杯以上を提供。「話を聴く姿勢」がすべての取材・調査の土台に。",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format&fit=crop",
      ],
      tags: ["Dialogue", "Community", "Coffee"], link: "#",
    },
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    lead: "お仕事のご相談、ポートフォリオへの感想、旅のおすすめ情報。どんな便りも、次の旅の追い風になります。",
    email: "hello@hanatabino.example.com",
    socials: [
      { label: "Instagram", url: "#" },
      { label: "X (Twitter)", url: "#" },
      { label: "note", url: "#" },
    ],
    copyright: "© 2026 Hana Tabino. All rights reserved.",
  },
};

/* ---------- ページ⇔場所の対応 ---------- */
const CITY = { home: "TOKYO", about: "KOCHI", works: "THE WORLD", contact: "NEXT STOP" };
const VIEWS = ["home", "about", "works", "contact"];

/* 地球儀上のナビ用ピン座標（index.htmlのSVGと一致させること） */
const PIN_POS = {
  home:    { x: 548, y: 312 },
  about:   { x: 512, y: 358 },
  works:   { x: 400, y: 430 },
  contact: { x: 352, y: 240 },
};

/* ページごとの地球儀の姿勢 */
const GLOBE_POSE = {
  home:    { xPercent: 22,  yPercent: 4,  scale: 1.05, rotation: 0,  opacity: 1    },
  about:   { xPercent: -28, yPercent: 10, scale: 1.28, rotation: -8, opacity: 0.95 },
  works:   { xPercent: 0,   yPercent: 0,  scale: 1.15, rotation: 0,  opacity: 0.95 }, /* 中央・正立でピンを画面内に収める */
  contact: { xPercent: 0,   yPercent: -4, scale: 1.45, rotation: -4, opacity: 0.95 },
};

/* ============================================================================
   ここから下は動作コード（通常は編集不要）
============================================================================ */

/* CDNが読み込めない環境でも内容が読めるようにする保険 */
if (typeof gsap === "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    renderData();
    const loader = document.getElementById("loader");
    if (loader) loader.remove();
    ["site-header", "flight-status"].forEach(id => {
      const el = document.getElementById(id); if (el) el.style.opacity = "1";
    });
    VIEWS.forEach(v => document.getElementById("view-" + v).classList.add("active"));
    document.body.style.cursor = "auto";
  });
  throw new Error("GSAP not loaded — fallback static mode");
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lenis = null;
let currentView = "home";
let transitioning = false;
let suppressHash = false;
let flightBusy = false;

/* ---------------------------------------------------------------
   1. データ流し込み
--------------------------------------------------------------- */
function gradeLabelFor(w) {
  const ids = w.gradeIds || [];
  const gs = SITE_DATA.timeline.filter(t => ids.includes(t.id)).map(t => t.grade);
  if (!gs.length) return "";
  return gs.length > 1 ? `${gs[0]}〜${gs[gs.length - 1]}` : gs[0];
}

function renderData() {
  const d = SITE_DATA;

  document.getElementById("hero-kicker").textContent = d.hero.kicker;
  document.getElementById("hero-lead").textContent   = d.hero.lead;
  document.getElementById("hero-name").textContent   = d.hero.name;

  document.getElementById("about-lead").textContent       = d.about.lead;
  document.getElementById("profile-avatar").src           = d.profile.avatar;
  document.getElementById("profile-name-en").textContent  = d.profile.nameEn;
  document.getElementById("profile-name-ja").textContent  = d.profile.nameJa;
  document.getElementById("profile-bio").textContent      = d.profile.bio;
  document.getElementById("profile-keywords").innerHTML   = d.profile.keywords
    .map(k => `<li class="text-[10px] tracking-widest uppercase border border-ink/25 rounded-full px-3 py-1">${k}</li>`).join("");

  /* タイムライン */
  document.getElementById("timeline-list").innerHTML = d.timeline.map(t => {
    const count = d.worksList.filter(w => (w.gradeIds || []).includes(t.id)).length;
    return `
    <li class="tl-item" data-id="${t.id}" tabindex="0" role="button"
        aria-label="${t.year}年（${t.grade}）の記録を見る" data-cursor>
      <span class="tl-dot"></span>
      <p class="text-[10px] tracking-widest2 uppercase text-plum mb-2">${t.tag}</p>
      <p class="font-display text-3xl md:text-4xl">${t.year} <span class="text-lg opacity-60">— ${t.grade}</span></p>
      <p class="font-mincho text-sm text-sage mt-1">— ${t.stage} —</p>
      <h3 class="font-mincho text-lg md:text-xl font-semibold mt-3">${t.title}</h3>
      <p class="font-mincho text-sm leading-loose mt-2 max-w-lg opacity-85">${t.text}</p>
      <span class="tl-cta">この年の記録を見る${count ? `（Work ${count}件）` : ""}
        <svg viewBox="0 0 24 24" class="w-3.5 h-3.5"><path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </li>`;
  }).join("");

  /* クローゼット（着数とスポット数を自動集計して添える） */
  const spots = new Set(d.worksList.map(w => w.place.label)).size;
  document.getElementById("works-lead").textContent =
    `${d.works.lead}（全${d.worksList.length}着 ／ ${spots}スポット）`;
  document.getElementById("garments").innerHTML = d.worksList.map((w, i) => `
    <button class="garment" data-index="${i}" data-cursor aria-label="${w.title} の詳細を見る">
      <svg class="garment-hook" viewBox="0 0 96 44">
        <path d="M48,6 a5,5 0 1,1 5,-5" fill="none" stroke="#c9b48d" stroke-width="3" stroke-linecap="round"/>
        <path d="M48,8 L10,38 Q7,40 11,40 L85,40 Q89,40 86,38 Z" fill="none" stroke="#d8c7a1" stroke-width="3.4" stroke-linejoin="round"/>
      </svg>
      <div class="garment-body">
        <span class="work-tag">No.${w.no}</span>
        <div class="garment-img">
          <img src="${w.image}" alt="${w.title}" loading="lazy" draggable="false" />
          <div class="garment-drape"></div>
        </div>
        <div class="garment-label">
          <p class="g-cat">${w.category}</p>
          <p class="g-name">${w.title}</p>
          <p class="g-year">📍 ${w.place.label} ／ ${gradeLabelFor(w)}</p>
          <span class="garment-cta">Tap to fly
            <svg viewBox="0 0 24 24" class="w-3 h-3"><path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>
      </div>
    </button>`).join("");

  /* 地球儀上のWorkピン（クリックでそのWorkへフライト）
     デザイン：同心円ターゲット＋回転点線リング＋ステム＋2行ラベル */
  document.getElementById("work-pins").innerHTML = d.worksList.map(w => {
    const p = w.place;
    const above = p.y > 400; /* 球の下半分のピンはラベルを上に */
    const s = above ? -1 : 1;
    return `
    <g class="work-pin" data-work="${w.id}" data-cursor role="button" aria-label="${w.title}" transform="translate(${p.x},${p.y})">
      <g class="wp-anim">
        <circle class="wp-hit" r="36" fill="transparent"/>
        <circle class="wp-pulse" r="10"/>
        <circle class="wp-ring2" r="17"/>
        <circle class="wp-ring" r="10"/>
        <circle class="wp-dot" r="3.4"/>
        <line class="wp-stem" x1="0" y1="${s * 12}" x2="0" y2="${s * 30}"/>
        <text class="wp-label"  y="${above ? -50 : 50}">${p.label}</text>
        <text class="wp-label2" y="${above ? -36 : 66}">No.${w.no} — ${w.title}</text>
      </g>
    </g>`;
  }).join("");
  document.querySelectorAll(".work-pin").forEach(pin => {
    pin.addEventListener("click", () => {
      const idx = d.worksList.findIndex(w => w.id === pin.dataset.work);
      if (idx >= 0) openWorkWithFlight(idx);
    });
  });

  document.getElementById("contact-lead").textContent        = d.contact.lead;
  document.getElementById("contact-email").href              = `mailto:${d.contact.email}`;
  document.getElementById("contact-email-text").textContent  = d.contact.email;
  document.getElementById("contact-socials").innerHTML       = d.contact.socials
    .map(s => `<li><a href="${s.url}" class="hover-line" data-cursor>${s.label}</a></li>`).join("");
  document.getElementById("footer-copy").textContent = d.contact.copyright;

  /* 花びらレイヤー（randはGSAP非依存：フォールバック時も安全） */
  const rand = (a, b) => a + Math.random() * (b - a);
  const field = document.createElement("div");
  field.id = "petal-field";
  document.body.appendChild(field);
  if (!prefersReduced) {
    for (let i = 0; i < 12; i++) {
      const p = document.createElement("span");
      p.className = "floating-petal";
      p.style.left = `${rand(2, 96)}%`;
      p.style.animationDuration = `${rand(9, 18)}s`;
      p.style.animationDelay = `${rand(0, 14)}s`;
      p.style.transform = `scale(${rand(0.6, 1.4)})`;
      field.appendChild(p);
    }
  }
}

/* ---------------------------------------------------------------
   2. スムーススクロール
--------------------------------------------------------------- */
function initSmoothScroll() {
  if (typeof Lenis === "undefined" || prefersReduced) return;
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
function resetScroll() {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
}

/* ---------------------------------------------------------------
   3. ローディング
--------------------------------------------------------------- */
function initLoader() {
  const loader = document.getElementById("loader");

  /* 同一セッション2回目以降はローディングを短縮（UX向上） */
  let isRepeat = false;
  try {
    isRepeat = !!sessionStorage.getItem("hn-visited");
    sessionStorage.setItem("hn-visited", "1");
  } catch (_) { /* file:// 等で使えない環境は毎回フル再生 */ }
  const countDur = isRepeat ? 0.7 : 2.4;
  const holdDelay = isRepeat ? 0.9 : 2.7;

  gsap.to("#loader-plane", {
    motionPath: { path: "#loader-orbit", align: "#loader-orbit", alignOrigin: [0.5, 0.5], autoRotate: 90 },
    duration: 2.2, repeat: -1, ease: "none",
  });

  const counter = { v: 0 };
  gsap.to(counter, {
    v: 100, duration: countDur, ease: "power2.inOut",
    onUpdate: () => {
      document.getElementById("loader-count").textContent = Math.round(counter.v);
      if (counter.v > 90) document.getElementById("loader-label").textContent = "Departure";
    },
  });

  const initial = VIEWS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "home";

  const tl = gsap.timeline({ delay: holdDelay });
  tl.to("#loader-stage, #loader > div, #loader > p", { scale: 0.85, opacity: 0, duration: 0.6, ease: "power2.in", stagger: 0.05 })
    .to(loader, { yPercent: -100, duration: 0.9, ease: "power4.inOut", onComplete: () => loader.remove() })
    .add(() => {
      if (initial !== "home") {
        document.getElementById("view-home").classList.remove("active");
        document.getElementById(`view-${initial}`).classList.add("active");
        currentView = initial;
      }
      updateNav(currentView, true);
      enterView(currentView);
    }, "-=0.4")
    .to("#site-header",   { opacity: 1, duration: 0.8 }, "-=0.2")
    .to("#flight-status", { opacity: 1, duration: 0.8 }, "<");
}

/* ---------------------------------------------------------------
   4. ビュー切り替え
--------------------------------------------------------------- */
function enterView(name) {
  const el = document.querySelector(`#view-${name} .view-inner`);
  const items = el ? el.querySelectorAll(".reveal") : [];
  /* 退場時に残った y オフセット／減光を必ずリセット（再入場時のズレ防止） */
  gsap.set(`#view-${name}`, { opacity: 1, y: 0 });
  if (el) gsap.set(el, { opacity: 1 });
  gsap.fromTo(items, { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: "power3.out", overwrite: true, clearProps: "transform" });

  if (name === "about") refreshFlower();
  if (name === "works") { const t = document.getElementById("closet"); if (t) t.scrollLeft = 0; }
}

function updateNav(name, instant = false) {
  document.body.dataset.view = name;
  document.getElementById("fs-city").textContent = CITY[name].toLowerCase();
  document.querySelectorAll(".nav-link").forEach(a =>
    a.classList.toggle("is-current", a.dataset.nav === name));
  document.querySelectorAll(".g-pin").forEach(p =>
    p.classList.toggle("is-active", p.dataset.city === name));

  const pose = GLOBE_POSE[name];
  if (instant) gsap.set("#globe-inner", pose);
  else gsap.to("#globe-inner", { ...pose, duration: 1.6, ease: "power3.inOut" });

  /* Workピンの表示はここで一元管理（位置は外側の translate 属性が保持。
     GSAPは内側 .wp-anim の opacity / y だけを操作する） */
  const showPins = name === "works";
  if (instant) {
    gsap.set(".wp-anim", { opacity: showPins ? 1 : 0, y: 0, overwrite: "auto" });
  } else if (showPins) {
    gsap.fromTo(".wp-anim",
      { y: -46, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: "bounce.out", delay: 0.5, overwrite: "auto" });
  } else {
    gsap.to(".wp-anim", { opacity: 0, duration: 0.5, overwrite: "auto" });
  }

  suppressHash = true;
  if (location.hash !== `#${name}`) location.hash = name;
  requestAnimationFrame(() => { suppressHash = false; });
}

/* 都市間ルートを地球儀上に描く */
function drawRoute(fromName, toName) {
  const path = document.getElementById("route-path");
  const a = PIN_POS[fromName], b = PIN_POS[toName];
  if (!a || !b || !path) return;
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  let dx = mx - 400, dy = my - 400;
  const len = Math.hypot(dx, dy) || 1;
  const cx = mx + (dx / len) * 70, cy = my + (dy / len) * 70;
  path.setAttribute("d", `M ${a.x},${a.y} Q ${cx},${cy} ${b.x},${b.y}`);
  const total = path.getTotalLength();
  gsap.fromTo(path,
    { strokeDasharray: total, strokeDashoffset: total, opacity: 0.9 },
    { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" });
  gsap.to(path, { opacity: 0, duration: 0.6, delay: 1.6 });
}

function navigate(name) {
  if (name === currentView || transitioning || flightBusy || !VIEWS.includes(name)) return;
  transitioning = true;

  document.getElementById("tr-from").textContent = CITY[currentView];
  document.getElementById("tr-to").textContent   = CITY[name];

  const dir = VIEWS.indexOf(name) > VIEWS.indexOf(currentView) ? 1 : -1;
  const overlay = document.getElementById("transition");
  const toWorld = name === "works"; /* 日本 → 世界へ視野が広がる特別演出 */
  drawRoute(currentView, name);

  /* ★すべて絶対時間で配置：分岐によって相対基準がズレて
     ページ差し替えが実行されなくなる事故を構造的に防ぐ */
  const tl = gsap.timeline({ onComplete: () => { transitioning = false; } });

  /* 0.0-0.4  現ページ退場 */
  tl.to(`#view-${currentView}`, { opacity: 0, y: -24 * dir, duration: 0.4, ease: "power2.in" }, 0);

  /* 0.1-     ベール */
  tl.set(overlay, { opacity: 1 }, 0.1);
  tl.fromTo("#transition-veil", { opacity: 0 }, { opacity: 0.72, duration: 0.4 }, 0.1);

  /* 0.1-1.3  飛行機（3D）：奥から手前へ、そして次の国へ */
  tl.fromTo("#plane3d",
    { x: dir * -window.innerWidth * 0.6, z: -500, rotationY: dir * 38, rotationZ: dir * -12, scale: 0.35, opacity: 0 },
    { opacity: 1, duration: 0.25 }, 0.1);
  tl.to("#plane3d", { x: 0, z: 280, rotationY: 0, rotationZ: 0, scale: 1.15, duration: 0.6, ease: "power1.out" }, 0.1);
  tl.to("#plane3d", {
    x: dir * window.innerWidth * 0.6, z: -520, rotationY: dir * -38, rotationZ: dir * 12, scale: 0.3, opacity: 0,
    duration: 0.6, ease: "power1.in",
  }, 0.7);

  /* 0.35-1.35  From / To ラベル */
  tl.fromTo("#tr-from, #tr-to", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, 0.35);
  tl.to("#tr-from, #tr-to", { opacity: 0, duration: 0.35 }, 1.0);

  /* WORKSへ：地球儀が大きく自転し、世界が視界に広がる
     ※回すのは装飾レイヤーのみ。ピンと文字は回転させない（反転防止） */
  if (toWorld) {
    tl.to("#globe-rotor", { rotation: "+=220", duration: 1.8, ease: "power2.inOut", svgOrigin: "400 400" }, 0.2);
  }

  /* 1.05  ページ差し替え（テーマ・地球儀・ピンもここで切替） */
  tl.add(() => {
    document.getElementById(`view-${currentView}`).classList.remove("active");
    const next = document.getElementById(`view-${name}`);
    next.classList.add("active");
    gsap.set(next, { opacity: 0 });
    currentView = name;
    resetScroll();
    updateNav(name);
    ScrollTrigger.refresh();
  }, 1.05);

  /* 1.15-  ベール退場 → 新ページ入場 */
  tl.to("#transition-veil", { opacity: 0, duration: 0.4 }, 1.15);
  tl.set(overlay, { opacity: 0 }, 1.6);
  tl.add(() => enterView(name), 1.2);
}

function initNav() {
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", e => { e.preventDefault(); navigate(el.dataset.nav); });
  });

  window.addEventListener("hashchange", () => {
    if (suppressHash) return;
    const name = location.hash.slice(1);
    if (VIEWS.includes(name) && name !== currentView) navigate(name);
  });

  document.addEventListener("keydown", e => {
    if (document.querySelector(".modal.is-open")) return;
    const idx = VIEWS.indexOf(currentView);
    if (e.key === "ArrowRight" && idx < VIEWS.length - 1) navigate(VIEWS[idx + 1]);
    if (e.key === "ArrowLeft"  && idx > 0)                navigate(VIEWS[idx - 1]);
  });
}

/* ---------------------------------------------------------------
   5. 花の開花（About・スクロール連動）
--------------------------------------------------------------- */
let flowerBuilt = false;
function initFlower() {
  const NS = "http://www.w3.org/2000/svg";
  const outer = document.getElementById("flower-petals-outer");
  const inner = document.getElementById("flower-petals-inner");
  const stamens = document.getElementById("flower-stamens");

  const PETAL_D = "M0,0 C-18,-16 -27,-52 -14,-80 C-7,-95 7,-95 14,-80 C27,-52 18,-16 0,0 Z";
  const VEIN_D  = "M0,-6 C-3,-30 -3,-55 0,-78";

  const makePetal = (group, angle, fill, strokeOp) => {
    const g = document.createElementNS(NS, "g");
    g.setAttribute("transform", `rotate(${angle})`);
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", PETAL_D);
    p.setAttribute("fill", fill);
    p.setAttribute("stroke", "#B4637A");
    p.setAttribute("stroke-width", "0.9");
    p.setAttribute("stroke-opacity", strokeOp);
    const v = document.createElementNS(NS, "path");
    v.setAttribute("d", VEIN_D);
    v.setAttribute("fill", "none");
    v.setAttribute("stroke", "#B4637A");
    v.setAttribute("stroke-width", "0.6");
    v.setAttribute("stroke-opacity", "0.35");
    g.appendChild(p); g.appendChild(v);
    group.appendChild(g);
    return g;
  };

  for (let i = 0; i < 6; i++) makePetal(outer, i * 60,      "url(#petalGrad)",   "0.55");
  for (let i = 0; i < 6; i++) makePetal(inner, i * 60 + 30, "url(#petalGradIn)", "0.4");

  for (let i = 0; i < 9; i++) {
    const g = document.createElementNS(NS, "g");
    g.setAttribute("transform", `rotate(${i * 40})`);
    g.classList.add("stamen");
    const line = document.createElementNS(NS, "line");
    line.setAttribute("x1", 0); line.setAttribute("y1", -4);
    line.setAttribute("x2", 0); line.setAttribute("y2", -22);
    line.setAttribute("stroke", "#D4A24E"); line.setAttribute("stroke-width", "1.1");
    const dot = document.createElementNS(NS, "circle");
    dot.setAttribute("cx", 0); dot.setAttribute("cy", -25);
    dot.setAttribute("r", 2.4); dot.setAttribute("fill", "#D4A24E");
    g.appendChild(line); g.appendChild(dot);
    stamens.appendChild(g);
  }

  const stem = document.getElementById("flower-stem");
  const stemLen = stem.getTotalLength();
  gsap.set(stem, { strokeDasharray: stemLen, strokeDashoffset: stemLen });
  gsap.set(".flower-leaf", { scale: 0, transformOrigin: "100% 100%", opacity: 0 });
  gsap.set("#flower-petals-outer g path, #flower-petals-inner g path", { scale: 0.05, transformOrigin: "0px 0px", opacity: 0 });
  gsap.set(".stamen", { scale: 0, transformOrigin: "0px 0px", opacity: 0 });
  gsap.set("#flower-glow", { opacity: 0, transformOrigin: "50% 50%", scale: 0.5 });

  const stageEl = document.getElementById("flower-stage");
  const stages = SITE_DATA.timeline.map(t => `${t.grade}：${t.stage}`);
  stageEl.textContent = stages[0]; /* 初期表示 */

  const bloomTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#timeline-wrap", start: "top 60%", end: "bottom 80%", scrub: 0.6,
      onUpdate: self => {
        const idx = Math.min(stages.length - 1, Math.floor(self.progress * stages.length));
        stageEl.textContent = stages[idx];
        document.querySelectorAll(".tl-item").forEach((item, i) =>
          item.classList.toggle("is-active", i <= Math.floor(self.progress * (stages.length - 0.001))));
      },
    },
  });

  bloomTl
    .to(stem, { strokeDashoffset: 0, duration: 2.2, ease: "none" })
    .to(".flower-leaf", { scale: 1, opacity: 1, duration: 1.2, stagger: 0.3, ease: "back.out(1.6)" }, "-=0.8")
    .to("#flower-bud", { scale: 1.25, transformOrigin: "50% 100%", duration: 1, ease: "power2.inOut" }, "-=0.5")
    .to("#flower-glow", { opacity: 1, scale: 1, duration: 1.4 }, "+=0.1")
    .to("#flower-petals-outer g path", { scale: 1, opacity: 1, duration: 2.4, stagger: 0.22, ease: "back.out(1.3)" }, "<")
    .to("#flower-bud", { scale: 0, opacity: 0, transformOrigin: "50% 100%", duration: 0.8 }, "<+0.6")
    .to("#flower-petals-inner g path", { scale: 0.62, opacity: 1, duration: 2, stagger: 0.18, ease: "back.out(1.4)" }, "-=0.8")
    .to(".stamen", { scale: 1, opacity: 1, duration: 1, stagger: 0.07, ease: "back.out(2)" }, "-=0.5")
    .to("#flower-petals-outer", { rotation: 12, transformOrigin: "0px 0px", duration: 2, ease: "sine.inOut" }, "-=0.5")
    .to("#flower-petals-inner", { rotation: -10, transformOrigin: "0px 0px", duration: 2, ease: "sine.inOut" }, "<");

  document.querySelectorAll(".tl-item").forEach(item => {
    gsap.from(item, { y: 50, opacity: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: item, start: "top 85%" } });
  });

  flowerBuilt = true;
}
function refreshFlower() {
  if (!flowerBuilt) initFlower();
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

/* ---------------------------------------------------------------
   6. クローゼット（横スクロール／ドラッグ／タップ）
--------------------------------------------------------------- */
let dragMoved = 0;
function initCloset() {
  const track = document.getElementById("closet");

  track.addEventListener("wheel", e => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      track.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, { passive: false });

  /* ドラッグでスライド
     ※ setPointerCapture を使うと click がトラック側に奪われて
       服のタップが効かなくなるため、フラグ方式で実装 */
  let down = false, startX = 0, startL = 0;
  track.addEventListener("pointerdown", e => {
    if (e.pointerType === "touch") return; /* タッチはネイティブスクロール（touch-action:pan-x）に任せる */
    down = true; startX = e.clientX; startL = track.scrollLeft; dragMoved = 0;
  });
  track.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - startX;
    dragMoved = Math.max(dragMoved, Math.abs(dx));
    track.scrollLeft = startL - dx;
  });
  const release = () => { down = false; };
  track.addEventListener("pointerup", release);
  track.addEventListener("pointercancel", release);
  track.addEventListener("pointerleave", release);

  document.querySelectorAll(".garment").forEach(g => {
    g.addEventListener("click", () => {
      if (dragMoved > 8) return;
      openWorkWithFlight(parseInt(g.dataset.index, 10));
    });
  });
}

/* ---------------------------------------------------------------
   7. モーダル共通
--------------------------------------------------------------- */
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
  if (lenis) lenis.stop();
  gsap.timeline()
    .to(`#${id} .modal-backdrop`, { opacity: 1, duration: 0.3 })
    .fromTo(`#${id} .modal-panel`,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }, "<0.05");
  const btn = modal.querySelector(".modal-close");
  if (btn) setTimeout(() => btn.focus({ preventScroll: true }), 80);
}
function closeModal(id, onDone) {
  const modal = document.getElementById(id);
  gsap.timeline({
    onComplete: () => {
      modal.classList.remove("is-open");
      if (!document.querySelector(".modal.is-open")) {
        document.body.style.overflow = "";
        if (lenis) lenis.start();
      }
      if (onDone) onDone();
    },
  })
    .to(`#${id} .modal-panel`, { opacity: 0, y: 30, scale: 0.97, duration: 0.28, ease: "power2.in" })
    .to(`#${id} .modal-backdrop`, { opacity: 0, duration: 0.24 }, "<0.05");
}

/* ---------------------------------------------------------------
   8. WORK 詳細（地球儀の回転＋ピン刺しモーション付き）
--------------------------------------------------------------- */
function openWorkModal(index) {
  const w = SITE_DATA.worksList[index];
  if (!w) return;
  document.getElementById("wm-image").src = w.image;
  document.getElementById("wm-image").alt = w.title;
  document.getElementById("wm-tag").textContent = `No.${w.no}`;
  document.getElementById("wm-category").textContent = w.category;
  document.getElementById("wm-title").textContent = w.title;
  document.getElementById("wm-overview").textContent = w.detail || w.description;
  document.getElementById("wm-did").innerHTML = (w.did || []).map(t => `<li>${t}</li>`).join("");
  document.getElementById("wm-gallery").innerHTML = (w.gallery || [])
    .map(src => `<img src="${src}" alt="${w.title} gallery" loading="lazy" />`).join("");
  document.getElementById("wm-outcome").textContent = w.outcome || "";
  document.getElementById("wm-place").textContent = w.place ? w.place.label : "";
  document.getElementById("wm-year").textContent = w.year || "";
  document.getElementById("wm-grade").textContent = gradeLabelFor(w);
  document.getElementById("wm-role").textContent = w.role || "";
  document.getElementById("wm-tags").innerHTML = (w.tags || []).map(t => `<li>${t}</li>`).join("");
  const linkEl = document.getElementById("wm-link");
  linkEl.href = w.link || "#";
  linkEl.classList.toggle("hidden", !w.link || w.link === "#"); /* リンク未設定なら非表示 */
  openModal("work-modal");
  document.getElementById("work-modal-panel").scrollTop = 0;
}

/* 地球儀が最前面に出てくるっと回り、その場所にピンが刺さってから詳細がひらく */
function openWorkWithFlight(index) {
  const w = SITE_DATA.worksList[index];
  if (!w) return;
  const pin = document.querySelector(`.work-pin[data-work="${w.id}"]`);
  if (!pin || flightBusy || transitioning || prefersReduced) { openWorkModal(index); return; }
  flightBusy = true;

  document.body.classList.add("is-flying");
  document.getElementById("fc-place").textContent = w.place.label;
  document.querySelectorAll(".work-pin").forEach(p => p.classList.toggle("is-focus", p === pin));
  const pinAnim = pin.querySelector(".wp-anim");
  const others = [...document.querySelectorAll(".work-pin")].filter(p => p !== pin).map(p => p.querySelector(".wp-anim"));

  const tl = gsap.timeline({ onComplete: () => { flightBusy = false; } });
  tl.to(`#view-${currentView} .view-inner`, { opacity: 0.1, duration: 0.5, ease: "power2.out" })
    .to("#flight-caption", { opacity: 1, duration: 0.4 }, "<")
    .to("#globe-inner", { xPercent: 0, yPercent: 0, scale: 1.5, rotation: 0, opacity: 1, duration: 0.9, ease: "power2.inOut" }, "<")
    .to("#globe-rotor", { rotation: "+=180", duration: 1.05, ease: "power2.inOut", svgOrigin: "400 400" }, "<")
    .to(others, { opacity: 0.15, duration: 0.5, overwrite: "auto" }, "<0.2")
    .fromTo(pinAnim, { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "bounce.out", overwrite: "auto" }, ">-0.15")
    .add(() => openWorkModal(index), ">+0.1");
}

/* Workモーダルを閉じたら画面と地球儀を元へ */
function restoreGlobe() {
  document.body.classList.remove("is-flying");
  document.querySelectorAll(".work-pin").forEach(p => p.classList.remove("is-focus"));
  gsap.to("#flight-caption", { opacity: 0, duration: 0.3 });
  gsap.to(`#view-${currentView} .view-inner`, { opacity: 1, duration: 0.6 });
  gsap.to("#globe-inner", { ...GLOBE_POSE[currentView], duration: 1.1, ease: "power3.inOut" });
  gsap.to(".wp-anim", { opacity: currentView === "works" ? 1 : 0, y: 0, duration: 0.6, overwrite: "auto" });
}

/* ---------------------------------------------------------------
   9. 学年（年次）モーダル — Worksと連動
--------------------------------------------------------------- */
function openYearModal(gradeId) {
  const t = SITE_DATA.timeline.find(t => t.id === gradeId);
  if (!t) return;
  document.getElementById("ym-tag").textContent = t.tag;
  document.getElementById("ym-year").textContent = t.year;
  document.getElementById("ym-stage").textContent = `${t.grade} — ${t.stage}`;
  document.getElementById("ym-title").textContent = t.title;
  document.getElementById("ym-text").textContent = t.text;
  document.getElementById("ym-activities").innerHTML = (t.activities || []).map(a => `<li>${a}</li>`).join("");

  const related = SITE_DATA.worksList
    .map((w, i) => ({ ...w, index: i }))
    .filter(w => (w.gradeIds || []).includes(gradeId));
  const grid = document.getElementById("ym-works");
  const empty = document.getElementById("ym-empty");
  if (related.length) {
    empty.classList.add("hidden");
    grid.innerHTML = related.map(w => `
      <button class="ym-work-card" data-work-index="${w.index}" data-cursor>
        <img src="${w.image}" alt="${w.title}" loading="lazy" />
        <span>
          <span class="ymw-cat block">${w.category} ｜ ${w.place.label}</span>
          <span class="ymw-title block">${w.title}</span>
        </span>
        <svg class="ymw-arrow w-4 h-4 shrink-0" viewBox="0 0 24 24"><path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`).join("");
    grid.querySelectorAll("[data-work-index]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.workIndex, 10);
        closeModal("year-modal", () => openWorkWithFlight(idx));
      });
    });
  } else {
    grid.innerHTML = "";
    empty.textContent = "この年は種まきとインプットの季節。Workは次の年から咲きはじめます。";
    empty.classList.remove("hidden");
  }
  openModal("year-modal");
  document.getElementById("year-modal-panel").scrollTop = 0;
}

function initModals() {
  const closeWork = () => closeModal("work-modal", restoreGlobe);
  document.getElementById("work-modal-close").addEventListener("click", closeWork);
  document.getElementById("work-modal-backdrop").addEventListener("click", closeWork);
  document.getElementById("year-modal-close").addEventListener("click", () => closeModal("year-modal"));
  document.getElementById("year-modal-backdrop").addEventListener("click", () => closeModal("year-modal"));
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (document.getElementById("work-modal").classList.contains("is-open")) closeWork();
    else if (document.getElementById("year-modal").classList.contains("is-open")) closeModal("year-modal");
  });

  document.querySelectorAll(".tl-item").forEach(item => {
    const open = () => openYearModal(item.dataset.id);
    item.addEventListener("click", open);
    item.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

/* ---------------------------------------------------------------
   10. カスタムカーソル
--------------------------------------------------------------- */
function initCursor() {
  if (window.matchMedia("(hover: none)").matches) return;
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const dx = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" });
  const dy = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" });
  const rx = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
  const ry = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
  window.addEventListener("mousemove", e => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); });
  document.addEventListener("mouseover", e => { if (e.target.closest("[data-cursor], a, button")) ring.classList.add("is-hover"); });
  document.addEventListener("mouseout",  e => { if (e.target.closest("[data-cursor], a, button")) ring.classList.remove("is-hover"); });
}

/* ---------------------------------------------------------------
   起動
--------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderData();
  initSmoothScroll();
  initCursor();
  initNav();
  initCloset();
  initModals();
  gsap.set("#globe-inner", GLOBE_POSE.home);
  initLoader();
  window.addEventListener("load", () => ScrollTrigger.refresh());
});
