# Girish Sharma: Portfolio Content Source of Truth

> **Instructions for the AI reading this file**
> - This is the single source of truth for all text, facts and numbers on the portfolio. Use ONLY what is written here.
> - Do NOT invent metrics, testimonials, companies, project details, links, or personal facts.
> - Anything marked `[TO FILL]` is unknown: leave a clearly visible TODO in code comments (not on the live page) and ask me, or hide that element until I provide it.
> - Items under "Flags to verify" must be confirmed with me before they go live.
> - Tone: specific, concrete, first-person, no buzzwords ("passionate", "crafting digital experiences", "building the future").

---

## 1. Identity

| Field | Value |
|---|---|
| Full name | Girish Sharma |
| Role / headline | Software engineer (CS undergraduate) building AI-driven backend systems and full-stack products |
| Focus areas | AI/LLM systems (RAG, multi-agent orchestration), distributed backend systems, full-stack web |
| Institution | National Institute of Technology Karnataka (NITK), Surathkal |
| Degree | B.Tech in Computer Science, Aug 2023 to Present |
| GPA | 7.70 |
| Email | sharmagirish0a26z@gmail.com |
| Phone | 8949758239 (show only inside the resume or on explicit click-to-reveal; do not print in page source) |
| Location | `[TO FILL: city for the "local time" footer, e.g. Surathkal / hometown]` |
| Availability | `[TO FILL: e.g. open to internships / full-time roles from <month year>]` |
| Photo | `[TO FILL: path to real photo]` |

### Links
| Platform | URL |
|---|---|
| GitHub | https://github.com/Girish1101 (username from resume: `Girish1101`) |
| LinkedIn | `[TO FILL: exact URL; resume shows the label "Girish Sharma"]` |
| Unstop profile | `[TO FILL]` |
| Old portfolio | `[TO FILL: URL, only for reference; the new site is unrelated to it]` |
| Resume PDF | `/Girish_Sharma_Resume_2026.pdf` (use the uploaded `resume_ai.pdf`, renamed) |

---

## 2. Hero copy (options, pick one and refine)

1. "I build AI systems that find the root cause in seconds, not 40 minutes."
2. "Software engineer working on LLM agents, vector search and backends that stay up under load."
3. "I turn messy logs, transcripts and photos into answers: multi-agent RCA, RAG, and face search."

**Sub-line:** Computer Science at NITK. Recently shipped an AI observability platform at Tech Mahindra.

**CTAs:** "See my work" (anchor to projects) and "Resume" (opens modal and download).

---

## 3. About (draft first-person copy, I will edit)

I'm a Computer Science student at NITK who likes problems where the data is messy and the answer has to be fast. This summer I interned at Tech Mahindra, where I built an AI observability platform that parses logs, detects anomalies and traces root causes through a knowledge graph. Outside work I've built a face-matching tool for missing-person cases, a RAG system that pulls action items out of meeting transcripts, and a high-concurrency auction backend.

Away from the keyboard, I co-convened the college Yoga Club and organize cultural events with SPIC MACAY. `[TO FILL: 1 to 2 genuinely personal lines: what you're learning now, what you like building, something non-tech]`

**"Currently" line:** `[TO FILL: e.g. Currently exploring ...]`

---

## 4. Experience

### Software Engineering Intern (SDE): Tech Mahindra
**May 2026 to July 2026**

**One-line pitch:** An AI-driven observability platform that detects incidents and finds their root cause automatically.

**Highlights (use these exact facts):**
- Architected an end-to-end AI-driven observability platform using **FastAPI and Kafka**, automating log parsing, real-time anomaly detection and incident remediation across distributed systems.
- Built an autonomous **Root-Cause Analysis (RCA) engine** using **LangGraph** multi-agent orchestration and a **Neo4j** knowledge graph, reducing MTTR from **40+ minutes to seconds** across **1.12M+ requests** (**87% confidence**).
- Developed a self-monitoring telemetry framework with **14 real-time health detectors** and secure data masking/demasking modules to monitor LLM gateways, vector indices and relational databases.
- Built a **WireMock** service-virtualization suite of **43 calibrated stubs** from **1.5M+ production logs**, enabling CI pipeline testing under **400 requests/sec** with a **94.6% pass rate across 160k+ checks**.

**Stack:** LangGraph, FastAPI, Kafka, Neo4j, OpenSearch, WireMock, Docker, Multi-Agent Systems, CI/CD, RCA Automation

**Confidentiality note for AI:** this is company work. Do not add screenshots, internal names, architecture diagrams with company specifics, or client details. A generic, redrawn architecture diagram is fine.

---

## 5. Projects (flagship case studies)

> For each project, the case-study page should have: pitch, problem, my role, architecture, key decisions/trade-offs, results, stack, links. Fields I haven't provided are marked `[TO FILL]`.

### 5.1 TraceID
- **Dates:** July 2026 to Aug 2026
- **Live site:** `[TO FILL URL]` | **GitHub:** `[TO FILL URL]`
- **Pitch:** An investigative platform that matches field photographs against missing-person dossiers using face detection and vector similarity.
- **Stack:** Next.js, Python Flask, PostgreSQL (Neon), FaceNet, MTCNN
- **What it does / facts:**
  - Full-stack platform cross-referencing field photography against missing-person dossiers using **multi-box face detection** and **vector similarity matching**.
  - Next.js frontend connected to **Python Flask microservices** for real-time **MTCNN** facial landmarking and **512-dimensional FaceNet embeddings**, stored in a **Neon PostgreSQL** database.
  - **>96% candidate retrieval accuracy** and **<120 ms per query** search latency through **L2-normalized feature vector indexing**.
- **Problem statement:** `[TO FILL: why this matters, who it's for]`
- **Key decisions:** `[TO FILL: why microservices, why L2 normalization, how matches are ranked]`
- **Ethics/privacy note:** `[TO FILL: how data is handled; judges may ask about face data]`
- **Visuals:** `[TO FILL: screenshots / short GIF]`

### 5.2 Meetlnk
- **Dates:** Aug 2026 to Sept 2026
- **Live site:** `[TO FILL URL]` | **GitHub:** `[TO FILL URL]`
- **Pitch:** A meeting intelligence platform that turns long transcripts into searchable answers and timestamped action items.
- **Stack:** FastAPI, Python, LangChain, Pinecone, OpenAI API, Next.js
- **What it does / facts:**
  - End-to-end meeting intelligence platform using **Retrieval-Augmented Generation (RAG)** to parse long-form transcripts and extract **timestamped action items**.
  - **Speaker-turn sliding window chunking** and **hybrid retrieval**: BM25 sparse lexical search plus dense vector similarity over a Pinecone index.
  - **Cross-encoder re-ranking** to prune retrieval noise, cutting context token overhead by **42%** and lifting factual answer relevancy to **>94%** on semantic QA benchmarks.
- **Problem statement:** `[TO FILL]`
- **Key decisions:** `[TO FILL: why speaker-turn chunking, why hybrid retrieval, why a cross-encoder]`
- **Benchmark detail:** `[TO FILL: which benchmark/dataset the >94% refers to, so it's defensible]`
- **Visuals:** `[TO FILL]`

### 5.3 BidBlitz
- **Dates:** Feb 2025 to April 2025
- **Live site:** `[TO FILL URL]` | **GitHub:** `[TO FILL URL]`
- **Pitch:** A real-time auction engine built to stay fast and correct under many simultaneous bidders.
- **Stack:** Node.js, Express.js, PostgreSQL, JWT, bcrypt
- **What it does / facts:**
  - High-concurrency auction engine on Node.js, Express and PostgreSQL with **sub-200 ms bid updates**, supporting **1,000+ concurrent simulated requests**.
  - Secure authentication pipeline with **JWT** and **bcrypt salted hashing**.
  - Normalized relational schema with optimized indexing and foreign key constraints, reducing average query retrieval time by **35%**.
- **Problem statement:** `[TO FILL]`
- **Key decisions:** `[TO FILL: how concurrent bids are handled, e.g. transactions/locking]`
- **Visuals:** `[TO FILL]`

### Project order on the page
1. Tech Mahindra platform (as the experience-led hero case study, redrawn diagram only)
2. Meetlnk
3. TraceID
4. BidBlitz

Filter tabs are not needed with only 3 to 4 projects. Optionally tag as `AI / LLM`, `Full-stack`, `Backend`.

---

## 6. Skills

### As a flat list (from resume)
- **Languages:** Python, JavaScript, TypeScript, C, C++, HTML5/CSS3, SQL
- **Frameworks & technologies:** Next.js, React.js, Node.js, Express.js, Flask, FastAPI, Tailwind CSS, REST APIs, FaceNet, MTCNN, OpenCV, LangGraph, Kafka, OpenSearch, Neo4j, Docker, JWT Authentication
- **Databases & dev tools:** MongoDB, Mongoose, PostgreSQL, MySQL, Pinecone (vector DB), Cloudinary, Git, GitHub, GitHub Copilot, Postman, VS Code, Jupyter Lab, Poetry

### Grouped by where I actually used them (for the "link each skill to a project" idea)
| Skill group | Skills | Used in |
|---|---|---|
| AI / LLM systems | LangGraph, LangChain, OpenAI API, Pinecone, RAG, multi-agent orchestration | Tech Mahindra, Meetlnk |
| Computer vision | FaceNet, MTCNN, OpenCV | TraceID |
| Backend & APIs | FastAPI, Flask, Node.js, Express.js, REST APIs, JWT, bcrypt | Tech Mahindra, TraceID, Meetlnk, BidBlitz |
| Data & streaming | Kafka, OpenSearch, Neo4j, PostgreSQL | Tech Mahindra, TraceID, BidBlitz |
| Frontend | Next.js, React.js, Tailwind CSS, TypeScript | TraceID, Meetlnk |
| Testing & DevOps | WireMock, Docker, CI/CD, Git, GitHub, Postman | Tech Mahindra |
| Other databases (not tied to a listed project) | MongoDB, Mongoose, MySQL | `[TO FILL if tied to a project]` |

**Core CS foundation:** Data Structures and Algorithms, Operating Systems, Object Oriented Programming, Database Management Systems, Computer Architecture, Discrete Mathematics, Design of Digital Systems, Linear Algebra, Probability Theory and Statistics.

**Working style (soft skills, keep to one short line, not badges):** communication, public speaking, teamwork, problem solving, project management, adaptability.

> Do NOT render percentage proficiency bars. They are not backed by any data.

---

## 7. Timeline (education, work, achievements, leadership)

| When | Item | Detail |
|---|---|---|
| 2023 | JEE Mains 2023 | All India Rank **1883** out of 1M+ candidates |
| 2023 | JEE Advanced 2023 | All India Rank **2616** |
| Aug 2023 to Present | B.Tech CS, NITK | GPA 7.70 |
| Feb 2024 to Feb 2026 | Co-Convener, Yoga Club | Planned and ran club events and workshops; managed engagement for 150+ active members |
| Mar 2024 to Present | Event Planner & Publicity Coordinator, SPIC MACAY | Promotes India's cultural heritage through performances and workshops |
| Feb 2025 to Apr 2025 | BidBlitz | Auction engine project |
| May 2026 to Jul 2026 | SDE Intern, Tech Mahindra | AI observability platform |
| Jul 2026 to Aug 2026 | TraceID | Face-matching platform |
| Aug 2026 to Sept 2026 | Meetlnk | Meeting intelligence / RAG platform |
| Hackathons / certifications / publications | `[TO FILL: add any; the resume lists none]` |

---

## 8. Contact section

- **Headline idea:** "Have a system that's hard to debug or a problem with messy data? Let's talk."
- **Direct email:** sharmagirish0a26z@gmail.com (with copy-to-clipboard button and small toast)
- **Form:** name, email, message. Backend: `[TO FILL: Web3Forms / Resend key goes in env vars, never in client code]`
- **Social buttons:** GitHub, LinkedIn, `[Unstop]`

---

## 9. Resume hub
- In-site modal PDF viewer + download + print.
- File: `Girish_Sharma_Resume_2026.pdf` (under 5 MB).
- The resume content and the website content must match. If this file changes, the resume must be updated too.

---

## 10. SEO / metadata
- **Title:** Girish Sharma | Software Engineer: AI Systems, RAG & Backend
- **Description:** Computer Science student at NITK building multi-agent RCA, RAG and computer-vision systems. Ex-intern at Tech Mahindra. See projects and resume.
- **OG image:** 1200x630, name + one-line headline on the site's background style.
- **Keywords (natural, not stuffed):** Girish Sharma, NITK, software engineer, LangGraph, RAG, FastAPI, Next.js.
- **Person JSON-LD:** name, jobTitle, alumniOf NITK, sameAs [GitHub, LinkedIn].

---

## 11. Personality hooks (optional, only if I approve)
These come from real parts of my background, to avoid generic "easter eggs":
- A small yoga-inspired detail (e.g. a breathing-pace loading animation or a calm "pause" prompt).
- Cultural/SPIC MACAY motif in one decorative element (tasteful, not stereotyped).
- An "ask my resume" Ctrl+K command that jumps to sections, projects or copies email.
- A live "MTTR: 40 min → seconds" counter animation on the Tech Mahindra case study (uses only a real figure).

---

## 12. Flags to verify before publishing
1. **"Reducing session vulnerability by 100%"** (BidBlitz): not measurable or defensible. Suggest rewording to what was actually done, e.g. "added JWT auth with bcrypt-hashed passwords to protect bid and account routes." Confirm.
2. **"Zero-risk CI pipeline testing"** (WireMock): "zero-risk" is an overclaim. Suggest: "enabled safe CI testing without touching production services."
3. **"Meetlnk"** spelling: confirm it's not "Meetlink" or "MeetLnk".
4. **">94% relevancy on semantic QA benchmarks"** and **">96% retrieval accuracy"**: be ready to state the dataset/test used when asked.
5. **87% confidence** on the RCA engine: clarify in one line what "confidence" means (model score? validated outcomes?).
6. **TraceID**: face data about missing persons is sensitive; add one sentence on data handling and demo data used.
7. Phone number: avoid exposing it publicly in page text. Keep it in the PDF only.
8. Confirm all three "Live Site" URLs are working and publicly accessible (no login), and that GitHub repos are public and have clean READMEs.
9. The old portfolio website is unrelated: do not reuse its content or code.
10. Tech Mahindra: check that I'm allowed to publicly describe this work at this level of detail.
