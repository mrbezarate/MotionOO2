"use client";

import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function generateGalaxy(count: number, radius: number, branches: number, spin: number, randomness: number, randomnessPower: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const colorInside = new THREE.Color("#ff6030");
  const colorOutside = new THREE.Color("#1b3984");

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const r = Math.random() * radius;
    const spinAngle = r * spin;
    const branchAngle = ((i % branches) / branches) * Math.PI * 2;

    const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
    const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;
    const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r;

    positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, r / radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  return { positions, colors };
}

const Galaxy = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Parameters for the galaxy
  const [{ positions, colors }] = useState(() => 
    generateGalaxy(100000, 5, 3, 1, 0.2, 3)
  );

  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (ref.current) {
      // Base slow rotation
      ref.current.rotation.y += delta * 0.05;

      // Mouse interaction
      const targetRotationX = mouse.y * 0.2;
      const targetRotationY = mouse.x * 0.2;
      
      ref.current.rotation.x += 0.05 * (targetRotationX - ref.current.rotation.x);
      ref.current.rotation.z += 0.05 * (-targetRotationY - ref.current.rotation.z);
    }
  });

  return (
    <group rotation={[Math.PI * 0.2, 0, 0]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#030305' }}>
      <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
        <fog attach="fog" args={['#030305', 2, 10]} />
        <Galaxy />
      </Canvas>
    </div>
  );
}
