import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import './App.css'
import { EffectComposer, ChromaticAberration } from '@react-three/postprocessing'
import { motion, AnimatePresence } from 'framer-motion'



function RotatingLights() {
  const light1 = useRef<THREE.PointLight>(null)
  const light2 = useRef<THREE.PointLight>(null)
  const light3 = useRef<THREE.PointLight>(null)
  const mainLight = useRef<THREE.DirectionalLight>(null)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const radius = 90

    if (mainLight.current) {
      mainLight.current.position.x = Math.cos(time * 0.9) * (radius * 0.8)
      mainLight.current.position.y = Math.sin(time * 0.9) * (radius * 0.8)
      mainLight.current.position.z = 10
    }

    if (light1.current) {
      light1.current.position.x = Math.cos(time * 0.5) * radius
      light1.current.position.y = Math.sin(time * 0.5) * radius
      light1.current.position.z = 80
    }
    if (light2.current) {
      light2.current.position.x = Math.cos(time * 0.5 + 2.1) * radius
      light2.current.position.y = Math.sin(time * 0.5 + 2.1) * radius
      light2.current.position.z = 80
    }
    if (light3.current) {
      light3.current.position.x = Math.cos(time * 0.5 + 4.2) * radius
      light3.current.position.y = Math.sin(time * 0.5 + 4.2) * radius
      light3.current.position.z = 100
    }
  })

  return (
    <>
      <directionalLight ref={mainLight} position={[0, 0, 50]} intensity={1.0} />
      <pointLight ref={light1} color={0x00ffff} intensity={5} distance={200} decay={1} />
      <pointLight ref={light2} color={0xff00ff} intensity={5} distance={200} decay={1} />
      <pointLight ref={light3} color={0x00ff00} intensity={5} distance={200} decay={1} />
      
      <pointLight position={[0, 0, 100]} color={0xff00ff} intensity={2.5} distance={200} />
      <pointLight position={[-50, -50, 80]} color={0x00ffff} intensity={2.5} distance={200} />
      <pointLight position={[50, 50, 80]} color={0x00ff00} intensity={2.5} distance={200} />
    </>
  )
}

function Scene() {
  const gltf = useLoader(GLTFLoader, '/aalto_logo_3d.glb')
  const [scale, setScale] = useState(() => {
    if (window.innerWidth <= 480) {
      return 3.0
    } else if (window.innerWidth <= 768) {
      return 4.0
    }
    return 6.5
  })
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScale(3.0)
      } else if (window.innerWidth <= 768) {
        setScale(4.0)
      } else {
        setScale(6.5)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
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
    <primitive 
      object={gltf.scene} 
      scale={scale}
      position={[0, 0, 0]}
    />
  )
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const words = ["builders", "innovators", "brave", "open source"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x: x * 90, y: y * 90 })
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

  return (
    <div style={{ 
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: isMobile ? -5 : -20,
          left: 0
        }}
        camera={{
          fov: isMobile ? 75 : 45,
          position: [0, 0, isSmallMobile ? 15 : isMobile ? 22 : 20],
          near: 0.1,
          far: 1000
        }}
      >
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.05} />
        <pointLight 
          position={[mousePosition.x, mousePosition.y, 90]} 
          intensity={0.9}
          distance={300}
          decay={1}
          color={0xffffff}
        />
        <RotatingLights />
        
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
            offset={new THREE.Vector2(0.002, 0.002)}
            radialModulation={false}
            modulationOffset={0}
          />
        </EffectComposer>
      </Canvas>

      <div style={{
        position: 'absolute',
        top: '75%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1rem'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          alignItems: 'center',
          gap: window.innerWidth <= 768 ? '2rem' : '4rem',
          padding: '0 1rem'
        }}>
          <div style={{
            flex: window.innerWidth <= 768 ? 'initial' : '1',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: window.innerWidth <= 768 ? '1rem' : '0'
          }}>
            <h2 className="font-mono text-white/50 text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2">
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
            display: 'flex',
            flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
            gap: window.innerWidth <= 480 ? '1rem' : '2rem',
            width: window.innerWidth <= 480 ? '100%' : 'auto'
          }}>
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-black/30 backdrop-blur-xs text-white/70 rounded-lg border border-white/10 font-mono text-xs sm:text-sm tracking-widest transition-all hover:text-white hover:bg-black/40 hover:border-white/20">
              <span className="relative z-10 uppercase">Join Aaltoes</span>
              <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-black/30 backdrop-blur-xs text-white/70 rounded-lg border border-white/10 font-mono text-xs sm:text-sm tracking-widest transition-all hover:text-white hover:bg-black/40 hover:border-white/20">
              <span className="relative z-10 uppercase">Our Events</span>
              <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-black/30 backdrop-blur-xs text-white/70 rounded-lg border border-white/10 font-mono text-xs sm:text-sm tracking-widest transition-all hover:text-white hover:bg-black/40 hover:border-white/20">
              <span className="relative z-10 uppercase">Community Chat</span>
              <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
