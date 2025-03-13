import { useEffect, useRef, useState } from 'react';

const Robo = () => {
  const flagContainerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add a subtle animation to the flag container
    const container = flagContainerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Calculate rotation based on mouse position
      const rotateX = (y - rect.height / 2) / 20;
      const rotateY = (rect.width / 2 - x) / 20;
      
      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Create particles for background effect
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated particles */}
      <div className="fixed inset-0 -z-5 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-green-300"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animation: `twinkle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div 
        ref={flagContainerRef}
        className={`relative w-full max-w-4xl transition-transform duration-300 ease-out p-8 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '0.3s', transitionDuration: '0.8s' }}
      >
        <div className="animate-flag-wave">
          <img 
            src="/flag.svg" 
            alt="Robotics Nation" 
            className="w-full h-auto drop-shadow-[0_0_15px_rgba(108,226,32,0.3)]"
          />
        </div>
      </div>
      
      {/* Title */}
      <div 
        className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 mt-8 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '0.6s', transitionDuration: '0.8s', transition: 'all 0.8s ease-out' }}
      >
        ROBOTICS
      </div>
      
      <div 
        className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300 mb-12 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '0.9s', transitionDuration: '0.8s', transition: 'all 0.8s ease-out' }}
      >
        NATION
      </div>
      
      {/* Background gradient effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 -z-10"></div>
      
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-grid bg-grid-zinc opacity-5 -z-10"></div>
      
      {/* Radial gradient for spotlight effect */}
      <div 
        className="fixed inset-0 bg-radial-gradient -z-10 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(108,226,32,0.1) 0%, rgba(0,0,0,0) 70%)'
        }}
      ></div>
    </div>
  );
};

export default Robo; 