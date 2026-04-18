import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  BUSINESS_ROLE_OPTIONS,
  type BusinessRoleOptionId,
} from '../data/businessRoleOptions'
import ceoPhoto from '../assets/otasan.png'
import schoolIllustration from '../assets/school.png'
import './HomePage.css'

type JobCategory = 'business' | 'engineer' | 'corporate'

export function HomePage() {
  const navigate = useNavigate()
  const [jobCategory, setJobCategory] = useState<JobCategory | null>(null)
  const [businessPicked, setBusinessPicked] = useState<
    Set<BusinessRoleOptionId>
  >(() => new Set())

  const hasBusinessSelection = useMemo(
    () => businessPicked.size >= 1,
    [businessPicked],
  )

  const resetRecruit = () => {
    setJobCategory(null)
    setBusinessPicked(new Set())
  }

  const pickCategory = (cat: JobCategory) => {
    setJobCategory(cat)
    setBusinessPicked(new Set())
  }

  const toggleBusiness = (id: BusinessRoleOptionId) => {
    setBusinessPicked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const goDetailBusiness = () => {
    if (!hasBusinessSelection) return
    navigate('/jobs/business/detail', {
      state: {
        fromWizard: true,
        selectedRoleIds: [...businessPicked],
      },
    })
  }

  const goDetailOther = () => {
    navigate('/jobs/business/detail', {
      state: { fromWizard: false },
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
      >
        <div className="home-section__inner">
          <h2 id="recruit-roles-heading" className="home-section__title">
            募集職種
          </h2>

          {jobCategory === null ? (
            <>
              <p className="home-section__intro">
                まず大分類の職種を選んでください。ビジネス職では、続けてポジションを1つ以上選んでから詳細ページへ進めます。
              </p>
              <ul className="home-roles">
                <li>
                  <button
                    type="button"
                    className="home-roles__btn"
                    onClick={() => pickCategory('business')}
                  >
                    ビジネス職
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="home-roles__btn"
                    onClick={() => pickCategory('engineer')}
                  >
                    エンジニア職
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="home-roles__btn"
                    onClick={() => pickCategory('corporate')}
                  >
                    コーポレート職
                  </button>
                </li>
              </ul>
            </>
          ) : jobCategory === 'business' ? (
            <>
              <p className="home-section__intro">
                ビジネス職の詳細です。気になるポジションにチェックを入れ（1つ以上）、「次に進む」で職種紹介へ進んでください。
              </p>
              <button
                type="button"
                className="home-roles__back"
                onClick={resetRecruit}
              >
                ← 大分類の職種に戻る
              </button>
              <fieldset className="home-roles__fieldset">
                <legend className="home-roles__legend">
                  ビジネス職のポジション（1つ以上選択）
                </legend>
                <ul className="home-roles home-roles--detail">
                  {BUSINESS_ROLE_OPTIONS.map((opt) => {
                    const inputId = `home-biz-${opt.id}`
                    const checked = businessPicked.has(opt.id)
                    return (
                      <li key={opt.id}>
                        <label
                          className="home-roles__check"
                          htmlFor={inputId}
                        >
                          <input
                            id={inputId}
                            className="home-roles__checkbox"
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleBusiness(opt.id)}
                          />
                          <span className="home-roles__check-label">
                            {opt.label}
                          </span>
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </fieldset>
              {hasBusinessSelection ? (
                <div className="home-roles__actions">
                  <button
                    type="button"
                    className="home-roles__next"
                    onClick={goDetailBusiness}
                  >
                    次に進む
                  </button>
                </div>
              ) : (
                <p className="home-roles__hint" role="status">
                  1つ以上チェックを入れると「次に進む」が表示されます。
                </p>
              )}
            </>
          ) : (
            <>
              <p className="home-section__intro">
                {jobCategory === 'engineer'
                  ? 'エンジニア職から進んだ場合も、現状はビジネス職（インサイドセールス）の紹介ページで職務イメージを共有しています。'
                  : 'コーポレート職から進んだ場合も、現状はビジネス職（インサイドセールス）の紹介ページで職務イメージを共有しています。'}
              </p>
              <button
                type="button"
                className="home-roles__back"
                onClick={resetRecruit}
              >
                ← 大分類の職種に戻る
              </button>
              <div className="home-roles__actions">
                <button
                  type="button"
                  className="home-roles__next"
                  onClick={goDetailOther}
                >
                  次に進む
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <section
        id="related-pages"
        className="home-section home-section--alt"
        aria-labelledby="related-pages-heading"
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
