"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { ArrowDown, ArrowUpRight, Terminal, Compass, Sparkles, MapPin, CheckCircle } from "lucide-react";
import { resumeData } from "@/data/resume";
import { MOTION_DURATIONS, MOTION_EASE } from "@/lib/motion";
import ParticleMesh from "@/components/ParticleMesh";

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

      {/* Interactive Constellation Particle Mesh */}
      <ParticleMesh />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Headline & Narrative (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section Stamp */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
              00 / PROLOGUE
            </span>
          </div>

          {/* Staggered Line-by-Line Reveal Headline */}
          <h1 className="font-sans font-bold font-fluid-hero tracking-tight text-text-bright">
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
                    <span className="relative inline-block text-text-bright">
                      into{" "}
                      <span className="text-accent">answers.</span>
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
              className="btn-brittany min-h-[44px] inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md text-xs sm:text-sm font-mono font-medium border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent transition-all duration-200"
            >
              <span>See Selected Work</span>
              <ArrowDown className="w-4 h-4 text-accent" />
            </motion.a>

            {/* Secondary CTA */}
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
          <div className="editorial-card p-6 rounded-2xl space-y-4 relative overflow-hidden">
            {/* Location Header */}
            <div className="flex items-center gap-1.5 border-b border-border-subtle pb-3 font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span className="text-text-primary font-semibold">Surathkal, IN</span>
            </div>

            {/* Tactile Identity / Duotone Real Photo Frame */}
            <div className="relative aspect-square w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden border border-border-strong/40 bg-surface shadow-md group">
              <Image
                src="/photo.webp"
                alt="Girish Sharma"
                width={320}
                height={320}
                priority
                className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.99] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft tactile subtle grain / duotone vignette overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl bg-radial from-transparent via-transparent to-black/10 dark:to-black/35"
                aria-hidden="true"
              />
              {/* Floating micro-badge overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-surface/90 backdrop-blur-md border border-border-subtle/80 text-[11px] font-mono">
                <span className="font-semibold text-text-primary">Girish Sharma</span>
                <span className="text-accent font-medium">NITK &bull; 7.70 GPA</span>
              </div>
            </div>

            {/* JEE Rank Badge */}
            <div className="flex items-center justify-center pt-1">
              <span className="inline-block px-2.5 py-1 rounded-md bg-badge text-[11px] font-mono text-accent font-medium border border-border-subtle">
                JEE Mains AIR 1883 &bull; Top 0.18%
              </span>
            </div>

            {/* Currently Line */}
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
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span>01 TECH MAHINDRA (AI RCA)</span>
          <span className="opacity-40">/</span>
          <span>02 TRACEID (VISION)</span>
          <span className="opacity-40">/</span>
          <span>03 MEETLNK (RAG)</span>
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
