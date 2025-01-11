import Footer from '../components/Footer'
import PreviousBoards from '../components/PreviousBoards'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  email: string
  telegram?: string
  linkedin?: string
}

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="group relative bg-black/30 backdrop-blur-sm p-6 transition-all hover:bg-black/40">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all"
          />
        </div>
        <div>
          <h3 className="font-sans text-white/90 text-lg tracking-wide mb-1">{name}</h3>
          <p className="font-sans text-white/60 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

function Team() {
  const teamMembers = [
    
    {
      name: "Milana Begantsova",
      role: "Tech",
      image: "/team/milana.jpg",
      email: "milana.begantsova@aaltoes.com",
      telegram: "milanabeg",
      linkedin: "https://linkedin.com/in/milanabeg"
    },
    {
      name: "Tetsu Fujimura",
      role: "Brand",
      image: "/team/tetsu.jpg",
      email: "tetsu.fujimura@aaltoes.com",
      telegram: "tetsufujimura",
      linkedin: "https://linkedin.com/in/tetsufujimura"
    },
    {
      name: "Vaneeza Maqsood",
      role: "Ecosystem",
      image: "/team/vaneeza.jpg",
      email: "vaneeza.maqsood@aaltoes.com",
      telegram: "vaneezamaqsood",
      linkedin: "https://linkedin.com/in/vaneezamaqsood"
    },
    {
      name: "Siiri Lautamies",
      role: "Operations",
      image: "/team/siiri.jpg",
      email: "siiri.lautamies@aaltoes.com",
      telegram: "siirilautamies",
      linkedin: "https://linkedin.com/in/siirilautamies"
    },
    {
      name: "Lauri Loyttyniemi",
      role: "External Relations",
      image: "/team/lauri.jpg",
      email: "lauri.loyttyniemi@aaltoes.com",
      telegram: "lauriloyttyniemi",
    },
      {
        name: "Yera Slam",
        role: "Partnerships & Finance",
        image: "/team/yera.jpg",
        email: "yera.slam@aaltoes.com",
        telegram: "yeralkhan",
        linkedin: "https://linkedin.com/in/yeralkhan"
      },
    {
      name: "Doni Peltojarvi",
      role: "President",
      image: "/team/doni.jpg",
      email: "doni.peltojarvi@aaltoes.com",
      telegram: "donijar",
      linkedin: "https://linkedin.com/in/donipeltojarvi"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">Our Team</h1>
        <div className="title-divider" />
        
        <div className="content-section">
          <p className="text-content mb-8">
            Meet the dedicated team behind Aaltoes 2025. We're a group of passionate individuals 
            working together to foster entrepreneurship and innovation in the Aalto community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>

          <p className="text-white/60 text-center mt-12">
            Write us at firstname.lastname@aaltoes.com
          </p>

          <div className="mt-24">
            <PreviousBoards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Team 