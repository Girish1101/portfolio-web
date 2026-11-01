"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, Terminal, Compass, Sparkles, MapPin, CheckCircle } from "lucide-react";
import { resumeData } from "@/data/resume";
import { MOTION_DURATIONS, MOTION_EASE } from "@/lib/motion";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const { personal } = resumeData;
  const heroRef = useRef<HTMLElement>(null);

  // Parallax on hero image / identity card using useScroll + useTransform
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  // Magnetic hover effect on primary CTA
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const headlineLines = [
    "I turn messy logs,",
    "transcripts and photos",
    "into answers.",
  ];

  return (
    <section ref={heroRef} className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Haikei Architectural Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-no-repeat bg-bottom opacity-40 dark:opacity-20"
        style={{ backgroundImage: `url('/haikei/hero-backdrop.svg')`, backgroundSize: "cover" }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Headline & Narrative (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section Stamp */}
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
              00 / PROLOGUE
            </span>
            <span className="h-px w-8 bg-border-strong" />
            <span className="font-mono text-xs text-text-muted">
              NIT Karnataka &bull; Class of 2027
            </span>
          </div>

          {/* Staggered Line-by-Line Reveal Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-text-primary">
            {headlineLines.map((line, idx) => (
              <span key={idx} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: MOTION_DURATIONS.deliberate,
                    ease: MOTION_EASE,
                    delay: idx * 0.06,
                  }}
                  className="block relative"
                >
                  {line === "into answers." ? (
                    <span className="relative inline-block text-text-primary">
                      into{" "}
                      <span className="italic text-accent">answers.</span>
                      {/* Hand-drawn craft underline SVG */}
                      <svg
                        className="absolute -bottom-2 left-14 w-32 sm:w-44 text-accent/80 overflow-visible"
                        viewBox="0 0 160 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 10C35 4 95 3 158 11M30 13C75 8 115 7 145 11"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Sub-line Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION_DURATIONS.standard, delay: 0.28, ease: MOTION_EASE }}
            className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed"
          >
            Computer Science at <span className="font-medium text-text-primary">NITK Surathkal</span>.
            Recently engineered an AI observability platform at{" "}
            <span className="font-medium text-text-primary">Tech Mahindra</span>, cutting incident MTTR
            from 40+ minutes down to seconds through multi-agent causal graphs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION_DURATIONS.standard, delay: 0.36, ease: MOTION_EASE }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Magnetic CTA button */}
            <motion.a
              ref={buttonRef}
              href="#work"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md text-xs sm:text-sm font-mono font-medium text-white bg-accent hover:bg-accent-hover shadow-xs transition-colors"
            >
              <span>See Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </motion.a>

            {/* Secondary CTA */}
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md text-xs sm:text-sm font-mono font-medium text-text-primary border border-border-strong bg-surface hover:bg-subtle transition-colors"
            >
              <Download className="w-4 h-4 text-accent" />
              <span>Review Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Tactile Portrait & Technical Index Card (4 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: heroParallaxY }}
          transition={{ duration: MOTION_DURATIONS.deliberate, delay: 0.2, ease: MOTION_EASE }}
          className="lg:col-span-4"
        >
          <div className="editorial-card p-6 rounded-xl space-y-4 relative overflow-hidden">
            {/* Corner Drafting Index */}
            <div className="flex items-center justify-between border-b border-border-subtle pb-3 font-mono text-[11px] text-text-muted">
              <span className="flex items-center gap-1.5 text-text-primary font-semibold">
                <MapPin className="w-3.5 h-3.5 text-accent" /> Surathkal, IN
              </span>
              <span>13.0108° N, 74.7943° E</span>
            </div>

            {/* Tactile Identity / Duotone Frame */}
            <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-border-subtle bg-subtle flex items-center justify-center p-4">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full mx-auto border-2 border-accent/60 bg-surface flex items-center justify-center font-serif text-2xl font-bold text-accent shadow-xs">
                  GS
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-text-primary">
                    Girish Sharma
                  </h3>
                  <p className="font-mono text-xs text-text-muted">
                    B.Tech CS &bull; GPA: {personal.gpa || "7.70"}
                  </p>
                </div>
                <div className="pt-1">
                  <span className="inline-block px-2.5 py-1 rounded bg-badge text-[11px] font-mono text-text-secondary border border-border-subtle">
                    JEE Mains AIR 1883
                  </span>
                </div>
              </div>
            </div>

            {/* Authentic Currently Line */}
            <div className="pt-2 border-t border-border-subtle">
              <div className="flex items-start gap-2 text-xs text-text-secondary font-mono leading-relaxed">
                <span className="text-accent mt-0.5 shrink-0">&bull;</span>
                <span>
                  <strong className="text-text-primary font-semibold">Currently:</strong>{" "}
                  {personal.currently}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Meta Bar */}
      <div className="pt-12 mt-8 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-text-muted">
        <div className="flex items-center gap-4">
          <span>01 TECH MAHINDRA (AI RCA)</span>
          <span className="opacity-40">/</span>
          <span>02 MEETLNK (RAG)</span>
          <span className="opacity-40">/</span>
          <span>03 TRACEID (VISION)</span>
          <span className="opacity-40">/</span>
          <span>04 BIDBLITZ</span>
        </div>

        <div className="flex items-center gap-2 text-accent">
          <Terminal className="w-3.5 h-3.5" />
          <span>Press ⌘K for command palette</span>
        </div>
      </div>
    </section>
  );
}
