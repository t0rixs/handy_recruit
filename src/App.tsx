import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { HomePage } from './pages/HomePage'
import { JobBusinessPage } from './pages/JobBusinessPage'
import { AboutBusinessPage } from './pages/AboutBusinessPage'
import { KnowHandyPage } from './pages/KnowHandyPage'
import { PositionsPage } from './pages/PositionsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs/business" element={<Navigate to="/" replace />} />
        <Route path="jobs/business/detail" element={<JobBusinessPage />} />
        <Route
          path="jobs/engineer"
          element={<Navigate to="/jobs/business/detail" replace />}
        />
        <Route
          path="jobs/corporate"
          element={<Navigate to="/jobs/business/detail" replace />}
        />
        <Route path="about/know-handy" element={<KnowHandyPage />} />
        <Route path="about/business" element={<AboutBusinessPage />} />
        <Route path="positions" element={<PositionsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    </>
  )
}
