import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const REVEAL_SELECTOR = '[data-reveal]'

/**
 * ルート表示後に [data-reveal] を監視し、ビューポートに入った要素に .is-revealed を付与する。
 */
export function RevealObserver() {
  const location = useLocation()

  useEffect(() => {
    let cancelled = false
    let io: IntersectionObserver | null = null

    const run = () => {
      if (cancelled) return
      const nodes = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
      if (!nodes.length) return

      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
              entry.target.classList.add('is-revealed')
              io?.unobserve(entry.target)
            }
          }
        },
        { root: null, rootMargin: '0px 0px -4% 0px', threshold: 0.05 },
      )

      for (const el of nodes) {
        el.classList.remove('is-revealed')
        io.observe(el)
      }

      requestAnimationFrame(() => {
        if (cancelled || !io) return
        const vh = window.innerHeight
        const observer = io
        for (const el of nodes) {
          const rect = el.getBoundingClientRect()
          if (rect.top < vh * 0.94 && rect.bottom > vh * 0.04) {
            el.classList.add('is-revealed')
            observer.unobserve(el)
          }
        }
      })
    }

    const id = window.setTimeout(run, 0)

    return () => {
      cancelled = true
      window.clearTimeout(id)
      io?.disconnect()
    }
  }, [location.pathname])

  return null
}
