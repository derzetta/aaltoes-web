import Footer from '../../components/Footer'

function AssociationRules() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">Association Rules</h1>
        <div className="title-divider" />

        <div className="content-section">
          <p className="text-content mb-12">
            Our association is registered in Finland, which is why our official association rules are written in Finnish. 
            For any questions regarding these rules, please contact us.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="section-title">1. Yhdistyksen ja kotipaikka</h2>
              <p className="text-content">
                Yhdistyksen nimi on Aalto Entrepreneurship Society ry, sen kotipaikka on Espoo ja sen virallinen kieli on suomi.
              </p>
            </div>

            <div>
              <h2 className="section-title">2. Tarkoitus ja toiminta</h2>
              <div className="space-y-4 text-content">
                <p>
                  Yhdistyksen tarkoituksena on edistää yrittäjyysmyönteistä ja innovatiivista kulttuuria, 
                  luoda sekä tukea yrittäjämäisiä oppikokemuksia, vaalia yrittäjähenkeä, ja toimia jäsentensä yhteistyöelimenä.
                </p>
                <p>
                  Tarkoituksensa toteuttamiseksi yhdistys järjestää tapahtumia sekä oppimiskokemuksia, 
                  mitkä kasvattavat yhteisön yrittäjähenkistä ajattelutapaa sekä tukee heidän kehittymistä ja kasvua läpi vuoden.
                </p>
                {/* Continue with other paragraphs... */}
              </div>
            </div>

            {/* Continue with sections 3-13... */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AssociationRules 