import { useEffect } from 'react'
import Footer from '../../components/Footer'

function CodeOfConduct() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

          <div className="space-y-12">
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
              <h2 className="section-title">Repercussions of CoC Violations</h2>
              <p className="text-content">
                By attending events organised by Aaltoes, you agree to obey these rules. Unacceptable behaviour 
                will not be tolerated. Anyone asked to stop unacceptable behavior is expected to comply immediately. 
                If a participant engages in unacceptable behaviour, Aaltoes may take any action it deems appropriate, 
                including warning or expelling the offender from the event. For more egregious behaviour, Aaltoes may, 
                in its reasonable discretion, temporarily ban or permanently ban a participant from the community. 
                Continuous behaviour that violates the code of conduct will also lead to permanent ban from all 
                Aaltoes events and activities.
              </p>
            </div>

            <div>
              <h2 className="section-title">What to Do If You Encounter CoC Violations?</h2>
              <div className="space-y-4 text-content">
                <p>
                  The Aaltoes Code of Conduct has been established to secure that every attendee in our event feels 
                  safe and respected. If you are subjected to unacceptable behavior, notice that someone else is being 
                  subjected to unacceptable behaviour, or have any other concerns, please notify Aaltoes event staff 
                  or contact the harassment contact people (below) as soon as possible.
                </p>
                <p>
                  Aaltoes event staff will be available to assist those experiencing unacceptable behavior to feel 
                  safe for the duration of the event. All events have designated harassment contact people introduced 
                  at the beginning of events and can be distinguished by their yellow armbands. All raised cases will 
                  be handled confidentially and thoroughly, involving all parties and if necessary, third parties such 
                  as the police.
                </p>
                <p>
                  <a href="https://aaltoes2025.typeform.com/to/ZXPDN0cs" className="text-white/60 hover:text-white/90 transition-colors">
                    Form for reporting harassment
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="section-title">Our Harassment Contact Persons</h2>
              <div className="space-y-8">
                <div className="text-content">
                  <p className="text-white/90 font-medium">Siiri Lautamies</p>
                  <div className="space-y-1 mt-2">
                    <p>+358 44 019 99 53</p>
                    <p>telegram: @siirimies</p>
                  </div>
                </div>

                <div className="text-content">
                  <p className="text-white/90 font-medium">Doni Peltojarvi</p>
                  <div className="space-y-1 mt-2">
                    <p>+358 40 773 4436</p>
                    <p>telegram: @donijar</p>
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