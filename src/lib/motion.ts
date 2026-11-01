import { Transition } from "motion/react";

/**
 * Shared Motion Tokens for Girish Sharma Portfolio
 * Follows strict engineering tokens:
 * - Durations: 0.2s (micro), 0.4s (standard), 0.8s (deliberate reveals)
 * - Single spring: stiffness 260, damping 30
 * - Single custom easing: [0.16, 1, 0.3, 1] (editorial cubic bezier)
 */

export const MOTION_DURATIONS = {
  fast: 0.2,
  standard: 0.4,
  deliberate: 0.8,
} as const;

export const MOTION_SPRING: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
};

export const MOTION_EASE = [0.16, 1, 0.3, 1] as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: MOTION_DURATIONS.standard, ease: MOTION_EASE },
};

export const sectionReveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: MOTION_DURATIONS.standard, ease: MOTION_EASE },
};
