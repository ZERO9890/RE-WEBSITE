"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { Suspense, useState } from "react"

interface Bike3DViewerProps {
  bikeModel?: string
  bikeName: string
}

function BikeModel({ bikeModel, bikeName }: { bikeModel?: string; bikeName: string }) {
  return (
    <group>
      {/* Placeholder 3D bike model - in a real app, you'd load actual 3D models */}
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[2, 0.8, 4]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Wheels */}
      <mesh position={[1.2, -0.6, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[1.2, -0.6, -1.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Handlebars */}
      <mesh position={[0, 0.6, 1.8]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#333" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Seat */}
      <mesh position={[0, 0.2, -0.5]}>
        <boxGeometry args={[0.8, 0.1, 1]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      <Html position={[0, 1.5, 0]} center>
        <div className="bg-black/80 text-amber-400 px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-sm">
          {bikeName}
        </div>
      </Html>
    </group>
  )
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
      </div>
    </Html>
  )
}

export default function Bike3DViewer({ bikeModel, bikeName }: Bike3DViewerProps) {
  const [isRotating, setIsRotating] = useState(true)

  return (
    <div className="w-full h-[500px] bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-amber-600/20">
      <div className="flex justify-between items-center p-4 bg-black/50 backdrop-blur-sm">
        <h3 className="text-amber-400 font-semibold">360° View</h3>
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="px-3 py-1 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-600/30 text-amber-400 rounded-lg text-sm transition-all duration-300"
        >
          {isRotating ? "Stop Rotation" : "Auto Rotate"}
        </button>
      </div>

      <Canvas camera={{ position: [5, 2, 5], fov: 50 }} className="w-full h-full">
        <Suspense fallback={<LoadingSpinner />}>
          <Environment preset="night" />
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <BikeModel bikeModel={bikeModel} bikeName={bikeName} />

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={isRotating}
            autoRotateSpeed={2}
            minDistance={3}
            maxDistance={15}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
