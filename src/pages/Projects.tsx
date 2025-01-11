import Footer from '../components/Footer'

interface ProjectCardProps {
  logo: string
  name: string
  description: string
  url: string
}

function ProjectCard({ logo, name, description, url }: ProjectCardProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all hover:bg-black/40 hover:border-white/20"
    >
      <div className="flex flex-col gap-4">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="h-12 w-12 object-contain filter brightness-75 group-hover:brightness-100 transition-all"
        />
        <div>
          <h3 className="font-['Geist'] text-white/90 text-lg tracking-wide mb-2">{name}</h3>
          <p className="font-['Geist'] text-white/60 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </a>
  )
}

function NewProjectCard() {
  return (
    <a 
      href="mailto:board@aaltoes.com"
      className="group relative bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/30 rounded-lg p-6 transition-all hover:from-white/10 hover:via-white/20 hover:to-white/10 hover:border-white/50"
    >
      <div className="flex flex-col gap-4 items-center justify-center h-full text-center">
        <div className="h-12 w-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/50 transition-all">
          <span className="text-2xl text-white/70 group-hover:text-white/90">+</span>
        </div>
        <div>
          <h3 className="font-['Geist'] text-white/90 text-lg tracking-wide mb-2">Want to start a new project?</h3>
          <p className="font-['Geist'] text-white/60 text-sm leading-relaxed">
            Contact us with your idea and let's make it happen together
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -m-[1px] rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </a>
  )
}

function Projects() {
  const projects = [
    {
      logo: "/project-logos/junction.svg",
      name: "Junction",
      description: "Europe's biggest hackathon bringing together developers, designers and entrepreneurs.",
      url: "https://junction.xyz",
    },
    {
      logo: "/project-logos/kiuas.svg",
      name: "Kiuas",
      description: "The leading startup accelerator in Finland, helping early-stage startups move forward.",
      url: "https://kiuas.com",
    },
    {
      logo: "/project-logos/wave.svg",
      name: "Wave Ventures",
      description: "Student-run venture capital fund investing in early-stage startups in the Nordics.",
      url: "https://wave.ventures",
    },
    // Add more projects as needed
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">Projects</h1>
        <div className="title-divider" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
          <NewProjectCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects 