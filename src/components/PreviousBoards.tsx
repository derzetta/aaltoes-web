interface BoardMember {
  name: string
  role?: string
}

interface BoardYear {
  year: number
  members: BoardMember[]
}

function PreviousBoards() {
  const boards: BoardYear[] = [
    {
      year: 2024,
      members: [
        { name: "Maija Rissanen", role: "President" },
        { name: "Ernesti Sario", role: "Vice President" },
        { name: "Hermanni Aho", role: "Finance" },
        { name: "Eli Saaresto", role: "Community" },
        { name: "Samuli Hartikainen", role: "Strive & international" },
        { name: "Patricia Sarkkinen", role: "Brand, marketing & communications" },
        { name: "Tomi Tan-Röholm", role: "Partnerships & Finance" }
      ]
    },
    {
      year: 2023,
      members: [
        { name: "Niklas Hamberg", role: "President" },
        { name: "Meri Heikkinen", role: "Vice-President, International Relations" },
        { name: "Nantte Kivinen", role: "Finance" },
        { name: "Laura Vettenranta", role: "Partnerships & Projects" },
        { name: "Roope Ripatti", role: "Startups & Operations" },
        { name: "Lilya Lagerbohm", role: "Brand, Marketing & Communications" }
      ]
    },
    {
      year: 2022,
      members: [
        { name: "Ahmed Hadi", role: "President" },
        { name: "Oskari Ojavuo", role: "Vice-President, Partnerships & International Relations" },
        { name: "Valtteri Haikarainen", role: "Finance" },
        { name: "Artur Skwarek", role: "Startups & Projects" },
        { name: "Venla Lymysalo", role: "Operations" },
        { name: "Anna Chiala", role: "Brand, Marketing & Communications" }
      ]
    },
    {
      year: 2021,
      members: [
        { name: "Mona Ismail", role: "President" },
        { name: "Aaro Angerpuro", role: "Vice-President, Finance" },
        { name: "Aleksi Päkkilä", role: "International Relations" },
        { name: "Hilla Klemetti", role: "Coordinator (Projects + Community)" },
        { name: "Patrik Fjällberg", role: "Partnerships & Academic Affairs" },
        { name: "Riikka Savolainen", role: "Marketing & Visuals" }
      ]
    },
    {
      year: 2020,
      members: [
        { name: "Niko Laukkanen", role: "President" },
        { name: "Veikko Väyrynen", role: "Vice-President, International Relations" },
        { name: "Roni Lahti", role: "Finance" },
        { name: "Joel Järvensivu", role: "Partnerships" },
        { name: "Aino Kenttämies", role: "Community" },
        { name: "Silja Abildsten" }
      ]
    },
    {
      year: 2019,
      members: [
        { name: "Timo Luukkola", role: "President" },
        { name: "Riku Suonsivu" },
        { name: "Markus Koljonen" },
        { name: "Lauri Kaijasilta", role: "Vice president, Finance" },
        { name: "Katri Mäki-Kullas" }
      ]
    },
    {
      year: 2018,
      members: [
        { name: "Tiina Nyman", role: "President" },
        { name: "Aleksi Löytynoja", role: "Vice-President, Finance" },
        { name: "Ella Liuksiala" },
        { name: "Sakari Huhtanen", role: "Kiuas" },
        { name: "Sindre Trosterud" },
        { name: "Pirkka Sippola" }
      ]
    },
    {
      year: 2017,
      members: [
        { name: "Anttoni Aniebonam", role: "President" },
        { name: "Stella Tuovinen", role: "Vice-President, International Relations" },
        { name: "Kasimir Hellman", role: "Finance" },
        { name: "Verneri Jäämuru", role: "Marketing" },
        { name: "Sam Sihvonen", role: "Tech" },
        { name: "Ville Lehto", role: "Partnerships" }
      ]
    },
    {
      year: 2016,
      members: [
        { name: "Aleksi Hämäläinen", role: "President" },
        { name: "Jesse Miettinen", role: "Vice-President, SoS" },
        { name: "Ville Leppälä", role: "Junction" },
        { name: "Aleksi Heinonen", role: "Finance" },
        { name: "Eero Kettunen", role: "Partnerships" },
        { name: "Jaan Lundström", role: "Operations" },
        { name: "Juha-Pekka Puska", role: "Academic Affairs" },
        { name: "Jenna Kallunki", role: "Marketing" }
      ]
    },
    {
      year: 2015,
      members: [
        { name: "Julius Hietala", role: "President" },
        { name: "Riko Nyberg", role: "SoS, international & academic" },
        { name: "Peik Hämekoski", role: "Finance" },
        { name: "Richard Makara", role: "Marketing" },
        { name: "Joona Karjula", role: "Operations" },
        { name: "Annika Oukka", role: "(Quit halfway through)" },
        { name: "Kenneth Blomqvist", role: "Vice President, Junction" }
      ]
    },
    {
      year: 2014,
      members: [
        { name: "Kasper Suomalainen", role: "President" },
        { name: "Panu Paljakka", role: "Vice President, SoS" },
        { name: "Teemu Laiho", role: "Finance" },
        { name: "Ida Vehnämäki", role: "Marketing (quit halfway through?)" },
        { name: "Mariam Olaleka", role: "Events (quit halfway through)" },
        { name: "Olga Balakina", role: "International" }
      ]
    },
    {
      year: 2013,
      members: [
        { name: "Elina Uuttela", role: "President" },
        { name: "Risto Vuorio", role: "Vice President, Finance, SoS" },
        { name: "Kristian Hartikainen", role: "Tech" },
        { name: "Markus Ahrenberg" },
        { name: "Juuso Koskinen", role: "Startup Sauna" },
        { name: "Miki Pernu", role: "Events" }
      ]
    },
    {
      year: 2012,
      members: [
        { name: "Nils Paajanen", role: "President" },
        { name: "Atte Hujanen" },
        { name: "Mikko Hagelberg", role: "Finance" },
        { name: "Teemu Tapanila" },
        { name: "Juhana Nurmio", role: "Academic Relations" },
        { name: "Riku Lindholm" }
      ]
    },
    {
      year: 2011,
      members: [
        { name: "Miki Kuusi", role: "President" },
        { name: "Lari Haataja", role: "Finance" },
        { name: "Antti Ylimutka", role: "SoS" },
        { name: "Charlotta Liukas", role: "Marketing" },
        { name: "Lauri Lehtovuori" },
        { name: "Oona Hilkamo" }
      ]
    },
    {
      year: 2010,
      members: [
        { name: "Jens Sodersen", role: "President" },
        { name: "Tapani Alasaarela" },
        { name: "Santeri Everi" },
        { name: "Mikko Ikola", role: "Treasurer" },
        { name: "Lauri Hynynen", role: "Tech" },
        { name: "Olli Nuutila" },
        { name: "Ville Simola", role: "SoS" }
      ]
    },
    {
      year: 2009,
      members: [
        { name: "Kristo Ovaska", role: "President" },
        { name: "Perttu Ojansuu" },
        { name: "Riku Seppälä" },
        { name: "Jori Lallo" },
        { name: "Markus Nuotto", role: "Vice President" },
        { name: "Aku-Ville Lehtimäki", role: "Treasurer" },
        { name: "Krista kauppinen" },
        { name: "Thomas hutton" }
      ]
    }
  ]

  return (
    <div className="space-y-12">
      <h2 className="section-title">Previous Boards</h2>
      {boards.map((board) => (
        <div key={board.year} className="space-y-4">
          <div className="flex items-center gap-4">
            <h3 className="font-['Geist_Mono'] text-white/90">{board.year}</h3>
            <div className="h-px flex-grow bg-white/10" />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {board.members.map((member, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10" />
                <span className="text-sm text-white/70">{member.name}</span>
                {member.role && (
                  <span className="text-xs text-white/40">• {member.role}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PreviousBoards 