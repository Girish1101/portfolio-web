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
  const [activeTab, setActiveTab] = useState<"text" | "pdf">("pdf");
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
    // Print the attached single-page resume PDF directly
    const iframe = document.getElementById("resume-pdf-iframe") as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        return;
      } catch (err) {
        console.warn("Direct iframe print restricted by browser, opening PDF directly:", err);
      }
    }
    // Fallback: Open the exact single-page PDF directly in a new tab for native single-page print
    const printWin = window.open("/Girish_Sharma_Resume_2026.pdf", "_blank");
    if (printWin) {
      printWin.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:static print:p-0 print:m-0 print:block print:overflow-visible">
          {/* Print Stylesheet */}
          <style>{`
            @media print {
              @page {
                size: letter;
                margin: 8mm 12mm;
              }
              body, html {
                background: #ffffff !important;
                color: #111827 !important;
                overflow: hidden !important;
                height: 100% !important;
              }
              .print-resume-sheet {
                background: #ffffff !important;
                color: #111827 !important;
                box-shadow: none !important;
                border: none !important;
                padding: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                max-width: 100% !important;
                overflow: hidden !important;
              }
              .print-resume-sheet * {
                color: #111827 !important;
                border-color: #d1d5db !important;
              }
              .print-resume-sheet h1 {
                font-size: 16pt !important;
                line-height: 1.1 !important;
                margin-bottom: 2px !important;
              }
              .print-resume-sheet h2 {
                font-size: 9.5pt !important;
                margin-top: 5px !important;
                margin-bottom: 2px !important;
                padding-bottom: 1px !important;
              }
              .print-resume-sheet p,
              .print-resume-sheet span,
              .print-resume-sheet li {
                font-size: 8pt !important;
                line-height: 1.25 !important;
              }
              .print-resume-sheet .space-y-6 > * + * {
                margin-top: 6px !important;
              }
              .print-resume-sheet .space-y-3 > * + * {
                margin-top: 4px !important;
              }
              .print-resume-sheet .space-y-2 > * + * {
                margin-top: 2px !important;
              }
              .print-resume-sheet ul {
                margin-top: 2px !important;
                margin-bottom: 2px !important;
              }
            }
          `}</style>

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs print:hidden"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={MOTION_SPRING}
            className="relative w-full max-w-4xl max-h-[92vh] bg-surface border border-border-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden text-text-primary z-10 my-auto print:border-none print:shadow-none print:bg-white print:max-h-none print:static"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-border-subtle bg-surface-elevated print:hidden">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-md bg-badge text-accent border border-border-subtle">
                  <FileText className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="font-sans font-bold text-lg text-text-bright">
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
                    className={`min-h-[44px] inline-flex items-center px-3 py-2 rounded transition-colors ${
                      activeTab === "text"
                        ? "bg-surface border border-accent/40 text-accent font-medium shadow-xs"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    ATS View
                  </button>
                  <button
                    onClick={() => setActiveTab("pdf")}
                    className={`min-h-[44px] inline-flex items-center px-3 py-2 rounded transition-colors ${
                      activeTab === "pdf"
                        ? "bg-surface border border-accent/40 text-accent font-medium shadow-xs"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    PDF Document
                  </button>
                </div>

                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex min-h-[44px] items-center gap-1.5 px-3.5 py-2 rounded-md border border-border-subtle bg-surface hover:border-accent hover:text-accent hover:bg-accent/10 text-xs font-mono transition-colors"
                  title="Print Resume"
                >
                  <Printer className="w-3.5 h-3.5 text-accent" />
                  <span>Print</span>
                </button>

                <a
                  href="/Girish_Sharma_Resume_2026.pdf"
                  download="Girish_Sharma_Resume_2026.pdf"
                  className="btn-brittany inline-flex min-h-[44px] items-center gap-1.5 px-3.5 py-2 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent text-xs font-mono font-medium transition-all duration-200"
                >
                  <Download className="w-3.5 h-3.5 text-accent" />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={onClose}
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-subtle transition-colors ml-1"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 text-xs sm:text-sm font-sans print:p-0 print:overflow-visible">
              {activeTab === "pdf" && (
                <div className="w-full h-[650px] rounded-lg border border-border-subtle overflow-hidden bg-subtle flex flex-col items-center justify-center">
                  <iframe
                    id="resume-pdf-iframe"
                    src="/Girish_Sharma_Resume_2026.pdf#toolbar=1"
                    className="w-full h-full border-none"
                    title="Girish Sharma Official Resume PDF"
                  />
                </div>
              )}

              {/* ATS Formatted Clean Text Document */}
              <div className={`print-resume-sheet max-w-3xl mx-auto space-y-6 text-text-secondary leading-relaxed bg-surface p-6 sm:p-8 rounded-xl border border-border-subtle print:border-none print:shadow-none print:p-0 print:text-black ${activeTab === "text" ? "block" : "hidden print:block"}`}>
                  {/* Header Information */}
                  <div className="text-center border-b border-border-subtle pb-4 space-y-1">
                    <h1 className="font-sans font-bold text-2xl sm:text-3xl text-text-bright">
                      {personal.name}
                    </h1>
                    <p className="font-mono text-xs text-text-muted">
                      {personal.email} &bull; +91 {personal.phone} &bull; Surathkal, Karnataka, India
                    </p>
                    <p className="font-mono text-[11px] text-accent">
                      <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        github.com/Girish1101
                      </a>
                      {" &bull; "}
                      <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
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
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
