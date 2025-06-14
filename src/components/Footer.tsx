import { Link, useLocation, useNavigate } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { useFooterScroll } from '../contexts/FooterScrollContext'
import { FaInstagram, FaXTwitter, FaLinkedin, FaTelegram, FaChevronDown, FaGithub } from 'react-icons/fa6'
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
  const [isMobile, setIsMobile] = useState(false)
  const navLinkRefs = useRef<{[key: string]: HTMLAnchorElement | null}>({})
  // Add a flag to track programmatic navigation
  const isNavigatingRef = useRef(false)
  // Track the target path for navigation
  const targetPathRef = useRef<string | null>(null)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024)
  }, [])

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
      // Only update scroll position if we're not in the middle of a navigation
      if (!isNavigatingRef.current) {
        scrollPosition.current = container.scrollLeft
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [scrollPosition])

  // Center the active link when the component mounts or the path changes
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || !isMobile) return
    
    // If we're in the middle of a programmatic navigation to a specific path
    if (isNavigatingRef.current && targetPathRef.current === location.pathname) {
      // The scroll position has already been set in handleNavLinkClick
      // Just reset the navigation flag
      isNavigatingRef.current = false
      targetPathRef.current = null
      return
    }
    
    // Otherwise, find the active link and center it
    const activeLink = navLinkRefs.current[location.pathname]
    if (activeLink) {
      const containerWidth = container.offsetWidth
      const elementWidth = activeLink.offsetWidth
      const elementLeft = activeLink.offsetLeft
      
      // Calculate position to center the element
      const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2)
      
      // Set scroll position without animation for initial load
      container.scrollLeft = scrollTo
      scrollPosition.current = scrollTo
    } else {
      // If no active link is found, restore the saved scroll position
      container.scrollLeft = scrollPosition.current
    }
  }, [location.pathname, isMobile, scrollPosition])

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
    },
    {
      icon: <FaGithub size={20} />,
      url: 'https://github.com/aaltoes-tech',
      label: 'GitHub'
    },
    {
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>,
      url: 'https://discord.gg/tj5BJE472t',
      label: 'Discord'
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

  // Handle navigation and centering of clicked link
  const handleNavLinkClick = (path: string, e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault()
      
      // Get the clicked element
      const clickedElement = navLinkRefs.current[path]
      const container = scrollContainerRef.current
      
      if (clickedElement && container) {
        // Calculate the center position
        const containerWidth = container.offsetWidth
        const elementWidth = clickedElement.offsetWidth
        const elementLeft = clickedElement.offsetLeft
        
        // Calculate scroll position to center the element
        const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2)
        
        // Set the navigation flags
        isNavigatingRef.current = true
        targetPathRef.current = path
        
        // Update the stored scroll position
        scrollPosition.current = scrollTo
        
        // Animate scroll
        container.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        })
        
        // Navigate after a short delay to allow animation
        setTimeout(() => {
          navigate(path)
        }, 300)
      } else {
        navigate(path)
      }
    } else {
      // On desktop, just navigate normally
      navigate(path)
    }
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-zinc-950/70 backdrop-blur-sm border-t border-zinc-100/10 z-[60]">
      <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide py-6 relative">
        {/* Scroll hint gradients - only visible on mobile */}
        <div className="fixed bottom-0 right-0 h-[56px] w-24 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-[70] lg:hidden" />
        <div className="fixed bottom-0 left-0 h-[56px] w-24 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-[70] lg:hidden" />
        
        <div className="w-full max-w-[1200px] mx-auto flex flex-nowrap items-center text-sm pl-[calc(50%-54px)] lg:justify-between lg:px-6 lg:min-w-[1200px]">
          <Link 
            to="/" 
            className={getClassName('/')}
            onClick={(e) => handleNavLinkClick('/', e)}
            ref={(el) => navLinkRefs.current['/'] = el}
          >
            AALTOES 2025
          </Link>
          <div className="h-6 w-px bg-zinc-800 mx-6 lg:mx-0" />
          <Link 
            to="/about" 
            className={getClassName('/about')}
            onClick={(e) => handleNavLinkClick('/about', e)}
            ref={(el) => navLinkRefs.current['/about'] = el}
          >
            About
          </Link>
          <div className="mx-6 lg:hidden" />
          <Link 
            to="/team" 
            className={getClassName('/team')}
            onClick={(e) => handleNavLinkClick('/team', e)}
            ref={(el) => navLinkRefs.current['/team'] = el}
          >
            Team
          </Link>
          <div className="mx-6 lg:hidden" />
          <Link 
            to="/projects" 
            className={getClassName('/projects')}
            onClick={(e) => handleNavLinkClick('/projects', e)}
            ref={(el) => navLinkRefs.current['/projects'] = el}
          >
            Projects
          </Link>
          <div className="mx-6 lg:hidden" />
          <Link 
            to="/events" 
            className={getClassName('/events')}
            onClick={(e) => handleNavLinkClick('/events', e)}
            ref={(el) => navLinkRefs.current['/events'] = el}
          >
            Events
          </Link>
          <div className="h-6 w-px bg-zinc-100/10 mx-6 lg:mx-0" />
          
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
                        
                        // Center around the Legal dropdown if on mobile
                        if (isMobile && legalDropdownRef.current && scrollContainerRef.current) {
                          const container = scrollContainerRef.current
                          const dropdownButton = legalDropdownRef.current
                          
                          const containerWidth = container.offsetWidth
                          const elementWidth = dropdownButton.offsetWidth
                          const elementLeft = dropdownButton.offsetLeft
                          
                          // Calculate scroll position to center the dropdown
                          const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2)
                          
                          // Set the navigation flags
                          isNavigatingRef.current = true
                          targetPathRef.current = link.path
                          
                          // Update the stored scroll position
                          scrollPosition.current = scrollTo
                          
                          // Animate scroll
                          container.scrollTo({
                            left: scrollTo,
                            behavior: 'smooth'
                          })
                        }
                        
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

          <div className="h-6 w-px bg-zinc-100/10 mx-6 lg:mx-0" />
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
                      
                      // Center around the Resources dropdown if on mobile
                      if (isMobile && resourcesDropdownRef.current && scrollContainerRef.current) {
                        const container = scrollContainerRef.current
                        const dropdownButton = resourcesDropdownRef.current
                        
                        const containerWidth = container.offsetWidth
                        const elementWidth = dropdownButton.offsetWidth
                        const elementLeft = dropdownButton.offsetLeft
                        
                        // Calculate scroll position to center the dropdown
                        const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2)
                        
                        // Set the navigation flags
                        isNavigatingRef.current = true
                        targetPathRef.current = '/resources/authors'
                        
                        // Update the stored scroll position
                        scrollPosition.current = scrollTo
                        
                        // Animate scroll
                        container.scrollTo({
                          left: scrollTo,
                          behavior: 'smooth'
                        })
                      }
                      
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
                      
                      // Center around the Resources dropdown if on mobile
                      if (isMobile && resourcesDropdownRef.current && scrollContainerRef.current) {
                        const container = scrollContainerRef.current
                        const dropdownButton = resourcesDropdownRef.current
                        
                        const containerWidth = container.offsetWidth
                        const elementWidth = dropdownButton.offsetWidth
                        const elementLeft = dropdownButton.offsetLeft
                        
                        // Calculate scroll position to center the dropdown
                        const scrollTo = elementLeft - (containerWidth / 2) + (elementWidth / 2)
                        
                        // Set the navigation flags
                        isNavigatingRef.current = true
                        targetPathRef.current = '/brand'
                        
                        // Update the stored scroll position
                        scrollPosition.current = scrollTo
                        
                        // Animate scroll
                        container.scrollTo({
                          left: scrollTo,
                          behavior: 'smooth'
                        })
                      }
                      
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
          <div className="h-6 w-px bg-zinc-100/10 mx-6 lg:mx-0" />
          <div className="flex items-center gap-6 lg:gap-8 pr-[calc(50%)] lg:pr-0">
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