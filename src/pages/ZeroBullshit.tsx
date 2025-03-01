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
const pattern = 'AALTOES CV '

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
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize events - only track mobile/desktop switch
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

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      {/* Animated text background */}
      <AnimatedTextBackground />
      
      <div className="max-w-5xl w-full border border-zinc-800 rounded-lg overflow-hidden relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Always visible */}
          <div className="p-6 md:p-8 bg-black">
            <h1 className="text-2xl md:text-4xl font-mono font-bold text-white mb-3 tracking-tight leading-tight">
              COMPUTER VISION<br />
              HACKATHON v.1<br />
              
            </h1>
            <div className="space-y-1 mt-6">
              {['Friday, March 21st - Monday, March 24th', 'Startup Sauna, Puumiehenkuja 5a', 'Otaniemi, Espoo.'].map((text, index) => (
                <p 
                  key={index}
                  className="text-white font-mono text-sm"
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a 
                href="https://aaltoes.com/zerobullshitevent" 
                target="_blank"
                rel="noopener noreferrer"
                className="base-button inline-flex items-center bg-white hover:bg-white justify-center group relative overflow-hidden rounded-lg"
              >
                <span className="relative z-10 uppercase text-black font-medium text-sm">Apply Now</span>
                <div className="absolute inset-0 -m-[1px]" />
              </a>
              
              <Link 
                to="/explore"
                className="base-button inline-flex items-center justify-center group relative overflow-hidden"
              >
                <span className="relative z-10 uppercase text-sm">Explore Startup Sauna</span>
                <div className="absolute inset-0 -m-[1px] rounded-lg bg-zinc-800 opacity-0" />
              </Link>
            </div>
            <div className="mt-8">
              <p className="text-zinc-400 font-mono text-sm">
                Organized and hosted by
              </p>
              <div className="flex items-center mt-3 space-x-4">
                <a href="https://aaltoes.com" target="_blank" rel="noopener noreferrer" className="h-6">
                  <img src="/bank/aaltoes_white.svg" alt="Aaltoes" className="h-full" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-black border-t md:border-t-0 md:border-l border-zinc-800">
            <div className="p-6 md:p-8 h-full flex flex-col">
              <p className="text-white font-mono text-sm mb-4">
                Join to solve Aaltoes' first-ever 48-hour Computer Vision challenge with <span className="font-bold">€10,000 prize pool.</span>
              </p>
              
              <div className="mt-4 space-y-2">
                <p className="text-white font-mono text-sm">- Teams of 1-3 can apply</p>
                <p className="text-white font-mono text-sm">- Must be attended physically</p>
                <p className="text-white font-mono text-sm">- You must be confirmed to the event</p>
                <p className="text-white font-mono text-sm">- Receive live mentoring from CV experts for your team</p>
              </div>
              
              <div className="mt-auto pt-6">
                <div className="text-2xl font-mono text-white font-bold">
                  $10,000
                </div>
                <div className="text-zinc-400 font-mono text-sm">
                  Cash Prize, No strings attached
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}