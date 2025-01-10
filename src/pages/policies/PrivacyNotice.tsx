import Footer from '../../components/Footer'

function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">Privacy Notice</h1>
        <div className="title-divider" />

        <div className="content-section">
          <div>
            <h2 className="section-title">1. The Controller</h2>
            <p className="text-content">
              The controller is Aaltoes (Aalto Entrepreneurship Society ry, business ID 2291638-6). 
              All contacts and inquiries should be addressed to Nantte Kivinen (nantte.kivinen@aaltoes.com).
            </p>
          </div>

          <div>
            <h2 className="section-title">2. Processing of Personal Data</h2>
            <p className="text-content">
              We process only personal data obtained from you directly or via a person who enrols you to or 
              applies to our events/programs on your behalf. The personal data comprises of the information 
              given when registering to/purchasing a ticket to/applying in our event/program.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyNotice 