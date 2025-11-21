// Blog posts data - Your AI articles from GenAI-Guide
export const blogPosts = [
  {
    id: 'agentic-systems',
    title: 'Agentic Systems: Building Autonomous AI Agents',
    excerpt: 'Deep dive into designing and implementing agentic AI systems that can plan, reason, and execute complex tasks autonomously in enterprise environments.',
    date: '2024-11-20',
    readTime: '12 min read',
    category: 'AI Architecture',
    tags: ['Agentic AI', 'Multi-Agent', 'Autonomous Systems', 'LLM'],
    image: '🤖',
    featured: true,
    content: `
# Agentic Systems: Building Autonomous AI Agents

Explore the architecture and implementation patterns for building autonomous AI agents that can plan, reason, and execute tasks.

## What are Agentic Systems?

Agentic systems represent a new paradigm in AI where models don't just respond to prompts, but actively plan and execute multi-step workflows.

## Key Components

### Planning & Reasoning
- Task decomposition
- Goal-oriented decision making
- Multi-step workflow execution

### Tool Integration
- External API calls
- Database operations
- Code execution capabilities

### Memory Systems
- Short-term working memory
- Long-term knowledge retention
- Context management

## Enterprise Applications

Agentic systems are transforming how enterprises automate complex workflows, from customer service to data analysis.

[View full guide on GitHub](https://github.com/onkar032/GenAI-Guide/tree/main/Agentic%20Systems)
    `
  },
  {
    id: 'prompt-injection',
    title: 'Prompt Injection: Security Vulnerabilities in LLM Applications',
    excerpt: 'Understanding and mitigating prompt injection attacks in production LLM systems. Essential security considerations for enterprise AI deployments.',
    date: '2024-11-15',
    readTime: '10 min read',
    category: 'AI Security',
    tags: ['Security', 'Prompt Injection', 'LLM Safety', 'Enterprise AI'],
    image: '🔒',
    featured: true,
    content: `
# Prompt Injection: Security Vulnerabilities in LLM Applications

A critical security concern for production LLM systems that every AI architect must understand.

## What is Prompt Injection?

Prompt injection is a security vulnerability where malicious users manipulate LLM inputs to bypass safety controls or extract sensitive information.

## Types of Attacks

### Direct Injection
Direct manipulation of user prompts to override system instructions.

### Indirect Injection
Attacks embedded in retrieved documents or external data sources.

## Mitigation Strategies

1. **Input Validation**: Strict filtering and sanitization
2. **Output Monitoring**: Real-time response analysis
3. **Privilege Separation**: Isolated execution contexts
4. **Content Filtering**: Multi-layer safety checks

## Enterprise Security Framework

Implementing defense-in-depth strategies for production LLM systems.

[View full guide on GitHub](https://github.com/onkar032/GenAI-Guide/tree/main/Prompt%20Injection)
    `
  },
  {
    id: 'ai-cybersecurity',
    title: 'AI in Cybersecurity: Threat Detection & Response',
    excerpt: 'Leveraging AI and machine learning for advanced cybersecurity threat detection, automated response, and security operations at enterprise scale.',
    date: '2024-11-10',
    readTime: '15 min read',
    category: 'AI & Security',
    tags: ['Cybersecurity', 'AI/ML', 'Threat Detection', 'Security Operations'],
    image: '🛡️',
    featured: true,
    content: `
# AI in Cybersecurity: Threat Detection & Response

How artificial intelligence is revolutionizing cybersecurity operations and threat detection at enterprise scale.

## AI-Powered Security Operations

### Threat Detection
- Anomaly detection using ML models
- Pattern recognition in network traffic
- Behavioral analysis of users and systems

### Automated Response
- Intelligent incident response
- Automated threat containment
- Self-healing security systems

## Use Cases

1. **Network Security**: Real-time traffic analysis
2. **Endpoint Protection**: Behavioral threat detection  
3. **SIEM Enhancement**: Intelligent log analysis
4. **Vulnerability Management**: Predictive security

## Enterprise Implementation

Best practices for deploying AI-powered security solutions in large organizations.

### Challenges
- False positive management
- Model drift and retraining
- Integration with existing security tools

### Success Factors
- Quality training data
- Continuous monitoring
- Human-in-the-loop validation

[View full guide on GitHub](https://github.com/onkar032/GenAI-Guide/blob/main/AI%20in%20Cybersecurity.md)
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

