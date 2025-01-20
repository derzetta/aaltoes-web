import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import './index.css'
import { EffectComposer, ChromaticAberration } from '@react-three/postprocessing'
import { motion, AnimatePresence } from 'framer-motion'
import { Analytics } from "@vercel/analytics/react"
import Footer from './components/Footer'
import { FooterScrollProvider } from './contexts/FooterScrollContext'



function RotatingLights({ isModelLoaded }: { isModelLoaded: boolean }) {
  const light1 = useRef<THREE.PointLight>(null)
  const light2 = useRef<THREE.PointLight>(null)
  const light3 = useRef<THREE.PointLight>(null)
  const mainLight = useRef<THREE.DirectionalLight>(null)
  const sweepLight = useRef<THREE.PointLight>(null)
  const [isSweeping, setIsSweeping] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const isMobile = window.innerWidth <= 768
  const radius = isMobile ? 90 : 150

  useEffect(() => {
    if (isModelLoaded) {
      const timer = setTimeout(() => {
        setIsSweeping(true)
        setStartTime(performance.now())
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isModelLoaded])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (mainLight.current) {
      mainLight.current.position.x = Math.cos(time * 0.9) * (radius * 3)
      mainLight.current.position.y = Math.sin(time * 0.9) * (radius * 3)
      mainLight.current.position.z = 70
    }

    if (light1.current) {
      light1.current.position.x = Math.cos(time * 0.8) * radius
      light1.current.position.y = Math.sin(time * 0.8) * radius
      light1.current.position.z = 70
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(time * 0.8 + 2.1) * radius
      light2.current.position.y = Math.sin(time * 0.8 + 2.1) * radius
      light2.current.position.z = 70
    }
    if (light3.current) {
      light3.current.position.x = Math.cos(time * 0.8 + 4.2) * radius
      light3.current.position.y = Math.sin(time * 0.8 + 4.2) * radius
      light3.current.position.z = 70
    }

    if (sweepLight.current && isSweeping) {
      const currentTime = (performance.now() - startTime) / 1000
      const sweepTime = currentTime * 0.8
      if (sweepTime <= 1) {
        const sweepRadius = isMobile ? 150 : 200
        sweepLight.current.position.x = -sweepRadius + (sweepTime * sweepRadius * 2)
        sweepLight.current.position.y = 0
        sweepLight.current.position.z = 100
        const t = sweepTime
        const easeInOut = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        sweepLight.current.intensity = easeInOut * (isMobile ? 15 : 20)
      } else {
        setIsSweeping(false)
      }
    }
  })

  return (
    <>
      <directionalLight ref={mainLight} position={[0, 0, 50]} intensity={1.0} />
      <pointLight ref={light1} color={0xFF1493} intensity={isMobile ? 4 : 5} distance={isMobile ? 150 : 200} decay={0.5} />
      <pointLight ref={light2} color={0x00BFFF} intensity={isMobile ? 4 : 5} distance={isMobile ? 150 : 200} decay={0.5} />
      <pointLight ref={light3} color={0xfffff0} intensity={isMobile ? 4 : 5} distance={isMobile ? 150 : 200} decay={0.5} />
      
      <pointLight position={[0, 0, 100]} color={0xFF1493} intensity={isMobile ? 2 : 2.5} distance={isMobile ? 150 : 200} />
      <pointLight position={[-50, -50, 80]} color={0x00BFFF} intensity={isMobile ? 2 : 2.5} distance={isMobile ? 150 : 200} />
      <pointLight position={[50, 50, 80]} color={0xfffff0} intensity={isMobile ? 2 : 2.5} distance={isMobile ? 150 : 200} />
      <pointLight 
        ref={sweepLight}
        color={0xffffff}
        intensity={0}
        distance={isMobile ? 300 : 400}
        decay={0}
      />
    </>
  )
}

function Scene() {
  const gltf = useLoader(GLTFLoader, '/aalto_logo_3ds.glb')
  const [isLoaded, setIsLoaded] = useState(false)
  const [scale, setScale] = useState(() => {
    if (window.innerWidth <= 480) {
      return 8.0
    } else if (window.innerWidth <= 768) {
      return 9.0
    }
    return 14.0
  })
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScale(8.0)
      } else if (window.innerWidth <= 768) {
        setScale(9.0)
      } else {
        setScale(14.0)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  useEffect(() => {
    if (gltf) {
      setIsLoaded(true)
    }
  }, [gltf])
  
  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 1.0,
        roughness: 0.1,
        transmission: 0.0,
        thickness: 0.05,
        envMapIntensity: 1,
        clearcoat: 0.05,
        clearcoatRoughness: 0.2
      })
    }
  })
  
  return (
    <>
      <primitive 
        object={gltf.scene} 
        scale={scale}
        position={[0, 0, 0]}
      />
      <RotatingLights isModelLoaded={isLoaded} />
    </>
  )
}

function LoadingScreen() {
  const [loadingText, setLoadingText] = useState("Patience, my founder")
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingText("just buy a new router bro")
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-neutral-950 flex items-center justify-center z-50">
      <div className="text-center">
        <h2 className="font-mono text-neutral-100/50 text-sm sm:text-base tracking-widest uppercase mb-4">
          {loadingText}
        </h2>
        <div className="w-64 h-1 bg-neutral-100/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-neutral-100/20 via-neutral-100/40 to-neutral-100/20 animate-loading-bar" />
        </div>
      </div>
    </div>
  )
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const words = ["builders", "innovators", "misfits", "openings", "brave", "strivers", "mavericks","open source", "explorers", "igniters"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480)
  const [cursorLightVisible, setCursorLightVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(() => {
    // Check if we've already loaded once in this session
    return !sessionStorage.getItem('hasLoaded')
  })
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(window.innerWidth <= 1024)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x: x * 190, y: y * 190 - 40 })
      setCursorLightVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsSmallMobile(window.innerWidth <= 480)
      setIsTabletOrMobile(window.innerWidth <= 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        // Mark that we've loaded
        sessionStorage.setItem('hasLoaded', 'true')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  useEffect(() => {
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <FooterScrollProvider>
      <div className="relative h-[calc(100vh-96px)] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-neutral-950 bg-grid-neutral-100 bg-grid -z-10 sm:h-auto h-[50vh]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/0 via-neutral-950/80 to-neutral-950 -z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-transparent -z-10 sm:hidden" />
        
        {/* Grid Background */}
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[200vw] h-[200vh]"
            style={{
              transform: 'perspective(1000px) rotateX(60deg) translateY(-50%) translateZ(-100px)',
              backgroundImage: `
                repeating-linear-gradient(90deg, rgba(163, 163, 163, 0.25) 0px, rgba(163, 163, 163, 0.25) 1px, transparent 1px, transparent 60px),
                repeating-linear-gradient(0deg, rgba(163, 163, 163, 0.25) 0px, rgba(163, 163, 163, 0.25) 1px, transparent 1px, transparent 60px)
              `,
              opacity: 1,
            }}
          />
          {/* Fade overlays */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950"
            style={{ opacity: 0.95 }}
          />
          <div 
            className="absolute bottom-0 left-0 right-0 h-[70vh] bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"
            style={{ opacity: 0.9 }}
          />
        </div>

        {/* Main content container */}
        <div className="flex flex-col items-center gap-6 relative z-10" style={{ 
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 1rem',
        }}>
          {/* Canvas container */}
          <div style={{ 
            position: 'relative',
            width: '100%',
            height: isSmallMobile ? '150px' : isTabletOrMobile ? '180px' : '250px',
            overflow: 'hidden',
            clipPath: 'inset(0 0 0 0)',
            borderRadius: '4px',
          }}>
   
            <Canvas
              dpr={[1, 2]}
              performance={{ min: 0.5 }}
              style={{
                width: '100%',
                height: '200%',
                position: 'relative',
                borderRadius: '4px',
                transform: `translateY(-25%)`,
              }}
              camera={{
                fov: isMobile ? 75 : 55,
                position: [0, -2, isSmallMobile ? 20 : isMobile ? 24 : 25],
                near: 0.1,
                far: 1000
              }}
              gl={{ alpha: true }}
            >
              <ambientLight intensity={0.05} />
              <pointLight 
                position={[mousePosition.x, mousePosition.y, 90]} 
                intensity={cursorLightVisible ? 0.9 : 0}
                distance={200}
                decay={0.2}
                color={0xffffff}
              />
              
              <Suspense fallback={null}>
                <Scene />
              </Suspense>

              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                autoRotate={false}
              />

              <EffectComposer>
                <ChromaticAberration
                  offset={new THREE.Vector2(0.001, 0.001)}
                  radialModulation={false}
                  modulationOffset={0}
                />
              </EffectComposer>
            </Canvas>
          </div>

          {/* Slogan and buttons container */}
          <div style={{
            width: '100%',
            padding: '0'
          }}>
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: isTabletOrMobile ? 'column' : 'row',
              alignItems: 'center',
              padding: '1rem',
              gap: '1rem',
              border: '1px solid rgba(128, 128, 128, 0.2)',
              borderRadius: '4px',
              background: 'rgba(23, 23, 23, 0.3)',
              backdropFilter: 'blur(8px)'
            }}>
              <div style={{
                flex: isTabletOrMobile ? '0 0 auto' : '1 1 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                marginBottom: isTabletOrMobile ? '0' : '0',
                textAlign: isTabletOrMobile ? 'center' : 'left',
                minHeight: isTabletOrMobile ? '48px' : 'auto'
              }}>
                <h2 className="font-mono text-neutral-100/50 text-base sm:text-lg tracking-widest uppercase flex items-center gap-3">
                  Year of the{' '}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWordIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-neutral-100/70"
                    >
                      {words[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </h2>
              </div>

              {/* Divider */}
              <div className={`
                ${isTabletOrMobile 
                  ? 'w-[calc(100%+2rem)] -mx-4 h-px bg-white/10' 
                  : 'h-12 w-px bg-white/10'
                }
              `} />

              {/* Buttons Section */}
              <div style={{
                display: 'flex',
                flexDirection: isTabletOrMobile ? 'column' : 'row',
                justifyContent: 'flex-end',
                alignItems: 'stretch',
                gap: isTabletOrMobile ? '0.5rem' : '1.7rem',
                padding: isTabletOrMobile ? '0' : '0 1.7rem',
                width: isTabletOrMobile ? '100%' : 'auto',
                minWidth: isTabletOrMobile ? 'auto' : 'fit-content',
              }}>
                <a 
                  href="https://lu.ma/aaltoes-calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center"
                >
                  <span className="relative z-10 uppercase">2025 Events</span>
                </a>
                <a 
                  href="https://t.me/+1P42HmirI81lYTMy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center"
                >
                  <span className="relative z-10 uppercase">2025 Chat</span>
                  <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </a>
                <a 
                  href="https://aaltoes2025.typeform.com/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button inline-flex items-center justify-center"
                >
                  <span className="relative z-10 uppercase font-medium">Join Aaltoes 2025</span>
                  <div className="absolute inset-0 -m-[1px] rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
      <Analytics />
    </FooterScrollProvider>
  )
}

export default App
