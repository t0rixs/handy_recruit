import { useState } from 'react'
import './KnowHandyPage.css'

type ValueItem = {
  en: string
  jaTitle: string
  body: string
  note?: string
}

const VALUE_ITEMS: ValueItem[] = [
  {
    en: 'For People, For the Future',
    jaTitle: '全ては人のため、未来のため',
    body: '仕事は自身のためにあるのではなく、ユーザー、チーム、社会、未来のためにある',
  },
  {
    en: 'Students First',
    jaTitle: '生徒が第一',
    body: '高校生の未来につながる意思決定を優先する',
  },
  {
    en: 'Decisive and Fast-acting',
    jaTitle: '自ら考え、決め、神速に行動する',
    body:
      '他責に成長なし。自ら決断し、責任を持ち、考える前に動きだすことで、スピードを生み出す',
  },
  {
    en: 'Reliable Professional',
    jaTitle: '当たり前を、確実に',
    body:
      '当たり前レベルが高い、誰からも信頼されるプロフェッショナルを目指す',
  },
  {
    en: 'Mutually Respectful',
    jaTitle: '他者への敬意',
    body:
      '全てのステークホルダーの考え方を尊重し、敬意をもって接する',
    note:
      '（※ユーザー、クライアント、パートナー企業、雇用形態に関わらずチームメンバー全員）',
  },
  {
    en: 'Flat Team',
    jaTitle: '目的のために、結束する',
    body:
      '役職やキャリアに関係なく、正しい意見を採用し、本質や、中身を大切にする組織にする',
  },
  {
    en: 'Health-focused Mindset',
    jaTitle: '健康が全てのベース',
    body:
      '自ら健康に生き、自分に関わる人たちも健康であることは、人生を楽しむ全ての基点になる',
  },
]

/** 企業説明スライド（ダミー） */
type DeckSlide = {
  id: string
  kicker: string
  sectionLabel: string
  lines: string[]
  slideNum: number
}

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

const FIT_ITEMS = [
  {
    en: 'Collaborative',
    desc: 'チームで一つの目標に向かって仕事をするのが好きな人',
  },
  {
    en: 'Supportive',
    desc: 'ついつい自分のことより、お客さんや同僚のことを優先してしまう人',
  },
  {
    en: 'Growth-minded',
    desc: '会社の成長や仕事を通じて自分を成長させたい人',
  },
  {
    en: 'Passionate',
    desc:
      '多少、辛かったり大変でも、社会課題に挑戦し、社会貢献したいと考えてる人',
  },
] as const

const PAGE_INDEX_ITEMS: { id: string; label: string }[] = [
  { id: 'know-handy-mission-heading', label: 'Mission' },
  { id: 'know-handy-value-heading', label: 'Value' },
  { id: 'know-handy-culture-title', label: 'ハンディの文化' },
  { id: 'know-handy-fit-heading', label: '当社がフィットする方' },
  { id: 'know-handy-company-video-heading', label: '企業説明動画' },
  { id: 'know-handy-deck', label: '資料スライド' },
  { id: 'know-handy-stats-title', label: '数字で見るハンディ' },
  { id: 'know-handy-benefits-title', label: '評価制度/福利厚生' },
]

export function KnowHandyPage() {
  const [statsExpanded, setStatsExpanded] = useState(false)
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
    <main className="know-handy">
      <div className="know-handy__inner">
        <div className="know-handy__mission-stage">
          <div className="know-handy__mission-layout">
            <section
              className="know-handy__mission"
              aria-labelledby="know-handy-mission-heading"
            >
              <h2 id="know-handy-mission-heading" className="know-handy__mission-label">
                Mission
              </h2>
              <p className="know-handy__mission-text">
                <span className="know-handy__mission-line">
                  高校生が、進路の自己決定に
                </span>
                <span className="know-handy__mission-line">
                  必要な情報と支援を最適な形で提供する
                </span>
              </p>
              <p className="know-handy__mission-desc">
                高校生の進路を、本人の手にとり戻す。
                <br />
                そのために私たちは、情報と支援を最適な形で届ける。
                <br />
                学校とともに進路情報を開き、
                <br />
                迷いを減らし、自分で選ぶ力を支える。
                <br />
                そんな希望のある選択を、未来に残していくために。
              </p>
            </section>
            <nav
              className="know-handy__mission-index"
              aria-label="このページの目次"
            >
              <p className="know-handy__mission-index-title">Index</p>
              <ul className="know-handy__mission-index-list">
                {PAGE_INDEX_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a className="know-handy__mission-index-link" href={`#${item.id}`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section
        className="know-handy__value-band"
        aria-labelledby="know-handy-value-heading"
      >
        <div className="know-handy__value-inner">
          <header className="know-handy__value-header">
            <h2 id="know-handy-value-heading" className="know-handy__value-heading-en">
              Value
            </h2>
            <p className="know-handy__value-heading-ja">大切にする価値</p>
            <p className="know-handy__value-intro">
              組織として、Vision、Missionを果たすために
              <br />
              下記7つのValueを大切にしています。
            </p>
          </header>
          <ul className="know-handy__value-list">
            {VALUE_ITEMS.map((item) => (
              <li key={item.en} className="know-handy__value-card">
                <p className="know-handy__value-card-en">{item.en}</p>
                <div className="know-handy__value-card-body">
                  <span className="know-handy__value-card-dot" aria-hidden="true" />
                  <div className="know-handy__value-card-text">
                    <p className="know-handy__value-card-line">
                      <strong className="know-handy__value-card-ja-title">
                        {item.jaTitle}
                      </strong>
                      {' '}
                      <span className="know-handy__value-card-desc">{item.body}</span>
                    </p>
                    {item.note ? (
                      <p className="know-handy__value-card-note">{item.note}</p>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="know-handy__inner know-handy__inner--narrow">
        <section
          className="know-handy__block know-handy__block--culture"
          aria-labelledby="know-handy-culture-title"
        >
          <h2 id="know-handy-culture-title" className="know-handy__block-title">
            ハンディの文化
          </h2>
          <p className="know-handy__block-lead">
            私たちは、「〇〇」を重んじています。
          </p>
          <div className="know-handy__block-prose">
            <p>
              ここにハンディが重んじる人材像などを〇〇という視点で語る。ここにハンディが重んじる人材像などを〇〇という視点で語る。ここにハンディが重んじる人材像などを〇〇という視点で語る。
            </p>
            <p>
              ここにハンディが重んじる人材像などを〇〇という視点で語る。ここにハンディが重んじる人材像などを〇〇という視点で語る。ここにハンディが重んじる人材像などを〇〇という視点で語る。
            </p>
            <p>
              ここにハンディが重んじる人材像などを〇〇という視点で語る。ここにハンディが重んじる人材像などを〇〇という視点で語る。ここにハンディが重んじる人材像などを〇〇という視点で語る。
            </p>
          </div>

          <div className="know-handy__fit">
            <h3 id="know-handy-fit-heading" className="know-handy__fit-heading">
              <span className="know-handy__fit-heading-dot" aria-hidden="true" />
              当社がフィットする方
            </h3>
            <ul className="know-handy__fit-grid" aria-labelledby="know-handy-fit-heading">
              {FIT_ITEMS.map((item, idx) => (
                <li key={item.en} className="know-handy__fit-card">
                  <div className="know-handy__fit-card-top">
                    <span className="know-handy__fit-card-icon" aria-hidden="true">
                      {idx === 0 ? (
                        <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                          <circle cx="14" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
                          <circle cx="34" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
                          <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
                          <path d="M24 20v8M20 40h8" stroke="currentColor" strokeWidth="2" />
                          <path d="M24 28l4-6 4 2" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      ) : idx === 1 ? (
                        <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                          <path
                            d="M14 32c2-10 8-16 10-16s8 6 10 16"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M24 8c-4 4-4 10 0 14 4-4 4-10 0-14z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      ) : idx === 2 ? (
                        <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                          <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
                          <path
                            d="M14 40c2-12 8-18 10-18s8 6 10 18"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path d="M32 10l4 4M36 8v6" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 48 48" width="40" height="40" fill="none">
                          <path
                            d="M16 28c4-8 8-12 16-12s12 4 16 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <ellipse cx="24" cy="18" rx="8" ry="6" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      )}
                    </span>
                    <p className="know-handy__fit-card-en">
                      <span className="know-handy__fit-card-en-dot" aria-hidden="true" />
                      {item.en}
                    </p>
                  </div>
                  <div className="know-handy__fit-card-bottom">
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="know-handy__company-video"
            aria-labelledby="know-handy-company-video-heading"
          >
            <div className="know-handy__company-video-inner">
              <div className="know-handy__company-video-copy">
                <p className="know-handy__company-video-logo" aria-hidden="true">
                  handy
                </p>
                <h3
                  id="know-handy-company-video-heading"
                  className="know-handy__company-video-title"
                >
                  ハンディ企業説明会動画
                </h3>
                <div className="know-handy__company-video-prose">
                  <p>
                    こちらの動画では、Handy進路指導室の立ち上げ経緯や、当社の目指す姿（ミッション、ビジョン、バリュー）、社員の皆さんへの提供価値などを約10分にまとめています。
                  </p>
                  <p>
                    通勤・通学中などの合間の時間でも見てもらえる様な内容になっていますので当社の選考を希望する応募者の皆様は、まずこちらの動画をご覧ください。
                  </p>
                </div>
              </div>
              <div className="know-handy__company-video-media">
                <div className="know-handy__video-frame">
                  <iframe
                    title="ハンディ株式会社 会社説明動画（YouTube）"
                    src="https://www.youtube.com/embed/53HFTUqXOIU"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="know-handy__video-caption">
                  ハンディ企業説明会動画
                </p>
              </div>
            </div>

            <div
              id="know-handy-deck"
              className="know-handy__deck"
              aria-roledescription="carousel"
              aria-label="企業説明スライド（ダミー）"
            >
              <div className="know-handy__deck-frame">
                <div
                  className="know-handy__deck-slide"
                  key={deckSlide.id}
                  aria-live="polite"
                >
                  <p className="know-handy__deck-kicker">{deckSlide.kicker}</p>
                  <p className="know-handy__deck-section">{deckSlide.sectionLabel}</p>
                  <div className="know-handy__deck-body">
                    {deckSlide.lines.map((line, lineIdx) => (
                      <p key={`${deckSlide.id}-${lineIdx}`} className="know-handy__deck-line">
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="know-handy__deck-num" aria-hidden="true">
                    {deckSlide.slideNum}
                  </p>
                </div>
              </div>
              <div className="know-handy__deck-nav">
                <button
                  type="button"
                  className="know-handy__deck-btn"
                  onClick={goDeckPrev}
                  aria-label="前のスライド"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="know-handy__deck-btn"
                  onClick={goDeckNext}
                  aria-label="次のスライド"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        className="know-handy__stats-band"
        aria-labelledby="know-handy-stats-title"
      >
        <div className="know-handy__stats-inner">
          <h2 id="know-handy-stats-title" className="know-handy__stats-title">
            数字で見るハンディ
          </h2>
          <p className="know-handy__stats-tag">
            <span className="know-handy__stats-tag-icon" aria-hidden="true" />
            Colleague
          </p>
          <ul className="know-handy__stats-grid">
            <li className="know-handy__stat-card">
              <p className="know-handy__stat-label">男女比率</p>
              <div className="know-handy__stat-pie" aria-hidden="true" />
              <p className="know-handy__stat-legend">
                <span>● 女性</span>
                <span>● 男性</span>
              </p>
              <p className="know-handy__stat-value">42% 58%</p>
            </li>
            <li className="know-handy__stat-card">
              <p className="know-handy__stat-label">平均年齢 (社員)</p>
              <span className="know-handy__stat-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="44" height="44" fill="none">
                  <circle cx="16" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="32" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M10 40c2-10 8-14 14-14s12 4 14 14"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <p className="know-handy__stat-value">30.9歳</p>
            </li>
            <li className="know-handy__stat-card">
              <p className="know-handy__stat-label">平均年収 (賞与含む)</p>
              <span className="know-handy__stat-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="44" height="44" fill="none">
                  <rect
                    x="8"
                    y="18"
                    width="32"
                    height="22"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="24" cy="28" r="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M22 26h4v4h-4z" fill="currentColor" />
                </svg>
              </span>
              <p className="know-handy__stat-value">629万</p>
            </li>
            <li className="know-handy__stat-card">
              <p className="know-handy__stat-label">拠点の数</p>
              <span className="know-handy__stat-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="44" height="44" fill="none">
                  <path
                    d="M12 42V20l12-8 12 8v22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path d="M18 42V28h12v14" stroke="currentColor" strokeWidth="2" />
                  <path d="M22 32h8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <p className="know-handy__stat-value">2拠点</p>
              <p className="know-handy__stat-sub">(東京・福岡)</p>
            </li>
          </ul>
          {statsExpanded ? (
            <p className="know-handy__stats-extra">
              （ダミー）追加の指標やグラフをここに表示できます。
            </p>
          ) : null}
          <p className="know-handy__stats-foot">※2025年12月末時点</p>
          <button
            type="button"
            className="know-handy__stats-more"
            onClick={() => setStatsExpanded((v) => !v)}
            aria-expanded={statsExpanded}
          >
            {statsExpanded ? '閉じる' : 'さらに表示'}
            <span className="know-handy__stats-more-caret" aria-hidden="true">
              {statsExpanded ? '▲' : '▼'}
            </span>
          </button>
        </div>
      </section>

      <div className="know-handy__inner know-handy__inner--narrow">
        <section
          className="know-handy__block know-handy__block--benefits know-handy__section--last"
          aria-labelledby="know-handy-benefits-title"
        >
          <h2 id="know-handy-benefits-title" className="know-handy__block-title">
            評価制度/福利厚生
          </h2>
          <p className="know-handy__block-prose know-handy__block-prose--lead">
            創業間もない会社ですが、大手企業で就業経験のある役員によって、従業員が安心して仕事に取り組める環境を用意しています。特に、健康経営を重視した制度が充実しています。
          </p>
          <ul className="know-handy__benefit-links">
            <li>
              <a
                className="know-handy__benefit-link"
                href="https://handy.school/recruitment/evaluation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="know-handy__benefit-link-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="56" height="56" fill="none">
                    <path
                      d="M14 38h20V22l-6-6H14v22z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 16v6h6M26 10l6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22 30l4-4 4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="know-handy__benefit-link-row">
                  <span className="know-handy__benefit-link-bullet" aria-hidden="true" />
                  <span className="know-handy__benefit-link-text">人事評価制度</span>
                  <span className="know-handy__benefit-link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="know-handy__benefit-link"
                href="https://handy.school/recruitment/welfare"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="know-handy__benefit-link-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="56" height="56" fill="none">
                    <path
                      d="M24 12c-6 6-12 10-12 18a12 12 0 1024 0c0-8-6-12-12-18z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 28c2 4 5 6 8 6s6-2 8-6M18 24h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="know-handy__benefit-link-row">
                  <span className="know-handy__benefit-link-bullet" aria-hidden="true" />
                  <span className="know-handy__benefit-link-text">
                    健康経営と福利厚生
                    <wbr />
                    プログラム
                  </span>
                  <span className="know-handy__benefit-link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
