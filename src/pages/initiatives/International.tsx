import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function International() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-16 pt-32">
        {/* Hero Section */}
        <div className="space-y-16">
          {/* Heading and Description */}
          <motion.div 
            className="text-center"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <div className="space-y-6">
              <Link 
                to="/2025"
                className="inline-flex items-center gap-4 text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-wide hover:text-zinc-200 transition-colors"
              >
                Paramount Year of Craft
    
              </Link>
              <h1 className="text-3xl md:text-4xl font-medium text-zinc-100">Global Presence</h1>
              <p className="text-base md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
                Not only Startup Sauna, but making Finland the main friction point to build startups is our vision this year.
              </p>
            </div>
          </motion.div>

          {/* Video Section */}
          
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* EU Initiatives */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">European Initiatives</h2>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                We know that Europe has great infrastructure to be worked on to attract more builders, and we announce our full support to EU Inc and EU/Acceleration initiatives.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col gap-6">
                <motion.a 
                  href="https://eu-inc.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-xl p-6 hover:bg-zinc-900/30 transition-colors group"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.3 }}
                >
                  <div className="h-12 flex items-center justify-center">
                    <img src="/2025/eu-inc-vector.svg" alt="EU Inc Logo" className="h-full w-auto object-contain group-hover:opacity-80 transition-opacity" />
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://eu-acc.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-xl p-6 hover:bg-zinc-900/30 transition-colors group"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.4 }}
                >
                  <div className="h-12 flex items-center justify-center">
                    <img src="/2025/euacc.jpg" alt="EU Acceleration Logo" className="h-full w-auto object-contain group-hover:opacity-80 transition-opacity" />
                  </div>
                </motion.a>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Asia Expansion */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Beyond Silicon Valley</h2>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                While Silicon Valley was a good handbook to play for the last years, we decided not to limit ourselves with it. Aaltoes this year expands its cooperation to the countries of Eastern and Southern Asia.
              </p>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                We are on route to have a Japan Expedition, and we signed global work cooperation with Shibuya-Tokyo.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <motion.div 
                className="relative overflow-hidden aspect-[16/9]"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.3 }}
              >
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none z-8" />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950/50 pointer-events-none z-10" />                
                <div className="relative h-full flex items-center">
                  <img 
                    src="/2025/mapfull.svg" 
                    alt="World Map"
                    className="w-full h-auto pt-12"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Fade overlay */}

          {/* Aaltoes Store */}
          <section>
            <motion.div
              className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-2xl p-12 relative overflow-hidden"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.3 }}
            >
              {/* T-shirt */}
              <div className="absolute md:right-1/2 bottom-0 md:top-1/2 md:-translate-y-1/3 w-[800px] h-[800px] opacity-100 -translate-x-1/2 md:translate-x-0">
                <img 
                  src="/2025/tee11.png" 
                  alt="Aaltoes T-shirt Design 1"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 md:ml-auto md:w-1/2 text-left">
                <h2 className="text-2xl font-medium text-zinc-100 mb-4">Aaltoes Store</h2>
                <p className="text-base text-zinc-400 mb-8">
                  For you, to support our vision, we are launching Aaltoes Store, with first designs ready to pre-order for Aaltoes members.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a 
                    href="https://store.aaltoes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto"
                  >
                    <span className="relative z-10 uppercase">Visit Store</span>
                    <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
          {/* Ecosystem Coordinator Footer */}
        <section>
          <motion.div
            className="bg-zinc-950 backdrop-blur-sm border border-zinc-800 rounded-xl p-8"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            {/* Container for profile and buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              {/* Profile Info */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img 
                    src="/board/vaneeza.png" 
                    alt="Vaneeza Maqsood"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-zinc-100">Vaneeza Maqsood</h3>
                  <p className="text-zinc-400 font-normal">Ecosystem Responsible</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://aaltoes.com/events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto"
                >
                  <span className="relative z-10 uppercase text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Events
                  </span>
                </a>
                
                <a 
                  href="https://form.typeform.com/to/mGQRO8Te"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto"
                >
                  <span className="relative z-10 uppercase text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    Volunteer
                  </span>
                </a>

                <a 
                  href="https://t.me/+1P42HmirI81lYTMy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto"
                >
                  <span className="relative z-10 uppercase text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    Chat
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
        </div>
      </div>
    </div>
  )
} 