"use client";

import { Points, PointMaterial, Line } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useMemo } from "react";
import type { Points as PointsType, Group } from "three";
import * as THREE from "three";

// Blood Cells Component (White and Red Blood Cells)
export const BloodCells = (props: PointsProps) => {
  const whiteBloodCellsRef = useRef<PointsType | null>(null);
  const redBloodCellsRef = useRef<PointsType | null>(null);
  const virusesRef = useRef<PointsType | null>(null);

  // Generate different cell positions
  const [whiteBloodCells] = useState(() =>
    random.inSphere(new Float32Array(1500), { radius: 2.5 })
  );
  const [redBloodCells] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 3.0 })
  );
  const [viruses] = useState(() =>
    random.inSphere(new Float32Array(900), { radius: 2.0 })
  );

  useFrame((_state, delta) => {
    // Animate white blood cells (slower, larger movement)
    if (whiteBloodCellsRef.current) {
      whiteBloodCellsRef.current.rotation.x += delta / 30;
      whiteBloodCellsRef.current.rotation.y += delta / 35;
    }
    
    // Animate red blood cells (medium speed)
    if (redBloodCellsRef.current) {
      redBloodCellsRef.current.rotation.x -= delta / 25;
      redBloodCellsRef.current.rotation.y -= delta / 30;
    }
    
    // Animate viruses (faster, more erratic)
    if (virusesRef.current) {
      virusesRef.current.rotation.x += delta / 15;
      virusesRef.current.rotation.y -= delta / 20;
      virusesRef.current.rotation.z += delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      {/* White Blood Cells - Larger, fewer, white/blue */}
      <Points
        ref={whiteBloodCellsRef}
        stride={3}
        positions={new Float32Array(whiteBloodCells)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#e0f2fe"
          size={0.008}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>

      {/* Red Blood Cells - Smaller, more numerous, red */}
      <Points
        ref={redBloodCellsRef}
        stride={3}
        positions={new Float32Array(redBloodCells)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#dc2626"
          size={0.004}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>

      {/* Viruses - Small, dark, menacing */}
      <Points
        ref={virusesRef}
        stride={3}
        positions={new Float32Array(viruses)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#7c2d12"
          size={0.006}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
};

// Blood Vessels Network Component
export const BloodVessels = () => {
  const groupRef = useRef<Group>(null);
  
  // Create blood vessel network paths
  const vesselPaths = useMemo(() => {
    const paths = [];
    const numVessels = 8;
    
    for (let i = 0; i < numVessels; i++) {
      const points = [];
      const segments = 20;
      const radius = 1.5 + Math.random() * 1.5;
      const height = 4;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const angle = (i / numVessels) * Math.PI * 2 + t * Math.PI * 0.5;
        const x = Math.cos(angle) * radius * (1 + Math.sin(t * Math.PI * 2) * 0.2);
        const y = (t - 0.5) * height + Math.sin(t * Math.PI * 4) * 0.3;
        const z = Math.sin(angle) * radius * (1 + Math.cos(t * Math.PI * 3) * 0.2);
        
        points.push(new THREE.Vector3(x, y, z));
      }
      paths.push(points);
    }
    return paths;
  }, []);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta / 40;
    }
  });

  return (
    <group ref={groupRef}>
      {vesselPaths.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={new THREE.Color().setHSL(0, 0.8, 0.3 + Math.random() * 0.2)}
          lineWidth={2}
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  );
};

// Main Medical Canvas Component
export const MedicalCanvas = () => (
  <div className="w-full h-full fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <BloodVessels />
        <BloodCells />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#dc2626" />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color="#1e40af" />
      </Suspense>
    </Canvas>
  </div>
);