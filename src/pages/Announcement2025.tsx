import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-02-12T19:00:00+02:00') // Helsinki time (UTC+2)

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
  const [showNotification, setShowNotification] = useState(false)

  return (
    <Layout>
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm"
          >
            <div className="relative max-w-2xl w-full bg-zinc-900/80 border border-zinc-100/10 rounded-lg p-8 backdrop-blur-md">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-3 h-3 rounded-full bg-zinc-100 animate-pulse" />
                <p className="font-mono text-zinc-100 text-lg">
                  Due to technical problems, our announcement has been postponed. Please join us for the live stream at the new time of February 12th, 18:00.
                </p>
                <button
                  onClick={() => setShowNotification(false)}
                  className="px-6 py-2 font-mono text-sm text-zinc-100 border border-zinc-100/10 rounded-lg hover:bg-zinc-100/10 transition-colors uppercase tracking-wider"
                >
                  Got it
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <div className="hidden sm:block">FEBRUARY 11TH, TUESDAY, 19:00</div>
            <div className="sm:hidden">
              <div>FEB 11TH</div>
              <div>19:00</div>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div 
          className="text-center mb-12 pb-1"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
        >
          <h1 className="tracking-tighter text-5xl font-geist font-[500] bg-gradient-to-b from-[#ffffff] to-[#e5e5e5] text-transparent bg-clip-text leading-tighter pb-1">
            Paramount Year of Crafting
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-normal text-zinc-400">Doni Peltojärvi on 2025 plans</p>
        </motion.div>

        {/* Video */}
        <motion.div 
          className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-900 mb-6"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          <iframe
            src="https://www.youtube.com/embed/k2uiHDZe66k"
            title="2025 Announcement"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* Video Note */}
        <motion.div
          className="text-left mb-8"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.25 }}
        >
          <p className="font-mono text-zinc-400 text-sm italic">
            *we are publishing more raw version of our video, to make you be introduced with program asap. fixed one comes soon.
          </p>
          <p className="font-mono text-zinc-400 text-sm mt-2">
            &lt;3 doni, tetsu, yera and vaneeza
          </p>
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