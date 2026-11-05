"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Layers,
  ArrowUpRight,
  Shield,
  Activity,
  Cpu,
  Database,
  GitBranch,
  Terminal,
  CheckCircle2,
  FileCode2,
} from "lucide-react";
import { resumeData, Project } from "@/data/resume";
import ProjectCaseStudyModal from "@/components/ProjectCaseStudyModal";
import TiltFrame from "@/components/TiltFrame";
import { sectionReveal } from "@/lib/motion";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = resumeData.projects;

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div {...sectionReveal} className="border-b border-border-subtle pb-8 mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
            03 / PROJECTS
          </span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="font-mono text-xs text-text-muted">
            4 Engineering Case Studies
          </span>
        </div>
        <h2 className="font-sans font-bold font-fluid-section text-text-bright tracking-tight">
          Flagship Engineering Projects
        </h2>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          Multi-agent RCA pipelines, hybrid retrieval for meeting intelligence,
          vector-similarity facial matching, and high-concurrency auction systems.
        </p>
      </motion.div>

      {/* Case Studies List with Alternating Layouts */}
      <div className="space-y-24">
        {/* ========================================================================= */}
        {/* CASE STUDY 01: TECH MAHINDRA (Wide Full-Bleed Blueprint Layout) */}
        {/* ========================================================================= */}
        {(() => {
          const p = projects.find((item) => item.id === "tech-mahindra-rca") || projects[0];
          return (
            <motion.article
              key={p.id}
              {...sectionReveal}
              className="editorial-card rounded-2xl p-6 sm:p-10 border border-border-subtle relative overflow-hidden"
            >
              {/* Top metadata strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-4 mb-6 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-badge text-accent font-semibold">
                    PROJECT 01
                  </span>
                  <span className="text-text-muted">&bull;</span>
                  <span className="text-text-secondary">Tech Mahindra Industrial Work</span>
                </div>
                <div className="text-text-muted">{p.period}</div>
              </div>

              {/* Title & Pitch */}
              <div className="space-y-3 mb-8">
                <h3 className="font-sans font-bold text-2xl sm:text-4xl text-text-bright hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-accent font-sans font-medium text-lg sm:text-xl">
                  {p.tagline}
                </p>
              </div>

              {/* Architecture SVG Blueprint Diagram with 3D Tilt */}
              <TiltFrame maxAngle={6} className="mb-8">
                <div className="rounded-xl border border-border-subtle bg-subtle/50 p-4 sm:p-6 overflow-x-auto shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-text-muted flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-accent" />
                      System Pipeline &amp; Multi-Agent RCA Dataflow
                    </span>
                    <span className="font-mono text-[11px] text-text-muted">
                      Confidentiality: Generalized Architecture
                    </span>
                  </div>

                {/* SVG Pipeline */}
                <svg
                  viewBox="0 0 920 120"
                  className="w-full min-w-[700px] h-auto text-text-primary"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="10" y="25" width="130" height="70" rx="8" className="fill-surface stroke-border-strong" strokeWidth="1.5" />
                  <text x="75" y="55" textAnchor="middle" className="fill-text-primary text-[11px] font-mono font-medium">1.5M+ Logs</text>
                  <text x="75" y="73" textAnchor="middle" className="fill-text-muted text-[9px] font-mono">WireMock CI</text>

                  {/* Arrow 1 */}
                  <path d="M140 60 H180" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 3" />
                  <polygon points="180,60 174,56 174,64" fill="var(--accent)" />

                  {/* Step 2 */}
                  <rect x="185" y="25" width="140" height="70" rx="8" className="fill-surface stroke-border-strong" strokeWidth="1.5" />
                  <text x="255" y="55" textAnchor="middle" className="fill-text-primary text-[11px] font-mono font-medium">Apache Kafka</text>
                  <text x="255" y="73" textAnchor="middle" className="fill-accent text-[9px] font-mono">Real-time Stream</text>

                  {/* Arrow 2 */}
                  <path d="M325 60 H365" stroke="var(--accent)" strokeWidth="2" />
                  <polygon points="365,60 359,56 359,64" fill="var(--accent)" />

                  {/* Step 3 */}
                  <rect x="370" y="25" width="150" height="70" rx="8" className="fill-surface stroke-border-strong" strokeWidth="1.5" />
                  <text x="445" y="55" textAnchor="middle" className="fill-text-primary text-[11px] font-mono font-medium">FastAPI Telemetry</text>
                  <text x="445" y="73" textAnchor="middle" className="fill-text-muted text-[9px] font-mono">14 Health Detectors</text>

                  {/* Arrow 3 */}
                  <path d="M520 60 H560" stroke="var(--accent)" strokeWidth="2" />
                  <polygon points="560,60 554,56 554,64" fill="var(--accent)" />

                  {/* Step 4 */}
                  <rect x="565" y="25" width="160" height="70" rx="8" className="fill-surface stroke-border-strong" strokeWidth="1.5" />
                  <text x="645" y="55" textAnchor="middle" className="fill-text-primary text-[11px] font-mono font-medium">LangGraph + Neo4j</text>
                  <text x="645" y="73" textAnchor="middle" className="fill-accent text-[9px] font-mono">Causal Multi-Agent</text>

                  {/* Arrow 4 */}
                  <path d="M725 60 H765" stroke="var(--accent)" strokeWidth="2" />
                  <polygon points="765,60 759,56 759,64" fill="var(--accent)" />

                  {/* Step 5 */}
                  <rect x="770" y="25" width="140" height="70" rx="8" className="fill-surface stroke-accent" strokeWidth="2" />
                  <text x="840" y="55" textAnchor="middle" className="fill-accent text-[11px] font-mono font-bold">MTTR: &lt;10s</text>
                  <text x="840" y="73" textAnchor="middle" className="fill-text-primary text-[9px] font-mono">87% Confidence</text>
                </svg>
              </div>
            </TiltFrame>

              {/* 3-Column Detailed Breakdown: Problem, Decisions, Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs sm:text-sm">
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                    Problem &amp; Context
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {p.architecture.problem}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                    Key Decisions &amp; Trade-offs
                  </h4>
                  <ul className="text-text-secondary space-y-1.5 leading-relaxed">
                    {p.architecture.keyDecisions.map((kd, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-accent shrink-0">&bull;</span>
                        <span>{kd}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                    Verified Outcomes
                  </h4>
                  <div className="space-y-2">
                    {p.metrics.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-surface border border-border-subtle">
                        <div className="font-mono text-accent text-sm font-bold">{m.value}</div>
                        <div className="text-[11px] text-text-muted">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stack tags & Deep-dive Button */}
              <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <a
                      key={t}
                      href="#skills"
                      className="px-2.5 py-1 rounded bg-badge text-[11px] font-mono text-text-secondary hover:text-accent border border-border-subtle transition-colors"
                    >
                      {t}
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenModal(p)}
                  className="btn-brittany min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent font-mono text-xs font-medium transition-all duration-200"
                >
                  <Cpu className="w-3.5 h-3.5 text-accent" />
                  <span>Inspect Architecture Spec</span>
                </button>
              </div>
            </motion.article>
          );
        })()}

        {/* ========================================================================= */}
        {/* CASE STUDY 02: TRACEID (Inverted Split Layout: Left Visual, Right Content) */}
        {/* ========================================================================= */}
        {(() => {
          const p = projects.find((item) => item.id === "traceid") || projects[1];
          return (
            <motion.article
              key={p.id}
              {...sectionReveal}
              className="editorial-card rounded-2xl p-6 sm:p-10 border border-border-subtle"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 6 cols: Vector Pipeline & Mathematical Guarantee */}
                <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
                  <TiltFrame maxAngle={6}>
                    <div className="rounded-xl border border-border-subtle bg-subtle/50 p-6 space-y-4 shadow-xs">
                      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                        <span className="font-mono text-xs text-text-primary font-semibold flex items-center gap-1.5">
                          <Activity className="w-4 h-4 text-accent" />
                          512-Dim Vector Indexing &amp; Alignment
                        </span>
                        <span className="font-mono text-[10px] text-accent">&lt;120ms Latency</span>
                      </div>

                      {/* Inline SVG Pipeline Diagram for TraceID */}
                      <svg
                        viewBox="0 0 540 120"
                        className="w-full h-auto text-text-primary"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Step 1: Field Photograph */}
                        <rect x="5" y="32" width="95" height="56" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="52" y="56" textAnchor="middle" className="fill-text-primary text-[8.5px] font-mono font-medium">Field Photograph</text>
                        <text x="52" y="70" textAnchor="middle" className="fill-text-muted text-[7px] font-mono">Multi-Person Noise</text>

                        {/* Arrow 1 */}
                        <path d="M100 60 H125" stroke="var(--accent)" strokeWidth="1.5" />
                        <polygon points="125,60 119,56 119,64" fill="var(--accent)" />

                        {/* Step 2: MTCNN Alignment */}
                        <rect x="125" y="32" width="105" height="56" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="177" y="56" textAnchor="middle" className="fill-text-primary text-[8.5px] font-mono font-medium">MTCNN Alignment</text>
                        <text x="177" y="70" textAnchor="middle" className="fill-text-muted text-[7px] font-mono">5-Point Yaw/Pitch Matrix</text>

                        {/* Arrow 2 */}
                        <path d="M230 60 H255" stroke="var(--accent)" strokeWidth="1.5" />
                        <polygon points="255,60 249,56 249,64" fill="var(--accent)" />

                        {/* Step 3: FaceNet Embeddings */}
                        <rect x="255" y="32" width="115" height="56" rx="6" className="fill-surface stroke-accent" strokeWidth="1.5" />
                        <text x="312" y="56" textAnchor="middle" className="fill-accent text-[9px] font-mono font-bold">FaceNet 512-dim</text>
                        <text x="312" y="70" textAnchor="middle" className="fill-text-primary text-[7px] font-mono">Inception-ResNet-v1</text>

                        {/* Arrow 3 */}
                        <path d="M370 60 H395" stroke="var(--accent)" strokeWidth="1.5" />
                        <polygon points="395,60 389,56 389,64" fill="var(--accent)" />

                        {/* Step 4: L2 Norm & PostgreSQL */}
                        <rect x="395" y="32" width="140" height="56" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="465" y="56" textAnchor="middle" className="fill-text-primary text-[8.5px] font-mono font-medium">L2 Norm &bull; PostgreSQL</text>
                        <text x="465" y="70" textAnchor="middle" className="fill-accent text-[7.5px] font-mono">&lt;120ms Inverted Index</text>
                      </svg>

                      {/* Summary Cards */}
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="p-2.5 rounded-lg bg-surface border border-border-subtle">
                          <div className="text-text-muted text-[10px] uppercase">Landmarking &bull; Alignment</div>
                          <div className="font-semibold text-text-primary mt-0.5">MTCNN Multi-Box Face Alignment</div>
                          <div className="text-[11px] text-text-secondary mt-0.5">Extracts affine landmark matrix to cancel facial yaw/pitch variance.</div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-surface border border-accent/40 bg-accent-subtle/20">
                          <div className="text-accent text-[10px] uppercase font-bold">Vector Optimization &bull; &gt;96% Accuracy</div>
                          <div className="font-semibold text-text-primary mt-0.5">FaceNet 512-d &rarr; L2-Normalized Inner Product</div>
                          <div className="text-[11px] text-text-secondary mt-0.5">Converts cosine distance into fast Euclidean dot products in Neon PostgreSQL.</div>
                        </div>
                      </div>

                      {/* Ethics note */}
                      {p.architecture.ethicsNote && (
                        <div className="p-3 rounded-lg bg-surface border border-border-subtle text-[11px] text-text-muted font-sans flex items-start gap-2">
                          <Shield className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{p.architecture.ethicsNote}</span>
                        </div>
                      )}
                    </div>
                  </TiltFrame>

                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <a
                        key={t}
                        href="#skills"
                        className="px-2.5 py-1 rounded bg-badge text-[11px] font-mono text-text-secondary border border-border-subtle hover:border-accent hover:text-accent transition-colors"
                      >
                        {t}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right 6 cols: Context & Problem */}
                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-badge text-accent font-semibold">
                      PROJECT 02
                    </span>
                    <span className="text-text-muted">&bull;</span>
                    <span className="text-text-secondary">{p.category}</span>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-2xl sm:text-4xl text-text-bright hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-accent font-sans font-medium text-lg sm:text-xl mt-1">
                      {p.tagline}
                    </p>
                  </div>

                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {p.architecture.problem}
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm text-text-secondary">
                    {p.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {p.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-lg bg-surface border border-border-subtle">
                        <div className="font-mono text-sm sm:text-base font-bold text-accent">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-text-muted leading-tight mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-brittany min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent transition-all duration-200"
                        title="Live Demo"
                        aria-label={`${p.title} Live Demo`}
                      >
                        <ExternalLink className="w-4 h-4 text-accent" />
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-md bg-surface text-text-primary hover:border-accent hover:text-accent hover:bg-accent/5 border border-border-subtle transition-all duration-200 hover:-translate-y-0.5"
                        title="GitHub Repository"
                        aria-label={`${p.title} GitHub Repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => handleOpenModal(p)}
                      className="btn-brittany min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent text-xs font-mono font-medium transition-all duration-200"
                    >
                      <Cpu className="w-3.5 h-3.5 text-accent" />
                      <span>Inspect Microservices</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })()}

        {/* ========================================================================= */}
        {/* CASE STUDY 03: MEETLNK (Editorial Split Layout: Left Content, Right Graphic) */}
        {/* ========================================================================= */}
        {(() => {
          const p = projects.find((item) => item.id === "meetlnk") || projects[2];
          return (
            <motion.article
              key={p.id}
              {...sectionReveal}
              className="editorial-card rounded-2xl p-6 sm:p-10 border border-border-subtle"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 6 cols: Pitch, Decisions, Links */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-badge text-accent font-semibold">
                      PROJECT 03
                    </span>
                    <span className="text-text-muted">&bull;</span>
                    <span className="text-text-secondary">{p.category}</span>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-2xl sm:text-4xl text-text-bright hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-accent font-sans font-medium text-lg sm:text-xl mt-1">
                      {p.tagline}
                    </p>
                  </div>

                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {p.architecture.problem}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 text-xs sm:text-sm text-text-secondary">
                    {p.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {p.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-lg bg-surface border border-border-subtle">
                        <div className="font-mono text-sm sm:text-base font-bold text-accent">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-text-muted leading-tight mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-brittany min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent transition-all duration-200"
                        title="Live Demo"
                        aria-label={`${p.title} Live Demo`}
                      >
                        <ExternalLink className="w-4 h-4 text-accent" />
                      </a>
                    )}
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-md bg-surface text-text-primary hover:border-accent hover:text-accent hover:bg-accent/5 border border-border-subtle transition-all duration-200 hover:-translate-y-0.5"
                        title="GitHub Repository"
                        aria-label={`${p.title} GitHub Repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => handleOpenModal(p)}
                      className="btn-brittany min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent text-xs font-mono font-medium transition-all duration-200"
                    >
                      <FileCode2 className="w-3.5 h-3.5 text-accent" />
                      <span>Case Study Spec</span>
                    </button>
                  </div>
                </div>

                {/* Right 6 cols: RAG Hybrid Architecture Visual with 3D Tilt */}
                <div className="lg:col-span-6 space-y-4">
                  <TiltFrame maxAngle={6}>
                    <div className="rounded-xl border border-border-subtle bg-subtle/50 p-6 space-y-4 shadow-xs">
                      {/* Browser Window Frame Header */}
                      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                          <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                          <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                          <span className="ml-2 font-mono text-[10px] text-text-muted">meetlnk.internal/pipeline</span>
                        </div>
                        <span className="font-mono text-[10px] text-accent font-semibold">Token Cut: 42%</span>
                      </div>

                      {/* Inline SVG Pipeline Diagram */}
                      <svg
                        viewBox="0 0 540 125"
                        className="w-full h-auto text-text-primary"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Audio Ingest */}
                        <rect x="5" y="35" width="85" height="55" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="47" y="58" textAnchor="middle" className="fill-text-primary text-[9px] font-mono font-medium">Meeting Audio</text>
                        <text x="47" y="73" textAnchor="middle" className="fill-text-muted text-[7.5px] font-mono">Sliding Windows</text>

                        {/* Arrow to Dual Retrieval */}
                        <path d="M90 62 H115" stroke="var(--accent)" strokeWidth="1.5" />

                        {/* Dual Branch: BM25 Lexical */}
                        <path d="M115 62 V30 H130" stroke="var(--accent)" strokeWidth="1.2" />
                        <rect x="130" y="10" width="115" height="38" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="187" y="26" textAnchor="middle" className="fill-text-primary text-[8.5px] font-mono font-medium">BM25 Lexical</text>
                        <text x="187" y="38" textAnchor="middle" className="fill-text-muted text-[7px] font-mono">Exact Acronym Recall</text>

                        {/* Dual Branch: Pinecone Dense */}
                        <path d="M115 62 V95 H130" stroke="var(--accent)" strokeWidth="1.2" />
                        <rect x="130" y="75" width="115" height="38" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="187" y="91" textAnchor="middle" className="fill-accent text-[8.5px] font-mono font-medium">Pinecone Dense</text>
                        <text x="187" y="103" textAnchor="middle" className="fill-text-muted text-[7px] font-mono">1536-d Semantic</text>

                        {/* Confluence to Cross-Encoder */}
                        <path d="M245 29 H265 V62 H280" stroke="var(--accent)" strokeWidth="1.2" />
                        <path d="M245 94 H265 V62" stroke="var(--accent)" strokeWidth="1.2" />
                        <polygon points="280,62 274,58 274,66" fill="var(--accent)" />

                        {/* Cross-Encoder Filter */}
                        <rect x="280" y="35" width="125" height="55" rx="6" className="fill-surface stroke-accent" strokeWidth="1.5" />
                        <text x="342" y="58" textAnchor="middle" className="fill-accent text-[9px] font-mono font-bold">Cross-Encoder</text>
                        <text x="342" y="73" textAnchor="middle" className="fill-text-primary text-[7.5px] font-mono">Rerank: Top-15 &rarr; Top-5</text>

                        {/* Arrow to OpenAI Synthesis */}
                        <path d="M405 62 H430" stroke="var(--accent)" strokeWidth="1.5" />
                        <polygon points="430,62 424,58 424,66" fill="var(--accent)" />

                        {/* OpenAI Synthesis */}
                        <rect x="430" y="35" width="105" height="55" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="482" y="58" textAnchor="middle" className="fill-text-primary text-[8.5px] font-mono font-medium">OpenAI LLM</text>
                        <text x="482" y="73" textAnchor="middle" className="fill-accent text-[7.5px] font-mono">&gt;94% QA Relevancy</text>
                      </svg>

                      {/* Architectural Summary Cards */}
                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="p-2.5 rounded-lg bg-surface border border-border-subtle">
                          <div className="text-text-muted text-[10px] uppercase">Stage 01: Chunking</div>
                          <div className="font-semibold text-text-primary mt-0.5">Speaker-Turn Sliding Window</div>
                          <div className="text-[11px] text-text-secondary mt-0.5">Preserves cross-talk attribution without truncating sentences.</div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-surface border border-accent/40 bg-accent-subtle/20">
                          <div className="text-accent text-[10px] uppercase font-bold">Stage 02: Hybrid Retrieval &amp; Cross-Encoder</div>
                          <div className="font-semibold text-text-primary mt-0.5">BM25 + Pinecone &rarr; ms-marco Cross-Encoder</div>
                          <div className="text-[11px] text-text-secondary mt-0.5">Prunes 42% context token overhead before prompt synthesis.</div>
                        </div>
                      </div>
                    </div>
                  </TiltFrame>

                  {/* Stack pills linking to #skills */}
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <a
                        key={t}
                        href="#skills"
                        className="px-2.5 py-1 rounded bg-badge text-[11px] font-mono text-text-secondary border border-border-subtle hover:border-accent hover:text-accent transition-colors"
                      >
                        {t}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })()}

        {/* ========================================================================= */}
        {/* CASE STUDY 04: BIDBLITZ (High-Concurrency Terminal Ledger Card) */}
        {/* ========================================================================= */}
        {(() => {
          const p = projects.find((item) => item.id === "bidblitz") || projects[3];
          return (
            <motion.article
              key={p.id}
              {...sectionReveal}
              className="editorial-card rounded-2xl p-6 sm:p-10 border border-border-subtle space-y-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-badge text-accent font-semibold">
                    PROJECT 04
                  </span>
                  <span className="text-text-muted">&bull;</span>
                  <span className="text-text-secondary">{p.category}</span>
                </div>
                <div className="text-text-muted">{p.period}</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h3 className="font-sans font-bold text-2xl sm:text-4xl text-text-bright hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-accent font-sans font-medium text-lg sm:text-xl mt-1">
                      {p.tagline}
                    </p>
                  </div>

                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {p.architecture.problem}
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm text-text-secondary">
                    {p.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {p.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-lg bg-surface border border-border-subtle">
                        <div className="font-mono text-sm sm:text-base font-bold text-accent">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-text-muted leading-tight mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 5 cols: Transaction Lock Protocol with 3D Tilt */}
                <div className="lg:col-span-5">
                  <TiltFrame maxAngle={6}>
                    <div className="rounded-xl border border-border-subtle bg-subtle/50 p-5 font-mono text-xs space-y-3 shadow-xs">
                      <div className="flex items-center gap-2 text-text-primary font-bold border-b border-border-subtle pb-2">
                        <Database className="w-4 h-4 text-accent" />
                        <span>PostgreSQL Locking &amp; ACID Pipeline</span>
                      </div>

                      {/* Inline SVG Pipeline Diagram for BidBlitz */}
                      <svg
                        viewBox="0 0 540 120"
                        className="w-full h-auto text-text-primary"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Step 1: WebSocket Inbound */}
                        <rect x="5" y="32" width="95" height="56" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="52" y="56" textAnchor="middle" className="fill-text-primary text-[8.5px] font-mono font-medium">WebSocket Bid</text>
                        <text x="52" y="70" textAnchor="middle" className="fill-text-muted text-[7px] font-mono">1,000+ Concurrent</text>

                        {/* Arrow 1 */}
                        <path d="M100 60 H120" stroke="var(--accent)" strokeWidth="1.5" />
                        <polygon points="120,60 114,56 114,64" fill="var(--accent)" />

                        {/* Step 2: JWT & Bcrypt Gate */}
                        <rect x="120" y="32" width="105" height="56" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="172" y="56" textAnchor="middle" className="fill-text-primary text-[8.5px] font-mono font-medium">JWT &amp; Bcrypt</text>
                        <text x="172" y="70" textAnchor="middle" className="fill-text-muted text-[7px] font-mono">Salt Cost 10</text>

                        {/* Arrow 2 */}
                        <path d="M225 60 H245" stroke="var(--accent)" strokeWidth="1.5" />
                        <polygon points="245,60 239,56 239,64" fill="var(--accent)" />

                        {/* Step 3: PostgreSQL Serializable Row Lock */}
                        <rect x="245" y="32" width="165" height="56" rx="6" className="fill-surface stroke-accent" strokeWidth="1.5" />
                        <text x="327" y="56" textAnchor="middle" className="fill-accent text-[9px] font-mono font-bold">PostgreSQL Serializable</text>
                        <text x="327" y="70" textAnchor="middle" className="fill-text-primary text-[7px] font-mono">SELECT ... FOR UPDATE Lock</text>

                        {/* Arrow 3 */}
                        <path d="M410 60 H430" stroke="var(--accent)" strokeWidth="1.5" />
                        <polygon points="430,60 424,56 424,64" fill="var(--accent)" />

                        {/* Step 4: Broadcast */}
                        <rect x="430" y="32" width="105" height="56" rx="6" className="fill-surface stroke-border-strong" strokeWidth="1.2" />
                        <text x="482" y="56" textAnchor="middle" className="fill-text-primary text-[8.5px] font-mono font-medium">Room Broadcast</text>
                        <text x="482" y="70" textAnchor="middle" className="fill-accent text-[7.5px] font-mono">&lt;200ms Peer Sync</text>
                      </svg>

                      <div className="space-y-2 text-[11px] text-text-secondary">
                        <div className="p-2 rounded bg-surface border border-border-subtle">
                          <span className="text-accent font-bold">STEP 1:</span> Incoming WebSocket Bid
                        </div>
                        <div className="p-2 rounded bg-surface border border-border-subtle">
                          <span className="text-accent font-bold">STEP 2:</span> JWT &amp; Bcrypt Auth Salt (Factor 10)
                        </div>
                        <div className="p-2 rounded bg-surface border border-border-subtle">
                          <span className="text-accent font-bold">STEP 3:</span> <code>SELECT ... FOR UPDATE</code> Serializable Row Lock
                        </div>
                        <div className="p-2 rounded bg-surface border border-border-subtle">
                          <span className="text-accent font-bold">STEP 4:</span> Atomic Transaction Commit &amp; Broadcast
                        </div>
                      </div>

                      <div className="pt-2 text-[10px] text-text-muted border-t border-border-subtle">
                        Stress-tested: 1,000+ concurrent simulated requests, zero phantom bids.
                      </div>
                    </div>
                  </TiltFrame>
                </div>
              </div>

              <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <a
                      key={t}
                      href="#skills"
                      className="px-2.5 py-1 rounded bg-badge text-[11px] font-mono text-text-secondary border border-border-subtle hover:border-accent hover:text-accent transition-colors"
                    >
                      {t}
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brittany min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent transition-all duration-200"
                      title="Live Demo"
                      aria-label={`${p.title} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4 text-accent" />
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2.5 rounded-md bg-surface text-text-primary hover:border-accent hover:text-accent hover:bg-accent/5 border border-border-subtle transition-all duration-200 hover:-translate-y-0.5"
                      title="GitHub Repository"
                      aria-label={`${p.title} GitHub Repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => handleOpenModal(p)}
                    className="btn-brittany min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent text-xs font-mono font-medium transition-all duration-200"
                  >
                    <Terminal className="w-3.5 h-3.5 text-accent" />
                    <span>Inspect Transaction Engine</span>
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })()}
      </div>

      {/* Case Study Deep-Dive Drawer Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
