import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import GradientText from './GradientText'

export default function WhatIDo() {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (serviceIndex, subsectionIndex) => {
    const key = `${serviceIndex}-${subsectionIndex}`
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }
  const services = [
    {
      title: "Generative AI & LLM Engineering",
      subsections: [
        {
          subtitle: "Enterprise-Scale GenAI Solutions",
          items: [
            "Large-scale LLM integrations across Salesforce, AWS, Azure, and multi-cloud ecosystems",
            "Retrieval-Augmented Generation (RAG) pipelines using embeddings, vector search, hybrid retrieval",
            "Knowledge-grounded reasoning for CRM, service, and sales workflows",
            "Multi-channel LLM experiences via APIs, workflow engines, backend services, and event-driven architectures"
          ]
        },
        {
          subtitle: "Prompting, Safety & Governance",
          items: [
            "Prompt orchestration layers, reusable prompt libraries, and evaluation pipelines",
            "Safety guardrails for hallucination reduction, content filtering, redaction, and policy compliance",
            "Governance frameworks aligned with enterprise risk controls and regulatory requirements"
          ]
        },
        {
          subtitle: "Document Intelligence & Automation",
          items: [
            "LLM-powered document extraction, verification, validation, and reasoning",
            "Automated workflows for summaries, replies, routing, classification, and decision support",
            "IDP + LLM fusion architectures for high-accuracy document workflows"
          ]
        }
      ]
    },
    {
      title: "AI Architecture, ML Systems & MLOps",
      subsections: [
        {
          subtitle: "AI/ML Platform Architecture",
          items: [
            "End-to-end ML lifecycle: feature pipelines, model training, tuning, serving, monitoring",
            "ML gateway architecture for unified inference across LLMs, ML models, and rule engines",
            "Scalable compute workflows using Databricks, SageMaker, EMR, and Azure ML"
          ]
        },
        {
          subtitle: "MLOps & Productionization",
          items: [
            "CI/CD pipelines for ML models, containerized inference, automated retraining",
            "Drift detection, performance monitoring, and model governance frameworks",
            "High-availability architectures for mission-critical AI systems"
          ]
        }
      ]
    },
    {
      title: "Data Engineering & Modern Data Platforms",
      subsections: [
        {
          subtitle: "Data Platform Architecture",
          items: [
            "Data lakes, lakehouses, Delta Lake, Apache Iceberg implementations",
            "Multi-cloud architectures enabling analytics, ML, and GenAI workloads",
            "High-volume batch, micro-batch, and streaming ingestion frameworks",
            "Scalable data models for BI, ML, and operational intelligence"
          ]
        },
        {
          subtitle: "ETL/ELT & Orchestration",
          items: [
            "Pipelines built using SQL, Python, Spark, dbt",
            "Workflow orchestration using Airflow, AWS Glue, Azure Data Factory, Prefect",
            "Schema validation, lineage, metadata-driven execution, automated deployments"
          ]
        },
        {
          subtitle: "Data Warehousing & Analytics",
          items: [
            "Snowflake, BigQuery, Redshift, Synapse architectures",
            "Star schema, snowflake schema, and dimensional modeling",
            "Query tuning, workload optimization, and cost governance"
          ]
        },
        {
          subtitle: "Real-Time & Streaming Systems",
          items: [
            "Event-driven architectures using Kafka, Kinesis, Pub/Sub",
            "Low-latency pipelines for monitoring, ML features, fraud detection, and operations",
            "Integration of streaming data into RAG, LLM, and retrieval systems"
          ]
        }
      ]
    },
    {
      title: "Cloud Architecture, Integrations & Enterprise Engineering",
      subsections: [
        {
          subtitle: "System Architecture",
          items: [
            "Microservices, serverless workflows, event-driven systems, API-first architectures",
            "High-reliability systems supporting large-scale CRM, ERP, and operational workloads"
          ]
        },
        {
          subtitle: "Enterprise Integrations",
          items: [
            "Salesforce integrations across LWC, Apex, Flows, middleware, and external platforms",
            "Backend integrations using REST, GraphQL, webhooks, and event buses",
            "Multi-system orchestration across identity, analytics, data platforms, and workflow engines"
          ]
        }
      ]
    },
    {
      title: "Strategy, Leadership & Enterprise Delivery",
      subsections: [
        {
          subtitle: "AI & Data Strategy",
          items: [
            "AI transformation roadmaps aligned to business KPIs",
            "Governance structures covering safety, compliance, risk, and performance",
            "ROI-driven value realization frameworks and adoption programs"
          ]
        },
        {
          subtitle: "Cross-Functional Leadership",
          items: [
            "Leadership across AI, data engineering, cloud engineering & product teams",
            "Enterprise rollout: onboarding, capability building, workshops, hands-on training",
            "Alignment with CXOs, IT leadership, engineering, and product stakeholders"
          ]
        }
      ]
    }
  ]

  return (
    <div className="flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight">
          <GradientText>What I Do</GradientText>
        </h2>
        <div className="w-12 h-0.5 bg-apple-blue mb-8"></div>

        <p className="text-base text-apple-subtext leading-relaxed mb-10">
          Deliver enterprise-grade AI, data, and cloud engineering solutions that combine LLMs, automation, and modern data platforms to power intelligent, scalable, and mission-critical business workflows.
        </p>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-apple-text mb-4">{service.title}</h3>
              
              <div className="space-y-3">
                {service.subsections.map((subsection, subIndex) => {
                  const sectionKey = `${index}-${subIndex}`
                  const isOpen = openSections[sectionKey]
                  
                  return (
                    <div key={subIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(index, subIndex)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-apple-lightgray transition-colors duration-200"
                      >
                        <h4 className="text-sm font-medium text-apple-blue text-left">{subsection.subtitle}</h4>
                        <motion.svg
                          className="w-5 h-5 text-apple-blue flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ul className="space-y-2 px-4 py-3 bg-gray-50">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 text-sm text-apple-subtext">
                                  <span className="text-apple-blue mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}

          {/* Enterprise Impact */}
          <motion.div
            className="mt-10 p-6 bg-apple-lightgray rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-apple-text mb-3">Enterprise Impact</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-apple-subtext">
                <span className="text-apple-blue mt-1">✓</span>
                <span>Scalable AI and data platforms powering mission-critical business operations</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-apple-subtext">
                <span className="text-apple-blue mt-1">✓</span>
                <span>High-accuracy automated workflows replacing manual processing effort</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-apple-subtext">
                <span className="text-apple-blue mt-1">✓</span>
                <span>Real-time decision systems improving operational throughput across channels</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-apple-subtext">
                <span className="text-apple-blue mt-1">✓</span>
                <span>A unified AI + data foundation enabling GenAI adoption at enterprise scale</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

