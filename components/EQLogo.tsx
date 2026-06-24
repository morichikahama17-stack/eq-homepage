"use client";
import Image from "next/image";

interface EQLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export default function EQLogo({ size = 120, animated = false, className = "" }: EQLogoProps) {
  return (
    <Image
      src="/eq-logo.png"
      alt="Essential Qualities"
      width={size}
      height={size}
      className={`${animated ? "animate-hex-float" : ""} ${className}`}
      style={{ filter: "drop-shadow(0 0 1px #fff) drop-shadow(0 0 1px #fff)" }}
      priority
    />
  );
}
