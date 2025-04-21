import { Link } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router'
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
  index: number
  isFirstOfMonth?: boolean
  month?: string
}

const LogEntry = ({ date, title, description, type, initiative }: LogEntryProps) => {
  // Define colors based on initiative
  const initiativeColors = {
    Robotics: 'bg-purple-700',
    Blueprint: 'bg-cyan-700',
    OpenSource: 'bg-green-700',
    International: 'bg-yellow-700',
    FocusTopics: 'bg-pink-700',
    Spinout: 'bg-orange-700'
  }

  // Define text colors based on initiative
  const initiativeTextColors = {
    Robotics: 'text-purple-300',
    Blueprint: 'text-cyan-300',
    OpenSource: 'text-green-300',
    International: 'text-yellow-300',
    FocusTopics: 'text-pink-300',
    Spinout: 'text-orange-300'
  }

  // Define border colors based on initiative
  const initiativeBorderColors = {
    Robotics: 'border-purple-700',
    Blueprint: 'border-cyan-700',
    OpenSource: 'border-green-700',
    International: 'border-yellow-700',
    FocusTopics: 'border-pink-700',
    Spinout: 'border-orange-700'
  }

  // Determine dot color - use initiative color if available

  // Determine icon color - use initiative text color if available, otherwise use white
  const iconColor = initiative && initiativeTextColors[initiative as keyof typeof initiativeTextColors]
    ? initiativeTextColors[initiative as keyof typeof initiativeTextColors]
    : 'text-zinc-100' // Default white for entries without initiative

  // Determine border color - use initiative border color if available, otherwise use default
  const borderColor = initiative && initiativeBorderColors[initiative as keyof typeof initiativeBorderColors]
    ? initiativeBorderColors[initiative as keyof typeof initiativeBorderColors]
    : 'border-zinc-800' // Default for entries without initiative

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

  // Extract day from date
  const day = date.split(' ')[1].replace(',', '')

  return (
    <div className="relative">
      {/* Day marker on y-axis */}
      <div className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center">
        <div className="text-xs font-mono text-zinc-400">{day}</div>
      </div>
      
      {/* Content Card */}
      <div className="ml-10 md:ml-14 relative">
        <div className={`bg-zinc-900/40 backdrop-blur-sm border ${borderColor} rounded-lg p-4 hover:bg-zinc-900/60 transition-colors duration-200`}>
          <div className="flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-medium text-zinc-100">{title}</h3>
              <div className="flex items-center gap-2 flex-shrink-0">
                {initiative && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${initiativeColors[initiative as keyof typeof initiativeColors]} bg-opacity-20 ${initiativeTextColors[initiative as keyof typeof initiativeTextColors]}`}>
                    {initiative}
                  </span>
                )}
                <span className="flex items-center justify-center w-5 h-5">
                  {getTypeIcon(type)}
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Month Header Component
interface MonthHeaderProps {
  month: string;
  id: string;
}

const MonthHeader = ({ month, id }: MonthHeaderProps) => (
  <div id={id} className="mb-3 sticky top-36 z-10">
    <div className="inline-block">
      <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider bg-zinc-950/90 backdrop-blur-sm py-2 px-2 
      md:transform-none md:absolute md:-left-24 md:top-0
      transform -rotate-90 origin-bottom-left absolute -left-2 top-16">
        {month}
      </div>
    </div>
  </div>
);

export default function Log() {
  const { pathname } = useLocation()
  const [filter, setFilter] = useState<string | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [, setActiveMonth] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const monthHeaders = timelineRef.current.querySelectorAll('[id^="month-"]');
        
        // Find the current visible month
        for (let i = 0; i < monthHeaders.length; i++) {
          const header = monthHeaders[i];
          const rect = header.getBoundingClientRect();
          
          // If the header is in view or just above the viewport
          if (rect.top <= 160) {
            setActiveMonth(header.id);
            
            // Check if the next month header is about to come into view
            if (i < monthHeaders.length - 1) {
              const nextHeader = monthHeaders[i + 1];
              const nextRect = nextHeader.getBoundingClientRect();
              
              if (nextRect.top <= 160) {
                setActiveMonth(nextHeader.id);
              }
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample log data
  const logEntries = [
    // March 2025
    {
      date: "Mar 25, 2025",
      title: "European Robotics Championship Support",
      description: "Aaltoes 2025 co-organizes and supports the European Robotics Championship in Riihimäki, marking a significant milestone in Finnish robotics.",
      type: "added" as const,
      initiative: "Robotics"
    },
    {
      date: "Mar 24, 2025",
      title: "Open Source Projects Expansion",
      description: "Added 8 new computer open source projects to the Aaltoes GitHub repository, enhancing our contribution to the open source community.",
      type: "added" as const,
      initiative: "OpenSource"
    },
    {
      date: "Mar 23, 2025",
      title: "First Computer Vision Hackathon",
      description: "Organized the first-ever computer vision hackathon with 50 teams competing, featuring fake vs real segmentation challenge.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    {
      date: "Mar 21, 2025",
      title: "First English Vaalilöylyt Election Panel",
      description: "Hosted the first-ever English language Vaalilöylyt Election panel featuring top-tier Finnish politicians, making politics more accessible to international community.",
      type: "added" as const,
      initiative: "International"
    },
    {
      date: "Mar 16, 2025",
      title: "Robotics Nation Expansion",
      description: "Robot Uprising and Riihimäki Robotikkakampus join the Robotics Nation project, strengthening the robotics ecosystem in Finland.",
      type: "updated" as const,
      initiative: "Robotics"
    },
    {
      date: "Mar 13, 2025",
      title: "Explore Startup Sauna Event",
      description: "Successfully organized the Explore Startup Sauna event, fostering entrepreneurship and innovation in the startup ecosystem.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    {
      date: "Mar 7, 2025",
      title: "Aaltoes 2025 Patches Added to Store",
      description: "Added exclusive Aaltoes 2025 patches to the Aaltoes store, celebrating the Paramount Year of Crafting initiative.",
      type: "added" as const
    },
    {
      date: "Mar 1, 2025",
      title: "Port_25 Hackathon",
      description: "Port_25 hackathon was organised on March 1-2, bringing together developers and innovators to collaborate on cutting-edge technology solutions.",
      type: "added" as const,
      initiative: "FocusTopics"
    },
    
    // February 2025
    {
      date: "Feb 25, 2025",
      title: "Launch of Robotics Nation Program",
      description: "Launched the Robotics Nation Program, a comprehensive initiative to advance robotics education and innovation across Finland.",
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
    ? logEntries.filter(entry => entry.initiative && entry.initiative.toLowerCase() === filter.toLowerCase())
    : logEntries

  // Reset active month when filter changes
  useEffect(() => {
    setActiveMonth(null);
    // Force recalculation of timeline
    setTimeout(() => {
      if (timelineRef.current) {
        const monthHeaders = timelineRef.current.querySelectorAll('[id^="month-"]');
        if (monthHeaders.length > 0) {
          const firstHeader = monthHeaders[0];
          setActiveMonth(firstHeader.id);
        }
      }
    }, 200);
  }, [filter]);

  // Create a continuous timeline with all days
  const createContinuousTimeline = () => {
    // Sort entries by date (newest first)
    const sortedEntries = [...filteredEntries].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    if (sortedEntries.length === 0) {
      console.log("No entries found for the selected filter");
      return [];
    }

    console.log("Sorted entries:", sortedEntries.map(e => e.title));

    // Find the earliest and latest dates
    const latestDate = new Date(sortedEntries[0].date);
    const earliestDate = new Date(sortedEntries[sortedEntries.length - 1].date);
    
    // Create a map to store entries by date string
    const entriesByDate = new Map();
    sortedEntries.forEach(entry => {
      const date = new Date(entry.date);
      const month = date.toLocaleDateString('en-US', { month: 'long' });
      entriesByDate.set(entry.date, {...entry, month});
    });
    
    // Create a continuous timeline with all days
    const timeline: Array<any> = [];
    const currentDate = new Date(latestDate);
    
    while (currentDate >= earliestDate) {
      const dateStr = currentDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
      
      // Check if there's an entry for this date
      const entry = entriesByDate.get(dateStr);
      
      // Add the date to the timeline (with or without an entry)
      if (entry) {
        // Check if this is the first day of a month
        const isFirstOfMonth: boolean = currentDate.getDate() === 1 || 
                             (timeline.length > 0 && 
                              new Date(timeline[timeline.length - 1].date).getMonth() !== currentDate.getMonth());
        
        const monthStr: string = currentDate.toLocaleDateString('en-US', { month: 'long' });
        
        timeline.push({
          ...entry,
          isFirstOfMonth,
          month: monthStr
        });
      } else {
        // Create an empty day marker
        const isFirstOfMonth: boolean = currentDate.getDate() === 1 || 
                             (timeline.length > 0 && 
                              new Date(timeline[timeline.length - 1].date).getMonth() !== currentDate.getMonth());
        
        const monthStr: string = currentDate.toLocaleDateString('en-US', { month: 'long' });
        
        timeline.push({
          date: dateStr,
          title: "",
          description: "",
          type: "added" as const,
          isEmptyDay: true,
          isFirstOfMonth,
          month: monthStr
        });
      }
      
      // Move to the previous day
      currentDate.setDate(currentDate.getDate() - 1);
    }
    
    return timeline;
  };

  const timelineEntries = createContinuousTimeline();

  // Group timeline entries by month
  const entriesByMonth: Record<string, any[]> = {};
  
  timelineEntries.forEach(entry => {
    const date = new Date(entry.date);
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    
    if (!entriesByMonth[month]) {
      entriesByMonth[month] = [];
    }
    
    entriesByMonth[month].push(entry);
  });
  
  // If no entries are grouped by month but we have filtered entries, create a group for them
  if (Object.keys(entriesByMonth).length === 0 && filteredEntries.length > 0) {
    const firstEntry = filteredEntries[0];
    const date = new Date(firstEntry.date);
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    
    entriesByMonth[month] = filteredEntries.map(entry => ({
      ...entry,
      hasEntry: true,
      month
    }));
  }

  // Get unique initiatives for filter
  const initiatives = Array.from(new Set(logEntries.filter(entry => entry.initiative).map(entry => entry.initiative))) as string[]
  
  // Debug log to check initiatives
  console.log("Available initiatives:", initiatives);
  console.log("Current filter:", filter);
  console.log("Filtered entries:", filteredEntries.length);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 space-y-16 pb-16 pt-32">
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
        <div className="w-full h-px bg-zinc-800" />

        {/* Main Content */}
        <div className="space-y-12">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 px-0 sticky top-0 z-30 bg-zinc-950/90 backdrop-blur-sm py-4">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                filter === null 
                  ? 'bg-zinc-800 text-zinc-100 border-zinc-700' 
                  : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
              }`}
            >
              <span>All Updates</span>
            </button>
            
            {initiatives.map((initiative) => (
              <button
                key={initiative}
                onClick={() => setFilter(initiative)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                  filter === initiative 
                    ? 'bg-zinc-800 text-zinc-100 border-zinc-700' 
                    : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
                }`}
              >
                <span>{initiative}</span>
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="pl-6 md:pl-10 relative" ref={timelineRef}>
            {/* Vertical timeline axis */}
            <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-zinc-800"></div>
            
            <AnimatePresence>
              {Object.entries(entriesByMonth).map(([month, entries]) => (
                <div key={`month-group-${month}`} className="mb-8">
                  {/* Month Header */}
                  <MonthHeader 
                    month={month} 
                    id={`month-${month.replace(/\s+/g, '-')}`} 
                  />
                  
                  {/* Month Entries */}
                  <div className="space-y-4 mt-4">
                    {entries.map((entry, index) => (
                      !entry.isEmptyDay ? (
                        <motion.div
                          key={`${entry.date}-${entry.title || index}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <LogEntry
                            date={entry.date ?? ''}
                            title={entry.title ?? ''}
                            description={entry.description ?? ''}
                            type={entry.type ?? ''}
                            initiative={entry.initiative ?? ''}
                            index={index}
                            isFirstOfMonth={entry.isFirstOfMonth}
                            month={entry.month}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`empty-${entry.date}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="relative h-6"
                        >
                          {/* Day marker on y-axis for empty days */}
                          <div className="absolute left-0 top-0 w-8 h-6 flex items-center justify-center">
                            <div className="text-xs font-mono text-zinc-600">{entry.date.split(' ')[1].replace(',', '')}</div>
                          </div>
                          
                          {/* Empty day marker */}
                          <div className="ml-12 relative h-6">
                            <div className="absolute left-[-4px] top-[11px] w-1 h-1 rounded-full bg-zinc-800"></div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800" />

        {/* Responsible Person Card */}
        <section>
          <div className="bg-zinc-950 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
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
              <div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a 
                    href="https://github.com/aaltoes-tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto"
                  >
                    <span className="uppercase flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                      GitHub
                    </span>
                  </a>
                  
                  <a 
                    href="mailto:siiri.lautamies@aaltoes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto"
                  >
                    <span className="uppercase flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      Contact
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 