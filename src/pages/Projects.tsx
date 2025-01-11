import { useState } from 'react'
import Footer from '../components/Footer'
import { Project } from '../types/project'

function StatusBadge({ status }: { status: Project['status'] }) {
  const getStatusStyles = () => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
      case 'inactive':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      case 'archived':
        return 'bg-neutral-500/20 text-neutral-300 border-neutral-500/30'
    }
  }

  return (
    <div className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border ${getStatusStyles()}`}>
      {status}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { name, description, status, url, spinOffYear } = project

  const Card = url ? 'a' : 'div'
  const cardProps = url ? {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}

  return (
    <Card 
      {...cardProps}
      className="group relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all hover:bg-black/40 hover:border-white/20 block h-[280px]"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-['Geist'] text-white/90 text-base tracking-wide">{name}</h3>
          <StatusBadge status={status} />
        </div>
        <p className="font-['Geist'] text-white/60 text-sm leading-relaxed mt-4 line-clamp-4">{description}</p>
        <div className="flex flex-col gap-1 mt-auto pt-4">
          {spinOffYear && (
            <div className="font-['Geist_Mono'] text-xs text-white/40">
              {spinOffYear}
            </div>
          )}
          {url && (
            <div className="font-['Geist_Mono'] text-xs text-white/40">
              {new URL(url).hostname}
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Card>
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
  const [selectedCategory, setSelectedCategory] = useState<Project['category']>('spinout')

  const projects: Project[] = [
    {
      name: "Startup Sauna",
      description: "The world's #1 university-based accelerator program. Taking in teams from all over Europe with a special emphasis on eastern Europe. Around 1-3% acceptance rate per batch.",
      status: 'inactive',
      url: "https://startupsauna.com",
      spinOffYear: 2012,
      category: 'spinout'
    },
    {
      name: "Slush",
      description: "The most founder focused event on earth. A startup conference in November bringing together founders and investors in Helsinki",
      status: 'active',
      url: "https://slush.org",
      spinOffYear: 2012,
      category: 'spinout'
    },
    {
      name: "Rails Girls",
      description: "Getting more women to code. A curriculum of one day long events to encourage young women into the world of tech through coding.",
      status: 'active',
      url: "https://railsgirls.com",
      spinOffYear: 2012,
      category: 'spinout'
    },
    {
      name: "Startuplifers",
      description: "Sending Finnish talent to work in the best global startups. Heavy focus on Silicon Valley, also has sent people to a few other hubs (Moscow, Berlin, SE Asia etc.)",
      status: 'active',
      url: "https://startuplifers.org",
      spinOffYear: 2016,
      category: 'spinout'
    },
    {
      name: "Day For Failure",
      description: "Celebrating the art of failing on the 13th of October. Internationally recognized as a holiday in some European countries",
      status: 'inactive',
      spinOffYear: 2016,
      category: 'spinout'
    },
    {
      name: "Junction",
      description: "What if we made a hackathon that looked like Slush. The biggest hackathon organizer in Europe, organizing events in multiple countries and building a hackathon-platform.",
      status: 'active',
      url: "https://junction.xyz",
      spinOffYear: 2016,
      category: 'spinout'
    },
    {
      name: "Kiuas",
      description: "The best accelerator-program in the Nordics. A seed-stage startup accelerator.",
      status: 'active',
      url: "https://kiuas.com",
      spinOffYear: 2018,
      category: 'spinout'
    },
    {
      name: "Hel Tech",
      description: "A monthly tech meetup with changing topics. Bringing together experts, founders, researchers and students",
      status: 'inactive',
      spinOffYear: 2019,
      category: 'spinout'
    },
    {
      name: "Dash",
      description: "A design thinking hackathon, promoting multidisciplinarity. Bringing together hipsters, hackers, hustlers and wild cards",
      status: 'active',
      url: "https://dash.aaltoes.com",
      spinOffYear: 2023,
      category: 'spinout'
    },
    {
      name: "Wicked Helsinki",
      description: "An impact entrepreneurship community",
      status: 'active',
      url: "https://wickedhelsinki.fi",
      spinOffYear: 2021,
      category: 'spinout'
    },
    {
      name: "SILTA",
      description: "An accelerator-program taking Finnish founders to Silicon Valley for 3 months to live in a hacker house and make a market entry there",
      status: 'active',
      url: "https://silta.xyz",
      spinOffYear: 2023,
      category: 'spinout'
    },
    {
      name: "Deep Dive",
      description: "A case competition bridging the gap between academia and entrepreneurship. Bringing students together with R2B-teams to tackle some of their issues with commercializing research.",
      status: 'active',
      url: "https://www.deep-dive.org/",
      spinOffYear: 2022,
      category: 'spinout'
    }
  ]

  const filteredProjects = projects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">Projects</h1>
        <div className="title-divider" />
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-white/10 p-1 font-mono text-sm">
            {(['brewing', 'spinout'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-all uppercase tracking-wider ${
                  selectedCategory === category 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/50 hover:text-white/70'
                }`}
              >
                {category === 'brewing' ? 'Currently Brewing' : 'Spin Outs'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
            {selectedCategory === 'brewing' && <NewProjectCard />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects 