"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Heart,
  Sparkles,
  MapPin,
  Clock,
  BookOpen,
  Music,
  Compass,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";
import { resumeData } from "@/data/resume";
import { sectionReveal } from "@/lib/motion";

export default function AboutSection() {
  const { personal } = resumeData;

  // Personality Easter Egg: Mindful Box Breathing Micro-Interaction (Yoga Club Co-convener tribute)
  const [breathActive, setBreathActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Hold" | "Exhale" | "Pause">("Inhale");
  const [breathSeconds, setBreathSeconds] = useState(4);

  useEffect(() => {
    if (!breathActive) return;

    const interval = setInterval(() => {
      setBreathSeconds((prev) => {
        if (prev > 1) return prev - 1;

        // Advance phase
        setBreathPhase((current) => {
          if (current === "Inhale") return "Hold";
          if (current === "Hold") return "Exhale";
          if (current === "Exhale") return "Pause";
          return "Inhale";
        });
        return 4;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [breathActive]);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div {...sectionReveal} className="border-b border-border-subtle pb-8 mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
            04 / ABOUT
          </span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="font-mono text-xs text-text-muted">
            Personal Philosophy &amp; Outside the Terminal
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-text-primary tracking-tight font-normal">
          Beyond the Terminal
        </h2>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          How I approach messy engineering problems, what I care about, and what keeps me centered.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: First-Person Narrative (7 cols) */}
        <motion.div {...sectionReveal} className="lg:col-span-7 space-y-6">
          <div className="editorial-card rounded-2xl p-6 sm:p-8 border border-border-subtle space-y-4 text-sm sm:text-base leading-relaxed text-text-secondary">
            <p>
              I&apos;m a Computer Science student at <strong className="text-text-primary font-medium">NITK Surathkal</strong> who
              gravitates toward problems where the data is unstructured or high-velocity, and the answer has to be
              returned in milliseconds.
            </p>

            <p>
              This past summer at <strong className="text-text-primary font-medium">Tech Mahindra</strong>, I designed an
              AI-driven observability platform that parses millions of logs, models microservice topology in a
              knowledge graph, and autonomous agents isolate root causes in seconds instead of 40-minute manual war rooms.
            </p>

            <p>
              Outside industrial internships, I like shipping software that addresses real human problems: matching
              field photographs against missing-person dossiers with vector embeddings (<span className="text-text-primary font-mono text-xs">TraceID</span>),
              pruning noisy conversation transcripts with cross-encoders (<span className="text-text-primary font-mono text-xs">Meetlnk</span>),
              and testing serialized database locking under high-velocity concurrency (<span className="text-text-primary font-mono text-xs">BidBlitz</span>).
            </p>

            <p>
              When I step away from code, I find balance through yoga and classical arts. I co-convened the college
              <strong className="text-text-primary font-medium"> Yoga Club</strong> organizing weekly practice for 150+ members,
              and coordinate cultural performances with <strong className="text-text-primary font-medium">SPIC MACAY</strong> celebrating
              India&apos;s classical heritage.
            </p>
          </div>

          {/* Currently Learning / Honest Status Line */}
          <div className="p-4 rounded-xl border border-border-subtle bg-surface/60 font-mono text-xs space-y-1.5">
            <div className="text-text-muted uppercase text-[10px] tracking-wider">
              Intellectual Curiosity &bull; Autumn 2026
            </div>
            <p className="text-text-primary leading-relaxed">
              <span className="text-accent font-semibold">&bull; Currently Building:</span>{" "}
              {personal.currently}
            </p>
          </div>
        </motion.div>

        {/* Right Column: Tactile Personality Cards & Easter Egg (5 cols) */}
        <motion.div {...sectionReveal} className="lg:col-span-5 space-y-6">
          {/* Personality Easter Egg Card: Mindful Cadence Widget */}
          <div className="editorial-card rounded-2xl p-6 border border-border-subtle space-y-4">
            <div className="flex items-center justify-between border-b border-border-subtle pb-3">
              <span className="font-mono text-xs text-text-primary font-semibold flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent" />
                Mindful Cadence &bull; Yoga Micro-Pause
              </span>
              <span className="font-mono text-[10px] text-text-muted">Interactive</span>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed">
              A brief box-breathing exercise used in our campus Yoga Club sessions to restore focus between complex debugging sessions.
            </p>

            {/* Visual Breathing Ring */}
            <div className="py-4 flex flex-col items-center justify-center space-y-3">
              <motion.div
                animate={{
                  scale: breathActive
                    ? breathPhase === "Inhale"
                      ? 1.25
                      : breathPhase === "Exhale"
                      ? 0.85
                      : 1.15
                    : 1,
                  borderColor: breathActive ? "var(--accent)" : "var(--border-strong)",
                }}
                transition={{ duration: 4, ease: "easeInOut" }}
                className="w-28 h-28 rounded-full border-2 border-border-strong bg-subtle/50 flex flex-col items-center justify-center text-center p-2 shadow-inner"
              >
                <span className="font-serif text-sm font-medium text-text-primary">
                  {breathActive ? breathPhase : "Calm"}
                </span>
                <span className="font-mono text-xs text-accent font-bold mt-0.5">
                  {breathActive ? `${breathSeconds}s` : "4-4-4-4"}
                </span>
              </motion.div>

              <button
                onClick={() => setBreathActive(!breathActive)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface text-text-primary hover:bg-subtle border border-border-strong font-mono text-xs transition-colors"
              >
                {breathActive ? <Pause className="w-3.5 h-3.5 text-accent" /> : <Play className="w-3.5 h-3.5 text-accent" />}
                <span>{breathActive ? "Pause Cadence" : "Start 1-Min Pause"}</span>
              </button>
            </div>

            <div className="text-[11px] text-text-muted font-mono text-center pt-2 border-t border-border-subtle">
              Inhale 4s &bull; Hold 4s &bull; Exhale 4s &bull; Hold 4s
            </div>
          </div>

          {/* SPIC MACAY & Cultural Heritage Note */}
          <div className="editorial-card rounded-2xl p-6 border border-border-subtle space-y-3">
            <div className="flex items-center gap-2 text-text-primary font-mono text-xs font-semibold">
              <Music className="w-4 h-4 text-accent" />
              <span>SPIC MACAY NITK Chapter</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Promoting Indian classical arts, vocal traditions, and instrumental mastery. Connecting classical discipline with the precision of systems architecture.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-accent pt-1">
              <span>NITK Surathkal Cultural Outreach</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
