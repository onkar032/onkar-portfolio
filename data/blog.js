// Blog posts data - Add your AI articles here
// Currently empty - articles coming soon!
export const blogPosts = []

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

