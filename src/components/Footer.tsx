import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useFooterScroll } from '../contexts/FooterScrollContext'
import { FaInstagram, FaXTwitter, FaLinkedin, FaTelegram, FaChevronDown } from 'react-icons/fa6'
import Portal from './Portal'

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { scrollPosition } = useFooterScroll()
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [dropdownRect, setDropdownRect] = useState<DOMRect | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const isClickingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)

  const getClassName = (path: string) => {
    const isActive = location.pathname === path
    return `font-mono ${isActive ? 'text-neutral-100' : 'text-neutral-100/50'} hover:text-neutral-100/70 transition-colors uppercase tracking-wider whitespace-nowrap`
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isResourcesOpen && dropdownRef.current) {
      setDropdownRect(dropdownRef.current.getBoundingClientRect())
    }
  }, [isResourcesOpen])


  const handleMouseUp = () => {
    isClickingRef.current = false
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    return () => document.removeEventListener('mouseup', handleMouseUp)
  }, [])

  const handleMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(timeoutRef.current)
      setIsResourcesOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile && !isClickingRef.current) {
      timeoutRef.current = setTimeout(() => {
        setIsResourcesOpen(false)
      }, 300)
    }
  }


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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-neutral-950/70 backdrop-blur-sm border-t border-neutral-100/10 z-[60]">
      <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide py-6">
        <div className="container w-[1400px] mx-auto flex flex-nowrap justify-between items-center text-sm px-6" style={{ minWidth: '1400px' }}>
          <Link to="/" className={getClassName('/')}>
            AALTOES 2025
          </Link>
          <div className="h-6 w-px bg-neutral-100/10" />
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
          <div className="h-6 w-px bg-neutral-100/10" />
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
          <div className="h-6 w-px bg-neutral-100/10" />
          <div 
            ref={dropdownRef} 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => isMobile && setIsResourcesOpen(!isResourcesOpen)}
              className="font-mono text-neutral-100/50 hover:text-neutral-100/70 transition-colors uppercase tracking-wider whitespace-nowrap flex items-center gap-2"
            >
              Resources
              <FaChevronDown 
                size={12} 
                className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isResourcesOpen && dropdownRect && (
              <Portal>
                <div 
                  className="fixed bg-neutral-950 border border-neutral-100/10 rounded-lg overflow-hidden min-w-[160px] shadow-xl z-[1000]"
                  style={{
                    bottom: `calc(100vh - ${dropdownRect.top}px + 0.75rem)`,
                    left: dropdownRect.left,
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    isClickingRef.current = true
                  }}
                >
                  <Link
                    to="/resources/authors"
                    className="block px-4 py-2 text-sm text-neutral-100/50 hover:text-neutral-100 hover:bg-neutral-100/5 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      const href = '/resources/authors'
                      navigate(href)
                      setTimeout(() => setIsResourcesOpen(false), 200)
                    }}
                  >
                    Authors
                  </Link>
                  <Link
                    to="/resources/logo-bank"
                    className="block px-4 py-2 text-sm text-neutral-100/50 hover:text-neutral-100 hover:bg-neutral-100/5 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      const href = '/resources/logo-bank'
                      navigate(href)
                      setTimeout(() => setIsResourcesOpen(false), 200)
                    }}
                  >
                    Logo Bank
                  </Link>
                </div>
              </Portal>
            )}
          </div>
          <div className="h-6 w-px bg-neutral-100/10" />
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-100/50 hover:text-neutral-100/70 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="h-6 w-px bg-neutral-100/10" />
        </div>
      </div>
    </footer>
  )
}

export default Footer 