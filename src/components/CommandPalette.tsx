"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Terminal,
  Search,
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Copy,
  Sun,
  Moon,
  Layers,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { resumeData } from "@/data/resume";
import { useTheme } from "@/context/ThemeContext";
import { MOTION_SPRING } from "@/lib/motion";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { personal } = resumeData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    toast.success("Email copied to clipboard");
    onClose();
  };

  const handleToggleTheme = () => {
    toggleTheme();
    toast.success(`Switched to ${theme === "dark" ? "Light Paper" : "Dark Ink"} theme`);
    onClose();
  };

  const commands = [
    {
      label: "Jump to Selected Work (Case Studies)",
      category: "Navigation",
      hint: "01 Work",
      action: () => {
        window.location.hash = "#work";
        onClose();
      },
    },
    {
      label: "Jump to Trajectory (Tech Mahindra, NITK, AIR 1883)",
      category: "Navigation",
      hint: "02 Trajectory",
      action: () => {
        window.location.hash = "#trajectory";
        onClose();
      },
    },
    {
      label: "Jump to Technical Arsenal & Stack",
      category: "Navigation",
      hint: "03 Arsenal",
      action: () => {
        window.location.hash = "#skills";
        onClose();
      },
    },
    {
      label: "Jump to About & Mindful Cadence",
      category: "Navigation",
      hint: "04 About",
      action: () => {
        window.location.hash = "#about";
        onClose();
      },
    },
    {
      label: "View & Download Official Resume PDF",
      category: "Resume",
      hint: "Modal Viewer",
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      label: "Copy Email Address (sharmagirish0a26z@gmail.com)",
      category: "Action",
      hint: "1-Click Copy",
      action: handleCopyEmail,
    },
    {
      label: `Switch Theme to ${theme === "dark" ? "Light Paper" : "Dark Ink"}`,
      category: "Appearance",
      hint: theme === "dark" ? "Light Mode" : "Dark Mode",
      action: handleToggleTheme,
    },
    {
      label: "Open GitHub Profile (@Girish1101)",
      category: "External",
      hint: "New Tab",
      action: () => {
        window.open(personal.socials.github, "_blank");
        onClose();
      },
    },
    {
      label: "Open LinkedIn Profile",
      category: "External",
      hint: "New Tab",
      action: () => {
        window.open(personal.socials.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs"
        />

        {/* Palette Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={MOTION_SPRING}
          className="relative w-full max-w-xl rounded-2xl bg-surface border border-border-strong shadow-2xl overflow-hidden z-10 font-mono text-xs"
        >
          {/* Search Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-border-subtle bg-surface-elevated gap-3">
            <Terminal className="w-4 h-4 text-accent shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or jump to section (e.g. 'work', 'resume')..."
              className="w-full bg-transparent text-text-primary placeholder-text-muted focus:outline-none text-xs sm:text-sm font-mono"
            />
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-subtle text-text-muted border border-border-subtle">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text-primary p-1 rounded hover:bg-subtle"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action List */}
          <div className="max-h-72 overflow-y-auto p-2 space-y-1">
            {filteredCommands.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-text-secondary hover:text-text-primary hover:bg-subtle transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-badge text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {item.category}
                  </span>
                  <span className="font-medium text-text-primary">{item.label}</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <span className="text-[10px] hidden sm:inline">{item.hint}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}

            {filteredCommands.length === 0 && (
              <div className="py-8 text-center text-text-muted">
                No commands matching &ldquo;{query}&rdquo;
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2 border-t border-border-subtle bg-surface-elevated flex items-center justify-between text-[11px] text-text-muted">
            <span>Press ↵ to select</span>
            <span>Shortcut: ⌘K or Ctrl+K</span>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
