import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { QRCodeSVG } from 'qrcode.react';
import { FaInfoCircle } from 'react-icons/fa';

const sections = [
  { id: 'typography', label: 'Typography', description: 'Font families and text styles that form our visual language.' },
  { id: 'colors', label: 'Colors', description: 'Our monochromatic palette with carefully crafted opacity variants.' },
  { id: 'buttons', label: 'Buttons', description: 'Interactive elements with smooth hover effects and transitions.' },
  { id: 'cards', label: 'Cards & Containers', description: 'Flexible containers with backdrop blur and border effects.' },
  { id: 'templates', label: 'Templates', description: 'Pre-built layouts for common use cases and components.' },
  { id: 'animations', label: 'Animations', description: 'Smooth transitions and loading states.' },
  { id: 'grid', label: 'Grid System', description: 'Background patterns and 3D perspective grids.' },
  { id: 'gradients', label: 'Gradients', description: 'Subtle overlays and backdrop effects.' }
];

const ShowCode = ({ code }: { code: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="base-button text-sm mb-4"
      >
        <span className="relative z-10 uppercase">
          {isVisible ? 'Hide Code' : 'Show Code'}
        </span>
      </button>
      {isVisible && (
        <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-4">
          <pre className="text-left text-sm text-zinc-100/70 overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

const Brand: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [qrValue, setQrValue] = useState('https://example.com');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide nav when scrolling down, show when scrolling up
      setShowNav(currentScrollY <= lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const downloadQR = () => {
    const svg = document.querySelector('#qr-code svg');
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'qr-code.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'typography':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title">Font Families</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                    <p className="font-sans text-2xl text-zinc-100/90 mb-2">Geist</p>
                    <p className="text-zinc-100/70">Primary Sans Font</p>
                    <p className="text-zinc-100/90 mt-4">The quick brown fox jumps over the lazy dog.</p>
                  </div>
                  <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                    <p className="font-mono text-2xl text-zinc-100/90 mb-2">Geist Mono</p>
                    <p className="text-zinc-100/70">Monospace Font</p>
                    <p className="font-mono text-zinc-100/90 mt-4">The quick brown fox jumps over the lazy dog.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="subsection-title">Text Styles</h3>
              <div className="space-y-4">
                <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                  <h1 className="page-title mb-4">Page Title - 30px</h1>
                  <h2 className="section-title mb-4">Section Title - 18px</h2>
                  <h3 className="subsection-title mb-4">Subsection Title - 14px</h3>
                  <p className="text-content mb-4">Body text - 16px. The quick brown fox jumps over the lazy dog.</p>
                  <p className="font-mono text-zinc-100/50 text-sm tracking-widest uppercase">Monospace Text - 14px</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'colors':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title">Base Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-4">
                  <div className="h-20 bg-zinc-950 rounded mb-2"></div>
                  <p className="font-mono text-sm text-zinc-100/70">Background</p>
                  <p className="font-mono text-xs text-zinc-100/50">zinc-950</p>
                </div>
                <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-4">
                  <div className="h-20 bg-zinc-100 rounded mb-2"></div>
                  <p className="font-mono text-sm text-zinc-100/70">Text Primary</p>
                  <p className="font-mono text-xs text-zinc-100/50">zinc-100</p>
                </div>
                <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-4">
                  <div className="h-20 bg-zinc-100/10 rounded mb-2"></div>
                  <p className="font-mono text-sm text-zinc-100/70">Border Light</p>
                  <p className="font-mono text-xs text-zinc-100/50">zinc-100/10</p>
                </div>
                <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-4">
                  <div className="h-20 bg-zinc-900 rounded mb-2"></div>
                  <p className="font-mono text-sm text-zinc-100/70">Surface</p>
                  <p className="font-mono text-xs text-zinc-100/50">zinc-900</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="subsection-title">Text Opacity Variants</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[90, 80, 70, 50].map((opacity) => (
                  <div key={opacity} className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-4">
                    <p className={`text-zinc-100/${opacity} mb-2`}>{opacity}% Opacity</p>
                    <p className="font-mono text-xs text-zinc-100/50">zinc-100/{opacity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'buttons':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title mb-4">Base Button</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <button className="base-button">
                    <span className="relative z-10 uppercase">Base Button</span>
                  </button>
                  <button className="base-button group">
                    <span className="relative z-10 uppercase">With Hover</span>
                    <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </button>
                  <button className="base-button" disabled>
                    <span className="relative z-10 uppercase opacity-50">Disabled</span>
                  </button>
                </div>
                <ShowCode code={`<button className="base-button">
  <span className="relative z-10 uppercase">Button Text</span>
</button>

<button className="base-button group">
  <span className="relative z-10 uppercase">With Hover</span>
  <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
</button>`} />
              </div>
            </div>
            <div>
              <h3 className="subsection-title mb-4">Size Variants</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="base-button text-sm py-1">
                  <span className="relative z-10 uppercase">Small</span>
                </button>
                <button className="base-button">
                  <span className="relative z-10 uppercase">Default</span>
                </button>
                <button className="base-button text-lg py-3">
                  <span className="relative z-10 uppercase">Large</span>
                </button>
              </div>
              <ShowCode code={`<button className="base-button text-sm py-1">Small</button>
<button className="base-button">Default</button>
<button className="base-button text-lg py-3">Large</button>`} />
            </div>
          </div>
        );

      case 'cards':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title mb-4">Basic Card</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                  <h4 className="text-lg font-medium mb-2">Simple Card</h4>
                  <p className="text-zinc-100/70">Basic card with backdrop blur effect and border.</p>
                </div>
                <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                  <h4 className="text-lg font-medium mb-2">Darker Variant</h4>
                  <p className="text-zinc-100/70">Card with higher background opacity.</p>
                </div>
              </div>
              <ShowCode code={`<div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
  <h4 className="text-lg font-medium mb-2">Card Title</h4>
  <p className="text-zinc-100/70">Card content</p>
</div>`} />
            </div>
            <div>
              <h3 className="subsection-title mb-4">Interactive Card</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group relative bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6 transition-all hover:bg-zinc-900/50 hover:border-zinc-100/20 cursor-pointer">
                  <h4 className="text-lg font-medium mb-2">Base Card</h4>
                  <p className="text-zinc-100/70">Card with hover state and transition.</p>
                </div>
                <div className="group relative bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6 transition-all hover:bg-zinc-900/50 hover:border-zinc-100/20 cursor-pointer">
                  <h4 className="text-lg font-medium mb-2">With Hover Effect</h4>
                  <p className="text-zinc-100/70">Card with gradient hover effect.</p>
                  <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
              <ShowCode code={`// Base Card
<div className="group relative bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6 transition-all hover:bg-zinc-900/50 hover:border-zinc-100/20 cursor-pointer">
  <h4 className="text-lg font-medium mb-2">Card Title</h4>
  <p className="text-zinc-100/70">Card content</p>
</div>

// With Hover Effect
<div className="group relative bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6 transition-all hover:bg-zinc-900/50 hover:border-zinc-100/20 cursor-pointer">
  <h4 className="text-lg font-medium mb-2">Card Title</h4>
  <p className="text-zinc-100/70">Card content</p>
  <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
</div>`} />
            </div>
            <div>
              <h3 className="subsection-title mb-4">Feature Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                  <div className="w-10 h-10 bg-zinc-100/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-zinc-100/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Resilient Growth</h4>
                  <p className="text-zinc-100/70 text-sm">We push, we rethink, and rework to get further from where we were yesterday, learning from the lessons of the past.</p>
                </div>
                <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                  <div className="w-10 h-10 bg-zinc-100/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-zinc-100/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Merit-First, Status-Blind</h4>
                  <p className="text-zinc-100/70 text-sm">We know that triumph comes from rallying bold, diverse squads of unstoppable innovators who tear down every barrier.</p>
                </div>
                <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                  <div className="w-10 h-10 bg-zinc-100/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-zinc-100/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Get Shit Done</h4>
                  <p className="text-zinc-100/70 text-sm">Ideas are great, but execution is everything. We will empower builders, by providing access to historical knowledge and all resources needed.</p>
                </div>
              </div>
              <ShowCode code={`// Feature Card with Icon
<div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
  {/* Icon Container */}
  <div className="w-10 h-10 bg-zinc-100/10 rounded-lg flex items-center justify-center mb-4">
    <svg className="w-6 h-6 text-zinc-100/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
    </svg>
  </div>
  {/* Content */}
  <h4 className="text-lg font-medium mb-2">Feature Title</h4>
  <p className="text-zinc-100/70 text-sm">Feature description text...</p>
</div>

// Example Usage with Content
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
    <div className="w-10 h-10 bg-zinc-100/10 rounded-lg flex items-center justify-center mb-4">
      {/* Icon */}
    </div>
    <h4 className="text-lg font-medium mb-2">Resilient Growth</h4>
    <p className="text-zinc-100/70 text-sm">
      We push, we rethink, and rework to get further from where we were yesterday...
    </p>
  </div>
  {/* Add more feature cards */}
</div>`} />
            </div>
          </div>
        );

      case 'templates':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title">QR Code Generator</h3>
              <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full max-w-md">
                    <input
                      type="text"
                      value={qrValue}
                      onChange={(e) => setQrValue(e.target.value)}
                      placeholder="Enter URL or text"
                      className="w-full bg-zinc-950/50 border border-zinc-100/10 rounded-lg px-4 py-2 text-zinc-100/90 placeholder-zinc-100/30 focus:outline-none focus:border-zinc-100/20"
                    />
                  </div>
                  <div id="qr-code" className="bg-white p-4 rounded-lg">
                    <QRCodeSVG
                      value={qrValue || "https://example.com"}
                      size={200}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                  <button
                    onClick={downloadQR}
                    className="base-button text-sm"
                  >
                    <span className="relative z-10 uppercase">Download QR Code</span>
                  </button>
                  <p className="text-zinc-100/70 text-sm">Scan or download the QR code</p>
                </div>
                <ShowCode code={`import { QRCodeSVG } from 'qrcode.react';

// State for QR value
const [qrValue, setQrValue] = useState('https://example.com');

// Download function
const downloadQR = () => {
  const svg = document.querySelector('#qr-code svg');
  if (!svg) return;
  
  const svgData = new XMLSerializer().serializeToString(svg);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    const pngFile = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.download = 'qr-code.png';
    downloadLink.href = pngFile;
    downloadLink.click();
  };
  img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
};

// Component
<div>
  <input
    type="text"
    value={qrValue}
    onChange={(e) => setQrValue(e.target.value)}
    className="..."
  />
  <QRCodeSVG
    value={qrValue}
    size={200}
    level="H"
    includeMargin={true}
  />
  <button onClick={downloadQR}>Download QR Code</button>
</div>`} />
              </div>
            </div>
            <div>
              <h3 className="subsection-title">Chat Layout</h3>
              <div className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-start">
                    <div className="bg-zinc-100/5 rounded-lg p-3 max-w-[80%]">
                      <span className="font-mono text-sm text-zinc-100/50 uppercase tracking-wider mb-2 block">User</span>
                      <p className="text-zinc-100/70">How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-zinc-100/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-zinc-100/90 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-zinc-100/50">
                        I have a question about...
                      </p>
                    </div>
                  </div>
                </div>
                <ShowCode code={`<div className="flex justify-start">
  <div className="bg-zinc-100/5 rounded-lg p-3 max-w-[80%]">
    <span className="font-mono text-sm text-zinc-100/50 uppercase tracking-wider mb-2 block">User</span>
    <p className="text-zinc-100/70">Message text</p>
  </div>
</div>`} />
              </div>
            </div>
          </div>
        );

      case 'animations':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title mb-4">Loading Bar</h3>
              <div className="space-y-4">
                <div className="h-2 w-full bg-zinc-100/10 overflow-hidden rounded">
                  <div className="h-full w-full bg-zinc-100/50 animate-loading-bar"></div>
                </div>
                <ShowCode code={`<div className="h-2 w-full bg-zinc-100/10 overflow-hidden rounded">
  <div className="h-full w-full bg-zinc-100/50 animate-loading-bar"></div>
</div>

// In tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'loading-bar': 'loading-bar 1.5s ease-in-out infinite'
      }
    }
  }
}`} />
              </div>
            </div>
          </div>
        );

      case 'grid':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title mb-4">Basic Grid</h3>
              <div className="h-40 relative rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-zinc-950 bg-grid-zinc-100/30 bg-grid" />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/50 to-zinc-950" />
                <div className="relative h-full flex items-center justify-center">
                  <p className="text-zinc-100/90">Basic Grid Pattern</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="subsection-title mb-4">3D Grid with Cone</h3>
              <div className="h-40 relative rounded-lg overflow-hidden bg-zinc-950">
                <div 
                  className="absolute w-full h-full"
                  style={{
                    transform: 'perspective(1000px) rotateX(60deg) translateY(-50%) translateZ(-100px)',
                    backgroundImage: `
                      repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0px, rgba(255, 255, 255, 0.3) 1px, transparent 1px, transparent 60px),
                      repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.3) 0px, rgba(255, 255, 255, 0.3) 1px, transparent 1px, transparent 60px)
                    `
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/50 to-zinc-950" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} />
                <div className="relative h-full flex items-center justify-center">
                  <p className="text-zinc-100/90">3D Perspective Grid with Cone</p>
                </div>
              </div>
              <ShowCode code={`<div className="relative">
  {/* Grid Background */}
  <div 
    className="absolute w-full h-full"
    style={{
      transform: 'perspective(1000px) rotateX(60deg) translateY(-50%) translateZ(-100px)',
      backgroundImage: \`
        repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0px, rgba(255, 255, 255, 0.3) 1px, transparent 1px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.3) 0px, rgba(255, 255, 255, 0.3) 1px, transparent 1px, transparent 60px)
      \`
    }}
  />
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/50 to-zinc-950" />
  {/* Cone Effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} />
</div>`} />
            </div>
          </div>
        );

      case 'gradients':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title mb-4">Basic Gradient Overlay</h3>
              <div className="h-60 relative rounded-lg overflow-hidden">
                {/* Example content to show gradient effect */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80" 
                    alt="Space"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/80 to-zinc-950" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-2xl font-medium mb-2">Gradient Overlay</h4>
                    <p className="text-zinc-100/70">Content visible through the gradient</p>
                  </div>
                </div>
              </div>
              <ShowCode code={`<div className="relative">
  {/* Content below gradient */}
  <img src="..." className="w-full h-full object-cover" />
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/80 to-zinc-950" />
</div>`} />
            </div>
            <div>
              <h3 className="subsection-title mb-4">Backdrop Blur</h3>
              <div className="h-60 relative rounded-lg overflow-hidden">
                {/* Example content to show blur effect */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80" 
                    alt="Space"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-zinc-950/30 backdrop-blur-sm" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-2xl font-medium mb-2">Backdrop Blur</h4>
                    <p className="text-zinc-100/70">Content visible through the blur</p>
                  </div>
                </div>
              </div>
              <ShowCode code={`<div className="relative">
  {/* Content below blur */}
  <img src="..." className="w-full h-full object-cover" />
  {/* Blur overlay */}
  <div className="absolute inset-0 bg-zinc-950/30 backdrop-blur-sm" />
</div>`} />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* Floating Navigation */}
      <div className={`fixed right-8 top-24 z-50 transition-transform duration-300 hidden lg:block ${showNav ? 'translate-y-0' : '-translate-y-[120%]'}`}>
        <div className="bg-zinc-950/70 backdrop-blur-md border border-zinc-100/10 rounded-lg p-4 w-64">
          <div className="font-mono text-sm text-zinc-100/50 uppercase tracking-wider mb-4">Navigation</div>
          <nav className="space-y-1">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-mono uppercase tracking-wider transition-colors ${
                  activeSection === section.id
                    ? 'bg-zinc-100/10 text-zinc-100 hover:text-zinc-100'
                    : 'text-zinc-100/50 hover:text-zinc-100/70 hover:bg-zinc-100/5'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="space-y-24 max-w-4xl mx-auto pb-24">
        <div>
          <h1 className="page-title">In Case You Need to Design With Us</h1>
          <div className="title-divider" />
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 mb-8 flex items-center gap-3">
      <FaInfoCircle className="text-zinc-300 flex-shrink-0" />
      <p className="text-zinc-300 text-sm">
            Our brand assets bank is continuously updated. Check back regularly for new materials and guidelines.
            </p>
          </div>
          <p className="text-zinc-100/70 mb-12">
          Here's a collection of snippets, components, and assets you might find interesting or beneficial for your next project. Feel free to explore and use them as building blocks.
          </p>
        </div>

        {/* Logo Bank Section */}
        <section id="logo-bank" className="content-section scroll-mt-24">
          <div className="space-y-4 mb-8">
            <h2 className="section-title">Logo Bank</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* White Logo */}
              <div className="group relative bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-8 flex flex-col items-center justify-center gap-6">
                <div className="bg-black rounded-lg p-6 w-full flex justify-center">
                  <img 
                    src="/bank/aaltoes_white.svg" 
                    alt="Aaltoes 2025 Logo White" 
                    className="h-16 w-auto opacity-50 group-hover:opacity-100 transition-all duration-150"
                  />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <button 
                    onClick={() => window.open('/bank/aaltoes_white.png', '_blank')}
                    className="base-button"
                  >
                    <span className="relative z-10 uppercase">Download PNG</span>
                  </button>
                  <button 
                    onClick={() => window.open('/bank/aaltoes_white.svg', '_blank')}
                    className="base-button"
                  >
                    <span className="relative z-10 uppercase">Download SVG</span>
                  </button>
                </div>
                <span className="text-sm text-zinc-100/50">
                  Logo White
                </span>
              </div>

              {/* Dark Logo */}
              <div className="group relative bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-8 flex flex-col items-center justify-center gap-6">
                <div className="bg-white rounded-lg p-6 w-full flex justify-center">
                  <img 
                    src="/bank/aaltoes_dark.svg" 
                    alt="Aaltoes 2025 Logo Dark" 
                    className="h-16 w-auto opacity-50 group-hover:opacity-100 transition-all duration-150"
                  />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <button 
                    onClick={() => window.open('/bank/aaltoes_dark.png', '_blank')}
                    className="base-button"
                  >
                    <span className="relative z-10 uppercase">Download PNG</span>
                  </button>
                  <button 
                    onClick={() => window.open('/bank/aaltoes_dark.svg', '_blank')}
                    className="base-button"
                  >
                    <span className="relative z-10 uppercase">Download SVG</span>
                  </button>
                </div>
                <span className="text-sm text-zinc-100/50">
                  Logo Dark
                </span>
              </div>
            </div>
          </div>
        </section>

        {sections.map(section => (
          <section key={section.id} id={section.id} className="content-section scroll-mt-24">
            <div className="space-y-4 mb-8">
              <h2 className="section-title">{section.label}</h2>
              <p className="text-zinc-100/70">{section.description}</p>
            </div>
            {renderSectionContent(section.id)}
          </section>
        ))}

        {/* Add Status and Warning components before the templates section */}
        <section id="components" className="content-section scroll-mt-24">
          <div className="space-y-4 mb-8">
            <h2 className="section-title">Status Components</h2>
            <p className="text-zinc-100/70">Essential indicators for system status and warnings.</p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="subsection-title mb-4">Project Status</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                    active
                  </div>
                  <div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-amber-500/20 text-amber-300 border-amber-500/30">
                    inactive
                  </div>
                  <div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-zinc-500/20 text-zinc-300 border-zinc-500/30">
                    archived
                  </div>
                  <div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-blue-500/20 text-blue-300 border-blue-500/30">
                    planned
                  </div>
                  <div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-purple-500/20 text-purple-300 border-purple-500/30">
                    pilot
                  </div>
                </div>
                <ShowCode code={`<div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
  active
</div>

<div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-amber-500/20 text-amber-300 border-amber-500/30">
  inactive
</div>

<div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-zinc-500/20 text-zinc-300 border-zinc-500/30">
  archived
</div>

<div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-blue-500/20 text-blue-300 border-blue-500/30">
  planned
</div>

<div className="px-1.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border bg-purple-500/20 text-purple-300 border-purple-500/30">
  pilot
</div>`} />
              </div>
            </div>
            <div>
              <h3 className="subsection-title mb-4">Warning Message</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex items-center gap-3">
                  <FaInfoCircle className="text-white/70 flex-shrink-0" />
                  <p className="text-white/70 text-sm">
                    This action cannot be undone. Please make sure you want to proceed.
                  </p>
                </div>
                <ShowCode code={`<div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex items-center gap-3">
  <FaInfoCircle className="text-white/70 flex-shrink-0" />
  <p className="text-white/70 text-sm">
    Warning message text here...
  </p>
</div>`} />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Copy Feature */}
        <div className="fixed bottom-8 left-8 z-50">
          <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg px-4 py-2 text-sm opacity-0 transition-opacity duration-300" id="copyNotification">
            Copied to clipboard!
          </div>
        </div>
      </div>

      <style>{`
        @keyframes moveGradient1 {
          0% { transform: translate(-100%, -100%) scale(2.5) rotate(0deg); }
          50% { transform: translate(100%, 100%) scale(2.5) rotate(180deg); }
          100% { transform: translate(-100%, -100%) scale(2.5) rotate(360deg); }
        }
        @keyframes moveGradient2 {
          0% { transform: translate(100%, -100%) scale(2.5) rotate(0deg); }
          50% { transform: translate(-100%, 100%) scale(2.5) rotate(-180deg); }
          100% { transform: translate(100%, -100%) scale(2.5) rotate(-360deg); }
        }
        @keyframes moveGradient3 {
          0% { transform: translate(-100%, 100%) scale(2.5) rotate(0deg); }
          50% { transform: translate(100%, -100%) scale(2.5) rotate(180deg); }
          100% { transform: translate(-100%, 100%) scale(2.5) rotate(360deg); }
        }
      `}</style>
    </Layout>
  );
};

export default Brand; 