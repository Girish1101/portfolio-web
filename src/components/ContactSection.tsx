"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Phone,
  Eye,
  ArrowUp,
  Terminal,
} from "lucide-react";
import { toast } from "sonner";
import { resumeData } from "@/data/resume";
import { sectionReveal } from "@/lib/motion";

export default function ContactSection() {
  const { personal } = resumeData;
  const [copied, setCopied] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
    toast.success("Message prepared! Opening default mail client...");

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
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
            Direct Dialogue
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-text-primary tracking-tight font-normal">
          Have a system that&apos;s hard to debug or messy data? Let&apos;s talk.
        </h2>
        <p className="text-text-secondary text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          Open to software engineering roles, distributed systems discussions, and AI engineering opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Direct Communication Hub (5 cols) */}
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
                  className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <div className="font-mono text-xs sm:text-sm font-medium text-text-primary break-all">
                {personal.email}
              </div>
            </div>

            {/* Phone (Click to reveal for privacy) */}
            <div className="p-4 rounded-xl bg-subtle/60 border border-border-subtle space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-muted uppercase">Phone / WhatsApp</span>
                {!showPhone ? (
                  <button
                    onClick={() => setShowPhone(true)}
                    className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
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

            {/* Location & Local Time */}
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border-subtle bg-surface hover:bg-subtle text-text-primary transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border-subtle bg-surface hover:bg-subtle text-text-primary transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Direct Message Form (7 cols) */}
        <motion.div {...sectionReveal} className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="editorial-card rounded-2xl p-6 sm:p-8 border border-border-subtle space-y-5"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
              Dispatch a Message
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="name" className="text-text-muted">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border-strong text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <label htmlFor="email" className="text-text-muted">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ada@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border-strong text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5 font-mono text-xs">
              <label htmlFor="message" className="text-text-muted">
                System Context / Opportunity Details
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your distributed architecture, RAG pipeline requirements, or open engineering roles..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border-strong text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-accent hover:bg-accent-hover text-white font-mono text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer Colophon */}
      <footer className="pt-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted">
        <div>
          <span>&copy; {new Date().getFullYear()} Girish Sharma &bull; NIT Karnataka</span>
        </div>

        <div className="flex items-center gap-6">
          <span>Crafted with Next.js 14 &amp; Motion</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-text-primary hover:text-accent transition-colors"
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
