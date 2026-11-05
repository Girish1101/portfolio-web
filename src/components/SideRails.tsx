"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";

/**
 * Floating Vertical Side Rails
 * Brittany Chiang v4 visual restyling:
 * - Left rail: Vertical email address anchored to viewport bottom with a 1px grounding line.
 * - Right rail: GitHub and LinkedIn social profile icons anchored to viewport bottom with a 1px grounding line.
 * - Responsive: Hidden on mobile/tablet viewports (< 1280px / xl) to prevent content occlusion.
 * - Accessible: ARIA labels on all links, motion-safe transforms with reduced-motion overrides.
 */
export default function SideRails() {
  return (
    <>
      {/* Left Vertical Rail: Email Contact Anchor */}
      <aside
        aria-label="Email contact rail"
        className="fixed bottom-0 left-6 xl:left-10 z-30 hidden xl:flex flex-col items-center"
      >
        <a
          href="mailto:sharmagirish0a26z@gmail.com"
          aria-label="Email: sharmagirish0a26z@gmail.com"
          className="[writing-mode:vertical-rl] font-mono text-xs tracking-widest text-text-muted hover:text-accent motion-safe:hover:-translate-y-1 motion-reduce:hover:translate-y-0 transition-all duration-200 py-2 px-1 focus-visible:text-accent focus-visible:outline-none"
        >
          sharmagirish0a26z@gmail.com
        </a>
        <div
          className="w-[1px] h-24 bg-border-strong mt-4"
          aria-hidden="true"
        />
      </aside>

      {/* Right Vertical Rail: Social Media Anchor */}
      <aside
        aria-label="Social media rail"
        className="fixed bottom-0 right-6 xl:right-10 z-30 hidden xl:flex flex-col items-center gap-5"
      >
        <a
          href="https://github.com/Girish1101"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-text-muted hover:text-accent motion-safe:hover:-translate-y-1 motion-reduce:hover:translate-y-0 transition-all duration-200 p-2 flex items-center justify-center focus-visible:text-accent focus-visible:outline-none"
        >
          <Github className="w-5 h-5" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/girish-sharma-sde/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-text-muted hover:text-accent motion-safe:hover:-translate-y-1 motion-reduce:hover:translate-y-0 transition-all duration-200 p-2 flex items-center justify-center focus-visible:text-accent focus-visible:outline-none"
        >
          <Linkedin className="w-5 h-5" aria-hidden="true" />
        </a>
        <div
          className="w-[1px] h-24 bg-border-strong mt-2"
          aria-hidden="true"
        />
      </aside>
    </>
  );
}
