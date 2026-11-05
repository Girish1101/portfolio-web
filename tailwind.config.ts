import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "var(--bg-page)",
        surface: "var(--bg-surface)",
        "surface-elevated": "var(--bg-surface-elevated)",
        subtle: "var(--bg-subtle)",
        "dark-navy": "var(--dark-navy)",
        "navy-shadow": "var(--navy-shadow)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-bright": "var(--text-bright)",
        "border-subtle": "var(--border-subtle)",
        "border-strong": "var(--border-strong)",
        accent: {
          DEFAULT: "var(--accent)",
          subtle: "var(--accent-subtle)",
          hover: "var(--accent-hover)",
        },
        badge: "var(--badge-bg)",
        navy: {
          DEFAULT: "#0a192f",
          deep: "#020c1b",
          surface: "#112240",
          elevated: "#172a45",
          subtle: "#233554",
        },
        slate: {
          lightest: "#e6f1ff",
          lighter: "#ccd6f6",
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          dark: "#495670",
        },
        cyan: {
          DEFAULT: "#64ffda",
          subtle: "rgba(100, 255, 218, 0.1)",
          hover: "#64ffda",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        serif: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        "fluid-hero": [
          "clamp(2.5rem, 1.6rem + 3.88vw, 4.75rem)",
          { lineHeight: "1.06", letterSpacing: "-0.03em" },
        ],
        "fluid-section": [
          "clamp(1.85rem, 1.2rem + 2.5vw, 3rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "fluid-subhead": [
          "clamp(1.15rem, 0.95rem + 1.0vw, 1.5rem)",
          { lineHeight: "1.3" },
        ],
        "fluid-body": [
          "clamp(0.875rem, 0.82rem + 0.24vw, 1.0rem)",
          { lineHeight: "1.6" },
        ],
        "fluid-mono": [
          "clamp(0.6875rem, 0.63rem + 0.24vw, 0.8125rem)",
          { lineHeight: "1.4", letterSpacing: "0.02em" },
        ],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
    },
  },
  plugins: [],
};

export default config;
