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
        <div className="space-y-8">

            <div>
              <h2 className="section-title mb-3">3D Design</h2>
              <p>Katerina Tchilinguirov</p>
              <p className="text-white/60 text-sm mt-1">Led by Tetsu Fujimura</p>
            </div>

            <div>
              <h2 className="section-title mb-3">Content</h2>
              <p>Yera Slam</p>
            </div>

            <div>
              <h2 className="section-title mb-3">Web Design & Development</h2>
              <p>Doni Peltojärvi</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 