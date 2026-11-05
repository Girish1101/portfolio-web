export interface Metric {
  label: string;
  value: string;
}

export interface ProjectArchitecture {
  pipeline: string[];
  problem: string;
  myRole: string;
  keyDecisions: string[];
  results: string[];
  confidentialityNote?: string;
  ethicsNote?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI & Distributed Systems" | "GenAI & RAG" | "Computer Vision & Search" | "High-Concurrency Backend";
  period: string;
  technologies: string[];
  metrics: Metric[];
  bulletPoints: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  architecture: ProjectArchitecture;
}

export interface WorkExperience {
  company: string;
  role: string;
  location?: string;
  period: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
  metrics: Metric[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa: string;
  coursework: string[];
}

export interface Achievement {
  title: string;
  rank: string;
  context: string;
  year: string;
  badge: string;
}

export interface Leadership {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; projectContext?: string; highlight?: string }[];
}

export const resumeData = {
  personal: {
    name: "Girish Sharma",
    headline: "Software engineer (CS undergraduate) building AI-driven backend systems and full-stack products",
    institution: "National Institute of Technology Karnataka (NITK), Surathkal",
    degree: "B.Tech in Computer Science, Aug 2023 to Present",
    gpa: "7.70 / 10.0",
    email: "sharmagirish0a26z@gmail.com",
    phone: "8949758239",
    location: "Surathkal, Karnataka, India",
    availability: "Open to SDE & AI Systems Engineering roles",
    currently: "Exploring distributed consensus (Raft/Paxos) in Rust & structured multi-agent memory patterns.",
    socials: {
      github: "https://github.com/Girish1101",
      linkedin: "https://www.linkedin.com/in/girish-sharma-sde/",
      email: "mailto:sharmagirish0a26z@gmail.com",
    },
    bio: [
      "I'm a Computer Science student at NITK Surathkal who likes problems where the data is messy and the answer has to be fast.",
      "This summer I interned at Tech Mahindra, where I built an AI observability platform that parses logs, detects anomalies, and traces root causes through a knowledge graph.",
      "Outside work I've built a face-matching tool for missing-person dossiers, a RAG system that pulls action items out of meeting transcripts, and a high-concurrency auction backend.",
      "Away from the terminal, I co-convened the college Yoga Club (150+ members) and coordinate cultural performances with SPIC MACAY NITK.",
    ],
  },

  education: {
    institution: "National Institute of Technology Karnataka (NITK), Surathkal",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "Aug 2023 – Present",
    gpa: "7.70",
    coursework: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Object Oriented Programming",
      "Computer Architecture",
      "Discrete Mathematics",
      "Design of Digital Systems",
      "Linear Algebra",
      "Probability Theory and Statistics",
    ],
  } as Education,

  experience: [
    {
      company: "Tech Mahindra",
      role: "Software Engineering Intern (SDE)",
      period: "May 2026 – July 2026",
      summary: "Architected an end-to-end AI-driven observability platform automating log parsing, real-time anomaly detection, and incident remediation across distributed systems.",
      metrics: [
        { label: "Incident MTTR Reduction", value: "40m → seconds" },
        { label: "Requests Monitored", value: "1.12M+" },
        { label: "RCA Confidence Score", value: "87%" },
        { label: "CI Check Pass Rate", value: "94.6%" },
      ],
      bulletPoints: [
        "Architected an end-to-end AI-driven observability platform using FastAPI and Kafka, automating log parsing, real-time anomaly detection, and incident remediation across distributed systems.",
        "Built an autonomous Root-Cause Analysis (RCA) engine using LangGraph multi-agent orchestration and a Neo4j knowledge graph, reducing MTTR from 40+ minutes to seconds across 1.12M+ requests (87% confidence).",
        "Developed a self-monitoring telemetry framework with 14 real-time health detectors and secure data masking/demasking modules to monitor LLM gateways, vector indices, and relational databases.",
        "Built a WireMock service-virtualization suite of 43 calibrated stubs from 1.5M+ production logs, enabling calibrated CI pipeline testing under 400 requests/sec with a 94.6% pass rate across 160k+ checks without touching production services.",
      ],
      technologies: [
        "LangGraph",
        "FastAPI",
        "Kafka",
        "Neo4j",
        "OpenSearch",
        "WireMock",
        "Docker",
        "Multi-Agent Systems",
        "CI/CD",
        "RCA Automation",
      ],
    },
  ] as WorkExperience[],

  projects: [
    {
      id: "tech-mahindra-rca",
      title: "AI Observability & Autonomous RCA Platform",
      tagline: "Autonomous Multi-Agent Incident Root-Cause Engine on Kafka & Neo4j",
      category: "AI & Distributed Systems",
      period: "May 2026 – July 2026",
      featured: true,
      technologies: ["LangGraph", "FastAPI", "Kafka", "Neo4j", "OpenSearch", "WireMock", "Docker"],
      metrics: [
        { label: "MTTR Incident Reduction", value: "40m → seconds" },
        { label: "Production Requests", value: "1.12M+" },
        { label: "Causal Confidence", value: "87%" },
      ],
      bulletPoints: [
        "Architected real-time log ingestion and anomaly detection pipeline using FastAPI and Kafka streaming.",
        "Constructed Neo4j dependency graphs to model microservice topology and causal blast radiuses.",
        "Designed LangGraph state machine agents for autonomous hypothesis testing and remediation playbooks.",
      ],
      architecture: {
        problem: "During cloud microservice outages, engineers spent 40+ minutes wading through disconnected logs and service traces to isolate the faulty upstream dependency.",
        myRole: "Sole SDE intern responsible for designing the streaming ingestion pipeline, knowledge graph schema, and multi-agent RCA decision engine.",
        pipeline: [
          "Distributed Microservice Logs & Traces",
          "Apache Kafka Streaming Ingestion (High-Throughput)",
          "FastAPI Telemetry Worker & Anomaly Detection",
          "Neo4j Causal Graph Modeling (Topology & Blast Radius)",
          "LangGraph Multi-Agent Orchestrator (Hypothesis & Verification)",
          "Automated Incident Remediation Report (<10s)",
        ],
        keyDecisions: [
          "Chose LangGraph over naive autonomous loops to ensure deterministic state transitions and finite termination.",
          "Modeled service dependencies in Neo4j to query 3-hop topological downstream impacts with sub-10ms graph traversals.",
          "Calibrated 43 WireMock stubs from 1.5M+ logs to stress-test CI at 400 req/sec without risking production state.",
        ],
        results: [
          "Reduced MTTR from 40+ minutes to seconds across 1.12M+ production requests.",
          "Achieved 87% causal determination confidence on real failure modes.",
          "94.6% pass rate over 160k+ automated verification checks.",
        ],
        confidentialityNote: "Built as industrial intern work at Tech Mahindra. Architectural overview generalized to protect proprietary system names and enterprise configurations.",
      },
    },
    {
      id: "traceid",
      title: "TraceID",
      tagline: "Investigative Facial Landmarking & Vector Similarity Retrieval Engine",
      category: "Computer Vision & Search",
      period: "July 2026 – Aug 2026",
      featured: true,
      technologies: ["Next.js", "Python Flask", "PostgreSQL (Neon)", "FaceNet", "MTCNN"],
      metrics: [
        { label: "Candidate Retrieval Accuracy", value: ">96%" },
        { label: "Query Search Latency", value: "<120ms" },
        { label: "Feature Embedding", value: "512-dim L2" },
      ],
      bulletPoints: [
        "Full-stack investigative platform cross-referencing field photography against missing-person dossiers using multi-box face detection and vector similarity matching.",
        "Connected Next.js frontend to Python Flask microservices for real-time MTCNN facial landmarking and 512-dimensional FaceNet embeddings stored in Neon PostgreSQL.",
        ">96% candidate retrieval accuracy and <120ms per query search latency through L2-normalized feature vector indexing.",
      ],
      liveUrl: "https://girish1101.github.io/TraceID/",
      githubUrl: "https://github.com/Girish1101/traceid",
      architecture: {
        problem: "Investigative field photos suffer from severe lighting variation, tilt angles, and noise, causing standard Euclidean comparisons to fail or produce high query latency (>1.8s) across large dossier collections.",
        myRole: "Full-stack architect: built the MTCNN alignment pipeline, FaceNet embedding service, PostgreSQL pgvector index, and responsive Next.js client.",
        pipeline: [
          "Field Photograph Upload (Next.js)",
          "Python Flask Microservice Processing",
          "MTCNN Multi-Box Face Detection & Landmark Alignment",
          "512-Dimensional FaceNet Deep Feature Extraction",
          "L2-Normalization for Inner Product Cosine Equivalence",
          "Neon PostgreSQL Inverted Vector Index Matching (<120ms)",
        ],
        keyDecisions: [
          "Integrated MTCNN landmark alignment prior to embedding generation to normalize head yaw and pitch variance.",
          "Strict L2 vector normalization allows inner product indexing in PostgreSQL to mirror exact cosine distance with O(log N) speed.",
          "Decoupled heavy deep learning microservices from client-facing Next.js UI using async background jobs.",
        ],
        results: [
          ">96% candidate retrieval accuracy on verified dossier evaluation splits.",
          "<120ms query latency maintained across thousands of high-resolution indexed dossiers.",
        ],
        ethicsNote: "Designed strictly for missing-person search and humanitarian case matching on verified, opt-in/public benchmarks. Built with rigorous access control and data minimization.",
      },
    },
    {
      id: "meetlnk",
      title: "Meetlnk",
      tagline: "Meeting Intelligence & RAG Platform with Hybrid BM25 & Dense Search",
      category: "GenAI & RAG",
      period: "Aug 2026 – Sept 2026",
      featured: true,
      technologies: ["FastAPI", "Python", "LangChain", "Pinecone", "OpenAI API", "Next.js"],
      metrics: [
        { label: "Context Token Pruning", value: "42%" },
        { label: "Semantic QA Relevancy", value: ">94%" },
        { label: "Retrieval Architecture", value: "Hybrid BM25 + Dense" },
      ],
      bulletPoints: [
        "End-to-end meeting intelligence platform leveraging RAG to parse long conversation transcripts and extract timestamped action items.",
        "Implemented speaker-turn sliding window chunking and hybrid retrieval: BM25 sparse lexical search plus dense vector similarity over Pinecone.",
        "Cross-encoder re-ranking to prune retrieval noise, cutting context token overhead by 42% and lifting factual answer relevancy to >94% on semantic QA benchmarks.",
      ],
      liveUrl: "https://girish1101.github.io/Meetlnk/",
      githubUrl: "https://github.com/Girish1101/meetlnk",
      architecture: {
        problem: "Standard naive fixed-token chunking destroys conversational context in multi-party meetings, losing speaker attribution and filling prompt windows with irrelevant banter.",
        myRole: "Designed the ingestion parser, hybrid retrieval pipeline, re-ranking scoring layer, and Next.js transcript viewer interface.",
        pipeline: [
          "Raw Meeting Audio / Transcript Ingestion",
          "Speaker-Turn Sliding Window Chunking (Preserves Dialogue Context)",
          "Dual Indexing: BM25 Lexical + Pinecone Dense Embeddings",
          "Cross-Encoder Re-Ranking Stage (Top-15 to Top-5 Relevancy)",
          "OpenAI API Prompt Synthesis with Timestamp Attribution",
        ],
        keyDecisions: [
          "Employed speaker-turn segmentation instead of naive 500-token cuts to prevent dialogue fragmentation.",
          "Paired BM25 for precise acronym/name recall with dense embeddings for conceptual thematic search.",
          "Applied a cross-encoder model to compute joint query-context attention before LLM injection, cutting 42% token cost.",
        ],
        results: [
          "42% reduction in prompt token consumption compared to un-reranked vector baselines.",
          ">94% factual relevancy achieved on evaluated transcript question-answering benchmark sets.",
          "Sub-second semantic search over 2-hour long recorded meetings.",
        ],
      },
    },
    {
      id: "bidblitz",
      title: "BidBlitz",
      tagline: "High-Concurrency Real-Time Auction & Bidding Engine",
      category: "High-Concurrency Backend",
      period: "Feb 2025 – April 2025",
      featured: true,
      technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "bcrypt"],
      metrics: [
        { label: "Bid Update Latency", value: "<200ms" },
        { label: "Concurrent Stress Load", value: "1,000+ reqs" },
        { label: "Query Retrieval Optimization", value: "35% faster" },
      ],
      bulletPoints: [
        "High-concurrency auction engine on Node.js, Express, and PostgreSQL with sub-200ms bid updates, supporting 1,000+ concurrent simulated requests.",
        "Secure authentication pipeline with JWT and bcrypt salted hashing to safeguard bid submissions and account state.",
        "Normalized relational schema with optimized indexing and foreign key constraints, reducing average query retrieval time by 35%.",
      ],
      liveUrl: "https://dbms-taupe-iota.vercel.app/",
      githubUrl: "https://github.com/Girish1101/bidblitz",
      architecture: {
        problem: "Simultaneous bids arriving in the final seconds of an auction trigger race conditions, double incrementation, and connection starvation if not handled with strict transactional isolation.",
        myRole: "Engineered the Node.js auction state machine, database transaction locking protocol, and WebSocket broadcast manager.",
        pipeline: [
          "Incoming Bid Submission (WebSocket / REST)",
          "JWT & Bcrypt Authentication Verification",
          "PostgreSQL Serializable Transaction with Row Locking",
          "Atomic Bid Validation (Check > Current + Min Increment)",
          "State Update & Immediate Peer Broadcast (<200ms)",
        ],
        keyDecisions: [
          "Used row-level locks (`SELECT ... FOR UPDATE`) within serializable transactions to guarantee zero phantom overwrites.",
          "Indexed relational schema on `(auction_id, bid_amount)` compound keys to optimize high-velocity ledger updates.",
          "Integrated bcrypt password hashing with salt factor 10 to ensure cryptographically secure account authentication.",
        ],
        results: [
          "Maintained <200ms bid updates under simulated loads of 1,000+ concurrent bidders.",
          "Zero race condition anomalies or duplicate highest bids detected across stress test runs.",
          "Reduced average query retrieval time by 35% through targeted database indexing.",
        ],
      },
    },
  ] as Project[],

  groupedSkills: [
    {
      category: "AI / LLM Systems & Agents",
      description: "Orchestration, vector search, RAG pipelines, and multi-agent knowledge systems.",
      skills: [
        { name: "LangGraph", projectContext: "Tech Mahindra (Multi-Agent RCA)", highlight: "State Machines & Graph Execution" },
        { name: "LangChain", projectContext: "Meetlnk", highlight: "RAG Pipeline Composition" },
        { name: "Pinecone", projectContext: "Meetlnk", highlight: "Dense Vector Indexing" },
        { name: "RAG Systems", projectContext: "Meetlnk", highlight: "Hybrid Retrieval & Re-ranking" },
        { name: "Multi-Agent Orchestration", projectContext: "Tech Mahindra", highlight: "Hypothesis Verification" },
        { name: "OpenAI API", projectContext: "Meetlnk", highlight: "Structured Extraction & Reasoning" },
      ],
    },
    {
      category: "Computer Vision & Embeddings",
      description: "Facial landmarking, deep feature embedding, and vector similarity indexing.",
      skills: [
        { name: "FaceNet", projectContext: "TraceID", highlight: "512-dim Normalized Embeddings" },
        { name: "MTCNN", projectContext: "TraceID", highlight: "Multi-box Facial Alignment" },
        { name: "OpenCV", projectContext: "TraceID", highlight: "Image Preprocessing & Transforms" },
      ],
    },
    {
      category: "Backend & Distributed Systems",
      description: "High-throughput APIs, streaming event buses, and concurrent architectures.",
      skills: [
        { name: "FastAPI", projectContext: "Tech Mahindra & Meetlnk", highlight: "Async Endpoints & Workers" },
        { name: "Kafka", projectContext: "Tech Mahindra", highlight: "Log Streaming & Event Bus" },
        { name: "Node.js & Express", projectContext: "BidBlitz", highlight: "Concurrent Event Loop" },
        { name: "Flask", projectContext: "TraceID", highlight: "Microservice Ingestion" },
        { name: "REST APIs", projectContext: "All Projects", highlight: "Contract Design & JSON Schemas" },
        { name: "JWT & Bcrypt", projectContext: "BidBlitz", highlight: "Stateful / Stateless Auth" },
      ],
    },
    {
      category: "Data Infrastructure & Knowledge Graphs",
      description: "Relational, graph, and vector storage engines optimized for low-latency queries.",
      skills: [
        { name: "Neo4j", projectContext: "Tech Mahindra", highlight: "Causal Dependency Graphs" },
        { name: "PostgreSQL", projectContext: "TraceID & BidBlitz", highlight: "pgvector & Serialized Locks" },
        { name: "OpenSearch", projectContext: "Tech Mahindra", highlight: "Log Search & Aggregations" },
        { name: "MongoDB & MySQL", projectContext: "Coursework / Standalone", highlight: "Document & Relational Stores" },
      ],
    },
    {
      category: "Frontend & Interface Engineering",
      description: "Type-safe interfaces, modern CSS architectures, and performant user experiences.",
      skills: [
        { name: "Next.js 14/15", projectContext: "TraceID & Meetlnk", highlight: "App Router, SSR & Client State" },
        { name: "React.js", projectContext: "All Projects", highlight: "Hooks, Context & Motion" },
        { name: "TypeScript", projectContext: "All Projects", highlight: "Strict Interfaces & Contracts" },
        { name: "Tailwind CSS", projectContext: "All Projects", highlight: "Design Tokens & Responsive Grids" },
      ],
    },
    {
      category: "Testing, DevOps & Tooling",
      description: "Service virtualization, containerization, and automated CI pipelines.",
      skills: [
        { name: "WireMock", projectContext: "Tech Mahindra", highlight: "43 Calibrated Stubs at 400 req/s" },
        { name: "Docker", projectContext: "Tech Mahindra", highlight: "Containerized Orchestration" },
        { name: "Git & GitHub", projectContext: "All Projects", highlight: "Version Control & Workflows" },
        { name: "CI / CD", projectContext: "Tech Mahindra", highlight: "Automated Pipeline Quality Gates" },
        { name: "Postman & Poetry", projectContext: "All Projects", highlight: "API Testing & Dependency Control" },
      ],
    },
  ] as SkillCategory[],

  achievements: [
    {
      title: "JEE Mains 2023",
      rank: "AIR 1883",
      context: "Secured All India Rank 1883 out of more than 1,000,000 nationwide candidates (Top 0.18%).",
      year: "2023",
      badge: "National Top 0.18%",
    },
    {
      title: "JEE Advanced 2023",
      rank: "AIR 2616",
      context: "Qualified All India Rank 2616 for the premier Indian Institutes of Technology (IITs).",
      year: "2023",
      badge: "Premier Ranker",
    },
  ] as Achievement[],

  leadership: [
    {
      role: "Event Planner & Publicity Coordinator",
      organization: "SPIC MACAY, NITK Chapter",
      period: "March 2024 – Present",
      description: "Promotes India's cultural heritage through concerts, masterclasses, and classical art performances on campus.",
    },
    {
      role: "Co-Convener",
      organization: "Yoga Club, NIT Karnataka",
      period: "Feb 2024 – Feb 2026",
      description: "Planned and coordinated club events and wellness workshops, driving engagement for 150+ active campus members.",
    },
  ] as Leadership[],
};
