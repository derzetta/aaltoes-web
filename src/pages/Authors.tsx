import { useEffect } from 'react'
import Footer from '../components/Footer'

export default function Authors() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">Credits</h1>
        <div className="title-divider" />
        
        <div className="content-section">
        <div className="space-y-12">

            <div>
              <h2 className="section-title mb-3">3D Logo Development</h2>
              <p>Katerina Tchilinguirov</p>
              <p>Doni Peltojärvi</p>
            </div>

            <div>
              <h2 className="section-title mb-3">Content</h2>
              <p>Yera Slam</p>
              <p>Tetsu Fujimura</p>
              <p>Doni Peltojärvi</p>
              <br / >
              <p>All previous boards</p>
            </div>

            <div>
              <h2 className="section-title mb-3">Web Design & Development</h2>
              <p>Doni Peltojärvi</p>
            </div>

            <div>
              <p className="text-white/60">Noticed a mistake? Please let us know at <a href="mailto:board@aaltoes.com" className="hover:text-white/90 transition-colors">board@aaltoes.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 