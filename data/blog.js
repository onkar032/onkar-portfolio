// Blog posts data - Add your AI articles here
export const blogPosts = [
  {
    id: 'understanding-prompt-injection-attacks',
    title: 'Understanding Prompt Injection: The Silent Threat to AI Systems',
    excerpt: 'Explore the critical security vulnerability affecting Large Language Models. Learn how attackers exploit prompt injection, real-world examples, and essential defense strategies to protect AI-powered applications.',
    image: '🔐',
    category: 'AI Security',
    tags: ['LLM', 'Security', 'Prompt Engineering', 'AI Safety', 'Cybersecurity'],
    date: '2025-11-25',
    readTime: '12 min read',
    featured: true,
    content: `
      <div class="space-y-16">
        <!-- Introduction -->
        <div class="max-w-3xl">
          <p class="text-2xl leading-relaxed text-gray-900 font-light mb-8">
            As Large Language Models become deeply integrated into our digital infrastructure, a critical vulnerability has emerged that threatens the security and reliability of these systems.
          </p>

          <p class="text-lg leading-relaxed text-gray-600 mb-6">
            Prompt injection represents a fundamental security challenge in AI systems. Unlike traditional software vulnerabilities, this attack vector exploits the very nature of how LLMs process and interpret language, making it particularly difficult to defend against.
          </p>
        </div>

        <!-- What is Prompt Injection -->
        <div class="border-t border-gray-200 pt-16">
          <h2 class="text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
            What is Prompt Injection?
          </h2>
          
          <p class="text-xl leading-relaxed text-gray-600 mb-12 max-w-3xl">
            Prompt injection occurs when a malicious actor manipulates the input given to an LLM to control or subvert its intended behavior. By carefully crafting prompts, attackers can potentially compromise system integrity.
          </p>

          <div class="space-y-4">
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Bypass Safeguards</h4>
              <p class="text-base text-gray-600">Circumvent built-in safety measures and content filters</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Alter Outputs</h4>
              <p class="text-base text-gray-600">Generate harmful or unintended responses</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Extract Sensitive Data</h4>
              <p class="text-base text-gray-600">Access protected information and system prompts</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Hijack Functionality</h4>
              <p class="text-base text-gray-600">Force the model to perform unauthorized actions</p>
            </div>
          </div>
        </div>

        <!-- Types of Prompt Injection -->
        <div class="border-t border-gray-200 pt-16">
          <h2 class="text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
            Two Attack Vectors
          </h2>

          <div class="space-y-8">
            <!-- Direct Injection -->
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 class="text-2xl font-semibold text-gray-900 mb-3">
                Direct Prompt Injection
              </h3>
              <p class="text-base text-gray-600">
                The attacker directly embeds malicious commands into the input prompt, attempting to override the model's original instructions.
              </p>
            </div>

            <!-- Indirect Injection -->
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 class="text-2xl font-semibold text-gray-900 mb-3">
                Indirect Prompt Injection
              </h3>
              <p class="text-base text-gray-600">
                Attackers manipulate external content that the LLM retrieves and processes, poisoning the data source rather than the direct input.
              </p>
            </div>
          </div>
        </div>

        <!-- Real World Examples -->
        <div class="border-t border-gray-200 pt-16">
          <h2 class="text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
            Real-World Attack Scenarios
          </h2>

          <div class="space-y-10">
            <!-- Example 1 -->
            <div class="border-l-2 border-gray-900 pl-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Malicious Content in User Inputs
              </h3>
              <p class="text-base text-gray-600 mb-3">
                Customer support chatbots receive crafted inputs designed to override instructions and mislead users into revealing credentials.
              </p>
            </div>

            <!-- Example 2 -->
            <div class="border-l-2 border-gray-900 pl-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Code Assistance Tool Manipulation
              </h3>
              <p class="text-base text-gray-600 mb-3">
                AI code tools process malicious comments, potentially generating harmful code that introduces backdoors into production systems.
              </p>
            </div>

            <!-- Example 3 -->
            <div class="border-l-2 border-gray-900 pl-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Web-Integrated System Attacks
              </h3>
              <p class="text-base text-gray-600 mb-3">
                Chatbots fetch compromised web pages containing hidden instructions, inadvertently exposing sensitive customer data.
              </p>
            </div>

            <!-- Example 4 -->
            <div class="border-l-2 border-gray-900 pl-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Legal and Advisory System Hijacking
              </h3>
              <p class="text-base text-gray-600 mb-3">
                Legal advice systems receive manipulated instructions, potentially providing illegal advice and creating liability.
              </p>
            </div>

            <!-- Example 5 -->
            <div class="border-l-2 border-gray-900 pl-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Prompt Chaining Exploitation
              </h3>
              <p class="text-base text-gray-600 mb-3">
                Multi-step AI systems propagate malicious instructions through each stage, compromising the entire process.
              </p>
            </div>

            <!-- Example 6 -->
            <div class="border-l-2 border-gray-900 pl-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Content Moderation Bypass
              </h3>
              <p class="text-base text-gray-600 mb-3">
                Attackers circumvent AI content filters, allowing harmful content to bypass safety measures.
              </p>
            </div>
          </div>

          <div class="bg-gray-50 border-l-2 border-gray-900 p-8 rounded-r-xl mt-12">
            <p class="text-base text-gray-900 leading-relaxed">
              <span class="font-semibold">Critical Insight:</span> These examples demonstrate that prompt injection isn't just a theoretical vulnerability—it's a real threat that can lead to data breaches, security compromises, and significant business liability, especially in systems with minimal human oversight.
            </p>
          </div>
        </div>

        <!-- Prevention Strategies -->
        <div class="border-t border-gray-200 pt-16">
          <h2 class="text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
            Defense Strategies
          </h2>

          <p class="text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl">
            While preventing prompt injection is challenging, implementing multiple layers of defense can significantly reduce risk.
          </p>

          <div class="space-y-12">
            <!-- Strategy 1 -->
            <div class="border-t border-gray-100 pt-8">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                Enforce Privilege Control
              </h3>
              <p class="text-base text-gray-600 mb-4">Ensure the LLM can only access backend systems when absolutely necessary.</p>
              <ul class="space-y-2 text-base text-gray-700">
                <li>• Assign API tokens with limited scope</li>
                <li>• Restrict access to critical systems</li>
                <li>• Follow principle of least privilege</li>
              </ul>
            </div>

            <!-- Strategy 2 -->
            <div class="border-t border-gray-100 pt-8">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                Human-in-the-Loop Verification
              </h3>
              <p class="text-base text-gray-600 mb-4">Introduce manual oversight for critical operations.</p>
              <ul class="space-y-2 text-base text-gray-700">
                <li>• Require approval for data deletion</li>
                <li>• Verify financial transactions</li>
                <li>• Review sensitive communications</li>
              </ul>
            </div>

            <!-- Strategy 3 -->
            <div class="border-t border-gray-100 pt-8">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                Segregate External Content
              </h3>
              <p class="text-base text-gray-600 mb-4">Distinguish between trusted instructions and untrusted data.</p>
              <ul class="space-y-2 text-base text-gray-700">
                <li>• Use markup to tag content sources</li>
                <li>• Separate user inputs from system instructions</li>
                <li>• Treat external data as untrusted</li>
              </ul>
            </div>

            <!-- Strategy 4 -->
            <div class="border-t border-gray-100 pt-8">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                Establish Trust Boundaries
              </h3>
              <p class="text-base text-gray-600 mb-4">Treat the LLM as untrusted within your security architecture.</p>
              <ul class="space-y-2 text-base text-gray-700">
                <li>• Never implicitly trust LLM outputs</li>
                <li>• Validate all outputs at boundaries</li>
                <li>• Flag suspicious behaviors</li>
              </ul>
            </div>

            <!-- Strategy 5 -->
            <div class="border-t border-gray-100 pt-8">
              <h3 class="text-2xl font-semibold text-gray-900 mb-4">
                Continuous Monitoring
              </h3>
              <p class="text-base text-gray-600 mb-4">Monitor and analyze LLM behavior to detect anomalies.</p>
              <ul class="space-y-2 text-base text-gray-700">
                <li>• Log all inputs and outputs</li>
                <li>• Review suspicious patterns</li>
                <li>• Set up automated alerts</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Key Takeaways -->
        <div class="border-t border-gray-200 pt-16">
          <h2 class="text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
            Key Takeaways
          </h2>
          
          <div class="space-y-4 max-w-3xl">
            <p class="text-lg text-gray-700">
              Prompt injection is a fundamental security challenge that exploits how LLMs process language.
            </p>
            
            <p class="text-lg text-gray-700">
              Both direct and indirect attacks pose significant risks to production systems.
            </p>
            
            <p class="text-lg text-gray-700">
              Defense requires a multi-layered approach: privilege control, human oversight, content segregation, trust boundaries, and monitoring.
            </p>
            
            <p class="text-lg text-gray-700">
              Organizations must never implicitly trust LLM outputs, especially in high-stakes scenarios.
            </p>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="border-t border-gray-200 pt-16">
          <h2 class="text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
            The Path Forward
          </h2>
          <div class="max-w-3xl space-y-6">
            <p class="text-xl text-gray-700">
              As Large Language Models become integrated into critical business processes, understanding and mitigating prompt injection vulnerabilities is essential for any organization deploying AI systems.
            </p>
            <p class="text-lg text-gray-600">
              Organizations must remain vigilant, continuously update security practices, and stay informed about developments in AI security.
            </p>
          </div>
        </div>
      </div>
    `
  }
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

