import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import VideoPlayer from '../../components/VideoPlayer'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Focus Topics Demo Component

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
              <h1 className="text-3xl md:text-4xl font-medium text-zinc-100">Focus Topics</h1>
              <p className="text-base md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
                After listening to our community, partners, and funders, we're making this the most technologically driven year in Aaltoes history.
              </p>
            </div>
          </motion.div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <VideoPlayer src="/2025/video_extracts/1.mov" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Focus Topics Section */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="text-left space-y-4">
                <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Our Focus Projects</h2>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                  We're concentrating our efforts on cutting-edge technologies that will shape the future of innovation.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800/30 transition-colors"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-base md:text-lg font-medium text-zinc-100 mb-2">{tech.title}</h3>
                  <p className="text-sm md:text-base text-zinc-400">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Events Evolution Section */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="text-left space-y-4">
                <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Events Evolution</h2>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                  Events have been the cornerstone of Aaltoes since 2009.
                </p>
              </div>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                Today, the focus is on building and shipping. That's why we are making a gentle shift. While maintaining our traditional speaker events, we're increasing our hackathon funding tenfold. We aim to have 70% of events delegated to hacking and building.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8">
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
                        <span className="text-sm font-mono text-zinc-500">70%</span>
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
          <div className="w-full h-px bg-zinc-800" />

          {/* Responsible Person Card */}
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