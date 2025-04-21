import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <div className={`page-container ${className}`}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
} 