"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";

function Spike({ position, rotation, length = 1.35 }) {
  return (
    <mesh position={position} rotation={rotation}>
      <coneGeometry args={[0.075, length, 4]} />
      <meshStandardMaterial color="#b59c5f" metalness={1} roughness={0.22} />
    </mesh>
  );
}

function CompassMesh() {
  const group = useRef(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.18 + state.pointer.x * 0.7;
    group.current.rotation.x = 0.28 + state.pointer.y * 0.35;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={group}>
        <mesh>
          <torusGeometry args={[1.22, 0.03, 16, 96]} />
          <meshStandardMaterial color="#c4c5c8" metalness={1} roughness={0.18} />
        </mesh>
        <mesh>
          <torusGeometry args={[1.02, 0.018, 12, 80]} />
          <meshStandardMaterial color="#b59c5f" metalness={1} roughness={0.2} />
        </mesh>
        <Spike position={[0, 0.78, 0]} rotation={[0, 0, 0]} length={1.5} />
        <Spike position={[0, -0.78, 0]} rotation={[Math.PI, 0, 0]} length={1.5} />
        <Spike position={[0.78, 0, 0]} rotation={[0, 0, -Math.PI / 2]} />
        <Spike position={[-0.78, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh>
          <cylinderGeometry args={[0.58, 0.58, 0.14, 48]} />
          <meshStandardMaterial color="#b59c5f" metalness={1} roughness={0.16} />
        </mesh>
        <mesh position={[0, 0.09, 0]}>
          <cylinderGeometry args={[0.46, 0.46, 0.04, 48]} />
          <meshStandardMaterial color="#6c2b1e" metalness={0.35} roughness={0.45} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Compass3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 4.4], fov: 38 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 5]} intensity={2} color="#efeade" />
        <directionalLight position={[-4, -2, -3]} intensity={0.7} color="#b59c5f" />
        <CompassMesh />
        <Environment preset="warehouse" />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-3xl text-ivory sm:text-4xl">41°N</p>
        </div>
      </div>
    </div>
  );
}
