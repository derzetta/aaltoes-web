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
          {/* Heading and Description */}
          <motion.div 
            className="text-center"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <Link 
              to="/2025"
              className="inline-block text-sm font-mono text-zinc-400 uppercase tracking-wide mb-4 hover:text-zinc-200 transition-colors"
            >
              Paramount Year of Craft
            </Link>
            <h1 className="text-5xl font-medium text-zinc-100 mb-6">Spinout Projects</h1>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Supporting and scaling innovative projects from our community.
            </p>
          </motion.div>

          {/* Video Section */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/65 group">
            <video
              id="heroVideo"
              className="w-full h-full object-cover"
              playsInline
            >
              <source src="/fr.mov" type="video/quicktime" />
            </video>

            {/* Video Overlay - Play State */}
            <div className="absolute inset-0 bg-zinc-950/50 transition-opacity duration-200 group-hover:opacity-0 group-[.playing]:opacity-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => {
                    const video = document.getElementById('heroVideo') as HTMLVideoElement;
                    const container = video?.closest('.group');
                    if (video) {
                      if (video.paused) {
                        video.play();
                        container?.classList.add('playing');
                      } else {
                        video.pause();
                        container?.classList.remove('playing');
                      }
                    }
                  }}
                  className="w-16 h-16 rounded-full bg-zinc-100/10 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-100/20 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex items-center gap-6">
                {/* Play/Pause */}
                <button 
                  onClick={() => {
                    const video = document.getElementById('heroVideo') as HTMLVideoElement;
                    const container = video?.closest('.group');
                    if (video) {
                      if (video.paused) {
                        video.play();
                        container?.classList.add('playing');
                      } else {
                        video.pause();
                        container?.classList.remove('playing');
                      }
                    }
                  }}
                  className="text-zinc-300 hover:text-zinc-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      const video = document.getElementById('heroVideo') as HTMLVideoElement;
                      if (video) {
                        video.muted = !video.muted;
                      }
                    }}
                    className="text-zinc-300 hover:text-zinc-100 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  </button>
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.1"
                    defaultValue="1"
                    onChange={(e) => {
                      const video = document.getElementById('heroVideo') as HTMLVideoElement;
                      if (video) {
                        video.volume = parseFloat(e.target.value);
                      }
                    }}
                    className="w-24 accent-zinc-100"
                  />
                </div>

                {/* Fullscreen */}
                <button 
                  onClick={() => {
                    const video = document.getElementById('heroVideo') as HTMLVideoElement;
                    if (video) {
                      if (document.fullscreenElement) {
                        document.exitFullscreen();
                      } else {
                        video.classList.remove('object-cover');
                        video.classList.add('object-contain');
                        video.requestFullscreen();
                        
                        const handleFullscreenChange = () => {
                          if (!document.fullscreenElement) {
                            video.classList.remove('object-contain');
                            video.classList.add('object-cover');
                            document.removeEventListener('fullscreenchange', handleFullscreenChange);
                          }
                        };
                        document.addEventListener('fullscreenchange', handleFullscreenChange);
                      }
                    }
                  }}
                  className="text-zinc-300 hover:text-zinc-100 transition-colors ml-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

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
                    <h3 className="text-4xl font-medium text-zinc-100">Ignite</h3>
                    <span className="md:hidden text-sm font-mono text-emerald-400 px-2 py-1 bg-emerald-950/50 rounded border border-emerald-400/20 uppercase">Continuing</span>
                  </div>
                  <span className="hidden md:inline-block text-sm font-mono text-emerald-400 px-2 py-1 bg-emerald-950/50 rounded border border-emerald-400/20 uppercase">Continuing</span>
                </div>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  A pre-accelerator program helping first-time founders validate their ideas and build their first MVP.
                </p>
              </div>
              <div className="flex justify-start">
                <a 
                  href="https://ignite.aaltoes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-12 px-6"
                >
                  <span className="relative z-10 uppercase">Visit Website</span>
                </a>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Wednesday Section */}
          <section className="flex flex-col-reverse md:flex-row items-center gap-16">
            <div className="w-full md:w-2/3 space-y-8 text-left">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-4xl font-medium text-zinc-100">wednesday.</h3>
                    <span className="md:hidden text-sm font-mono text-amber-400 px-2 py-1 bg-amber-950/50 rounded border border-amber-400/20 uppercase">Spinning Out</span>
                  </div>
                  <span className="hidden md:inline-block text-sm font-mono text-amber-400 px-2 py-1 bg-amber-950/50 rounded border border-amber-400/20 uppercase">Spinning Out</span>
                </div>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  Inspiring women every day of the week. A community and platform dedicated to empowering women in entrepreneurship.
                </p>
              </div>
              <div className="flex justify-start">
                <a 
                  href="https://wednesday.aaltoes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-12 px-6"
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
          <div className="w-full h-px bg-zinc-800" />

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
                    <h3 className="text-4xl font-medium text-zinc-100">Strive</h3>
                    <span className="md:hidden text-sm font-mono text-amber-400 px-2 py-1 bg-amber-950/50 rounded border border-amber-400/20 uppercase">Spinning Out</span>
                  </div>
                  <span className="hidden md:inline-block text-sm font-mono text-amber-400 px-2 py-1 bg-amber-950/50 rounded border border-amber-400/20 uppercase">Spinning Out</span>
                </div>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  Platform designed to help students and startups find the perfect match. Connecting talent with opportunities.
                </p>
              </div>
              <div className="flex justify-start">
                <a 
                  href="https://striveforstartups.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-12 px-6"
                >
                  <span className="relative z-10 uppercase">Visit Website</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 