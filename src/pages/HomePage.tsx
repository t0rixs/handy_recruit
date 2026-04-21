import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  BUSINESS_ROLE_OPTIONS,
  type BusinessRoleOptionId,
} from '../data/businessRoleOptions'
import type { JobCategory } from '../types/jobCategory'
import ceoPhoto from '../assets/otasan.png'
import schoolIllustration from '../assets/school.png'
import './HomePage.css'

export type { JobCategory } from '../types/jobCategory'

export function HomePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [jobCategory, setJobCategory] = useState<JobCategory | null>(null)

  /* Router の location.state から募集セクションを同期（直後に replace で state を消す） */
  /* eslint-disable react-hooks/set-state-in-effect -- 上記のため effect 内 setState / 連続 navigate が必要 */
  useEffect(() => {
    const st = location.state as { openRecruitCategory?: JobCategory } | undefined
    if (!st?.openRecruitCategory) return
    const cat = st.openRecruitCategory
    navigate(`${location.pathname}${location.search}`, { replace: true, state: {} })
    if (cat === 'business') {
      setJobCategory('business')
      window.setTimeout(() => {
        document.getElementById('recruit-roles')?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      navigate('/jobs/business/detail', { state: { fromWizard: false } })
    }
  }, [location.state, location.pathname, location.search, navigate])
  /* eslint-enable react-hooks/set-state-in-effect */

  const resetRecruit = () => {
    setJobCategory(null)
  }

  const goDetailOther = () => {
    navigate('/jobs/business/detail', {
      state: { fromWizard: false },
    })
  }

  const goBusinessRole = (roleId: BusinessRoleOptionId) => {
    navigate('/jobs/business/detail', {
      state: {
        fromWizard: true,
        selectedRoleId: roleId,
      },
    })
  }

  return (
    <main className="home">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <h1 id="home-hero-title" className="home-hero__title">
              <span className="home-hero__line">
                高校生100万人の未来を変える
              </span>
              <span className="home-hero__line home-hero__line--sub">
                学校改革型SaaS
              </span>
            </h1>
            <p className="home-hero__lead">
              私たちは高校や専門学校の求人票をデジタル化する会社です。創業3年で高校生求職者の7割が利用する一大サービスに成長しています。
            </p>
            <div className="home-hero__actions">
              <Link className="home-hero__more" to="/about/business">
                もっと知る
              </Link>
            </div>
          </div>
          <div className="home-hero__visual">
            <img
              className="home-hero__illustration"
              src={schoolIllustration}
              alt=""
              width={808}
              height={605}
            />
          </div>
        </div>
      </section>

      <section
        id="ceo-message"
        className="home-section home-section--ceo"
        aria-labelledby="ceo-message-heading"
        data-reveal
      >
        <div className="home-section__inner home-section__inner--ceo">
          <h2
            id="ceo-message-heading"
            className="home-section__title home-section__title--ceo"
          >
            CEOメッセージ
          </h2>
          <div className="home-ceo-card">
            <div className="home-ceo">
              <figure className="home-ceo__figure">
                <img
                  className="home-ceo__photo"
                  src={ceoPhoto}
                  width={480}
                  height={600}
                  alt="代表取締役"
                />
              </figure>
              <div className="home-ceo__body">
                <p className="home-ceo__p">
                  生まれ育った地域や環境によって、進路の選択肢に大きな差がある。本当は出逢えるはずの自分に、未来に、気付かないまま大人になる高校生がいる。
                </p>
                <p className="home-ceo__p">
                  それは“本人のせい”ではなく、私たちが作ってしまった社会の仕組みの問題です。
                </p>
                <p className="home-ceo__p">
                  私たちは使命として「高校生が、進路の自己決定に必要な情報と支援を最適な形で提供する」を掲げています。
                </p>
                <p className="home-ceo__p">
                  この取り組みは、単なる会社の成長を目指すものではなく『日本社会を元気にする挑戦』です。そんな大きなビジョンを、一緒に形にしてくれる仲間を探しています。
                </p>
                <p className="home-ceo__p home-ceo__p--emphasis">
                  スキルや経験よりも大切にしているのは、意志と行動力です。
                </p>
                <div className="home-ceo__actions">
                  <Link className="home-ceo__biz-btn" to="/about/know-handy">
                    ハンディを知る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="recruit-roles"
        className="home-section"
        aria-labelledby="recruit-roles-heading"
        data-reveal
      >
        <div className="home-section__inner">
          <h2 id="recruit-roles-heading" className="home-section__title">
            募集職種
          </h2>

          {jobCategory === null ? (
            <>
              <p className="home-section__intro">
                職種を選ぶと詳しい紹介ページへ進みます。ビジネス職は業務分類を押して進んでください。
              </p>
              <ul className="home-roles">
                <li>
                  <button
                    type="button"
                    className="home-roles__btn"
                    onClick={() => setJobCategory('business')}
                  >
                    ビジネス職
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="home-roles__btn"
                    onClick={goDetailOther}
                  >
                    エンジニア職
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="home-roles__btn"
                    onClick={goDetailOther}
                  >
                    コーポレート職
                  </button>
                </li>
              </ul>
            </>
          ) : jobCategory === 'business' ? (
            <>
              <p className="home-section__intro">
                ビジネス職の業務分類です。気になる項目を押すと職種紹介ページへ進みます。
              </p>
              <button
                type="button"
                className="home-roles__back"
                onClick={resetRecruit}
              >
                ← 大分類の職種に戻る
              </button>
              <ul className="home-roles home-roles--detail">
                {BUSINESS_ROLE_OPTIONS.map((opt) => (
                  <li key={opt.id}>
                    <button
                      type="button"
                      className="home-roles__btn"
                      onClick={() => goBusinessRole(opt.id)}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </section>

      <section
        id="related-pages"
        className="home-section home-section--alt"
        aria-labelledby="related-pages-heading"
        data-reveal
      >
        <div className="home-section__inner">
          <h2 id="related-pages-heading" className="home-section__title">
            関連ページ
          </h2>
          <ul className="home-cards">
            <li>
              <Link className="home-card" to="/about/know-handy">
                <span className="home-card__label">ハンディを知る</span>
                <span className="home-card__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link className="home-card" to="/about/business">
                <span className="home-card__label">事業を知る</span>
                <span className="home-card__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link className="home-card" to="/positions">
                <span className="home-card__label">ポジション一覧</span>
                <span className="home-card__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
