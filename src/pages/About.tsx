import { useEffect } from 'react'
import Layout from '../components/Layout'
import CompanyLogos from '../components/CompanyLogos'
import { Link } from 'react-router'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <h1 className="page-title">About Aaltoes</h1>
      <div className="title-divider" />
      
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
          
          {/* Key Stats Section - moved under mission */}
          <div className="mt-36">
            <h2 className="section-title">#1 student-led entrepreneurship community of Europe</h2>
            
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
                <div className="py-6 px-4 text-center">
                  <h3 className="text-3xl font-bold text-zinc-100 mb-3 font-mono tracking-tight">~600</h3>
                  <p className="text-zinc-400 uppercase tracking-wider text-sm font-mono">MEMBERS</p>
                </div>
                
                <div className="py-6 px-4 text-center">
                  <h3 className="text-3xl font-bold text-zinc-100 mb-3 font-mono tracking-tight">€1,2B+</h3>
                  <p className="text-zinc-400 uppercase tracking-wider text-sm font-mono">RAISED BY ALUMNI</p>
                </div>
                
                <div className="py-6 px-4 text-center">
                  <h3 className="text-3xl font-bold text-zinc-100 mb-3 font-mono tracking-tight">11000+</h3>
                  <p className="text-zinc-400 uppercase tracking-wider text-sm font-mono">JOBS CREATED</p>
                </div>
              </div>
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
                  className="base-button inline-flex items-center justify-center"
                >
                  <span className="relative z-10 uppercase">2025 Chat</span>
                </a>
                <a 
                  href="https://form.typeform.com/to/T93m5bJm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center"
                >
                  <span className="relative z-10 uppercase">Become a Member</span>
                </a>
                <Link 
                  to="/team" 
                  className="base-button inline-flex items-center justify-center"
                >
                  <span className="relative z-10 uppercase">Meet the Team 2025</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 