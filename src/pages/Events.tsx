import { useEffect } from 'react'
import Layout from '../components/Layout'
import EarlyAccessBanner from '../components/EarlyAccessBanner'

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <h1 className="page-title">Events</h1>
      <div className="title-divider" />
      <EarlyAccessBanner />
      
      <div className="content-section">
        <div className="space-y-8">
          <p className="text-content">
            You're already invited! Explore our curated lineup of events designed to deliver top-tier insights, expert advice, and fresh inspiration on entrepreneurship, startups, and more. 
          </p>
          <p className="text-content">
            All our events are free and open to everyone—jump in below or visit the calendar to secure your spot!
          </p>

          <div className="relative w-full aspect-[4/3] bg-neutral-950/30 backdrop-blur-sm rounded-lg border border-neutral-100/10 overflow-hidden">
            <iframe
              src="https://lu.ma/embed/calendar/cal-Dt7ZTA5Hc4gfnxp/events?theme=dark&hideDescription=1&backgroundColor=rgb(0,0,0)&primaryColor=rgb(255,255,255)&textColor=rgba(255,255,255,0.7)&forceTheme=dark"
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
              className="base-button inline-flex items-center justify-center"
            >
              <span className="relative z-10 uppercase">Open Full Calendar</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
} 