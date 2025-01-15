import { useEffect } from 'react'
import Layout from '../components/Layout'
import EarlyAccessBanner from '../components/EarlyAccessBanner'
import CompanyLogos from '../components/CompanyLogos'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
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
                  className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-neutral-950/30 backdrop-blur-xs text-neutral-100/70 rounded-lg border border-neutral-100/10 font-mono text-sm tracking-widest transition-all hover:text-neutral-100 hover:bg-neutral-950/40 hover:border-neutral-100/20 flex items-center justify-center"
                >
                  <span className="relative z-10 uppercase">2025 Chat</span>
                  <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-neutral-100/0 via-neutral-100/10 to-neutral-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </a>
                <a 
                  href="https://aaltoes2025.typeform.com/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-neutral-100/5 via-neutral-100/10 to-neutral-100/5 backdrop-blur-sm text-neutral-100 rounded-lg border border-neutral-100/30 font-mono text-sm tracking-widest transition-all hover:text-neutral-100 hover:from-neutral-100/10 hover:via-neutral-100/20 hover:to-neutral-100/10 hover:border-neutral-100/50 flex items-center justify-center"
                >
                  <span className="relative z-10 uppercase">Become a Member</span>
                  <div className="absolute inset-0 -m-[1px] rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 