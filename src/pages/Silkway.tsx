import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Component for typing animation
interface TypedTextProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypedText: React.FC<TypedTextProps> = ({ text, speed = 20, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    
    const startTyping = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setIsDone(true);
      }
    };
    
    const delayTimeout = setTimeout(() => {
      startTyping();
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);
  
  return <span>{displayedText}{!isDone && <span className="opacity-0">_</span>}</span>;
};

export default function Silkway() {
  const [cursorVisible, setCursorVisible] = useState(true)
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Add a style tag to the document head for Silkway page selection colors
    const style = document.createElement('style')
    style.innerHTML = `
      .silkway-page ::selection {
        background-color: white;
        color: #0000FF;
      }
      .silkway-page ::-moz-selection {
        background-color: white;
        color: #0000FF;
      }
    `
    document.head.appendChild(style)
    
    // Show content after a delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 400);
    
    // Clean up when component unmounts
    return () => {
      document.head.removeChild(style);
      clearTimeout(timer);
    }
  }, [])

  return (
    <div
      className="min-h-screen bg-[#0000FF] text-white p-6 flex flex-col text-sm leading-tight silkway-page"
      style={{ fontFamily: "'Geist Mono', monospace" }}
    >
      <div className="max-w-3xl mx-auto w-full pt-16 px-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-sm font-bold tracking-wide font-['Geist_Mono']">
            <TypedText text="PROJECT SILKWAY" speed={30} />
            {cursorVisible ? <span className="ml-1">_</span> : <span className="ml-1 opacity-0">_</span>}
          </h1>
          <span className="text-sm font-normal font-['Geist_Mono']">
            <TypedText text="FALL 25" speed={30} delay={600} />
          </span>
        </header>

        {showContent && (
          <main className="flex-1 font-['Geist_Mono']">
            <div className="space-y-8">
              <p className="text-sm leading-relaxed">
                <TypedText 
                  text="We're dropping Finnish founders into China's tech ecosystem this fall. Not for tourism, but innovation." 
                  speed={5} 
                  delay={900}
                />
              </p>

              <section className="space-y-1.5">
                <h2 className="font-normal mb-1.5 font-['Geist_Mono']">
                  <TypedText text="THE STACK" speed={10} delay={1700} />
                </h2>
                <p><TypedText text="• Fully covered housing in Hangzhou" speed={3} delay={1950} /></p>
                <p><TypedText text="• Dedicated workspace" speed={3} delay={2100} /></p>
                <p><TypedText text="• Direct connections to Chinese capital, companies, and investors" speed={3} delay={2200} /></p>
              </section>

              <section className="space-y-1.5">
                <h2 className="font-normal mb-1.5 font-['Geist_Mono']">
                  <TypedText text="HANGZHOU ECOSYSTEM" speed={10} delay={2500} />
                </h2>
                <p><TypedText text="• Alibaba: E-commerce empire" speed={3} delay={2750} /></p>
                <p><TypedText text="• DeepSeek: True Open-Source AI" speed={3} delay={2850} /></p>
                <p><TypedText text="• Unitree: Robotics that dominate the market" speed={3} delay={2950} /></p>
                <p><TypedText text="• Plus emerging 'Little Dragons' reshaping global tech" speed={3} delay={3050} /></p>
              </section>

              <section className="space-y-1.5">
                <h2 className="font-normal mb-1.5 font-['Geist_Mono']">
                  <TypedText text="WE ARE LOOKING FOR" speed={10} delay={3200} />
                </h2>
                <p><TypedText text="• OSAI that ships" speed={3} delay={3350} /></p>
                <p><TypedText text="• Robotics that works" speed={3} delay={3400} /></p>
                <p><TypedText text="• Tech with traction" speed={3} delay={3450} /></p>
              </section>

              <section className="space-y-1.5">
                <h2 className="font-normal mb-1.5 font-['Geist_Mono']">
                  <TypedText text="EXECUTION PLAN" speed={10} delay={3550} />
                </h2>
                <p><TypedText text="• Remote: July-September" speed={3} delay={3650} /></p>
                <p><TypedText text="• Live in Hangzhou: September-October" speed={3} delay={3750} /></p>
              </section>

              <p className="text-sm leading-relaxed">
                <TypedText 
                  text="This is your backdoor into the market most founders can't crack. Don't sleep on it." 
                  speed={5}
                  delay={3900}
                />
              </p>

              <div>
                <Link to="/apply" className="inline-block underline hover:no-underline" id="apply">
                  <TypedText text="Apply here" speed={10} delay={4200} />
                </Link>
              </div>
            </div>

            <div className="my-8 border-t border-dashed border-white"></div>

            <footer className="text-sm mb-8">
              <TypedText text="Powered by " speed={5} delay={4400} />
              <Link to="/2025" className="underline hover:no-underline">
                <TypedText text="Aaltoes 2025" speed={5} delay={4550} />
              </Link>
              <TypedText text=" & " speed={5} delay={4750} />
              <Link to="https://cetc.fi" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                <TypedText text="CETC" speed={5} delay={4800} />
              </Link>
            </footer>
          </main>
        )}
      </div>
    </div>
  )
} 