import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  const [sphere] = useMemo(() => [
    random.inSphere(new Float32Array(props.particleCount || 5000), { radius: 1.5 })
  ], [props.particleCount]);
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points key={sphere.length} ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#667eea"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 2;
    meshRef.current.rotation.y = Math.sin(t / 4) / 2;
    meshRef.current.position.y = Math.sin(t) / 10;
  });
  
  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#764ba2"
        transparent
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

function ThreeBackground() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Reduce complexity for mobile devices
  const particleCount = isMobile ? 1000 : 5000;
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars key={particleCount} particleCount={particleCount} />
        {!isMobile && <FloatingGeometry />}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
}

export default ThreeBackground;