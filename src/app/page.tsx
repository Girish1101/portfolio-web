"use client";

import React, { useState, useEffect } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ResumeModal from "@/components/ResumeModal";
import CommandPalette from "@/components/CommandPalette";
import SectionDivider from "@/components/SectionDivider";
import SideRails from "@/components/SideRails";
import { ThemeProvider } from "@/context/ThemeContext";
import { Terminal } from "lucide-react";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <main className="relative min-h-screen bg-page text-text-primary selection:bg-accent/20 selection:text-accent font-sans print:bg-white print:p-0 print:m-0">
          <div className="print:hidden">
            {/* Navigation Bar */}
            <Navbar
              onOpenResumeModal={() => setResumeModalOpen(true)}
              onOpenCommandPalette={() => setCommandPaletteOpen(true)}
            />

            {/* 00 / PROLOGUE: Hero */}
            <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

            {/* Haikei Divider 01: Wave */}
            <SectionDivider variant="wave" />

            {/* 01 / ABOUT: Personal narrative & personality */}
            <AboutSection />

            {/* Haikei Divider 02: Steps */}
            <SectionDivider variant="steps" flipped="x" />

            {/* 02 / EXPERIENCE & EDUCATION: Timeline */}
            <TimelineSection />

            {/* Haikei Divider 03: Peaks */}
            <SectionDivider variant="peaks" />

            {/* 03 / PROJECTS: Flagship case studies */}
            <ProjectsSection />

            {/* Haikei Divider 04: Wave (flipped vertically) */}
            <SectionDivider variant="wave" flipped="y" />

            {/* 04 / SKILLS: Technical stack */}
            <SkillsSection />

            {/* 05 / CONTACT: Direct communication & footer */}
            <ContactSection />

            {/* Floating Vertical Side Rails */}
            <SideRails />

            {/* Floating Quick Command Menu Trigger */}
            <div className="fixed bottom-6 right-20 xl:right-24 z-30 hidden md:block">
              <button
                onClick={() => setCommandPaletteOpen(true)}
                className="min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface border border-border-strong text-text-secondary hover:text-text-primary hover:border-accent shadow-md transition-all text-xs font-mono group"
                aria-label="Open Command Menu"
              >
                <Terminal className="w-3.5 h-3.5 text-accent group-hover:rotate-12 transition-transform" />
                <span>Menu</span>
                <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-subtle text-text-muted border border-border-subtle">
                  ⌘K
                </kbd>
              </button>
            </div>
          </div>

          {/* Interactive Resume ATS Viewer & PDF Modal */}
          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={() => setResumeModalOpen(false)}
          />

          {/* Global Command Palette (Ctrl+K / ⌘K) */}
          <CommandPalette
            isOpen={commandPaletteOpen}
            onClose={() => setCommandPaletteOpen(false)}
            onOpenResume={() => setResumeModalOpen(true)}
          />
        </main>
      </MotionConfig>
    </ThemeProvider>
  );
}
