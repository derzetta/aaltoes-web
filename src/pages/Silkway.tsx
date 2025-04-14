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

// Terminal Interface component
interface TerminalInterfaceProps {
  options: {
    text: string;
    link: string;
    isExternal?: boolean;
  }[];
  promptText?: string;
  delay?: number;
}

const TerminalInterface: React.FC<TerminalInterfaceProps> = ({ 
  options, 
  promptText = "Select an option:",
  delay = 4000
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingPrompt, setTypingPrompt] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  
  // Type out the prompt
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    
    const startTyping = () => {
      if (currentIndex <= promptText.length) {
        setTypingPrompt(promptText.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(startTyping, 40);
      } else {
        setTypingComplete(true);
      }
    };
    
    const showTimer = setTimeout(() => {
      setVisible(true);
      startTyping();
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(showTimer);
    };
  }, [delay, promptText]);
  
  // Blink cursor
  useEffect(() => {
    if (!visible) return;
    
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, [visible]);
  
  // Handle keyboard navigation
  useEffect(() => {
    if (!typingComplete) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : options.length - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < options.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selectedOption = options[selectedIndex];
        if (selectedOption.isExternal) {
          window.open(selectedOption.link, '_blank');
        } else {
          window.location.href = selectedOption.link;
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [options, selectedIndex, typingComplete]);
  
  if (!visible) return null;
  
  return (
    <div className="font-['Geist_Mono'] mt-6">
      <div className="text-sm mb-2">
        <span className="text-blue-400">silkway@aaltoes:~$</span> <span>{typingPrompt}</span>
        {!typingComplete && <span className={`ml-1 text-blue-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>}
      </div>
      
      {typingComplete && (
        <div className="pl-2 space-y-1">
          {options.map((option, index) => {
            const isSelected = index === selectedIndex;
            const LinkComponent = option.isExternal ? 
              ({ children }: { children: React.ReactNode }) => (
                <a href={option.link} target="_blank" rel="noopener noreferrer" className="block">{children}</a>
              ) :
              ({ children }: { children: React.ReactNode }) => (
                <Link to={option.link} className="block">{children}</Link>
              );
            
            return (
              <div key={option.text} className="flex items-center">
                <div 
                  className={`w-full flex items-center px-1 ${isSelected ? 'bg-blue-500 text-white font-bold' : 'text-white'}`}
                >
                  <LinkComponent>
                    <div className="flex w-full">
                      <span>{option.text}</span>
                      {isSelected && <span className={`ml-1 text-blue-200 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>}
                    </div>
                  </LinkComponent>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
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
        color: #18181b;
      }
      .silkway-page ::-moz-selection {
        background-color: white;
        color: #18181b;
      }

      /* CRT Scanlines */
      .scanlines::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background: linear-gradient(
          rgba(255, 255, 255, 0.02) 50%, 
          rgba(0, 0, 0, 0.04) 50%
        );
        background-size: 100% 2px;
        z-index: 2;
        opacity: 0.4;
      }
      
      /* Additional subtle CRT effect */
      .scanlines::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background-image: radial-gradient(
          ellipse at center,
          rgba(0, 0, 150, 0.04) 0%,
          rgba(0, 0, 0, 0.2) 100%
        );
        z-index: 1;
        opacity: 0.3;
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
      className="min-h-screen bg-zinc-950 text-white p-6 flex flex-col text-sm leading-tight silkway-page scanlines relative"
      style={{ fontFamily: "'Geist Mono', monospace" }}
    >
      <div className="max-w-3xl mx-auto w-full pt-16 px-8 relative z-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-sm font-bold tracking-wide font-['Geist_Mono']">
            <TypedText text="PROJECT SILKWAY" speed={30} />
            {cursorVisible ? <span className="ml-1 text-blue-400">_</span> : <span className="ml-1 opacity-0">_</span>}
          </h1>
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
                <p><TypedText text="• Alibaba: Multinational tech giant" speed={3} delay={2750} /></p>
                <p><TypedText text="• DeepSeek: True Open-Source AI" speed={3} delay={2850} /></p>
                <p><TypedText text="• Unitree: Robotics that dominate the market" speed={3} delay={2950} /></p>
                <p>
                  <a 
                    href="https://www.sixthtone.com/news/1016770" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    <TypedText text="+ other emerging 'Little Dragons' reshaping global tech" speed={3} delay={3050} />
                  </a>
                </p>
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

              <TerminalInterface
                promptText="Please select an option:"
                delay={4200}
                options={[
                  { text: "APPLY", link: "/apply" },
                  { text: "VIEW OTHER PROJECTS", link: "/2025" }
                ]}
              />
            </div>

            <div className="my-8 border-t border-zinc-800"></div>

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