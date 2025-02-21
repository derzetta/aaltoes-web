import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

interface ProgramCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  delay?: number;
}

const ProgramCard = ({ title, description, level, duration, delay = 0 }: ProgramCardProps) => (
  <motion.div
    className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-xl p-6"
    {...fadeIn}
    transition={{ ...fadeIn.transition, delay }}
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-medium text-zinc-100">{title}</h3>
      <span className="text-sm font-mono text-zinc-400 px-2 py-1 bg-zinc-900/50 rounded">{level}</span>
    </div>
    <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>
    <div className="text-sm text-zinc-500">
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-zinc-400" />
        {duration}
      </div>
    </div>
  </motion.div>
)

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
}) => (
  <div 
    className="absolute group"
    style={{ left: x, top: y }}
  >
    <div className="w-2 h-2 bg-zinc-400 rounded-full" />
    <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-3 min-w-[200px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{flag}</span>
          <span className="font-medium text-zinc-200">{location}</span>
        </div>
        <div className="space-y-1">
          {achievements.map((achievement, i) => (
            <div key={i} className="text-sm text-zinc-400">{achievement}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const WorldMapSection = () => (
  <section className="relative mt-24">
    {/* Fixed height container with bottom margin */}
    <div className="relative w-[150%] -mx-[25%] h-[500px] mb-32 bg-gradient-to-b from-zinc-900/0 to-zinc-950/50">
      {/* Milder gradient overlay */}
      
      {/* Map Container - Centers and scales the map */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full">
          <img 
            src="/2025/robots achievements.svg" 
            alt="World Map"
            className="w-full object-cover opacity-100 translate-y-[15%]"
          />
          
          {/* Achievement markers */}
          <AchievementMarker
            x="15%"
            y="30%"
            location="Louisville"
            flag="🇺🇸"
            achievements={[
              "VEX Worlds Middle School Championship 2018 - TOP 16",
              "VEX World 2020 - 8th",
              "MS Programming Skills - Champion"
            ]}
          />
          
          <AchievementMarker
            x="45%"
            y="25%"
            location="London"
            flag="🇬🇧"
            achievements={[
              "First Global VEX Championship 2019",
              "Judges Award - Tournament Finalist",
              "Judges Award"
            ]}
          />

          <AchievementMarker
            x="85%"
            y="35%"
            location="Beijing"
            flag="🇨🇳"
            achievements={[
              "World Robot Olympiad 2019",
              "Sportsmanship Award"
            ]}
          />
        </div>
      </div>
    </div>

    {/* Text content with fixed top margin */}
    <div className="relative z-20 text-center space-y-4">
      <h2 className="text-3xl font-medium text-zinc-100">
        Global Achievement Record
      </h2>
      <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
        Our teams have competed and excelled in robotics competitions worldwide, from VEX Robotics to First Global challenges.
      </p>
    </div>
  </section>
)

export default function Robotics() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const programs = [
    {
      title: "Robotics Fundamentals",
      description: "Introduction to robotics principles, programming, and basic hardware components.",
      level: "Beginner",
      duration: "8 weeks"
    },
    {
      title: "Advanced Automation",
      description: "Deep dive into industrial automation, control systems, and advanced programming.",
      level: "Advanced",
      duration: "12 weeks"
    },
    {
      title: "AI & Robotics",
      description: "Integration of artificial intelligence and machine learning in robotics applications.",
      level: "Intermediate",
      duration: "10 weeks"
    }
  ]

  const projects = [
    {
      title: "Smart Factory Lab",
      description: "Hands-on experience with industrial robots and automation systems in a controlled environment.",
      level: "Advanced",
      duration: "Ongoing"
    },
    {
      title: "Robotics Competition",
      description: "Annual competition challenging teams to solve real-world problems using robotics.",
      level: "All Levels",
      duration: "3 months"
    },
    {
      title: "Research Projects",
      description: "Collaborative research opportunities with industry partners and academic institutions.",
      level: "Expert",
      duration: "6-12 months"
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 space-y-16 pb-16">
        {/* Topic Navigation */}
        <div className="flex items-center justify-center gap-8 pt-8">
          <Link 
            to="/2025/blueprint"
            className="base-button inline-flex items-center justify-center group"
          >
            <span className="relative z-10 uppercase flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Blueprint Project
            </span>
          </Link>
          <Link 
            to="/2025/focus-topics"
            className="base-button inline-flex items-center justify-center group"
          >
            <span className="relative z-10 uppercase flex items-center gap-2">
              Focus Topics
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="space-y-16">
          {/* Heading and Description */}
          <motion.div 
            className="text-center"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <Link 
              to="/2025"
              className="inline-block text-sm font-mono text-zinc-400 uppercase tracking-wide mb-4 hover:text-zinc-200 transition-colors"
            >
              Paramount Year of Craft
            </Link>
            <h1 className="text-5xl font-medium text-zinc-100 mb-6">Robotics Nation</h1>
            <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Building the future of robotics through education, innovation, and hands-on experience.
            </p>
          </motion.div>

          {/* Video Section */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/65 group">
            <video
              id="heroVideo"
              className="w-full h-full object-cover"
              playsInline
            >
              <source src="/fr.mov" type="video/quicktime" />
            </video>

            {/* Video Overlay - Play State */}
            <div className="absolute inset-0 bg-zinc-950/50 transition-opacity duration-200 group-hover:opacity-0 group-[.playing]:opacity-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => {
                    const video = document.getElementById('heroVideo') as HTMLVideoElement;
                    const container = video?.closest('.group');
                    if (video) {
                      if (video.paused) {
                        video.play();
                        container?.classList.add('playing');
                      } else {
                        video.pause();
                        container?.classList.remove('playing');
                      }
                    }
                  }}
                  className="w-16 h-16 rounded-full bg-zinc-100/10 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-100/20 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="flex items-center gap-6">
                {/* Play/Pause */}
                <button 
                  onClick={() => {
                    const video = document.getElementById('heroVideo') as HTMLVideoElement;
                    const container = video?.closest('.group');
                    if (video) {
                      if (video.paused) {
                        video.play();
                        container?.classList.add('playing');
                      } else {
                        video.pause();
                        container?.classList.remove('playing');
                      }
                    }
                  }}
                  className="text-zinc-300 hover:text-zinc-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      const video = document.getElementById('heroVideo') as HTMLVideoElement;
                      if (video) {
                        video.muted = !video.muted;
                      }
                    }}
                    className="text-zinc-300 hover:text-zinc-100 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  </button>
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.1"
                    defaultValue="1"
                    onChange={(e) => {
                      const video = document.getElementById('heroVideo') as HTMLVideoElement;
                      if (video) {
                        video.volume = parseFloat(e.target.value);
                      }
                    }}
                    className="w-24 accent-zinc-100"
                  />
                </div>

                {/* Fullscreen */}
                <button 
                  onClick={() => {
                    const video = document.getElementById('heroVideo') as HTMLVideoElement;
                    if (video) {
                      if (document.fullscreenElement) {
                        document.exitFullscreen();
                      } else {
                        video.classList.remove('object-cover');
                        video.classList.add('object-contain');
                        video.requestFullscreen();
                        
                        const handleFullscreenChange = () => {
                          if (!document.fullscreenElement) {
                            video.classList.remove('object-contain');
                            video.classList.add('object-cover');
                            document.removeEventListener('fullscreenchange', handleFullscreenChange);
                          }
                        };
                        document.addEventListener('fullscreenchange', handleFullscreenChange);
                      }
                    }
                  }}
                  className="text-zinc-300 hover:text-zinc-100 transition-colors ml-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-medium text-zinc-100">Training Programs</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Comprehensive courses designed to build expertise in robotics and automation.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <ProgramCard
                  key={program.title}
                  {...program}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-950" />

        {/* Practical Projects */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-medium text-zinc-100">Practical Projects</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Real-world applications and hands-on experience with robotics technology.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProgramCard
                  key={project.title}
                  {...project}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-950" />

        {/* World Map Section */}
        <WorldMapSection />

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