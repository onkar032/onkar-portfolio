// Blog posts data - Add your AI articles here
export const blogPosts = [
  {
    id: 'enterprise-rag-systems',
    title: 'Building Production-Ready RAG Systems for Enterprise',
    excerpt: 'A comprehensive guide to architecting retrieval-augmented generation systems that scale across Fortune 500 organizations.',
    date: '2024-11-20',
    readTime: '8 min read',
    category: 'RAG Architecture',
    tags: ['RAG', 'LLM', 'Enterprise AI', 'Vector Databases'],
    image: '🏗️',
    featured: true,
    content: `
# Building Production-Ready RAG Systems for Enterprise

Enterprise RAG systems require careful architectural decisions...

## Key Challenges

1. **Scale**: Handling millions of documents
2. **Performance**: Sub-second query latency
3. **Accuracy**: High retrieval precision
4. **Security**: Enterprise-grade compliance

## Architecture Principles

### Vector Database Selection
- Pinecone for managed simplicity
- Weaviate for hybrid search
- ChromaDB for self-hosted

### Chunking Strategies
...
    `
  },
  {
    id: 'llm-evaluation-frameworks',
    title: 'LLM Evaluation Frameworks: Beyond Simple Metrics',
    excerpt: 'How to build comprehensive evaluation systems for production LLM applications using advanced metrics and human feedback.',
    date: '2024-11-15',
    readTime: '10 min read',
    category: 'MLOps',
    tags: ['LLM', 'Evaluation', 'MLOps', 'Quality'],
    image: '📊',
    featured: true,
    content: `
# LLM Evaluation Frameworks

Evaluating LLM performance goes beyond accuracy scores...
    `
  },
  {
    id: 'multi-agent-systems',
    title: 'Designing Multi-Agent LLM Systems',
    excerpt: 'Practical patterns for orchestrating multiple AI agents to solve complex enterprise workflows.',
    date: '2024-11-10',
    readTime: '12 min read',
    category: 'AI Architecture',
    tags: ['Multi-Agent', 'LangGraph', 'CrewAI', 'Orchestration'],
    image: '🤖',
    featured: false,
    content: `
# Multi-Agent LLM Systems

Complex tasks require agent collaboration...
    `
  },
]

export function getBlogPost(id) {
  return blogPosts.find(post => post.id === id)
}

export function getFeaturedPosts() {
  return blogPosts.filter(post => post.featured)
}

export function getPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category)
}

export function getAllCategories() {
  return [...new Set(blogPosts.map(post => post.category))]
}

