import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import './App.css'
import { EffectComposer, ChromaticAberration } from '@react-three/postprocessing'

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
      <directionalLight ref={mainLight} position={[0, 0, 50]} intensity={0.8} />
      <pointLight ref={light1} color={0x00ffff} intensity={4} distance={200} decay={1} />
      <pointLight ref={light2} color={0xff00ff} intensity={4} distance={200} decay={1} />
      <pointLight ref={light3} color={0x00ff00} intensity={4} distance={200} decay={1} />
      
      <pointLight position={[0, 0, 100]} color={0xff00ff} intensity={2} distance={200} />
      <pointLight position={[-50, -50, 80]} color={0x00ffff} intensity={2} distance={200} />
      <pointLight position={[50, 50, 80]} color={0x00ff00} intensity={2} distance={200} />
    </>
  )
}

function Scene() {
  const gltf = useLoader(GLTFLoader, '/aalto_logo_3d.glb')
  
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
      scale={6.5}
      position={[0, 0, 0]}
    />
  )
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convert screen coordinates to normalized device coordinates (-1 to +1)
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x: x * 20, y: y * 20 }) // Scale to match your scene size
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0
      }}
      camera={{
        fov: 45,
        position: [0, 0, 20]
      }}
    >
      <color attach="background" args={['#000000']} />
      
      <ambientLight intensity={0.1} />
      <directionalLight 
        position={[mousePosition.x, mousePosition.y, 60]} 
        intensity={0.005} 
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
        autoRotateSpeed={0.5}
      />

      <EffectComposer>
        <ChromaticAberration
          offset={new THREE.Vector2(0.002, 0.002)}
          radialModulation={false}
          modulationOffset={0}
        />
      </EffectComposer>
    </Canvas>
  )
}

export default App
