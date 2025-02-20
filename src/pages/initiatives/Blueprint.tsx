import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Blueprint Animation Component
const BlueprintAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pattern = 'BLUEPRINT'
  const [time, setTime] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 })

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const container = canvas.parentElement
      if (!container) return

      const { width, height } = container.getBoundingClientRect()
      setDimensions({ width, height })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Responsive grid size based on screen width
    const getGridSize = () => {
      const width = window.innerWidth
      if (width < 768) return { cols: 20, rows: 10 } // Mobile
      if (width < 1024) return { cols: 30, rows: 15 } // Tablet
      return { cols: 40, rows: 20 } // Desktop
    }

    const { cols, rows } = getGridSize()
    const cellSize = Math.min(canvas.width / cols, canvas.height / rows)

    let animationFrameId: number

    const render = () => {
      if (!ctx || !canvas) return

      ctx.fillStyle = '#09090b'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const fontSize = Math.min(cellSize * 0.8, 24) // Cap the maximum font size
      ctx.font = `${fontSize}px "Geist Mono"`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const t = time * 0.000005
          const o = Math.sin(y * Math.sin(t) * 0.2 + x * 0.04 + t) * 20
          const i = Math.round(Math.abs(x + y + o)) % pattern.length
          
          // Adjusted opacity calculation for smoother fading
          const baseOpacity = 0.15
          const waveOpacity = Math.sin(x * 0.1 + y * 0.1 + time * 0.0003) * 0.05
          const opacity = Math.max(baseOpacity + waveOpacity, 0.05)
          
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.fillText(
            pattern[i],
            x * cellSize + cellSize / 2,
            y * cellSize + cellSize / 2
          )
        }
      }

      setTime(prev => prev + 16)
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [time, dimensions])

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="w-full h-full rounded-2xl bg-zinc-950 "
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

export default function Blueprint() {
  const { pathname } = useLocation()
  const [activeTab, setActiveTab] = useState('documents')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Topic Navigation */}
        <div className="flex items-center justify-center gap-8 pt-8 pb-8">
          <Link 
            to="/2025/opensource"
            className="base-button inline-flex items-center justify-center group"
          >
            <span className="relative z-10 uppercase flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Aaltoes Open Source
            </span>
          </Link>
          <Link 
            to="/2025/robotics"
            className="base-button inline-flex items-center justify-center group"
          >
            <span className="relative z-10 uppercase flex items-center gap-2">
              Robotics
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="space-y-16">
          <motion.div 
            className="text-center space-y-16"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <div className="space-y-6">
              <Link 
                to="/2025"
                className="inline-flex items-center gap-4 text-sm font-mono text-zinc-400 uppercase tracking-wide hover:text-zinc-200 transition-colors"
              >
                Paramount Year of Craft
                <span className="h-4 w-px bg-zinc-800"></span>
                <span className="text-sm font-mono text-zinc-400 px-2 py-1 bg-zinc-950/50 rounded border border-zinc-400/20">
                  NEW PROJECT
                </span>
              </Link>
              <h1 className="text-5xl font-medium text-zinc-100">Blueprint</h1>
              <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
                An open-source initiative to enhance transparency and preserve institutional knowledge within Aaltoes.
              </p>
            </div>

            {/* Blueprint Animation */}
            <div className="aspect-[2/1] w-full max-w-4xl mx-auto">
              <BlueprintAnimation />
            </div>

            {/* Stats Grid */}
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

        {/* Main Content */}
        <div className="space-y-24 mt-16">
          {/* Features Section */}
          <section className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-medium text-zinc-100">Key Features</h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Empowering transparency and knowledge preservation through modern tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <h3 className="text-xl font-medium text-zinc-100">{feature.title}</h3>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950" />

          {/* Document Browser Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-medium text-zinc-100">Document Browser</h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
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

            {/* Content */}
            {activeTab === 'documents' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocumentCard
                  title="Board Meeting Minutes - January 2024"
                  type="Meeting Minutes"
                  date="January 15, 2024"
                  status="Public"
                />
                <DocumentCard
                  title="Budget Allocation Q1 2024"
                  type="Financial Document"
                  date="December 20, 2023"
                  status="Members Only"
                />
                <DocumentCard
                  title="Strategic Planning 2024"
                  type="Strategy Document"
                  date="December 1, 2023"
                  status="Public"
                />
                <DocumentCard
                  title="Community Guidelines Update"
                  type="Policy Document"
                  date="November 28, 2023"
                  status="Public"
                />
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="max-w-2xl mx-auto">
                <TimelineItem
                  year="2024"
                  title="Blueprint Launch"
                  description="Initiated the Blueprint project to enhance transparency and knowledge preservation."
                />
                <TimelineItem
                  year="2023"
                  title="Digital Transformation"
                  description="Moved all documentation to digital formats and implemented version control."
                />
                <TimelineItem
                  year="2022"
                  title="Transparency Initiative"
                  description="Began regular public reporting of board decisions and budget allocations."
                />
              </div>
            )}

            {activeTab === 'statistics' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Add statistics visualization components here */}
              </div>
            )}
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950" />

          {/* Get Involved Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-medium text-zinc-100">Get Involved</h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Blueprint is an open-source project, and we welcome contributions from the community.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://github.com/aaltoes/blueprint"
                target="_blank"
                rel="noopener noreferrer"
                className="base-button inline-flex items-center justify-center group h-12 px-6"
              >
                <span className="relative z-10 uppercase">View on GitHub</span>
              </a>
              <a 
                href="https://docs.blueprint.aaltoes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="base-button inline-flex items-center justify-center group h-12 px-6"
              >
                <span className="relative z-10 uppercase">Documentation</span>
              </a>
              <a 
                href="https://discord.gg/aaltoes"
                target="_blank"
                rel="noopener noreferrer"
                className="base-button inline-flex items-center justify-center group h-12 px-6"
              >
                <span className="relative z-10 uppercase">Join Discord</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 