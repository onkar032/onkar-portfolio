// Onkar Dubey - Professional Resume Data
export const resumeData = {
  personal: {
    name: "Onkar Dubey",
    title: "AI & LLM Solutions Architect",
    tagline: "Over a decade crafting AI products and delivering impactful enterprise solutions.",
    email: "Onkar032@gmail.com",
    phone: "+91 XXX XXX XXXX",
    location: "India",
    linkedin: "https://www.linkedin.com/in/onkar-dubey-10768275/",
    github: "https://github.com/onkar032"
  },

  about: {
    summary: `Distinguished AI Solutions Architect and GenAI Leader with 10+ years of experience architecting and delivering transformative AI systems for Fortune 500 enterprises. Expert in designing production-grade LLM applications, RAG architectures, multi-agent systems, and enterprise AI platforms across BFSI, aviation, retail, real estate, and pharmaceutical industries. Proven track record of partnering with C-suite executives to define AI strategy, establish governance frameworks, and deliver scalable solutions that drive measurable business outcomes. Deep expertise in end-to-end AI system design—from data architecture and LLM orchestration to MLOps, evaluation frameworks, and secure enterprise deployment across AWS, GCP, and Azure ecosystems.`,
    
    highlights: [
      "Strategic AI advisor to CXOs and enterprise leadership teams",
      "Expert in GenAI, LLMs, RAG architectures, multi-agent systems, and vector databases",
      "Architected enterprise AI platforms serving millions of users with measurable ROI",
      "Led 15+ large-scale AI transformations across BFSI, aviation, retail, and pharma sectors",
      "AWS Certified Solutions Architect, Developer, and AI Practitioner"
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
    "AI & GenAI": ["LLMs (GPT, Llama)", "RAG Architecture", "Prompt Engineering", "Embeddings", "Vector Databases (Pinecone, FAISS, ChromaDB)", "LangChain", "LangGraph", "CrewAI", "LangSmith", "TruLens", "Function Calling", "Multi-Agent Systems"],
    "Machine Learning": ["Scikit-learn", "TensorFlow", "PyTorch", "Feature Engineering", "Model Optimization", "MLOps", "Drift Detection", "Model Monitoring"],
    "Languages": ["Python", "SQL", "JavaScript", "Java", "R", "SAS"],
    "Cloud Platforms": ["AWS (SageMaker, Lambda, Glue, S3, EC2)", "Azure (ADF, Synapse)", "GCP (BigQuery, Vertex AI)", "Multi-Cloud Architecture"],
    "Data Engineering": ["Apache Airflow", "dbt", "Apache Kafka", "Apache Spark", "Databricks", "ETL/ELT", "Data Pipelines", "Streaming"],
    "DevOps & Infrastructure": ["Docker", "Kubernetes", "Terraform", "CI/CD", "Microservices", "Serverless", "API Engineering", "Event-Driven Architecture"],
    "Salesforce": ["Einstein AI", "Salesforce Platform", "Apex", "LWC", "Integration", "Custom Development"],
    "Analytics & BI": ["Tableau", "Power BI", "CRM Analytics", "SQL Analytics", "KPI Modeling", "Dashboards", "Data Visualization"],
    "API & Integration": ["FastAPI", "REST APIs", "GraphQL", "Webhooks", "Message Queues", "Event Streaming"]
  },

  projects: [
    {
      title: "Enterprise RAG System",
      description: "Production-grade Retrieval Augmented Generation system with document ingestion, semantic search, LLM integration, and embedded chat widget for intelligent Q&A.",
      tech: ["Python", "FastAPI", "ChromaDB", "Streamlit", "Next.js", "LangChain", "OpenAI", "Docker"],
      github: "https://github.com/onkar032/enterprise-rag-system",
      demo: "",
      highlights: [
        "Website crawling with intelligent chunking and metadata extraction",
        "Semantic search with query rewriting and MMR diversity",
        "Cross-encoder reranking for improved retrieval accuracy",
        "Evaluation framework using RAGAS metrics",
        "Docker deployment with FastAPI backend and Streamlit UI",
        "Embedded AI chat widget with conversational interface"
      ]
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
