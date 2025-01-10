import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import './App.css'
import { EffectComposer, ChromaticAberration } from '@react-three/postprocessing'
import { motion, AnimatePresence } from 'framer-motion'



function RotatingLights({ isModelLoaded }: { isModelLoaded: boolean }) {
  const light1 = useRef<THREE.PointLight>(null)
  const light2 = useRef<THREE.PointLight>(null)
  const light3 = useRef<THREE.PointLight>(null)
  const mainLight = useRef<THREE.DirectionalLight>(null)
  const sweepLight = useRef<THREE.PointLight>(null)
  const [isSweeping, setIsSweeping] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const isMobile = window.innerWidth <= 768
  const radius = isMobile ? 50 : 150

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
      mainLight.current.position.x = Math.cos(time * 0.9) * (radius * 5)
      mainLight.current.position.y = Math.sin(time * 0.9) * (radius * 5)
      mainLight.current.position.z = 100
    }

    if (light1.current) {
      light1.current.position.x = Math.cos(time * 0.5) * radius
      light1.current.position.y = Math.sin(time * 0.5) * radius
      light1.current.position.z = 70
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(time * 0.5 + 2.1) * radius
      light2.current.position.y = Math.sin(time * 0.5 + 2.1) * radius
      light2.current.position.z = 70
    }
    if (light3.current) {
      light3.current.position.x = Math.cos(time * 0.5 + 4.2) * radius
      light3.current.position.y = Math.sin(time * 0.5 + 4.2) * radius
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
  const gltf = useLoader(GLTFLoader, '/aalto_logo_3d.glb')
  const [isLoaded, setIsLoaded] = useState(false)
  const [scale, setScale] = useState(() => {
    if (window.innerWidth <= 480) {
      return 7.0
    } else if (window.innerWidth <= 768) {
      return 8.0
    }
    return 13.0
  })
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScale(7.0)
      } else if (window.innerWidth <= 768) {
        setScale(8.0)
      } else {
        setScale(13.0)
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
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <h2 className="font-mono text-white/50 text-sm sm:text-base tracking-widest uppercase mb-4">
          {loadingText}
        </h2>
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white/20 via-white/40 to-white/20 animate-loading-bar" />
        </div>
      </div>
    </div>
  )
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const words = ["builders", "innovators", "misfits", "openings", "brave", "open source", "explorers", "igniters"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480)
  const [cursorLightVisible, setCursorLightVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x: x * 200, y: y * 200 })
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
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      maxWidth: '1300px',
      height: isSmallMobile ? '45vh' : '50vh',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      <Canvas
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        style={{
          width: '100%',
          height: isSmallMobile ? '45vh' : '50vh',
          position: 'fixed',
          top: isSmallMobile ? '45%' : '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '4px'
        }}
        camera={{
          fov: isMobile ? 75 : 55,
          position: [0, 0, isSmallMobile ? 16 : isMobile ? 20 : 21],
          near: 0.1,
          far: 1000
        }}
      >
        <color attach="background" args={['#000000']} />
        
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
            offset={new THREE.Vector2(0.0012, 0.0012)}
            radialModulation={false}
            modulationOffset={0}
          />
        </EffectComposer>
      </Canvas>

      <div style={{
        position: 'fixed',
        top: isSmallMobile ? 'calc(45% + 17vh)' : 'calc(50% + 19vh)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1rem'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1300px',
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          alignItems: 'center',
          padding: '1rem',
          gap: '1rem',
          border: '1px solid rgba(128, 128, 128, 0.2)',
          borderRadius: '4px',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(8px)'
        }}>
          <div style={{
            flex: '1 1 50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: window.innerWidth <= 768 ? '100%' : '50%',
            marginBottom: window.innerWidth <= 768 ? '1rem' : '0',
          //  backgroundColor: 'rgba(255, 0, 0, 0.1)'  // Semi-transparent red
          }}>
            <h2 className="font-mono text-white/50 text-xs sm:text-sm tracking-widest uppercase flex items-center gap-3">
              Year of the{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-white/70"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </h2>
          </div>

          <div style={{
            flex: '1 1 50%',
            display: 'flex',
            flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: window.innerWidth <= 480 ? '1rem' : '2rem',
            width: window.innerWidth <= 768 ? '100%' : '50%',
          //  backgroundColor: 'rgba(0, 0, 255, 0.1)'  // Semi-transparent blue
          }}>
            
            <button className="group relative px-4 sm:px-6 py-2 sm:py-3 bg-black/30 backdrop-blur-xs text-white/70 rounded-lg border border-white/10 font-mono text-xs sm:text-sm tracking-widest transition-all hover:text-white hover:bg-black/40 hover:border-white/20">
              <span className="relative z-10 uppercase">Our Events</span>
              <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
            <button className="group relative px-4 sm:px-6 py-2 sm:py-3 bg-black/30 backdrop-blur-xs text-white/70 rounded-lg border border-white/10 font-mono text-xs sm:text-sm tracking-widest transition-all hover:text-white hover:bg-black/40 hover:border-white/20">
              <span className="relative z-10 uppercase">Community Chat</span>
              <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
            <button className="group relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm text-white rounded-lg border border-white/30 font-mono text-xs sm:text-sm tracking-widest transition-all hover:text-white hover:from-white/10 hover:via-white/20 hover:to-white/10 hover:border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]">
              <span className="relative z-10 uppercase font-medium">Join Aaltoes 2025</span>
              <div className="absolute inset-0 -m-[1px] rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
