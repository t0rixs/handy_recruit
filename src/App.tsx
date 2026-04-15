import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { HomePage } from './pages/HomePage'
import { JobBusinessPage } from './pages/JobBusinessPage'
import { KnowHandyPage } from './pages/KnowHandyPage'
import { PlaceholderPage } from './pages/PlaceholderPage'

export default function App() {
  return (
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
        <Route
          path="about/business"
          element={<PlaceholderPage title="事業を知る" />}
        />
        <Route
          path="positions"
          element={<PlaceholderPage title="ポジション一覧" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
