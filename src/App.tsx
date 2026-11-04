import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { useRouteScroll } from './lib/scroll'
import HomePage from './pages/HomePage'

const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function RouteScrollManager() {
  useRouteScroll()
  return null
}

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span className="page-loader__mark" aria-hidden="true">
        E
      </span>
      <span className="visually-hidden">Loading page</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <RouteScrollManager />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-grid" aria-hidden="true" />
      <div className="site-grain" aria-hidden="true" />

      <Navbar />

      <main id="main" tabIndex={-1}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/wisionary-crm" element={<Navigate to="/work/withunion-crm" replace />} />
            <Route path="/work/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
