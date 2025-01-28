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
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"
      animate={{ opacity: [0.4, 0.25, 0.4] }}
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

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  highlight?: string;
}

interface GradientSettings {
  color1: string;
  color2: string;
  color3: string;
}

interface LayoutSettings {
  leftScreenVisible: boolean;
  rightScreenVisible: boolean;
  leftScreenWidth: number; // percentage
}

export default function Chat() {
  const words = ["builders", "innovators", "misfits", "openings", "brave", "strivers", "mavericks", "open source", "explorers", "igniters"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const chatUrl = "https://t.me/+Rr6niJhw4mtiYmIy"
  const [, setMousePosition] = useState({ x: 0, y: 0 })
  const [showControls, setShowControls] = useState(false)
  
  // Layout controls
  const [layout, setLayout] = useState<LayoutSettings>(() => {
    const saved = localStorage.getItem('chatLayoutSettings')
    return saved ? JSON.parse(saved) : {
      leftScreenVisible: true,
      rightScreenVisible: true,
      leftScreenWidth: 66 // 66% by default (2/3)
    }
  })

  // Initialize states with saved values
  const [eventName, setEventName] = useState(() => {
    return localStorage.getItem('eventName') || "Brainhack"
  })
  
  const [eventDate, setEventDate] = useState(() => {
    return localStorage.getItem('eventDate') || "January 22, 2025"
  })
  
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>(() => {
    const saved = localStorage.getItem('scheduleItems')
    return saved ? JSON.parse(saved) : [
      {
        time: "13:00",
        title: "Team Formation & Ideation",
        description: "Ideate measurements or projects you want to work on"
      },
      {
        time: "13:45",
        title: "Hands-on Session",
        description: "Measuring, coding, learning, and sharing"
      },
      {
        time: "16:00",
        title: "Food Break",
        description: "Recharge and network"
      },
      {
        time: "19:00",
        title: "Project Presentations",
        description: "Share your ideas, progress, and learnings",
        highlight: "🏆 Best presentation wins a Muse S device!"
      }
    ]
  })
  
  const [gradients, setGradients] = useState<GradientSettings>(() => {
    const saved = localStorage.getItem('gradients')
    return saved ? JSON.parse(saved) : {
      color1: "rgba(255,20,147,0.8)",
      color2: "rgba(0,191,255,0.8)",
      color3: "rgba(147,51,234,0.8)"
    }
  })

  // Save settings whenever they change
  useEffect(() => {
    localStorage.setItem('eventName', eventName)
  }, [eventName])

  useEffect(() => {
    localStorage.setItem('eventDate', eventDate)
  }, [eventDate])

  useEffect(() => {
    localStorage.setItem('scheduleItems', JSON.stringify(scheduleItems))
  }, [scheduleItems])

  useEffect(() => {
    localStorage.setItem('gradients', JSON.stringify(gradients))
  }, [gradients])

  useEffect(() => {
    localStorage.setItem('chatLayoutSettings', JSON.stringify(layout))
  }, [layout])

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

  const addScheduleItem = () => {
    setScheduleItems([...scheduleItems, {
      time: "",
      title: "New Event",
      description: "Description"
    }])
  }

  const updateScheduleItem = (index: number, field: keyof ScheduleItem, value: string) => {
    const newItems = [...scheduleItems]
    newItems[index] = { ...newItems[index], [field]: value }
    setScheduleItems(newItems)
  }

  const removeScheduleItem = (index: number) => {
    setScheduleItems(scheduleItems.filter((_, i) => i !== index))
  }

  return (
    <div className="flex gap-6 h-screen bg-neutral-950 p-6 relative">
      {/* Control Panel Toggle - Updated styling */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="absolute top-4 right-4 z-50 bg-neutral-800/20 hover:bg-neutral-700 text-white/50 hover:text-white px-4 py-2 rounded-md font-mono transition-all duration-200 backdrop-blur-sm"
      >
        {showControls ? "Hide Controls" : "⚙️"}
      </button>

      {/* Customization Controls */}
      {showControls && (
        <div className="absolute right-4 top-16 w-96 bg-neutral-900/95 backdrop-blur-sm p-6 rounded-lg border border-neutral-700 z-50 overflow-y-auto max-h-[calc(100vh-8rem)]">
          <h3 className="text-xl font-mono text-white mb-4">Customize Display</h3>
          
          <div className="space-y-4">
            {/* Layout Controls */}
            <div>
              <label className="block text-sm font-mono text-neutral-400 mb-2">Layout</label>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={layout.leftScreenVisible}
                      onChange={(e) => setLayout({
                        ...layout,
                        leftScreenVisible: e.target.checked,
                        rightScreenVisible: e.target.checked ? layout.rightScreenVisible : true
                      })}
                      className="rounded bg-neutral-700"
                    />
                    <span className="text-sm text-neutral-300">Left Screen</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={layout.rightScreenVisible}
                      onChange={(e) => setLayout({
                        ...layout,
                        rightScreenVisible: e.target.checked,
                        leftScreenVisible: e.target.checked ? layout.leftScreenVisible : true
                      })}
                      className="rounded bg-neutral-700"
                    />
                    <span className="text-sm text-neutral-300">Right Screen</span>
                  </label>
                </div>
                {layout.leftScreenVisible && layout.rightScreenVisible && (
                  <div>
                    <label className="block text-sm text-neutral-300 mb-1">Left Screen Width</label>
                    <input
                      type="range"
                      min="20"
                      max="80"
                      value={layout.leftScreenWidth}
                      onChange={(e) => setLayout({
                        ...layout,
                        leftScreenWidth: parseInt(e.target.value)
                      })}
                      className="w-full"
                    />
                    <div className="text-sm text-neutral-400 text-center">{layout.leftScreenWidth}%</div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-mono text-neutral-400 mb-4">Event Name</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full bg-neutral-800 text-white px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-neutral-400 mb-4">Event Date</label>
              <input
                type="text"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-neutral-800 text-white px-3 py-2 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-neutral-400 mb-2">Gradient Colors</label>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={hexFromRgba(gradients.color1)}
                    onChange={(e) => setGradients({...gradients, color1: rgbaFromHex(e.target.value, 0.8)})}
                    className="w-12 h-8 rounded cursor-pointer"
                  />
                  <div className="flex-1 h-8 rounded relative overflow-hidden">
                    <div className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to right, ${gradients.color1} 0%, ${gradients.color1.replace('0.8', '0.4')} 50%, ${gradients.color1.replace('0.8', '0.1')} 75%, transparent 100%)`
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '8px 8px',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)'
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={hexFromRgba(gradients.color2)}
                    onChange={(e) => setGradients({...gradients, color2: rgbaFromHex(e.target.value, 0.8)})}
                    className="w-12 h-8 rounded cursor-pointer"
                  />
                  <div className="flex-1 h-8 rounded relative overflow-hidden">
                    <div className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to right, ${gradients.color2} 0%, ${gradients.color2.replace('0.8', '0.4')} 50%, ${gradients.color2.replace('0.8', '0.1')} 75%, transparent 100%)`
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '8px 8px',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)'
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={hexFromRgba(gradients.color3)}
                    onChange={(e) => setGradients({...gradients, color3: rgbaFromHex(e.target.value, 0.8)})}
                    className="w-12 h-8 rounded cursor-pointer"
                  />
                  <div className="flex-1 h-8 rounded relative overflow-hidden">
                    <div className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to right, ${gradients.color3} 0%, ${gradients.color3.replace('0.8', '0.4')} 50%, ${gradients.color3.replace('0.8', '0.1')} 75%, transparent 100%)`
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '8px 8px',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-mono text-neutral-400 mb-2">Schedule</label>
              <div className="space-y-4">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="bg-neutral-800 p-3 rounded-md">
                    <div className="flex justify-between mb-2">
                      <input
                        type="text"
                        value={item.time}
                        onChange={(e) => updateScheduleItem(index, 'time', e.target.value)}
                        className="w-24 bg-neutral-700 text-white px-2 py-1 rounded"
                        placeholder="Time"
                      />
                      <button
                        onClick={() => removeScheduleItem(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => updateScheduleItem(index, 'title', e.target.value)}
                      className="w-full bg-neutral-700 text-white px-2 py-1 rounded mb-2"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => updateScheduleItem(index, 'description', e.target.value)}
                      className="w-full bg-neutral-700 text-white px-2 py-1 rounded mb-2"
                      placeholder="Description"
                    />
                    <input
                      type="text"
                      value={item.highlight || ''}
                      onChange={(e) => updateScheduleItem(index, 'highlight', e.target.value)}
                      className="w-full bg-neutral-700 text-white px-2 py-1 rounded"
                      placeholder="Highlight (optional)"
                    />
                  </div>
                ))}
                <button
                  onClick={addScheduleItem}
                  className="w-full bg-neutral-700 hover:bg-neutral-600 text-white py-2 rounded-md"
                >
                  Add Schedule Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Screens with dynamic layout */}
      <div className="flex gap-6 w-full">
        {layout.leftScreenVisible && (
          <div 
            className={`rounded-3xl bg-neutral-900/30 backdrop-blur-sm p-8 flex flex-col border border-white/[0.3] relative overflow-hidden transition-all duration-300`}
            style={{ width: layout.rightScreenVisible ? `${layout.leftScreenWidth}%` : '100%' }}
          >
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 opacity-80">
                <div className="absolute w-full h-full animate-pulse"
                  style={{
                    background: `radial-gradient(circle at ${50}% ${50}%, ${gradients.color1} 0%, ${gradients.color1.replace('0.8', '0.4')} 25%, ${gradients.color1.replace('0.8', '0.1')} 50%, transparent 70%)`,
                    animation: 'moveGradient1 30s infinite linear',
                    transform: 'scale(2.5)'
                  }}
                />
                <div className="absolute w-full h-full animate-pulse delay-150"
                  style={{
                    background: `radial-gradient(circle at ${45}% ${45}%, ${gradients.color2} 0%, ${gradients.color2.replace('0.8', '0.4')} 25%, ${gradients.color2.replace('0.8', '0.1')} 50%, transparent 70%)`,
                    animation: 'moveGradient2 35s infinite linear',
                    transform: 'scale(2.5)'
                  }}
                />
                <div className="absolute w-full h-full animate-pulse delay-300"
                  style={{
                    background: `radial-gradient(circle at ${55}% ${55}%, ${gradients.color3} 0%, ${gradients.color3.replace('0.8', '0.4')} 25%, ${gradients.color3.replace('0.8', '0.1')} 50%, transparent 70%)`,
                    animation: 'moveGradient3 40s infinite linear',
                    transform: 'scale(2.5)'
                  }}
                />
              </div>
            </div>

            {/* Grid Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                backgroundColor: 'rgba(0, 0, 0, 0.05)'
              }}
            />

            {/* Animation Keyframes */}
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

            {/* Content */}
            <div className="relative z-10 mt-8">
              <h1 className="font-mono text-[7rem] font-bold text-neutral-100 tracking-tighter mb-12">
                {eventName}
              </h1>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="space-y-4">
                    <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-700/30 backdrop-blur-sm">
                      <h3 className="font-mono text-3xl text-neutral-200 font-medium mb-4 tracking-tight uppercase">{eventDate}</h3>
                      <div className="space-y-4">
                        {scheduleItems.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <span className="font-mono text-2xl text-neutral-400 w-28">{item.time}</span>
                            <div className="flex-1">
                              <span className="font-mono text-2xl text-neutral-300">{item.title}</span>
                              <p className="font-mono text-lg text-neutral-500 mt-1">{item.description}</p>
                              {item.highlight && (
                                <div className="mt-3 bg-purple-900/30 p-3 rounded-md border border-purple-600/30">
                                  <p className="font-mono text-lg text-purple-300">{item.highlight}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {layout.rightScreenVisible && (
          <div 
            className={`rounded-3xl bg-neutral-700/30 backdrop-blur-sm relative overflow-hidden border border-white/[0.3] transition-all duration-300`}
            style={{ width: layout.leftScreenVisible ? `${100 - layout.leftScreenWidth}%` : '100%' }}
          >
            {/* Right screen - QR Code and Animations (1/3) */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
              <div 
                className="absolute w-[200%] h-[200%] translate-y-[50%]"
                style={{
                  transform: 'perspective(1000px) rotateX(60deg) translateY(0%) translateZ(-100px)',
                  backgroundImage: `
                    repeating-linear-gradient(90deg, rgba(163, 163, 163, 0.35) 0px, rgba(163, 163, 163, 0.35) 1px, transparent 1px, transparent 60px),
                    repeating-linear-gradient(0deg, rgba(163, 163, 163, 0.35) 0px, rgba(163, 163, 163, 0.35) 1px, transparent 1px, transparent 60px)
                  `,
                  opacity: 0.7,
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

              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-neutral-700/30">
                <QRCodeSVG
                  value={chatUrl}
                  size={280}
                  level="H"
                  includeMargin={true}
                  className="bg-white p-4 rounded-lg"
                />
                <p className="font-mono text-center text-neutral-400 mt-6 text-lg tracking-tight uppercase">
                  Scan to join our community
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Add these helper functions at the top of the file, after the imports
function hexFromRgba(rgba: string): string {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (!match) return '#000000'
  const [, r, g, b] = match
  const toHex = (n: string) => parseInt(n).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function rgbaFromHex(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
} 