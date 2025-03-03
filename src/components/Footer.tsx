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
  const [isLegalOpen, setIsLegalOpen] = useState(false)
  const resourcesDropdownRef = useRef<HTMLDivElement>(null)
  const legalDropdownRef = useRef<HTMLDivElement>(null)
  const [resourcesDropdownRect, setResourcesDropdownRect] = useState<DOMRect | null>(null)
  const [legalDropdownRect, setLegalDropdownRect] = useState<DOMRect | null>(null)
  const resourcesTimeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const legalTimeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const isResourcesClickingRef = useRef(false)
  const isLegalClickingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)

  // For dropdown links
  const getDropdownClassName = (path: string) => {
    const isActive = location.pathname === path;
    return isActive 
      ? "block px-4 py-2 text-sm text-zinc-100 hover:text-zinc-100 hover:bg-zinc-100/5 transition-colors"
      : "block px-4 py-2 text-sm text-zinc-100/50 hover:text-zinc-100 hover:bg-zinc-100/5 transition-colors";
  }

  // Check if any legal links are active
  const isAnyLegalLinkActive = () => {
    return legalLinks.some(link => location.pathname === link.path);
  }

  // Check if any resources links are active
  const isAnyResourcesLinkActive = () => {
    return location.pathname === '/resources/authors' || location.pathname === '/brand';
  }

  // For main nav links
  const getClassName = (path: string) => {
    const isActive = location.pathname === path;
    return `font-mono ${isActive ? 'text-zinc-100 hover:text-zinc-100' : 'text-zinc-500 hover:text-zinc-400'} transition-colors uppercase tracking-wider whitespace-nowrap`;
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false)
      }
      if (legalDropdownRef.current && !legalDropdownRef.current.contains(event.target as Node)) {
        setIsLegalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isResourcesOpen && resourcesDropdownRef.current) {
      setResourcesDropdownRect(resourcesDropdownRef.current.getBoundingClientRect())
    }
    if (isLegalOpen && legalDropdownRef.current) {
      setLegalDropdownRect(legalDropdownRef.current.getBoundingClientRect())
    }
  }, [isResourcesOpen, isLegalOpen])

  const handleMouseUp = () => {
    isResourcesClickingRef.current = false
    isLegalClickingRef.current = false
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    return () => document.removeEventListener('mouseup', handleMouseUp)
  }, [])

  const handleResourcesMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(resourcesTimeoutRef.current)
      setIsResourcesOpen(true)
    }
  }

  const handleResourcesMouseLeave = () => {
    if (!isMobile && !isResourcesClickingRef.current) {
      resourcesTimeoutRef.current = setTimeout(() => {
        setIsResourcesOpen(false)
      }, 300)
    }
  }

  const handleLegalMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(legalTimeoutRef.current)
      setIsLegalOpen(true)
    }
  }

  const handleLegalMouseLeave = () => {
    if (!isMobile && !isLegalClickingRef.current) {
      legalTimeoutRef.current = setTimeout(() => {
        setIsLegalOpen(false)
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

  const legalLinks = [
    { path: '/billing-info', label: 'Billing' },
    { path: '/code-of-conduct', label: 'Conduct' },
    { path: '/privacy-notice', label: 'Privacy Notice' },
    { path: '/association-rules', label: 'Association Rules' }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-zinc-950/70 backdrop-blur-sm border-t border-zinc-100/10 z-[60]">
      <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide py-6">
        <div className="container w-[1200px] mx-auto flex flex-nowrap justify-between items-center text-sm px-6" style={{ minWidth: '1200px' }}>
          <Link to="/" className={getClassName('/')}>
            AALTOES 2025
          </Link>
          <div className="h-6 w-px bg-zinc-800" />
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
          <div className="h-6 w-px bg-zinc-100/10" />
          
          {/* Legal Dropdown */}
          <div 
            ref={legalDropdownRef} 
            className="relative"
            onMouseEnter={handleLegalMouseEnter}
            onMouseLeave={handleLegalMouseLeave}
          >
            <button
              onClick={() => isMobile && setIsLegalOpen(!isLegalOpen)}
              className={`font-mono ${isAnyLegalLinkActive() ? 'text-zinc-100 hover:text-zinc-100' : 'text-zinc-500 hover:text-zinc-400'} transition-colors uppercase tracking-wider whitespace-nowrap flex items-center gap-2`}
            >
              Legal
              <FaChevronDown 
                size={12} 
                className={`transition-transform duration-200 ${isLegalOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isLegalOpen && legalDropdownRect && (
              <Portal>
                <div 
                  className="fixed bg-zinc-950 border border-zinc-100/10 rounded-lg overflow-hidden min-w-[180px] shadow-xl z-[1000]"
                  style={{
                    bottom: `calc(100vh - ${legalDropdownRect.top}px + 0.75rem)`,
                    left: legalDropdownRect.left,
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    isLegalClickingRef.current = true
                  }}
                >
                  {legalLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={getDropdownClassName(link.path)}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        navigate(link.path)
                        setTimeout(() => setIsLegalOpen(false), 200)
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Portal>
            )}
          </div>

          <div className="h-6 w-px bg-zinc-100/10" />
          <div 
            ref={resourcesDropdownRef} 
            className="relative"
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
          >
            <button
              onClick={() => isMobile && setIsResourcesOpen(!isResourcesOpen)}
              className={`font-mono ${isAnyResourcesLinkActive() ? 'text-zinc-100 hover:text-zinc-100' : 'text-zinc-500 hover:text-zinc-400'} transition-colors uppercase tracking-wider whitespace-nowrap flex items-center gap-2`}
            >
              Resources
              <FaChevronDown 
                size={12} 
                className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isResourcesOpen && resourcesDropdownRect && (
              <Portal>
                <div 
                  className="fixed bg-zinc-950 border border-zinc-100/10 rounded-lg overflow-hidden min-w-[160px] shadow-xl z-[1000]"
                  style={{
                    bottom: `calc(100vh - ${resourcesDropdownRect.top}px + 0.75rem)`,
                    left: resourcesDropdownRect.left,
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    isResourcesClickingRef.current = true
                  }}
                >
                  <Link
                    to="/resources/authors"
                    className={getDropdownClassName('/resources/authors')}
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
                    to="/brand"
                    className={getDropdownClassName('/brand')}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      const href = '/brand'
                      navigate(href)
                      setTimeout(() => setIsResourcesOpen(false), 200)
                    }}
                  >
                    Brand Guidelines
                  </Link>
                </div>
              </Portal>
            )}
          </div>
          <div className="h-6 w-px bg-zinc-100/10" />
          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-100/50 hover:text-zinc-100/70 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 