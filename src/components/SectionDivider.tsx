import React from "react";

interface SectionDividerProps {
  variant: "wave" | "steps" | "peaks";
  flipped?: "x" | "y" | "none";
  className?: string;
}

/**
 * Editorial Haikei Section Dividers
 * Inlined SVGs matching theme tokens and flipped via CSS transforms
 */
export default function SectionDivider({
  variant,
  flipped = "none",
  className = "",
}: SectionDividerProps) {
  const getTransformClass = () => {
    if (flipped === "x") return "-scale-x-100";
    if (flipped === "y") return "rotate-180";
    return "";
  };

  return (
    <div
      className={`w-full max-w-6xl mx-auto px-4 overflow-hidden pointer-events-none select-none opacity-40 dark:opacity-20 -my-6 transition-opacity ${className}`}
      aria-hidden="true"
    >
      <div className={`transform ${getTransformClass()}`}>
        {variant === "wave" && (
          <svg
            viewBox="0 0 1200 40"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-7 text-border-strong"
          >
            <path
              d="M0,20 C300,40 600,0 900,30 C1050,40 1150,15 1200,20 L1200,40 L0,40 Z"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <path
              d="M0,20 C300,40 600,0 900,30 C1050,40 1150,15 1200,20"
              stroke="currentColor"
              strokeOpacity="0.6"
              strokeWidth="1"
            />
          </svg>
        )}

        {variant === "steps" && (
          <svg
            viewBox="0 0 1200 60"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-7 text-border-strong"
          >
            <path
              d="M0 0 H300 V30 H600 V15 H900 V45 H1200 V60 H0 Z"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <line
              x1="0"
              y1="59"
              x2="1200"
              y2="59"
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        )}

        {variant === "peaks" && (
          <svg
            viewBox="0 0 1200 40"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-7 text-border-strong"
          >
            <path
              d="M0 40 L200 15 L400 35 L600 8 L800 30 L1000 12 L1200 40 Z"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <polyline
              points="0,40 200,15 400,35 600,8 800,30 1000,12 1200,40"
              stroke="currentColor"
              strokeOpacity="0.6"
              strokeWidth="1"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
