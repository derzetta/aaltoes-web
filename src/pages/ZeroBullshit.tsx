import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * @author ertdfgcvb
 * @title  Time: milliseconds
 * @desc   Use of context.time
 * 
 * Background animation adapted from the original ASCII art animation
 * that uses sine waves to create a flowing text pattern.
 */

// Animation pattern
const pattern = 'ZERO BULLSHIT '

interface AnimationContext {
  time: number;
  frame: number;
  cols: number;
  rows: number;
  width: number;
  height: number;
}

interface Coord {
  x: number;
  y: number;
  index: number;
}

// Track types for requirements display
type TrackType = 'aaltoes' | 'aaltoai' | null;

// Separate component for the animated background
function AnimatedTextBackground() {
  const [context, setContext] = useState<AnimationContext>({
    time: 0,
    frame: 0,
    cols: 0,
    rows: 0,
    width: 0,
    height: 0
  });

  useEffect(() => {
    // Calculate dimensions based on character size
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Calculate exact number of columns and rows to fill the screen
      // Use larger character size for better performance
      const charWidth = width < 768 ? 14 : 16;  // Slightly smaller on mobile
      const charHeight = width < 768 ? 20 : 24;
      
      // Calculate exact number of columns and rows needed to fill the screen
      const cols = Math.ceil(width / charWidth);
      const rows = Math.ceil(height / charHeight);
      
      setContext(prev => ({
        ...prev,
        cols,
        rows,
        width,
        height
      }));
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Use a slower interval for better performance
    const interval = setInterval(() => {
      setContext(prev => ({
        ...prev,
        time: prev.time + 16,
        frame: prev.frame + 1
      }));
    }, 50); // 20fps instead of 60fps

    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearInterval(interval);
    };
  }, []);

  // Animation calculation function
  const calculateCell = (coord: Coord, context: AnimationContext) => {
    const t = context.time * 0.0001;
    const x = coord.x;
    const y = coord.y;
    const o = Math.sin(y * Math.sin(t) * 0.2 + x * 0.04 + t) * 20;
    const i = Math.round(Math.abs(x + y + o)) % pattern.length;
    
    return {
      char: pattern[i],
      opacity: 0.15 // Fixed low opacity for better performance
    };
  };

  // For performance, limit the maximum number of characters rendered
  // but still ensure full screen coverage
  const maxVisibleRows = 40; // Increased for better coverage
  const maxVisibleCols = 80; // Increased for better coverage
  
  // Calculate how many rows/cols to skip to maintain performance while covering the screen
  const rowSkip = context.rows > maxVisibleRows ? Math.floor(context.rows / maxVisibleRows) : 1;
  const colSkip = context.cols > maxVisibleCols ? Math.floor(context.cols / maxVisibleCols) : 1;
  
  // Calculate actual visible rows/cols after applying skip factor
  const visibleRows = Math.ceil(context.rows / rowSkip);
  const visibleCols = Math.ceil(context.cols / colSkip);

  return (
    <div className="fixed inset-0 font-mono text-xs leading-none select-none overflow-hidden z-0 bg-black">
      <div className="transform-gpu m-0 p-0 w-screen h-screen flex flex-col justify-start">
        {Array.from({ length: visibleRows }).map((_, y) => (
          <div key={y} className="flex whitespace-pre" style={{ height: `${100 / visibleRows}vh` }}>
            {Array.from({ length: visibleCols }).map((_, x) => {
              const actualX = x * colSkip;
              const actualY = y * rowSkip;
              const coord: Coord = { 
                x: actualX, 
                y: actualY, 
                index: actualY * context.cols + actualX 
              };
              const cell = calculateCell(coord, context);
              return (
                <span 
                  key={x}
                  style={{ 
                    opacity: cell.opacity,
                    fontWeight: '100',
                    width: `${100 / visibleCols}vw`,
                    display: 'inline-block',
                    textAlign: 'center'
                  }}
                  className="text-white"
                >
                  {cell.char}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ZeroBullshit() {
  // State to track which requirements are being shown
  const [showRequirements, setShowRequirements] = useState<TrackType>(null);
  // State to track animation transitions
  const [isTransitioning, setIsTransitioning] = useState(false);
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize events - only track mobile/desktop switch, not every resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // Handle requirement view transitions
  const handleShowRequirements = (track: TrackType) => {
    if (track === showRequirements) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setShowRequirements(track);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  // Requirements content for each track
  const trackRequirements = {
    aaltoes: {
      title: "Aaltoes Tech Track Requirements",
      requirements: [
        "Strong knowledge of Computer Vision algorithms",
        "Experience with deep learning frameworks (PyTorch, TensorFlow)",
        "Ability to implement and optimize CV models",
        "Understanding of image processing techniques",
        "Problem-solving skills and creative thinking"
      ],
      additionalInfo: "Participants will be evaluated based on innovation, technical implementation, and real-world applicability of their solutions."
    },
    aaltoai: {
      title: "Aalto AI Hack '25 Requirements",
      requirements: [
        "Familiarity with AI/ML concepts and frameworks",
        "Ability to work with provided datasets",
        "Knowledge of data preprocessing techniques",
        "Experience with at least one programming language (Python preferred)",
        "Teamwork and presentation skills"
      ],
      additionalInfo: "Each partner company will provide specific challenges. Teams can choose which challenge to tackle based on their interests and expertise."
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      {/* Animated text background */}
      <AnimatedTextBackground />
      
      <div 
        className="max-w-5xl w-full border border-zinc-800 rounded-lg overflow-hidden relative z-10 transition-all duration-300 ease-in-out"
        style={{
          transform: `scale(${isTransitioning ? 0.98 : 1})`,
          opacity: isTransitioning ? 0.9 : 1
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Always visible */}
          <div className="p-6 md:p-8 bg-black">
            <h1 className="text-2xl md:text-4xl font-mono font-bold text-white mb-3 tracking-tight leading-tight transform-gpu">
              ZERO<br />
              BULLSHIT<br />
              HACKATHON
            </h1>
            <div className="space-y-1 mt-6">
              <p className="text-white font-mono text-sm transform-gpu">Friday, March 21st - March 24th</p>
              <p className="text-white font-mono text-sm transform-gpu">Startup Sauna, Puumiehenkuja 5a</p>
              <p className="text-white font-mono text-sm transform-gpu">Otaniemi, Espoo</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a 
                href="https://aaltoes.com/zerobullshitevent" 
                target="_blank"
                rel="noopener noreferrer"
                className="base-button inline-flex items-center bg-white hover:bg-white justify-center group relative overflow-hidden rounded-lg transition-transform duration-200 hover:scale-105"
              >
                <span className="relative z-10 uppercase text-black font-medium text-sm">Apply Now</span>
                <div className="absolute inset-0 -m-[1px] duration-500 group-hover:opacity-100" />
              </a>
              
              <Link 
                to="/explore"
                className="base-button inline-flex items-center justify-center group relative overflow-hidden transition-transform duration-200 hover:scale-105"
              >
                <span className="relative z-10 uppercase text-sm">Explore Startup Sauna</span>
                <div className="absolute inset-0 -m-[1px] rounded-lg bg-zinc-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </div>
            <div className="mt-8">
              <p className="text-zinc-400 font-mono text-xs transform-gpu">Hosted by</p>
              <div className="flex items-center mt-3 space-x-4">
                <div className="h-6 transition-transform duration-300 hover:scale-110">
                  <img src="/bank/aaltoes_white.svg" alt="Aaltoes" className="h-full" />
                </div>
                <span className="text-zinc-400">+</span>
                <div className="h-6 transition-transform duration-300 hover:scale-110">
                  <img src="/AaltoAI Wordmark White.svg" alt="AaltoAI" className="h-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Conditionally shows track info or requirements */}
          <div className="bg-black border-t md:border-t-0 md:border-l border-zinc-800">
            <div 
              className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              style={{ 
                height: '100%',
                transform: isMobile ? (isTransitioning ? 'translateX(8px)' : 'translateX(0)') : 'none',
                transition: isMobile ? 'all 300ms ease-in-out' : 'opacity 300ms ease-in-out'
              }}
            >
              {showRequirements ? (
                // Requirements View
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <button 
                      onClick={() => handleShowRequirements(null)}
                      className="text-white font-mono flex items-center hover:text-zinc-400 transition-colors text-sm group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transition-transform duration-200 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      Back
                    </button>
                  </div>
                  
                  <h2 className="text-lg font-mono text-white font-bold mb-4 transform-gpu">
                    {trackRequirements[showRequirements].title}
                  </h2>
                  
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h3 className="text-xs font-mono text-zinc-400 uppercase mb-2 transform-gpu">Requirements</h3>
                      <ul className="space-y-2">
                        {trackRequirements[showRequirements].requirements.map((req, index) => (
                          <li 
                            key={index} 
                            className="text-white font-mono text-sm flex items-start transform-gpu"
                            style={{ 
                              transitionDelay: `${index * 50}ms`,
                              opacity: isTransitioning ? 0 : 1,
                              transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
                              transition: 'opacity 300ms, transform 300ms'
                            }}
                          >
                            <span className="text-zinc-500 mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-zinc-800">
                      <h3 className="text-xs font-mono text-zinc-400 uppercase mb-2 transform-gpu">Additional Information</h3>
                      <p className="text-white font-mono text-sm transform-gpu">
                        {trackRequirements[showRequirements].additionalInfo}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Default Track Info View
                <>
                  {/* Top Box - Aaltoes Tech Track */}
                  <div className="p-6 md:p-8 border-b border-zinc-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 transition-transform duration-300 hover:scale-110">
                          <img src="/bank/aaltoes_white.svg" alt="Aaltoes Logo" className="h-full w-full" />
                        </div>
                        <h2 className="text-xs font-mono text-white uppercase transform-gpu">Aaltoes Tech Track</h2>
                      </div>
                      <button
                        onClick={() => handleShowRequirements('aaltoes')}
                        className="text-white font-mono text-xs border border-zinc-700 px-2 py-1 rounded hover:bg-zinc-800 transition-all duration-200 hover:scale-105"
                      >
                        Requirements
                      </button>
                    </div>
                    
                    <p className="text-white font-mono text-sm mb-3 transform-gpu">
                      Feel confident on Computer Vision?
                    </p>
                    <p className="text-white font-mono text-sm mb-3 transform-gpu">
                      Thought twice?
                    </p>
                    
                    <div className="mt-4">
                      <div className="text-xl font-mono text-white font-bold transform-gpu">$10,000</div>
                      <div className="text-zinc-400 font-mono text-xs transform-gpu">Cash Prize, No strings attached</div>
                    </div>
                  </div>
                  
                  {/* Bottom Box - Aalto AI Track */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 transition-transform duration-300 hover:scale-110">
                          <img src="/AaltoAI Wordmark White.svg" alt="AaltoAI Logo" className="h-full w-full" />
                        </div>
                        <h2 className="text-xs font-mono text-white uppercase transform-gpu">Aalto AI Hack '25</h2>
                      </div>
                      <button
                        onClick={() => handleShowRequirements('aaltoai')}
                        className="text-white font-mono text-xs border border-zinc-700 px-2 py-1 rounded hover:bg-zinc-800 transition-all duration-200 hover:scale-105"
                      >
                        Requirements
                      </button>
                    </div>
                    
                    <p className="text-white font-mono text-sm mb-3 transform-gpu">
                      Solve tracks prepared by Aalto AI partners and win prizes!
                    </p>
                    
                    <div className="mt-6 pt-4 border-t border-zinc-800">
                      <p className="text-zinc-400 font-mono text-xs mb-2 transform-gpu">In partnership with</p>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="text-zinc-300 font-mono text-xs transition-all duration-200 hover:text-white hover:scale-105 transform-gpu">SmartBI</div>
                        <div className="text-zinc-300 font-mono text-xs transition-all duration-200 hover:text-white hover:scale-105 transform-gpu">Microsoft</div>
                        <div className="text-zinc-300 font-mono text-xs transition-all duration-200 hover:text-white hover:scale-105 transform-gpu">Ultrahack</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}