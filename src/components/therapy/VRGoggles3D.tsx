"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Cylinder } from "@react-three/drei";
import * as THREE from "three";

type TherapyVariant = "konfrontation" | "emdr" | "kip";

interface VRGogglesProps {
  variant: TherapyVariant;
  reducedMotion: boolean;
}

// Farben pro Variante (Akzentfarben)
const variantColors = {
  konfrontation: "#7c3aed", // Violet
  emdr: "#06b6d4",          // Cyan
  kip: "#f59e0b",           // Amber
} as const;

export default function VRGoggles3D({ variant, reducedMotion }: VRGogglesProps) {
  const groupRef = useRef<THREE.Group>(null);
  const accentColor = variantColors[variant];

  useFrame((state) => {
    if (groupRef.current && !reducedMotion) {
      // Sanftes Schweben
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.05;
      // Langsame Y-Rotation
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
      // Leichtes Kippen
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05 - 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[-0.1, 0, 0]}>
      {/* Hauptgehäuse der VR-Brille */}
      <RoundedBox
        args={[1.8, 0.9, 0.7]}
        radius={0.15}
        smoothness={8}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.6}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Vordere Blende (leicht größer, abgerundet) */}
      <RoundedBox
        args={[1.9, 0.95, 0.15]}
        radius={0.1}
        smoothness={6}
        position={[0, 0, 0.35]}
      >
        <meshStandardMaterial
          color="#0f0f1a"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Linke Linse */}
      <Cylinder args={[0.32, 0.32, 0.08, 32]} position={[-0.42, 0, 0.38]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhysicalMaterial
          color={accentColor}
          metalness={0.1}
          roughness={0.05}
          transmission={0.6}
          thickness={0.5}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Cylinder>

      {/* Rechte Linse */}
      <Cylinder args={[0.32, 0.32, 0.08, 32]} position={[0.42, 0, 0.38]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhysicalMaterial
          color={accentColor}
          metalness={0.1}
          roughness={0.05}
          transmission={0.6}
          thickness={0.5}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Cylinder>

      {/* Linsen-Ringe (Akzent) */}
      <mesh position={[-0.42, 0, 0.39]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.03, 16, 32]} />
        <meshStandardMaterial color={accentColor} metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.42, 0, 0.39]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.03, 16, 32]} />
        <meshStandardMaterial color={accentColor} metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Kopfband - Linke Seite */}
      <RoundedBox
        args={[0.15, 0.35, 0.6]}
        radius={0.05}
        smoothness={4}
        position={[-0.95, 0, -0.05]}
      >
        <meshStandardMaterial color="#2a2a3e" metalness={0.4} roughness={0.5} />
      </RoundedBox>

      {/* Kopfband - Rechte Seite */}
      <RoundedBox
        args={[0.15, 0.35, 0.6]}
        radius={0.05}
        smoothness={4}
        position={[0.95, 0, -0.05]}
      >
        <meshStandardMaterial color="#2a2a3e" metalness={0.4} roughness={0.5} />
      </RoundedBox>

      {/* Elastisches Band (stilisiert als gebogene Box) */}
      <mesh position={[-1.15, 0, -0.3]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.5, 0.18, 0.08]} />
        <meshStandardMaterial color="#3d3d5c" metalness={0.2} roughness={0.7} />
      </mesh>
      <mesh position={[1.15, 0, -0.3]} rotation={[0, -0.3, 0]}>
        <boxGeometry args={[0.5, 0.18, 0.08]} />
        <meshStandardMaterial color="#3d3d5c" metalness={0.2} roughness={0.7} />
      </mesh>

      {/* Polsterung (Gesichtsauflage) */}
      <RoundedBox
        args={[1.7, 0.75, 0.2]}
        radius={0.1}
        smoothness={4}
        position={[0, 0, -0.4]}
      >
        <meshStandardMaterial color="#1f1f2e" metalness={0.1} roughness={0.9} />
      </RoundedBox>

      {/* Kleine LED-Leuchte (Akzent) - als Statusanzeige */}
      <mesh position={[0.7, 0.38, 0.3]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={reducedMotion ? 0.5 : 1}
        />
      </mesh>

      {/* Logo-Bereich (dezenter Streifen als Branding) */}
      <mesh position={[0, 0.42, 0.25]}>
        <boxGeometry args={[0.8, 0.04, 0.02]} />
        <meshStandardMaterial color={accentColor} metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}
