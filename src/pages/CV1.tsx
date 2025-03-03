import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedText from '../components/AnimatedText'


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
      
      // Keep the same character size for density
      const charWidth = width < 768 ? 12 : 14;
      const charHeight = width < 768 ? 18 : 20;
      
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
    
    // Use a simple throttled resize handler instead of debounce
    let resizeTimeout: number | null = null;
    const handleResize = () => {
      if (!resizeTimeout) {
        resizeTimeout = window.setTimeout(() => {
          resizeTimeout = null;
          updateDimensions();
        }, 100);
      }
    };
    
    window.addEventListener('resize', handleResize);

    // Use direct interval instead of requestAnimationFrame for more consistent timing
    // This matches the approach in the non-lagging example
    const interval = setInterval(() => {
      setContext(prev => ({
        ...prev,
        time: prev.time + 16,
        frame: prev.frame + 1
      }));
    }, 16);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      clearInterval(interval);
    };
  }, []);

  // Simplified cell calculation with minimal operations
  const calculateCell = (coord: Coord, context: AnimationContext) => {
    const t = context.time * 0.0001;
    const x = coord.x;
    const y = coord.y;
    
    // Simplified wave calculation similar to the non-lagging example
    const o = Math.sin(y * Math.sin(t) * 0.2 + x * 0.04 + t) * 20;
    const i = Math.round(Math.abs(x + y + o)) % pattern.length;
    
    return {
      char: pattern[i],
      opacity: 0.15
    };
  };

  // Keep the same number of rows and columns
  const maxVisibleRows = 40;
  const maxVisibleCols = 70;
  
  // Calculate actual visible rows/cols after applying skip factor
  const rowSkip = context.rows > maxVisibleRows ? Math.floor(context.rows / maxVisibleRows) : 1;
  const colSkip = context.cols > maxVisibleCols ? Math.floor(context.cols / maxVisibleCols) : 1;
  
  const visibleRows = Math.ceil(context.rows / rowSkip);
  const visibleCols = Math.ceil(context.cols / colSkip);

  return (
    <div className="fixed inset-0 font-mono text-xs leading-none select-none overflow-hidden z-0 bg-black">
      <pre className="transform-gpu m-0 p-0 w-screen h-screen">
        {Array.from({ length: visibleRows }).map((_, y) => (
          <div key={y} className="flex whitespace-pre">
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
                    fontWeight: '100'
                  }}
                  className="text-white/70"
                >
                  {cell.char}
                </span>
              );
            })}
          </div>
        ))}
      </pre>
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
    <div className="min-h-screen w-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated text background - full screen */}
      <AnimatedText pattern="AALTOES CV " className="absolute inset-0" />
      
      <div className="max-w-5xl w-full border border-zinc-800 rounded-lg overflow-hidden relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Always visible */}
          <div className="p-6 md:p-8 bg-black">
            <h1 className="text-2xl md:text-4xl font-mono font-bold text-white mb-3 tracking-tight leading-tight">
              COMPUTER VISION<br />
              HACKATHON v.1<br />
              
            </h1>
            <div className="space-y-1 mt-6">
              {['Friday, March 21st - Sunday, March 23th', 'Startup Sauna, Puumiehenkuja 5a', 'Otaniemi, Espoo.'].map((text, index) => (
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
                href="https://lu.ma/xo5onsy7" 
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
                <p className="text-white font-mono text-sm">- Visit <Link to="/explore" className="underline hover:text-zinc-300">Explore Startup Sauna</Link> for a good karma</p>
              </div>
              
              <div className="mt-auto pt-6">
                <div className="text-xl font-mono text-white font-bold">
                €10,000
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