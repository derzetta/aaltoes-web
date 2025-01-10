import Footer from '../../components/Footer'

function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">Code of Conduct</h1>
        <div className="title-divider" />

        <div className="content-section">
          <p className="text-content mb-12">
            All Aaltoes events have a zero tolerance for all intimidating and disrespectful behaviour. 
            When attending Aaltoes events, every attendee agrees to respect everyone regardless of their 
            appearance, gender, race, religion, age, sexual orientation, disability or other personal attributes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Behaviour We Don't Tolerate</h2>
              <ul className="text-content space-y-3 list-disc pl-4">
                <li>Verbal, disrespectful comments towards any attendee or organiser</li>
                <li>Intimidating behaviour or violence towards any attendee or organiser</li>
                <li>Inappropriate physical contact towards any attendee or organiser</li>
                <li>Sustained disruption of talks, other events or overall daily activities in Aaltoes</li>
                <li>Advocating for or encouraging any of the above behaviour</li>
              </ul>
            </div>

            <div>
              <h2 className="section-title">Harassment Contact Persons</h2>
              <div className="space-y-8">
                <div className="text-content">
                  <p className="text-white/90 font-medium">Patricia Sarkkinen (she/her)</p>
                  <div className="space-y-1 mt-2">
                    <p>patricia.sarkkinen@aaltoes.com</p>
                    <p>+358 45 164 0640</p>
                    <p>TG: @patariisi</p>
                  </div>
                </div>

                <div className="text-content">
                  <p className="text-white/90 font-medium">Tomi Tan-Röholm (he/him)</p>
                  <div className="space-y-1 mt-2">
                    <p>tomi.tan-roholm@aaltoes.com</p>
                    <p>+358 40 678 3877</p>
                    <p>TG: @Tomi_tr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CodeOfConduct 