import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Project } from '../types/project'
import EarlyAccessBanner from '../components/EarlyAccessBanner'

function StatusBadge({ status }: { status: Project['status'] }) {
  const getStatusStyles = () => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
      case 'inactive':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      case 'archived':
        return 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30'
      case 'planned':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'pilot':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30'
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
      className="group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6 transition-all hover:bg-zinc-900 hover:border-zinc-100/20 block h-[280px]"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-sans text-zinc-100 text-base tracking-wide">{name}</h3>
          <StatusBadge status={status} />
        </div>
        <p className="font-sans text-zinc-400 text-sm leading-relaxed mt-4 line-clamp-4">{description}</p>
        <div className="flex flex-col gap-1 mt-auto pt-4">
          {spinOffYear && (
            <div className="font-mono text-xs text-zinc-600">
              {spinOffYear}
            </div>
          )}
          {url && (
            <div className="font-mono text-xs text-zinc-100/40">
              {new URL(url).hostname}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

function NewProjectCard() {
  return (
    <a 
      href="mailto:board@aaltoes.com"
      className="group relative bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6 transition-all hover:bg-zinc-900 hover:border-zinc-100/20 block h-[280px]"
    >
      <div className="flex flex-col gap-4 items-center justify-center h-full text-center">
        <div className="h-12 w-12 rounded-full border-2 border-zinc-100/10 flex items-center justify-center group-hover:border-zinc-100/20 transition-all">
          <span className="text-2xl text-zinc-100/70 group-hover:text-zinc-100/90">+</span>
        </div>
        <div>
          <h3 className="font-sans text-zinc-100/90 text-lg tracking-wide mb-2">Want to start a new project?</h3>
          <p className="font-sans text-zinc-100/60 text-sm leading-relaxed">
            Contact us with your idea and let's make it happen together
          </p>
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'brewing' | 'spinout'>('brewing')
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects: Project[] = [
    {
      name: "Ignite",
      description: "A pre-accelerator program helping first-time founders validate their ideas and build their first MVP.",
      status: 'active',
      url: "https://ignite.aaltoes.com",
      category: 'brewing'
    },
    {
      name: "Open Source",
      description: "Fueling innovation together—our open-source projects are built for collaboration, creativity, and impact.",
      status: 'planned',
      category: 'brewing'
    },
    {
      name: "Blueprint",
      description: "Aaltoes Ecosystem continuity project.",
      status: 'planned',
      category: 'brewing'
    },
    {
      name: "Strive",
      description: "Platform designed to help students and startups find the perfect match.",
      status: 'active',
      url: "https://striveforstartups.com",
      category: 'brewing'
    },
    {
      name: "wednesday.",
      description: "Inspiring women every day of the week.",
      status: 'active',
      url: "https://wednesday.aaltoes.com/",
      category: 'brewing'
    },
    {
      name: "Founders Fuel",
      description: "Your no bullshit tech & startup news & events  from Finland & beyond. Always free.",
      status: 'active',
      url: "https://foundersfuel.aaltoes.com/",
      category: 'brewing'
    },
      {
        name: "DAWN",
        description: "From zero to one in three weeks!",
        status: 'pilot',
        category: 'brewing'
      },
    {
      name: "Deep Dive",
      description: "A case competition bridging the gap between academia and entrepreneurship.",
      status: 'active',
      url: "https://deep-dive.org",
      spinOffYear: 2023,
      category: 'spinout'
    },
    {
      name: "Startup Sauna",
      description: "World's leading student-led Entrepreneurship hub.",
      status: 'active',
      url: "https://startupsauna.org",
      spinOffYear: 2010,
      category: 'spinout'
    },
    {
      name: "Slush",
      description: "Annually hosting the world's leading startup event.",
      status: 'active',
      url: "https://slush.org",
      spinOffYear: 2011,
      category: 'spinout'
    },
    {
      name: "Rails Girls",
      description: "Providing tools and a community for women to understand technology and how to build their ideas.",
      status: 'active',
      url: "https://railsgirls.com",
      spinOffYear: 2010,
      category: 'spinout'
    },
    {
      name: "Startuplifers",
      description: "Bringing talent from the Nordics to Silicon Valley startups.",
      status: 'inactive',
      url: "https://startuplifers.org",
      spinOffYear: 2011,
      category: 'spinout'
    },
    {
      name: "Day For Failure",
      description: "Celebrating the art of failing on the 13th of October.",
      status: 'inactive',
      spinOffYear: 2010,
      category: 'spinout'
    },
    {
      name: "Junction",
      description: "World-class hackathons hosted throughout the year across the globe.",
      status: 'active',
      url: "https://hackjunction.com",
      spinOffYear: 2015,
      category: 'spinout'
    },
    {
      name: "Kiuas",
      description: "Accelerator program to help early-stage startup founders to build world-changing companies.",
      status: 'active',
      url: "https://kiuas.com",
      spinOffYear: 2017,
      category: 'spinout'
    },
    {
      name: "Dash",
      description: "A movement for a better designed future.",
      status: 'active',
      url: "https://dash.design",
      spinOffYear: 2017,
      category: 'spinout'
    },
    {
      name: "SILTA",
      description: "Program taking early-stage founders from Finland to San Francisco for 3 months to develop their companies.",
      status: 'active',
      url: "https://siltahouse.com",
      spinOffYear: 2021,
      category: 'spinout'
    },
    {
      name: "FR8",
      description: "Where young mavericks build the future.",
      status: 'active',
      url: "https://fr8.so",
      spinOffYear: 2024,
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
        // Sort active first, then pilot, then planned
        if (a.status === 'active' && b.status !== 'active') return -1;
        if (a.status !== 'active' && b.status === 'active') return 1;
        if (a.status === 'pilot' && b.status === 'planned') return -1;
        if (a.status === 'planned' && b.status === 'pilot') return 1;
        return 0;
      }
      return 0;
    })

  return (
    <Layout>
      <h1 className="page-title">Projects</h1>
      <div className="title-divider" />
      <EarlyAccessBanner />
      
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-lg border border-zinc-100/10 p-1 font-mono text-sm">
          {(['brewing', 'spinout'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-all uppercase tracking-wider ${
                selectedCategory === category 
                  ? 'bg-zinc-100/10 text-zinc-100' 
                  : 'text-zinc-100/50 hover:text-zinc-100/70'
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
    </Layout>
  )
} 