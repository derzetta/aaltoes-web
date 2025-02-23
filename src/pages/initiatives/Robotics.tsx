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



// Add medal emojis
const MEDALS = {
  GOLD: "🥇",
  SILVER: "🥈",
  BRONZE: "🥉",
}

const AchievementMarker = ({ 
  x, 
  y, 
  location, 
  flag, 
  achievements 
}: { 
  x: string, 
  y: string, 
  location: string, 
  flag: string, 
  achievements: string[] 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getMedal = (achievement: string, location: string) => {
    // Special cases for New Delhi and Chiang Mai - no gold for Certificate of Excellence
    if ((location === "New Delhi" || location === "Chiang-Mai") && 
        achievement.includes("Certificate of Excellence")) {
      return null;
    }
    
    // Gold medals
    if (achievement.includes("Excellence Award") ||
        achievement.includes("Design Award") ||
        achievement.includes("Judges Award")) {
      return MEDALS.GOLD;
    }

    // Silver medals
    if (achievement.toLowerCase().includes("finalist")) {
      return MEDALS.SILVER;
    }

    // Keep existing logic for other cases
    if (achievement.includes("1st place") || 
        achievement.includes("Sportsmanship Award")) {
      return MEDALS.GOLD;
    }
    if (achievement.includes("2nd place")) {
      return MEDALS.SILVER;
    }
    if (achievement.includes("3rd place")) {
      return MEDALS.BRONZE;
    }

    return null;
  };

  return (
    <div 
      className="absolute text-left"
      style={{ left: x, top: y }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors"
      >
        <span>{flag}</span>
        <span className="font-mono uppercase relative">
          {location}
          <span className="absolute -bottom-1 left-0 w-full h-px bg-zinc-700 group-hover:bg-zinc-500 transition-colors" />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="inline-block ml-1 -translate-y-[1px] group-hover:translate-x-0.5 transition-transform"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 top-full mt-2 z-50 bg-zinc-900/95 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-4 min-w-[240px] shadow-xl"
        >
          <div className="space-y-1.5">
            {achievements.map((achievement, i) => (
              <div key={i} className="text-sm font-mono text-zinc-400 leading-relaxed flex items-start gap-2">
                <span className="mt-0.5 shrink-0">
                  {getMedal(achievement, location)}
                </span>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Mobile achievement card component
const AchievementCard = ({
  location,
  flag,
  achievements
}: {
  location: string,
  flag: string,
  achievements: string[]
}) => {
  const getMedal = (achievement: string, location: string) => {
    // Special cases for New Delhi and Chiang Mai - no gold for Certificate of Excellence
    if ((location === "New Delhi" || location === "Chiang-Mai") && 
        achievement.includes("Certificate of Excellence")) {
      return null;
    }
    
    // Gold medals
    if (achievement.includes("Certificate of Excellence") ||
        achievement.includes("Design Award") ||
        achievement.includes("Judges Award")) {
      return MEDALS.GOLD;
    }

    // Silver medals
    if (achievement.toLowerCase().includes("finalist")) {
      return MEDALS.SILVER;
    }

    // Keep existing logic for other cases
    if (achievement.includes("1st place") || 
        achievement.includes("Sportsmanship Award")) {
      return MEDALS.GOLD;
    }
    if (achievement.includes("2nd place")) {
      return MEDALS.SILVER;
    }
    if (achievement.includes("3rd place")) {
      return MEDALS.BRONZE;
    }

    return null;
  };

  return (
  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/50 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl">{flag}</span>
      <div>
        <h3 className="font-mono uppercase text-zinc-200 font-medium">{location}</h3>
          <div className="h-px w-full bg-zinc-800 mt-2" />
      </div>
    </div>
    <div className="space-y-2">
      {achievements.map((achievement, i) => (
        <div key={i} className="text-sm font-mono text-zinc-400 leading-relaxed flex items-start gap-2">
          <span className="mt-0.5 shrink-0">
              {getMedal(achievement, location)}
          </span>
          <span>{achievement}</span>
        </div>
      ))}
    </div>
  </div>
)
}

// Add region types
const regions = {
  AMERICAS: 'Americas',
  EUROPE: 'Europe',
  ASIA: 'Asia'
} as const

type Region = typeof regions[keyof typeof regions]

// Consolidated achievements data
  const achievementsByRegion = {
    [regions.AMERICAS]: [
      {
        location: "San-Jose",
        flag: "🇨🇷",
      x: "8%",
      y: "75%",
        achievements: [
          "World Robot Olympiad 2017 - 4th place"
        ]
      },
      {
        location: "Dallas",
        flag: "🇺🇸",
      x: "11%",
      y: "45%",
        achievements: [
          "VEX Worlds Middle School Championship 2022 - 2nd place",
          "VEX Worlds Middle School Championship 2022 - TOP 16"
        ]
      },
      {
        location: "Iowa",
        flag: "🇺🇸",
      x: "20%",
      y: "30%",
        achievements: [
          "US Open 2022 - 1st place in total rankings",
          "2nd place in individual"
        ]
      },
      {
        location: "Washington",
        flag: "🇺🇸",
      x: "20%",
      y: "40%",
        achievements: [
          "FIRST Global 2017 - 5th place"
        ]
      },
      {
        location: "Louisville",
        flag: "🇺🇸",
      x: "5%",
      y: "35%",
        achievements: [
          "VEX Worlds Middle School Championship 2017",
          "VEX Worlds Middle School Championship 2018 - TOP 16",
          "VEX World 2020 - 8th",
          "MS Programming Skills - Champion Sportsmanship Award"
        ]
      }
    ],
    [regions.EUROPE]: [
      {
        location: "London",
        flag: "🇬🇧",
      x: "42%",
      y: "25%",
        achievements: [
          "First Lego VEX Championship 2019",
          "Judges Award, Tournament Finalist",
          "Hartfordshire VEX 2020 - Judges Award"
        ]
      },
      {
        location: "Dortmund",
        flag: "🇩🇪",
      x: "50%",
      y: "30%",
        achievements: [
          "World Robot Olympiad 2021 - 1st place"
        ]
      },
      {
        location: "Geneva",
        flag: "🇨🇭",
      x: "47%",
      y: "37%",
        achievements: [
          "First Global 2022 - 1st place"
        ]
      },
      {
        location: "Athens",
        flag: "🇬🇷",
      x: "52%",
      y: "45%",
        achievements: [
          "First Global 2024 - 1st place"
        ]
      },
      {
        location: "Istanbul",
        flag: "🇹🇷",
      x: "58%",
      y: "50%",
        achievements: [
          "Turkey National VEX Competition 2018 - 1st place"
        ]
      },
      {
        location: "Moscow",
        flag: "🇷🇺",
      x: "60%",
      y: "25%",
        achievements: [
          "PROFEST 2017 - 1st place",
          "PROFEST 2018 - 2nd place"
        ]
      }
    ],
    [regions.ASIA]: [
      {
        location: "Astana",
        flag: "🇰🇿",
      x: "65%",
      y: "40%",
        achievements: [
          "World Robot Olympiad Kazakhstan 2016 - 1st place",
          "World Robot Olympiad Kazakhstan 2017 - 1st place",
          "World Robot Olympiad Kazakhstan 2018 - 1st place"
        ]
      },
      {
        location: "Beijing",
        flag: "🇨🇳",
      x: "85%",
      y: "35%",
        achievements: [
          "World Robot Olympiad 2019 - Sportsmanship Award"
        ]
      },
      {
        location: "Guangzhou",
        flag: "🇨🇳",
      x: "87%",
      y: "50%",
        achievements: [
        "Make World Championship 2019 - Excellence Award"
        ]
      },
      {
        location: "Macao",
        flag: "🇲🇴",
      x: "82%",
      y: "60%",
        achievements: [
        "Pacific Asian VEX Championship 2019 - Excellence Award"
        ]
      },
      {
        location: "Singapore",
        flag: "🇸🇬",
      x: "89%",
      y: "70%",
        achievements: [
          "First Global 2023 - 1st place"
        ]
      },
      {
        location: "New Delhi",
        flag: "🇮🇳",
      x: "70%",
      y: "60%",
        achievements: [
          "World Robot Olympiad 2016 - Certificate of Excellence"
        ]
      },
      {
        location: "Bangkok",
        flag: "🇹🇭",
      x: "82%",
      y: "80%",
        achievements: [
          "Battle in Bangkok 2018 - 1st place"
        ]
      },
      {
        location: "Chiang-Mai",
        flag: "🇹🇭",
      x: "78%",
      y: "72%",
        achievements: [
          "World Robot Olympiad 2018 - Certificate of Excellence"
        ]
      }
    ]
};

const WorldMapSection = () => {
  const [activeRegion, setActiveRegion] = useState<Region>(regions.AMERICAS)

  return (
    <section className="relative mt-24">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl font-medium text-zinc-100">
          Worldwide Excellence
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          From Dallas to Singapore, our teams have achieved remarkable success across the globe.
        </p>
      </div>

      {/* Desktop Map View */}
      <div className="hidden md:block relative w-[120%] -mx-[10%] h-[500px] bg-gradient-to-b from-zinc-900/0 to-zinc-950/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full">
            <img 
              src="/2025/robots achievements.svg" 
              alt="World Map"
              className="w-full object-cover opacity-100"
            />
            
            {/* Map Markers */}
            {Object.values(achievementsByRegion).flat().map((city, index) => (
            <AchievementMarker
                key={`${city.location}-${index}`}
                x={city.x}
                y={city.y}
                location={city.location}
                flag={city.flag}
                achievements={city.achievements}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-8">
        {/* Note about desktop version */}
        <div className="px-4 py-3 bg-zinc-900/50 border border-zinc-800/50 rounded-lg text-sm text-zinc-400">
          💡 <span className="text-zinc-300">Pro tip:</span> View on desktop for an interactive world map of our achievements
        </div>

        {/* Region Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide px-4 gap-2">
          {Object.values(regions).map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`
                px-4 py-2 rounded-lg font-mono text-sm whitespace-nowrap transition-colors
                ${activeRegion === region 
                  ? 'bg-zinc-800 text-zinc-200' 
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-300'}
              `}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="px-4 space-y-4">
          {achievementsByRegion[activeRegion].map((city, i) => (
            <AchievementCard key={i} {...city} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Robotics() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-16 pt-32">
        {/* Hero Section */}
        <div className="space-y-16">
          {/* Heading and Description */}
          <motion.div 
            className="text-center"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <div className="space-y-6">
            <Link 
              to="/2025"
                className="inline-flex items-center gap-4 text-sm font-mono text-zinc-400 uppercase tracking-wide hover:text-zinc-200 transition-colors"
            >
              Paramount Year of Craft
                <span className="h-4 w-px bg-zinc-800"></span>
                <span className="text-sm font-mono text-zinc-400 px-2 py-1 bg-zinc-950/50 rounded border border-zinc-400/20">
                  NEW PROJECT
                </span>
            </Link>
              <h1 className="text-3xl md:text-5xl font-medium text-zinc-100">Robotics Nation</h1>
            <p className="text-base md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Building the future of robotics through education, innovation, and hands-on experience.
            </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800" />


        {/* Vision Section */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-100">Robotics Nation</h2>
            <p className="text-base md:text-lg text-zinc-400 max-w-3xl mx-auto">
              Equipping Finnish youth with technical skills and hands-on engineering experience for an era of technological innovation.
            </p>
          </div>

          {/* Linear Vision with Dividers */}
          <div className="max-w-7xl mx-auto">
            {/* First Row - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 relative">
              {/* Vertical Divider */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-900 -translate-x-1/2" />
              
              {/* Current Challenge */}
              <div className="pb-8 md:pb-0 md:pr-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M2 12h20"/>
                  </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="text-sm font-mono text-zinc-500 uppercase">Current Challenge</div>
                      <div className="text-sm font-mono text-zinc-500 uppercase">Ranked #71 Globally</div>
                    </div>
                    <p className="mt-4 text-zinc-300 leading-relaxed">
                      Despite strong educational foundations and individual achievements, Finland's competitive robotics ecosystem remains fragmented. Our current ranking doesn't reflect the true potential of our technical talent.
                    </p>
                  </div>
              </div>
            </div>

              {/* Our Vision */}
              <div className="pt-8 md:pt-0 md:pl-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                      <circle cx="12" cy="12" r="3"/>
                  </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="text-sm font-mono text-zinc-500 uppercase">Our Vision</div>
                      <div className="text-sm font-mono text-zinc-500 uppercase">Target: #1 in Europe</div>
                    </div>
                    <p className="mt-4 text-zinc-300 leading-relaxed">
                      Uniting Finland's top robotics teams, educators, and industry partners under one umbrella to create a systematic approach for developing world-class technical talent through robotics.
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <img src="/2025/logos/yc.svg" alt="Y Combinator" className="h-4 opacity-70" />
                      <img src="/2025/logos/ivy.svg" alt="Ivy League" className="h-4 opacity-70" />
                      <img src="/2025/logos/stanford.svg" alt="Stanford" className="h-4 opacity-70" />
                    </div>
                  </div>
                </div>
              </div>
                </div>


            {/* Divider */}
            <div className="w-full h-px bg-zinc-900 my-8" />

            {/* Program Tracks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Foundations Track */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
              </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="text-sm font-mono text-zinc-500 uppercase">Foundations Track</div>
                    <div className="text-sm font-mono text-emerald-400 px-2 py-1 bg-emerald-950/50 rounded border border-emerald-400/20 uppercase">Active</div>
            </div>
                  <p className="mt-4 text-zinc-300 leading-relaxed">
                    Our core program focused on competitive robotics, preparing students through hands-on experience and international competitions. This track has already demonstrated success, with alumni advancing to prestigious institutions and founding successful startups.
                  </p>
          </div>
        </div>

              {/* Frontier Track */}
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="text-sm font-mono text-zinc-500 uppercase">Frontier Track</div>
                    <div className="text-sm font-mono text-amber-400 px-2 py-1 bg-amber-950/50 rounded border border-amber-400/20 uppercase">Coming Soon</div>
                  </div>
                  <p className="mt-4 text-zinc-300 leading-relaxed">
                    An advanced program focusing on industrial robotics and automation, designed for university students and industry professionals. This track will bridge the gap between academic robotics and real-world applications in the startup ecosystem.
            </p>
          </div>
            </div>
          </div>

        {/* Divider */}
            <div className="w-full h-px bg-zinc-900 my-8" />

            {/* Current Team */}
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="text-sm font-mono text-zinc-500 uppercase">Current Team</div>
                  <div className="text-sm font-mono text-zinc-500 uppercase">Growing Daily</div>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-zinc-300 leading-relaxed">
                    Our initiative brings together:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                        <span>3 World Champion Robotics Teams</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                        <span>5 University Research Labs</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                        <span>12 Industry Partners</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                        <span>20+ Active Mentors</span>
                      </li>
                    </ul>
          </div>
                </div>
              </div>
            </div>

            {/* Team Profiles */}
            <div className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { 
                    name: "Mikko Virtanen", 
                    role: "Lead Engineer",
                    achievements: ["Led 3 world champion teams", "12+ years robotics experience", "Pioneered AI-driven robotics"],
                    previousRoles: ["Technical Director at VEX Robotics", "Research Lead at Aalto University"],
                    contact: "mikko@robotics.fi"
                  },
                  { 
                    name: "Laura Korhonen", 
                    role: "Research Director",
                    achievements: ["Published 15+ papers in robotics", "Founded 2 robotics labs", "Patent holder for autonomous systems"],
                    previousRoles: ["Senior Researcher at TKK", "Visiting Scholar at MIT"],
                    contact: "laura@robotics.fi"
                  },
                  { 
                    name: "Antti Mäkelä", 
                    role: "Competition Lead",
                    achievements: ["Organized 20+ international competitions", "Trained 100+ teams", "World Champion Coach 2023"],
                    previousRoles: ["Head Judge at World Robot Olympiad", "Competition Director"],
                    contact: "antti@robotics.fi"
                  },
                  { 
                    name: "Kristin Boyer", 
                    role: "Project Manager",
                    achievements: ["Managed $5M+ robotics projects", "Built 3 innovation labs", "Led 5 successful product launches"],
                    previousRoles: ["Innovation Lead", "Strategy Consultant"],
                    contact: "kristin@robotics.fi"
                  },
                  { 
                    name: "Erik Lindström", 
                    role: "Technical Lead",
                    achievements: ["Developed award-winning control systems", "8+ years in industrial robotics", "IEEE Robotics Fellow"],
                    previousRoles: ["Senior Engineer at ABB", "Research Scientist"],
                    contact: "erik@robotics.fi"
                  },
                  { 
                    name: "Maria Nieminen", 
                    role: "Education Lead",
                    achievements: ["Created national robotics curriculum", "Trained 200+ educators", "Education Innovation Award 2023"],
                    previousRoles: ["STEM Education Director", "University Lecturer"],
                    contact: "maria@robotics.fi"
                  }
                ].map((member, i) => (
                  <div key={i} className="group relative">
                    <div className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-zinc-800/50 transition-colors">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-800 shrink-0">
                        <img 
                          src={`/2025/team/member${i + 1}.jpg`}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-zinc-200 truncate group-hover:text-white transition-colors">
                          {member.name}
                        </div>
                        <div className="text-xs font-mono text-zinc-500 uppercase truncate group-hover:text-zinc-300 transition-colors">
                          {member.role}
                        </div>
                      </div>
                    </div>

                    {/* Hover Card */}
                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 top-full mt-2 z-50 w-72 bg-zinc-900/95 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-4 shadow-xl transition-all duration-200">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                          <img 
                            src={`/2025/team/member${i + 1}.jpg`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-zinc-200">{member.name}</div>
                          <div className="text-sm font-mono text-zinc-500 uppercase">{member.role}</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Achievements</div>
                          <ul className="space-y-1">
                            {member.achievements.map((achievement, j) => (
                              <li key={j} className="text-sm text-zinc-300 flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Previous Roles</div>
                          <ul className="space-y-1">
                            {member.previousRoles.map((role, j) => (
                              <li key={j} className="text-sm text-zinc-300 flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                                {role}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Contact</div>
                          <div className="text-sm text-zinc-300">{member.contact}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800" />


        {/* World Map Section */}
        <WorldMapSection />

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800" />

        {/* Timeline Section - Changelog Style */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-zinc-100 mb-4">2024 Roadmap</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              A comprehensive plan to build Finland's robotics excellence
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-zinc-800" />
                
                <div className="space-y-12">
                  <div className="relative">
                    <div className="absolute -left-8 top-[22px] w-4 h-4 rounded-full border-2 border-zinc-700 bg-zinc-900" />
                    <div className="pl-4">
                      <div className="flex items-baseline gap-4 mb-6">
                        <time className="text-sm font-mono text-zinc-500">MAY</time>
                        <h3 className="text-lg font-medium text-zinc-200">Foundation Phase</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-4">
                          <div className="text-sm font-mono text-zinc-500 mb-2">Infrastructure</div>
                          <p className="text-zinc-400">Acquiring comprehensive robotics equipment: VEX, FIRST, and drone racing kits</p>
                        </div>
                        <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-4">
                          <div className="text-sm font-mono text-zinc-500 mb-2">Education</div>
                          <p className="text-zinc-400">Establishing detailed curricula and training programs</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 top-[22px] w-4 h-4 rounded-full border-2 border-zinc-700 bg-zinc-900" />
                    <div className="pl-4">
                      <div className="flex items-baseline gap-4 mb-6">
                        <time className="text-sm font-mono text-zinc-500">JUNE-JULY</time>
                        <h3 className="text-lg font-medium text-zinc-200">Training Launch</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-4">
                          <div className="text-sm font-mono text-zinc-500 mb-2">Teacher Training</div>
                          <p className="text-zinc-400">Intensive programs led by world champion coaches</p>
                        </div>
                        <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-4">
                          <div className="text-sm font-mono text-zinc-500 mb-2">Summer Camps</div>
                          <p className="text-zinc-400">Advanced robotics training and team formation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 top-[22px] w-4 h-4 rounded-full border-2 border-zinc-700 bg-zinc-900" />
                    <div className="pl-4">
                      <div className="flex items-baseline gap-4 mb-6">
                        <time className="text-sm font-mono text-zinc-500">AUGUST</time>
                        <h3 className="text-lg font-medium text-zinc-200">Global Stage</h3>
                      </div>
                      <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-4">
                        <div className="text-sm font-mono text-zinc-500 mb-2">World Robot Conference</div>
                        <p className="text-zinc-400">Selected teams represent Finland at WRC China</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 top-[22px] w-4 h-4 rounded-full border-2 border-zinc-700 bg-zinc-900" />
                    <div className="pl-4">
                      <div className="flex items-baseline gap-4 mb-6">
                        <time className="text-sm font-mono text-zinc-500">SEPTEMBER-DECEMBER</time>
                        <h3 className="text-lg font-medium text-zinc-200">Competition Phase</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-4">
                          <div className="text-sm font-mono text-zinc-500 mb-2">Local Events</div>
                          <p className="text-zinc-400">Three qualification competitions across Finland</p>
                        </div>
                        <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-4">
                          <div className="text-sm font-mono text-zinc-500 mb-2">Team Selection</div>
                          <p className="text-zinc-400">Identifying top teams for international events</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800" />

        {/* Partners Section */}
        <section className="mt-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-medium text-zinc-100">
              Supported by Global Leaders
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Partnering with the world's leading defense and technology companies
            </p>
          </div>

          {/* Company Logos - 2 rows */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center justify-center p-6 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl">
                <img 
                  src={`/2025/partners/company${i + 1}.svg`}
                  alt={`Partner Company ${i + 1}`}
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800" />

        {/* Get Involved */}
        <section>
          <motion.div
            className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-2xl p-12 text-center"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            <h2 className="text-2xl font-medium text-zinc-100 mb-4">Join the Revolution</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
              Be part of Finland's robotics future. Whether you're a beginner or expert, there's a place for you in our program.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center w-full sm:w-auto">
              <a 
                href="https://form.typeform.com/to/mGQRO8Te"
                target="_blank"
                rel="noopener noreferrer"
                className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto"
              >
                <span className="relative z-10 uppercase">Apply Now</span>
                <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
              <a 
                href="https://t.me/+1P42HmirI81lYTMy"
                target="_blank"
                rel="noopener noreferrer"
                className="base-button inline-flex items-center justify-center group h-10 px-4 w-full sm:w-auto"
              >
                <span className="relative z-10 uppercase">Robotics Chat</span>
                <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
} 