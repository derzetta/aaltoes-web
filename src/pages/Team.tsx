import { useEffect } from 'react'
import PreviousBoards from '../components/PreviousBoards'
import Layout from '../components/Layout'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  email: string
  telegram?: string
  linkedin?: string
}

const teamMembers = [
  {
    name: "Milana Begantsova",
    role: "Tech",
    image: "/board/milana.png",
    email: "milana.begantsova@aaltoes.com",
    telegram: "milanabeg",
    linkedin: "https://linkedin.com/in/milanabeg"
  },
  {
    name: "Tetsu Fujimura",
    role: "Brand",
    image: "/board/tetsu.png",
    email: "tetsu.fujimura@aaltoes.com",
    telegram: "tetsufujimura",
    linkedin: "https://linkedin.com/in/tetsufujimura"
  },
  {
    name: "Vaneeza Maqsood",
    role: "Ecosystem",
    image: "/board/vaneeza.png",
    email: "vaneeza.maqsood@aaltoes.com",
    telegram: "vaneezamaqsood",
    linkedin: "https://linkedin.com/in/vaneezamaqsood"
  },
  {
    name: "Siiri Lautamies",
    role: "Operations",
    image: "/board/siiri.png",
    email: "siiri.lautamies@aaltoes.com",
    telegram: "siirilautamies",
    linkedin: "https://linkedin.com/in/siirilautamies"
  },
  {
    name: "Lauri Loyttyniemi",
    role: "Projects",
    image: "/board/lauri.png",
    email: "lauri.loyttyniemi@aaltoes.com",
    telegram: "lauriloyttyniemi",
  },
  {
    name: "Yera Slam",
    role: "Partnerships & Finance",
    image: "/board/yera.png",
    email: "yera.slam@aaltoes.com",
    telegram: "yeralkhan",
    linkedin: "https://linkedin.com/in/yeralkhan"
  },
  {
    name: "Doni Peltojarvi",
    role: "President",
    image: "/board/doni.png",
    email: "doni.peltojarvi@aaltoes.com",
    telegram: "donijar",
    linkedin: "https://linkedin.com/in/donipeltojarvi"
  }
]

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="relative bg-neutral-950/30 backdrop-blur-sm p-4 w-full max-w-[280px] sm:max-w-[240px] lg:max-w-[200px] min-h-[220px] rounded-xl mx-auto">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="relative w-[70%] sm:w-full aspect-square rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-sans text-neutral-100/90 text-base tracking-wide mb-1">{name}</h3>
          <p className="font-sans text-neutral-100/60 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <h1 className="page-title">Our Team</h1>
      <div className="title-divider" />
      
      <div className="content-section">
        <p className="text-content mb-8">
          Aaltoes is run by a student-led board, that changes annually. In addition to the board, there are tens of volunteers leading and working in Aaltoes-projects. Altogether our ecosystem consists of many more hundreds of entrepreneurially minded people, who come to our events and are working on their own ventures.
        </p>
        <h2 className="text-2xl font-normal mb-4 text-center">Meet the Board 2025!</h2>

        <div className="flex flex-col items-center gap-4 w-full max-w-[900px] mx-auto">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-1.5rem)]">
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>

        <p className="text-neutral-100/60 text-center mt-12">
          Write us at firstname.lastname@aaltoes.com
        </p>

        <div className="mt-24">
          <PreviousBoards />
        </div>
      </div>
    </Layout>
  )
} 