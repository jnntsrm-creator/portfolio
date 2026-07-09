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
    nameJa: "齋藤 叡華 — 高知大学 地域協働学部4年",
    avatar: "images/avatar.jpg",
    bio: "東京都台東区出身。やりたいことが一つに絞れなくて、地域の実習も、海外も、研究も、気になったものには全部飛び込んできました。研究領域は地域ブランドと戦略。好きなものは旅行と買い物、ランニング、フラワーアレンジメント。クロワッサンと小籠包に目がありません。",
    keywords: ["地域ブランド", "戦略", "Fieldwork", "旅行", "フラワーアレンジメント"],
  },

  /* ---------- HOME ---------- */
  hero: {
    kicker: "Portfolio of a wandering student",
    lead: "東京から高知へ進学して、スイス、タイ、イタリアまで行ってきました。大学4年間でやってきたことをまとめた記録です。",
    name: "Saito Eika — 2026",
  },

  /* ---------- ABOUT ---------- */
  about: {
    lead: "入学したときは、やりたいことがまだ決まっていませんでした。気になったことに片っぱしから飛び込んだ4年間を、1年ずつ振り返ります。年をクリックすると、その年の記録とWorkが開きます。",
  },

  /* ---------- タイムライン（activities＝その年にやったこと） ---------- */
  timeline: [
    {
      id: "y1", year: "2023", grade: "1年生", stage: "蕾のとき",
      title: "いきなり世界へ", tag: "SEED & BUD",
      text: "入学して最初の夏休み、国際協働演習の授業でスイスの山村・フジオへ。イタリアや日本の学生と10日間のサマースクールに参加しました。せっかく来たからと、そのままイタリア・サルディーニャ島の知人の家に1か月半ホームステイ。春には須崎市のスプリングスクールに参加して、チームで出した防災の提案が採択され、12月に本物のイベントになりました。",
      activities: [
        "スイス・フジオ村のサマースクールに参加（10日間）。「2040年のフジオ」を村の人に英語で提案",
        "そのままイタリアへ。サルディーニャ島で1か月半のホームステイ",
        "須崎スプリングスクールで「光と音」の防災提案。採択されてイベント「Light up the Life!」として実現",
      ],
    },
    {
      id: "y2", year: "2024", grade: "2年生", stage: "ほころびはじめ",
      title: "高知に留まらない学び", tag: "FIRST STEPS",
      text: "実習と研究が始まった年。えひめ・こうち食べる通信、フリーコーヒー、てくてく高知——気になった実習に次々参加しました。夏は愛知県半田市のサマースクールとタイのフィールドワークをはしご。自分たちで企画して、実施して、報告して単位にする「地域協働チャレンジ演習」の枠組みをフル活用しました。",
      activities: [
        "えひめ・こうち食べる通信、フリーコーヒー、てくてく高知などの実習を開始",
        "愛知県半田市のSDGs国際協働演習に参加。ガストロノミーツーリズムを提案",
        "タイ・バンコクとチェンマイで2週間のフィールドワーク",
        "商店街で子ども向けイベント「街角ギャラリー」を開催",
        "春のスプリングスクールでは台湾・イタリアの学生と新図書館の提案を発表",
      ],
    },
    {
      id: "y3", year: "2025", grade: "3年生", stage: "五分咲き",
      title: "実習の成果が見え始める", tag: "HALF BLOOM",
      text: "続けてきた実習が形になってきた年。食べる通信では取材から記事・動画までひと通り担当して、途中からはプロジェクトマネージャーに。てくてくカードのワークショップ、おむすび屋台「むすび場」、40010プロジェクト——四万十町との関わりも一気に増えました。就職活動も始まって、とにかく忙しい一年でした。",
      activities: [
        "食べる通信で取材・記事執筆・動画編集・noteでの発信を担当（ごめんケンカシャモ・米ナスなど）",
        "プロジェクトマネージャーとして、1on1やマニュアル作りでチームを立て直す",
        "窪川高校・四万十高校と計6回のワークショップで「てくてく四万十」27店舗分を作成。お祭りで展示",
        "おむすび屋台「むすび場」を企画。お祭りで120個を完売",
        "四万十町の40010プロジェクトに参加。ビジネスCaféの司会や「40010人図鑑」の取材・編集を担当",
        "3月に地方創生推進士・グローカル創生推進士を取得。就職活動も本格化",
      ],
    },
    {
      id: "y4", year: "2026", grade: "4年生", stage: "開花",
      title: "東京から高知、そして世界へ", tag: "FULL BLOOM",
      text: "就活では、実習で身につけた協働力や課題解決力をそのまま話せました。「地域協働学部での学びは唯一無二」と実感して、大手小売企業と大手損害保険会社から内定。てくてく高知のクラウドファンディングは目標の110%で達成。そして9月からは、ずっと行きたかったイタリア・サルディーニャ島への交換留学に出発します。",
      activities: [
        "就職活動終了。実習・研究・海外経験が評価され、大手2社から内定",
        "てくてく高知のクラウドファンディングが44万円（達成率110%・支援者55人）で成立",
        "卒業研究「地域ブランドの醸成 — サルディーニャ島の事例から」に取り組む",
        "9月からイタリア・サルディーニャ島へ交換留学（卒業まで）",
      ],
    },
    {
      id: "y5", year: "2027", grade: "そして未来へ", stage: "満開、その先へ",
      title: "次の目的地へ", tag: "NEXT JOURNEY",
      text: "地域と世界の両方で学んだことを持って、社会に出ます。研究テーマだった「戦略」と「地域ブランド」に関わりながら、旅もフィールドワークも続けていくつもりです。",
      activities: [
        "「戦略」と「地域ブランド」を軸に、社会で働き始める予定",
        "旅の続きは、これから",
      ],
    },
  ],

  /* ---------- WORKS ---------- */
  works: {
    lead: "4年間の活動を、クローゼットに一着ずつ掛けました。服をタップすると地球儀が回って、その活動の場所にピンが刺さります。",
  },

  /* ---------- Work一覧（place＝地球儀上の場所 / gradeIds＝関わった学年） ---------- */
  worksList: [
    {
      id: "w1", no: "01", title: "SUMMER SCHOOL", category: "海外プログラム",
      gradeIds: ["y1"], year: "2023", role: "参加学生",
      place: { label: "SWITZERLAND", x: 250, y: 250 },
      description: "入学直後の夏、スイスの山村フジオでのサマースクールへ。",
      detail: "1年生の夏休み、国際協働演習の授業でスイスへ。山あいの小さな村・フジオに滞在して、イタリアや日本の大学生と10日間のサマースクールに参加しました。村ではダムの改修工事で約200人の作業員がやってくることが大きな話題で、五感を使ったフィールドワークや住民インタビューをもとに「2040年のフジオがどうあってほしいか」をチームで考え、最後は村の人たちに英語で発表しました。",
      did: [
        "五感を使ったフィールドワークと住民インタビュー",
        "ダム改修で変わる村の将来像をチームで議論",
        "「2040年のフジオ」を村の人たちに英語でプレゼン",
      ],
      outcome: "初めての海外。英語での議論から提案まで、なんとかやり切れたことが自信になりました。",
      image: "images/w1.jpg",
      gallery: ["images/w1a.jpg", "images/w1b.jpg"],
      tags: ["Switzerland", "Fusio", "English"], link: "",
    },
    {
      id: "w2", no: "02", title: "HOMESTAY IN ITALY", category: "海外・ホームステイ",
      gradeIds: ["y1"], year: "2023", role: "ホームステイ",
      place: { label: "ITALY", x: 210, y: 432 },
      description: "サマースクールのあと、イタリアの知人の家に1か月半ホームステイ。",
      detail: "サマースクールを主催していた大学がサルディーニャ島にあった縁で、そのままイタリアへ。せっかく来たからと、知人の家に1か月半ホームステイさせてもらいました。イタリアは小学生のときにもホームステイした、もともと大好きな国。暮らすように過ごしながら、ヴェネツィアやミラノ、ローマなどあちこちを旅しました。",
      did: [
        "サルディーニャ島の家庭で1か月半の暮らし",
        "ヴェネツィア、ミラノ、ヴェローナ、アッシジ、ローマなどを旅行",
        "小学生から続くイタリアとの縁がさらに深まる",
      ],
      outcome: "「いつかイタリアに留学したい」が、はっきりした目標に変わりました。",
      image: "images/w2.jpg",
      gallery: ["images/w2a.jpg", "images/w2b.jpg"],
      tags: ["Italy", "Homestay", "Sardegna"], link: "",
    },
    {
      id: "w3", no: "03", title: "SPRING SCHOOL", category: "国内プログラム",
      gradeIds: ["y1", "y2", "y3"], year: "2024–2026", role: "参加者（3年連続）",
      place: { label: "SUSAKI, JAPAN", x: 430, y: 178 },
      description: "須崎市で毎年3月に開かれる国際スプリングスクールに3年連続で参加。",
      detail: "海外の学生と一緒に須崎のまちを歩いて、課題を見つけて、市にプレゼンするプログラム。1回目は「光と音」をテーマにしたフェーズフリーな防災のまちづくりを提案して、それが採択され、12月に「Light up the Life! —須崎に希望の灯をともそう—」というイベントとして実現しました。小中高生と一緒に津波避難場所をキャンドルと光で灯す夜は、忘れられません。2回目は台湾とイタリアの学生とチームを組んで、新しくできる図書館を防災と学びの拠点にする提案を英語で発表しました。",
      did: [
        "1回目：「光と音」の防災提案が採択され、小中高生も関わるイベントに",
        "2回目：台湾・イタリアの学生と、新図書館の活用提案を英語で発表",
        "3回目も継続参加。同じまちの変化を3年間見続けた",
      ],
      outcome: "学生の提案がまちの本物のイベントになる過程を、当事者として経験できました。",
      image: "images/w3.jpg",
      gallery: ["images/w3a.jpg", "images/w3b.jpg"],
      tags: ["須崎", "防災", "国際協働"], link: "",
    },
    {
      id: "w4", no: "04", title: "FIELDWORK", category: "フィールドワーク",
      gradeIds: ["y2"], year: "2024", role: "企画・調査・報告",
      place: { label: "THAILAND", x: 486, y: 590 },
      description: "愛知県半田市とタイで、食と観光のフィールドワーク。",
      detail: "2年生の夏、「ガストロノミーツーリズム」をテーマに愛知県半田市とタイを続けて回りました。半田では名古屋外国語大学主催の国際演習に参加して、お酢の飲み比べや酒蔵見学、住民インタビューをもとに観光まちづくりを提案。その足でタイに飛んで、バンコクとチェンマイの市場や屋台を2週間歩きました。タイでは屋台の一番のお客さんが観光客ではなく地元の人だと気づいて、帰ってから半田への提案を作り直しました。この一連を地域協働チャレンジ演習として自分たちで企画・実施・報告して、単位も取りました。",
      did: [
        "半田市のSDGs国際協働演習でガストロノミーツーリズムを提案",
        "タイ・バンコクとチェンマイで2週間のフィールドワーク",
        "自分たちで企画から報告までやり切り、単位を取得",
      ],
      outcome: "タイで見た「地元の人が主役の食文化」が、のちの卒業研究の原点になりました。",
      image: "images/w4.jpg",
      gallery: ["images/w4a.jpg", "images/w4b.jpg"],
      tags: ["Thailand", "半田", "ガストロノミー"], link: "",
    },
    {
      id: "w5", no: "05", title: "えひめ・こうち食べる通信", category: "実習",
      gradeIds: ["y2", "y3"], year: "2024–2026", role: "編集・取材 → プロジェクトマネージャー",
      place: { label: "EHIME / KOCHI", x: 640, y: 344 },
      description: "食べもの付き情報誌の実習。取材から記事・動画まで担当。",
      detail: "生産者さんを取材して、記事と食べものをセットで届ける「えひめ・こうち食べる通信」。大川村のはちきん地鶏、黒潮町のハタペーニョ、梼原町の土佐あかうし、ごめんケンカシャモ、米ナス——高知のつくり手を訪ねて、インタビュー担当と撮影担当に分かれて取材し、記事執筆から動画編集までひと通りやりました。取材はやり直しがきかないので、事前調査で聞きたいことを固めてから臨むのが鉄則。途中からはプロジェクトマネージャーになり、メンバーの脱退が続いた時期は、1on1で一人ひとりの話を聞いたり、作業マニュアルを作ったりして、チームが自分たちで動ける状態に立て直しました。",
      did: [
        "はちきん地鶏・ハタペーニョ・土佐あかうし・ごめんケンカシャモ・米ナスの生産者を取材",
        "記事執筆・撮影・動画編集・noteでの発信",
        "PMとして1on1とマニュアル整備でチームを立て直し",
      ],
      outcome: "「チームの力を最大化すること」が自分の得意技だと気づいた実習でした。",
      image: "images/w5.jpg",
      gallery: ["images/w5a.jpg", "images/w5b.jpg"],
      tags: ["編集", "取材", "PM"], link: "",
    },
    {
      id: "w6", no: "06", title: "FREE COFFEE", category: "実習",
      gradeIds: ["y2", "y3"], year: "2024–2025", role: "メンバー",
      place: { label: "KOCHI", x: 560, y: 240 },
      description: "無料のコーヒーで、通りがかりの人と話す活動。",
      detail: "コーヒーを無料で配ると、知らない人との会話が自然に生まれる——そんな場をつくる活動です。高知大学で6回、はりまや橋商店街で3回開催して、愛媛大学への出張版もやりました。看板にコーヒーの種類やキャラクターを描いてみたり、来た人同士を会話に巻き込んでみたり、会話が生まれる仕掛けをいろいろ実験。ここから、食べる通信の取材で出会った合わせみそや四万十麦豚を使ったおむすび屋台「むすび場」も生まれて、お祭りでは120個を完売しました。",
      did: [
        "高知大学で6回・はりまや橋商店街で3回開催（愛媛大学でも出張開催）",
        "子ども向けイベント「街角ギャラリー」を商店街で企画・開催",
        "おむすび屋台「むすび場」に発展。お祭りで120個完売",
      ],
      outcome: "「何を提供するかより、どんな関係を生むか」が本質だと、体で学びました。",
      image: "images/w6.jpg",
      gallery: ["images/w6a.jpg", "images/w6b.jpg"],
      tags: ["対話", "コーヒー", "商店街"], link: "",
    },
    {
      id: "w7", no: "07", title: "てくてく高知・四万十", category: "実習・PJ",
      gradeIds: ["y2", "y3"], year: "2024–2026", role: "企画・制作",
      place: { label: "SHIMANTO / KOCHI", x: 610, y: 516 },
      description: "お店紹介カードで、商店街に足を運ぶきっかけをつくるプロジェクト。",
      detail: "「人はいるのに、お店に十分なお金が落ちていない」という商店街の課題に対して、お店を一軒ずつ紹介するカードを作って配るプロジェクト。四万十町では、窪川高校・四万十高校の生徒と一緒に計6回のワークショップを開いて、27店舗分の「てくてく四万十」カードを作成。町役場とも協働しながら、窪川と大正のお祭りで展示しました。高知市版の「てくてく高知」では、100店舗分のカードを作るためにクラウドファンディングに挑戦。55人の方に支援していただき、目標40万円に対して44万円、達成率110%で成立しました。",
      did: [
        "窪川高校・四万十高校と計6回のワークショップを開催（町役場と協働）",
        "27店舗分の「てくてく四万十」を完成させ、地域のお祭りで展示",
        "「てくてく高知」のクラウドファンディングを企画・実行",
      ],
      outcome: "クラウドファンディング達成率110%（44万円・支援者55人）。活動はいまも続いています。",
      image: "images/w7.jpg",
      gallery: ["images/w7a.jpg", "images/w7b.jpg"],
      tags: ["商店街", "クラウドファンディング", "四万十"], link: "",
    },
    {
      id: "w8", no: "08", title: "STUDY IN ITALY", category: "交換留学",
      gradeIds: ["y4"], year: "2026–2027", role: "交換留学生",
      place: { label: "SARDEGNA", x: 315, y: 566 },
      description: "9月から卒業まで、イタリア・サルディーニャ島へ交換留学。",
      detail: "小学生のホームステイからずっと好きだったイタリア。大学でもサマースクールやホームステイで縁が続いて、留学はずっと目標でした。実習と両立できず4年生まで見送っていましたが、就活を終えて、ようやく行けることになりました。卒業研究「ダイナミック・ケイパビリティを活用した地域ブランドの醸成 —サルディーニャ島の事例から—」の現地調査も兼ねて、9月から卒業までサルディーニャ島で過ごします。",
      did: [
        "サルディーニャ島の大学へ交換留学（9月〜卒業まで）",
        "卒業研究「地域ブランドの醸成」の現地調査",
        "小学生から続いたイタリアとの縁が、ついに留学に",
      ],
      outcome: "4年間でいちばん大きな挑戦。ここからが本番です。",
      image: "images/w8.jpg",
      gallery: ["images/w8a.jpg", "images/w8b.jpg"],
      tags: ["Study Abroad", "Sardegna", "地域ブランド"], link: "",
    },
  ],

  /* ---------- FUTURE ---------- */
  future: {
    lead: "見てくださってありがとうございます。9月からはサルデーニャ島へ留学に行きます。卒業研究をやり切って、春からは社会人になります。これからも成長し続けていきます。",
    hint: "この地球儀、さわれます — ドラッグでころころ、タップでぷにぷに",
    copyright: "© 2026 Saito Eika. All rights reserved.",
  },
};

/* ---------- ページ⇔場所の対応 ---------- */
const CITY = { home: "TOKYO", about: "KOCHI", works: "THE WORLD", future: "NEXT STOP" };
const VIEWS = ["home", "about", "works", "future"];

/* 地球儀上のナビ用ピン座標（index.htmlのSVGと一致させること） */
const PIN_POS = {
  home:   { x: 548, y: 312 },
  about:  { x: 512, y: 358 },
  works:  { x: 400, y: 430 },
  future: { x: 352, y: 240 },
};

/* ページごとの地球儀の姿勢 */
const GLOBE_POSE = {
  home:   { xPercent: 22,  yPercent: 4,  scale: 1.05, rotation: 0,  opacity: 1    },
  about:  { xPercent: -28, yPercent: 10, scale: 1.28, rotation: -8, opacity: 0.95 },
  works:  { xPercent: 0,   yPercent: 0,  scale: 1.15, rotation: 0,  opacity: 0.95 }, /* 中央・正立でピンを画面内に収める */
  future: { xPercent: 0,   yPercent: 8,  scale: 1.35, rotation: 0,  opacity: 1    }, /* 中央ど真ん中＝遊び場 */
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
let currentWorkIndex = 0;

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
          <img src="${w.image}" alt="${w.title}" loading="lazy" decoding="async" draggable="false" />
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
        <circle class="wp-hit" r="24" fill="transparent"/>
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
    pin.addEventListener("click", (e) => {
      /* 服とピンが重なっている場所では、服のタップを優先する */
      if (e.clientX || e.clientY) {
        const under = document.elementsFromPoint(e.clientX, e.clientY)
          .find(el => el.closest && el.closest(".garment"));
        if (under) {
          openWorkWithFlight(parseInt(under.closest(".garment").dataset.index, 10));
          return;
        }
      }
      const idx = d.worksList.findIndex(w => w.id === pin.dataset.work);
      if (idx >= 0) openWorkWithFlight(idx);
    });
  });

  document.getElementById("future-lead").textContent = d.future.lead;
  document.getElementById("future-hint-text").textContent = d.future.hint;
  document.getElementById("footer-copy").textContent = d.future.copyright;

  /* タイトル「Portfolio」の組み立て（フォールバック時も文字は表示される） */
  pfInit();

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
  document.querySelectorAll(".nav-link").forEach(a => {
    const on = a.dataset.nav === name;
    a.classList.toggle("is-current", on);
    if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
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

  /* ピンとクローゼットの重なりを再判定（地球儀の移動完了後にも再実行） */
  schedulePinMuting();
  gsap.delayedCall(1.8, schedulePinMuting);

  /* FUTUREの遊び場を離れるときは、球体の変形やモーションを元に戻す */
  if (name !== "future") {
    gsap.killTweensOf("#globe-inner svg");
    gsap.set("#globe-inner svg", { clearProps: "transform" });
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
    /* 仕上げ：花びらは回転させない。咲いたら、そのまま静かに整った状態で留まる。
       （外層0/72/…・内層36/108/… の左右対称な互い違いをそのまま保持） */
    .to("#flower-glow", { scale: 1.06, duration: 1.6, ease: "sine.inOut" }, "-=0.4");

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
   6.5 ピンの誤タップ防止
   クローゼットや導線ボタンに重なったピンは「ミュート」して
   薄く沈め、タップも受けない状態にする（服のタップが必ず勝つ）
--------------------------------------------------------------- */
let pinMuteRaf = 0;
function updatePinMuting() {
  pinMuteRaf = 0;
  const pins = document.querySelectorAll(".work-pin");
  if (currentView !== "works" || document.body.classList.contains("is-flying")) {
    pins.forEach(p => p.classList.remove("is-muted"));
    return;
  }
  const rects = [];
  const closet = document.getElementById("closet");
  if (closet) rects.push(closet.getBoundingClientRect());
  const nd = document.querySelector("#view-works .next-dest");
  if (nd) rects.push(nd.getBoundingClientRect());
  pins.forEach(pin => {
    const b = pin.getBoundingClientRect();
    const cx = b.left + b.width / 2, cy = b.top + b.height / 2;
    const hit = rects.some(r =>
      cx > r.left - 12 && cx < r.right + 12 && cy > r.top - 12 && cy < r.bottom + 12);
    pin.classList.toggle("is-muted", hit);
  });
}
function schedulePinMuting() {
  if (!pinMuteRaf) pinMuteRaf = requestAnimationFrame(updatePinMuting);
}
function initPinMuting() {
  window.addEventListener("scroll", schedulePinMuting, { passive: true });
  window.addEventListener("resize", schedulePinMuting);
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
/* モーダルの中身を差し替える（開く・前後移動の両方で使う共通処理） */
function fillWorkModal(index) {
  const w = SITE_DATA.worksList[index];
  if (!w) return false;
  currentWorkIndex = index;
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
  const N = SITE_DATA.worksList.length;
  document.getElementById("wm-counter").textContent =
    `${String(index + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`;
  document.getElementById("work-modal-panel").scrollTop = 0;
  return true;
}

function openWorkModal(index) {
  if (!fillWorkModal(index)) return;
  openModal("work-modal");
}

/* 前後のWorkへ（モーダルを閉じずに巡回。← → キー・スワイプ・矢印ボタン共通） */
function stepWork(dir) {
  const N = SITE_DATA.worksList.length;
  const next = (currentWorkIndex + dir + N) % N;
  const panel = document.getElementById("work-modal-panel");
  if (prefersReduced || typeof gsap === "undefined") { fillWorkModal(next); return; }
  gsap.timeline()
    .to(panel, { opacity: 0, y: 10, duration: 0.16, ease: "power1.in",
      onComplete: () => fillWorkModal(next) })
    .fromTo(panel, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
}

/* 地球儀が最前面に出てくるっと回り、その場所にピンが刺さってから詳細がひらく */
function openWorkWithFlight(index) {
  const w = SITE_DATA.worksList[index];
  if (!w) return;
  const pin = document.querySelector(`.work-pin[data-work="${w.id}"]`);
  if (!pin || flightBusy || transitioning || prefersReduced) { openWorkModal(index); return; }
  flightBusy = true;

  document.body.classList.add("is-flying");
  schedulePinMuting(); /* フライト中はミュート解除（主役のピンを見せる） */
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
  gsap.delayedCall(1.2, schedulePinMuting); /* 地球儀が戻ったら重なりを再判定 */
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

  /* Work詳細の前後ナビ：矢印ボタン */
  document.getElementById("wm-prev").addEventListener("click", () => stepWork(-1));
  document.getElementById("wm-next").addEventListener("click", () => stepWork(1));

  document.addEventListener("keydown", e => {
    const workOpen = document.getElementById("work-modal").classList.contains("is-open");
    if (e.key === "Escape") {
      if (workOpen) closeWork();
      else if (document.getElementById("year-modal").classList.contains("is-open")) closeModal("year-modal");
    } else if (workOpen && e.key === "ArrowLeft")  { e.preventDefault(); stepWork(-1); }
    else if (workOpen && e.key === "ArrowRight") { e.preventDefault(); stepWork(1); }
  });

  /* スマホ：Work詳細を左右スワイプで前後移動（縦スクロールは邪魔しない） */
  const wpanel = document.getElementById("work-modal-panel");
  let sx = 0, sy = 0, swiping = false;
  wpanel.addEventListener("pointerdown", e => {
    if (e.pointerType !== "touch") return;
    sx = e.clientX; sy = e.clientY; swiping = true;
  });
  wpanel.addEventListener("pointerup", e => {
    if (!swiping || e.pointerType !== "touch") return;
    swiping = false;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) stepWork(dx < 0 ? 1 : -1);
  });

  document.querySelectorAll(".tl-item").forEach(item => {
    const open = () => openYearModal(item.dataset.id);
    item.addEventListener("click", open);
    item.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

/* ---------------------------------------------------------------
   9.4 FUTURE：地球儀プレイグラウンド
   タップ＝ぷにぷに／ドラッグ＝ころころ回す（離すと慣性）
--------------------------------------------------------------- */
var trickBusy;

/* タップ：ぷにぷに（つぶれて、ぷるんと戻る） */
function punipuni() {
  if (trickBusy || prefersReduced) return;
  trickBusy = true;
  gsap.timeline({ onComplete: () => { trickBusy = false; } })
    .to("#globe-inner svg", { scaleX: 1.14, scaleY: 0.86, duration: 0.18, ease: "power2.in", transformOrigin: "50% 50%" })
    .to("#globe-inner svg", { scaleX: 1, scaleY: 1, duration: 1.35, ease: "elastic.out(1, 0.25)" });
}

function initGlobePlay() {
  const sphere = document.getElementById("globe-sphere");
  if (!sphere || typeof gsap === "undefined") return;
  trickBusy = false;
  let down = false, sx = 0, sy = 0, baseRot = 0, moved = 0, lastX = 0, lastT = 0, vel = 0, t0 = 0;

  sphere.addEventListener("pointerdown", e => {
    if (currentView !== "future") return;
    down = true; moved = 0; sx = e.clientX; sy = e.clientY;
    baseRot = gsap.getProperty("#globe-rotor", "rotation");
    lastX = e.clientX; lastT = performance.now(); vel = 0; t0 = lastT;
    sphere.setPointerCapture(e.pointerId);
    gsap.killTweensOf("#globe-rotor");
  });
  sphere.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - sx;
    moved = Math.max(moved, Math.abs(dx), Math.abs(e.clientY - sy));
    const now = performance.now();
    vel = 0.8 * vel + 0.2 * ((e.clientX - lastX) / Math.max(1, now - lastT));
    lastX = e.clientX; lastT = now;
    gsap.set("#globe-rotor", { rotation: baseRot + dx * 0.4, svgOrigin: "400 400" });
  });
  const release = () => {
    if (!down) return;
    down = false;
    if (moved < 6 && performance.now() - t0 < 350) { punipuni(); return; } /* タップ扱い */
    if (Math.abs(vel) > 0.05) {
      gsap.to("#globe-rotor", { rotation: `+=${vel * 400}`, duration: 1.8, ease: "power3.out", svgOrigin: "400 400" });
    }
  };
  sphere.addEventListener("pointerup", release);
  sphere.addEventListener("pointercancel", release);
}

/* ---------------------------------------------------------------
   9.5 HOMEタイトル「Portfolio」— タップで着せ替え
   テーマは4つ＝えいかさんの4つの顔
     bloom（花） / voyage（旅） / sarde（イタリア） / coffee（フリーコーヒー）
--------------------------------------------------------------- */
var pfIndex, pfBusy, pfIdleTweens;

function pfFlowerMark() {
  const petal = '<path d="M0,0 C-4.8,-7.2 -8,-17.6 -6.8,-25.2 C-6,-29.6 -4.4,-32.8 -2.8,-32 C-1.6,-31.6 -0.8,-29.6 0,-28 C0.8,-29.6 1.6,-31.6 2.8,-32 C4.4,-32.8 6,-29.6 6.8,-25.2 C8,-17.6 4.8,-7.2 0,0 Z" fill="url(#pfPetal)" stroke="#B4637A" stroke-opacity="0.35" stroke-width="0.8"/>';
  let g = "";
  for (let i = 0; i < 5; i++) g += `<g transform="rotate(${i * 72})">${petal}</g>`;
  return `<svg viewBox="-36 -36 72 72"><defs><linearGradient id="pfPetal" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#F6D9E1"/><stop offset="1" stop-color="#DE93AF"/></linearGradient></defs>${g}<circle r="4" fill="#D4A24E"/></svg>`;
}

function pfThemes() {
  return [
    { id: "bloom", text: "Portfolio", mark: pfFlowerMark() },
    { id: "voyage", text: "PORTFOLIO",
      mark: '<svg viewBox="-13 -13 26 26"><path d="M0,-9 L2.4,-2 L10,3 L2.4,3 L0,10 L-2.4,3 L-10,3 L-2.4,-2 Z" fill="#E4572E" transform="rotate(45)"/></svg>' },
    { id: "sarde", text: "Portfolio",
      mark: '<svg viewBox="0 0 34 26"><rect x="1" y="1" width="9" height="24" rx="3" fill="#7A8B6F"/><rect x="12.5" y="1" width="9" height="24" rx="3" fill="#FDFBF5" stroke="#26231C" stroke-opacity="0.18" stroke-width="0.8"/><rect x="24" y="1" width="9" height="24" rx="3" fill="#E4572E"/></svg>' },
    { id: "coffee", text: "portfolio",
      mark: '<svg viewBox="-16 -18 32 34"><path d="M-9,-2 h14 v6 a7 7 0 0 1 -14 0 Z" fill="none" stroke="#6B4F35" stroke-width="2.2" stroke-linejoin="round"/><path d="M5,-0.5 h2.4 a3.6 3.6 0 0 1 0 7.2 h-2.4" fill="none" stroke="#6B4F35" stroke-width="2.2"/><path d="M-13,9.5 h22" stroke="#6B4F35" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/><path class="pf-steam" d="M-4.5,-6 c1.6,-2.2 -1.6,-4.4 0,-6.6" fill="none" stroke="#8B7355" stroke-width="1.7" stroke-linecap="round" opacity="0.55"/><path class="pf-steam" d="M1.5,-6 c1.6,-2.2 -1.6,-4.4 0,-6.6" fill="none" stroke="#8B7355" stroke-width="1.7" stroke-linecap="round" opacity="0.55"/></svg>' },
  ];
}

/* 文字spanは9個を使い回す（"Portfolio"は3表記とも9文字）。
   要素を作り直さないので、アニメーションの対象がずれない */
function pfApply(i, startIdle) {
  const th = pfThemes()[i];
  document.getElementById("pf-title").dataset.pf = th.id;
  document.getElementById("pf-mark").innerHTML = th.mark;
  const word = document.getElementById("pf-word");
  let ls = word.querySelectorAll(".pf-l");
  if (ls.length !== th.text.length) {
    word.innerHTML = [...th.text].map(c => `<span class="pf-l">${c}</span>`).join("");
    ls = word.querySelectorAll(".pf-l");
  } else {
    ls.forEach((el, idx) => { el.textContent = th.text[idx]; });
  }
  if (startIdle && typeof gsap !== "undefined" && !prefersReduced) pfIdle();
  return ls;
}

/* 待機中：文字がゆっくり呼吸するように浮き沈みする */
function pfIdle() {
  (pfIdleTweens || []).forEach(t => t.kill());
  pfIdleTweens = [];
  document.querySelectorAll("#pf-word .pf-l").forEach((el, i) => {
    pfIdleTweens.push(gsap.to(el, {
      y: -3 - Math.random() * 3,
      duration: 2.2 + Math.random() * 1.8,
      delay: i * 0.15,
      yoyo: true, repeat: -1, ease: "sine.inOut",
    }));
  });
}

/* テーマごとの「ひとさじ」の演出 */
function pfFlourish(id) {
  const title = document.getElementById("pf-title");
  const w = title.offsetWidth, h = title.offsetHeight;
  if (id === "bloom") {
    /* 花びらがふわりと舞い落ちる */
    for (let i = 0; i < 7; i++) {
      const p = document.createElement("span");
      p.className = "pf-petal";
      p.style.left = `${8 + Math.random() * 84}%`;
      p.style.top = "18%";
      title.appendChild(p);
      gsap.fromTo(p,
        { y: 0, opacity: 0, rotation: Math.random() * 80 },
        { y: h * (0.7 + Math.random() * 0.5), x: (Math.random() - 0.5) * 70,
          opacity: 0.85, rotation: "+=150", duration: 1.5 + Math.random() * 0.8,
          ease: "sine.in", onComplete: () => p.remove() });
      gsap.to(p, { opacity: 0, duration: 0.45, delay: 1.35 });
    }
  } else if (id === "voyage") {
    /* 小さな飛行機がタイトルを横切る */
    const pl = document.createElement("span");
    pl.className = "pf-plane";
    pl.innerHTML = '<svg viewBox="-12 -12 24 24"><path d="M0,-9 L2.4,-2 L10,3 L2.4,3 L0,10 L-2.4,3 L-10,3 L-2.4,-2 Z" fill="#E4572E" transform="rotate(90)"/></svg>';
    title.appendChild(pl);
    gsap.fromTo(pl,
      { x: -46, y: h * 0.3, opacity: 0, rotation: -8 },
      { x: w + 46, y: -h * 0.18, opacity: 1, rotation: 10, duration: 1.15,
        ease: "power1.inOut", onComplete: () => pl.remove() });
  } else if (id === "sarde") {
    /* トリコローレの下線がすっと伸びる */
    const bar = document.createElement("span");
    bar.className = "pf-tricolore";
    title.appendChild(bar);
    gsap.fromTo(bar, { scaleX: 0, opacity: 1 }, { scaleX: 1, duration: 0.7, ease: "power3.out" });
    gsap.to(bar, { opacity: 0, duration: 0.6, delay: 1.5, onComplete: () => bar.remove() });
  } else if (id === "coffee") {
    /* カップから湯気がのぼる */
    const steam = document.querySelectorAll("#pf-mark .pf-steam");
    gsap.fromTo(steam, { y: 5, opacity: 0 },
      { y: -3, opacity: 0.9, duration: 0.9, stagger: 0.25, ease: "sine.out" });
    gsap.to(steam, { opacity: 0.5, y: 0, duration: 0.7, delay: 1.4 });
  }
}

/* クリック／タップで次のテーマへ（文字がめくれて着替わる） */
function pfSwitch() {
  if (pfBusy) return;
  const themes = pfThemes();
  pfIndex = ((pfIndex || 0) + 1) % themes.length;
  if (typeof gsap === "undefined" || prefersReduced) { pfApply(pfIndex, false); return; }
  pfBusy = true;
  (pfIdleTweens || []).forEach(t => t.kill());
  pfIdleTweens = [];
  const mark = document.getElementById("pf-mark");
  const letters = document.querySelectorAll("#pf-word .pf-l"); /* 使い回しの9文字 */
  const id = themes[pfIndex].id;
  /* すべてのtweenを構築時に確定させる（文字は同じ要素のまま中身だけ替わる） */
  gsap.timeline({ onComplete: () => { pfFlourish(id); pfIdle(); pfBusy = false; } })
    .to(letters, { y: -16, opacity: 0, rotationX: 60, duration: 0.22, stagger: 0.026, ease: "power2.in" })
    .to(mark, { scale: 0, opacity: 0, duration: 0.2 }, "<")
    .add(() => pfApply(pfIndex, false))
    .set(letters, { y: 26, rotationX: -60 })
    .set(mark, { rotation: -40 })
    .to(letters, { y: 0, opacity: 1, rotationX: 0, duration: 0.55, stagger: 0.04, ease: "back.out(1.6)" })
    .to(mark, { scale: 1, opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(2.2)" }, "-=0.4");
}

function pfInit() {
  const title = document.getElementById("pf-title");
  if (!title || title.dataset.ready) return;
  title.dataset.ready = "1";
  pfIndex = 0; pfBusy = false; pfIdleTweens = [];
  pfApply(0, true);
  title.addEventListener("click", pfSwitch);
  title.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pfSwitch(); }
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
  initPinMuting();
  initGlobePlay();
  initModals();
  gsap.set("#globe-inner", GLOBE_POSE.home);
  initLoader();
  window.addEventListener("load", () => ScrollTrigger.refresh());
});
