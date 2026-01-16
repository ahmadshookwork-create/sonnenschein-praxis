"use client";

import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import VRGoggles3D from "./VRGoggles3D";

type TherapyVariant = "konfrontation" | "emdr" | "kip";

interface Therapy3DSceneProps {
  variant: TherapyVariant;
  reducedMotion?: boolean;
}

export default function Therapy3DScene({ variant, reducedMotion = false }: Therapy3DSceneProps) {
  const canvasStyle = useMemo(() => ({
    width: "100%",
    height: "100%",
  }), []);

  return (
    <Canvas
      style={canvasStyle}
      camera={{ position: [0, 0.2, 4], fov: 35 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      {/* Beleuchtung */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-3, 2, -2]} intensity={0.4} />
      <spotLight
        position={[0, 5, 3]}
        angle={0.4}
        penumbra={0.5}
        intensity={0.6}
        castShadow
      />

      {/* VR Brille */}
      <VRGoggles3D variant={variant} reducedMotion={reducedMotion} />

      {/* Environment für realistische Reflexionen */}
      <Environment preset="studio" />

      {/* Schatten unter dem Objekt */}
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.4}
        scale={3}
        blur={2}
        far={1.5}
      />
    </Canvas>
  );
}
