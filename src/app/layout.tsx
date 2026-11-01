import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const serifFont = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://girishsharma.dev"),
  title: "Girish Sharma | Software Engineer: AI Systems, RAG & Backend",
  description:
    "Computer Science student at NITK building multi-agent RCA, RAG and computer-vision systems. Ex-intern at Tech Mahindra. See projects and resume.",
  keywords: [
    "Girish Sharma",
    "NITK",
    "software engineer",
    "LangGraph",
    "RAG",
    "FastAPI",
    "Next.js",
    "Kafka",
    "Neo4j",
    "TraceID",
    "Meetlnk",
    "BidBlitz",
  ],
  authors: [{ name: "Girish Sharma", url: "https://github.com/Girish1101" }],
  openGraph: {
    title: "Girish Sharma | Software Engineer: AI Systems, RAG & Backend",
    description:
      "Computer Science student at NITK building multi-agent RCA, RAG and computer-vision systems. Ex-intern at Tech Mahindra. See projects and resume.",
    url: "https://girishsharma.dev",
    siteName: "Girish Sharma Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/haikei/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Girish Sharma — Software Engineer & AI Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Girish Sharma | Software Engineer: AI Systems, RAG & Backend",
    description:
      "Computer Science student at NITK building multi-agent RCA, RAG and computer-vision systems. Ex-intern at Tech Mahindra.",
    images: ["/haikei/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Girish Sharma",
    jobTitle: "Software Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Institute of Technology Karnataka, Surathkal",
      alternateName: "NITK",
    },
    url: "https://girishsharma.dev",
    sameAs: [
      "https://github.com/Girish1101",
      "https://www.linkedin.com/in/girish-sharma-sde/",
    ],
    knowsAbout: [
      "AI Systems",
      "LangGraph",
      "Multi-Agent Systems",
      "FastAPI",
      "Retrieval-Augmented Generation",
      "Distributed Systems",
      "PostgreSQL",
    ],
  };

  return (
    <html
      lang="en"
      className={`dark ${serifFont.variable} ${sansFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-page text-text-primary antialiased selection:bg-accent/20 selection:text-accent font-sans relative">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
