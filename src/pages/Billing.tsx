import { useEffect } from 'react'
import Layout from '../components/Layout'

export default function Billing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <h1 className="page-title">Billing Information</h1>
      <div className="title-divider" />
      
      <div className="content-section">
        {/* Keep existing content */}
        <div className="space-y-8">
          <div>
            <h2 className="section-title">Company Details</h2>
            <div className="text-content space-y-4">
              {/* Keep existing content */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 