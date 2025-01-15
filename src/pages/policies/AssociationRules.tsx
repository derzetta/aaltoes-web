import { useEffect } from 'react'
import Layout from '../../components/Layout'

function AssociationRules() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
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
              <p>
                Yhdistys pitää yhteyttä yrittäjyyttä edistäviin sidosryhmiin sekä mahdollisesti korkeakouluihin 
                edistääkseen yhteistyösuhteita. Lisäksi yhdistyksen tarkoituksen edistämiseksi, yhdistys tarpeen 
                mukaan julkaisee tiedotteita, lehtiä tai muita julkaisuja.
              </p>
              <p>
                Toimintansa tukemiseksi yhdistys voi ottaa vastaan lahjoituksia ja avustuksia sekä testamentattuja varoja.
              </p>
              <p>
                Lisäksi yhdistys voi toimeenpanna rahankeräyksiä, arpajaisia, huvitilaisuuksia ja muita vastaavia 
                tapahtumia hankittuaan asianmukaisen luvan.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">3. Jäsenet</h2>
            <div className="space-y-4 text-content">
              <p>
                Yhdistyksellä voi olla varsinaisia jäseniä, alumnijäseniä, kannatusjäseniä sekä kunniapuheenjohtaja ja kunniajäseniä.
              </p>
              <p>
                Yhdistyksen varsinaiseksi jäseneksi voi liittyä jokainen, joka hyväksyy yhdistyksen tarkoituksen ja säännöt.
              </p>
              <p>
                Alumnijäseneksi voidaan hyväksyä jokainen, joka on ollut yhdistyksen varsinaisena jäsenenä. Yhdistyksen 
                hallituksella on mahdollisuus kerran, tai useamman kerran vuodessa päivittää jäsenrekisteriä hallituksen 
                kokouksen päätöksen mukaisesti. Yhdistys lähettää jäsenille jäsenrekisterin päivityslomakkeen postilla, 
                sähköpostilla tai muilla tavoin. Varsinainen jäsen siirtyy suostumuksellaan alumnijäseneksi ja 
                alumnijäsenrekisteriin. Alumnijäsenillä on velvollisuus maksaa jäsenmaksua, mutta alumnijäsenillä ei ole äänioikeutta.
              </p>
              <p>
                Kannatusjäseneksi voidaan hyväksyä jokainen, joka haluaa tukea yhdistyksen tarkoitusta ja toimintaa. 
                Kannatusjäsenillä on velvollisuus maksaa jäsenmaksua, mutta kannatusjäsenillä ei ole äänioikeutta.
              </p>
              <p>
                Kunniapuheenjohtajaksi tai kunniajäseneksi voidaan hallituksen esityksestä yhdistyksen kokouksessa kutsua 
                henkilö, joka on huomattavasti edistänyt ja tukenut yhdistyksen toimintaa. Kunniajäsenillä ja 
                kunniapuheenjohtajalla ei ole äänioikeutta. Kunniapuheenjohtajalla ja kunniajäsenillä ei ole velvollisuutta 
                maksaa jäsenmaksua.
              </p>
              <p>
                Jäsenet hyväksyy hakemuksesta yhdistyksen hallitus.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">4. Jäsenen eroaminen ja erottaminen</h2>
            <div className="space-y-4 text-content">
              <p>
                Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä kirjallisesti hallitukselle tai sen 
                puheenjohtajalle taikka ilmoittamalla erosta yhdistyksen kokouksessa merkittäväksi pöytäkirjaan.
              </p>
              <p>
                Hallitus voi erottaa jäsenen yhdistyksestä, jos jäsen on jättänyt täyttämättä ne velvoitukset, 
                joihin hän on yhdistykseen liittymällä sitoutunut tai on menettelyllään yhdistyksessä tai sen 
                ulkopuolella huomattavasti vahingoittanut yhdistystä tai ei enää täytä laissa taikka yhdistyksen 
                säännöissä mainittuja jäsenyyden ehtoja.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">5. Liittymis- ja jäsenmaksu</h2>
            <div className="space-y-4 text-content">
              <p>
                Varsinaisilta jäseniltä, alumnijäseniltä sekä kannatusjäseniltä perittävän liittymis- ja 
                jäsenmaksun suuruudesta erikseen jokaiselle ryhmälle päättää yhdistyksen hallitus.
              </p>
              <p>
                Varsinaisten jäsenten, alumnijäsenten ja kannatusjäsenten jäsenmaksu voi olla erisuuruinen.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">6. Hallitus</h2>
            <div className="space-y-4 text-content">
              <p>
                Yhdistyksen asioita hoitaa hallitus, johon kuuluu vuosikokouksessa valitut puheenjohtaja ja 
                4-10 muuta varsinaista jäsentä. Tämän lisäksi valitaan 0-10 varajäsentä.
              </p>
              <p>Hallituksen toimikausi on kalenterivuosi.</p>
              <p>
                Hallitus valitsee keskuudestaan varapuheenjohtajan sekä nimeää keskuudestaan tai ulkopuoleltaan 
                sihteerin, rahastonhoitajan ja muut tarvittavat toimihenkilöt.
              </p>
              <p>
                Hallitus kokoontuu puheenjohtajan tai hänen estyneenä ollessaan varapuheenjohtajan kutsusta, 
                kun se katsoo siihen olevan aihetta tai kun vähintään puolet hallituksen jäsenistä sitä vaatii.
              </p>
              <p>
                Hallitus on päätösvaltainen, kun vähintään puolet sen jäsenistä, puheenjohtaja tai 
                varapuheenjohtaja mukaan luettuna on läsnä. Äänestykset ratkaistaan yksinkertaisella äänten 
                enemmistöllä. Äänten mennessä tasan ratkaisee puheenjohtajan ääni, vaaleissa kuitenkin arpa.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">7. Yhdistyksen nimen kirjoittaminen</h2>
            <p className="text-content">
              Yhdistyksen nimen kirjoittaa hallituksen puheenjohtaja, rahastonhoitaja kukin erikseen tai 
              hallituksen muut jäsenet kaksi yhdessä.
            </p>
          </div>

          <div>
            <h2 className="section-title">8. Tilikausi ja tilintarkastus</h2>
            <div className="space-y-4 text-content">
              <p>Yhdistyksen tilikausi on kalenterivuosi, joka on myös tilintarkastajien toimikausi.</p>
              <p>
                Tilinpäätös tarvittavine asiakirjoineen ja hallituksen vuosikertomus on annettava 
                tilintarkastajille viimeistään kolme viikkoa ennen kevätkokousta. Tilintarkastajien tulee 
                antaa kirjallinen lausuntonsa viimeistään kaksi viikkoa ennen kevätkokousta hallitukselle.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">9. Yhdistyksen kokoukset</h2>
            <div className="space-y-4 text-content">
              <p>Yhdistys pitää vuosittain kaksi varsinaista kokousta.</p>
              <p>
                Yhdistyksen kevätkokous pidetään tammi-maaliskuussa ja syyskokous syys-joulukuussa hallituksen 
                määräämänä päivänä. Yhdistyksen kokouksissa on vain jokaisella varsinaisella jäsenellä yksi ääni. 
                Kannattavalla jäsenellä sekä kunniajäsenellä ja kunniapuheenjohtajalla sekä alumnijäsenellä on 
                kokouksessa läsnäolo- ja puheoikeus.
              </p>
              <p>
                Ylimääräinen kokous pidetään, kun yhdistyksen kokous niin päättää, kun hallitus katsoo siihen 
                olevan aihetta, tai kun vähintään yksi kymmenesosa (1/10) äänioikeutetuista jäsenistä sitä vaatii. 
                Kokous on pidettävä kolmenkymmenen vuorokauden kuluessa siitä, kun vaatimus sen pitämisestä on 
                esitetty hallitukselle.
              </p>
              <p>
                Yhdistyksen kokouksen päätökseksi tulee, ellei säännöissä ole toisin määrätty, se mielipide, 
                jota on kannattanut yli puolet annetuista äänistä. Äänten mennessä tasan ratkaisee kokouksen 
                puheenjohtajan ääni, vaaleissa kuitenkin arpa.
              </p>
              <p>
                Viranomaisten tai julkisen sektorin asettamissa poikkeustilanteissa, voidaan yhdistyksen 
                kokouksiin osallistua etäyhteyksin tietoliikenneyhteyden tai muun teknisen apuvälineen avulla...
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">10. Yhdistyksen kokousten koollekutsuminen</h2>
            <p className="text-content">
              Hallituksen on kutsuttava yhdistyksen kokoukset koolle vähintään viikko ennen kokousta 
              jäsenille postitetuilla kirjeillä, sähköpostitse tai yhdistyksen virallisella ilmoitustaululla.
            </p>
          </div>

          <div>
            <h2 className="section-title">11. Yhdistyksen kokoukset</h2>
            <div className="space-y-4 text-content">
              <p>Yhdistyksen kokouksissa käsitellään seuraavat asiat:</p>
              <ol className="list-decimal pl-4 space-y-2">
                <li>Kokouksen avaus</li>
                <li>Valitaan kokouksen puheenjohtaja, sihteeri, kaksi pöytäkirjantarkastajaa ja tarvittaessa kaksi ääntenlaskijaa</li>
                <li>Todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
                <li>Hyväksytään kokouksen työjärjestys</li>
                <li>Esitetään tilinpäätös, vuosikertomus ja tilintarkastajien lausunto</li>
                <li>Päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden myöntämisestä hallitukselle ja muille vastuuvelvollisille</li>
                <li>Käsitellään muut kokouskutsussa mainitut asiat</li>
              </ol>

              <p className="mt-8">Yhdistyksen syyskokouksessa käsitellään seuraavat asiat:</p>
              <ol className="list-decimal pl-4 space-y-2">
                <li>Kokouksen avaus</li>
                <li>Valitaan kokouksen puheenjohtaja, sihteeri, kaksi pöytäkirjantarkastajaa ja tarvittaessa kaksi ääntenlaskijaa</li>
                <li>Todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
                <li>Hyväksytään kokouksen työjärjestys</li>
                <li>Vahvistetaan toimintasuunnitelma, tulo- ja menoarvio sekä liittymis- ja jäsenmaksujen suuruudet seuraavalle kalenterivuodelle</li>
                <li>Valitaan hallituksen puheenjohtaja ja muut jäsenet</li>
                <li>Valitaan yksi tai kaksi tilintarkastajaa ja heille varatilintarkastajat</li>
                <li>Käsitellään muut kokouskutsussa mainitut asiat</li>
              </ol>

              <p className="mt-4">
                Mikäli yhdistyksen jäsen haluaa saada jonkin asian yhdistyksen kevät- tai syyskokoukseen 
                käsiteltäväksi, on hänen ilmoitettava siitä kirjallisesti hallitukselle niin hyvissä ajoin, 
                että asia voidaan sisällyttää kokouskutsuun.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">12. Sääntöjen muuttaminen ja yhdistyksen purkaminen</h2>
            <div className="space-y-4 text-content">
              <p>
                Päätös sääntöjen muuttamisesta ja yhdistyksen purkamisesta on tehtävä yhdistyksen kokouksessa 
                vähintään kolmen neljäsosan (3/4) enemmistöllä annetuista äänistä. Kokouskutsussa on mainittava 
                sääntöjen muuttamisesta tai yhdistyksen purkamisesta.
              </p>
              <p>
                Yhdistyksen purkautuessa käytetään yhdistyksen varat yhdistyksen tarkoituksen edistämiseen 
                purkamisesta päättävän kokouksen määräävällä tavalla. Yhdistyksen tullessa lakkautetuksi 
                käytetään sen varat samaan tarkoitukseen.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title">13. Ohjesäännöt</h2>
            <div className="space-y-4 text-content">
              <p>
                Näitä sääntöjä täydentävillä ohjesäännöillä voidaan antaa täsmentäviä määräyksiä yhdistyksen 
                toiminnan kannalta tärkeinä pidettävistä asioista.
              </p>
              <p>
                Ohjesäännöt ja niihin tehtävät muutokset on hyväksyttävä yhdistyksen kokouksessa vähintään 
                kahden kolmasosan (2/3) enemmistöllä annetuista äänistä. Ohjesäännöt tulevat voimaan heti, 
                kun ne on yhdistyksen kokouksessa hyväksytty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AssociationRules 