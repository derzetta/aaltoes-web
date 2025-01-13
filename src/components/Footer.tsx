import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useFooterScroll } from '../contexts/FooterScrollContext'
import { FaInstagram, FaXTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa6'

function Footer() {
  const location = useLocation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { scrollPosition } = useFooterScroll()

  const getClassName = (path: string) => {
    const isActive = location.pathname === path
    return `font-mono ${isActive ? 'text-white' : 'text-white/50'} hover:text-white/70 transition-colors uppercase tracking-wider whitespace-nowrap`
  }

  // Save scroll position when scrolling
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      scrollPosition.current = container.scrollLeft
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [scrollPosition])

  // Restore scroll position after navigation
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    
    container.scrollLeft = scrollPosition.current
  }, [location.pathname, scrollPosition])

  const socialLinks = [
    {
      icon: <FaInstagram size={20} />,
      url: 'https://instagram.com/aaltoes',
      label: 'Instagram'
    },
    {
      icon: <FaXTwitter size={20} />,
      url: 'https://x.com/aaltoes',
      label: 'X (Twitter)'
    },
    {
      icon: <FaLinkedin size={20} />,
      url: 'https://linkedin.com/company/aalto-entrepreneurship-society',
      label: 'LinkedIn'
    },
    {
      icon: <FaTelegram size={20} />,
      url: 'https://t.me/aaltoes',
      label: 'Telegram'
    }
  ]

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm border-t border-white/10 max-h-[50vh] overflow-y-auto z-50">
      <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide py-6">
        <div className="container w-[1400px] mx-auto flex flex-nowrap justify-between items-center text-sm px-6" style={{ minWidth: '1400px' }}>
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
            Conduct
          </Link>
          <Link to="/privacy-notice" className={getClassName('/privacy-notice')}>
            Privacy Notice
          </Link>
          <Link to="/association-rules" className={getClassName('/association-rules')}>
            Association Rules
          </Link>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white/70 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="h-6 w-px bg-white/10" />
          <Link to="/authors" className={getClassName('/authors')}>
            Authors
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer 