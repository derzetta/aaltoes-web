import { useEffect } from 'react'
import Footer from '../components/Footer'

function Events() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="page-container pb-24">
        <h1 className="page-title">Events</h1>
        <div className="title-divider" />
        
        <div className="content-section">
          <div className="space-y-8">
            <p className="text-content">
              Join us at our upcoming events to connect with fellow entrepreneurs, 
              learn from experienced founders, and be part of the Aaltoes community.
            </p>

            <div className="relative w-full aspect-[4/3] bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
              <iframe
                src="https://lu.ma/embed/calendar/cal-Dt7ZTA5Hc4gfnxp/events?theme=dark&hideDescription=1&backgroundColor=rgb(0,0,0)&primaryColor=rgb(255,255,255)&textColor=rgba(255,255,255,0.7)"
                className="absolute inset-0 w-full h-full"
                style={{ 
                  border: 'none',
                  borderRadius: '8px',
                  background: 'transparent'
                }}
                allowFullScreen
              />
            </div>

            <div className="flex justify-center relative z-0">
              <a 
                href="https://lu.ma/aaltoes-calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-black/30 backdrop-blur-sm text-white/70 rounded-lg border border-white/10 font-mono text-sm tracking-widest transition-all hover:text-white hover:bg-black/40 hover:border-white/20 inline-flex items-center justify-center"
              >
                <span className="relative z-10 uppercase">Open Full Calendar</span>
                <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Events 