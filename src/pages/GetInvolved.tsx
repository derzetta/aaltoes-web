import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function GetInvolved() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <h1 className="page-title">Get Involved</h1>
      <div className="title-divider" />
      
      <div className="content-section">
        <div className="space-y-12">
          <div>
            <p className="text-content">
              Join Aaltoes in 2025 and be part of Finland's most vibrant entrepreneurial community. 
              Whether you're a student, entrepreneur, or simply interested in the startup ecosystem, 
              there are multiple ways to engage with our community.
            </p>
          </div>

          <div>
            <h2 className="section-title">Engagement Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Events Card */}
              <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg overflow-hidden group transition-all hover:bg-zinc-900/30 hover:border-zinc-100/20">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h3 className="text-zinc-200 font-medium">2025 Events</h3>
                  </div>
                  
                  <p className="text-zinc-400 mb-6 flex-grow">
                    Join our curated lineup of events designed to deliver insights, expert advice, and inspiration on entrepreneurship. 
                    From workshops to hackathons, there's something for everyone.
                  </p>
                  
                  <a 
                    href="https://lu.ma/aaltoes-calendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="base-button inline-flex items-center justify-center self-start"
                  >
                    <span className="relative z-10 uppercase">View Events</span>
                  </a>
                </div>
              </div>

              {/* Community Card */}
              <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg overflow-hidden group transition-all hover:bg-zinc-900/30 hover:border-zinc-100/20">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <h3 className="text-zinc-200 font-medium">Community Chat</h3>
                  </div>
                  
                  <p className="text-zinc-400 mb-6 flex-grow">
                    Connect with like-minded entrepreneurs, share ideas, and stay updated on the latest opportunities. 
                    Our Telegram community is the hub for real-time networking and collaboration.
                  </p>
                  
                  <a 
                    href="https://t.me/+1P42HmirI81lYTMy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="base-button inline-flex items-center justify-center self-start"
                  >
                    <span className="relative z-10 uppercase">Join Chat</span>
                  </a>
                </div>
              </div>

              {/* Volunteer Card */}
              <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg overflow-hidden group transition-all hover:bg-zinc-900/30 hover:border-zinc-100/20">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h3 className="text-zinc-200 font-medium">Volunteer</h3>
                  </div>
                  
                  <p className="text-zinc-400 mb-6 flex-grow">
                    Help shape the future of entrepreneurship in Finland by volunteering with Aaltoes. 
                    Gain valuable experience, expand your network, and make a tangible impact on the startup ecosystem.
                  </p>
                  
                  <a 
                    href="https://form.typeform.com/to/mGQRO8Te"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="base-button inline-flex items-center justify-center self-start"
                  >
                    <span className="relative z-10 uppercase">Apply Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="section-title">Benefits of Involvement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                <h3 className="subsection-title">For Students</h3>
                <p className="text-content">
                  Gain practical experience in entrepreneurship, expand your professional network, and develop skills that will set you apart in your career. 
                  Our community provides a supportive environment to explore your interests and potential.
                </p>
              </div>
              <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                <h3 className="subsection-title">For Entrepreneurs</h3>
                <p className="text-content">
                  Connect with like-minded founders, access resources and mentorship, and find potential co-founders or team members. 
                  Leverage our network to accelerate your startup journey and overcome challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center relative z-0">
            <Link 
              to="/about"
              className="base-button inline-flex items-center justify-center"
            >
              <span className="relative z-10 uppercase">Learn More About Aaltoes</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
} 