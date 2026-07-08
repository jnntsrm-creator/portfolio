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
    nameEn: "SAITO EIKA",
    nameJa: "斎藤 叡華 — 地域協働学部4年",
    avatar: "images/avatar.jpg",
    bio: "東京・台東区で生まれ、高知大学 地域協働学部へ。「やりたいことを一つに絞れない」——そんなわたしにぴったりの学部で、地域も、海外も、研究も、興味を持ったことにとことん飛び込んできました。旅とランニングとショッピングが好きです。",
    keywords: ["地域協働", "Fieldwork", "海外プログラム", "地域ブランド", "Travel"],
  },

  /* ---------- HOME ---------- */
  hero: {
    kicker: "Portfolio of a wandering student",
    lead: "東京で生まれ、高知で学び、世界へ。大学4年間のフィールドワークと実習の軌跡を、ひとつの旅路としてまとめました。",
    name: "Saito Eika — Portfolio 2026",
  },

  /* ---------- ABOUT ---------- */
  about: {
    lead: "1年生の春、わたしはまだ固い蕾でした。地域も、海外も、研究も——興味を持ったことにとことん飛び込んだ4年間。年をクリックすると、その年の記録とWorkがひらきます。",
  },

  /* ---------- タイムライン（activities＝その年にやったこと） ---------- */
  timeline: [
    {
      id: "y1", year: "2022", grade: "1年生", stage: "蕾のとき",
      title: "いきなり、世界へ", tag: "SEED & BUD",
      text: "入学してすぐの夏、国際協働演習の授業でスイスへ。サマースクールで海を越え、そのままイタリア・サルディーニャ島で1か月半のホームステイ。春には須崎スプリングスクールで、防災の提案が実際のイベントとして形になった。固い蕾に、旅の種が一気に芽吹いた一年。",
      activities: [
        "スイスでの国際協働演習サマースクール（10日間）に参加。イタリア・日本の学生と英語で防災を議論・提案",
        "サマースクール後、イタリア・サルディーニャ島へ。知人宅で約1か月半のホームステイ",
        "須崎スプリングスクールに参加。防災の提案が採択され、地域のイベントとして実現",
      ],
    },
    {
      id: "y2", year: "2023", grade: "2年生", stage: "ほころびはじめ",
      title: "高知に留まらない学び", tag: "FIRST STEPS",
      text: "実習と研究が本格スタート。えひめ・こうち食べる通信、フリーコーヒー、てくてく高知——地域に飛び込む活動を次々と。夏は愛知県半田市のサマースクール、そしてタイでのフィールドワークへ。高知の外にも学びの畑を広げた一年。",
      activities: [
        "えひめ・こうち食べる通信、フリーコーヒー、てくてく高知など実習・研究を開始",
        "愛知県半田市のサマースクールに参加（食と地域を学ぶ）",
        "タイでフィールドワークを実施。地域協働チャレンジ演習として企画・実施・報告し、単位を取得",
        "須崎スプリングスクールに継続参加",
      ],
    },
    {
      id: "y3", year: "2024", grade: "3年生", stage: "五分咲き",
      title: "実習の成果が、見えはじめる", tag: "HALF BLOOM",
      text: "続けてきた実習が、少しずつ形に。食べる通信の記事執筆、フリーコーヒーから広がったおにぎり販売、てくてく四万十の完成、てくてく高知のクラウドファンディング。海外と地域、両方の学びが評価されて二つの資格も取得。就職活動もはじまった一年。",
      activities: [
        "食べる通信の取材に同行し記事を執筆。note・動画でも発信",
        "フリーコーヒーをおにぎり販売プロジェクトへ展開（商店街・夜市で販売）",
        "「てくてく四万十」を完成、「てくてく高知」はクラウドファンディングで資金調達（現在も継続中）",
        "地方創生推進士・グローカル創生推進士を取得",
        "「戦略」と「地域ブランド（地域活性化）」を軸に就職活動を開始",
      ],
    },
    {
      id: "y4", year: "2025", grade: "4年生", stage: "開花",
      title: "東京から高知、そして世界へ", tag: "FULL BLOOM",
      text: "就職活動では、実習で培ったマインド・協働力・課題解決力が高く評価され、大手企業から内定。「地域協働学部での学びは唯一無二」と胸を張れた。そして卒業までの日々は、ずっと憧れていたイタリア・サルディーニャ島への交換留学へ。花はいま、いちばん大きくひらいている。",
      activities: [
        "就職活動で実習・研究・海外経験が高く評価され内定（大手小売企業／大手損害保険会社）",
        "「地域協働学部での学びは唯一無二」と面接で高く評価される",
        "イタリア・サルディーニャ島へ交換留学（卒業まで）",
      ],
    },
    {
      id: "y5", year: "2026", grade: "そして未来へ", stage: "満開、その先へ",
      title: "次の目的地へ、搭乗", tag: "NEXT JOURNEY",
      text: "咲いた花は、やがて種を飛ばす。地域協働学部で得た「濃くて、唯一無二」の学びを胸に、地域と世界をつなぐ仕事へ。搭乗ゲートは、もう開いている。",
      activities: [
        "「戦略」と「地域ブランド」を軸に、地域と世界をつなぐ仕事へ",
        "旅とフィールドワークの続きは、これからも",
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
      place: { label: "SWITZERLAND", x: 250, y: 250 },
      description: "入学直後の夏、スイスでの国際協働サマースクールへ。",
      detail: "1年生の夏休み、国際協働演習の授業でスイスへ渡航。サマースクールに10日間参加し、イタリアや日本の大学生とチームを組んで、英語で「地域における防災」を議論・提案しました。入学してすぐ海を越えた10日間が、その後の海外への扉を開いてくれました。",
      did: [
        "各国の学生との混成チームで地域防災を研究",
        "防災に関する提案を英語でプレゼンテーション",
        "寮生活で多国籍の仲間と寝食を共にする",
      ],
      outcome: "「いきなり世界へ」飛び込んだ経験が、4年間の旅と挑戦の原点に。",
      image: "images/w1.jpg",
      gallery: ["images/w1a.jpg", "images/w1b.jpg"],
      tags: ["International", "防災", "English"], link: "",
    },
    {
      id: "w2", no: "02", title: "HOMESTAY IN ITALY", category: "海外・ホームステイ",
      gradeIds: ["y1"], year: "2022", role: "ホームステイ",
      place: { label: "ITALY", x: 210, y: 432 },
      description: "サマースクール後、イタリアの知人宅で約1か月半のホームステイ。",
      detail: "スイスのサマースクールを主催していた大学があるイタリア・サルディーニャ島へ。せっかく海を渡ったのだからと、そのまま約1か月半、イタリアの知人の家でホームステイをさせてもらいました。暮らしの中で触れたイタリアの文化と人のあたたかさが、「またイタリアへ」という思いのはじまりでした。",
      did: [
        "イタリアの家庭で約1か月半の生活を共にする",
        "現地の暮らし・食・言葉を肌で学ぶ",
        "小学生の頃から続くイタリアとの縁をさらに深める",
      ],
      outcome: "このホームステイが、4年生での交換留学へとつながっていく。",
      image: "images/w2.jpg",
      gallery: ["images/w2a.jpg", "images/w2b.jpg"],
      tags: ["Italy", "Homestay", "異文化"], link: "",
    },
    {
      id: "w3", no: "03", title: "SPRING SCHOOL", category: "国内プログラム",
      gradeIds: ["y1", "y2", "y3"], year: "2022–2024", role: "参加者（3年連続）",
      place: { label: "SUSAKI, JAPAN", x: 430, y: 178 },
      description: "高知県須崎市の地域滞在型プログラムに毎春参加。",
      detail: "高知県須崎市で毎年春に開かれるスプリングスクールに、1〜3年生まで参加。1年生のときは、イタリア・中国の学生とともに防災の提案を行い、須崎市へプレゼンテーション。この提案が採択され、須崎の小中高生も関わる「Light up the Life! —須崎に希望の灯をともそう—」というイベントとして実際に形になりました。",
      did: [
        "多国籍の学生と須崎地区の防災を提案",
        "須崎市へのプレゼンテーションを実施",
        "提案がイベント化し、地域の小中高生と協働",
      ],
      outcome: "学生の提案が、津波避難場所を灯すリアルなイベントとして実現。",
      image: "images/w3.jpg",
      gallery: ["images/w3a.jpg", "images/w3b.jpg"],
      tags: ["須崎", "防災", "地域協働"], link: "",
    },
    {
      id: "w4", no: "04", title: "FIELDWORK", category: "フィールドワーク",
      gradeIds: ["y2"], year: "2023", role: "企画・調査・報告",
      place: { label: "THAILAND", x: 486, y: 590 },
      description: "愛知県半田市とタイで、食と地域のフィールドワーク。",
      detail: "2年生の夏休みは、高知の外へ。まず愛知県半田市のサマースクールで食と地域を学び、続けてタイでフィールドワークを実施しました。地域協働チャレンジ演習の枠組みを活用して、自分たちで授業を企画・実施・報告し、単位も取得。国内も海外も、食を入り口に土地の暮らしを読み解いた夏でした。",
      did: [
        "愛知県半田市のサマースクールに参加（食と地域）",
        "タイでのフィールドワークを企画・実施",
        "地域協働チャレンジ演習として報告し単位を取得",
      ],
      outcome: "「高知に留まらない学び」を、自分の手でデザインして形にした。",
      image: "images/w4.jpg",
      gallery: ["images/w4a.jpg", "images/w4b.jpg"],
      tags: ["Thailand", "半田", "食"], link: "",
    },
    {
      id: "w5", no: "05", title: "えひめ・こうち食べる通信", category: "実習",
      gradeIds: ["y2", "y3"], year: "2023–2024", role: "編集・取材",
      place: { label: "EHIME / KOCHI", x: 640, y: 344 },
      description: "食べもの付き情報誌の編集実習。生産者を取材して記事に。",
      detail: "食べもの付き情報誌「えひめ・こうち食べる通信」の実習に参加。第一次産業に携わる方々を取材し、記事と食べものを読者へ届ける活動です。セキ株式会社や愛媛大学と協働しながら、取材に同行して記事を執筆し、noteや動画でも活動を発信しました。一次産業の現場のことばを、食卓に届くことばへ翻訳する仕事です。",
      did: [
        "生産者への取材に同行し、記事を執筆",
        "note・動画で活動を発信",
        "セキ株式会社・愛媛大学と協働して実施",
      ],
      outcome: "取材から発信まで、「伝える」一連の流れを実践的に経験。",
      image: "images/w5.jpg",
      gallery: ["images/w5a.jpg", "images/w5b.jpg"],
      tags: ["編集", "取材", "地域の食"], link: "",
    },
    {
      id: "w6", no: "06", title: "FREE COFFEE", category: "実習",
      gradeIds: ["y2", "y3"], year: "2023–2024", role: "メンバー",
      place: { label: "KOCHI", x: 560, y: 240 },
      description: "一杯のコーヒーで、対話の場をつくる活動。",
      detail: "学内・学外にテーブルを出し、無料のコーヒーを淹れて通りがかりの人と話す活動。複数回の開催を重ねる中で、おにぎりの販売プロジェクトへも派生し、商店街や夜市でも販売を行いました。目的のない対話からこぼれる本音や物語こそが、フィールドワークの原点でした。",
      did: [
        "学内・学外でフリーコーヒーを複数回開催",
        "おにぎり販売プロジェクトへ展開",
        "商店街や夜市で販売・出店",
      ],
      outcome: "「話を聴く」姿勢が、すべての取材・調査の土台になった。",
      image: "images/w6.jpg",
      gallery: ["images/w6a.jpg", "images/w6b.jpg"],
      tags: ["対話", "コーヒー", "地域"], link: "",
    },
    {
      id: "w7", no: "07", title: "てくてく高知・四万十", category: "実習・PJ",
      gradeIds: ["y2", "y3"], year: "2023–2024", role: "企画・制作",
      place: { label: "SHIMANTO / KOCHI", x: 610, y: 516 },
      description: "歩いて地域の店をめぐり、店舗紹介カードをつくるプロジェクト。",
      detail: "地域内の経済循環率を上げることを目的に、お店へ足を運んでもらうきっかけをつくる「てくてく」プロジェクト。店舗紹介カードを制作し、学校や町役場、イベントで掲示しました。地元の高校生向けにワークショップも実施。「てくてく四万十」を完成させ、「てくてく高知」ではクラウドファンディングで資金を集め、現在も活動を継続しています。",
      did: [
        "店舗紹介カード「てくてく四万十」を制作・掲示",
        "地元の高校生向けにワークショップを実施",
        "「てくてく高知」でクラウドファンディングを実施",
      ],
      outcome: "目標金額40万円のクラウドファンディングを達成し、活動を継続中。",
      image: "images/w7.jpg",
      gallery: ["images/w7a.jpg", "images/w7b.jpg"],
      tags: ["地域活性化", "クラウドファンディング", "四万十"], link: "",
    },
    {
      id: "w8", no: "08", title: "STUDY IN ITALY", category: "交換留学",
      gradeIds: ["y4"], year: "2025", role: "交換留学生",
      place: { label: "SARDEGNA", x: 315, y: 566 },
      description: "卒業までの日々を、イタリア・サルディーニャ島で。",
      detail: "小学生の頃のホームステイ以来、ずっと大好きだったイタリア。大学でもサマースクールやホームステイで関係を深めてきました。留学にはずっと憧れていたものの、実習との両立が難しく4年生まで見送り——そしてついに、卒業までの日々をイタリア・サルディーニャ島への交換留学へ。憧れを、いちばん大きな花として咲かせます。",
      did: [
        "イタリア・サルディーニャ島の大学へ交換留学",
        "小学生から続くイタリアとの縁を、留学として結実",
        "卒業までの日々を海外で過ごす",
      ],
      outcome: "「東京から高知、そして世界へ」——旅路の、いまいちばん遠い目的地。",
      image: "images/w8.jpg",
      gallery: ["images/w8a.jpg", "images/w8b.jpg"],
      tags: ["Study Abroad", "Italy", "Sardegna"], link: "",
    },
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    lead: "旅の記録を見てくださって、ありがとうございます。お仕事のご相談も、ただの感想も、旅のおすすめも。どんな便りも、次の旅の追い風になります。",
    email: "eika.saito@example.com",
    socials: [
      { label: "Instagram", url: "#" },
      { label: "note", url: "#" },
    ],
    copyright: "© 2026 Saito Eika. All rights reserved.",
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

  /* 桜の花びら：先端に「切れ込み（notch）」を持つ左右対称のシルエット */
  const PETAL_D = "M0,0 C-12,-18 -20,-44 -17,-63 C-15,-74 -11,-82 -7,-80 C-4,-79 -2,-74 0,-70 C2,-74 4,-79 7,-80 C11,-82 15,-74 17,-63 C20,-44 12,-18 0,0 Z";
  const VEIN_D  = "M0,-6 C-2,-30 -2,-52 0,-68";

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

  /* 桜は5弁。外層5枚、内層5枚を36°ずらして均等に配置（最後まで対称を保つ） */
  for (let i = 0; i < 5; i++) makePetal(outer, i * 72,      "url(#petalGrad)",   "0.55");
  for (let i = 0; i < 5; i++) makePetal(inner, i * 72 + 36, "url(#petalGradIn)", "0.4");

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
    /* 仕上げ：外層・内層を「同じ角度」だけそっと回す＝36°の互い違いを保ったまま、
       花全体がふわりと開ききる。左右のずれを生まない対称な着地。 */
    .to(["#flower-petals-outer", "#flower-petals-inner"], { rotation: 6, transformOrigin: "0px 0px", duration: 2, ease: "sine.inOut" }, "-=0.5")
    .to("#flower-glow", { scale: 1.08, duration: 1.8, ease: "sine.inOut" }, "<");

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
