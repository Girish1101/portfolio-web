"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Users,
  ChevronDown,
  ExternalLink,
  Calendar,
  Sparkles,
} from "lucide-react";
import { resumeData } from "@/data/resume";
import { sectionReveal, MOTION_SPRING } from "@/lib/motion";

export default function TimelineSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const { experience, education, achievements, leadership } = resumeData;

  const milestones = [
    {
      period: "May 2026 – July 2026",
      role: "Software Engineering Intern (SDE)",
      entity: "Tech Mahindra",
      category: "Industrial Internship",
      badge: "Flagship SDE",
      icon: Briefcase,
      summary:
        "Architected an end-to-end AI observability platform and autonomous multi-agent RCA engine using FastAPI, Kafka, LangGraph, and Neo4j.",
      highlights: [
        "Automated log parsing and anomaly detection across distributed services via Kafka streaming pipelines.",
        "Engineered autonomous Root-Cause Analysis (RCA) engine with LangGraph state machine agents and Neo4j dependency graphs, cutting MTTR from 40+ minutes to seconds across 1.12M+ requests (87% confidence).",
        "Developed self-monitoring framework with 14 real-time health detectors for LLM gateways and vector indices.",
        "Built WireMock suite of 43 calibrated stubs from 1.5M+ logs, enabling CI testing under 400 req/s with a 94.6% pass rate over 160k+ checks without touching production services.",
      ],
      tags: ["LangGraph", "FastAPI", "Kafka", "Neo4j", "WireMock", "Docker"],
      verificationUrl: "https://www.linkedin.com/in/girish-sharma-sde/",
      verificationLabel: "LinkedIn Experience Verification",
    },
    {
      period: "Aug 2023 – Present",
      role: "B.Tech in Computer Science & Engineering",
      entity: "National Institute of Technology Karnataka (NITK), Surathkal",
      category: "Academic Degree",
      badge: "GPA: 7.70",
      icon: GraduationCap,
      summary:
        "Rigorous coursework in systems programming, operating systems, data structures, and database engines at one of India's premier national institutes.",
      highlights: [
        "Core focus on Operating Systems, Distributed Computation, DBMS, and Object-Oriented Design.",
        "Coursework: Algorithms, Discrete Math, Computer Architecture, Design of Digital Systems, Probability Theory & Statistics.",
        "Active contributor to student welfare and cultural bodies on campus.",
      ],
      tags: ["NITK Surathkal", "Computer Science", "Systems Programming", "GPA 7.70"],
      verificationUrl: "https://www.nitk.ac.in/",
      verificationLabel: "NITK Surathkal Official Portal",
    },
    {
      period: "Feb 2024 – Feb 2026",
      role: "Co-Convener",
      entity: "Yoga Club, NIT Karnataka",
      category: "Leadership & Community",
      badge: "150+ Members",
      icon: Users,
      summary:
        "Directed operational planning and wellness workshops, fostering holistic health, mindfulness, and discipline across the student community.",
      highlights: [
        "Managed weekly guided sessions, campus-wide workshops, and annual wellness initiatives.",
        "Fostered steady engagement for 150+ active participants across academic years.",
      ],
      tags: ["Campus Leadership", "150+ Active Members", "Wellness & Mindfulness"],
      verificationUrl: "https://www.nitk.ac.in/",
      verificationLabel: "NITK Student Affairs",
    },
    {
      period: "2023",
      role: "All India Rank 1883 in JEE Mains 2023",
      entity: "National Testing Agency (NTA)",
      category: "National Examination",
      badge: "Top 0.18% of 1M+ Aspirants",
      icon: Award,
      summary:
        "National competitive engineering entrance exam demonstrating advanced mathematical reasoning, algorithmic thinking, and problem-solving under pressure.",
      highlights: [
        "Ranked AIR 1883 out of >1,000,000 candidates nationwide in JEE Mains 2023.",
        "Qualified JEE Advanced 2023 with All India Rank 2616 for premier Indian Institutes of Technology.",
      ],
      tags: ["AIR 1883", "AIR 2616", "Top 0.18%", "National Merit"],
      verificationUrl: "https://jeemain.nta.nic.in/",
      verificationLabel: "National Testing Agency (NTA)",
    },
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="trajectory" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div {...sectionReveal} className="border-b border-border-subtle pb-8 mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
            02 / EXPERIENCE & EDUCATION
          </span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="font-mono text-xs text-text-muted">
            Internship, Degree &amp; Leadership
          </span>
        </div>
        <h2 className="font-sans font-bold font-fluid-section text-text-bright tracking-tight">
          Experience &amp; Education
        </h2>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          Industrial engineering at Tech Mahindra, undergraduate study at NITK Surathkal,
          national academic ranks, and campus leadership.
        </p>
      </motion.div>

      {/* Trajectory Accordion List */}
      <div className="space-y-4">
        {milestones.map((item, idx) => {
          const isExpanded = expandedIndex === idx;
          const Icon = item.icon;

          return (
            <motion.div
              key={idx}
              {...sectionReveal}
              className={`editorial-card rounded-xl border transition-all ${
                isExpanded ? "border-accent/40 bg-surface shadow-[0_4px_20px_rgba(2,12,27,0.7)]" : "border-border-subtle bg-surface/70 hover:border-border-strong"
              }`}
            >
              {/* Collapsed Header / Click Bar */}
              <button
                onClick={() => toggleExpand(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                aria-expanded={isExpanded}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-badge text-accent shrink-0 border border-border-subtle mt-1">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-accent font-semibold">
                        {item.period}
                      </span>
                      <span className="text-text-muted">&bull;</span>
                      <span className="px-2 py-0.5 rounded bg-badge text-[10px] font-mono text-text-secondary border border-border-subtle">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-text-bright">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary font-mono mt-0.5">
                      {item.entity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-text-muted mt-2">
                  <span className="hidden sm:inline font-mono text-xs">
                    {isExpanded ? "Collapse" : "Expand"}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={MOTION_SPRING}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </div>
              </button>

              {/* Expandable Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-border-subtle px-6 pb-6 pt-4 space-y-4"
                  >
                    <p className="text-xs sm:text-sm text-text-primary leading-relaxed font-sans">
                      {item.summary}
                    </p>

                    <div className="space-y-2">
                      <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                        Key Accomplishments
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent mt-1 shrink-0 text-base leading-none">&bull;</span>
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {item.verificationUrl && (
                      <div className="pt-2 border-t border-border-subtle">
                        <a
                          href={item.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{item.verificationLabel}</span>
                        </a>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-badge text-[11px] font-mono text-text-secondary border border-border-subtle"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
