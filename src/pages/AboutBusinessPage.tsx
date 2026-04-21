import { useState } from 'react'
import handyRoomBanner from '../assets/handy_img.png'
import './AboutBusinessPage.css'

type DeckSlide = {
  id: string
  kicker: string
  sectionLabel: string
  lines: string[]
  slideNum: number
}

/** 企業説明スライド（ダミー） */
const DECK_SLIDES: DeckSlide[] = [
  {
    id: 's1',
    kicker: '私たちについて',
    sectionLabel: 'ミッション（果たす役割）',
    lines: [
      '高校生が、進路の自己決定に',
      '必要な情報と支援を最適な形で提供する',
    ],
    slideNum: 1,
  },
  {
    id: 's2',
    kicker: '私たちについて',
    sectionLabel: 'ビジョン（目指す姿）',
    lines: [
      '（ダミー）進路のデジタル基盤で',
      '誰もが納得して選べる社会をつくる',
    ],
    slideNum: 2,
  },
  {
    id: 's3',
    kicker: '事業紹介',
    sectionLabel: 'プロダクト',
    lines: [
      '（ダミー）学校向け求人票デジタル化',
      '「Handy 進路指導室」などの提供価値',
    ],
    slideNum: 3,
  },
  {
    id: 's4',
    kicker: '働き方',
    sectionLabel: 'カルチャー',
    lines: [
      '（ダミー）即決断・即実行を重んじる',
      '成果と学びのスピードを大切にしています',
    ],
    slideNum: 4,
  },
]

type ServiceValue = { audience: string; body: string }
type ServiceStat = { value: string; label: string }
type ServicePillar = {
  id: string
  phase: string
  since: string
  brand: string
  variant: string
  tagline: string
  lead: string
  challenges: string[]
  values: ServiceValue[]
  stats: ServiceStat[]
  positioning: string
}

/** Handy進路指導室 就職版 */
const EMPLOYMENT_PILLAR: ServicePillar = {
  id: 'about-biz-employment',
  phase: 'コア事業',
  since: '2021年〜',
  brand: 'Handy進路指導室',
  variant: '就職版',
  tagline: '高卒就活を、紙からデジタルへ。',
  lead:
    '全国の高校現場で最も深刻だった「紙の求人票と手作業」を、OCRとクラウドで一気にデジタル化。全国2,177校で導入され、就職希望の高校生の約69%の就活を支えるハンディのコアプロダクトです。',
  challenges: [
    '毎年およそ15万人が高卒で就職。一方、求人票は紙＋手作業で管理され、先生の業務は逼迫。',
    '大学生の求人倍率1.8倍に対し、高校生は約4倍、工科高校では20〜30倍にもなる超・売り手市場。',
    '生徒は学校に届いた一部の求人しか見られず、選択肢と情報の格差が課題になっていました。',
  ],
  values: [
    {
      audience: '先生',
      body:
        'OCR＋クラウドで求人票の管理・掲示を自動化。膨大な事務作業から解放され、生徒一人ひとりと向き合う時間を取り戻せます。',
    },
    {
      audience: '生徒',
      body:
        'スマホ・タブレットから、時間も場所も問わず求人情報にアクセス。動画や写真で企業を比較し、主体的に進路を選べる環境に。',
    },
    {
      audience: '企業',
      body:
        '高校生に自社の魅力をダイレクトに届けられる。求める人材への効果的なアプローチと、入社後のアンマッチング低減を実現。',
    },
  ],
  stats: [
    { value: '2,177校', label: '全国導入校数' },
    { value: '約69%', label: '就職希望高校生のカバー率' },
    { value: '95%超', label: '継続利用意向率' },
  ],
  positioning:
    '2022年に日本DX大賞（官民連携部門）を受賞。自治体との連携協定も進み、「高卒採用DX」の標準プラットフォームとしての地位を確立しています。',
}

/** Handy進路指導室 進学版 */
const ACADEMIC_PILLAR: ServicePillar = {
  id: 'about-biz-academic',
  phase: '新規事業',
  since: '2025年4月〜',
  brand: 'Handy進路指導室',
  variant: '進学版',
  tagline: '指定校推薦要項のデジタル管理から、進学領域へ。',
  lead:
    '就職版で築いた2,000校超の学校ネットワークを土台に、進学領域へ事業を拡張。AI＋独自OCRで指定校推薦要項を自動一覧化し、拡大する「年内入試」時代の進路指導を支えます。',
  challenges: [
    '大学入試では総合型・学校推薦型を合わせた「年内入試」が過半を占める時代に。',
    '毎年6月頃から届く指定校推薦要項はフォーマットも様々で、先生は一件ずつ紙で打ち込み。',
    '結果、生徒が推薦情報にアクセスしにくく、主体的な進路選択の妨げになっていました。',
  ],
  values: [
    {
      audience: '先生',
      body:
        'PDFをアップロードするだけで、AI-OCRが必要項目を自動転記・一覧化。掲示物作成までの時間を大幅に短縮します。',
    },
    {
      audience: '生徒',
      body:
        'スマホから推薦情報にすぐアクセス。学校の方針に合わせた開示設定で、適切な情報を元に進路を検討できます。',
    },
    {
      audience: '大学',
      body:
        '推薦情報が生徒に届きやすくなることで、進路の選択肢として検討してもらえる機会が拡大します。',
    },
  ],
  stats: [
    { value: '2025/04', label: '提供開始' },
    { value: 'AI × OCR', label: '独自の自動化エンジン' },
    { value: '項目別', label: '開示範囲を柔軟に設定' },
  ],
  positioning:
    '「EDIX東京」での出展など、市場からの期待を受けて立ち上げ期のフェーズ。進路指導室プラットフォームの第二の柱として、これから大きく育てていく事業です。',
}

const PAGE_INDEX: { id: string; label: string }[] = [
  { id: 'about-biz-main-heading', label: 'メイン' },
  { id: 'about-biz-handy-room', label: 'handy進路指導室とは？' },
  { id: 'about-biz-strengths-heading', label: 'Handyのここがすごい' },
  { id: 'about-biz-deck-heading', label: '企業説明スライド' },
  { id: 'about-biz-portfolio-heading', label: '事業ポートフォリオ' },
  { id: 'about-biz-employment', label: '就職版' },
  { id: 'about-biz-academic', label: '進学版' },
]

const HANDY_STRENGTHS = [
  {
    num: '01',
    title: '学校公認で、先生が生徒に勧めるサービス',
    body:
      '校長先生との直接契約により、進路指導の一環として先生から生徒に案内されます。単なる求人アプリではなく、学校の進路指導の現場に組み込まれた存在になっています。',
  },
  {
    num: '02',
    title: '生徒のアクティブ率・閲覧数が圧倒的',
    body:
      '先生が勧めることで自然と日常に入り込み、生徒が何度も触れるサービスに。求人票の閲覧数は、一般的な求人サービスと比べて突出した水準を実現しています。',
  },
  {
    num: '03',
    title: '三方よしで、利用率No.1',
    body:
      '学校・生徒・企業、それぞれにとって嬉しいサービス設計。全国2,500校を超える高校で導入され、業界内でも利用率No.1のポジションを築いています。',
  },
] as const

const COMPARE_ROWS: { label: string; handy: string; other: string }[] = [
  { label: '学校（校長）との契約', handy: '直接契約', other: 'なし / 限定的' },
  {
    label: '生徒への案内',
    handy: '進路指導の一環で先生から',
    other: '広告やギフトで自力獲得',
  },
  { label: 'アクティブ率', handy: '高い', other: '低くなりがち' },
  { label: '先生の認知', handy: '掲載求人まで把握', other: '知らないことが多い' },
]

export function AboutBusinessPage() {
  const [deckIndex, setDeckIndex] = useState(0)
  const deckSlide = DECK_SLIDES[deckIndex]
  const deckLen = DECK_SLIDES.length
  const goDeckPrev = () => {
    setDeckIndex((i) => (i - 1 + deckLen) % deckLen)
  }
  const goDeckNext = () => {
    setDeckIndex((i) => (i + 1) % deckLen)
  }

  return (
    <main className="about-biz">
      <div className="about-biz__hero-stage">
        <div className="about-biz__hero-layout">
          <section
            className="about-biz__lead"
            aria-labelledby="about-biz-main-heading"
          >
            <p className="about-biz__eyebrow">事業を知る</p>
            <h1 id="about-biz-main-heading" className="about-biz__title">
              <span className="about-biz__title-line">
                高校生と未来の選択肢を
              </span>
              <span className="about-biz__title-line">
                シームレスに繋ぐ
              </span>
            </h1>
            <div className="about-biz__body-narrow">
              <div className="about-biz__subtitle">
                <p>
                  私たちの事業は、学校業務の自動化にとどまらず、生徒の主体的な進路選択にも影響を与えています。
                </p>
                <p>
                  高校生の未来を応援するカンパニーとして、現在も事業展開を続けています。
                </p>
              </div>
            </div>
          </section>
          <nav
            className="about-biz__index"
            aria-label="このページの目次"
          >
            <p className="about-biz__index-title">Index</p>
            <ul className="about-biz__index-list">
              {PAGE_INDEX.map((item) => (
                <li key={item.id}>
                  <a className="about-biz__index-link" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <section
        id="about-biz-handy-room"
        className="about-biz__band"
        aria-labelledby="about-biz-handy-room-heading"
        data-reveal
      >
        <div className="about-biz__band-inner">
          <header className="about-biz__section-head about-biz__section-head--compact">
            <h2 id="about-biz-handy-room-heading" className="about-biz__section-title">
              handy進路指導室とは？
            </h2>
          </header>
          <div className="about-biz__body-narrow">
            <figure className="about-biz__handy-figure">
              <img
                className="about-biz__handy-img"
                src={handyRoomBanner}
                width={1200}
                height={675}
                alt="handy進路指導室の紹介。PC・スマートフォンでの求人票画面、サービスロゴ、学校公認の求人票デジタル共有システムとしての訴求がまとめられたバナー画像です。"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="about-biz__prose">
              <p>
                私たちの提供するhandy進路指導室は、学校に届く生徒宛ての求人票をデジタル管理するサービスです。すでに全国2500を超える高校に無償でサービスを提供しています。
              </p>
              <p>
                大学生の求人倍率1.8倍に対して、高校生の求人倍率は約4倍。工科高校であれば20~30倍です。多くの企業がhandy進路指導室で有料掲載を行い、高校生の採用活動を行なっています。
                これにより、高校生の選択肢がより多様化し、望んだ進路を選びやすくなるような土壌を作っています。
              </p>
              <p>
                多くの企業、学校、そして生徒に求められる三方よしのサービスを展開しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-biz-strengths"
        className="about-biz__band about-biz__band--strengths"
        aria-labelledby="about-biz-strengths-heading"
        data-reveal
      >
        <div className="about-biz__band-inner">
          <header className="about-biz__strengths-head">
            <p className="about-biz__strengths-eyebrow">ここがすごい</p>
            <h2
              id="about-biz-strengths-heading"
              className="about-biz__strengths-title"
            >
              学校に選ばれる設計だから、
              <br />
              <span className="about-biz__strengths-em">利用率No.1</span>
              <span className="about-biz__strengths-badge">学校公認</span>
            </h2>
          </header>

          <div className="about-biz__body-narrow">
            <p className="about-biz__strengths-lead">
              就職希望の生徒の<strong>95%</strong>は「学校紹介」で進路を決めます。だからハンディは、学校（校長先生）と直接導入契約を結び、進路指導の一環として先生が生徒に利用を促す設計にしました。学校にとって本当に嬉しいサービスであること──これが、多くの高校で選ばれ続けている理由です。
            </p>

            <ul className="about-biz__strengths-grid">
              {HANDY_STRENGTHS.map((s) => (
                <li key={s.num} className="about-biz__strength-card">
                  <p className="about-biz__strength-num" aria-hidden="true">
                    {s.num}
                  </p>
                  <h3 className="about-biz__strength-title">{s.title}</h3>
                  <p className="about-biz__strength-body">{s.body}</p>
                </li>
              ))}
            </ul>

            <div className="about-biz__compare">
            <h3 className="about-biz__compare-heading">
              なぜ他社は、生徒の獲得に苦戦するのか？
            </h3>
            <p className="about-biz__compare-lead">
              多くの求人サービスは生徒に直接アプローチし、ギフトなどの登録特典でユーザー獲得に苦労するのが実情です。ハンディは最初から「学校にとって嬉しい設計」を追求した結果、特別なコストをかけずに生徒の利用が広がっています。
            </p>
            <div
              className="about-biz__compare-table"
              role="table"
              aria-label="Handyと一般的な他社サービスの比較"
            >
              <div
                className="about-biz__compare-row about-biz__compare-row--head"
                role="row"
              >
                <div role="columnheader" />
                <div role="columnheader">Handy進路指導室</div>
                <div
                  role="columnheader"
                  className="about-biz__compare-col--other"
                >
                  一般的な他社
                </div>
              </div>
              {COMPARE_ROWS.map((row) => (
                <div key={row.label} className="about-biz__compare-row" role="row">
                  <div role="rowheader" className="about-biz__compare-label">
                    {row.label}
                  </div>
                  <div role="cell" className="about-biz__compare-good">
                    {row.handy}
                  </div>
                  <div role="cell" className="about-biz__compare-bad">
                    {row.other}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-biz-deck"
        className="about-biz__band"
        aria-labelledby="about-biz-deck-heading"
        data-reveal
      >
        <div className="about-biz__band-inner">
          <header className="about-biz__deck-page-head">
            <p className="about-biz__deck-brand" aria-hidden="true">
              handy
            </p>
            <h2 id="about-biz-deck-heading" className="about-biz__deck-heading">
              企業説明スライド
            </h2>
          </header>
          <div className="about-biz__body-narrow">
            <div className="about-biz__deck-inner">
            <div className="about-biz__deck-copy">
              <div className="about-biz__deck-prose">
                <p>
                  ミッションから事業・カルチャーまでを一覧できるダミースライドです。矢印ボタンで内容を切り替えられます。
                </p>
              </div>
            </div>
            <div className="about-biz__deck-media">
              <div
                className="about-biz__deck"
                aria-roledescription="carousel"
                aria-label="企業説明スライド（ダミー）"
              >
                <div className="about-biz__deck-viewport">
                  <div className="about-biz__deck-frame">
                    <div
                      className="about-biz__deck-slide"
                      key={deckSlide.id}
                      aria-live="polite"
                    >
                      <p className="about-biz__deck-kicker">{deckSlide.kicker}</p>
                      <p className="about-biz__deck-section">{deckSlide.sectionLabel}</p>
                      <div className="about-biz__deck-body">
                        {deckSlide.lines.map((line, lineIdx) => (
                          <p
                            key={`${deckSlide.id}-${lineIdx}`}
                            className="about-biz__deck-line"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                      <p className="about-biz__deck-num" aria-hidden="true">
                        {deckSlide.slideNum}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-biz__deck-nav">
                  <button
                    type="button"
                    className="about-biz__deck-btn"
                    onClick={goDeckPrev}
                    aria-label="前のスライド"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="about-biz__deck-btn"
                    onClick={goDeckNext}
                    aria-label="次のスライド"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-biz-portfolio"
        className="about-biz__band about-biz__band--alt"
        aria-labelledby="about-biz-portfolio-heading"
        data-reveal
      >
        <div className="about-biz__band-inner">
          <header className="about-biz__section-head">
            <p className="about-biz__eyebrow">事業ポートフォリオ</p>
            <h2
              id="about-biz-portfolio-heading"
              className="about-biz__section-title"
            >
              進路指導室を起点に、
              <br />
              高校生の進路領域を面で支える
            </h2>
          </header>
          <div className="about-biz__body-narrow">
            <p className="about-biz__portfolio-lead">
              ハンディのビジョンは「高校生の未来を応援するカンパニー」。その実現に向けて、全国の高校現場で最もペインの深い「進路指導室」を起点に事業を広げています。就職版でコア基盤を確立し、進学版で領域を拡張。その先には、留学・専門学校・多様な選択肢をつなぐプラットフォームを見据えています。
            </p>

            <ol className="about-biz__portfolio-timeline" aria-label="事業フェーズ">
              <li className="about-biz__portfolio-phase about-biz__portfolio-phase--core">
                <p className="about-biz__portfolio-phase-tag">Phase 1 ／ 確立</p>
                <h3 className="about-biz__portfolio-phase-title">
                  Handy進路指導室 <span>就職版</span>
                </h3>
                <p className="about-biz__portfolio-phase-meta">2021年〜｜導入2,177校</p>
                <p className="about-biz__portfolio-phase-body">
                  高卒採用DXの標準プラットフォーム。学校との信頼関係と2,000校超のネットワークは、次の展開すべての土台になります。
                </p>
              </li>
              <li className="about-biz__portfolio-phase about-biz__portfolio-phase--grow">
                <p className="about-biz__portfolio-phase-tag">Phase 2 ／ 拡大</p>
                <h3 className="about-biz__portfolio-phase-title">
                  Handy進路指導室 <span>進学版</span>
                </h3>
                <p className="about-biz__portfolio-phase-meta">2025年4月〜｜立ち上げ中</p>
                <p className="about-biz__portfolio-phase-body">
                  指定校推薦要項のデジタル管理から進学領域へ。就職版で築いたアセットを活かし、第二の柱として育てていくフェーズです。
                </p>
              </li>
              <li className="about-biz__portfolio-phase about-biz__portfolio-phase--next">
                <p className="about-biz__portfolio-phase-tag">Phase 3 ／ 拡張</p>
                <h3 className="about-biz__portfolio-phase-title">
                  多様な進路の<span>プラットフォーム化</span>
                </h3>
                <p className="about-biz__portfolio-phase-meta">これから</p>
                <p className="about-biz__portfolio-phase-body">
                  専門学校・留学・資格など、高校生が取りうる選択肢を幅広く支える構想。進路指導室を軸にした領域拡大を続けます。
                </p>
              </li>
            </ol>

            <div className="about-biz__portfolio-note">
              <p className="about-biz__portfolio-note-title">就活者視点での位置づけ</p>
              <p className="about-biz__portfolio-note-body">
                就職版という確立されたコア事業に乗りつつ、進学版の立ち上げやその先の新規領域にも挑めるフェーズ。どの事業に関わっても、「高校生の主体的な選択を支える」という共通の目的で地続きに設計されています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicePillarSection pillar={EMPLOYMENT_PILLAR} tone="core" />
      <ServicePillarSection pillar={ACADEMIC_PILLAR} tone="grow" />
    </main>
  )
}

type ServicePillarSectionProps = {
  pillar: ServicePillar
  tone: 'core' | 'grow'
}

function ServicePillarSection({ pillar, tone }: ServicePillarSectionProps) {
  const headingId = `${pillar.id}-heading`
  const toneClass =
    tone === 'core'
      ? 'about-biz__pillar--core'
      : 'about-biz__pillar--grow'
  const bandClass =
    tone === 'core'
      ? 'about-biz__band about-biz__band--pillar about-biz__band--pillar-core'
      : 'about-biz__band about-biz__band--pillar about-biz__band--pillar-grow'
  return (
    <section
      id={pillar.id}
      className={bandClass}
      aria-labelledby={headingId}
      data-reveal
    >
      <div className="about-biz__band-inner">
        <header className={`about-biz__pillar-head ${toneClass}`}>
          <p className="about-biz__pillar-eyebrow">
            <span className="about-biz__pillar-phase">{pillar.phase}</span>
            <span className="about-biz__pillar-since">{pillar.since}</span>
          </p>
          <h2 id={headingId} className="about-biz__pillar-title">
            <span className="about-biz__pillar-brand">{pillar.brand}</span>
            <span className="about-biz__pillar-variant">{pillar.variant}</span>
          </h2>
          <p className="about-biz__pillar-tagline">{pillar.tagline}</p>
        </header>

        <div className="about-biz__body-narrow">
          <p className="about-biz__pillar-lead">{pillar.lead}</p>

          <div className="about-biz__pillar-stats" role="list">
            {pillar.stats.map((s) => (
              <div key={s.label} className="about-biz__pillar-stat" role="listitem">
                <p className="about-biz__pillar-stat-value">{s.value}</p>
                <p className="about-biz__pillar-stat-label">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="about-biz__pillar-grid">
            <div className="about-biz__pillar-col">
              <h3 className="about-biz__pillar-subhead">
                <span aria-hidden="true" className="about-biz__pillar-kicker">
                  市場の背景
                </span>
                なぜこの事業が必要なのか
              </h3>
              <ul className="about-biz__pillar-challenges">
                {pillar.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="about-biz__pillar-col">
              <h3 className="about-biz__pillar-subhead">
                <span aria-hidden="true" className="about-biz__pillar-kicker">
                  提供価値
                </span>
                三者それぞれの課題を解決する
              </h3>
              <ul className="about-biz__pillar-values">
                {pillar.values.map((v) => (
                  <li key={v.audience} className="about-biz__pillar-value">
                    <span className="about-biz__pillar-audience">
                      {v.audience}
                    </span>
                    <p className="about-biz__pillar-value-body">{v.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-biz__pillar-positioning">
            <p className="about-biz__pillar-positioning-label">
              会社の中での位置づけ
            </p>
            <p className="about-biz__pillar-positioning-body">
              {pillar.positioning}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
