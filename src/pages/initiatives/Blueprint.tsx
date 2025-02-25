import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import VideoPlayer from '../../components/VideoPlayer'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Blueprint Animation Component
const BlueprintAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pattern = 'BLUEPRINT'
  const timeRef = useRef(0)
  const animationFrameRef = useRef<number>()
  const lastRenderTimeRef = useRef(0)
  const FPS = 60 // Increased FPS for smoother animation

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    // Responsive grid size based on screen width with increased density
    const getGridSize = () => {
      const width = window.innerWidth
      if (width < 768) return { cols: 15, rows: 8 } // Mobile - increased from 12x6
      if (width < 1024) return { cols: 20, rows: 10 } // Tablet - increased from 16x8
      return { cols: 30, rows: 15 } // Desktop - increased from 25x12
    }

    const render = (timestamp: number) => {
      if (!ctx || !canvas) return

      // Limit frame rate
      const elapsed = timestamp - lastRenderTimeRef.current
      if (elapsed < 1000 / FPS) {
        animationFrameRef.current = requestAnimationFrame(render)
        return
      }
      lastRenderTimeRef.current = timestamp

      // Update dimensions and calculate cell size
      const { cols, rows } = getGridSize()
      const cellWidth = canvas.width / cols
      const cellHeight = canvas.height / rows
      const cellSize = Math.min(cellWidth, cellHeight)
      
      // Clear canvas
      ctx.fillStyle = '#09090b'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Calculate font size based on cell size with padding
      const fontSize = Math.min(cellSize * 0.7, 28) // Adjusted for better visibility
      ctx.font = `${fontSize}px "Geist Mono"`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // Pre-calculate common values with faster animation
      const t = timeRef.current * 0.001 // Increased from 0.0002 for faster animation
      const baseOpacity = 0.15

      // Center the grid in the canvas
      const offsetX = (canvas.width - (cols * cellSize)) / 2
      const offsetY = (canvas.height - (rows * cellSize)) / 2

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // More dynamic wave effect with faster changes
          const waveX = Math.sin(y * 0.5 + t * 2) * 1.5
          const waveY = Math.cos(x * 0.5 + t * 2) * 1.5
          const o = Math.sin((x + waveX) * 0.8 + (y + waveY) * 0.8 + t * 3) * 12
          const i = Math.round(Math.abs(x + y + o)) % pattern.length
          
          // More dynamic opacity with faster changes
          const waveOpacity = Math.sin(x * 0.3 + y * 0.3 + t * 10) * 0.03
          const opacity = Math.max(baseOpacity + waveOpacity, 0.08)
          
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
          
          // Position with offset for centering
          const posX = offsetX + x * cellSize + cellSize / 2
          const posY = offsetY + y * cellSize + cellSize / 2
          
          ctx.fillText(
            pattern[i],
            posX,
            posY
          )
        }
      }

      timeRef.current += 2 // Doubled from 1 for faster animation
      animationFrameRef.current = requestAnimationFrame(render)
    }

    const handleResize = () => {
      const container = canvas.parentElement
      if (!container) return

      const { width, height } = container.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      
      // Reset font after resize
      const { cols, rows } = getGridSize()
      const cellSize = Math.min(width / cols, height / rows)
      const fontSize = Math.min(cellSize * 0.7, 28)
      if (ctx) {
        ctx.font = `${fontSize}px "Geist Mono"`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    animationFrameRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-2xl bg-zinc-950"
      style={{ width: '100%', height: '100%' }}
    />
  )
}

// Timeline Component
const TimelineItem = ({ year, title, description }: { year: string, title: string, description: string }) => (
  <div className="relative pl-8 pb-12 last:pb-0">
    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-zinc-800 to-transparent" />
    <div className="absolute left-0 top-2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-zinc-800 bg-zinc-950" />
    <div className="text-sm font-mono text-zinc-500 mb-2">{year}</div>
    <h3 className="text-xl font-medium text-zinc-100 mb-2">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{description}</p>
  </div>
)

// Document Card Component
const DocumentCard = ({ title, type, date, status }: { title: string, type: string, date: string, status: string }) => (
  <motion.div 
    className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 hover:bg-zinc-800/30 transition-colors"
    {...fadeIn}
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-lg font-medium text-zinc-100 mb-1">{title}</h3>
        <div className="text-sm font-mono text-zinc-500">{type}</div>
      </div>
      <span className={`text-sm font-mono px-2 py-1 rounded border ${
        status === "Public" 
          ? "text-emerald-400 bg-emerald-950/50 border-emerald-400/20" 
          : "text-amber-400 bg-amber-950/50 border-amber-400/20"
      }`}>{status}</span>
    </div>
    <div className="text-sm text-zinc-400">{date}</div>
  </motion.div>
)

// Stat Card Component
const StatCard = ({ value, label, icon }: { value: string, label: string, icon: React.ReactNode }) => (
  <motion.div 
    className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6"
    {...fadeIn}
  >
    <div className="flex items-center">
      <div className="h-12 w-12 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-grow text-center">
        <div className="text-2xl font-medium text-zinc-100">{value}</div>
        <div className="text-sm text-zinc-400">{label}</div>
      </div>
    </div>
  </motion.div>
)

// Coming Soon Overlay Component
const ComingSoonOverlay = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/70 backdrop-blur-[2px] rounded-xl border-zinc-800/50">
    <div className="text-center space-y-2">
      <div className="text-2xl font-medium text-zinc-100">Coming Soon!</div>
      <div className="text-sm text-zinc-400">This feature is currently under development</div>
    </div>
  </div>
)

const DocumentBrowser = () => {
  const { pathname } = useLocation()
  const [activeTab, setActiveTab] = useState('documents')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative w-full h-full">
      {/* Blur effect */}
      <div className="absolute inset-0 backdrop-blur-xl z-10" />
      
      <div className="relative z-20">
        {/* Document Browser Section */}
        <section className="space-y-8">
          <div className="text-left md:text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Document Browser</h2>
            <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
              Explore our archive of decisions, policies, and historical records.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {['documents', 'timeline', 'statistics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab
                    ? 'bg-zinc-800 text-zinc-100'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content with Coming Soon Overlay */}
          <div className="relative">
            {activeTab === 'documents' && (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <DocumentCard
                  title="February Events Report"
                  type="Monthly Report"
                  date="February 29, 2024"
                  status="Members Only"
                />
                <DocumentCard
                  title="2024 Projects Report"
                  type="Project Documentation"
                  date="February 15, 2024"
                  status="Members Only"
                />
                <DocumentCard
                  title="Financial Statement 2023"
                  type="Financial Document"
                  date="January 31, 2024"
                  status="Board & Actives"
                />
                <DocumentCard
                  title="Archive of Partnership Deals"
                  type="Partnership Documentation"
                  date="January 15, 2024"
                  status="Board & Actives"
                />
                <DocumentCard
                  title="Templates for Legal Contracts"
                  type="Legal Documentation"
                  date="January 1, 2024"
                  status="Members Only"
                />
                <ComingSoonOverlay />
              </motion.div>
            )}

            {activeTab === 'timeline' && (
              <motion.div 
                className="relative max-w-2xl mx-auto"
              >
                <TimelineItem
                  year="Q1 2024"
                  title="Acquiring and Organizing Archived Documents"
                  description="Identify and compile past archived documents and meeting minutes from our records."
                />
                <TimelineItem
                  year="Q2 2024"
                  title="Infrastructure Setup"
                  description="Building the technical foundation—including hosting, database, and version control."
                />
                <TimelineItem
                  year="Q3 2024"
                  title="Initial Data Release"
                  description="Launching of the platform with the initial set of documents and data available to members."
                />
                <TimelineItem
                  year="Q4 2024"
                  title="Continuous Contributions"
                  description="Establish a process for ongoing updates and community contributions to keep the archive comprehensive."
                />
                <ComingSoonOverlay />
              </motion.div>
            )}

            {activeTab === 'statistics' && (
              <motion.div 
                className="relative grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[300px]"
              >
                <ComingSoonOverlay />
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default function Blueprint() {
  const { pathname } = useLocation()
  const [] = useState('documents')

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
          <motion.div 
            className="aspect-[2/1] w-full max-w-4xl mx-auto"
            {...fadeIn}
          >
            <BlueprintAnimation />
          </motion.div>

          {/* Heading and Description */}
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
              <h1 className="text-3xl md:text-4xl font-medium text-zinc-100">Blueprint</h1>
              <p className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                An open-source initiative to enhance transparency and preserve institutional knowledge within Aaltoes.
              </p>
            </div>
            

            {/* Video Section */}
            <div className="max-w-4xl mx-auto">
              <VideoPlayer src="/2025/video_extracts/5.mov" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatCard 
                value="15+"
                label="Years of History"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                }
              />
              <StatCard 
                value="500+"
                label="Documents Archived"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                }
              />
              <StatCard 
                value="100+"
                label="Board Members"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                }
              />
              <StatCard 
                value="100%"
                label="Transparency"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                }
              />
            </div>
          </motion.div>
        </div>
        <div className="w-full h-px bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950 my-16" />
        {/* Main Content */}
        <div className="space-y-20 mt-16">
          {/* Features Section */}
          <section className="space-y-10">
            <div className="text-left md:text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Key Features</h2>
              <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
                Empowering transparency and knowledge preservation through modern tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Decision Archive",
                  description: "Comprehensive documentation of board decisions, including context and outcomes.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  )
                },
                {
                  title: "Budget Tracking",
                  description: "Transparent financial records and allocation of resources across initiatives.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  )
                },
                {
                  title: "Knowledge Transfer",
                  description: "Structured documentation to ensure smooth transitions between board generations.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                  )
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 hover:bg-zinc-800/30 transition-colors flex flex-col h-full"
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: 0.1 * i }}
                >
                  <div className="h-12 w-12 mb-6 text-zinc-400">
                    {feature.icon}
                  </div>
                  <div className="space-y-2 flex-grow">
                    <h3 className="text-lg md:text-xl font-medium text-zinc-100">{feature.title}</h3>
                    <p className="text-sm md:text-base text-zinc-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950" />

          {/* Document Browser */}
          <section className="space-y-10">
            <DocumentBrowser />
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950" />

          {/* Responsible Person Cards */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Milana's Card */}
              

              {/* Yera's Card */}
              <motion.div
                className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.4 }}
              >
                {/* Container for profile and button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                  {/* Profile Info */}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-900 flex-shrink-0">
                      <img 
                        src="/board/yera.png" 
                        alt="Yera Slam"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-zinc-100">Yera Slam</h3>
                      <p className="text-zinc-400 font-normal">Blueprint Responsible</p>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div>
                    <a 
                      href="mailto:yera.slam@aaltoes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="base-button inline-flex items-center justify-center group h-10 px-4"
                    >
                      <span className="relative z-10 uppercase text-sm flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        Contact
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.3 }}
              >
                {/* Container for profile and button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                  {/* Profile Info */}
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-900 flex-shrink-0">
                      <img 
                        src="/board/milana.png" 
                        alt="Milana Begantsova"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-zinc-100">Milana Begantsova</h3>
                      <p className="text-zinc-400 font-normal">Tech Responsible</p>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div>
                    <a 
                      href="mailto:milana.begantsova@aaltoes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="base-button inline-flex items-center justify-center group h-10 px-4"
                    >
                      <span className="relative z-10 uppercase text-sm flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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