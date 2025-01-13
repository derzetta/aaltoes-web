import { useEffect, useState } from 'react'
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
      case 'planned':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
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
          <h3 className="font-sans text-white/90 text-base tracking-wide">{name}</h3>
          <StatusBadge status={status} />
        </div>
        <p className="font-sans text-white/60 text-sm leading-relaxed mt-4 line-clamp-4">{description}</p>
        <div className="flex flex-col gap-1 mt-auto pt-4">
          {spinOffYear && (
            <div className="font-mono text-xs text-white/40">
              {spinOffYear}
            </div>
          )}
          {url && (
            <div className="font-mono text-xs text-white/40">
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
          <h3 className="font-sans text-white/90 text-lg tracking-wide mb-2">Want to start a new project?</h3>
          <p className="font-sans text-white/60 text-sm leading-relaxed">
            Contact us with your idea and let's make it happen together
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -m-[1px] rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </a>
  )
}

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [selectedCategory, setSelectedCategory] = useState<Project['category']>('brewing')

  const projects: Project[] = [
    {
      name: "Ignite",
      description: "A pre-accelerator program helping first-time founders validate their ideas and build their first MVP. From idea to prototype in 6 weeks.",
      status: 'active',
      url: "https://ignite.aaltoes.com",
      category: 'brewing'
    },
    {
      name: "Aaltoes Open Source",
      description: "A community-driven initiative to build and maintain open source projects that benefit the startup ecosystem.",
      status: 'planned',
      url: "https://github.com/aaltoes",
      category: 'brewing'
    },
    {
      name: "Strive",
      description: "A founder-focused community program helping early-stage startups grow through peer learning and mentorship.",
      status: 'active',
      url: "https://striveforstartups.com",
      category: 'brewing'
    },
    {
      name: "Deep Dive",
      description: "A case competition bridging gap between academia and entrepreneurship",
      status: 'active',
      spinOffYear: 2023,
      category: 'spinout'
    },
    {
      name: "Startup Sauna",
      description: "World's leading student-led Entrepreneurship hub",
      status: 'active',
      url: "https://startupsauna.org",
      spinOffYear: 2012,
      category: 'spinout'
    },
    {
      name: "Slush",
      description: "annually hosting the world's leading startup event.",
      status: 'active',
      url: "https://slush.org",
      spinOffYear: 2012,
      category: 'spinout'
    },
    {
      name: "Rails Girls",
      description: "Providing tools and a community for women to understand technology and how to build their ideas.",
      status: 'active',
      url: "https://railsgirls.com",
      spinOffYear: 2012,
      category: 'spinout'
    },
    {
      name: "Startuplifers",
      description: "Sending Finnish talent to work in global startups",
      status: 'inactive',
      spinOffYear: 2016,
      category: 'spinout'
    },
    {
      name: "Day For Failure",
      description: "Celebrating the art of failing on the 13th of October.",
      status: 'inactive',
      spinOffYear: 2016,
      category: 'spinout'
    },
    {
      name: "Junction",
      description: "World-class hackathons hosted throughout the year across the globe",
      status: 'active',
      url: "https://www.hackjunction.com",
      spinOffYear: 2016,
      category: 'spinout'
    },
    {
      name: "Kiuas",
      description: "Accelerator program to help early-stage startup founders to build world-changing companies",
      status: 'active',
      url: "https://kiuas.com",
      spinOffYear: 2018,
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
      name: "SILTA",
      description: "Program taking early-stage founders from Finland to San Francisco for 3 months to develop their companies",
      status: 'active',
      url: "https://www.siltahouse.com",
      spinOffYear: 2023,
      category: 'spinout'
    }
  ]

  const filteredProjects = projects
    .filter(p => p.category === selectedCategory)
    .sort((a, b) => {
      if (selectedCategory === 'spinout' && a.spinOffYear && b.spinOffYear) {
        return b.spinOffYear - a.spinOffYear // Sort by year in descending order
      }
      if (selectedCategory === 'brewing') {
        // Sort active first, then planned
        if (a.status === 'active' && b.status !== 'active') return -1;
        if (a.status !== 'active' && b.status === 'active') return 1;
        return 0;
      }
      return 0;
    })

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