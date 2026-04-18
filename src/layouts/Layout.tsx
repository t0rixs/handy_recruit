import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

export function Layout() {
  return (
    <div className="site">
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
            <Link className="site-header__cta" to="/positions">
              募集ポジション一覧
            </Link>
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
