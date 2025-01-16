import { useEffect } from 'react'
import Layout from '../components/Layout'
import { FaInfoCircle } from 'react-icons/fa'

export default function LogoBank() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <h1 className="page-title">Logo Bank</h1>
      <div className="title-divider" />
      
      <div className="content-section">
        <div className="space-y-12">
          <div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 mb-8 flex items-center gap-3">
              <FaInfoCircle className="text-white/70 flex-shrink-0" />
              <p className="text-white/70 text-sm">
                Our brand assets bank is continuously updated. Check back regularly for new materials and guidelines.
              </p>
            </div>
            
            <h2 className="section-title mb-3">Brand Assets</h2>
            <p className="text-content mb-8">
              Download our official logos and brand assets. Please follow our brand guidelines when using these materials.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* White Logo */}
              <div className="group relative bg-neutral-950/30 backdrop-blur-sm border border-neutral-100/10 rounded-lg p-8 flex flex-col items-center justify-center gap-6">
                <div className="bg-black rounded-lg p-6 w-full flex justify-center">
                  <img 
                    src="/bank/aaltoes_white.svg" 
                    alt="Aaltoes 2025 Logo White" 
                    className="h-16 w-auto opacity-50 group-hover:opacity-100 transition-all duration-150"
                  />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <a 
                    href="/bank/aaltoes_white.png" 
                    download
                    className="w-full px-4 py-3 text-sm text-neutral-100/50 hover:text-neutral-100/70 border border-neutral-100/10 hover:border-neutral-100/20 rounded-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Download PNG</span>
                  </a>
                  <a 
                    href="/bank/aaltoes_white.svg" 
                    download
                    className="w-full px-4 py-3 text-sm text-neutral-100/50 hover:text-neutral-100/70 border border-neutral-100/10 hover:border-neutral-100/20 rounded-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Download SVG</span>
                  </a>
                </div>
                <span className="text-sm text-neutral-100/50">
                  Logo White
                </span>
              </div>

              {/* Dark Logo */}
              <div className="group relative bg-neutral-950/30 backdrop-blur-sm border border-neutral-100/10 rounded-lg p-8 flex flex-col items-center justify-center gap-6">
                <div className="bg-white rounded-lg p-6 w-full flex justify-center">
                  <img 
                    src="/bank/aaltoes_dark.svg" 
                    alt="Aaltoes 2025 Logo Dark" 
                    className="h-16 w-auto opacity-50 group-hover:opacity-100 transition-all duration-150"
                  />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <a 
                    href="/bank/aaltoes_dark.png" 
                    download
                    className="w-full px-4 py-3 text-sm text-neutral-100/50 hover:text-neutral-100/70 border border-neutral-100/10 hover:border-neutral-100/20 rounded-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Download PNG</span>
                  </a>
                  <a 
                    href="/bank/aaltoes_dark.svg" 
                    download
                    className="w-full px-4 py-3 text-sm text-neutral-100/50 hover:text-neutral-100/70 border border-neutral-100/10 hover:border-neutral-100/20 rounded-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Download SVG</span>
                  </a>
                </div>
                <span className="text-sm text-neutral-100/50">
                  Logo Dark
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 