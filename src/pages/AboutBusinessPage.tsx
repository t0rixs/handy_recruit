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

type BizItem = {
  title: string
  body: string
}

/** 就職版（ハンディの学校・求人領域に沿った仮項目） */
const EMPLOYMENT_ITEMS: BizItem[] = [
  {
    title: '求人票のデジタル化・クラウド配信',
    body:
      '紙の切り替えや再印刷の手間を減らし、常に最新の求人情報へアクセスできる環境を学校と生徒に届けます。',
  },
  {
    title: '進路指導室ソリューション',
    body:
      '学校・生徒・企業をつなぎ、キャリア形成のプロセス全体を支える進路支援の基盤を提供します。',
  },
  {
    title: '学校業務の効率化',
    body:
      '求人・進路データの一元管理や、事務・指導のワークフロー整理を通じて、教職員の負担軽減に貢献します。',
  },
  {
    title: '採用企業との接点づくり',
    body:
      '高校の進路指導の現場に即した形で、企業情報や説明会情報を届け、納得感のある選択を後押しします。',
  },
]

/** 進学版（進路選択・進学情報の側面の仮項目） */
const ACADEMIC_ITEMS: BizItem[] = [
  {
    title: '進学先情報の整理とアクセス',
    body:
      '大学・専門学校などの情報を、検索しやすく・更新しやすい形で学校と生徒に届けます。',
  },
  {
    title: '進路データに基づく意思決定支援',
    body:
      '志望や進路の検討に必要な情報をデータに基づき可視化し、本人の主体的な選択を支えます。',
  },
  {
    title: '多様な進路モデルへの対応',
    body:
      '一般選抜・総合型選抜・学校推薦など、選択肢ごとのスケジュールや準備を整理しやすくします。',
  },
  {
    title: '進路指導担当者向けの運用支援',
    body:
      '校内の進路指導体制に合わせた運用・セキュリティ面のサポートで、現場の継続利用を支えます。',
  },
]

const PAGE_INDEX: { id: string; label: string }[] = [
  { id: 'about-biz-main-heading', label: 'メイン' },
  { id: 'about-biz-handy-room', label: 'handy進路指導室とは？' },
  { id: 'about-biz-deck', label: '企業説明スライド' },
  { id: 'about-biz-employment', label: '就職版' },
  { id: 'about-biz-academic', label: '進学版' },
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
            <div className="about-biz__subtitle">
              <p>
                私たちの事業は、学校業務の自動化にとどまらず、生徒の主体的な進路選択にも影響を与えています。
              </p>
              <p>
                高校生の未来を応援するカンパニーとして、現在も事業展開を続けています。
              </p>
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
      </section>

      <section
        id="about-biz-deck"
        className="about-biz__band"
        aria-labelledby="about-biz-deck-heading"
        data-reveal
      >
        <div className="about-biz__band-inner">
          <div className="about-biz__deck-inner">
            <div className="about-biz__deck-copy">
              <p className="about-biz__deck-brand" aria-hidden="true">
                handy
              </p>
              <h2 id="about-biz-deck-heading" className="about-biz__deck-heading">
                企業説明スライド
              </h2>
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
      </section>

      <section
        id="about-biz-employment"
        className="about-biz__band about-biz__band--alt"
        aria-labelledby="about-biz-employment-heading"
        data-reveal
      >
        <div className="about-biz__band-inner">
          <header className="about-biz__section-head">
            <h2 id="about-biz-employment-heading" className="about-biz__section-title">
              就職版
            </h2>
            <p className="about-biz__section-lead">
              高校・専門学校における就職活動・求人情報のデジタル化と、現場に根ざした支援のイメージです（内容は仮置き）。
            </p>
          </header>
          <ul className="about-biz__card-grid">
            {EMPLOYMENT_ITEMS.map((item) => (
              <li key={item.title} className="about-biz__card">
                <h3 className="about-biz__card-title">{item.title}</h3>
                <p className="about-biz__card-body">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="about-biz-academic"
        className="about-biz__band"
        aria-labelledby="about-biz-academic-heading"
        data-reveal
      >
        <div className="about-biz__band-inner">
          <header className="about-biz__section-head">
            <h2 id="about-biz-academic-heading" className="about-biz__section-title">
              進学版
            </h2>
            <p className="about-biz__section-lead">
              進学選択・進路情報の側面から、生徒と学校を支える提供イメージです（内容は仮置き）。
            </p>
          </header>
          <ul className="about-biz__card-grid">
            {ACADEMIC_ITEMS.map((item) => (
              <li key={item.title} className="about-biz__card">
                <h3 className="about-biz__card-title">{item.title}</h3>
                <p className="about-biz__card-body">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
