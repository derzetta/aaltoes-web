import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  // Define the navigation order
  const routes = [
    { path: '/2025/opensource', label: 'Open Source' },
    { path: '/2025/blueprint', label: 'Blueprint Project' },
    { path: '/2025/robotics', label: 'Robotics Nation' },
    { path: '/2025/focus-topics', label: 'Focus Topics' },
    { path: '/2025/international', label: 'Global Presence' },
    { path: '/2025/spinout', label: 'Spinout Projects' }
  ]

  // Find current page index
  const currentIndex = routes.findIndex(route => route.path === pathname)
  
  // For circular navigation
  const prevPage = currentIndex >= 0 ? routes[(currentIndex - 1 + routes.length) % routes.length] : null
  const nextPage = currentIndex >= 0 ? routes[(currentIndex + 1) % routes.length] : null

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Layered Blur Background */}
      <div className="absolute inset-x-0 top-0 h-36 pointer-events-none">
        {[1, 2, 3].map((blur, index) => (
          <div
            key={blur}
            className="absolute inset-0"
            style={{
              zIndex: index + 1,
              background: 'linear-gradient(to bottom, rgba(9, 9, 11, 0.7) 0%, rgba(9, 9, 11, 0.0) 100%)',
              maskImage: `linear-gradient(to top, rgba(0,0,0,0) ${10 * (index + 1)}%, rgba(0,0,0,1) ${10 * (index + 2)}%)`,
              WebkitMaskImage: `linear-gradient(to top, rgba(0,0,0,0) ${10 * (index + 1)}%, rgba(0,0,0,1) ${10 * (index + 2)}%)`,
              backdropFilter: `blur(${blur}px)`,
            }}
          />
        ))}
      </div>

      {/* Content Layer - Above Blur */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        {/* Left: Text (Visible on both Mobile and Desktop) */}
        <Link to="/2025" className="group">
          <div className="leading-[1.05]">
            <div className="text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-zinc-200 transition-colors">Paramount Year</div>
            <div className="text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-zinc-200 transition-colors -mt-1">of Craft</div>
          </div>
        </Link>

        {/* Right: Navigation Arrows */}
        <div className="flex items-center gap-2 md:gap-6">
          {prevPage && (
            <Link 
              to={prevPage.path}
              className="base-button inline-flex items-center justify-center group px-2 md:px-4 h-10 bg-zinc-900/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                <span className="hidden md:inline uppercase">{prevPage.label}</span>
              </span>
            </Link>
          )}
          {nextPage && (
            <Link 
              to={nextPage.path}
              className="base-button inline-flex items-center justify-center group px-2 md:px-4 h-10 bg-zinc-900/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="hidden md:inline uppercase">{nextPage.label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 