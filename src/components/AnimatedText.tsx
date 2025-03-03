import { useEffect, useRef } from 'react';

const DEFAULT_PATTERN = 'AALTOES CV ';

interface AnimatedTextProps {
  pattern?: string;
  className?: string;
}

// Canvas-based implementation for optimal performance
export default function AnimatedText({ 
  pattern = DEFAULT_PATTERN,
  className = ''
}: AnimatedTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial size
    updateCanvasSize();
    
    // Handle resize
    window.addEventListener('resize', updateCanvasSize);
    
    // Animation variables
    let time = 0;
    let animationId: number;
    
    // Create some random offsets for more chaotic patterns
    const randomOffsets = Array.from({ length: 10 }, () => Math.random() * 100);
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Increment time extremely slowly for a much slower animation
      time += 0.002; // Reduced from 0.02 for even slower animation
      
      // Character size - increased for larger text
      const charWidth = 16; // Doubled from 8
      const charHeight = 16; // Increased from 16
      
      // Calculate grid dimensions
      const cols = Math.ceil(canvas.width / charWidth);
      const rows = Math.ceil(canvas.height / charHeight);
      
      // Set text properties - increased font size
      ctx.font = '14px monospace'; // Increased from 10px
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.textBaseline = 'top';
      
      // Draw characters with increased tracking (letter spacing)
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Create multiple chaotic wave patterns with different frequencies and amplitudes
          const wave1 = Math.sin(y * 0.1 + x * 0.05 + time + randomOffsets[0]) * 6;
          const wave2 = Math.cos(x * 0.08 + y * 0.03 + time * 0.7 + randomOffsets[1]) * 8;
          const wave3 = Math.sin((x + y) * 0.06 + time * 0.4 + randomOffsets[2]) * 7;
          
          // Add spiral patterns
          const distFromCenter = Math.sqrt(Math.pow(x - cols/2, 2) + Math.pow(y - rows/2, 2));
          const spiral = Math.sin(distFromCenter * 0.2 - time * 0.5 + randomOffsets[3]) * 5;
          
          // Add ripple effect
          const ripple = Math.sin(distFromCenter * 0.3 - time * 0.3 + randomOffsets[4]) * 4;
          
          // Add some noise based on position
          const noise = (Math.sin(x * y * 0.001 + time * 0.2 + randomOffsets[5]) * 3);
          
          // Combine all effects for maximum chaos
          const o = wave1 + wave2 + wave3 + spiral + ripple + noise;
          
          // Determine character index with added randomness
          const randomFactor = Math.sin(time * 0.1 + x * 0.02 + y * 0.02) * 2;
          const i = Math.round(Math.abs(x + y + o + randomFactor)) % pattern.length;
          
          // Draw character with increased spacing
          // Apply additional horizontal spacing for tracking effect
          const trackingOffset = 4; // Add extra pixels between characters
          ctx.fillText(
            pattern[i], 
            x * (charWidth + trackingOffset), 
            y * charHeight
          );
        }
      }
      
      // Continue animation loop
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, [pattern]);
  
  return (
    <canvas 
      ref={canvasRef}
      className={`fixed inset-0 z-0 bg-black ${className}`}
    />
  );
} 