import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, Share2, Heart, MessageCircle, ArrowLeft, Tag } from 'lucide-react'
import { format } from 'date-fns'

const BlogPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(0)

  // Mock post data - in a real app, this would come from an API
  useEffect(() => {
    const mockPost = {
      id: parseInt(id),
      title: "The Future of Web Development: Trends to Watch in 2024",
      content: `
        <p>Web development is evolving at an unprecedented pace, with new technologies and frameworks emerging constantly. As we move through 2024, several key trends are shaping the future of how we build and interact with web applications.</p>
        
        <h2>1. AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is revolutionizing the development process. From code completion to automated testing, AI tools are becoming indispensable for modern developers. GitHub Copilot, Tabnine, and other AI-assisted coding tools are not just helping write code faster, but also improving code quality and reducing bugs.</p>
        
        <h2>2. Serverless Architecture Dominance</h2>
        <p>Serverless computing continues to gain momentum, offering developers the ability to build and deploy applications without managing infrastructure. This approach reduces costs, improves scalability, and allows teams to focus on core business logic rather than server management.</p>
        
        <h2>3. WebAssembly (WASM) Adoption</h2>
        <p>WebAssembly is opening new possibilities for web applications, enabling near-native performance for complex computations. Languages like Rust, C++, and Go can now run efficiently in browsers, expanding the potential for web-based applications.</p>
        
        <h2>4. Progressive Web Apps (PWAs) Evolution</h2>
        <p>PWAs continue to bridge the gap between web and native applications. With improved capabilities and better browser support, PWAs are becoming a viable alternative to traditional mobile apps for many use cases.</p>
        
        <h2>5. Micro-frontends Architecture</h2>
        <p>As applications grow in complexity, micro-frontends are becoming more popular. This architectural pattern allows teams to develop, deploy, and maintain different parts of a frontend application independently.</p>
        
        <h2>Conclusion</h2>
        <p>The future of web development is exciting and full of possibilities. By staying current with these trends and continuously learning, developers can build better, faster, and more user-friendly applications. The key is to embrace change while maintaining focus on fundamental principles of good software design.</p>
      `,
      author: "John Smith",
      date: new Date('2024-01-15'),
      readTime: "8 min read",
      category: "Technology",
      tags: ["Web Development", "AI", "Serverless", "WebAssembly", "PWA"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
      likes: 42,
      comments: 8
    }
    setPost(mockPost)
    setLikes(mockPost.likes)
  }, [id])

  const relatedPosts = [
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Learn modern patterns for React development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Design Systems: Creating Consistency",
      excerpt: "Build maintainable design systems",
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=400&h=300&fit=crop",
      readTime: "6 min read"
    }
  ]

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="-mt-32 relative z-10 bg-white rounded-lg shadow-xl p-8 mb-8"
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{format(post.date, 'MMMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isLiked 
                    ? 'bg-red-50 text-red-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes}</span>
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center space-x-2 mb-12"
        >
          <Tag className="w-5 h-5 text-gray-400" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t pt-12 mb-16"
        >
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/post/${relatedPost.id}`}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{relatedPost.excerpt}</p>
                  <span className="text-primary-600 font-medium text-sm">
                    {relatedPost.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Comments Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t pt-12 mb-16"
        >
          <div className="flex items-center space-x-2 mb-8">
            <MessageCircle className="w-6 h-6 text-gray-400" />
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              Comments ({post.comments})
            </h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Join the Discussion
            </h3>
            <p className="text-gray-600 mb-6">
              Share your thoughts and engage with other readers.
            </p>
            <button className="btn-primary">
              Leave a Comment
            </button>
          </div>
        </motion.section>
      </div>
    </article>
  )
}

export default BlogPost 