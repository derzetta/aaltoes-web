import { useEffect, useState } from 'react'
import AnimatedText from '../components/AnimatedText'

type ChallengeStatus = 'active' | 'upcoming' | 'completed'

type Award = {
  name: string
  prize: string
}

type Winner = {
  place: string
  username: string
  award: string
  discordId?: string
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
  winners?: Winner[]
  presentationDate?: string
  logoUrl?: string
  sponsor?: string
  ctaLabel?: string
  ctaUrl?: string
}

// Custom CSS for blinking cursor animation
const cursorBlinkStyle = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .cursor-blink {
    animation: blink 1s step-end infinite;
  }
`;

const TypingAnimation = ({ text, delay = 100, className = "", onComplete = () => {} }: { 
  text: string, 
  delay?: number, 
  className?: string,
  onComplete?: () => void 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="cursor-blink inline-block align-middle">|</span>}
    </span>
  );
};

export default function Challenges() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [showBuildIt, setShowBuildIt] = useState(false)
  const [showChallenges, setShowChallenges] = useState(false)
  const [buildItComplete, setBuildItComplete] = useState(false)
  const [, setChallengesComplete] = useState(false)
  const [showWelcomeText, setShowWelcomeText] = useState(false)
  const [welcomeTextComplete, setWelcomeTextComplete] = useState(false)
  const [showCards, setShowCards] = useState(false)
  const [modalAnimationComplete, setModalAnimationComplete] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Trigger animations after a small delay
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
      
      // Start typing animation after page load effects
      const animationTimer = setTimeout(() => {
        setShowBuildIt(true);
      }, 200);
      
      return () => clearTimeout(animationTimer);
    }, 50)
    
    return () => clearTimeout(timer)
  }, [])

  // Calculate countdown for the active challenge
  useEffect(() => {
    const activeChallenges = challenges.filter(challenge => challenge.status === 'active')
    if (!activeChallenges.length) return

    // Find the challenge that ends earliest
    const earliestChallenge = activeChallenges.reduce((earliest, current) => 
      current.endDate.getTime() < earliest.endDate.getTime() ? current : earliest
    )

    const calculateTimeRemaining = () => {
      const now = new Date()
      const difference = earliestChallenge.endDate.getTime() - now.getTime()
      
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

  useEffect(() => {
    // Show welcome text after challenges title animation is complete
    if (showCards) {
      const timer = setTimeout(() => {
        setShowWelcomeText(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [showCards]);


  const openModal = (challenge: Challenge) => {
    if (challenge.status === 'active') {
      // Show modal immediately but in initial animation state
      setSelectedChallenge(challenge)
      setIsModalOpen(true)
      document.body.style.overflow = 'hidden'
      
      // Trigger animation in the next frame for smooth transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setModalAnimationComplete(true)
        })
      })
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalAnimationComplete(false)
    document.body.style.overflow = 'auto'
  }

  // Handle keydown for modal
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleEscapeKey)
    return () => window.removeEventListener('keydown', handleEscapeKey)
  }, [isModalOpen])

  // Create a 4x4 grid of challenge slots
  const challenges: Challenge[] = [
    // Completed challenge with winners
    {
      id: 'three-js-challenge',
      title: 'WORLD\'S WORST CAPTCHA',
      description: 'Create the most frustrating, confusing, and downright evil captcha form ever. Make users question their existence while trying to prove they\'re human. The more tears, the better!',
      endDate: new Date('2025-05-31T23:59:59'), // May 31st
      status: 'completed',
      technology: '',
      presentationDate: 'BUILD IT [V6], MAY 31ST',
      sponsor: 'Aaltoes 2025',
      ctaLabel: 'PARTICIPATE NOW',
      ctaUrl: 'https://threejs.org/',
      awards: [
        { name: 'WINNER AWARD', prize: '$200 VERKKOKAUPPA GIFT CARD (OR EQUIVALENT IN SUBSCRIPTION SERVICES)' },
        { name: 'RUNNER-UP AWARD', prize: '$25 IN AALTOES STORE' },
        { name: 'VIBES AWARD (FREE TOPIC)', prize: '1 BOX OF PIZZA' }
      ],
      winners: [
        { place: '1ST PLACE', username: 'sypher', award: '$200 VERKKOKAUPPA GIFT CARD' },
        { place: 'RUNNER UP', username: 'robojuho', award: '$25 IN AALTOES STORE' },
        { place: 'VIBES AWARD', username: 'oxrinz', award: 'BOX OF PIZZA 🍕' }
      ]
    },
    // Active challenge
    {
      id: 'worst-saas-challenge',
      title: 'WORLD\'S WORST SAAS EVER',
      description: 'Build the most useless, confusing, and hilariously terrible Software as a Service. Think anti-patterns, dark UX, and features nobody asked for. The more pointless and frustrating, the better!',
      endDate: new Date('2025-06-14T18:00:00'), // June 14th at 18:00
      status: 'active',
      technology: '',
      presentationDate: 'BUILD IT [V11], JUNE 14TH',
      sponsor: 'Aaltoes 2025',
      ctaLabel: 'PARTICIPATE NOW',
      ctaUrl: 'https://threejs.org/',
      awards: [
        { name: 'WINNER AWARD', prize: '$200 VERKKOKAUPPA GIFT CARD (OR EQUIVALENT IN SUBSCRIPTION SERVICES)' },
        { name: 'RUNNER-UP AWARD', prize: '$25 IN AALTOES STORE' },
        { name: 'VIBES AWARD (FREE TOPIC)', prize: '1 BOX OF PIZZA' }
      ]
    },
    // Blocked challenges - 14 more to make a 4x4 grid
    ...Array.from({ length: 14 }, (_, i) => ({
      id: `blocked-challenge-${i+1}`,
      title: `CHALLENGE ${i+3}`,
      description: 'TBA',
      endDate: new Date(Date.now() + (i+4) * 14 * 24 * 60 * 60 * 1000),
      status: 'upcoming' as ChallengeStatus,
      awards: []
    }))
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative font-mono">
      {/* Custom cursor animation */}
      <style>{cursorBlinkStyle}</style>
      
      {/* ASCII Animation Background */}
      <div className="absolute inset-0 h-[400px] overflow-hidden">
        <AnimatedText pattern="BUILD IT " className="opacity-100" />
      </div>
      
      {/* Hero section with Build It Challenge logo */}
      <div className="relative">
        <div className="py-12 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
              <div 
                className={`flex flex-col md:flex-row items-center md:items-end md:gap-1 transition-all duration-1000 ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="text-5xl sm:text-5xl md:text-6xl font-medium tracking-tighter leading-none text-white font-mono">
                  {showBuildIt && (
                    <TypingAnimation 
                      text="build it" 
                      delay={80} 
                      className="inline-block"
                      onComplete={() => {
                        setBuildItComplete(true);
                        setTimeout(() => setShowChallenges(true), 200);
                      }}
                    />
                  )}
                </div>
                
                {(showChallenges || buildItComplete) && (
                  <div className={`border-2 border-white rounded-[12px] px-2 py-0.5 flex justify-center items-center mt-2 sm:mt-3 md:mt-0 md:mb-1.5 md:ml-4 transition-opacity duration-300 ${showChallenges ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-lg sm:text-lg md:text-xl uppercase tracking-wide text-white font-mono">
                      {showChallenges && (
                        <TypingAnimation 
                          text="CHALLENGES" 
                          delay={40} 
                          className="inline-block"
                          onComplete={() => {
                            setChallengesComplete(true);
                            setTimeout(() => setShowCards(true), 300);
                          }}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`text-white/70 font-mono text-sm mt-6 md:mt-0 md:self-end md:pb-3 transition-opacity duration-1000 ${buildItComplete ? 'opacity-100' : 'opacity-0'} flex items-center gap-2`}>
                with <span className="text-red-500">♥</span> from{' '}
                <a 
                  href="https://aaltoes.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  tabIndex={0}
                  aria-label="Visit Aaltoes website"
                >
                  Aaltoes 2025
                </a>
                <span className="text-white/30">|</span>
                <a 
                  href="https://discord.gg/7YzuMbYHAr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                  tabIndex={0}
                  aria-label="Join our Discord channel"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark background separator */}
      <div className="absolute w-full h-[100px] bg-gradient-to-b from-neutral-950 to-neutral-950 top-[300px] z-0"></div>

      {/* Challenge grid */}
      <div className="pt-2 pb-6 relative z-10 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className={`mb-16 text-left ${showCards ? 'opacity-100' : 'opacity-0'}`}>
            {showWelcomeText && (
              <div className="text-white/70 text-sm font-mono leading-relaxed max-w-4xl">
                <TypingAnimation
                  text={`Welcome to Build it challenges. Our build it sessions are ran every Wednesday and Saturday at `}
                  delay={5}
                  className="inline"
                  onComplete={() => {
                    setWelcomeTextComplete(true);
                  }}
                />
                {welcomeTextComplete && (
                  <>
                    <a
                      href="https://maps.app.goo.gl/T3cY5gNez8btiUGAA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors underline"
                      tabIndex={0}
                      aria-label="View Startup Sauna location on Google Maps"
                    >
                      Startup Sauna, Puumiehenkuja 5a
                    </a>
                    <span className="inline whitespace-pre-line">
                      {`.

Pick the one from cards you see below. You are welcome to do your own work as well.

For questions clarify from Adit, Doni, Vaneeza or Milana!`}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-500 ${welcomeTextComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {challenges.map((challenge, idx) => {
              const isActive = challenge.status === 'active'
              return (
                <div 
                  key={challenge.id}
                  className={`
                    rounded-lg border overflow-hidden transition-all duration-500 
                    ${isActive 
                      ? 'border-white/10 bg-black' 
                      : challenge.status === 'completed'
                      ? 'border-green-500/30 bg-green-950/20'
                      : 'border-white/5 bg-neutral-900'}
                    ${challenge.status === 'upcoming' ? 'opacity-80 cursor-not-allowed relative' : 'opacity-100 cursor-pointer'}
                    ${isPageLoaded && showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    flex flex-col
                  `}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  onClick={() => openModal(challenge)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openModal(challenge)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${challenge.title} details`}
                >
                  {challenge.status === 'upcoming' && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/80">
                      <div className="flex flex-col items-center justify-center p-2">
                        <div className="w-6 h-6 mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/70">
                            <rect width="18" height="11" x="3" y="6" rx="2" />
                            <path d="M16 2H8v4h8V2z" />
                            <path d="M9 11h6" />
                          </svg>
                        </div>
                        <p className="text-white/80 text-sm font-medium font-mono">LOCKED</p>
                      </div>
                    </div>
                  )}
                  
                  {challenge.status === 'completed' && challenge.winners && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/90">
                      <div className="flex flex-col items-center justify-center p-4 text-center">
                        <div className="text-yellow-400 text-lg font-bold font-mono mb-2">🏆 WINNERS 🏆</div>
                        <div className="text-green-400 text-xs font-mono mb-3 uppercase tracking-wide">Congratulations!</div>
                        <div className="space-y-1 w-full">
                          {challenge.winners.map((winner, index) => (
                            <div 
                              key={index}
                              className="text-white/90 text-xs font-mono cursor-pointer hover:text-white transition-colors"
                              onClick={(e) => {
                                e.stopPropagation()
                                // Discord user link - you can update these with actual Discord user IDs
                                const discordUrl = `https://discord.com/users/${winner.username}`
                                window.open(discordUrl, '_blank', 'noopener,noreferrer')
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  const discordUrl = `https://discord.com/users/${winner.username}`
                                  window.open(discordUrl, '_blank', 'noopener,noreferrer')
                                }
                              }}
                              tabIndex={0}
                              aria-label={`View ${winner.username}'s Discord profile`}
                            >
                              <div className="font-bold">{winner.place}</div>
                              <div className="text-blue-400">@{winner.username}</div>
                              <div className="text-white/60">{winner.award}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-4 relative h-full flex flex-col min-h-[290px]">
                   
                    {isActive && challenge.logoUrl && (
                      <div className="absolute top-3 right-3 w-8 h-8 opacity-50">
                        <img 
                          src={challenge.logoUrl} 
                          alt={`${challenge.technology} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    
                    {isActive ? (
                      <>
                        <div className="flex flex-col space-y-1 mb-2">
                          <h2 className="text-base font-bold tracking-wider text-white font-mono">
                            {challenge.title}
                          </h2>
                          {challenge.technology && (
                            <div className="text-sm text-white/90 font-mono">
                              {challenge.technology}
                            </div>
                          )}
                        </div>
                        <p className="text-white/70 mb-2 text-xs font-mono">
                          {challenge.description}
                        </p>
                        
                        {/* Prizes section always visible */}
                        <div className="mb-2">
                          <div className="border-t border-white/10 pt-2">
                            {challenge.awards.map((award, index) => (
                              <div key={index} className="mb-1 last:mb-0">
                                <div className="text-white/60 text-xs font-mono">{award.name}</div>
                                <div className="text-white text-xs font-medium font-mono">{award.prize}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Timer section always visible */}
                        <div className="mb-2">
                          <div className="text-white/60 text-xs mb-1 font-mono">CHALLENGE ENDS IN:</div>
                          <div className="flex space-x-2">
                            <div className="text-center">
                              <div className="text-sm text-white font-medium font-mono">{timeRemaining.days}</div>
                              <div className="text-xs text-white/50 font-mono">DAYS</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-white font-medium font-mono">{timeRemaining.hours}</div>
                              <div className="text-xs text-white/50 font-mono">HRS</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-white font-medium font-mono">{timeRemaining.minutes}</div>
                              <div className="text-xs text-white/50 font-mono">MIN</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-white font-medium font-mono">{timeRemaining.seconds}</div>
                              <div className="text-xs text-white/50 font-mono">SEC</div>
                            </div>
                          </div>
                        </div>
                        {/* Buttons row */}
                        <div className="mt-auto pt-2">
                          <div className="flex gap-1">
                            {challenge.id === 'worst-saas-challenge' ? (
                              // SAAS challenge buttons (V8, V9, V10 - all locked)
                              <>
                                <button
                                  className="px-2 py-1 bg-neutral-900 text-xs font-mono text-white/40 rounded cursor-not-allowed"
                                  disabled
                                  aria-label="Version 8 (Locked)"
                                >
                                  [V8]
                                </button>
                                <button
                                  className="px-2 py-1 bg-neutral-900 text-xs font-mono text-white/40 rounded cursor-not-allowed"
                                  disabled
                                  aria-label="Version 9 (Locked)"
                                >
                                  [V9]
                                </button>
                                <button
                                  className="px-2 py-1 bg-neutral-900 text-xs font-mono text-white/40 rounded cursor-not-allowed"
                                  disabled
                                  aria-label="Version 10 (Locked)"
                                >
                                  [V10]
                                </button>
                                <button
                                  className="flex-1 px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-xs font-mono text-white/80 transition-colors rounded"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    openModal(challenge)
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault()
                                      e.stopPropagation()
                                      openModal(challenge)
                                    }
                                  }}
                                  tabIndex={0}
                                  aria-label="Learn more about the challenge"
                                >
                                  Learn more
                                </button>
                              </>
                            ) : challenge.status === 'completed' ? (
                              // Completed challenges - no version buttons, just learn more
                              <button
                                className="w-full px-2 py-1 bg-green-800 hover:bg-green-700 text-xs font-mono text-white/80 transition-colors rounded"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  openModal(challenge)
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    openModal(challenge)
                                  }
                                }}
                                tabIndex={0}
                                aria-label="View challenge results"
                              >
                                View Results
                              </button>
                            ) : (
                              // Other challenges - default version buttons
                              <>
                                <a 
                                  href="https://lu.ma/dur5tou2" 
                                  target="_blank"
                                  rel="noopener noreferrer" 
                                  className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 text-sm font-mono transition-colors rounded"
                                  tabIndex={0}
                                  aria-label="Register for Version 4"
                                >
                                  [V4]
                                </a>
                                
                                <a
                                  href="https://lu.ma/p5voz8w9"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 text-sm font-mono transition-colors rounded"
                                  tabIndex={0}
                                  aria-label="Register for Version 5"
                                >
                                  [V5]
                                </a>
                                
                                <a
                                  href="https://lu.ma/jd9b5w50"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 text-sm font-mono transition-colors rounded"
                                  tabIndex={0}
                                  aria-label="Register for Version 6"
                                >
                                  [V6]
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col h-full">
                        <div>
                          <h2 className="text-base font-bold tracking-wider text-white font-mono mb-2">
                            {challenge.title}
                          </h2>
                          <p className="text-white/70 mb-2 text-xs font-mono">
                            {challenge.description}
                          </p>
                        </div>
                        
                        <div className="mt-auto pt-2 border-t border-white/10">
                          <p className="text-white/60 text-xs font-mono">COMING SOON</p>
                          <div className="flex justify-between mt-2 text-white/50 text-xs font-mono">
                            <span>EXPECTED IN</span>
                            <span>{Math.floor(Math.random() * 12) + 1} WEEKS</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Modal for Learn More */}
      {isModalOpen && selectedChallenge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-mono">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
            style={{ opacity: modalAnimationComplete ? 1 : 0 }}
            onClick={closeModal}
            role="button"
            tabIndex={-1}
            aria-label="Close modal"
          />
          <div 
            className="relative bg-neutral-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto transition-all duration-300 ease-out transform"
            style={{ 
              opacity: modalAnimationComplete ? 1 : 0,
              transform: modalAnimationComplete ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(10px)'
            }}
          >
            <div className="p-6">
              <button 
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors bg-transparent"
                onClick={closeModal}
                tabIndex={0}
                aria-label="Close details popup"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-start mb-5">
                {selectedChallenge.logoUrl && (
                  <div className="w-12 h-12 mr-4">
                    <img 
                      src={selectedChallenge.logoUrl} 
                      alt={`${selectedChallenge.technology} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-bold text-white mb-1 font-mono">
                    {selectedChallenge.title}
                  </h2>
                  {selectedChallenge.technology && (
                    <div className="text-lg text-white/90 mb-1 font-mono">
                      {selectedChallenge.technology}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-white/80 text-sm mb-4 font-mono">
                  {selectedChallenge.description}
                </p>

                {/* Timer */}
                <div className="p-4 border border-white/10 rounded-lg mb-6 bg-black/50">
                  <div className="text-white/60 text-sm mb-2 font-mono">CHALLENGE ENDS IN:</div>
                  <div className="flex justify-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl text-white font-medium font-mono">{timeRemaining.days}</div>
                      <div className="text-xs text-white/50 font-mono">DAYS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-white font-medium font-mono">{timeRemaining.hours}</div>
                      <div className="text-xs text-white/50 font-mono">HRS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-white font-medium font-mono">{timeRemaining.minutes}</div>
                      <div className="text-xs text-white/50 font-mono">MIN</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-white font-medium font-mono">{timeRemaining.seconds}</div>
                      <div className="text-xs text-white/50 font-mono">SEC</div>
                    </div>
                  </div>
                </div>

                {/* Prizes */}
                <div className="mb-6">
                  <h3 className="text-white text-lg mb-3 font-mono">AWARDS & PRIZES</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedChallenge.awards.map((award, index) => (
                      <div key={index} className="p-3 border border-white/10 rounded-lg bg-black/30">
                        <div className="text-white/60 text-xs mb-1 font-mono">{award.name}</div>
                        <div className="text-white text-sm font-medium font-mono">{award.prize}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Presentation date */}
                {selectedChallenge.presentationDate && (
                  <div className="mb-6">
                    <div className="text-white/70 text-sm mb-1 font-mono">PRESENTATIONS ON</div>
                    <div className="text-white text-base font-mono">{selectedChallenge.presentationDate}</div>
                  </div>
                )}

                {/* Register row with version buttons */}
                {selectedChallenge.status === 'active' && (
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-white text-sm font-medium font-mono mb-2 sm:mb-0">REGISTER TO BUILD IT</div>
                      <div className="flex gap-2">
                        {selectedChallenge.id === 'worst-saas-challenge' ? (
                          // SAAS challenge buttons (V8, V9, V10 - all locked)
                          <>
                            <button
                              className="bg-neutral-900 text-white/40 px-6 py-3 text-sm font-mono rounded cursor-not-allowed"
                              disabled
                              aria-label="Version 8 (Locked)"
                            >
                              [V8]
                            </button>
                            
                            <button
                              className="bg-neutral-900 text-white/40 px-6 py-3 text-sm font-mono rounded cursor-not-allowed"
                              disabled
                              aria-label="Version 9 (Locked)"
                            >
                              [V9]
                            </button>
                            
                            <button
                              className="bg-neutral-900 text-white/40 px-6 py-3 text-sm font-mono rounded cursor-not-allowed"
                              disabled
                              aria-label="Version 10 (Locked)"
                            >
                              [V10]
                            </button>
                          </>
                        ) : (
                          // Other challenges - default version buttons
                          <>
                            <a 
                              href="https://lu.ma/dur5tou2" 
                              target="_blank"
                              rel="noopener noreferrer" 
                              className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 text-sm font-mono transition-colors rounded"
                              tabIndex={0}
                              aria-label="Register for Version 4"
                            >
                              [V4]
                            </a>
                            
                            <a
                              href="https://lu.ma/p5voz8w9"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 text-sm font-mono transition-colors rounded"
                              tabIndex={0}
                              aria-label="Register for Version 5"
                            >
                              [V5]
                            </a>
                            
                            <a
                              href="https://lu.ma/jd9b5w50"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 text-sm font-mono transition-colors rounded"
                              tabIndex={0}
                              aria-label="Register for Version 6"
                            >
                              [V6]
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit the work button */}
                {selectedChallenge.status === 'active' && (
                  <div className="mt-4">
                    <a
                      href="https://discord.gg/7YzuMbYHAr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-4 text-center text-sm font-mono uppercase transition-colors rounded flex items-center justify-center gap-2"
                      tabIndex={0}
                      aria-label="Join our Discord channel"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      Join Discord Channel
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 