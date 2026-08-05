import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Icosahedron, Sparkles } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import { useTheme } from '../hooks/useTheme'

function DistortedCore({ color, wireColor }) {
  return (
    <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1.2}>
      <group>
        <Icosahedron args={[1.6, 4]}>
          <MeshDistortMaterial
            color={color}
            distort={0.45}
            speed={2}
            roughness={0.15}
            metalness={0.6}
            wireframe
            transparent
            opacity={0.9}
          />
        </Icosahedron>
        <Icosahedron args={[1.15, 1]}>
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={0.5} />
        </Icosahedron>
      </group>
    </Float>
  )
}

export function HeroScene() {
  const { theme } = useTheme()

  const { color, wireColor, sparkleColor } = useMemo(() => {
    if (theme === 'color') {
      return { color: '#818cf8', wireColor: '#a5b4fc', sparkleColor: '#22c55e' }
    }
    return { color: '#ffffff', wireColor: '#999999', sparkleColor: '#ffffff' }
  }, [theme])

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={40} color={color} />
        <DistortedCore color={color} wireColor={wireColor} />
        <Sparkles count={40} scale={4.5} size={2} speed={0.3} color={sparkleColor} opacity={0.5} />
      </Suspense>
    </Canvas>
  )
}
