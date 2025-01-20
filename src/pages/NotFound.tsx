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
  className="base-button inline-flex items-center justify-center"
>
  <span className="relative z-10 uppercase">Back to Home</span>
</Link>
      </div>
    </Layout>
  )
} 