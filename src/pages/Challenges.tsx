import { useEffect, useState } from 'react'
import AnimatedText from '../components/AnimatedText'

type ChallengeStatus = 'active' | 'upcoming' | 'completed'

type Award = {
  name: string
  prize: string
}

type Challenge = {
  id: string
  title: string
  description: string
  endDate: Date
  status: ChallengeStatus
  image?: string
  technology?: string
  awards: Award[]
  presentationDate?: string
  logoUrl?: string
  sponsor?: string
  ctaLabel?: string
  ctaUrl?: string
}

export default function Challenges() {
  const [showMore, setShowMore] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Calculate countdown for the active challenge
  useEffect(() => {
    const activeChallenge = challenges.find(challenge => challenge.status === 'active')
    if (!activeChallenge) return

    const calculateTimeRemaining = () => {
      const now = new Date()
      const difference = activeChallenge.endDate.getTime() - now.getTime()
      
      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)
      
      setTimeRemaining({ days, hours, minutes, seconds })
    }

    calculateTimeRemaining()
    const timer = setInterval(calculateTimeRemaining, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent, url?: string) => {
    if ((e.key === 'Enter' || e.key === ' ') && url) {
      e.preventDefault()
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  // Create a 4x4 grid of challenge slots
  const challenges: Challenge[] = [
    // Active challenge
    {
      id: 'three-js-challenge',
      title: 'BUILD IT CHALLENGE',
      description: 'Impress us with how you can build projects with Three.js.',
      endDate: new Date('2024-05-24T23:59:59'), // May 24th
      status: 'active',
      technology: 'Three.js',
      presentationDate: 'BUILD IT [V7], MAY 3RD',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png',
      sponsor: 'Aaltoes 2025',
      ctaLabel: 'PARTICIPATE NOW',
      ctaUrl: 'https://threejs.org/',
      awards: [
        { name: 'WINNER AWARD', prize: 'LENNY\'S NEWSLETTER BUNDLE' },
        { name: 'RUNNER-UP AWARD', prize: '???' },
        { name: 'VIBES AWARD (FREE TOPIC)', prize: '1 BOX OF PIZZA' }
      ]
    },
    // Blocked challenges - 15 more to make a 4x4 grid
    ...Array.from({ length: 15 }, (_, i) => ({
      id: `blocked-challenge-${i+1}`,
      title: `CHALLENGE ${i+2}`,
      description: 'TBA',
      endDate: new Date(Date.now() + (i+3) * 14 * 24 * 60 * 60 * 1000),
      status: 'upcoming' as ChallengeStatus,
      awards: []
    }))
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative">
      {/* ASCII Animation Background - Now only visible in the hero section */}
      <div className="absolute inset-0 h-[400px] overflow-hidden">
        <AnimatedText pattern="BUILD IT " className="opacity-30" />
      </div>
      
      {/* Hero section with Build It Challenge logo */}
      <div className="relative">
        <div className="py-12 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex items-center justify-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none text-white" style={{ fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '-0.04em' }}>
                  BUILD IT
                </h1>
                <div className="border-2 border-white rounded-[15px] px-3 py-1 flex justify-center items-center md:self-center">
                  <span className="text-xl sm:text-2xl uppercase tracking-wide text-white" style={{ fontFamily: 'Geist Mono, monospace' }}>
                    CHALLENGES
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark background separator */}
      <div className="absolute w-full h-[100px] bg-gradient-to-b from-neutral-950 to-neutral-950 top-[300px] z-0"></div>

      {/* Challenge grid - Now with solid dark background */}
      <div className="py-6 relative z-10 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {challenges.map((challenge) => {
              const isActive = challenge.status === 'active'
              return (
                <div 
                  key={challenge.id}
                  className={`
                    rounded-lg border overflow-hidden transition-all duration-300
                    ${isActive 
                      ? 'border-white/10 bg-black' 
                      : 'border-white/5 bg-neutral-950'}
                    ${challenge.status === 'upcoming' ? 'opacity-80 cursor-not-allowed relative' : 'opacity-100'}
                  `}
                >
                  {challenge.status === 'upcoming' && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/80">
                      <div className="flex flex-col items-center justify-center p-4">
                        <div className="w-8 h-8 mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/70">
                            <rect width="18" height="11" x="3" y="6" rx="2" />
                            <path d="M16 2H8v4h8V2z" />
                            <path d="M9 11h6" />
                          </svg>
                        </div>
                        <p className="text-white/80 text-lg font-medium font-mono">LOCKED</p>
                      </div>
                    </div>
                  )}
                  <div className="p-4 relative h-full flex flex-col">
                    {isActive && challenge.logoUrl && (
                      <div className="absolute top-4 right-4 w-12 h-12 opacity-50">
                        <img 
                          src={challenge.logoUrl} 
                          alt={`${challenge.technology} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex flex-col space-y-2 mb-4">
                      <h2 className="text-lg font-bold tracking-wider text-white font-mono">
                        {challenge.title}
                      </h2>
                      {isActive && challenge.technology && (
                        <div className="text-lg text-white/90 font-light">
                          {challenge.technology}
                        </div>
                      )}
                    </div>
                    <p className="text-white/70 mb-4 text-sm">
                      {challenge.description}
                    </p>
                    {isActive ? (
                      <>
                        {/* Prizes section always visible */}
                        <div className="mb-4 font-mono">
                          <div className="border-t border-white/10 pt-4">
                            {challenge.awards.map((award, index) => (
                              <div key={index} className="mb-3 last:mb-0">
                                <div className="text-white/60 text-xs">{award.name}</div>
                                <div className="text-white text-sm font-medium">{award.prize}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Timer section always visible */}
                        <div className="mb-4">
                          <div className="text-white/60 text-xs mb-2 font-mono">CHALLENGE ENDS IN:</div>
                          <div className="flex space-x-3 font-mono">
                            <div className="text-center">
                              <div className="text-lg text-white font-medium">{timeRemaining.days}</div>
                              <div className="text-xs text-white/50">DAYS</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg text-white font-medium">{timeRemaining.hours}</div>
                              <div className="text-xs text-white/50">HRS</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg text-white font-medium">{timeRemaining.minutes}</div>
                              <div className="text-xs text-white/50">MIN</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg text-white font-medium">{timeRemaining.seconds}</div>
                              <div className="text-xs text-white/50">SEC</div>
                            </div>
                          </div>
                        </div>
                        {/* Learn more and register button */}
                        {!showMore && (
                          <button
                            className="base-button inline-flex items-center justify-center w-full mt-2"
                            tabIndex={0}
                            aria-label="Learn more and register to Build It"
                            onClick={() => setShowMore(true)}
                            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setShowMore(true) } }}
                          >
                            <span className="relative z-10 uppercase">Learn more and register to Build It</span>
                          </button>
                        )}
                        {/* Expanded content */}
                        {showMore && (
                          <>
                            {/* Presentation date */}
                            {challenge.presentationDate && (
                              <div className="mt-4 border-t border-white/10 pt-4">
                                <div className="text-white/70 text-xs">PRESENTATIONS ON</div>
                                <div className="text-white font-mono text-sm">{challenge.presentationDate}</div>
                              </div>
                            )}
                            {/* CTA button */}
                            {challenge.ctaLabel && challenge.ctaUrl && (
                              <div className="mt-4">
                                <a
                                  href={challenge.ctaUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="base-button inline-flex items-center justify-center w-full"
                                  tabIndex={0}
                                  aria-label={challenge.ctaLabel}
                                  onKeyDown={(e) => handleKeyDown(e, challenge.ctaUrl)}
                                >
                                  <span className="relative z-10 uppercase">{challenge.ctaLabel}</span>
                                </a>
                              </div>
                            )}
                            {/* Hide button */}
                            <button
                              className="base-button inline-flex items-center justify-center w-full mt-4"
                              tabIndex={0}
                              aria-label="Hide details"
                              onClick={() => setShowMore(false)}
                              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setShowMore(false) } }}
                            >
                              <span className="relative z-10 uppercase">Hide</span>
                            </button>
                          </>
                        )}
                      </>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
} 