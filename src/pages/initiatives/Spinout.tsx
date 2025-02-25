import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import VideoPlayer from '../../components/VideoPlayer'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Spinout Hero Demo

export default function Spinout() {
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
          {/* Demo Section */}


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
              <h1 className="text-3xl md:text-4xl font-medium text-zinc-100">Continuing and spinning out projects</h1>
              <p className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                Supporting and scaling projects from the last year.
              </p>
            </div>
          </motion.div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <VideoPlayer src="/2025/video_extracts/3.mov" poster="/2025/logos/e3.png" />
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950" />

        {/* Main Content */}
        <div className="space-y-16">
          {/* Ignite Section */}
          <section className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="rounded-2xl bg-zinc-900/50 flex items-center justify-center px-16 py-0" style={{ height: '240px', width: '480px' }}>
                <img 
                  src="/2025/ignite.svg" 
                  alt="Ignite Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-8 text-left">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-medium text-zinc-100">Ignite</h3>
                    <span className="md:hidden text-xs md:text-sm font-mono text-emerald-400 px-2 py-1 bg-emerald-950/50 rounded border border-emerald-400/20 uppercase">Continuing</span>
                  </div>
                  <span className="hidden md:inline-block text-xs md:text-sm font-mono text-emerald-400 px-2 py-1 bg-emerald-950/50 rounded border border-emerald-400/20 uppercase">Continuing</span>
                </div>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                  A pre-accelerator program helping first-time founders validate their ideas and build their first MVP.
                </p>
              </div>
              <div className="flex justify-start w-full">
                <a 
                  href="https://ignite.aaltoes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-12 px-6 w-full sm:w-auto"
                >
                  <span className="relative z-10 uppercase">Visit Website</span>
                </a>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950" />


          {/* Wednesday Section */}
          <section className="flex flex-col-reverse md:flex-row items-center gap-16">
            <div className="w-full md:w-2/3 space-y-8 text-left">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-medium text-zinc-100">wednesday.</h3>
                    <span className="md:hidden text-xs md:text-sm font-mono text-amber-400 px-2 py-1 bg-amber-950/50 rounded border border-amber-400/20 uppercase">Spinning Out</span>
                  </div>
                  <span className="hidden md:inline-block text-xs md:text-sm font-mono text-amber-400 px-2 py-1 bg-amber-950/50 rounded border border-amber-400/20 uppercase">Spinning Out</span>
                </div>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                  Inspiring women every day of the week. A community and platform dedicated to empowering women in entrepreneurship.
                </p>
              </div>
              <div className="flex justify-start w-full">
                <a 
                  href="https://wednesday.aaltoes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-12 px-6 w-full sm:w-auto"
                >
                  <span className="relative z-10 uppercase">Visit Website</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="rounded-2xl bg-zinc-900/50 flex items-center justify-center px-16 py-0" style={{ height: '240px', width: '480px' }}>
                <img 
                  src="/2025/wednesday.svg" 
                  alt="Wednesday Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950" />


          {/* Strive Section */}
          <section className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="rounded-2xl bg-zinc-900/50 flex items-center justify-center px-16 py-0" style={{ height: '240px', width: '480px' }}>
                <img 
                  src="/2025/strive.svg" 
                  alt="Strive Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-8 text-left">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-medium text-zinc-100">Strive</h3>
                    <span className="md:hidden text-xs md:text-sm font-mono text-amber-400 px-2 py-1 bg-amber-950/50 rounded border border-amber-400/20 uppercase">Spinning Out</span>
                  </div>
                  <span className="hidden md:inline-block text-xs md:text-sm font-mono text-amber-400 px-2 py-1 bg-amber-950/50 rounded border border-amber-400/20 uppercase">Spinning Out</span>
                </div>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                  Platform designed to help students and startups find the perfect match. Connecting talent with opportunities.
                </p>
              </div>
              <div className="flex justify-start w-full">
                <a 
                  href="https://striveforstartups.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-12 px-6 w-full sm:w-auto"
                >
                  <span className="relative z-10 uppercase">Visit Website</span>
                </a>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950" />


          {/* Responsible Person Cards */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vaneeza's Card */}
              <motion.div
                className="bg-zinc-950 backdrop-blur-sm border border-zinc-800 rounded-xl p-8"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.3 }}
              >
                {/* Container for profile and button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                  {/* Profile Info */}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-900 flex-shrink-0">
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

                  {/* Contact Button */}
                  <div>
                    <a 
                      href="mailto:vaneeza.maqsood@aaltoes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="base-button inline-flex items-center justify-center group h-10 px-4"
                    >
                      <span className="relative z-10 uppercase text-sm flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        Contact
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Siiri's Card */}
              <motion.div
                className="bg-zinc-950 backdrop-blur-sm border border-zinc-800 rounded-xl p-8"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.4 }}
              >
                {/* Container for profile and button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                  {/* Profile Info */}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-900 flex-shrink-0">
                      <img 
                        src="/board/siiri.png" 
                        alt="Siiri Lautamies"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-zinc-100">Siiri Lautamies</h3>
                      <p className="text-zinc-400 font-normal">Operations Responsible</p>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div>
                    <a 
                      href="mailto:siiri.lautamies@aaltoes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="base-button inline-flex items-center justify-center group h-10 px-4"
                    >
                      <span className="relative z-10 uppercase text-sm flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        Contact
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 