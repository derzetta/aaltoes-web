import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Spinout Hero Demo
const SpinoutHeroDemo = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const logos = [
    { src: "/2025/ignite.svg", alt: "Ignite Logo" },
    { src: "/2025/wednesday.svg", alt: "Wednesday Logo" },
    { src: "/2025/strive.svg", alt: "Strive Logo" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % logos.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/65">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-32 w-96">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center transition-all duration-1000"
              style={{
                opacity: index === activeIndex ? 1 : 0,
                transform: `scale(${index === activeIndex ? 1 : 0.8}) translateY(${index === activeIndex ? 0 : 10}px)`,
                zIndex: index === activeIndex ? 1 : 0
              }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-24 opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
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
              className="inline-block text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-wide mb-4 hover:text-zinc-200 transition-colors"
            >
              Paramount Year of Craft
            </Link>
            <h1 className="text-3xl md:text-4xl font-medium text-zinc-100 mb-6">Spinout Projects</h1>
            <p className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Supporting and scaling innovative projects from our community.
            </p>
          </motion.div>

          {/* Demo Section */}
          <SpinoutHeroDemo />
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
          <div className="w-full h-px bg-zinc-800" />

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
        </div>
      </div>
    </div>
  )
} 