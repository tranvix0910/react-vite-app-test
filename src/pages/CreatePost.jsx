import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Eye, Upload, Tag, Calendar, User } from 'lucide-react'

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    image: '',
    publishDate: '',
    author: 'Current User'
  })

  const [isPreview, setIsPreview] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPostData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Post data:', postData)
    alert('Post saved successfully!')
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // In a real app, you would upload to a server
      const imageUrl = URL.createObjectURL(file)
      setPostData(prev => ({
        ...prev,
        image: imageUrl
      }))
    }
  }

  const categories = [
    'Technology',
    'Development',
    'Design',
    'Business',
    'Tutorial',
    'News',
    'Opinion'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Create New Post</h1>
              <p className="text-gray-600 mt-2">Share your knowledge with the community</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setIsPreview(!isPreview)}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  isPreview 
                    ? 'bg-primary-100 text-primary-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Eye className="w-4 h-4 mr-2" />
                {isPreview ? 'Edit' : 'Preview'}
              </button>
              <button
                type="submit"
                form="create-post-form"
                className="btn-primary inline-flex items-center px-6 py-2"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Post
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isPreview ? (
          /* Editor View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form id="create-post-form" onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Post Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={postData.title}
                      onChange={handleInputChange}
                      required
                      className="input w-full text-lg"
                      placeholder="Enter an engaging title for your post..."
                    />
                  </div>

                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                      Excerpt
                    </label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      value={postData.excerpt}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="input w-full resize-none"
                      placeholder="Write a brief description of your post..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={postData.category}
                        onChange={handleInputChange}
                        required
                        className="input w-full"
                      >
                        <option value="">Select a category</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                        Tags (comma separated)
                      </label>
                      <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={postData.tags}
                        onChange={handleInputChange}
                        className="input w-full"
                        placeholder="react, javascript, tutorial"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Featured Image</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                      {postData.image ? (
                        <img
                          src={postData.image}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-10 h-10 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                      )}
                      <input
                        id="image-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  
                  <div>
                    <label htmlFor="image-url" className="block text-sm font-medium text-gray-700 mb-2">
                      Or enter image URL
                    </label>
                    <input
                      type="url"
                      id="image-url"
                      name="image"
                      value={postData.image}
                      onChange={handleInputChange}
                      className="input w-full"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Content Editor */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Content</h2>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Post Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={postData.content}
                    onChange={handleInputChange}
                    required
                    rows={20}
                    className="input w-full resize-none font-mono text-sm"
                    placeholder="Write your post content here... You can use HTML tags for formatting."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Tip: You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, etc. for formatting.
                  </p>
                </div>
              </div>

              {/* Publishing Options */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Publishing Options</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Publish Date
                    </label>
                    <input
                      type="datetime-local"
                      id="publishDate"
                      name="publishDate"
                      value={postData.publishDate}
                      onChange={handleInputChange}
                      className="input w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={postData.author}
                      onChange={handleInputChange}
                      required
                      className="input w-full"
                      placeholder="Author name"
                    />
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        ) : (
          /* Preview View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* Preview Header */}
            <div className="bg-primary-50 px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-primary-800">Preview Mode</h2>
              <p className="text-primary-600 text-sm">This is how your post will appear to readers</p>
            </div>

            {/* Preview Content */}
            <article className="p-8">
              {postData.image && (
                <img
                  src={postData.image}
                  alt={postData.title}
                  className="w-full h-64 object-cover rounded-lg mb-8"
                />
              )}

              <div className="mb-6">
                {postData.category && (
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {postData.category}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                {postData.title || 'Your Post Title'}
              </h1>

              <div className="flex items-center space-x-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{postData.author}</span>
                </div>
                {postData.publishDate && (
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{new Date(postData.publishDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              {postData.excerpt && (
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {postData.excerpt}
                </p>
              )}

              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: postData.content }} />
              </div>

              {postData.tags && (
                <div className="flex items-center space-x-2 mt-8 pt-8 border-t">
                  <Tag className="w-5 h-5 text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    {postData.tags.split(',').map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default CreatePost 