import { Link } from 'react-router-dom'
import { TALENTIO_JOB_POSTINGS } from '../data/talentioJobPostings'
import { WANTEDLY_LATEST_ARTICLES } from '../data/handyWantedlyArticles'
import type { JobCategory } from '../types/jobCategory'
import salesWorkImage from '../assets/sales.png'
import './JobBusinessPage.css'

export function JobBusinessPage() {
  return (
    <main className="job-biz">
      <div className="job-biz__inner">
        <header className="job-biz__header" data-reveal>
          <p className="job-biz__label">募集職種</p>
          <h1 className="job-biz__title">ビジネス職 — インサイドセールス</h1>
          <p className="job-biz__lead">
            トップの募集職種からお進みの方へ、ビジネス職のうちインサイドセールスを例に業務のイメージをまとめています。エンジニア職・コーポレート職からお進みの方も、営業組織の一端としてご覧ください。
          </p>
        </header>

        <section
          className="job-biz__section"
          aria-labelledby="job-biz-work-heading"
          data-reveal
        >
          <h2 id="job-biz-work-heading" className="job-biz__h2">
            業務内容
          </h2>
          <p className="job-biz__work-lead">
            高校・専門学校の進路指導担当者や、採用ご担当の企業様に対し、電話・メール・オンライン商談などを通じて「Handy
            進路指導室」などの価値をお伝えし、課題の整理から商談設定までを担います。
          </p>
          <figure className="job-biz__work-figure">
            <img
              className="job-biz__work-image"
              src={salesWorkImage}
              alt="クライアントや学校関係者との商談・打ち合わせのイメージ"
              width={540}
              height={360}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="job-biz__prose">
            <p>
              リード獲得後は、プリセールスやフィールドセールスと連携しながら、導入に向けた提案資料の準備・社内調整のサポート、ナーチャリング（見込み客の育成）までを一気通貫で行います。アポイント数や商談化率などの目標と向き合う、成果重視のロールです。
            </p>
          </div>
        </section>

        <section
          className="job-biz__section"
          aria-labelledby="job-biz-appeal-heading"
          data-reveal
        >
          <h2 id="job-biz-appeal-heading" className="job-biz__h2">
            この業務の魅力
          </h2>
          <ul className="job-biz__appeal-list">
            <li>
              教育現場のリアルな声に最も近いポジションのひとつ。日々の商談やヒアリングで得たインサイトが、プロダクト改善やマーケ施策に還元されやすいです。
            </li>
            <li>
              「現場の課題を数字と行動で動かす」手応えを得られ、成果が見えやすいロールです。
            </li>
            <li>
              未経験スタートのメンバーも多く、トークスクリプトやOJTで型を身につけつつ、自分なりの打ち手を試せます。
            </li>
            <li>
              創業からのスピード感と裁量があり、意志と行動量が評価につながりやすい環境です。
            </li>
          </ul>
        </section>

        <section
          className="job-biz__section"
          aria-labelledby="job-biz-voices-heading"
          data-reveal
        >
          <h2 id="job-biz-voices-heading" className="job-biz__h2">
            働く人の声
          </h2>
          <p className="job-biz__voices-intro">
            社員インタビューを3本ピックアップしました。リンク先は別ウィンドウで開きます。
          </p>
          <ul className="job-biz__articles">
            {WANTEDLY_LATEST_ARTICLES.map((a) => (
              <li key={a.id}>
                <a
                  className="job-biz__article"
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="job-biz__article-title">{a.title}</span>
                  <span className="job-biz__article-meta">
                    記事を読む
                    <span aria-hidden="true"> ↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="job-biz__section"
          aria-labelledby="job-biz-openings-heading"
          data-reveal
        >
          <h2 id="job-biz-openings-heading" className="job-biz__h2">
            該当の求人
          </h2>
          <p className="job-biz__openings-intro">
            本ページの内容に関連する採用ポジションです。求人票の全文・応募は以下からお進みください。
          </p>
          <ul className="job-biz__articles">
            {TALENTIO_JOB_POSTINGS.map((job) => (
              <li key={job.id}>
                <a
                  className="job-biz__article"
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="job-biz__article-title">{job.title}</span>
                  <span className="job-biz__article-meta">
                    求人票を見る
                    <span aria-hidden="true"> ↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <nav
          className="job-biz__switch"
          aria-labelledby="job-biz-switch-heading"
          data-reveal
        >
          <h2 id="job-biz-switch-heading" className="job-biz__switch-title">
            別の職種から見る
          </h2>
          <ul className="job-biz__switch-grid">
            <li>
              <Link
                className="job-biz__switch-btn"
                to="/"
                state={{ openRecruitCategory: 'business' as JobCategory }}
              >
                ビジネス職
              </Link>
            </li>
            <li>
              <Link
                className="job-biz__switch-btn"
                to="/"
                state={{ openRecruitCategory: 'engineer' as JobCategory }}
              >
                エンジニア職
              </Link>
            </li>
            <li>
              <Link
                className="job-biz__switch-btn"
                to="/"
                state={{ openRecruitCategory: 'corporate' as JobCategory }}
              >
                コーポレート職
              </Link>
            </li>
          </ul>
          <div className="job-biz__switch-more-wrap">
            <Link className="job-biz__more-positions" to="/positions">
              募集ポジション一覧を見る
            </Link>
          </div>
        </nav>
      </div>
    </main>
  )
}
