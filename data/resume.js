// Onkar Dubey - Professional Resume Data
export const resumeData = {
  personal: {
    name: "Onkar Dubey",
    title: "Enterprise and AI/LLM Solutions Architect",
    tagline: "Over a decade crafting AI products and delivering impactful enterprise solutions.",
    email: "Onkar032@gmail.com",
    phone: "+91 XXX XXX XXXX",
    location: "India",
    linkedin: "https://www.linkedin.com/in/onkar-dubey-10768275/",
    github: "https://github.com/onkar032"
  },

  about: {
    summary: `Distinguished AI Architect, GenAI Strategist, and Enterprise Architect with a decade of experience designing and scaling end-to-end AI ecosystems for Fortune 500 and global enterprise organizations. Renowned for architecting production-grade LLM platforms, advanced RAG pipelines, multi-agent systems, and intelligent automation frameworks that redefine operational performance across BFSI, aviation, retail, real estate, and pharmaceutical industries.`,
    
    summary2: `A trusted partner to C-suite executives and technology leadership, driving enterprise-wide AI transformation from strategic roadmap design and governance to engineering resilient, high-availability platforms deployed across AWS, Azure, and GCP. Combines deep engineering expertise in data platforms, vector databases, ML systems, workflow orchestration, and MLOps with strategic enterprise thinking around compliance, scale, and measurable business value.`,
    
    summary3: `Led 15+ enterprise AI transformation programs, delivering platforms that support millions of users and accelerate decision intelligence, efficiency, and automation across complex operations. Recognized for unifying AI strategy, architecture, and execution, enabling organizations to scale GenAI with reliability, security, and long-term architectural integrity.`,
    
    highlights: [
      "Trusted advisor to C-suite executives on enterprise AI transformation",
      "Architected production-grade LLM platforms & advanced RAG systems",
      "Led 15+ AI transformation programs serving millions of users",
      "Expert in multi-agent systems, vector databases & intelligent automation",
      "AWS, Azure & GCP certified across Solutions Architecture & AI"
    ],
    
    expertise: [
      { icon: "🎯", title: "AI Strategy", desc: "Enterprise roadmaps & governance" },
      { icon: "🏗️", title: "Architecture", desc: "Scalable AI ecosystems" },
      { icon: "⚙️", title: "Engineering", desc: "Production ML/LLM systems" },
      { icon: "☁️", title: "Cloud-Native", desc: "AWS, Azure, GCP platforms" },
    ]
  },

  experience: [
    {
      company: "Salesforce",
      position: "AI Architect",
      location: "India",
      duration: "June 2024 - Present",
      description: "Leading enterprise-scale GenAI initiatives and LLM integration across Salesforce ecosystem.",
      achievements: [
        "Delivered enterprise-scale LLM solutions using RAG, embeddings, vector search, and multi-cloud orchestration",
        "Designed AI workflows combining LLM APIs, data platforms, and document intelligence systems to automate verification, summarization, and decision-support processes",
        "Built prompt libraries, evaluation frameworks, safety guardrails, and governance models for secure enterprise LLM deployment",
        "Delivered GenAI-powered automation across core CRM, service, and sales processes including summaries, replies, routing, classification, and knowledge-grounded reasoning",
        "Engineered integrations using backend services, custom components, workflow engines, APIs, and event-driven architectures to support multichannel AI experiences",
        "Led enterprise AI deployment programs including onboarding, workshops, training, and value-realization initiatives",
        "Partnered with CXOs, IT leadership, engineering, and product teams to define AI roadmaps, governance structures, KPIs, and scale-up strategies",
        "Architected multi-system integrations supporting high-volume operations with improved accuracy and efficiency"
      ]
    },
    {
      company: "ZS Associates",
      position: "Business Technology Consultant",
      location: "India",
      duration: "Oct 2020 - June 2024",
      description: "Led cross-functional teams delivering AI, data, and technology solutions for enterprise clients.",
      achievements: [
        "Led cross-functional teams and supervised end-to-end delivery of client engagements, ensuring timely execution of analytical, AI, and technology initiatives",
        "Advised CXO-level stakeholders on AI, data, and GenAI strategy, shaping solution direction, feasibility, and roadmap",
        "Designed enterprise architectures covering data engineering, ML, and GenAI components tailored to client-specific business needs",
        "Provided expert guidance on AI/ML methodologies, model selection, algorithmic approaches, and best practices for scalable enterprise adoption",
        "Oversaw end-to-end implementation of AI and technology solutions, ensuring alignment with architectural standards, compliance, and engineering rigor",
        "Built custom integrations, automated data pipelines, ML workflows, MLOps processes, and predictive models to support mission-critical initiatives",
        "Developed scalable cloud-native components (AWS/Azure) facilitating data ingestion, model execution, orchestration, and performance optimization"
      ]
    },
    {
      company: "Evalueserve",
      position: "Assistant Manager",
      location: "India",
      duration: "Nov 2017 - Oct 2020",
      description: "Managed analytics and data science projects for global clients.",
      achievements: [
        "Led data analytics and business intelligence projects for Fortune 500 clients",
        "Developed predictive models and ML solutions for business forecasting and optimization",
        "Managed cross-functional teams delivering data-driven insights and reporting solutions",
        "Built ETL pipelines and data integration solutions using SQL, Python, and cloud platforms"
      ]
    },
    {
      company: "Stellarix Consultancy Services",
      position: "Senior Analyst",
      location: "India",
      duration: "May 2016 - Oct 2017",
      description: "Performed business analysis and data analytics for client engagements.",
      achievements: [
        "Conducted comprehensive business analysis and data analytics for strategic client projects",
        "Developed dashboards, reports, and visualization solutions using BI tools",
        "Performed statistical analysis and data modeling to support business decisions",
        "Collaborated with stakeholders to define requirements and deliver analytical insights"
      ]
    }
  ],

  skills: {
    "GenAI & LLMs": ["LLM Engineering", "RAG Systems", "Prompt Orchestration", "Vector Databases", "Multi-Agent Pipelines"],
    "AI/ML": ["Machine Learning", "NLP & Semantic Search", "Feature Engineering", "Model Optimization", "MLOps"],
    "Data Engineering": ["ETL / ELT", "Data Lakes / Lakehouses", "Streaming Pipelines", "Data Modeling", "Data Governance"],
    "Cloud & Architecture": ["AWS / Azure / GCP", "Serverless Architecture", "Microservices", "API-First Design", "Event-Driven Systems"],
    "Enterprise Architecture": ["Solution Architecture", "System Design", "Reference Architectures", "High Availability", "Integrations"],
    "Salesforce Platform": ["Service Cloud", "Sales Cloud", "Data Cloud", "Agentforce", "LLM Integration", "Apex Architecture", "Lightning Web Components", "Platform Events", "Flow Orchestration", "Omni-Channel", "Case Management", "API Integrations", "Event-Driven Architecture", "Salesforce Security", "Role & Sharing Models", "Named Credentials", "External Services", "MuleSoft Integration"],
    "Dashboards & BI": ["Tableau", "Power BI", "BI Modeling"],
    "Security & Governance": ["Responsible AI", "Data Security", "Compliance Frameworks", "Access Control"],
    "Leadership & Strategy": ["AI Strategy", "Product Thinking", "Requirements Analysis", "Stakeholder Leadership"]
  },

  projects: [
    {
      title: "Enterprise RAG System",
      description: "Production-grade Retrieval Augmented Generation system with document ingestion, semantic search, LLM integration, and embedded chat widget for intelligent Q&A.",
      tech: ["Python", "FastAPI", "ChromaDB", "Streamlit", "Next.js", "LangChain", "OpenAI", "Docker", "SentenceTransformers", "Ollama"],
      github: "https://github.com/onkar032/enterprise-rag-system",
      demo: "",
      highlights: [
        "Multi-source ingestion (PDFs, HTML, websites) with intelligent chunking and metadata extraction",
        "Advanced chunking strategies (recursive, semantic, fixed size) for improved retrieval quality",
        "Hybrid retrieval combining semantic search, MMR diversity, and cross-encoder reranking",
        "LLM generation via local (Ollama) or cloud (OpenAI) models with automatic citations",
        "Guardrails for PII detection, content filtering, and safety compliance",
        "Comprehensive evaluation framework using RAGAS metrics with observability and monitoring"
      ],
      businessContext: `Many organisations struggle with knowledge-access, unstructured data, slow manual workflows, and inability to surface relevant insights from large document repositories. The business objective was to enable a truly enterprise-grade GenAI solution that transforms document and knowledge workflows into scalable, automated, intelligent systems.

The goal was to deliver a product that could be adopted by large clients (for example in enterprise service, customer-support, sales knowledge, or internal knowledge-bases) and that could be integrated into CRM / service / product systems to drive value (e.g., faster response times, more accurate answers, reduced manual lookup efforts).

Key business outcomes targeted:

• Accelerated knowledge retrieval & summarisation from large document sets
• More accurate, context-rich answers (with citations) for decision support
• Reduced manual overhead (e.g., manual document search, client support, internal knowledge lookup)
• A foundation for future AI / GenAI / multi-agent enhancements within enterprise systems`,
      solutionOverview: `The Enterprise RAG System is a production-grade platform that bridges the gap between raw document/knowledge repositories and LLM-powered answer/insight systems. It combines ingestion, chunking, embeddings, vector search, hybrid retrieval, LLM generation, safety/guardrails, monitoring and API/UX infrastructure.

Key capabilities include:

Multi-source ingestion (PDFs, HTML, websites) → enabling enterprise content from many formats.

Advanced chunking strategies (recursive, semantic, fixed size) with metadata extraction → improves retrieval quality.

Embedding generation (with SentenceTransformers / OpenAI) + vector store (ChromaDB) → enables semantic similarity search.

Query rewriting & hybrid retrieval (semantic + MMR + reranking) → ensures high relevance of retrieved contexts.

LLM generation via local (Ollama) or cloud (OpenAI) models, with automatic citations → gives enterprise-ready answer generation with traceability.

Guardrails (PII detection, content filtering), observability (metrics, logging), evaluation frameworks (RAGAS metrics + custom) → supports governance, monitoring and safety.

API and UI layers (FastAPI backend + Streamlit UI), containerisation (Docker/Docker-Compose) → supports easy deployment and integration.`,
      technicalArchitecture: `Ingestion & Chunking: Document loaders (PDFLoader, HTMLLoader, WebsiteLoader) select correct loader automatically. Chunkers (FixedSizeChunker, SemanticChunker, RecursiveChunker) break documents into meaningful units; metadata extractor pulls keywords/entities.

Embedding & Vector Storage: Embeddings generated using locally-run SentenceTransformers (or optionally OpenAI) then stored in ChromaDB. Vector store supports similarity search and MMR-based retrieval.

Retrieval Pipeline: QueryRewriter first improves the user query (rephrase/decompose). HybridRetriever then performs both semantic and traditional retrieval. Reranker (cross-encoder or BM25) reorders results for relevance.

LLM Integration & Generation: RAGPromptBuilder prepares prompts. System supports both Ollama (local) and OpenAI (cloud) generators. Generations include automatic extraction of citations from the retrieved context.

Safety, Observability & Evaluation: Guardrails module handles content filtering, PII detection. Metrics and logging modules enable structured logging, performance tracking, latency measurement (~3-5s end-to-end on benchmark).

Deployment & API / UI: REST API built on FastAPI with endpoints for ingestion, query, chat, evaluation. UI built on Streamlit for user-friendly interaction. Containerised with Docker and Docker-Compose for ease of deployment.`,
      impact: `Delivered a production-ready platform that enterprises can adopt for knowledge retrieval + GenAI workflows — significantly reducing time to insight and increasing answer accuracy.

Provided clients the ability to ingest varied content formats, apply semantic search + generative responses with citations, enabling more trustworthy answers and reducing risk of "hallucinations".

Allowed organisations to build GenAI functionality into customer-service, sales-enablement, internal knowledge-bases — creating improved service levels, faster response times, and reduced manual burden.

From a technical architecture viewpoint, established a blueprint for enterprise-grade GenAI systems — combining ingestion/ETL, semantic search, LLM orchestration, governance, monitoring, and deployment — which can be reused and scaled across domains (BFSI, retail, real-estate, aviation).`,
      whyItMatters: `It shows end-to-end thinking: Designed the system from document ingestion, through data-/knowledge preparation, embedding & vector architecture, retrieval, LLM orchestration, UI/API delivery and deployment.

It demonstrates the ability to build production-grade systems with enterprise features (safety/guardrails, observability, evaluation metrics).

It aligns perfectly with core skillset (AI & LLM architecture, data platforms, cloud engineering) — reinforcing expertise in GenAI solutions architecture.

It offers a strong story: not just building prototypes — delivering systems with measurable business value, technical rigour, and enterprise-scale readiness.`
    },
    {
      title: "GenAI Workflow Automation (BFSI)",
      description: "Designed and deployed GenAI workflow automation system for BFSI enabling LLM-driven document understanding, exception triage, and automated decisions.",
      tech: ["LLMs", "RAG", "Vector Search", "AWS", "Python", "Enterprise Integration"],
      github: "",
      demo: "",
      highlights: [
        "LLM-driven document understanding and processing",
        "Automated exception triage and decision workflows",
        "Integrated retrieval, grounding, and safety layers",
        "Improved processing speed and accuracy across high-volume operations",
        "Enterprise system integration with security and compliance"
      ]
    },
    {
      title: "Multi-Channel Intelligence Engine (Aviation)",
      description: "Built GenAI engine to process high-volume unstructured content and generate executive-ready summaries and insights.",
      tech: ["GenAI", "LLM", "NLP", "Sentiment Analysis", "Entity Extraction", "Cloud"],
      github: "",
      demo: "",
      highlights: [
        "High-volume unstructured content processing",
        "Executive-ready summaries and insights generation",
        "LLM components for synthesis and sentiment analysis",
        "Entity extraction and relationship mapping",
        "Reduced analysis time and improved operational responsiveness"
      ]
    },
    {
      title: "AI-Driven Sales Intelligence (Real Estate)",
      description: "Developed AI intelligence capability for meeting insights, customer intent signals, and contextual recommendations to boost sales productivity.",
      tech: ["LLM", "NLP", "Salesforce", "API Integration", "ML"],
      github: "",
      demo: "",
      highlights: [
        "Meeting insights and customer intent signal detection",
        "LLM-based summarization and scoring workflows",
        "Contextual recommendations for sales teams",
        "Secure API integration with CRM systems",
        "Boosted sales productivity and forecasting accuracy"
      ]
    },
    {
      title: "Medical Insights Engine (Pharma)",
      description: "Developed GenAI-driven insights engine to synthesize medical literature, HCP feedback, and market data into decision-ready intelligence.",
      tech: ["GenAI", "LLM", "Medical NLP", "Knowledge Graphs", "Python"],
      github: "",
      demo: "",
      highlights: [
        "Automated evidence summarization from medical literature",
        "HCP feedback analysis and synthesis",
        "Competitive insights and market intelligence",
        "Message refinement for medical-commercial alignment",
        "Faster strategic planning and decision-making"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Technology (M.Tech) in Computer Science",
      institution: "National Institute of Technology (NIT), Allahabad",
      location: "Allahabad, India",
      duration: "2014 - 2016",
      gpa: "CGPA: 9.3/10.0",
      achievements: [
        "Graduated with distinction",
        "Specialized in Machine Learning and Data Science"
      ]
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "SHIATS Allahabad",
      location: "Allahabad, India",
      duration: "2009 - 2013",
      gpa: "CGPA: 8.74/10.0",
      achievements: [
        "Strong academic performance",
        "Foundation in computer science and engineering"
      ]
    }
  ],

  certifications: [
    "AWS Certified Solutions Architect Associate",
    "AWS Certified Developer Associate",
    "AWS Certified Cloud Practitioner",
    "AWS Certified AI Practitioner",
    "IIITB PG Diploma in Artificial Intelligence",
    "Certified Scrum Master (CSM)",
    "SAS Certified Developer",
    "SAS Certified Statistical Business Analyst",
    "TIBCO Certified Associate (TCA) - Spotfire",
    "TIBCO Certified Associate (TCA) - Data Science",
    "Mastering Negotiations and Influence - ISB"
  ]
}
