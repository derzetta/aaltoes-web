import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

interface InitiativePreviewProps {
  id: string
  title: string
  subtitle: string
  description: string
  imageUrl: string
  isWide?: boolean
  delay?: number
  number?: number
}

const InitiativeCard = ({
  id,
  title,
  subtitle,
  isWide = false,
  delay = 0,
  number
}: InitiativePreviewProps) => (
  <motion.div
    className={`relative group ${isWide ? 'md:col-span-2' : ''}`}
    {...fadeIn}
    transition={{ ...fadeIn.transition, delay }}
  >
    <Link
      to={`/2025/${id}`}
      className="block relative w-full h-64 rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/65 hover:border-zinc-700/100 transition-all duration-300 group-hover:bg-zinc-900/30"
    >
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          {number && (
            <div className="w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center">
              <span className="text-sm font-mono text-zinc-400">{number}</span>
            </div>
          )}
        </div>
        <div>
          <p className="text-sm font-mono text-zinc-400 uppercase tracking-wide mb-3">
            {title}
          </p>
          <h2 className="text-2xl font-medium text-zinc-100 leading-tight">
            {subtitle}
          </h2>
        </div>
      </div>
    </Link>
  </motion.div>
)

export default function Announcement2025() {
  const { pathname } = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const initiatives = [
    {
      id: "focus-topics",
      title: "Focus Topics and Events",
      subtitle: "Welcome to the most tech-driven year of Aaltoes",
      description:
        "From Computer Vision to Open Source AI, discover our key technological focus areas for 2025.",
      imageUrl: "/bank/focus.jpg",
      isWide: true,
      number: 1
    },
    {
      id: "international",
      title: "Global Presence",
      subtitle: "Going beyond Silicon Valley",
      description:
        "Expanding to Eastern and Southern Asia with Japan Expedition and Shibuya-Tokyo partnership.",
      imageUrl: "/bank/global.jpg",
      number: 2
    },
    {
      id: "spinout",
      title: "2024 Projects",
      subtitle: "Continuing and spinning out",
      description:
        "Ignite, Strive, and wednesday - projects ready to take the next step.",
      imageUrl: "/bank/spinout.jpg",
      number: 3
    },
    {
      id: "opensource",
      title: "Open Source Infrastructure",
      subtitle: "Pure innovation. Supercharged.",
      description:
        "Five foundational projects creating a new ecosystem for innovation.",
      imageUrl: "/bank/opensource.jpg",
      number: 4
    },
    {
      id: "blueprint",
      title: "The Blueprint Project",
      subtitle: "Continuing the legacy",
      description:
        "A transparent, open-source archive of Aaltoes' history and operations.",
      imageUrl: "/bank/blueprint.jpg",
      number: 5
    },
    {
      id: "robotics",
      title: "Robotics Nation",
      subtitle: "Powerhouse of future builders",
      description:
        "Our ambitious mission to host the World Robotics Championship this decade.",
      imageUrl: "/bank/robotics.jpg",
      isWide: true,
      number: 6
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-7xl aspect-video">
            <video
              className="w-full h-full object-contain"
              autoPlay
              controls
              playsInline
            >
              <source src="/Untitled2.mp4" type="video/quicktime" />
            </video>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-zinc-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Hero Video Section - Full Width */}
      <div className="relative w-full h-screen">
        {/* Video Container */}
        <div className="absolute inset-0 w-full h-full">
          <video
            id="heroVideo"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Untitled2.mp4" type="video/quicktime" />
          </video>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgb(9,9,11)_100%)] pointer-events-none opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/20 via-transparent to-zinc-950/80 pointer-events-none" />
        </div>

        {/* Content Over the Video */}
        <div className="relative h-full flex flex-col">
          <div className="flex-grow" />
          <motion.div
            className="w-full max-w-3xl mx-auto text-center px-6 mb-24"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            {/* Aaltoes Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="/bank/aaltoes_white.svg"
                alt="Aaltoes Logo"
                className="h-6"
              />
            </div>

            <h1 className="tracking-tighter text-5xl font-geist font-[500] text-zinc-100 leading-tighter pb-1">
              Paramount Year of Craft
            </h1>
            <p className="mt-6 text-lg font-normal text-zinc-400 max-w-xl mx-auto mb-8">
              Groundbreaking initiatives to transform Aaltoes and Finland into
              a powerhouse of builders.
            </p>

            {/* Two Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="base-button inline-flex items-center justify-center group relative overflow-hidden"
              >
                <span className="relative z-10 uppercase flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Watch Full Video
                </span>
                <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>

              <button
                onClick={() => {
                  const initiativesSection = document.querySelector(
                    ".initiatives-grid"
                  )
                  initiativesSection?.scrollIntoView({ behavior: "smooth" })
                }}
                className="base-button inline-flex items-center justify-center group relative overflow-hidden"
              >
                <span className="relative z-10 uppercase flex items-center gap-2">
                  See The Plan
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </span>
                <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contained Content Section */}
      <div className="max-w-7xl mx-auto px-6 space-y-12 pb-24">
        {/* Initiatives Grid */}
        <div className="relative bg-zinc-950/95 backdrop-blur-sm rounded-2xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 initiatives-grid p-8"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            {initiatives.map((initiative, index) => (
              <InitiativeCard
                key={initiative.id}
                {...initiative}
                delay={0.3 + index * 0.1}
              />
            ))}
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.div
          className="flex justify-center pt-6"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.8 }}
        >
          <Link
            to="/"
            className="base-button inline-flex items-center justify-center group relative overflow-hidden"
          >
            <span className="relative z-10 uppercase">Back to Homepage</span>
            <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
