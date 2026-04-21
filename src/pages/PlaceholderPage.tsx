import { Link } from 'react-router-dom'
import './PlaceholderPage.css'

type PlaceholderPageProps = {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <main className="placeholder">
      <div className="placeholder__inner" data-reveal>
        <Link className="placeholder__back" to="/" aria-label="採用トップに戻る">
          {'<'}
        </Link>
        <h1 className="placeholder__title">{title}</h1>
        <p className="placeholder__text">
          このセクションの内容は、採用サイト内で現在整備中です。公開までしばらくお待ちください。
        </p>
      </div>
    </main>
  )
}
