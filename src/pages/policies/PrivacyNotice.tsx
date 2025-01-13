import { useEffect } from 'react'
import Footer from '../../components/Footer'

function PrivacyNotice() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">Privacy Notice</h1>
        <div className="title-divider" />

        <div className="content-section">
          <div className="space-y-12">
            <div>
              <h2 className="section-title">1. The Controller</h2>
              <p className="text-content">
                The controller is Aaltoes (Aalto Entrepreneurship Society ry, business ID 2291638-6). 
                All contacts and inquiries should be addressed to Yeralkhan Slam (yera.slam@aaltoes.com).
              </p>
            </div>

            <div>
              <h2 className="section-title">2. Processing of Personal Data</h2>
              <div className="space-y-4 text-content">
                <p>
                  We process only personal data obtained from you directly or via a person who enrols you to or 
                  applies to our events/programs on your behalf. The personal data comprises of the information 
                  given when registering to/purchasing a ticket to/applying in our event/program.
                </p>
                <p>
                  We process your personal data to register you to our events/programs, to organise the events/programs, 
                  to provide you with information on our future events/programs, and to develop the events/programs 
                  and our other operations.
                </p>
                <p>
                  We process your personal data on the basis of the commercial agreement between you and us (GDPR Art. 6.1(b)), 
                  our legitimate interests that arise when you register for an event/a program organised by us (GDPR Art. 6.1(f)), 
                  and to comply with the legal obligations applicable to us (GDPR art. 6(c)), such as accounting and consumer protection.
                </p>
                <p>
                  In some cases, we may ask your consent to some other type of processing. In such case, we will inform you 
                  of the respective purposes of processing when requesting the consent and such processing is conducted only 
                  subject to the receipt of appropriate consent.
                </p>
              </div>
            </div>

            <div>
              <h2 className="section-title">3. Retention Period</h2>
              <div className="space-y-4 text-content">
                <p>
                  We mainly retain your data for the period required to organise the events/programs. After the event/program, 
                  your data is used to the extent required for the other purposes defined above, and anonymised or deleted 
                  without further delay once a basis for retention no longer exists.
                </p>
                <p>
                  Your contact details may be retained and used for marketing purposes, unless you object to such use.
                </p>
                <p>
                  We evaluate the necessity and accuracy of the personal data on a regular basis.
                </p>
              </div>
            </div>

            <div>
              <h2 className="section-title">4. Recipients of Personal Data</h2>
              <div className="space-y-4 text-content">
                <p>
                  We may disclose personal data to our cooperation partners to organise our events/programs and to promote 
                  cooperation that enables the events/programs, in which case such disclosures may also be based on the 
                  legitimate interest of our cooperation partners. We guarantee that your right to privacy is not endangered 
                  by such disclosures.
                </p>
                <p>
                  Your data may be disclosed to authorities if required by applicable law.
                </p>
              </div>
            </div>

            <div>
              <h2 className="section-title">5. Your Rights as a Data Subject</h2>
              <div className="space-y-4 text-content">
                <p>You have a right:</p>
                <ol className="list-decimal pl-4 space-y-2">
                  <li>to request access to and rectification or erasure of your personal data;</li>
                  <li>
                    to request that the processing of your personal data is restricted or to object to the 
                    processing of your personal data;
                  </li>
                  <li>
                    to certain preconditions, to receive your personal data in a structured, commonly used and 
                    machine-readable format and to transmit that data to another controller.
                  </li>
                </ol>
                <p>
                  You may exercise the aforementioned rights by contacting the contact person defined above. Where the 
                  processing is based on your consent, you have the right to withdraw your consent at any time. Please 
                  notice that this will not affect the lawfulness of processing based on consent before the withdrawal.
                </p>
                <p>
                  In case you consider that your rights under the data protection laws are infringed, you may lodge a 
                  complaint with a supervisory authority (Finnish Data Protection Ombudsman).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyNotice 