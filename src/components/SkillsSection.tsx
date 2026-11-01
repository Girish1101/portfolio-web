"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Search,
  CheckCircle2,
  GitBranch,
  Layers,
  Database,
  Terminal,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { resumeData } from "@/data/resume";
import { sectionReveal } from "@/lib/motion";

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const { groupedSkills, education } = resumeData;
  const categories = ["All", ...groupedSkills.map((g) => g.category), "Core CS Foundations"];

  const matchesSearch = (text: string) => {
    if (!searchQuery.trim()) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const filteredGroups = groupedSkills
    .filter((group) => activeCategory === "All" || activeCategory === group.category)
    .map((group) => ({
      ...group,
      skills: group.skills.filter(
        (s) =>
          matchesSearch(s.name) ||
          (s.projectContext && matchesSearch(s.projectContext)) ||
          (s.highlight && matchesSearch(s.highlight))
      ),
    }))
    .filter((group) => group.skills.length > 0);

  const showCoreCS =
    (activeCategory === "All" || activeCategory === "Core CS Foundations") &&
    education.coursework.some((c) => matchesSearch(c));

  const filteredCoursework = education.coursework.filter((c) => matchesSearch(c));

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div {...sectionReveal} className="border-b border-border-subtle pb-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
                03 / TECHNICAL ARSENAL
              </span>
              <span className="h-px w-8 bg-border-strong" />
              <span className="font-mono text-xs text-text-muted">
                Grouped by Shipped Production Code
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-text-primary tracking-tight font-normal">
              Skills &amp; Engineering Stack
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
              Every skill below is tied to real production deliverables &mdash; no unverified claims or fake percentage meters.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Kafka, RAG)..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface border border-border-strong text-xs font-mono text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-border-subtle font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeCategory === cat
                  ? "bg-accent text-white font-medium"
                  : "bg-surface text-text-secondary hover:text-text-primary border border-border-subtle"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid of Shipped Skill Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGroups.map((group, idx) => (
          <motion.div
            key={group.category}
            {...sectionReveal}
            className="editorial-card rounded-xl p-6 border border-border-subtle space-y-4"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-medium text-text-primary">
                  {group.category}
                </h3>
                <span className="font-mono text-[10px] text-text-muted">
                  0{idx + 1}
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-1 font-sans">
                {group.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-border-subtle">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2.5 rounded-lg bg-subtle/60 border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-text-primary">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="text-[10px] text-text-muted font-sans hidden sm:inline">
                        &bull; {skill.highlight}
                      </span>
                    )}
                  </div>

                  {skill.projectContext && (
                    <a
                      href="#work"
                      className="inline-flex items-center gap-1 font-mono text-[10px] text-accent hover:underline shrink-0"
                    >
                      <span>Used in {skill.projectContext}</span>
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Core CS Foundations Card */}
        {showCoreCS && (
          <motion.div
            {...sectionReveal}
            className="editorial-card rounded-xl p-6 border border-border-subtle space-y-4 md:col-span-2"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-medium text-text-primary flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  Core CS Foundations (NITK Curriculum)
                </h3>
                <p className="text-xs text-text-secondary mt-1">
                  Theoretical foundations underpinning algorithmic correctness, systems architecture, and mathematical proofs.
                </p>
              </div>
              <span className="font-mono text-xs text-accent font-semibold">
                GPA: {education.gpa}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-border-subtle">
              {filteredCoursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 rounded-md bg-subtle text-xs font-mono text-text-primary border border-border-subtle"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Human Working Style Statement */}
      <motion.div
        {...sectionReveal}
        className="mt-8 p-6 rounded-xl border border-border-subtle bg-surface/50 font-mono text-xs text-text-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div className="flex items-center gap-2 text-text-primary font-medium">
          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
          <span>Professional Working Principles:</span>
        </div>
        <div className="text-text-muted">
          Systems-first thinking &bull; Concrete metrics &bull; Clear technical writing &bull; Cross-functional adaptability
        </div>
      </motion.div>
    </section>
  );
}
