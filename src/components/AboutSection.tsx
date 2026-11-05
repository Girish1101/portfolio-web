"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Heart,
  Music,
  Play,
  Pause,
} from "lucide-react";
import { sectionReveal } from "@/lib/motion";

const BOX_BREATHING_PHASES = [
  {
    name: "Inhale",
    label: "Hold Full",
    stage: "1. Inhale (4s)",
    phaseTag: "Phase 1 / 4",
    cue: "Breathe in deeply through the nose",
    scale: 1.25,
  },
  {
    name: "Hold",
    label: "Hold Full",
    stage: "2. Hold (4s)",
    phaseTag: "Phase 2 / 4",
    cue: "Hold lungs gently full with stillness",
    scale: 1.20,
  },
  {
    name: "Exhale",
    label: "Hold Empty",
    stage: "3. Exhale (4s)",
    phaseTag: "Phase 3 / 4",
    cue: "Smooth, calm release through the mouth",
    scale: 0.85,
  },
  {
    name: "Hold",
    label: "Hold Empty",
    stage: "4. Hold (4s)",
    phaseTag: "Phase 4 / 4",
    cue: "Rest empty with stillness before next breath",
    scale: 0.90,
  },
] as const;

export default function AboutSection() {
  // Mindful Box Breathing — 4-phase: 4s inhale / 4s hold / 4s exhale / 4s hold (16s total cycle)
  const [breathActive, setBreathActive] = useState(false);
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    if (!breathActive) return;
    const interval = setInterval(() => {
      setTicks((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [breathActive]);

  const toggleCadence = () => {
    if (breathActive) {
      setBreathActive(false);
      setTicks(0);
    } else {
      setTicks(0);
      setBreathActive(true);
    }
  };

  // Derive phase and countdown mathematically so no phase is ever skipped
  const cycleSec = ticks % 16;
  const phaseIdx = Math.floor(cycleSec / 4); // 0 = Inhale, 1 = Hold, 2 = Exhale, 3 = Hold
  const secondsLeft = 4 - (cycleSec % 4); // 4, 3, 2, 1
  const activePhase = BOX_BREATHING_PHASES[phaseIdx];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div {...sectionReveal} className="border-b border-border-subtle pb-8 mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
            01 / ABOUT
          </span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="font-mono text-xs text-text-muted">
            Personal Philosophy &amp; Outside the Terminal
          </span>
        </div>
        <h2 className="font-sans font-bold font-fluid-section text-text-bright tracking-tight">
          Beyond the Terminal
        </h2>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          How I approach messy engineering problems, what I care about, and what keeps me grounded.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: First-Person Narrative (7 cols) */}
        <motion.div {...sectionReveal} className="lg:col-span-7 space-y-6">
          <div className="editorial-card rounded-2xl p-6 sm:p-8 border border-border-subtle space-y-4 text-sm sm:text-base leading-relaxed text-text-secondary">
            <p>
              I am a Computer Science student at{" "}
              <strong className="text-text-primary font-medium">NITK Surathkal</strong>, drawn to
              problems where the input is noisy and the system still needs to return a correct, fast
              answer. I do not look for clean toy datasets — I want logs with missing fields,
              transcripts with overlapping speakers, and databases under concurrent load.
            </p>

            <p>
              This past summer I interned at{" "}
              <strong className="text-text-primary font-medium">Tech Mahindra</strong>, building an
              AI observability platform that parses distributed system logs, detects anomalies, and
              traces root causes through a multi-agent knowledge graph. Outside of that, I have
              shipped <strong className="text-text-primary font-medium">Meetlnk</strong> — a
              retrieval-augmented generation system that surfaces timestamped action items from
              meeting transcripts;{" "}
              <strong className="text-text-primary font-medium">TraceID</strong> — a facial
              recognition platform to assist missing-person investigations; and{" "}
              <strong className="text-text-primary font-medium">BidBlitz</strong> — an auction
              backend built for correctness under high concurrency.
            </p>

            <p>
              Away from the keyboard, I co-convened the{" "}
              <strong className="text-text-primary font-medium">Yoga Club</strong> at NITK and
              coordinate cultural events with{" "}
              <strong className="text-text-primary font-medium">SPIC MACAY</strong>, an organization
              that promotes India&apos;s classical arts heritage through live performances and
              workshops on campus.
            </p>
          </div>

          {/* SPIC MACAY Cultural Heritage Card */}
          <div className="editorial-card rounded-2xl p-6 border border-border-subtle space-y-3">
            <div className="flex items-center gap-2 text-text-primary font-mono text-xs font-semibold">
              <Music className="w-4 h-4 text-accent" />
              <span>SPIC MACAY NITK Chapter &bull; Cultural Heritage</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Event Planner &amp; Publicity Coordinator organizing Indian classical music, vocal
              traditions, and instrumental concerts on campus. Connecting the discipline of classical
              arts with the rigor of engineering problem-solving.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-accent pt-1">
              <span>NITK Surathkal Chapter &bull; March 2024 – Present</span>
            </div>
          </div>
          {/* Note: photo.webp canonically hosted in Hero right card per section plan */}
        </motion.div>

        {/* Right Column: Mindful Cadence Widget (5 cols) */}
        <motion.div {...sectionReveal} className="lg:col-span-5 space-y-6">
          {/* Mindful Box-Breathing Widget */}
          <div className="editorial-card rounded-2xl p-6 border border-border-subtle space-y-4">
            <div className="flex items-center justify-between border-b border-border-subtle pb-3">
              <span className="font-mono text-xs text-text-primary font-semibold flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent" />
                Mindful Cadence &bull; Box Breathing
              </span>
              <span className="font-mono text-[10px] text-accent font-medium">Yoga Club Co-convener</span>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed">
              A 4-phase box breathing cadence practiced in Yoga Club sessions to reset focus during
              complex debugging. 4s inhale → 4s hold → 4s exhale → 4s hold.
            </p>

            {/* Visual Breathing Ring & Phase Steps */}
            <div className="py-4 flex flex-col items-center justify-center space-y-3">
              {/* 4-Step Phase Indicator Pills */}
              <div className="grid grid-cols-4 gap-1.5 w-full max-w-sm font-mono text-[10px] text-center">
                {BOX_BREATHING_PHASES.map((phase, idx) => {
                  const isCurrent = breathActive && phaseIdx === idx;
                  return (
                    <div
                      key={idx}
                      className={`py-1.5 px-1 rounded-md border transition-all duration-300 ${
                        isCurrent
                          ? "border-accent bg-accent/15 text-accent font-bold shadow-[0_0_10px_rgba(100,255,218,0.25)] scale-102"
                          : "border-border-subtle bg-surface/60 text-text-muted opacity-70"
                      }`}
                    >
                      <div className="truncate">{phase.name}</div>
                      <div className="text-[9px] opacity-80">4s</div>
                    </div>
                  );
                })}
              </div>

              <motion.div
                animate={{
                  scale: breathActive ? activePhase.scale : 1,
                  borderColor: breathActive ? "var(--accent)" : "var(--border-strong)",
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-32 h-32 rounded-full border-2 border-border-strong bg-subtle/50 flex flex-col items-center justify-center text-center p-2 shadow-inner transition-colors duration-500"
              >
                <span className="font-mono text-[10px] text-accent/80 tracking-wider uppercase">
                  {breathActive ? activePhase.phaseTag : "Box Cadence"}
                </span>
                <span className="font-sans font-bold text-base text-text-bright my-0.5">
                  {breathActive ? activePhase.name : "Calm"}
                </span>
                <span className="font-mono text-xs text-accent font-bold">
                  {breathActive ? `${secondsLeft}s remaining` : "4-4-4-4"}
                </span>
              </motion.div>

              <p className="font-mono text-[11px] text-text-secondary h-4 text-center">
                {breathActive ? activePhase.cue : "Click to begin 4-4-4-4 cadence"}
              </p>

              <button
                onClick={toggleCadence}
                className="btn-brittany min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent font-mono text-xs font-medium transition-all duration-200"
                aria-label={breathActive ? "Pause box breathing cadence" : "Start box breathing cadence"}
              >
                {breathActive ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-accent" />
                    <span>Pause Cadence</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-accent" />
                    <span>Start 4-Phase Cadence</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-[11px] text-text-muted font-mono text-center pt-2 border-t border-border-subtle flex items-center justify-center gap-2">
              <span className="text-accent font-semibold">1. Inhale 4s</span>
              <span>&bull;</span>
              <span className="text-accent font-semibold">2. Hold 4s</span>
              <span>&bull;</span>
              <span className="text-accent font-semibold">3. Exhale 4s</span>
              <span>&bull;</span>
              <span className="text-accent font-semibold">4. Hold 4s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
