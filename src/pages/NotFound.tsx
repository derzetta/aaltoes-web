import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-4xl font-light mb-4">404</h1>
        <p className="text-neutral-100/60 mb-8">Page not found</p>
        <Link 
          to="/"
          className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-neutral-950/30 backdrop-blur-xs text-neutral-100/70 rounded-lg border border-neutral-100/10 font-mono text-sm tracking-widest transition-all hover:text-neutral-100 hover:bg-neutral-950/40 hover:border-neutral-100/20 flex items-center justify-center"
        >
          <span className="relative z-10 uppercase">Back to Home</span>
          <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-neutral-100/0 via-neutral-100/10 to-neutral-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </Link>
      </div>
    </Layout>
  )
} 