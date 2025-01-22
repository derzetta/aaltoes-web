import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'



function AnimatedLogo() {
  return (
    <motion.svg 
      width="600" 
      height="400" 
      viewBox="0 0 714 476" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
      animate={{ opacity: [0.25, 0.15, 0.25] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.path
        d="M146.2,148.7l18.4,0l51.6,119.7l-24.3,0L180.8,241l-51.9,0L118,268.5l-23.8,0L146.2,148.7z M173.3,222.8 l-18.5-48.7l-18.7,48.7L173.3,222.8z"
        stroke="rgba(163, 163, 163, 0.4)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M270,257.2h-0.5c-5.7,9.1-15.2,13.2-26,13.2c-15.1,0-29.6-8.3-29.6-24.3c0-26.4,30.8-28.3,51-28.3h5.1v-2.2 c0-10-7.8-15.2-18.6-15.2c-8.5,0-16.2,3.4-21.6,8.5l-10.7-10.6c9-9.1,21.6-13,34.5-13c34.7,0,34.7,25,34.7,36.5l0,46.7l-18.3,0 L270,257.2z M268.8,232h-4.2c-11.2,0-30.4,0.9-30.4,12.5c0,7.4,7.6,10.7,14.2,10.7c13.9,0,20.5-7.3,20.5-18.6L268.8,232z"
        stroke="rgba(163, 163, 163, 0.4)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M300.4,140.5l20.3,0l0.1,127.8l-20.3,0L300.4,140.5z"
        stroke="rgba(163, 163, 163, 0.4)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M332.9,187.2l0-23.5l20.3,0l0,23.5l22.3,0l0,17.2l-22.3,0l0,35.5c0,8.1,2.4,13.2,11.3,13.2 c3.6,0,8.5-0.7,11-2.5l0,17.1c-4.2,2-11.3,2.7-16.1,2.7c-21.5,0-26.6-9.6-26.6-28.7l0-37.2"
        stroke="rgba(163, 163, 163, 0.4)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M423,185.1c24.5,0,44.1,17.1,44.2,42.6c0,25.5-19.6,42.6-44.1,42.6c-24.5,0-44.1-17.1-44.2-42.6 C378.9,202.2,398.5,185.1,423,185.1z M423,252.1c14.9,0,23.8-11.7,23.8-24.4c0-12.7-9-24.4-23.9-24.3c-14.9,0-23.8,11.7-23.8,24.4 C399.2,240.4,408.2,252.1,423,252.1z"
        stroke="rgba(163, 163, 163, 0.4)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M493.9,234.8c1.4,12,10.5,19.3,21.8,19.3c10.1,0,16.7-4.7,21.8-11l14.5,11c-9.5,11.7-21.5,16.2-34.3,16.3 c-24.5,0-44.1-17.1-44.2-42.6c0-25.5,19.6-42.6,44.1-42.6c22.7,0,38,15.9,38.1,44.1l0,5.6L493.9,234.8z M535.5,219.5 c-0.2-11.8-8-19.3-20.6-19.3c-12,0-19.4,7.6-21,19.3L535.5,219.5z"
        stroke="rgba(163, 163, 163, 0.4)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M609.5,209.5c-3.9-5.4-9-8.3-15.9-8.3c-5.4,0-11.8,2.5-11.8,8.6c0,14.5,43.8,2.7,43.8,34.3 c0,19.3-18.4,26.1-35,26.1c-12.5,0-23.3-3.2-31.6-12.5l13.5-12.7c5.2,5.7,10.7,10,19.3,10c5.9,0,13.5-2.9,13.5-9.3 c0-16.7-43.8-3.5-43.8-34.5c0-18.1,16.2-26.2,32.6-26.2c10.8,0,22.3,3.4,28.9,12.3L609.5,209.5z"
        stroke="rgba(163, 163, 163, 0.4)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}

export default function Chat() {
  const words = ["builders", "innovators", "misfits", "openings", "brave", "strivers", "mavericks", "open source", "explorers", "igniters"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const chatUrl = "https://t.me/+TP2QOzbls4oxMjE6"
  const [, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x: x * 190, y: y * 190 - 40 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.classList.add('home-page')
    return () => {
      document.body.classList.remove('home-page')
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-6 h-screen bg-neutral-950 p-6">
      {/* Left screen - Brainhack Schedule (2/3) */}
      <div className="w-2/3 h-full rounded-3xl bg-neutral-900/30 backdrop-blur-sm p-8 flex flex-col border border-neutral-800 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-80">
            <div className="absolute w-full h-full animate-pulse"
              style={{
                background: `radial-gradient(circle at ${50}% ${50}%, rgba(255,20,147,0.8) 0%, rgba(255,20,147,0.4) 40%, transparent 80%)`,
                animation: 'moveGradient1 30s infinite linear',
                transform: 'scale(2.5)'
              }}
            />
            <div className="absolute w-full h-full animate-pulse delay-150"
              style={{
                background: `radial-gradient(circle at ${45}% ${45}%, rgba(0,191,255,0.8) 0%, rgba(0,191,255,0.4) 40%, transparent 80%)`,
                animation: 'moveGradient2 35s infinite linear',
                transform: 'scale(2.5)'
              }}
            />
            <div className="absolute w-full h-full animate-pulse delay-300"
              style={{
                background: `radial-gradient(circle at ${55}% ${55}%, rgba(147,51,234,0.8) 0%, rgba(147,51,234,0.4) 40%, transparent 80%)`,
                animation: 'moveGradient3 40s infinite linear',
                transform: 'scale(2.5)'
              }}
            />
          </div>
        </div>

        <style>
          {`
            @keyframes moveGradient1 {
              0% { transform: translate(-100%, -100%) scale(2.5) rotate(0deg); }
              50% { transform: translate(100%, 100%) scale(2.5) rotate(180deg); }
              100% { transform: translate(-100%, -100%) scale(2.5) rotate(360deg); }
            }
            @keyframes moveGradient2 {
              0% { transform: translate(100%, -100%) scale(2.5) rotate(0deg); }
              50% { transform: translate(-100%, 100%) scale(2.5) rotate(-180deg); }
              100% { transform: translate(100%, -100%) scale(2.5) rotate(-360deg); }
            }
            @keyframes moveGradient3 {
              0% { transform: translate(-100%, 100%) scale(2.5) rotate(0deg); }
              50% { transform: translate(100%, -100%) scale(2.5) rotate(180deg); }
              100% { transform: translate(-100%, 100%) scale(2.5) rotate(360deg); }
            }
          `}
        </style>

        {/* Top fade overlay */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to bottom, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 15%, rgba(10, 10, 10, 0.98) 20%, rgba(10, 10, 10, 0.9) 25%, rgba(10, 10, 10, 0) 45%, rgba(10, 10, 10, 0) 70%, rgba(10, 10, 10, 0.8) 85%, rgb(10, 10, 10) 100%)',
            opacity: 1
          }}
        />

        <div className="relative z-10 mt-12">
          <h1 className="font-mono text-[8rem] font-bold text-neutral-100 tracking-tighter mb-16">
            Brainhack
          </h1>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-mono text-3xl font-medium text-neutral-200 tracking-tight uppercase">Schedule</h2>
              <div className="space-y-6">
                <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800/50 backdrop-blur-sm">
                  <h3 className="font-mono text-2xl text-neutral-200 font-medium mb-4 tracking-tight uppercase">January 22, 2025</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-mono text-xl text-neutral-400 w-24">13:00</span>
                      <div className="flex-1">
                        <span className="font-mono text-xl text-neutral-300">Team Formation & Ideation</span>
                        <p className="font-mono text-sm text-neutral-500 mt-1">Ideate measurements or projects you want to work on</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-mono text-xl text-neutral-400 w-24">13:45</span>
                      <div className="flex-1">
                        <span className="font-mono text-xl text-neutral-300">Hands-on Session</span>
                        <p className="font-mono text-sm text-neutral-500 mt-1">Measuring, coding, learning, and sharing</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-mono text-xl text-neutral-400 w-24">16:00</span>
                      <div className="flex-1">
                        <span className="font-mono text-xl text-neutral-300">Food Break</span>
                        <p className="font-mono text-sm text-neutral-500 mt-1">Recharge and network</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-mono text-xl text-neutral-400 w-24">19:00</span>
                      <div className="flex-1">
                        <span className="font-mono text-xl text-neutral-300">Project Presentations</span>
                        <p className="font-mono text-sm text-neutral-500 mt-1">Share your ideas, progress, and learnings</p>
                        <div className="mt-2 bg-purple-900/30 p-3 rounded-md border border-purple-800/50">
                          <p className="font-mono text-sm text-purple-300">🏆 Best presentation wins a Muse S device!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right screen - QR Code and Animations (1/3) */}
      <div className="w-1/3 h-full rounded-3xl bg-neutral-900/30 backdrop-blur-sm relative overflow-hidden border border-neutral-800">
        {/* Grid Background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[200%] h-[200%] translate-y-[50%]"
            style={{
              transform: 'perspective(1000px) rotateX(60deg) translateY(0%) translateZ(-100px)',
              backgroundImage: `
                repeating-linear-gradient(90deg, rgba(163, 163, 163, 0.25) 0px, rgba(163, 163, 163, 0.25) 1px, transparent 1px, transparent 60px),
                repeating-linear-gradient(0deg, rgba(163, 163, 163, 0.25) 0px, rgba(163, 163, 163, 0.25) 1px, transparent 1px, transparent 60px)
              `,
              opacity: 0.5,
            }}
          />
          {/* Top fade overlay */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'linear-gradient(to bottom, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 15%, rgba(10, 10, 10, 0.98) 20%, rgba(10, 10, 10, 0.9) 25%, rgba(10, 10, 10, 0) 45%, rgba(10, 10, 10, 0) 70%, rgba(10, 10, 10, 0.8) 85%, rgb(10, 10, 10) 100%)',
              opacity: 1
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 gap-8">
          <div className="flex flex-col items-center relative">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <AnimatedLogo />
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl text-neutral-400 tracking-tight uppercase">
                YEAR OF THE
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={words[currentWordIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="font-mono text-[4rem] font-normal text-neutral-100 tracking-tighter text-center uppercase whitespace-nowrap"
              >
                {words[currentWordIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-neutral-800/50">
            <QRCodeSVG
              value={chatUrl}
              size={240}
              level="H"
              includeMargin={true}
              className="bg-white p-4 rounded-lg"
            />
            <p className="font-mono text-center text-neutral-400 mt-4 text-sm tracking-tight uppercase">
              Scan to join our community
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 