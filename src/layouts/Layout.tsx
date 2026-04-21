import { Link, Outlet, useLocation } from 'react-router-dom'
import { CASUAL_INTERVIEW_URL } from '../constants'
import { RevealObserver } from '../RevealObserver'
import './Layout.css'

/** GitHub Pages 等で basename が付いても末尾で判定 */
const JOB_DETAIL_SUFFIX = '/jobs/business/detail'

export function Layout() {
  const { pathname } = useLocation()
  const isJobDetailPage = pathname.endsWith(JOB_DETAIL_SUFFIX)

  return (
    <div className="site">
      <RevealObserver />
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="site-header__logo" to="/">
            <span className="site-header__company">ハンディ株式会社</span>
            <span className="site-header__mark">採用サイト</span>
          </Link>
          <nav className="site-header__nav" aria-label="主要ナビゲーション">
            <Link className="site-header__link" to="/about/know-handy">
              ハンディを知る
            </Link>
            <Link className="site-header__link" to="/about/business">
              事業を知る
            </Link>
            {isJobDetailPage ? (
              <a
                className="site-header__cta"
                href={CASUAL_INTERVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                カジュアル面談はこちら
              </a>
            ) : (
              <Link className="site-header__cta" to="/positions">
                募集ポジション一覧
              </Link>
            )}
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <p className="site-footer__copy">© ハンディ株式会社</p>
      </footer>
    </div>
  )
}
