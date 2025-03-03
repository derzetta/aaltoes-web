import { useEffect } from 'react'
import Layout from '../components/Layout'

export default function Authors() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <h1 className="page-title">Credits</h1>
      <div className="title-divider" />
      
      <div className="content-section">
        <div className="space-y-12">
          <div>
            <h2 className="section-title mb-3">3D Logo Development</h2>
            <p className="text-zinc-400 tracking-wide">Katerina Tchilinguirov</p>
            <p className="text-zinc-400 tracking-wide">Doni Peltojärvi</p>
          </div>

          <div>
            <h2 className="section-title mb-3">Content</h2>
            <p className="text-zinc-400 tracking-wide">Yera Slam</p>
            <p className="text-zinc-400 tracking-wide">Tetsu Fujimura</p>
            <p className="text-zinc-400 tracking-wide">Doni Peltojärvi</p>
            <br />
            <p className="text-zinc-400 tracking-wide">All previous boards</p>
          </div>

          <div>
            <h2 className="section-title mb-3">Web Design & Development</h2>
            <p className="text-zinc-400 tracking-wide tracking-wide">Doni Peltojärvi</p>
          </div>

          <div>
            <p className="text-zinc-100/60 tracking-wide">
              Noticed a mistake? Please let us know at{' '}
              <a href="mailto:board@aaltoes.com" className="hover:text-zinc-100/90 transition-colors">
                board@aaltoes.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
} 