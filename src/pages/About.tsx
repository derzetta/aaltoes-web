import { useEffect } from 'react'
import Footer from '../components/Footer'
import EarlyAccessBanner from '../components/EarlyAccessBanner'
import CompanyLogos from '../components/CompanyLogos'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">About Aaltoes</h1>
        <div className="title-divider" />
        <EarlyAccessBanner />
        
        <div className="content-section">
          <div className="space-y-12">
            <div>
              <h2 className="section-title">Our Mission</h2>
              <div className="text-content space-y-4">
                <p>
                  Aaltoes (Aalto Entrepreneurship Society) is Finland's largest and most active student-run entrepreneurship society. 
                  Our mission is to foster the entrepreneurial spirit and create a thriving startup ecosystem within Aalto University 
                  and the broader Finnish community.
                </p>
                <p>
                  Founded in 2009, we've grown from a small group of passionate students into a cornerstone of the Nordic startup 
                  ecosystem, helping launch numerous successful startups and initiatives that have shaped the entrepreneurial 
                  landscape in Finland.
                </p>
              </div>
            </div>
            <div className="mt-36">
              <h2 className="section-title">Founded by our alumni</h2>
              <CompanyLogos />
            </div>
            <div className="mt-36">
              <h2 className="section-title">Join Our Community</h2>
              <div className="text-content space-y-4">
                <p>
                  Whether you're a student, entrepreneur, or simply interested in the startup ecosystem, there are many 
                  ways to get involved with Aaltoes. Join our events, become a member, or reach out to collaborate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a 
                    href="https://t.me/+1P42HmirI81lYTMy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-black/30 backdrop-blur-xs text-white/70 rounded-lg border border-white/10 font-mono text-sm tracking-widest transition-all hover:text-white hover:bg-black/40 hover:border-white/20 flex items-center justify-center"
                  >
                    <span className="relative z-10 uppercase">2025 Chat</span>
                    <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </a>
                  <a 
                    href="https://aaltoes2025.typeform.com/membership"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm text-white rounded-lg border border-white/30 font-mono text-sm tracking-widest transition-all hover:text-white hover:from-white/10 hover:via-white/20 hover:to-white/10 hover:border-white/50 flex items-center justify-center"
                  >
                    <span className="relative z-10 uppercase">Become a Member</span>
                    <div className="absolute inset-0 -m-[1px] rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About 