# Girish Sharma — Portfolio Content

> **Source of Truth for All Portfolio Copy**
>
> - This document is the single authoritative reference for all text, facts, and figures on the portfolio site.
> - Do **not** invent metrics, testimonials, companies, project details, or personal information.
> - Items marked `[TO FILL]` are pending — leave a visible `TODO` in code comments and keep those elements hidden until confirmed.
> - **Tone:** Specific, concrete, first-person, technically precise. Avoid buzzwords such as "passionate", "crafting digital experiences", or "building the future."

---

## 1. Identity

| Field | Value |
|---|---|
| Full Name | Girish Sharma |
| Role / Headline | Software Engineer (CS Undergraduate) — AI-driven backend systems and full-stack products |
| Focus Areas | AI/LLM systems (RAG, multi-agent orchestration), distributed backend systems, full-stack web |
| Institution | National Institute of Technology Karnataka (NITK), Surathkal |
| Degree | B.Tech in Computer Science Engineering, Aug 2023 – Present |
| GPA | 7.70 / 10.00 |
| Email | sharmagirish0a26z@gmail.com |
| Phone | 8949758239 — reveal only on explicit click-to-reveal; never expose in page source |
| Location | Surathkal, Karnataka, India |
| Availability | `[TO FILL: e.g. Open to SDE internships / full-time roles from <Month Year>]` |
| Photo | `/photo.webp` |

### Social & Professional Links

| Platform | URL |
|---|---|
| GitHub | https://github.com/Girish1101 |
| LinkedIn | https://www.linkedin.com/in/girish-sharma-sde/ |
| Unstop | `[TO FILL]` |
| Resume PDF | `/Girish_Sharma_Resume_2026.pdf` |

---

## 2. Hero Section

### Headline Options _(pick one)_

1. "I build AI systems that find the root cause in seconds, not 40 minutes."
2. "Software engineer working on LLM agents, vector search, and backends that stay up under load."
3. "I turn messy logs, transcripts, and photographs into answers — multi-agent RCA, RAG, and face search."

### Sub-line
> Computer Science at NITK Surathkal. Recently engineered an AI observability platform at Tech Mahindra, cutting incident MTTR from 40+ minutes to seconds through multi-agent causal graphs.

### Primary CTAs
- **See Selected Work** → anchor to `#work`
- **Resume** → opens the resume modal (PDF viewer + download)

---

## 3. About Section

I am a Computer Science student at NITK Surathkal, drawn to problems where the data is messy and the answer has to be fast. This past summer I interned at Tech Mahindra, where I built an AI observability platform that parses distributed system logs, detects anomalies, and traces root causes through a knowledge graph — reducing incident MTTR from 40+ minutes to seconds.

Outside of work, I have shipped a facial-recognition platform to assist missing-person investigations, a retrieval-augmented generation system that surfaces timestamped action items from meeting transcripts, and a high-concurrency auction backend built for correctness under load.

Away from the keyboard, I co-convened the Yoga Club at NITK and coordinate cultural events with SPIC MACAY, an organization that promotes India's classical arts.

`[TO FILL: 1–2 personal lines — what you are exploring now, what you enjoy building, or something non-technical.]`

**"Currently" line:** `[TO FILL: e.g. "Currently exploring agentic memory architectures and graph-based retrieval."]`

---

## 4. Experience

### Software Engineering Intern — Tech Mahindra
**May 2026 – July 2026**

**One-line pitch:** An AI-driven observability platform that detects incidents and autonomously identifies their root cause across distributed systems.

**Highlights:**
- Architected an end-to-end AI observability platform using **FastAPI** and **Kafka**, automating log parsing, real-time anomaly detection, and incident remediation across distributed microservices.
- Built an autonomous **Root-Cause Analysis (RCA) engine** using **LangGraph** multi-agent orchestration and a **Neo4j** knowledge graph, reducing MTTR from **40+ minutes to seconds** at **87% confidence** across **1.12M+ requests**.
- Developed a self-monitoring telemetry framework with **14 real-time health detectors** and secure data masking/de-masking modules covering LLM gateways, vector indices, and relational databases.
- Built a **WireMock** service-virtualization suite of **43 calibrated stubs** derived from **1.5M+ production logs**, enabling CI pipeline testing at **400 req/sec** with a **94.6% pass rate across 160k+ checks**.

**Stack:** LangGraph · FastAPI · Kafka · Neo4j · OpenSearch · WireMock · Docker · Multi-Agent Systems · CI/CD

> **Confidentiality:** This is proprietary company work. Architecture diagrams must be redrawn generically. Do not include internal names, client details, or screenshots of internal tooling.

---

## 5. Projects

> Each case-study page should include: pitch, problem statement, role, architecture, key decisions, results, stack, and links. Fields not yet provided are marked `[TO FILL]`.

---

### 5.1 TraceID
**Jul 2026 – Aug 2026**
**Live Site:** https://girish1101.github.io/TraceID/ | **GitHub:** https://github.com/Girish1101/TraceID

**Pitch:** An AI-powered investigative platform that assists missing-person investigations by matching field photographs against registered case dossiers using facial detection and 512-dimensional facial embeddings.

**Problem Statement:** Missing-person investigations require investigators to manually cross-reference photographs gathered in the field against existing case records — a process that scales poorly when images contain multiple individuals. TraceID automates face detection, feature extraction, and candidate retrieval through a centralized platform, allowing investigators to focus on verification rather than manual search.

**Stack:** Next.js · Python Flask · PostgreSQL (Neon) · FaceNet · MTCNN · OpenCV

**What it does:**
- Full-stack investigative platform that cross-references field photography against missing-person dossiers using **multi-box face detection** and **vector similarity matching**.
- Next.js frontend connected to **Python Flask microservices** handling real-time **MTCNN** facial landmarking and **512-dimensional FaceNet embeddings**, persisted in a **Neon PostgreSQL** database.
- Achieves **>96% candidate retrieval accuracy** and **<120 ms per-query latency** through **L2-normalized feature vector indexing**.

**Key Decisions:**
| Decision | Rationale |
|---|---|
| Microservices for ML workloads | Isolated face detection and embedding extraction into separate Flask services to simplify maintenance and independent scaling |
| L2 normalization | Normalizes embeddings to unit length so comparisons focus on feature direction rather than vector magnitude |
| Cosine similarity | Measures angular distance between embeddings to rank candidates by facial similarity |
| PostgreSQL (Neon) | Chosen for structured case records, dossier metadata, and persistent embedding storage |
| Multi-face MTCNN detection | Supports photographs containing multiple individuals rather than restricting to single-person portraits |

**Ethics & Privacy Note:** Facial embeddings are sensitive biometric data. TraceID is designed as an investigative *assistance* tool, not an autonomous identification system. Search results are candidate leads, not confirmed identities — independent verification by qualified investigators is required before any official action. The platform enforces encrypted embedding storage, audit-logged search queries, and access restrictions. Only authorized case photographs should be enrolled, with defined retention limits and deletion procedures.

**Visuals:** `[TO FILL: screenshots or short GIF demo]`

---

### 5.2 Meetlnk
**Aug 2026 – Sep 2026**
**Live Site:** https://girish1101.github.io/Meetlnk/ | **GitHub:** https://github.com/Girish1101/Meetlnk

**Pitch:** A meeting intelligence platform that transforms long-form meeting transcripts into searchable, structured knowledge with timestamped action items.

**Problem Statement:** Long meetings generate high volumes of conversation, decisions, and follow-up tasks that become difficult to revisit. Manually searching transcripts for specific discussions, decisions, or assigned responsibilities is inefficient and error-prone. Meetlnk converts meeting content into structured, queryable knowledge and provides conversational access with source references.

**Stack:** FastAPI · Python · LangChain · Pinecone · OpenAI API · Next.js · PostgreSQL

**What it does:**
- End-to-end meeting intelligence platform using **Retrieval-Augmented Generation (RAG)** to parse long-form transcripts and extract **timestamped action items**.
- Implements **speaker-turn sliding window chunking** and **hybrid retrieval**: BM25 sparse lexical search combined with dense vector similarity over a Pinecone index.
- Applies **cross-encoder re-ranking** to prune retrieval noise, reducing context token overhead by **42%** and lifting factual answer relevancy to **>94%** on semantic QA benchmarks.

**Key Decisions:**
| Decision | Rationale |
|---|---|
| Speaker-aware chunking | Preserves speaker identities, utterance boundaries, and timestamps to maintain conversational context |
| LangGraph processing pipeline | Separates transcript analysis into specialized stages: key-moment extraction, topic segregation, summarization, and insight generation |
| PostgreSQL + pgvector | Stores structured meeting records and semantic embeddings within a single database layer |
| Semantic retrieval (MiniLM) | Retrieves conceptually relevant information using cosine similarity over dense embeddings |
| Complementary lexical search | Exact-keyword search for names, acronyms, and phrases that semantic retrieval may miss |
| Context-aware retrieval | Fetches surrounding utterances when broader conversational context is needed |

> **Benchmark note:** The claimed >94% answer relevancy and 42% context token reduction should not be advertised until validated through a documented evaluation methodology and reproducible results.

**Visuals:** `[TO FILL]`

---

### 5.3 BidBlitz
**Feb 2025 – Apr 2025**
**Live Site:** https://dbms-taupe-iota.vercel.app/ | **GitHub:** https://github.com/praveenyadav2005/DBMS

**Pitch:** A real-time auction engine built for correctness and performance under high concurrency.

**Problem Statement:** Traditional auction platforms struggle to maintain data consistency and sub-second responsiveness when many bidders interact simultaneously. BidBlitz addresses this with a backend designed for high-concurrency workloads, real-time bid broadcasting, and strict relational integrity across auction state.

**Stack:** Node.js · Express.js · PostgreSQL · Socket.IO · JWT · bcrypt

**What it does:**
- High-concurrency auction engine on Node.js, Express, and PostgreSQL delivering **sub-200 ms bid updates** under **1,000+ concurrent simulated requests**.
- Secure authentication pipeline using **JWT access/refresh tokens** (HTTP-only cookies) and **bcrypt salted password hashing** (10 salt rounds).
- Normalized relational schema with optimized indexing and referential integrity constraints, reducing average query retrieval time by **35%**.

**Key Decisions:**
| Decision | Rationale |
|---|---|
| PostgreSQL relational schema | Maintains structured relationships between users, auctions, bids, and favorites with full referential integrity |
| Targeted indexing | Indexes on frequently queried fields (user email, auction status, seller ID, bid auction ID, bidder ID) |
| Foreign keys + constraints | Enforces data consistency through FK constraints, unique constraints, and check constraints |
| JWT auth (HTTP-only cookies) | Stateless, tamper-resistant session management; prevents XSS token theft |
| bcrypt (10 rounds) | Industry-standard salted hashing for password storage |
| Socket.IO rooms | Per-auction event broadcasting for real-time bid and status updates |
| Bid validation | Checks auction timing windows, prevents self-bidding by sellers, and validates bid amounts against current price |

**Visuals:** `[TO FILL]`

---

### Project Display Order
1. **Tech Mahindra** — AI Observability Platform (experience-led hero case study; use redrawn architecture diagram only)
2. **Meetlnk** — Meeting Intelligence / RAG
3. **TraceID** — Facial Recognition for Investigations
4. **BidBlitz** — High-Concurrency Auction Engine

> Tag options: `AI / LLM` · `Computer Vision` · `Full-Stack` · `Backend`

---

## 6. Skills

### Programming Languages
Python · JavaScript · TypeScript · C · C++ · SQL · HTML5/CSS3

### Frameworks & Technologies
Next.js · React.js · Node.js · Express.js · Flask · FastAPI · Tailwind CSS · LangGraph · LangChain · FaceNet · MTCNN · OpenCV · Kafka · OpenSearch · Neo4j · Docker · JWT Authentication · Socket.IO · REST APIs

### Databases & Dev Tools
PostgreSQL · MySQL · MongoDB · Pinecone (vector DB) · Cloudinary · Git · GitHub · Postman · VS Code · Jupyter Lab · Poetry

### Skills by Domain
| Domain | Skills | Used In |
|---|---|---|
| AI / LLM Systems | LangGraph, LangChain, OpenAI API, Pinecone, RAG, multi-agent orchestration | Tech Mahindra, Meetlnk |
| Computer Vision | FaceNet, MTCNN, OpenCV | TraceID |
| Backend & APIs | FastAPI, Flask, Node.js, Express.js, REST APIs, JWT, bcrypt | Tech Mahindra, TraceID, Meetlnk, BidBlitz |
| Data & Streaming | Kafka, OpenSearch, Neo4j, PostgreSQL | Tech Mahindra, TraceID, BidBlitz |
| Frontend | Next.js, React.js, Tailwind CSS, TypeScript | TraceID, Meetlnk |
| Testing & DevOps | WireMock, Docker, CI/CD, Git, GitHub, Postman | Tech Mahindra |
| Other Databases | MongoDB, Mongoose, MySQL | `[TO FILL: link to specific project if applicable]` |

### Core CS Foundation
Data Structures & Algorithms · Operating Systems · Object-Oriented Programming · Database Management Systems · Computer Architecture · Discrete Mathematics · Digital Systems Design · Linear Algebra · Probability & Statistics

> **Do not** render percentage proficiency bars — they are not grounded in any objective data.

---

## 7. Timeline

| When | Item | Detail |
|---|---|---|
| 2023 | JEE Mains | All India Rank **1883** out of 1M+ candidates (Top 0.18%) |
| 2023 | JEE Advanced | All India Rank **2616** |
| Aug 2023 – Present | B.Tech CS, NITK Surathkal | GPA 7.70 / 10.00 |
| Feb 2024 – Feb 2026 | Co-Convener, Yoga Club, NITK | Planned and ran workshops and wellness events; managed engagement for 150+ active members |
| Mar 2024 – Present | Event Planner & Publicity Coordinator, SPIC MACAY NITK | Promotes India's classical arts heritage through live performances and workshops |
| Feb 2025 – Apr 2025 | BidBlitz | High-concurrency auction engine |
| May 2026 – Jul 2026 | SDE Intern, Tech Mahindra | AI observability and RCA platform |
| Jul 2026 – Aug 2026 | TraceID | AI-powered facial recognition for missing-person investigations |
| Aug 2026 – Sep 2026 | Meetlnk | Meeting intelligence / RAG platform |
| Hackathons / Certifications / Publications | `[TO FILL: add any relevant entries]` | |

---

## 8. Contact Section

**Headline:** "Have a system that's hard to debug or messy data to make sense of? Let's talk."

**Sub-copy:** Open to software engineering roles, distributed systems discussions, and AI engineering opportunities.

**Direct Email:** sharmagirish0a26z@gmail.com (with one-click copy-to-clipboard and toast confirmation)

**Contact Form Fields:** Name · Email · Message

**Form Backend:** `[TO FILL: Web3Forms / Resend API key — store in environment variables, never in client code]`

**Social Links:** GitHub · LinkedIn · `[Unstop — TO FILL]`

---

## 9. Resume Hub

- In-site modal with PDF viewer, download button, and print option.
- File: `Girish_Sharma_Resume_2026.pdf` (keep under 5 MB).
- The resume content and portfolio content must remain in sync. If the PDF is updated, verify all metrics and facts match this document.

---

## 10. SEO & Metadata

| Field | Value |
|---|---|
| `<title>` | Girish Sharma \| Software Engineer — AI Systems, RAG & Backend |
| Meta description | Computer Science student at NITK Surathkal building multi-agent RCA, RAG, and computer-vision systems. SDE intern at Tech Mahindra. View projects and resume. |
| OG image | 1200×630px — name + one-line headline on the site's dark background style |
| Keywords | Girish Sharma, NITK, software engineer, LangGraph, RAG, FastAPI, Next.js, AI systems |
| JSON-LD (Person) | name, jobTitle, alumniOf: NITK, sameAs: [GitHub, LinkedIn] |

---

## 11. Personality Hooks _(use only if approved)_

These are grounded in real aspects of Girish's background — not generic easter eggs:

- **Breathing animation:** A subtle yoga-inspired box-breathing widget in the About section ("Mindful Cadence" — 4s inhale, 4s hold, 4s exhale, 4s hold).
- **SPIC MACAY motif:** A tasteful classical-arts-inspired decorative element in one section — not stereotyped.
- **Command palette (⌘K):** "Ask my resume" shortcut to jump between sections, projects, or copy the email address.
- **MTTR counter:** A live animated counter on the Tech Mahindra case study showing "40 min → seconds" using only the verified figure.

---

## 12. Flags to Verify Before Publishing

| # | Item | Status |
|---|---|---|
| 1 | **BidBlitz — "Reducing session vulnerability by 100%"**: not measurable. Reword to "added JWT auth with bcrypt-hashed passwords to protect bid and account routes." | Pending confirmation |
| 2 | **WireMock — "Zero-risk CI pipeline testing"**: overclaim. Reword to "enabled safe CI testing without touching production services." | Pending confirmation |
| 3 | **"Meetlnk" spelling**: confirm it is not "Meetlink" or "MeetLnk". | Pending confirmation |
| 4 | **Meetlnk — >94% relevancy and 42% token reduction**: be prepared to state dataset and evaluation methodology when asked. | Pending validation |
| 5 | **RCA engine — 87% confidence**: clarify in one sentence what "confidence" means (model score, validated outcomes, etc.). | Pending clarification |
| 6 | **TraceID**: add one sentence on demo data used and how production biometric data would be handled. | Pending confirmation |
| 7 | **Phone number**: keep out of page source and HTML. Surface only in the PDF or on explicit click-to-reveal. | Implemented |
| 8 | **Live site URLs**: confirm all three are publicly accessible (no login required) and GitHub repos have clean READMEs. | Pending verification |
| 9 | **Old portfolio**: unrelated — do not reuse any of its content or code. | N/A |
| 10 | **Tech Mahindra**: confirm you are permitted to publicly describe this work at this level of detail. | Pending confirmation |
