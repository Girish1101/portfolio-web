"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { FileText, Sun, Moon, Terminal, ArrowUpRight, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { resumeData } from "@/data/resume";
import { MOTION_SPRING } from "@/lib/motion";

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenCommandPalette: () => void;
}

const navItems = [
  { id: "about", label: "About", index: "01" },
  { id: "trajectory", label: "Experience", index: "02" },
  { id: "work", label: "Projects", index: "03" },
  { id: "skills", label: "Skills", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

export default function Navbar({ onOpenResumeModal, onOpenCommandPalette }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("work");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Track active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-page/85 backdrop-blur-md border-b border-border-subtle py-3 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark (Display Font) */}
            <Link
              href="#"
              className="group flex items-baseline gap-2 text-text-primary hover:text-accent transition-colors shrink-0 whitespace-nowrap"
            >
              <span className="font-sans text-xl sm:text-2xl tracking-tight font-bold text-text-bright group-hover:text-accent transition-colors shrink-0 whitespace-nowrap">
                {resumeData.personal.name}
                <span className="text-accent">.</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] text-text-muted tracking-wider shrink-0 whitespace-nowrap">
                / NITK &bull; AI Systems
              </span>
            </Link>

            {/* Desktop Navigation with sliding layoutId active pill */}
            <nav className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-full border border-border-subtle bg-surface/80 backdrop-blur-sm text-xs font-mono">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-full transition-colors ${
                      isActive ? "text-text-primary font-medium" : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-border-subtle/70"
                        transition={MOTION_SPRING}
                      />
                    )}
                    <span className="relative z-10">
                      <span className="text-[10px] text-accent mr-1 opacity-90">{item.index}.</span>
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Controls & Resume */}
            <div className="flex items-center gap-2">
              {/* Command Palette Button */}
              <button
                onClick={onOpenCommandPalette}
                className="hidden lg:flex min-h-[44px] items-center gap-1.5 px-3 py-2 rounded-md border border-border-subtle bg-surface text-text-muted hover:text-text-primary hover:border-border-strong text-[11px] font-mono transition-colors"
                title="Open Command Palette (Ctrl+K)"
                aria-label="Open Command Menu"
              >
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>Cmd</span>
                <kbd className="px-1.5 py-0.5 bg-subtle text-[10px] rounded border border-border-subtle">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light paper theme" : "Switch to dark ink theme"}
                className="min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center rounded-md border border-border-subtle bg-surface text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors"
                title={theme === "dark" ? "Light Mode" : "Dark Mode"}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-accent" />
                ) : (
                  <Moon className="w-4 h-4 text-accent" />
                )}
              </button>

              {/* Resume Trigger */}
              <button
                onClick={onOpenResumeModal}
                className="btn-brittany min-h-[44px] px-3.5 py-2 text-xs font-mono font-medium gap-1.5 border border-accent text-accent bg-transparent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#64ffda] focus-visible:outline-dashed focus-visible:outline-accent transition-all duration-200 rounded-md active:scale-95"
                aria-label="Open resume viewer"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>Resume</span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center rounded-md border border-border-subtle text-text-muted hover:text-text-primary"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-b border-border-subtle bg-surface/98 backdrop-blur-xl px-4 py-4 mt-2"
            >
              <nav className="flex flex-col gap-2 font-mono text-sm">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-subtle text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-accent">{item.index}</span>
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Editorial Scroll Progress Bar tied to section numbers */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border-subtle/40 overflow-hidden" aria-hidden="true">
          <motion.div
            className="h-full bg-accent origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </header>

      {/* Mobile Bottom Dock */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="flex items-center justify-around py-3 px-3 rounded-2xl border border-border-subtle bg-surface/90 backdrop-blur-lg shadow-lg text-xs font-mono">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-0.5 px-2 py-1 rounded-lg transition-colors ${
                  isActive ? "text-accent font-semibold" : "text-text-muted hover:text-text-primary"
                }`}
                aria-label={`Jump to section ${item.index} ${item.label}`}
              >
                <span className="text-[10px] opacity-70">{item.index}</span>
                <span className="text-[11px]">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
