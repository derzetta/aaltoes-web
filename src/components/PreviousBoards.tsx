interface BoardMember {
  name: string
  role?: string
}

interface BoardYear {
  year: number
  members: BoardMember[]
  isGolden?: boolean
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
        { name: "Samuli Hartikainen", role: "International Relations" },
        { name: "Patricia Sarkkinen", role: "Brand & Marketing" },
        { name: "Tomi Tan-Röholm", role: "Partnerships & Finance" }
      ]
    },
    {
      year: 2023,
      members: [
        { name: "Niklas Hamberg", role: "President" },
        { name: "Meri Heikkinen", role: "Vice President, International Relations" },
        { name: "Nantte Kivinen", role: "Finance" },
        { name: "Laura Vettenranta", role: "Partnerships & Projects" },
        { name: "Roope Ripatti", role: "Operations" },
        { name: "Lilya Lagerbohm", role: "Brand & Marketing" }
      ]
    },
    {
      year: 2022,
      members: [
        { name: "Ahmed Hadi", role: "President" },
        { name: "Oskari Ojavuo", role: "Vice President, Partnerships & International Relations" },
        { name: "Valtteri Haikarainen", role: "Finance" },
        { name: "Artur Skwarek", role: "Projects" },
        { name: "Venla Lymysalo", role: "Operations" },
        { name: "Anna Chiala", role: "Brand & Marketing" }
      ],
      isGolden: true
    },
    {
      year: 2021,
      members: [
        { name: "Mona Ismail", role: "President" },
        { name: "Aaro Angerpuro", role: "Vice President, Finance" },
        { name: "Aleksi Päkkilä", role: "International Relations" },
        { name: "Hilla Klemetti", role: "Projects & Community" },
        { name: "Patrik Fjällberg", role: "Partnerships & Academic Affairs" },
        { name: "Riikka Savolainen", role: "Brand & Marketing" }
      ]
    },
    {
      year: 2020,
      members: [
        { name: "Niko Laukkanen", role: "President" },
        { name: "Veikko Väyrynen", role: "Vice President, International Relations" },
        { name: "Roni Lahti", role: "Finance" },
        { name: "Joel Järvensivu", role: "Partnerships" },
        { name: "Aino Kenttämies", role: "Community" },
        { name: "Silja Abildsten", role: "Brand & Marketing" }
      ]
    },
    {
      year: 2019,
      members: [
        { name: "Timo Luukkola", role: "President" },
        { name: "Lauri Kaijasilta", role: "Vice President, Finance" },
        { name: "Riku Suonsivu", role: "Operations" },
        { name: "Markus Koljonen", role: "Projects" },
        { name: "Katri Mäki-Kullas", role: "Community" }
      ]
    },
    {
      year: 2018,
      members: [
        { name: "Tiina Nyman", role: "President" },
        { name: "Aleksi Löytynoja", role: "Vice President, Finance" },
        { name: "Ella Liuksiala", role: "Brand & Marketing" },
        { name: "Sakari Huhtanen", role: "Kiuas Lead" },
        { name: "Sindre Trosterud", role: "International Relations" },
        { name: "Pirkka Sippola", role: "Community" }
      ]
    },
    {
      year: 2017,
      members: [
        { name: "Anttoni Aniebonam", role: "President" },
        { name: "Stella Tuovinen", role: "Vice President, International Relations" },
        { name: "Kasimir Hellman", role: "Finance" },
        { name: "Verneri Jäämuru", role: "Brand & Marketing" },
        { name: "Sam Sihvonen", role: "Technology" },
        { name: "Ville Lehto", role: "Partnerships" }
      ]
    },
    {
      year: 2016,
      members: [
        { name: "Aleksi Hämäläinen", role: "President" },
        { name: "Jesse Miettinen", role: "Vice President, Startup Sauna" },
        { name: "Ville Leppälä", role: "Junction Lead" },
        { name: "Aleksi Heinonen", role: "Finance" },
        { name: "Eero Kettunen", role: "Partnerships" },
        { name: "Jaan Lundström", role: "Operations" },
        { name: "Juha-Pekka Puska", role: "Academic Affairs" },
        { name: "Jenna Kallunki", role: "Brand & Marketing" }
      ]
    },
    {
      year: 2015,
      members: [
        { name: "Julius Hietala", role: "President" },
        { name: "Kenneth Blomqvist", role: "Vice President, Junction" },
        { name: "Riko Nyberg", role: "International & Academic Relations" },
        { name: "Peik Hämekoski", role: "Finance" },
        { name: "Richard Makara", role: "Brand & Marketing" },
        { name: "Joona Karjula", role: "Operations" },
        { name: "Annika Oukka" }
      ]
    },
    {
      year: 2014,
      members: [
        { name: "Kasper Suomalainen", role: "President" },
        { name: "Panu Paljakka", role: "Vice President, Startup Sauna" },
        { name: "Teemu Laiho", role: "Finance" },
        { name: "Ida Vehnämäki", role: "Brand & Marketing" },
        { name: "Mariam Olaleka", role: "Events" },
        { name: "Olga Balakina", role: "International Relations" }
      ]
    },
    {
      year: 2013,
      members: [
        { name: "Elina Uuttela", role: "President" },
        { name: "Risto Vuorio", role: "Vice President, Finance & Startup Sauna" },
        { name: "Kristian Hartikainen", role: "Technology" },
        { name: "Markus Ahrenberg", role: "Community" },
        { name: "Juuso Koskinen", role: "Startup Sauna" },
        { name: "Miki Pernu", role: "Events" }
      ]
    },
    {
      year: 2012,
      members: [
        { name: "Nils Paajanen", role: "President" },
        { name: "Atte Hujanen", role: "Vice President" },
        { name: "Mikko Hagelberg", role: "Finance" },
        { name: "Teemu Tapanila", role: "Operations" },
        { name: "Juhana Nurmio", role: "Academic Relations" },
        { name: "Riku Lindholm", role: "Events" }
      ]
    },
    {
      year: 2011,
      members: [
        { name: "Miki Kuusi", role: "President" },
        { name: "Lari Haataja", role: "Finance" },
        { name: "Antti Ylimutka", role: "Startup Sauna" },
        { name: "Charlotta Liukas", role: "Brand & Marketing" },
        { name: "Lauri Lehtovuori", role: "Community" },
        { name: "Oona Hilkamo", role: "Events" }
      ]
    },
    {
      year: 2010,
      members: [
        { name: "Jens Sodersen", role: "President" },
        { name: "Markus Nuotto", role: "Vice President" },
        { name: "Mikko Ikola", role: "Finance" },
        { name: "Lauri Hynynen", role: "Technology" },
        { name: "Tapani Alasaarela", role: "Community" },
        { name: "Santeri Everi", role: "Events" },
        { name: "Olli Nuutila", role: "Operations" },
        { name: "Ville Simola", role: "Startup Sauna" }
      ]
    },
    {
      year: 2009,
      members: [
        { name: "Kristo Ovaska", role: "President" },
        { name: "Markus Nuotto", role: "Vice President" },
        { name: "Aku-Ville Lehtimäki", role: "Finance" },
        { name: "Perttu Ojansuu", role: "Community" },
        { name: "Riku Seppälä", role: "Events" },
        { name: "Jori Lallo", role: "Technology" },
        { name: "Krista Kauppinen", role: "Brand & Marketing" },
        { name: "Thomas Hutton", role: "International Relations" }
      ]
    }
  ]

  return (
    <div className="space-y-12">
      <h2 className="section-title">Previous Boards</h2>
      {boards.map((board) => (
        <div key={board.year} className="space-y-4">
          <div className="flex items-center gap-4">
            <h3 className={`font-['Geist_Mono'] ${board.isGolden ? 'text-amber-300' : 'text-white/90'}`}>
              {board.year}
            </h3>
            <div className={`h-px flex-grow ${board.isGolden ? 'bg-amber-300/30' : 'bg-white/10'}`} />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {board.members.map((member, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full ${board.isGolden ? 'bg-amber-300/20' : 'bg-white/10'}`} />
                <span className={`text-sm ${board.isGolden ? 'text-amber-300' : 'text-white/70'}`}>
                  {member.name}
                </span>
                {member.role && (
                  <span className={`text-xs ${board.isGolden ? 'text-amber-300/70' : 'text-white/40'}`}>
                    {member.role}
                  </span>
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