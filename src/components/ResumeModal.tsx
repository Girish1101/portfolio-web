"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  FileText,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import { resumeData } from "@/data/resume";
import { MOTION_SPRING } from "@/lib/motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"text" | "pdf">("text");
  const [copied, setCopied] = useState(false);
  const { personal, education, experience, projects, groupedSkills, achievements, leadership } = resumeData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={MOTION_SPRING}
          className="relative w-full max-w-4xl max-h-[92vh] bg-surface border border-border-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden text-text-primary z-10 my-auto"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-border-subtle bg-surface-elevated">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-md bg-badge text-accent border border-border-subtle">
                <FileText className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-medium text-text-primary">
                  {personal.name} &mdash; Official Resume 2026
                </h3>
                <p className="font-mono text-xs text-text-muted">
                  B.Tech CS @ NITK Surathkal &bull; Verified Academic &amp; SDE Record
                </p>
              </div>
            </div>

            {/* Actions: Tabs, Download, Print, Close */}
            <div className="flex items-center gap-2">
              <div className="flex rounded-md border border-border-subtle bg-subtle p-0.5 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("text")}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === "text"
                      ? "bg-surface text-text-primary font-medium shadow-xs"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  ATS View
                </button>
                <button
                  onClick={() => setActiveTab("pdf")}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === "pdf"
                      ? "bg-surface text-text-primary font-medium shadow-xs"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  PDF Document
                </button>
              </div>

              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border-subtle bg-surface hover:bg-subtle text-xs font-mono transition-colors"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5 text-text-secondary" />
                <span>Print</span>
              </button>

              <a
                href="/Girish_Sharma_Resume_2026.pdf"
                download="Girish_Sharma_Resume_2026.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-accent hover:bg-accent-hover text-white text-xs font-mono font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-subtle transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 text-xs sm:text-sm font-sans">
            {activeTab === "pdf" ? (
              <div className="w-full h-[650px] rounded-lg border border-border-subtle overflow-hidden bg-subtle flex flex-col items-center justify-center">
                <iframe
                  src="/Girish_Sharma_Resume_2026.pdf#toolbar=1"
                  className="w-full h-full border-none"
                  title="Girish Sharma Resume PDF"
                />
              </div>
            ) : (
              /* ATS Formatted Clean Text Document */
              <div className="max-w-3xl mx-auto space-y-6 text-text-secondary leading-relaxed bg-surface p-6 sm:p-8 rounded-xl border border-border-subtle">
                {/* Header Information */}
                <div className="text-center border-b border-border-subtle pb-4 space-y-1">
                  <h1 className="font-serif text-2xl sm:text-3xl font-medium text-text-primary">
                    {personal.name}
                  </h1>
                  <p className="font-mono text-xs text-text-muted">
                    {personal.email} &bull; +91 {personal.phone} &bull; Surathkal, Karnataka, India
                  </p>
                  <p className="font-mono text-[11px] text-accent">
                    <a href={personal.socials.github} target="_blank" rel="noreferrer" className="hover:underline">
                      github.com/Girish1101
                    </a>
                    {" &bull; "}
                    <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                      linkedin.com/in/girish-sharma-sde
                    </a>
                  </p>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary border-b border-border-subtle pb-1">
                    Education
                  </h2>
                  <div className="flex justify-between items-baseline font-mono text-xs text-text-primary font-medium">
                    <span>{education.institution}</span>
                    <span className="text-text-muted">{education.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs">
                    <span>{education.degree} in {education.field}</span>
                    <span className="font-mono text-accent font-semibold">GPA: {education.gpa}</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-3">
                  <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary border-b border-border-subtle pb-1">
                    Experience
                  </h2>
                  {experience.map((exp, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-baseline font-mono text-xs text-text-primary font-medium">
                        <span>{exp.role} &mdash; {exp.company}</span>
                        <span className="text-text-muted">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 text-xs list-disc list-inside">
                        {exp.bulletPoints.map((bp, i) => (
                          <li key={i}>{bp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Flagship Projects */}
                <div className="space-y-3">
                  <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary border-b border-border-subtle pb-1">
                    Projects
                  </h2>
                  {projects.map((proj) => (
                    <div key={proj.id} className="space-y-1.5">
                      <div className="flex justify-between items-baseline font-mono text-xs text-text-primary font-medium">
                        <span>{proj.title} &mdash; {proj.category}</span>
                        <span className="text-text-muted">{proj.period}</span>
                      </div>
                      <ul className="space-y-1 text-xs list-disc list-inside">
                        {proj.bulletPoints.map((bp, i) => (
                          <li key={i}>{bp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Technical Skills */}
                <div className="space-y-2">
                  <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary border-b border-border-subtle pb-1">
                    Technical Skills &amp; Coursework
                  </h2>
                  <div className="text-xs space-y-1 font-mono">
                    <p><strong className="text-text-primary">Languages:</strong> Python, JavaScript, TypeScript, C, C++, HTML5/CSS3, SQL</p>
                    <p><strong className="text-text-primary">Frameworks &amp; Tools:</strong> Next.js, FastAPI, Flask, Node.js, Express, LangGraph, Kafka, Neo4j, Docker, WireMock, FaceNet, MTCNN</p>
                    <p><strong className="text-text-primary">Databases:</strong> PostgreSQL, Pinecone, Neo4j, OpenSearch, MongoDB, MySQL</p>
                  </div>
                </div>

                {/* Achievements & Leadership */}
                <div className="space-y-2">
                  <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary border-b border-border-subtle pb-1">
                    Achievements &amp; Leadership
                  </h2>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li><strong>JEE Mains 2023:</strong> All India Rank 1883 out of 1M+ candidates (Top 0.18%).</li>
                    <li><strong>JEE Advanced 2023:</strong> All India Rank 2616.</li>
                    <li><strong>Yoga Club, NITK:</strong> Co-Convener (Feb 2024 – Feb 2026), coordinated wellness programs for 150+ members.</li>
                    <li><strong>SPIC MACAY NITK:</strong> Event Planner &amp; Publicity Coordinator promoting Indian classical arts.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
