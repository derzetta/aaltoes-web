import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Log Entry Component
interface LogEntryProps {
  date: string
  title: string
  description: string
  type: 'added' | 'updated' | 'fixed' | 'removed'
  initiative?: string
}

const LogEntry = ({ date, title, description, type, initiative }: LogEntryProps) => {
  // Define colors based on initiative
  const initiativeColors = {
    Robotics: 'bg-purple-800',
    Blueprint: 'bg-cyan-800',
    OpenSource: 'bg-green-800',
    International: 'bg-yellow-800',
    FocusTopics: 'bg-pink-800',
    Spinout: 'bg-orange-800'
  }

  // Define text colors based on initiative
  const initiativeTextColors = {
    Robotics: 'text-purple-800',
    Blueprint: 'text-cyan-800',
    OpenSource: 'text-green-800',
    International: 'text-yellow-800',
    FocusTopics: 'text-pink-800',
    Spinout: 'text-orange-800'
  }

  // Determine dot color - use initiative color if available
  const dotColor = initiative && initiativeColors[initiative as keyof typeof initiativeColors]
    ? initiativeColors[initiative as keyof typeof initiativeColors]
    : 'bg-zinc-500' // Default gray for entries without initiative

  // Determine icon color - use initiative text color if available, otherwise use white
  const iconColor = initiative && initiativeTextColors[initiative as keyof typeof initiativeTextColors]
    ? initiativeTextColors[initiative as keyof typeof initiativeTextColors]
    : 'text-zinc-100' // Default white for entries without initiative

  // Define icons based on type with dynamic color
  const getTypeIcon = (type: 'added' | 'updated' | 'fixed' | 'removed') => {
    switch (type) {
      case 'added':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconColor}>
            <path d="M12 5v14M5 12h14"/>
          </svg>
        );
      case 'updated':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconColor}>
            <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"/>
          </svg>
        );
      case 'fixed':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconColor}>
            <path d="M20 7h-9M14 17H5"/>
            <circle cx="17" cy="17" r="3"/>
            <circle cx="7" cy="7" r="3"/>
          </svg>
        );
      case 'removed':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconColor}>
            <path d="M5 12h14"/>
          </svg>
        );
    }
  };

  return (
    <div className="border-l-2 border-zinc-800 pl-6 pb-12 relative">
      {/* Dot on timeline */}
      <div className={`absolute left-[-5px] top-0 w-2 h-2 rounded-full ${dotColor}`}></div>
      
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
        <time className="text-sm font-mono text-zinc-500">{date}</time>
        <h3 className="text-xl font-medium text-zinc-100">{title}</h3>
        <div className="md:ml-auto flex items-center gap-2">
          {getTypeIcon(type)}
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-base text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// Month Section Component
interface MonthSectionProps {
  month: string
  children: React.ReactNode
}

const MonthSection = ({ month, children }: MonthSectionProps) => (
  <div className="mb-16">
    <h2 className="text-2xl font-medium text-zinc-100 mb-8">{month}</h2>
    <div className="space-y-2">
      {children}
    </div>
  </div>
)

export default function Log() {
  const { pathname } = useLocation()
  const [filter, setFilter] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Sample log data
  const logEntries = [
    // March 2025
    {
      date: "Mar 1, 2025",
      title: "Port_25 Hackathon",
      description: "Port_25 hackathon was organised on March 1-2.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    
    // February 2025
    {
      date: "Feb 25, 2025",
      title: "Launch of Robotics Nation Program",
      type: "added" as const,
      initiative: "Robotics"
    },
    {
      date: "Feb 24, 2025",
      title: "Blueprint Data Collection Begins",
      description: "Started gathering historical data and documentation for the Blueprint project to preserve Aaltoes' institutional knowledge.",
      type: "added" as const,
      initiative: "Blueprint"
    },
    {
      date: "Feb 22, 2025",
      title: "Launch of Aaltoes Store",
      description: "Launched the official Aaltoes merchandise store with the first collection of branded items available for purchase.",
      type: "added" as const
    },
    {
      date: "Feb 21, 2025",
      title: "Japan Expedition Squad Finalized",
      description: "Completed the selection process for the Japan Expedition team members who will represent Aaltoes in Tokyo and Osaka.",
      type: "updated" as const,
      initiative: "International"
    },
    {
      date: "Feb 20, 2025",
      title: "Open Source Repository Structure",
      description: "Established the foundational repository structure for all Aaltoes open source projects, including contribution guidelines and code of conduct.",
      type: "added" as const,
      initiative: "OpenSource"
    },
    {
      date: "Feb 13, 2025",
      title: "Deep Tech Event with Mimir",
      description: "Hosted a collaborative deep tech event with Mimir, focusing on emerging technologies and innovation opportunities.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    {
      date: "Feb 12, 2025",
      title: "Paramount Year of Crafting Livestream",
      description: "Conducted a live stream presentation detailing the full plans and vision for the Paramount Year of Crafting initiative.",
      type: "added" as const
    },
    {
      date: "Feb 10, 2025",
      title: "Discord and Minecraft Servers Launch",
      description: "Launched official Aaltoes Discord and Minecraft servers to foster community engagement and collaboration in virtual spaces.",
      type: "added" as const,
      initiative: "OpenSource"
    },
    {
      date: "Feb 9, 2025",
      title: "Port 25 Hackathon Announcement",
      description: "Announced the Port 25 hackathon in collaboration with Aalto ENTU, focusing on sustainable technology solutions.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    {
      date: "Feb 7, 2025",
      title: "GitHub Repositories Creation",
      description: "Created the first set of Aaltoes GitHub repositories, establishing our presence in the open source community.",
      type: "added" as const,
      initiative: "OpenSource"
    },
    {
      date: "Feb 6, 2025",
      title: "Pitch IT Redesign",
      description: "Completed a comprehensive redesign of the Pitch IT event format to better serve startup founders and investors.",
      type: "updated" as const,
      initiative: "FocusTopics"
    },
    {
      date: "Feb 1, 2025",
      title: "Build It v1 with Doublepoint Touch SDK",
      description: "Conducted the first Build It workshop featuring Doublepoint Touch SDK, enabling participants to create innovative gesture-controlled applications.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    
    // January 2025
    {
      date: "Jan 30, 2025",
      title: "DAWN Fuksi-Hackathon",
      description: "Organized the DAWN hackathon specifically designed for first-year students (fuksi) to introduce them to the startup ecosystem.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    {
      date: "Jan 29, 2025",
      title: "Japan Osaka-Tokyo Expedition Announcement",
      description: "Announced the upcoming Japan Expedition to Osaka and Tokyo, strengthening our international presence in the Asian tech ecosystem.",
      type: "added" as const,
      initiative: "International"
    },
    {
      date: "Jan 28, 2025",
      title: "VTT x Aaltoes 2025 Dual Use Program",
      description: "Announced a strategic partnership with VTT for the 2025 Dual Use Program, focusing on technologies with both civilian and defense applications.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    {
      date: "Jan 22, 2025",
      title: "BrainHack Neuro Hackathon",
      description: "Organized the BrainHack Neuro hackathon, bringing together neuroscience and technology to solve complex brain-related challenges.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    {
      date: "Jan 21, 2025",
      title: "Sauna Cleanup",
      description: "Completed a comprehensive cleanup and renovation of the Aaltoes sauna space to improve the community experience.",
      type: "updated" as const
    },
    {
      date: "Jan 20, 2025",
      title: "AI-Operated Brandbook Launch",
      description: "Launched the first AI-operated brandbook, revolutionizing how we maintain and apply our brand guidelines.",
      type: "added" as const
    },
    {
      date: "Jan 19, 2025",
      title: "Board Fully Operational",
      description: "The new board has fully started their work, with all roles and responsibilities assigned and initial projects underway.",
      type: "updated" as const
    },
    {
      date: "Jan 14, 2025",
      title: "Talvipäivä Event",
      description: "Hosted the annual Talvipäivä winter event, bringing together the Aaltoes community for networking and winter activities.",
      type: "added" as const
    },
    {
      date: "Jan 10, 2025",
      title: "Website Full Update",
      description: "Completed a comprehensive redesign of the Aaltoes website with improved navigation, accessibility, and content organization.",
      type: "updated" as const
    },
    {
      date: "Jan 5, 2025",
      title: "2025 Planning Session",
      description: "Conducted a strategic planning session with the board and key stakeholders to define our 2025 initiatives and goals.",
      type: "added" as const
    }
  ]

  // Filter entries based on selected initiative
  const filteredEntries = filter 
    ? logEntries.filter(entry => entry.initiative === filter)
    : logEntries

  // Group entries by month
  const entriesByMonth: Record<string, typeof logEntries> = {}
  filteredEntries.forEach(entry => {
    const month = entry.date.split(' ')[0] + ' ' + entry.date.split(' ')[2] // e.g., "Feb 2025"
    if (!entriesByMonth[month]) {
      entriesByMonth[month] = []
    }
    entriesByMonth[month].push(entry)
  })

  // Get unique initiatives for filter
  const initiatives = Array.from(new Set(logEntries.filter(entry => entry.initiative).map(entry => entry.initiative))) as string[]

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-16 pt-32">
        {/* Hero Section */}
        <div className="space-y-8">
          {/* Heading and Description */}
          <motion.div 
            className="text-center"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <div className="space-y-6">
              <Link 
                to="/2025"
                className="inline-flex items-center gap-4 text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-wide hover:text-zinc-200 transition-colors"
              >
                Paramount Year of Craft
              </Link>
              <h1 className="text-3xl md:text-4xl font-medium text-zinc-100">The Log</h1>
              <p className="text-base md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                A transparent record of updates, changes, and improvements to our initiatives and projects.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-px bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950" />

        {/* Main Content */}
        <div className="space-y-16">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 px-0">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group overflow-hidden ${
                filter === null 
                  ? 'bg-zinc-800 text-zinc-100' 
                  : 'bg-zinc-900/50 text-zinc-400'
              }`}
            >
              <span className="relative z-10">All Updates</span>
              {filter !== null && (
                <div className="absolute inset-0 bg-zinc-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}
            </button>
            
            {initiatives.map((initiative) => (
              <button
                key={initiative}
                onClick={() => setFilter(initiative)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative group overflow-hidden ${
                  filter === initiative 
                    ? 'bg-zinc-800 text-zinc-100' 
                    : 'bg-zinc-900/50 text-zinc-400'
                }`}
              >
                <span className="relative z-10">{initiative}</span>
                {filter !== initiative && (
                  <div className="absolute inset-0 bg-zinc-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="space-y-16">
            {Object.entries(entriesByMonth).map(([month, entries]) => (
              <MonthSection key={month} month={month}>
                {entries.map((entry, index) => (
                  <LogEntry
                    key={index}
                    date={entry.date ?? ''}
                    title={entry.title ?? ''}
                    description={entry.description ?? ''}
                    type={entry.type ?? ''}
                    initiative={entry.initiative ?? ''}
                  />
                ))}
              </MonthSection>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-950" />

        {/* Responsible Person Card */}
        <section>
          <motion.div
            className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            {/* Container for profile and buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              {/* Profile Info */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-900 flex-shrink-0">
                  <img 
                    src="/board/siiri.png" 
                    alt="Siiri Lautamies"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-zinc-100">Siiri Lautamies</h3>
                  <p className="text-zinc-400 font-normal">Documentation Responsible</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 px-0">
                <a 
                  href="https://github.com/aaltoes-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto relative overflow-hidden"
                >
                  <span className="relative z-10 uppercase text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    GitHub
                  </span>
                  <div className="absolute inset-0 -m-[1px] rounded-lg bg-zinc-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
                
                <a 
                  href="mailto:siiri.lautamies@aaltoes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto relative overflow-hidden"
                >
                  <span className="relative z-10 uppercase text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Contact
                  </span>
                  <div className="absolute inset-0 -m-[1px] rounded-lg bg-zinc-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
} 