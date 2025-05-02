import { useEffect } from 'react'
import Layout from '../components/Layout'

function BillingInfo() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <h1 className="page-title">Billing Information</h1>
      <div className="title-divider" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title">Contact Information</h2>
          <div className="space-y-2 text-content">
            <p className="text-zinc-100 text-lg">Yeralkhan Slam</p>
            <p>Board Member, Partnerships and Finance</p>
            <a 
              href="mailto:yera.slam@aaltoes.com"
              className="text-zinc-400 hover:text-zinc-100 underline transition-colors block mt-2"
            >
              yera.slam@aaltoes.com
            </a>
          </div>
        </div>

        <div>
          <h2 className="section-title">Bank & Payment Details</h2>
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title">Payment Terms</h3>
              <div className="text-content space-y-1">
                <p>Payment term: 21 days</p>
                <p>All invoices are sent electronically</p>
              </div>
            </div>

            <div>
              <h3 className="subsection-title">Bank Details</h3>
              <div className="text-content space-y-1">
                <p>Aalto Entrepreneurship Society ry</p>
                <p>IBAN: FI70 1112 3000 3777 51</p>
                <p>BIC/SWIFT: NDEAFIHH</p>
                <p>Bank: Nordea</p>
              </div>
            </div>

            <div>
              <h3 className="subsection-title">E-invoicing</h3>
              <div className="text-content space-y-1">
                <p>Operator: Apix Messaging Oy (003723327487)</p>
                <p>E-invoicing address: 003722916386</p>
                <p>OVT-code: 003722916386</p>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100/10">
              <p className="text-zinc-100/60">VAT Number: FI22916386</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BillingInfo 