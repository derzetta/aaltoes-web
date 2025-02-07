import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-02-11T17:00:00+02:00') // Helsinki time (UTC+2)

    const updateTimer = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-8 justify-center items-center font-mono text-zinc-100">
      <div className="text-center">
        <div className="text-4xl font-normal">{timeLeft.days}</div>
        <div className="text-sm text-zinc-400 uppercase tracking-wider">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-normal">{timeLeft.hours}</div>
        <div className="text-sm text-zinc-400 uppercase tracking-wider">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-normal">{timeLeft.minutes}</div>
        <div className="text-sm text-zinc-400 uppercase tracking-wider">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-normal">{timeLeft.seconds}</div>
        <div className="text-sm text-zinc-400 uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  )
}

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Announcement2025() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          {...fadeIn}
        >
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/bank/aaltoes_white.svg" alt="Aaltoes Logo" className="h-8" />
            </Link>
          </div>
          <div className="text-right font-mono text-zinc-400 text-md tracking-wide">
            <div className="hidden sm:block">FEBRUARY 11TH, TUESDAY, 17:00</div>
            <div className="sm:hidden">
              <div>FEB 11TH</div>
              <div>17:00</div>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div 
          className="text-center mb-12 pb-1"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
        >
          <h1 className="tracking-tighter text-5xl font-[500] font-geist bg-gradient-to-b from-[#ffffff] to-[#e5e5e5] text-transparent bg-clip-text leading-tighter pb-1">
            Paramount Year of Crafting
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-normal text-zinc-400">Doni Peltojärvi on 2025 plans</p>
        </motion.div>

        {/* Preview Image */}
        <motion.div 
          className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-900 mb-6"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <img 
            src="/bank/paramount.png" 
            alt="2025 Announcement Preview" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-sm text-zinc-300 uppercase tracking-wider">Livestream</span>
            </div>
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div 
          className="mb-12"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
        >
          <CountdownTimer />
        </motion.div>

        <div className="flex justify-center">
          <Link 
            to="/"
            className="base-button inline-flex items-center justify-center group"
          >
            <span className="relative z-10 uppercase">Back to Homepage</span>
            <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </Layout>
  )
} 