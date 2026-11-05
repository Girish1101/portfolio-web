"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Clock,
  Eye,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";
import { resumeData } from "@/data/resume";
import { sectionReveal } from "@/lib/motion";

export default function ContactSection() {
  const { personal } = resumeData;
  const [copied, setCopied] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Live Surathkal, India local time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    toast.success("Email address copied to clipboard", {
      description: personal.email,
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-border-subtle">
      {/* Section Header */}
      <motion.div {...sectionReveal} className="border-b border-border-subtle pb-8 mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
            05 / CONTACT
          </span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="font-mono text-xs text-text-muted">
            Get in Touch
          </span>
        </div>
        <h2 className="font-sans font-bold font-fluid-section text-text-bright tracking-tight">
          Have a system that&apos;s hard to debug or messy data? Let&apos;s talk.
        </h2>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          Open to software engineering roles, distributed systems discussions, and AI engineering opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Direct Channels (5 cols) */}
        <motion.div {...sectionReveal} className="lg:col-span-5 space-y-6">
          <div className="editorial-card rounded-2xl p-6 border border-border-subtle space-y-6">
            <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
              Direct Channels
            </span>

            {/* Email with 1-Click Copy */}
            <div className="p-4 rounded-xl bg-subtle/60 border border-border-subtle space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-muted uppercase">Email Address</span>
                <button
                  onClick={handleCopyEmail}
                  className="btn-brittany min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-accent/60 text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-0.5 hover:shadow-[2px_2px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent font-mono text-xs transition-all duration-200"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <div className="font-mono text-xs sm:text-sm font-medium text-text-primary break-all">
                {personal.email}
              </div>
            </div>

            {/* Phone — click to reveal */}
            <div className="p-4 rounded-xl bg-subtle/60 border border-border-subtle space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-muted uppercase">Phone / WhatsApp</span>
                {!showPhone ? (
                  <button
                    onClick={() => setShowPhone(true)}
                    className="min-h-[44px] inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline px-2.5 py-2"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to reveal</span>
                  </button>
                ) : (
                  <span className="font-mono text-[10px] text-text-muted">Verified Contact</span>
                )}
              </div>
              <div className="font-mono text-xs sm:text-sm font-medium text-text-primary">
                {showPhone ? `+91 ${personal.phone}` : "••• ••• •••• (Protected)"}
              </div>
            </div>

            {/* Location & Live IST Clock */}
            <div className="p-4 rounded-xl bg-subtle/60 border border-border-subtle space-y-2">
              <span className="font-mono text-[11px] text-text-muted uppercase">Location &amp; Local Time</span>
              <div className="font-mono text-xs sm:text-sm text-text-primary">
                NITK Surathkal, Karnataka, India
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-accent pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Surathkal Time: {currentTime || "IST (UTC+5:30)"}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-border-subtle flex items-center gap-3 font-mono text-xs">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-border-subtle bg-surface hover:bg-subtle hover:border-accent hover:text-accent text-text-primary transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-border-subtle bg-surface hover:bg-subtle hover:border-accent hover:text-accent text-text-primary transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Call to Action (7 cols) */}
        <motion.div {...sectionReveal} className="lg:col-span-7">
          <div className="editorial-card rounded-2xl p-8 sm:p-10 border border-border-subtle space-y-8 flex flex-col justify-between min-h-[320px]">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                Start a Conversation
              </span>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-lg">
                Whether you have an engineering challenge, an open role, or just want to discuss
                distributed systems and AI — my inbox is open. I respond to every serious message.
              </p>
              <ul className="space-y-2 text-xs font-mono text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> SDE internship or full-time roles
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> AI / LLM systems, RAG pipelines, multi-agent orchestration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Distributed backend architecture discussions
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-border-subtle">
              <a
                href={`mailto:${personal.email}?subject=Reaching out from your portfolio`}
                className="btn-brittany min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-md border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent font-mono text-xs sm:text-sm font-medium transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>Email Me Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border-subtle bg-surface hover:border-accent hover:text-accent hover:bg-accent/5 text-text-secondary font-mono text-xs font-medium transition-all duration-200"
              >
                {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Colophon */}
      <footer className="pt-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted">
        <div>
          <span>&copy; {new Date().getFullYear()} Girish Sharma &bull; NIT Karnataka</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Built with Next.js &amp; Tailwind CSS</span>
          <button
            onClick={scrollToTop}
            className="min-h-[44px] inline-flex items-center gap-1 text-text-primary hover:text-accent transition-colors px-2"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </section>
  );
}
