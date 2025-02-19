import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}


export default function FocusTopics() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const technologies = [
    {
      title: "Computer Vision",
      description: "Advanced image processing and recognition systems for next-generation applications.",
      icon: "/bank/icons/vision.svg"
    },
    {
      title: "Open Source AI",
      description: "Democratizing artificial intelligence through community-driven development.",
      icon: "/bank/icons/ai.svg"
    },
    {
      title: "Hardware",
      description: "Physical computing and IoT solutions for real-world problems.",
      icon: "/bank/icons/hardware.svg"
    },
    {
      title: "Community Tools",
      description: "Building software that empowers and connects our community.",
      icon: "/bank/icons/community.svg"
    },
    {
      title: "Craft-first Software",
      description: "Emphasis on quality, maintainability, and developer experience.",
      icon: "/bank/icons/craft.svg"
    },
    {
      title: "VR/AR & 3D",
      description: "Immersive experiences and spatial computing innovations.",
      icon: "/bank/icons/vr.svg"
    }
  ]



  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-16">
        {/* Topic Navigation */}
        <div className="flex items-center justify-center gap-8 pt-8">
          <Link 
            to="/2025/robotics"
            className="base-button inline-flex items-center justify-center group"
          >
            <span className="relative z-10 uppercase flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Robotics Nation
            </span>
          </Link>
          <Link 
            to="/2025/international"
            className="base-button inline-flex items-center justify-center group"
          >
            <span className="relative z-10 uppercase flex items-center gap-2">
              Global Presence
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        </div>

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
            <h1 className="text-5xl font-medium text-zinc-100 mb-6">Focus Topics</h1>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              After listening to our community, partners, and funders, we're making this the most technologically driven year in Aaltoes history.
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
          {/* Focus Topics Section */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-medium text-zinc-100">Our Focus Projects</h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                We're concentrating our efforts on cutting-edge technologies that will shape the future of innovation.
              </p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-lg p-4"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-zinc-100 font-medium mb-2">{tech.title}</h3>
                  <p className="text-sm text-zinc-400">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-950" />

          {/* Events Evolution Section */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-medium text-zinc-100">Events Evolution</h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Events have been the cornerstone of Aaltoes since 2009. We've hosted countless speaker sessions on startup operations - from raising pre-seed to project management and scaling. While this was exactly what our ecosystem needed then, the landscape has fundamentally shifted.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Today, the focus is on building and shipping. That's why we are making a gentle shift. While maintaining our traditional speaker events, we're increasing our hackathon funding tenfold. We aim to have 70% of events delegated to hacking and building.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8">
                <div className="space-y-8">
                  {/* Event Distribution Visualization */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      {/* Building & Hackathons Bar */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-300" />
                          <span className="text-sm text-zinc-400">Building & Hackathons</span>
                        </div>
                        <span className="text-sm font-mono text-zinc-400">70%</span>
                      </div>
                      <div className="h-4 w-full bg-zinc-900/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-zinc-100 to-zinc-300"
                          initial={{ width: "0%" }}
                          animate={{ width: "70%" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    {/* Speaker Events Bar */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-zinc-700" />
                          <span className="text-sm text-zinc-400">Speaker Events</span>
                        </div>
                        <span className="text-sm font-mono text-zinc-400">30%</span>
                      </div>
                      <div className="h-4 w-full bg-zinc-900/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-zinc-700"
                          initial={{ width: "0%" }}
                          animate={{ width: "30%" }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hackathon Funding */}
                  <div className="pt-6 border-t border-zinc-800">
                    <div className="text-5xl font-medium text-zinc-100 mb-2">10x</div>
                    <div className="text-zinc-400">Increase in hackathon funding</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-950" />

          {/* Ecosystem Coordinator Footer */}
          <section className="pt-0">
            <div className="flex flex-col md:flex-row items-center gap-8">
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
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:ml-auto w-full sm:w-auto">
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
          </section>
        </div>
      </div>
    </div>
  )
} 