"use client";

import { Suspense, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";

const Therapy3DScene = dynamic(
  () => import("./Therapy3DScene"),
  { ssr: false }
);

type TherapyVariant = "konfrontation" | "emdr" | "kip";

interface Therapy3DIconProps {
  variant: TherapyVariant;
  className?: string;
}

// Fallback SVG VR-Brille Icon
function VRGogglesSVG({ variant }: { variant: TherapyVariant }) {
  const colors = {
    konfrontation: "#7c3aed",
    emdr: "#06b6d4",
    kip: "#f59e0b",
  };
  const accentColor = colors[variant];

  return (
    <svg
      viewBox="0 0 64 40"
      className="w-full h-full p-3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hauptgehäuse */}
      <rect x="4" y="8" width="56" height="24" rx="6" fill="#1a1a2e" />
      {/* Vordere Blende */}
      <rect x="6" y="10" width="52" height="20" rx="4" fill="#0f0f1a" />
      {/* Linke Linse */}
      <circle cx="22" cy="20" r="7" fill={accentColor} opacity="0.7" />
      <circle cx="22" cy="20" r="8" stroke={accentColor} strokeWidth="1.5" fill="none" />
      {/* Rechte Linse */}
      <circle cx="42" cy="20" r="7" fill={accentColor} opacity="0.7" />
      <circle cx="42" cy="20" r="8" stroke={accentColor} strokeWidth="1.5" fill="none" />
      {/* Kopfbänder */}
      <rect x="0" y="14" width="6" height="12" rx="2" fill="#2a2a3e" />
      <rect x="58" y="14" width="6" height="12" rx="2" fill="#2a2a3e" />
      {/* LED */}
      <circle cx="52" cy="12" r="2" fill={accentColor} />
    </svg>
  );
}

function FallbackIcon({ variant }: { variant: TherapyVariant }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--secondary)]/5 to-[var(--tertiary)]/5">
      <VRGogglesSVG variant={variant} />
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--secondary)]/5 to-[var(--tertiary)]/5">
      <div className="w-8 h-8 border-2 border-[var(--secondary)]/30 border-t-[var(--secondary)] rounded-full animate-spin" />
    </div>
  );
}

// External store for WebGL support detection
let webglSupported: boolean | null = null;

function getWebGLSnapshot() {
  if (webglSupported === null) {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      webglSupported = !!gl;
    } catch {
      webglSupported = false;
    }
  }
  return webglSupported;
}

function getWebGLServerSnapshot() {
  return true;
}

function subscribeWebGL() {
  return () => {};
}

// External store for reduced motion preference
function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

// Use useSyncExternalStore for mounting detection
function subscribeMount() {
  return () => {};
}

function getMountSnapshot() {
  return true;
}

function getMountServerSnapshot() {
  return false;
}

function useIsMounted() {
  return useSyncExternalStore(subscribeMount, getMountSnapshot, getMountServerSnapshot);
}

interface Therapy3DIconBaseProps extends Therapy3DIconProps {
  size?: "default" | "mini";
}

export default function Therapy3DIcon({ variant, className = "", size = "default" }: Therapy3DIconBaseProps) {
  const isMounted = useIsMounted();
  const isWebGLSupported = useSyncExternalStore(subscribeWebGL, getWebGLSnapshot, getWebGLServerSnapshot);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, getReducedMotionServerSnapshot);

  // Größen-Konfiguration
  const sizeClasses = size === "mini"
    ? "w-16 h-16 rounded-xl"
    : "w-full h-24 rounded-2xl";
  const containerClasses = `${sizeClasses} overflow-hidden ${className}`;

  if (!isMounted) {
    return (
      <div className={containerClasses}>
        {size === "mini" ? <MiniLoadingSpinner /> : <LoadingSpinner />}
      </div>
    );
  }

  if (!isWebGLSupported) {
    return (
      <div className={containerClasses}>
        <FallbackIcon variant={variant} />
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <Suspense fallback={size === "mini" ? <MiniLoadingSpinner /> : <LoadingSpinner />}>
        <Therapy3DScene variant={variant} reducedMotion={reducedMotion} />
      </Suspense>
    </div>
  );
}

function MiniLoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--tertiary)]/10">
      <div className="w-5 h-5 border-2 border-[var(--secondary)]/30 border-t-[var(--secondary)] rounded-full animate-spin" />
    </div>
  );
}
