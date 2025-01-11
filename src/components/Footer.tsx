import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function Footer() {
  const location = useLocation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const getClassName = (path: string) => {
    const isActive = location.pathname === path
    return `font-mono ${isActive ? 'text-white' : 'text-white/50'} hover:text-white/70 transition-colors uppercase tracking-wider whitespace-nowrap`
  }

  // Keep the horizontal scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      localStorage.setItem('footerScrollPosition', container.scrollLeft.toString())
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Reset vertical scroll position
    window.scrollTo(0, 0)

    // Handle horizontal scroll position
    const savedPosition = localStorage.getItem('footerScrollPosition')
    if (savedPosition) {
      container.scrollLeft = parseInt(savedPosition)
    }
  }, [location.pathname])

  return (
    <footer 
      className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10"
      ref={scrollContainerRef}
    >
      <div className="overflow-x-auto scrollbar-hide py-6">
        <div className="mx-auto w-[1400px] flex flex-nowrap justify-between text-sm px-6">
          <Link to="/" className={getClassName('/')}>
            AALTOES 2025
          </Link>
          <div className="h-6 w-px bg-white/10" />
          <Link to="/about" className={getClassName('/about')}>
            About
          </Link>
          <Link to="/team" className={getClassName('/team')}>
            Team
          </Link>
          <Link to="/projects" className={getClassName('/projects')}>
            Projects
          </Link>
          <Link to="/events" className={getClassName('/events')}>
            Events
          </Link>
          <div className="h-6 w-px bg-white/10" />
          <Link to="/billing-info" className={getClassName('/billing-info')}>
            Billing
          </Link>
          <Link to="/code-of-conduct" className={getClassName('/code-of-conduct')}>
            Code of Conduct
          </Link>
          <Link to="/privacy-notice" className={getClassName('/privacy-notice')}>
            Privacy Notice
          </Link>
          <Link to="/association-rules" className={getClassName('/association-rules')}>
            Association Rules
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer 