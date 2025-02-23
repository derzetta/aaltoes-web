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

// Hexagon component for the graph

// Project Card Component
const ProjectCard = ({ title, description, status, tech }: { title: string, description: string, status: string, tech: string[] }) => (
  <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800/30 transition-colors">
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-base md:text-lg font-medium text-zinc-100">{title}</h3>
      <span className={`text-xs font-mono px-2 py-1 rounded border ${
        status === "Active" 
          ? "text-emerald-400 bg-emerald-950/50 border-emerald-400/20" 
          : "text-amber-400 bg-amber-950/50 border-amber-400/20"
      }`}>{status}</span>
    </div>
    <p className="text-sm md:text-base text-zinc-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="text-xs font-mono text-zinc-500 px-2 py-1 bg-zinc-900/50 rounded-full">{t}</span>
      ))}
    </div>
  </div>
)



export default function OpenSource() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pb-16 pt-32">
        {/* Project Showcase */}
        <motion.div 
          className="relative h-[320px] md:h-[400px] w-full overflow-hidden"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
        >
          {/* Row 1 - Moving Left - Hackathon & Event Tools */}
          <div className="absolute w-full py-2 md:py-4 flex space-x-4 md:space-x-6 animate-scroll-left">
            {[
              { name: "Junction Bot", lang: "Python", color: "bg-blue-500", desc: "AI assistant for team formation" },
              { name: "Event Check-in", lang: "TypeScript", color: "bg-blue-400", desc: "Smart event registration system" },
              { name: "Sauna CV", lang: "Python", color: "bg-blue-500", desc: "Computer vision for space analytics" },
              { name: "Kiuas Match", lang: "Go", color: "bg-cyan-500", desc: "Startup-mentor matching algorithm" },
              { name: "Event Analytics", lang: "TypeScript", color: "bg-blue-400", desc: "Real-time event engagement tracking" },
              { name: "Hacker Portal", lang: "TypeScript", color: "bg-blue-400", desc: "Unified hackathon dashboard" },
              { name: "Team Forge", lang: "Python", color: "bg-blue-500", desc: "ML-powered team formation tool" },
              { name: "Venue Map", lang: "JavaScript", color: "bg-yellow-500", desc: "3D venue visualization system" },
              { name: "Badge System", lang: "Go", color: "bg-cyan-500", desc: "Digital achievement tracking" },
              { name: "Schedule AI", lang: "Python", color: "bg-blue-500", desc: "Smart event scheduling assistant" }
            ].map((project, i) => (
              <div
                key={`row1-${i}`}
                className="flex-none w-[200px] md:w-[300px] bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-3 md:p-6 space-y-3 md:space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${project.color}`} />
                    <h3 className="text-xs md:text-sm font-medium text-zinc-100">{project.name}</h3>
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-zinc-500">{project.lang}</span>
                </div>
                <p className="text-[10px] md:text-xs text-zinc-400">{project.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 - Moving Right - Community & Infrastructure */}
          <div className="absolute top-[92px] md:top-[120px] w-full py-4 md:py-4 flex space-x-4 md:space-x-6 animate-scroll-right">
            {[
              { name: "Minecraft Server", lang: "Java", color: "bg-orange-500", desc: "Community gaming infrastructure" },
              { name: "Discord Bot", lang: "TypeScript", color: "bg-blue-400", desc: "Community management automation" },
              { name: "Resource API", lang: "Go", color: "bg-cyan-500", desc: "Startup resources backend" },
              { name: "Auth System", lang: "Rust", color: "bg-red-500", desc: "Single sign-on for all platforms" },
              { name: "Space Booking", lang: "TypeScript", color: "bg-blue-400", desc: "Coworking space management" },
              { name: "Member DB", lang: "SQL", color: "bg-green-500", desc: "Community data platform" },
              { name: "Chat Bot", lang: "Python", color: "bg-blue-500", desc: "AI community assistant" },
              { name: "Access Control", lang: "C++", color: "bg-purple-500", desc: "IoT door system" },
              { name: "Event API", lang: "GraphQL", color: "bg-pink-500", desc: "Event management backend" },
              { name: "Resource Hub", lang: "TypeScript", color: "bg-blue-400", desc: "Learning materials platform" }
            ].map((project, i) => (
              <div
                key={`row2-${i}`}
                className="flex-none w-[200px] md:w-[300px] bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-3 md:p-6 space-y-3 md:space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${project.color}`} />
                    <h3 className="text-xs md:text-sm font-medium text-zinc-100">{project.name}</h3>
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-zinc-500">{project.lang}</span>
                </div>
                <p className="text-[10px] md:text-xs text-zinc-400">{project.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 3 - Moving Left - Analytics & Tools */}
          <div className="absolute top-[184px] md:top-[240px] w-full py-6 md:py-4 flex space-x-4 md:space-x-6 animate-scroll-left">
            {[
              { name: "Startup Metrics", lang: "Python", color: "bg-blue-500", desc: "Founder progress tracking" },
              { name: "Mentor Match", lang: "TensorFlow", color: "bg-orange-500", desc: "AI mentor recommendation" },
              { name: "Feedback Loop", lang: "TypeScript", color: "bg-blue-400", desc: "Real-time event feedback" },
              { name: "Space Analytics", lang: "Python", color: "bg-blue-500", desc: "Coworking space usage" },
              { name: "Impact Track", lang: "Go", color: "bg-cyan-500", desc: "Startup impact measurement" },
              { name: "Community Graph", lang: "Neo4j", color: "bg-green-500", desc: "Network visualization" },
              { name: "Resource AI", lang: "Python", color: "bg-blue-500", desc: "Smart resource suggestions" },
              { name: "Event Stats", lang: "R", color: "bg-blue-600", desc: "Event analytics dashboard" },
              { name: "Skills Map", lang: "JavaScript", color: "bg-yellow-500", desc: "Community skills visualization" },
              { name: "Growth Engine", lang: "Python", color: "bg-blue-500", desc: "Startup growth analytics" }
            ].map((project, i) => (
              <div
                key={`row3-${i}`}
                className="flex-none w-[200px] md:w-[300px] bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-3 md:p-6 space-y-3 md:space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${project.color}`} />
                    <h3 className="text-xs md:text-sm font-medium text-zinc-100">{project.name}</h3>
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-zinc-500">{project.lang}</span>
                </div>
                <p className="text-[10px] md:text-xs text-zinc-400">{project.desc}</p>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-zinc-950 to-transparent" />
        </motion.div>

        {/* Hero Section */}
        <div className="pt-4 space-y-16">
          <motion.div 
            className="text-center space-y-16"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
           
            <div className="space-y-6">
            <Link 
              to="/2025"
              className="inline-flex items-center gap-4 text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-wide hover:text-zinc-200 transition-colors"
            >
              Paramount Year of Craft
              <span className="h-4 w-px bg-zinc-800"></span>
              <span className="text-xs sm:text-sm font-mono text-zinc-400 px-2 py-1 bg-zinc-950/50 rounded border border-zinc-400/20">
                NEW PROJECT
              </span>
            </Link>
              <h1 className="text-3xl md:text-4xl font-medium text-zinc-100">Aaltoes Open Source</h1>
            <p className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                Building the foundation for Finland's next generation of open source innovation.
            </p>
            </div>

          {/* Video Section */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/65 group">
            <video
              id="heroVideo"
              className="w-full h-full object-cover"
              playsInline
            >
                <source src="/2025/open-source.mp4" type="video/mp4" />
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
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="space-y-16 mt-16">
          {/* Add margin before Project Lifecycle */}
          
          {/* Structured Lifecycle Section */}
          <section className="space-y-8">
            <div className="text-left md:text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Project Lifecycle</h2>
              <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
                A structured approach to nurturing and growing open source projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Sandbox",
                  subtitle: "Early experiments",
                  description: "A safe space for developers to experiment with new ideas and validate concepts.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  )
                },
                {
                  title: "Incubation",
                  subtitle: "Growing projects",
                  description: "Projects that have shown promise and are actively being developed with community support.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" y1="19" x2="12" y2="22"/>
                    </svg>
                  )
                },
                {
                  title: "Graduation",
                  subtitle: "Sustainable ventures",
                  description: "Mature projects that have achieved stability and have a strong community.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  )
                },
                {
                  title: "Archived",
                  subtitle: "Knowledge preservation",
                  description: "Projects that have completed their lifecycle but remain valuable for reference.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 8v13H3V8"/>
                      <path d="M1 3h22v5H1z"/>
                      <path d="M10 12h4"/>
                    </svg>
                  )
                }
              ].map((stage, i) => (
                <motion.div
                  key={stage.title}
                  className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 hover:bg-zinc-800/30 transition-colors"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.1 * i }}
                >
                  <div className="h-12 w-12 mb-6 text-zinc-400">
                    {stage.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-medium text-zinc-100">{stage.title}</h3>
                    <div className="text-sm md:text-base font-mono text-zinc-500 uppercase">{stage.subtitle}</div>
                    <p className="text-sm md:text-base text-zinc-400">{stage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Community Infrastructure Section */}
          <section className="space-y-8">
            <div className="text-left md:text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Community Infrastructure</h2>
              <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
                Tools and resources to support our open source community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Shared GitHub Organization",
                  description: "A centralized space for all Aaltoes open source projects, making it easy to discover and contribute.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  )
                },
                {
                  title: "Mentorship System",
                  description: "Connect with experienced developers who can guide you through your open source journey.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )
                },
                {
                  title: "Technical Documentation Wiki",
                  description: "Comprehensive guides and documentation to help you understand and contribute to projects.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                  )
                },
                {
                  title: "Project Showcase Platform",
                  description: "A dedicated space to showcase your projects and discover what others are building.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  )
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 hover:bg-zinc-800/30 transition-colors"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.1 * i }}
                >
                  <div className="h-12 w-12 mb-6 text-zinc-400">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-zinc-100">{item.title}</h3>
                    <p className="text-sm md:text-base text-zinc-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vision Section */}
          <section className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Finnish Open Source Heritage</h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                  Finland has a rich history in open source development, from Linux to MySQL. We're building on this foundation to create the next generation of open source innovation.
                </p>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                  In collaboration with Cloudnative Foundation Finland, we're making open source development a central focus for students and emerging developers.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 space-y-8">
                <h3 className="text-xl md:text-2xl font-medium text-zinc-100">Ecosystem Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-medium text-zinc-100">50+</div>
                    <div className="text-sm text-zinc-400">CNCF Member Companies</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-medium text-zinc-100">2.5K+</div>
                    <div className="text-sm text-zinc-400">Active Contributors</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-medium text-zinc-100">100+</div>
                    <div className="text-sm text-zinc-400">Open Source Projects</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-medium text-zinc-100">15+</div>
                    <div className="text-sm text-zinc-400">Years of Innovation</div>
                  </div>
                </div>
                <div className="pt-6 border-t border-zinc-800">
                  <div className="text-sm text-zinc-400">Key Partners:</div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="text-sm text-zinc-400">• Linux Foundation</div>
                    <div className="text-sm text-zinc-400">• CNCF Finland</div>
                    <div className="text-sm text-zinc-400">• Wolt</div>
                    <div className="text-sm text-zinc-400">• Reaktor</div>
                    <div className="text-sm text-zinc-400">• Futurice</div>
                    <div className="text-sm text-zinc-400">• Supercell</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Projects Grid */}
          <section className="space-y-16">
            <div className="text-left md:text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Foundation Projects</h2>
              <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
                Five cornerstone projects that will serve as the foundation for our open source ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Aaltoes Chatbot"
                description="An AI-powered assistant designed to help students and entrepreneurs navigate the Finnish startup ecosystem."
                status="Active"
                tech={["Python", "OpenAI", "FastAPI"]}
              />
              <ProjectCard
                title="Project Nova"
                description="To be announced"
                status="Coming Soon"
                tech={["To Be Announced"]}
              />
              <ProjectCard
                title="Project Aurora"
                description="To be announced"
                status="Coming Soon"
                tech={["To Be Announced"]}
              />
              <ProjectCard
                title="Project Polaris"
                description="To be announced"
                status="Coming Soon"
                tech={["To Be Announced"]}
              />
              <ProjectCard
                title="Project Horizon"
                description="To be announced"
                status="Coming Soon"
                tech={["To Be Announced"]}
              />
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Community Section */}
          <section className="space-y-16">
            <div className="text-left md:text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Join Our Community</h2>
              <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
                Connect with fellow developers, contribute to projects, and shape the future of open source in Finland.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.a
                href="https://github.com/aaltoes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 hover:bg-zinc-800/30 transition-colors text-center group"
                {...fadeIn}
              >
                <div className="h-12 w-12 mx-auto mb-4 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-zinc-100 mb-2">GitHub</h3>
                <p className="text-zinc-400">
                  Explore our repositories and contribute to projects
                </p>
              </motion.a>

              <motion.a
                href="https://discord.gg/aaltoes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 hover:bg-zinc-800/30 transition-colors text-center group"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.1 }}
              >
                <div className="h-12 w-12 mx-auto mb-4 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-zinc-100 mb-2">Discord</h3>
                <p className="text-zinc-400">
                  Join discussions and get help from the community
                </p>
              </motion.a>

              <motion.a
                href="https://aaltoes.com/events"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 hover:bg-zinc-800/30 transition-colors text-center group"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
              >
                <div className="h-12 w-12 mx-auto mb-4 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-zinc-100 mb-2">Events</h3>
                <p className="text-zinc-400">
                  Attend workshops, hackathons, and meetups
                </p>
              </motion.a>
            </div>
          </section>

          {/* Ecosystem Coordinator Footer */}
          <div className="w-full h-px bg-zinc-800" />

          {/* Responsible Person Card */}
          <section>
            <motion.div
              className="bg-zinc-950 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 space-y-8"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.3 }}
            >
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
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
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
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  )
} 