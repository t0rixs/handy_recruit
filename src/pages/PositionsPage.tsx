import { useNavigate } from 'react-router-dom'
import {
  POSITION_CATEGORIES,
  POSITION_LIST_INTRO,
  TALENTIO_RECRUIT_URL,
} from '../data/positionsByCategory'
import './PositionsPage.css'

export function PositionsPage() {
  const navigate = useNavigate()

  return (
    <main className="positions-page">
      <div className="positions-page__inner">
        <button
          type="button"
          className="positions-page__back"
          onClick={() => navigate(-1)}
          aria-label="一つ前のページに戻る"
        >
          <span className="positions-page__back-arrow" aria-hidden="true">
            ←
          </span>
        </button>

        <header className="positions-page__header" data-reveal>
          <h1 className="positions-page__title">ポジション一覧</h1>
          <p className="positions-page__lead">{POSITION_LIST_INTRO}</p>
          <p className="positions-page__talentio">
            <a className="positions-page__talentio-link" href={TALENTIO_RECRUIT_URL}>
              Talentioの求人一覧
            </a>
          </p>
        </header>

        <div className="positions-page__categories">
          {POSITION_CATEGORIES.map((cat) => (
            <section
              key={cat.id}
              className="positions-page__category"
              aria-labelledby={`positions-cat-${cat.id}`}
              data-reveal
            >
              <h2 id={`positions-cat-${cat.id}`} className="positions-page__h2">
                {cat.label}
              </h2>
              <p className="positions-page__cat-desc">{cat.description}</p>
              <ul className="positions-page__list">
                {cat.items.map((item) => (
                  <li key={item.id}>
                    <a className="positions-page__item" href={item.href}>
                      <span className="positions-page__item-title">
                        {item.title}
                      </span>
                      <span className="positions-page__item-arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
